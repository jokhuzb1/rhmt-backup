const html = (strings, ...values) => strings.raw[0];

export const HowItWorksBusinessSection = () => {
  return new Promise((resolve, reject) => {
    const howItWorks = document.getElementById("how-it-works-business");

    if (howItWorks) {
      howItWorks.innerHTML = html`
        <div class="grid grid-cols-1  gap-4 untouchable">
          <div class="video-section col-span-1 relative">
            <div class="right-illustrator-business illus">
              <img
                src="./assets/icons/showcase-right-illustrator.svg"
                alt="Right Illustrator"
              />
            </div>
            <div class="left-illustrator-business  illus">
              <img
                src="./assets/icons/showcase-left-illustrator.svg"
                alt="Left Illustrator"
              />
            </div>
            <div class="video-container relative p-5">
              <!-- Video 1 -->
              <video
                class="vid w-full h-auto active"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
              >
                <source
                  src="./assets/businesshowitworks/1new.webm"
                  type="video/webm"
                />
              </video>

              <div
                data-key="howItWorksBusinessScan"
                class="overlay-text text-top-left rounded-title"
              >
                Scan QR-code
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                01
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessGuest" id="bold-text">
                  Guest scans the QR code
                </h2>
              </div>
              <div style="color:white;" class="overlay-text text-bottom-right">
                <p data-key="howItWorksBusinessProvides">
                  The QR code provides quick access to the menu and ordering
                  options, enhancing convenience.
                </p>
              </div>

              <!-- Video 2 -->
              <video
                class="vid w-full h-auto active"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
              >
                <source
                  src="./assets/businesshowitworks/2new.webm"
                  type="video/webm"
                />
              </video>

              <div
                data-key="howItWorksBusinessMenu"
                class="overlay-text text-top-left rounded-title"
              >
                Menu
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                02
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessReviewing" id="bold-text">
                  Reviewing the menu and form an order
                </h2>
              </div>
              <div style="color:white;" class="overlay-text text-bottom-right">
                <p data-key="howItWorksBusinessEasily">
                  Easily browse our menu and place orders directly through
                  Rahmat's online platform, without waiting for a waiter.
                </p>
              </div>

              <!-- Video 3 -->
              <video
                class="vid w-full h-auto active"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
              >
                <source
                  src="./assets/businesshowitworks/3new.webm"
                  type="video/webm"
                />
              </video>
              <div
                data-key="howItWorksBusinessPay"
                class="overlay-text text-top-left rounded-title"
              >
                Pay the bill and tip
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                03
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessUpon" id="bold-text">
                  Upon completion, the bill and tip are paid.
                </h2>
              </div>
              <div style="color:white;" class="overlay-text text-bottom-right">
                <p data-key="howItWorksBusinessAfter">
                  After menu review, order and pay bill plus tip seamlessly via
                  Rahmat's integrated system.
                </p>
              </div>

              <!-- Video 4 -->
              <video
                class="vid w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
              >
                <source
                  src="./assets/businesshowitworks/4new.webm"
                  type="video/webm"
                />
              </video>
              <div
                data-key="howItWorksBusinessLeave"
                class="overlay-text text-top-left rounded-title"
              >
                Leave review
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                04
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessWaiter" id="bold-text">
                  The waiter may offer to leave a review.
                </h2>
              </div>
              <div style="color:white;" class="overlay-text text-bottom-right">
                <p data-key="howItWorksBusinessYou">
                  You can leave a review upon the waiter's request.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      resolve("How it works loaded");
    } else {
      reject(new Error("How it works element not found!"));
    }
  });
};
