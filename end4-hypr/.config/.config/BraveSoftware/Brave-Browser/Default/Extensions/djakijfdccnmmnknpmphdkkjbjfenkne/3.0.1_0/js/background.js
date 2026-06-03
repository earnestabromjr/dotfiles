import { gPhotoService } from "./GPhotoService.js";
import { WelcomePage } from "./welcome.js";
const mnuSaveId = "save-gg-photos-save";
class BackgroundPage {
    initialize() {
        new WelcomePage();
        this.createCtxMenu();
        // Check for login
        // gPhotoService.requestLoginIfNeededAsync();
    }
    createCtxMenu() {
        chrome.contextMenus.onClicked.addListener((info, tab) => {
            if (info.menuItemId == mnuSaveId) {
                this.onSavePhotoClicked(info, tab);
            }
        });
        // No need async
        chrome.contextMenus.removeAll(() => {
            chrome.contextMenus.create({
                id: mnuSaveId,
                // There is currently a bug where chrome.i18n.getMessage is not available here
                // See https://groups.google.com/a/chromium.org/g/chromium-extensions/c/dG6JeZGkN5w
                //title: chrome.i18n.getMessage("SaveToMenu"),
                title: "Save to Google Photos",
                contexts: ["image"],
            });
        });
    }
    async onSavePhotoClicked(info, tab) {
        const url = info.srcUrl;
        const tabId = tab.id;
        await chrome.scripting.executeScript({
            files: ["/js/SaveImageInject.js"],
            target: {
                tabId,
            },
        });
        chrome.tabs.sendMessage(tabId, {
            op: "save-image",
            url,
        }, (dataUrl) => this.savePhotoToGPhotos(tabId, url, dataUrl));
    }
    async savePhotoToGPhotos(tabId, url, dataUrl) {
        const name = this.getImageName(url);
        try {
            if (await gPhotoService.saveBlobToGooglePhotos(dataUrl, url, name)) {
                chrome.tabs.sendMessage(tabId, {
                    op: "save-ok",
                });
            }
        }
        catch (e) {
            console.error(e);
            chrome.tabs.sendMessage(tabId, {
                op: "save-failed",
                error: e,
            });
        }
    }
    getImageName(url) {
        const regexMatch = /[\w-]+.(jpg|png|jpeg|gif)/g.exec(url);
        if (regexMatch && regexMatch[0]) {
            return regexMatch[0];
        }
        return new URL(url).hostname;
    }
}
new BackgroundPage().initialize();
//# sourceMappingURL=background.js.map