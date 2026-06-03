import { gPhotoService } from "./GPhotoService.js";
class LoginPage {
    loader = document.querySelector(".loader");
    pnlTryAgain = document.querySelector(".pnl-try-again");
    pnlSuccess = document.querySelector(".section-success");
    pnlLogin = document.querySelector(".section-login");
    btnLogin = document.querySelector(".btn-login");
    init() {
        const homePage = chrome.runtime.getManifest().homepage_url;
        document.querySelectorAll("a[data-path]").forEach(a => {
            const path = a.getAttribute("data-path");
            a.setAttribute("href", new URL(path, homePage).toString());
        });
        document.body.loc();
        document.querySelector(".btn-again").addEventListener("click", () => this.attemptLoggingIn());
        this.btnLogin.addEventListener("click", () => this.attemptLoggingIn());
    }
    async attemptLoggingIn() {
        try {
            this.loader.classList.remove("d-none");
            this.btnLogin.classList.add("d-none");
            this.pnlTryAgain.classList.add("d-none");
            const token = await gPhotoService.getTokenAsync(true);
            if (token) {
                this.showSuccess();
            }
            else {
                throw new Error("Failed login");
            }
        }
        catch (e) {
            console.error(e);
            this.showError();
        }
    }
    showSuccess() {
        this.pnlSuccess.classList.remove("d-none");
        this.pnlLogin.classList.add("d-none");
    }
    showError() {
        this.pnlSuccess.classList.add("d-none");
        this.loader.classList.add("d-none");
        this.pnlTryAgain.classList.remove("d-none");
    }
}
new LoginPage().init();
//# sourceMappingURL=LoginPage.js.map