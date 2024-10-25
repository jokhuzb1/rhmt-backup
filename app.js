import { NavbarSection } from "./sections/navbar.js";
import { HeaderSection } from "./sections/header.js";
import { PayReviewSection } from "./sections/pay-review.js";
import { PayReviewMobileSection } from "./sections/pay-review-mobile.js";
import { HowItWorksSection } from "./sections/how-it-works.js";
import { ScanQrSection } from "./sections/scan-qr.js";
import { AdvantagesSection } from "./sections/advantages.js";
import { PosSystemsSection } from "./sections/pos-systems.js";
import { PartnersSection } from "./sections/partners.js";
import { PosSystemsMobileSection } from "./sections/pos-systems-mobile.js";
import { FaqSection } from "./sections/faq.js";
import { ContactUsSection } from "./sections/contact-us.js";
import { FooterSection } from "./sections/footer.js";

import { InteractWithDom } from "./scripts/dom-interact.js";
import { Gsap } from "./scripts/gsap.js";
import { MultiLanguage } from "./scripts/multi-lang.js";
import { SendContact } from "./scripts/send-contact.js";

// Ensure scripts load in the correct order
document.addEventListener("DOMContentLoaded", async () => {
  try {
    console.log("Starting app...");

    await NavbarSection();
    console.log("Navbar loaded.");
    await HeaderSection();
    console.log("Header loaded.");
    await PayReviewSection();
    console.log("pay review loaded.");
    await HowItWorksSection();
    console.log("How it works loaded.");
    await PayReviewMobileSection();
    console.log("pay review mobiles loaded.");
    await ScanQrSection();
    console.log("scan qr loaded.");
    await AdvantagesSection();
    console.log("advantages loaded.");
    await PosSystemsSection();
    console.log("pos systems loaded.");
    await PartnersSection();
    console.log("partners loaded.");
    await PosSystemsMobileSection();
    console.log("pos systems  mobiel loaded.");
    await FaqSection();
    console.log("faq loaded.");
    await ContactUsSection();
    console.log("contact us loaded.");
    await FooterSection();
    console.log("footer loaded.");

    await Gsap();
    await MultiLanguage();
    await SendContact();
    console.log("Scripts loaded in parallel.");

    await InteractWithDom();
    console.log("DOM interactions initialized.");
  } catch (error) {
    console.error("Error during app loading:", error);
  }
});
