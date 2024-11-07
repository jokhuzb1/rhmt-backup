export const HeaderAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const HeaderText = document.querySelector(".header-text");
      const HeaderSection = document.querySelector(".showcase-section");

      if (HeaderText) {
        // Wrap each word in a span for animation
        const headerTextWords = HeaderText.innerText.split(" ");
        HeaderText.innerHTML = headerTextWords
          .map((word) => `<span class="header-text-word">${word}</span>`)
          .join(" ");
      } else {
        console.warn("Header text element not found.");
        return resolve("Header animation skipped due to missing element.");
      }

      const headerTextSpan = document.querySelectorAll(".header-text-word");

      if (headerTextSpan.length === 0) {
        console.warn("No words found to animate.");
        return resolve("Header animation skipped due to missing spans.");
      }

      gsap.fromTo(
        headerTextSpan,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: HeaderSection || HeaderText,
            start: "top center",
            end: "bottom top",
          },
        }
      );
      gsap.to(HeaderSection, {
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: HeaderSection,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
      });

      gsap.from(".header-img-1", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: header,
          start: "top 75%",
        },
        xPercent: -3,
      });

      gsap.from(".header-img-2", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: header,
          start: "top 75%",
        },
        xPercent: -6,
      });

      gsap.from(".header-img-3", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
          trigger: header,
          start: "top 75%",
        },
        xPercent: -9,
      });

      resolve("Header animation is ready");
    } catch (err) {
      console.error("Error in header GSAP animation:", err);
      reject(err);
    }
  });
};
