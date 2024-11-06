// Imports for sections and scripts
import { NavbarSection } from "./sections/navbar.js";
import { HowItWorksBusinessSection } from "./sections/how-it-works-business.js";
import { InteractWithDom } from "./scripts/dom-interact.js";
import { FooterAnimation } from "./scripts/gsap/footer-animation.js";
import { FooterSection } from "./sections/footer.js";
import { HowItWorksBusinessAnimation } from "./scripts/gsap/how-it-workds-business-animations.js";
import { MultiLanguage } from "./scripts/multi-lang.js";
import { BusinessAdvantages } from "./sections/business-advantages.js";
import { SelfService } from "./sections/self-service.js";
import { BusinessFaqSection } from "./sections/business-faq.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    NavbarSection();
    MultiLanguage();
    HowItWorksBusinessSection();
    HowItWorksBusinessAnimation();
    BusinessAdvantages();
    SelfService();
    BusinessFaqSection();
    FooterSection();
    FooterAnimation();
    InteractWithDom();

    console.log("All scripts loaded successfully!");
  } catch (error) {
    console.error("Error during app loading:", error);
  }
});
