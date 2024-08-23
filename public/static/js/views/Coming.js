import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Coming Soon");
    }

    async getHtml() {
        console.log("wejjaaaaj");
        return `
            <section class="coming">
            <div class="banner-container illu">
                <div class="illustration2">
                <img src="https:/\/illustrations.popsy.co/amber/page-under-construction.svg" alt="">
                </div>
                <h1 style="">Comming Soon!</h1>
            </div>
            <div class="copy">
                <p>&copy; 2024 businessdev. All rights reserved.</p>
            </div>
            
        </section>
        `;
    }
}
