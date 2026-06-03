// Функция для вставки текста через прямое изменение значения
function insertTextDirectly(text) {
  try {
    const element = document.activeElement;
    
    if (typeof element.value !== 'undefined') {
      // Get current cursor position
      const startPos = element.selectionStart;
      const endPos = element.selectionEnd;
      
      // If there's selected text, replace it
      if (startPos !== endPos) {
        const beforeText = element.value.substring(0, startPos);
        const afterText = element.value.substring(endPos);
        element.value = beforeText + text + afterText;
        
        // Set cursor after inserted text
        element.selectionStart = startPos + text.length;
        element.selectionEnd = startPos + text.length;
      } else {
        // If no selected text, insert at cursor position
        const beforeText = element.value.substring(0, startPos);
        const afterText = element.value.substring(startPos);
        element.value = beforeText + text + afterText;
        
        // Set cursor after inserted text
        element.selectionStart = startPos + text.length;
        element.selectionEnd = startPos + text.length;
      }
      
      // Trigger multiple events to notify page scripts about the change
      const events = ['input', 'change', 'keyup', 'paste'];
      events.forEach(eventType => {
        const event = new Event(eventType, { bubbles: true });
        element.dispatchEvent(event);
      });
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.log('Direct insertion method failed:', error);
    return false;
  }
}

// Функция для вставки текста в contentEditable элементы
function insertTextInContentEditable(text) {
  try {
    const element = document.activeElement;
    
    if (element.isContentEditable) {
      // Get selection
      const selection = window.getSelection();
      
      // If there's a selection
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        
        // If there's selected text, delete it
        range.deleteContents();
        
        // Create text node with our text
        const textNode = document.createTextNode(text);
        
        // Insert text
        range.insertNode(textNode);
        
        // Set cursor after inserted text
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
        
        // Trigger events
        const events = ['input', 'change', 'keyup'];
        events.forEach(eventType => {
          const event = new Event(eventType, { bubbles: true });
          element.dispatchEvent(event);
        });
        
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.log('ContentEditable insertion method failed:', error);
    return false;
  }
}

// Функция для вставки текста через execCommand
function insertTextViaExecCommand(text) {
  try {
    const element = document.activeElement;
    
    // Фокусируемся на элементе
    element.focus();
    
    // Пробуем использовать execCommand для вставки
    const success = document.execCommand('insertText', false, text);
    
    if (success) {
      // Триггерим события
      const events = ['input', 'change', 'keyup'];
      events.forEach(eventType => {
        const event = new Event(eventType, { bubbles: true });
        element.dispatchEvent(event);
      });
    }
    
    return success;
  } catch (error) {
    console.log('execCommand method failed:', error);
    return false;
  }
}

// Функция для вставки текста через Clipboard API
async function insertTextViaClipboard(text) {
  try {
    // Копируем текст в буфер обмена
    await navigator.clipboard.writeText(text);
    
    // Ждем немного, чтобы буфер обмена обновился
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Создаем событие вставки
    const pasteEvent = new ClipboardEvent('paste', {
      bubbles: true,
      cancelable: true,
      clipboardData: new DataTransfer()
    });
    
    // Отправляем событие вставки
    document.activeElement.dispatchEvent(pasteEvent);
    
    return true;
  } catch (error) {
    console.log('Clipboard API method failed:', error);
    return false;
  }
}

// Функция для показа уведомления
function showNotification(message) {
  // Создаем уведомление
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff9800;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: Arial, sans-serif;
    font-size: 14px;
    max-width: 300px;
    word-wrap: break-word;
    animation: slideIn 0.3s ease-out;
  `;
  
  // Добавляем CSS анимацию
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  notification.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 8px;">📋 Lorem Ipsum Generator</div>
    <div style="font-size: 12px; opacity: 0.9;">${message}</div>
  `;
  
  document.body.appendChild(notification);
  
  // Удаляем уведомление через 4 секунды
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, 4000);
}

// Message handler from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showNotification") {
    showNotification(message.message);
    sendResponse({ success: true });
    return true;
  }
  
  if (message.action === "insertText") {
    const text = message.text;
    
    // Проверяем, есть ли активный элемент для вставки
    if (!document.activeElement || 
        (!document.activeElement.tagName.match(/INPUT|TEXTAREA/) && 
         !document.activeElement.isContentEditable)) {
      sendResponse({ 
        success: false, 
        error: "No active element for text insertion" 
      });
      return true;
    }
    
    // Пробуем разные методы вставки по порядку
    let success = false;
    let method = '';
    
    // Метод 1: execCommand (работает в некоторых современных приложениях)
    if (!success) {
      success = insertTextViaExecCommand(text);
      if (success) method = 'execCommand';
    }
    
    // Метод 2: Прямая вставка (для обычных input/textarea)
    if (!success && typeof document.activeElement.value !== 'undefined') {
      success = insertTextDirectly(text);
      if (success) method = 'direct';
    }
    
    // Метод 3: Вставка в contentEditable элементы
    if (!success && document.activeElement.isContentEditable) {
      success = insertTextInContentEditable(text);
      if (success) method = 'contentEditable';
    }
    
    // Метод 4: Вставка через Clipboard API (для сложных приложений)
    if (!success) {
      insertTextViaClipboard(text).then(result => {
        if (result) {
          sendResponse({ success: true, method: 'clipboard' });
        } else {
          sendResponse({ success: false, method: 'clipboard_failed' });
        }
      });
      return true;
    }
    
    // Если один из первых методов сработал
    sendResponse({ success: true, method: method });
    return true;
  }
  
  return false;
}); 