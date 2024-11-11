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

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const { InteractWithDom } = await import("./scripts/dom-interact.js");
    const { MultiLanguage } = await import("./scripts/multi-lang.js");
    const { starLoader } = await import("./scripts/gsap/start-loader.js");

    const functions = [
      NavbarSection,
      HowItWorksBusinessSection,
      BusinessAdvantages,
      SelfService,
      // BusinessFaqSection,
      FooterSection,
      HowItWorksBusinessAnimation,
      HeaderAnimation,
      MultiLanguage,
      FooterAnimation,
      InteractWithDom,
    ];

    const totalFunctions = functions.length;
    await starLoader(totalFunctions, functions);

    console.log("All scripts loaded successfully!");
  } catch (error) {
    console.error("Error during app loading:", error);
  }
});
