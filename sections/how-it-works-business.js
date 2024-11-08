const html = (strings, ...values) => strings.raw[0];

export const HowItWorksBusinessSection = () => {
  return new Promise((resolve, reject) => {
    const howItWorks = document.getElementById("how-it-works-business");

    if (howItWorks) {
      howItWorks.innerHTML = html`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div class="video-section col-span-1 relative">
            <div
              class="video-container relative p-5"
              style="padding-top: 60px; background:black;"
            >
              <!-- Video 1 -->
              <video
                class="vid w-full h-auto active"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/1.webm" type="video/webm" />
              </video>
              <div
                data-key="howItWorksBusinessScan"
                style="color:white;"
                class="overlay-text text-top-left "
              >
                Scan QR-code
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                01
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessGuest">
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
                class="vid w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/2.webm" type="video/webm" />
              </video>

              <div
                data-key="howItWorksBusinessMenu"
                style="color:white;"
                class="overlay-text text-top-left"
              >
                Menu
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                02
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessReviewing">
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
                class="vid w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/1.webm" type="video/webm" />
              </video>

              <div
                data-key="howItWorksBusinessPay"
                style="color:white;"
                class="overlay-text text-top-left"
              >
                Pay the bill and tip
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                03
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessUpon">
                  Upon completion, the bill and tip are paid.
                </h2>
              </div>
              <div style="color:white;" class="overlay-text text-bottom-right">
                <p>
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
                webkit-playsinline
              >
                <source src="./assets/howitworks/4.webm" type="video/mp4" />
              </video>
              <div
                data-key="howItWorksBusinessLeave"
                style="color:white;"
                class="overlay-text text-top-left"
              >
                Leave review
              </div>
              <div style="color:white;" class="overlay-text text-top-right">
                04
              </div>
              <div style="color:white;" class="overlay-text text-bottom-left">
                <h2 data-key="howItWorksBusinessWaiter">
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
