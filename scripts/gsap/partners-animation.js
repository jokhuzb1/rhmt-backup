const parentImageProps = [
  {
    className: "B&B",
    startLeft: "60%", // Moved 10% to the right
    midLeft: "15%", // Moved 10% to the right
    startTop: "50%",
    midTop: "-80px",
  },
  {
    className: "ARAB",
    startLeft: "60%", // Moved 10% to the right
    midLeft: "39%", // Moved 10% to the right
    startTop: "50%",
    midTop: "-160px",
  },
  {
    className: "TAPAYANKI",
    startRight: "30%", // Adjusted for wider spread
    midRight: "15%", // Moved 10% to the right
    startTop: "50%",
    midTop: "-160px",
  },
  {
    className: "FRANKLINS",
    startRight: "30%", // Adjusted for wider spread
    midRight: "-9%", // Moved 10% to the right
    startTop: "50%",
    midTop: "-80px",
  },
  {
    className: "SIROVNAYA",
    startLeft: "60%", // Moved 10% to the right
    midLeft: "15%", // Moved 10% to the right
    startTop: "50%",
    midTop: "300px", // Moved down more
  },
  {
    className: "NAVENERE",
    startLeft: "60%", // Moved 10% to the right
    midLeft: "63%", // Moved 10% to the right
    startTop: "50%",
    midTop: "380px", // Moved down more
  },
  {
    className: "ASSORTE",
    startRight: "30%", // Adjusted for wider spread
    midRight: "40%", // Moved 10% to the right
    startTop: "50%",
    midTop: "380px", // Moved down more
  },
  {
    className: "MIYASNOY",
    startRight: "30%", // Adjusted for wider spread
    midRight: "-9%", // Moved 10% to the right
    startTop: "50%",
    midTop: "300px", // Moved down more
  },
];

const removeElement = (element) => {
  if (element) element.remove();
};

const handleVisibility = (element, isVisible) => {
  element.style.visibility = isVisible ? "visible" : "hidden";
  element.style.opacity = isVisible ? "1" : "0";
};

export const PartnersAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const elements = {
        partnersSection: document.querySelector(".partners-section"),
        partnersImages: document.querySelectorAll(".animated-card"),
        partnersSectionTitle: document.querySelector(".partners-section-title"),
        ourPartnersTitle: document.querySelector(".our-partners-title"),
        partnersTitle: document.querySelector(".partners-title"),
        becomeValuedPartner: document.querySelector(".become-valued-partner"),
        contactSection: document.querySelector(".contact-section"),
      };

      const animateTextSpans = (element, className) => {
        if (element) {
          element.innerHTML = element.innerText
            .split(" ")
            .map((word) => `<span class="${className}">${word}</span>`)
            .join(" ");
        }
      };

      const animateCardsOnScroll = (self, images) => {
        const progress = self.progress;

        images.forEach((img, i) => {
          const { startLeft, midLeft, startTop, midTop, startRight, midRight } =
            parentImageProps[i];

          img.style.opacity = progress;
          img.style.left = gsap.utils.interpolate(
            startLeft || "auto",
            midLeft || "auto",
            progress
          );
          img.style.right = gsap.utils.interpolate(
            startRight || "auto",
            midRight || "auto",
            progress
          );
          img.style.top = gsap.utils.interpolate(startTop, midTop, progress);
        });
      };

      const onLeave = () => {
        elements.partnersImages.forEach((img) =>
          gsap.to(img, { top: "100%", opacity: 0, duration: 1 })
        );
        handleVisibility(elements.ourPartnersTitle, false);
        handleVisibility(elements.partnersSectionTitle, false);
      };

      const onComplete = () => {
        removeElement(elements.partnersTitle);
      };

      const onEnterBack = () => {
        elements.partnersImages.forEach((img, i) => {
          const { midLeft, midRight, midTop } = parentImageProps[i];
          gsap.to(img, {
            left: midLeft,
            right: midRight,
            top: midTop,
            opacity: 1,
          });
        });
        handleVisibility(elements.ourPartnersTitle, true);
        handleVisibility(elements.partnersSectionTitle, true);
      };

      animateTextSpans(elements.partnersTitle, "partner-text-word");

      gsap.fromTo(
        document.querySelectorAll(".partner-text-word"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: elements.partnersSection,
            start: "0% top",
            end: "bottom 20%",
            scrub: 0.5,
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.fromTo(
        elements.partnersSectionTitle,
        { visibility: "hidden" },
        {
          visibility: "visible",
          scrollTrigger: {
            trigger: elements.partnersSection,
            start: "top top",
            end: "+=3000",
            scrub: true,
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.fromTo(
        elements.partnersImages,
        {
          left: (i) => parentImageProps[i]?.startLeft,
          top: (i) => parentImageProps[i]?.startTop,
          opacity: 0,
        },
        {
          opacity: 1,
          left: (i) => parentImageProps[i]?.midLeft,
          top: (i) => parentImageProps[i]?.midTop,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: elements.partnersSection,
            start: "20% bottom",
            end: "bottom top",
            scrub: true,
            pin: elements.partnersSection,
            onUpdate: (self) =>
              animateCardsOnScroll(self, elements.partnersImages),
            onLeave,
            onEnterBack,
            onComplete,
          },
        }
      );

      resolve("Partners animation is ready");
    } catch (err) {
      console.error("Error in partners animation:", err);
      reject(err);
    }
  });
};
