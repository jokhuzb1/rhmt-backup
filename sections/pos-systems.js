const html = (strings, ...values) => strings.raw[0];

export const PosSystemsSection = () => {
  return new Promise((resolve, reject) => {
    const posSystems = document.getElementById("pos-systems");

    if (posSystems) {
      posSystems.innerHTML = html`
        <div class="pos-system-section">
          <div class="h-[100vh] relative">
            <div
              class="flex justify-center relative items-center mx-auto w-full  flex-col text-center font-[400] h-[100vh]"
            >
              <video
                class="ellipse-gif  fixed left-[50%] -translate-x-[50%] max-w-[550px] !touch-none max-lg:hidden"
                style="left: '50%';transform:'translateX(-50%)';"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="../assets/gifs/rmbg.webm" type="video/webm" />
              </video>
              <video
                class="absolute ellipse-gif-mobile !touch-none  !max-w-[50vw] hidden max-lg:block max-md:max-w-[400px] max-sm:max-w-[235px]"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="../assets/gifs/rmbg-mob.webm" type="video/webm" />
              </video>
              <p
                class="section-title !text-[#000] min-w-[150px] pos-system-title"
                data-key="ourGoalTitle"
              >
                Our goal
              </p>
              <h3
                class="pos-system-text max-w-[900px] text-[60px] mt-[30px] text-[#9F9F9FFF] max-lg:text-[40px] max-sm:text-[25px]"
                data-key="ourGoalDescription"
              >
                Provide an easy and quick way to pay, tip, and leave feedback
                with just a QR code!
              </h3>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="section-with-ellipse relative">
            <div class="h-[100vh] max-sm:h-[80vh]">
              <div class="flex justify-between max-lg:justify-center">
                <div class="w-[50%] max-lg:hidden"></div>
                <div class="w-[50%] pos-system-right-content max-lg:!w-[100%]">
                  <div class="max-lg:flex max-lg:justify-center">
                    <p
                      class="section-title !text-[#000] absolute pos-system-imgs-text left-0 opacity-0 max-lg:relative w-max"
                      data-key="posSystemsTitle"
                    >
                      POS Systems
                    </p>
                  </div>
                  <div class="max-sm:flex max-sm:justify-center">
                    <h2
                      class="text-[50px] mt-[30px] pos-system-text-word opacity-0 max-lg:text-center max-md:text-[35px] max-sm:text-[25px] max-sm:max-w-[235px]"
                      data-key="supportAllPos"
                      style="opacity: 0;"
                    >
                      We support all popular POS systems
                    </h2>
                  </div>
                  <p
                    class="text-[16px] font-[500] max-lg:text-center mt-[40px] mb-[20px] pos-system-imgs-text"
                    data-key="integrationPlugIn"
                    style="opacity: 0;"
                  >
                    Plug-in for integration with:
                  </p>
                  <div class="grid grid-cols-2 gap-[20px] mb-[50px]">
                    <img
                      src="./assets/integration-images/img_1.png"
                      alt="integration-img-1"
                    />
                    <img
                      src="./assets/integration-images/img_2.png"
                      alt="integration-img-2"
                    />
                    <img
                      src="./assets/integration-images/img_3.png"
                      alt="integration-img-3"
                    />
                    <img
                      src="./assets/integration-images/img_4.png"
                      alt="integration-img-4"
                    />
                  </div>
                  <p
                    class="text-[16px] font-[500] max-lg:text-center pos-system-last-text"
                    data-key="partnerWithUs"
                    style="opacity: 0;"
                  >
                    Partner with us to effortlessly integrate with <br />
                    top POS systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      resolve("pos systems loaded");
    } else {
      reject(new Error("pos systems element not found!"));
    }
  });
};
