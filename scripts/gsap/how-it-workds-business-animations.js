export const HowItWorksBusinessAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const videos = document.querySelectorAll(".vid");
      const overlayTexts = document.querySelectorAll(".overlay-text");
      const icons = document.querySelectorAll(".illus");
      let currentIndex = 0;

      ScrollTrigger.create({
        trigger: ".video-section",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * videos.length);

          if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            changeVideoAndText(currentIndex);
          }
        },
      });

      function changeVideoAndText(index) {
        // Hide all videos and overlay texts first
        videos.forEach((video) => {
          gsap.to(video, { opacity: 0, duration: 0.5 });
          video.pause();
        });

        overlayTexts.forEach((text) => {
          gsap.to(text, { opacity: 0, duration: 0.5 });
        });

        // Pause all icons and ensure they are initially hidden
        icons.forEach((icon) => {
          gsap.to(icon, { opacity: 0, duration: 1 });
        });

        // Show the current video and play it
        gsap.to(videos[index], { opacity: 1, duration: 0.5 });
        videos[index].play();

        // Show overlay texts for the current video
        const textsToShow = [
          document.querySelectorAll(".text-top-left")[index],
          document.querySelectorAll(".text-top-right")[index],
          document.querySelectorAll(".text-bottom-left")[index],
          document.querySelectorAll(".text-bottom-right")[index],
        ];

        textsToShow.forEach((text) => {
          gsap.to(text, { opacity: 1, duration: 0.5 });
        });

        // Ensure the icon for the current video section is always shown
        gsap.to(icons, { opacity: 1, duration: 1 });
      }

      changeVideoAndText(currentIndex); // Initial call to set the first video and texts

      resolve("How it works animation is ready");
    } catch (err) {
      console.error("Error in 'How it works' animation:", err);
      reject(err);
    }
  });
};
