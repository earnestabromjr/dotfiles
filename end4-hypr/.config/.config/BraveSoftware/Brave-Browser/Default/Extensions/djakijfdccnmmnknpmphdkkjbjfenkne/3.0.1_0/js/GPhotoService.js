class GPhotoService {
    async saveBlobToGooglePhotos(dataUrl, url, imgName) {
        const token = await this.requestLoginIfNeededAsync();
        if (!token) {
            return false;
        }
        const uploadToken = await this.uploadAsync(dataUrl, token);
        await this.createMediaItemAsync(uploadToken, "From " + url, imgName, token);
        return true;
    }
    async requestLoginIfNeededAsync() {
        try {
            return await gPhotoService.getTokenAsync(false);
        }
        catch {
            chrome.tabs.create({
                url: "/login.html",
            });
            return null;
        }
    }
    getTokenAsync(interactive = false) {
        return new Promise((r, rej) => {
            chrome.identity.getAuthToken({
                interactive,
            }, token => {
                if (token) {
                    r(token);
                }
                else {
                    rej(chrome.runtime.lastError);
                }
            });
        });
    }
    async uploadAsync(dataUrl, token) {
        const headers = {
            Authorization: "Bearer " + token,
            "Content-Type": "application/octet-stream",
            "X-Goog-Upload-Content-Type": "image/png",
            "X-Goog-Upload-Protocol": "raw",
        };
        const body = await this.getBlobAsync(dataUrl);
        const res = await fetch("https://photoslibrary.googleapis.com/v1/uploads", {
            method: "POST",
            headers,
            body,
        });
        const bodyText = await res.text();
        if (res.ok) {
            return bodyText; // Token
        }
        else {
            throw new Error(bodyText);
        }
    }
    async createMediaItemAsync(uploadToken, desc, fileName, authToken) {
        const headers = {
            Authorization: "Bearer " + authToken,
            "Content-Type": "application/json",
        };
        // Desc limitation is 1,000 characters
        if (desc.length > 1000) {
            desc = desc.substring(0, 999) + "…";
        }
        const body = JSON.stringify({
            newMediaItems: [
                {
                    "description": desc,
                    "simpleMediaItem": {
                        "fileName": fileName,
                        "uploadToken": uploadToken,
                    }
                },
            ],
        });
        const res = await fetch("https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate", {
            method: "POST",
            headers,
            body,
        });
        const bodyText = await res.text();
        if (res.ok) {
            return bodyText; // Token
        }
        else {
            throw new Error(bodyText);
        }
    }
    async getBlobAsync(dataUrl) {
        return await fetch(dataUrl).then(r => r.blob());
    }
}
export const gPhotoService = new GPhotoService();
//# sourceMappingURL=GPhotoService.js.map