const html = (strings, ...values) => strings.raw[0];

export const PartnersSection = () => {
  return new Promise((resolve, reject) => {
    const partners = document.getElementById("partners");

    if (partners) {
      partners.innerHTML = html`
        <div class="container relative partners-section-container">
          <div class="partners-section">
            <div class="min-h-[240vh]">
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-1  fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[3]"
              >
                <img
                  src="./assets/partners/1.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-2  fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/2.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-3  fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/3.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-4 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/4.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-5 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/5.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-6 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/6.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-7 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/7.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                style="opacity:0;"
                class="partners-card animated-card animated-card-8 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <img
                  src="./assets/partners/8.png"
                  alt="partner 1"
                  class="max-w-[200px]"
                />
              </div>
              <div
                class="flex justify-start items-center flex-col h-[100vh] max-md:hidden max-sm:mt-[0] our-partners-title"
              >
                <p
                  class="section-title !text-[black] partners-section-title"
                  data-key="ourPartnersTitle"
                >
                  Our partners
                </p>
                <h2
                  class="text-[50px] text-center mt-[40px] partners-title max-w-[800px] max-md:text-[35px] max-sm:text-[20px]"
                  data-key="ourPartnersDesc"
                >
                  The city's favorite establishments are already with us!
                </h2>
              </div>
              <div
                class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[15px] relative max-sm:top-[70px]"
              >
                <div class="partners-card">
                  <img
                    src="./assets/partners/1.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/2.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/3.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/4.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/5.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/6.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/7.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/8.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/9.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/10.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/11.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/12.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/13.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/14.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/15.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/16.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/18.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/19.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
                <div class="partners-card">
                  <img
                    src="./assets/partners/20.png"
                    alt="partner 1"
                    class="max-w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="container hidden max-[768px]:block">
          <div
            class="flex justify-center items-center flex-col mt-[100px] max-sm:mt-[50px]"
          >
            <p
              class="section-title !text-[black] mt-[30px]"
              data-key="ourPartnersTitle"
            >
              Our partners
            </p>
            <h2
              class="text-[50px] text-center mt-[40px] partners-title max-w-[800px] max-md:text-[35px] max-sm:text-[20px]"
              data-key="ourPartnersDesc"
            >
              The city's favorite establishments are already with us!
            </h2>
          </div>
          <div
            class="grid grid-cols-4 max-lg:grid-cols-3 max-[350px]:grid-cols-2 gap-[15px] max-[768px]:mt-[40px]"
          >
            <div class="partners-card">
              <img
                src="./assets/partners/1.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/2.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/3.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/4.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/5.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/6.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/7.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/8.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/9.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/10.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/11.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/12.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/13.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/14.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/15.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/16.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/18.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/19.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
            <div class="partners-card">
              <img
                src="./assets/partners/20.png"
                alt="partner 1"
                class="max-w-[200px]"
              />
            </div>
          </div>
        </div>
      `;
      resolve("partners loaded");
    } else {
      reject(new Error("partners element not found!"));
    }
  });
};
