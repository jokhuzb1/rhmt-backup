// Imports for sections and scripts
import { NavbarSection } from "./sections/navbar.js";
import { HeaderSection } from "./sections/header.js";
import { PayReviewSection } from "./sections/pay-review.js";
import { HowItWorksSection } from "./sections/how-it-works.js";
import { AdvantagesSection } from "./sections/advantages.js";
import { PosSystemsSection } from "./sections/pos-systems.js";
import { PartnersSection } from "./sections/partners.js";
import { PosSystemsMobileSection } from "./sections/pos-systems-mobile.js";
import { FaqSection } from "./sections/faq.js";
import { FooterSection } from "./sections/footer.js";
import { Contacts } from "./sections/contact.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const { InteractWithDom } = await import("./scripts/dom-interact.js");
    const { Gsap } = await import("./scripts/gsap/index.js");
    const { MultiLanguage } = await import("./scripts/multi-lang.js");
    const { starLoader } = await import("./scripts/gsap/start-loader.js");

    const functions = [
      NavbarSection,
      HeaderSection,
      PayReviewSection,
      HowItWorksSection,
      AdvantagesSection,
      PosSystemsSection,
      PartnersSection,
      PosSystemsMobileSection,
      FaqSection,
      FooterSection,
      MultiLanguage,
      Contacts,
      Gsap,
      InteractWithDom,
    ];

    const totalFunctions = functions.length;
    await starLoader(totalFunctions, functions);

    console.log("All scripts loaded successfully!");
  } catch (error) {
    console.error("Error during app loading:", error);
  }
});
