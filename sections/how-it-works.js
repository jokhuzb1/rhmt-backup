const html = (strings, ...values) => strings.raw[0];

export const HowItWorksSection = () => {
  return new Promise((resolve, reject) => {
    const howItWorks = document.getElementById("how-it-works");

    if (howItWorks) {
      howItWorks.innerHTML = html`
        <div class="grid grid-cols-1  gap-4 untouchable">
          <div class="video-section col-span-1 relative">
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
                  src="./assets/howitworkswebm/1.webm"
                  type="video/webm"
                />
              </video>
              <div
                class="overlay-text text-top-left"
                data-key="scanQr"
                style="
                padding: 2px 23px;
                border-radius: 50px;
                border: 1px solid #d8d9d8;
                font-size: 16px;
              "
              >
                Scan QR-code
              </div>
              <div class="overlay-text text-top-right">01</div>
              <div class="overlay-text text-bottom-left">
                <h2 data-key="scanQrHeading" id="bold-text">
                  Scan the QR-code <br />
                  to
                  <span class="text-[#888888]" id="bold-text"
                    >Pay Securely</span
                  >
                </h2>
              </div>
              <div class="overlay-text text-bottom-right responsive-text">
                <p data-key="scanQrInstruction">
                  Simply point your phone's camera at the QR code to scan and
                  complete your payment instantly. Enjoy a fast, secure, and
                  hassle-free transaction experience.
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
                  src="./assets/howitworkswebm/2.webm"
                  type="video/webm"
                />
              </video>
              <div
                class="overlay-text  text-top-left"
                data-key="payment"
                style="
                padding: 2px 23px;
                border-radius: 50px;
                border: 1px solid #d8d9d8;
                font-size: 16px;
              "
              >
                Payment
              </div>
              <div class="overlay-text text-top-right">02</div>
              <div class="overlay-text text-bottom-left">
                <h2 data-key="paymentHeading" id="bold-text">
                  Guests can
                  <span class="text-[#888888]" id="bold-text"
                    >pay their <br />
                    bill easily</span
                  >
                  via QR scan!
                </h2>
              </div>
              <div class="overlay-text text-bottom-right responsive-text">
                <p data-key="paymentInstruction">
                  Just scan the QR code RAHMAT and choose a payment method!
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
                  src="./assets/howitworkswebm/3.webm"
                  type="video/webm"
                />
              </video>
              <div
                class="overlay-text text-top-left"
                data-key="gratuities"
                style="
                padding: 2px 23px;
                border-radius: 50px;
                border: 1px solid #d8d9d8;
                font-size: 16px;
              "
              >
                Gratuities
              </div>
              <div class="overlay-text text-top-right">03</div>
              <div class="overlay-text text-bottom-left">
                <h2 data-key="gratuitiesHeading" id="bold-text">
                  <span class="text-[#888888]" id="bold-text">Seamless</span>
                  Service <br />
                  and Easy Get Tipping!
                </h2>
              </div>
              <div class="overlay-text text-bottom-right responsive-text">
                <p data-key="gratuitiesInstruction">
                  If you are satisfied with your service, the guest can pay the
                  bill and leave a tip in one action. Easily and quickly
                  directly to the waiter's bill!
                </p>
              </div>

              <!-- Video 4 -->
              <video
                class="vid w-full h-auto active"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
              >
                <source
                  src="./assets/howitworkswebm/4.webm"
                  type="video/webm"
                />
              </video>
              <div
                class="overlay-text text-top-left"
                data-key="reviews"
                style="
                padding: 2px 23px;
                border-radius: 50px;
                border: 1px solid #d8d9d8;
                font-size: 16px;
              "
              >
                Reviews
              </div>
              <div class="overlay-text text-top-right">04</div>
              <div class="overlay-text text-bottom-left">
                <h2 data-key="reviewsHeading" id="bold-text">
                  Real-Time <br />
                  Guest
                  <span class="text-[#888888]" id="bold-text">Feedback!</span>
                </h2>
              </div>
              <div class="overlay-text text-bottom-right">
                <p data-key="reviewsInstruction">
                  The establishment can receive honest and relevant reviews
                  about the service provided. The guest can leave an emotional
                  review by choosing one of the emotions, or write a message
                  that the management of the establishment will see instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
      resolve("How it works loaded");
    } else {
      reject(new Error("how it works element not found!"));
    }
  });
};
