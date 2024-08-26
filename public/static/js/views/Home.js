import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("businessdev.");
    }
    async getHtml() {   

        return `
            <section class="banner">
            <div class="banner-container">
                <h1>Business lives Matter</h1>
                <p>Our mission is to become a leading company in connecting businesses and driving 
innovation by providing cutting-edge solutions to everyday business problems. We are committed to ensuring businesses thrive in the modern world by offering unparalleled support and advocacy.</p>
                <div class="button_link">
                    <a href="/coming" class="nav__link" data-link >Learn more...</a>
                </div>
            </div>
            <div class="illustration">
                <img src="https:/\/illustrations.popsy.co/gray/home-office.svg" alt="">
            </div>
        </section>
        <section class="prices">
            <div class="banner-container">
                <h1>No to outdated infrastructure</h1>
                <p>Businesses are seeking innovative ways to remain competitive and adapt to technological advancements. We collaborate with professional individuals from all over the world to make this possible.</p>
                <div class="button_link">
                    <a href="/coming" class="nav__link" data-link >Learn more...</a>
                </div>
            </div>
            <div class="illustration">
                <img src="https:/\/illustrations.popsy.co/gray/designer.svg" alt="">
            </div>
        </section>
        <section class="social-media solutions">
            <div class="banner-container">
                <h1>Solutions Architecture</h1>
                <p>We aim to revolutionize the way businesses innovate and solve problems. Identifying and analyzing business problems, providing tailored solutions to address specific challenges, and specializing modern business practices.</p>
                <div class="button_link">
                    <a href="/coming" class="nav__link" data-link >Learn more...</a>
                </div>
            </div>
            <div class="illustration">
                <img src="https:/\/illustrations.popsy.co/gray/keynote-presentation.svg" alt="">
            </div>
        </section>
        <section class="social-media">
            <div class="banner-container">
                <h1>Graduate Support</h1>
                <p>We also focus on job placement and entrepreneurship support for recent graduates. We support recent graduates in securing employment or starting their own businesses.  </p>
                <div class="button_link">
                    <a href="/coming" class="nav__link" data-link >Learn more...</a>
                </div>
            </div>
            <div class="copy">
                <p>&copy; 2024 businessdev. All rights reserved.</p>
            </div>
            <div class="illustration">
                <img src="https:/\/illustrations.popsy.co/gray/student-going-to-school.svg" alt="">
            </div>
        </section>
            
        `;
    }
}

