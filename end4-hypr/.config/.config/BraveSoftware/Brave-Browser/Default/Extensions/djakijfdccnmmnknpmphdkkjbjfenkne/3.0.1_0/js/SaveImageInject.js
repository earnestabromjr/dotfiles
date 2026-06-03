window.SaveToGooglePhotosInject = window.SaveToGooglePhotosInject || new (class {
    constructor() {
        chrome.runtime.onMessage.addListener((message, sender, sendRes) => this.onMessage(message, sender, sendRes));
    }
    onMessage(message, sender, sendRes) {
        if (!message.op) {
            return false;
        }
        switch (message.op) {
            case "save-image":
                const url = message.url;
                if (!url) {
                    throw new Error("Invalid message");
                }
                (async () => {
                    const img = await this.getImageAsync(url);
                    const dataUrl = this.getDataUrl(img);
                    sendRes(dataUrl);
                })();
                // Handle asynchronously
                return true;
            case "save-ok":
                alert(chrome.i18n.getMessage("SaveSuccessful"));
                break;
            case "save-failed":
                alert(chrome.i18n.getMessage("SaveFailed"));
                break;
        }
    }
    getImageAsync(url) {
        return new Promise((r, rej) => {
            const img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = () => r(img);
            img.onerror = rej;
            img.src = url;
        });
    }
    getDataUrl(img) {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL();
    }
});
//# sourceMappingURL=SaveImageInject.js.map