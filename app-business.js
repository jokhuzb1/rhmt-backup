// Imports for sections and scripts
import { NavbarSection } from "./sections/navbar.js";
import { HowItWorksBusinessSection } from "./sections/how-it-works-business.js";
import { FooterAnimation } from "./scripts/gsap/footer-animation.js";
import { FooterSection } from "./sections/footer.js";
import { HowItWorksBusinessAnimation } from "./scripts/gsap/how-it-workds-business-animations.js";
import { BusinessAdvantages } from "./sections/business-advantages.js";
import { SelfService } from "./sections/self-service.js";
import { BusinessFaqSection } from "./sections/business-faq.js";
import { HeaderAnimation } from "./scripts/gsap/header-animation.js";
import { HeaderSection } from "./sections/business-header.js";
import { InteractWithDom } from "./scripts/dom-interact.js";
import { MultiLanguage } from "./scripts/multi-lang.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const { starLoader } = await import("./scripts/gsap/start-loader.js");

    const functions = [
      NavbarSection,
      HeaderSection,
      HeaderAnimation,
      HowItWorksBusinessSection,
      HowItWorksBusinessAnimation,
      BusinessAdvantages,
      SelfService,
      // BusinessFaqSection,
      FooterSection,
      InteractWithDom,
      MultiLanguage,
      FooterAnimation,
    ];

    const totalFunctions = functions.length;
    await starLoader(totalFunctions, functions);

    console.log("All scripts loaded successfully!");
  } catch (error) {
    console.error("Error during app loading:", error);
  }
});
