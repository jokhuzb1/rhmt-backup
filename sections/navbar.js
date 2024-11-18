const html = (strings, ...values) => strings.raw[0];

export const NavbarSection = () => {
  return new Promise((resolve, reject) => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
      navbar.innerHTML = html`
        <div class="absolute w-full top-0 left-0 navbar z-[100]">
          <div class="container">
            <div
              class="flex justify-between items-start my-[10px] max-md:mt-[10px]"
            >
              <a href="/" class="cursor-pointer">
                <img src="/assets/logo.svg" alt="Logo" class="logo" />
              </a>
              <div class="flex items-start">
                <div
                  class="flex items-center gap-[20px] mr-[60px] nav-buttons max-lg:hidden"
                >
                  <a
                    href="/business.html"
                    class="dropdown-button dropdownButton"
                  >
                    <span data-key="rahmatBusiness">Rahmat business</span>
                  </a>
                  <a href="/#contacts">
                    <button class="btn become-partner" data-key="becomePartner">
                      Become a partner
                    </button>
                  </a>
                </div>
                <div class="flex items-center gap-[20px]">
                  <button class="dropdown-button dropdownButton relative">
                    <span data-key="language">En</span>
                    <img
                      src="/assets/icons/chevron-down-icon.svg"
                      alt="Chevron Down"
                      class="chevron chevronIcon"
                    />
                    <div>
                      <span class="lang-btn" data-lang="en">English</span>
                      <span class="lang-btn" data-lang="ru">Русский</span>
                      <span class="lang-btn" data-lang="uz">O'zbekcha</span>
                    </div>
                  </button>
                  <button class="burger-icon">
                    <img
                      src="/assets/icons/burger-icon.svg"
                      alt="Burger Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- menu -->
        <div
          class="main-menu overflow-hidden top-0 right-0  fixed z-[200] h-screen max-h-full bg-white p-4 sm:p-6 lg:p-8"
        >
          <div class="flex items-center justify-between">
            <h2
              class="sm:text-[24px] text-[#010101] text-[20px]"
              data-key="menu"
            >
              Menu
            </h2>
            <button class="menu-close-icon">
              <img src="./assets/icons/close-icon.svg" alt="Close" />
            </button>
          </div>

          <div class="menu-links flex flex-col gap-2 mt-2 xl:mt-4">
            <a
              href="/#how-it-works"
              class="flex hover:text-[#F05039] transition items-center gap-5"
            >
              <span
                class="sm:text-[16px] text-[12px] relative sm:top-[-6px] top-[1px]"
                >01</span
              >
              <span
                class="lg:text-[40px] text-[25px] sm:text-[32px]"
                data-key="howItWorks"
                >How it works</span
              >
            </a>
            <a
              href="/#advantages"
              class="flex hover:text-[#F05039] transition items-center gap-5"
            >
              <span
                class="sm:text-[16px] text-[12px] relative sm:top-[-6px] top-[1px]"
                >02</span
              >
              <span
                class="lg:text-[40px] text-[25px] sm:text-[32px]"
                data-key="advantages"
                >Advantages</span
              >
            </a>
            <a
              href="/#pos-systems"
              class="flex hover:text-[#F05039] transition items-center gap-5"
            >
              <span
                class="sm:text-[16px] text-[12px] relative sm:top-[-6px] top-[1px]"
                >03</span
              >
              <span
                class="lg:text-[40px] text-[25px] sm:text-[32px]"
                data-key="posSystems"
                >POS-Systems</span
              >
            </a>
            <a
              href="/#partners"
              class="flex hover:text-[#F05039] transition items-center gap-5"
            >
              <span
                class="sm:text-[16px] text-[12px] relative sm:top-[-6px] top-[1px]"
                >04</span
              >
              <span
                class="lg:text-[40px] text-[25px] sm:text-[32px]"
                data-key="partners"
                >Partners</span
              >
            </a>
            <a
              href="/#faq"
              class="flex hover:text-[#F05039] transition items-center gap-5"
            >
              <span
                class="sm:text-[16px] text-[12px] relative sm:top-[-6px] top-[1px]"
                >05</span
              >
              <span
                class="lg:text-[40px] text-[25px] sm:text-[32px]"
                data-key="faq"
                >FAQ</span
              >
            </a>
          </div>

          <a
            href="/business.html"
            class="cursor-pointer hover:text-[#F05039] transition mt-2 xl:mt-4 block"
          >
            <h3
              class="lg:text-[40px] text-[20px] sm:text-[28px] sm:pl-4 pl-0 mt-4 pop-up-animation"
              data-key="rahmatBusiness"
            >
              Rahmat Business
            </h3>
          </a>

          <div class="flex flex-wrap gap-8 sm:pl-4 pl-0 mt-2 question-links">
            <a
              href="/business.html#how-it-works-business"
              class="sm:text-[24px] text-[16px] transition hover:text-[#F05039] pop-up-animation"
              data-key="howItWorks"
              >How it works</a
            >
            <a
              href="/business.html#business-advantages"
              class="sm:text-[24px] text-[16px] transition hover:text-[#F05039] pop-up-animation"
              data-key="advantages"
              >Advantages</a
            >
            <a
              href="/business.html#business-faq"
              class="sm:text-[24px] text-[16px] transition hover:text-[#F05039] pop-up-animation"
              data-key="faq"
              >FAQ</a
            >
          </div>

          <div
            class="flex flex-col sm:flex-row justify-between sm:items-start items-center mt-2 xl:mt-4 gap-4"
          >
            <a href="/#contacts">
              <button class="btn big pop-up-animation" data-key="becomePartner">
                Become a partner
              </button>
            </a>
            <div class="flex items-center gap-5 social-links">
              <a
                href="https://www.facebook.com/rhmtuz/?locale=ru_RU"
                target="_blank"
                class="icon-btn white"
              >
                <img src="./assets/icons/facebook-icon.svg" alt="Facebook" />
              </a>
              <a
                href="https://t.me/rahmat_info"
                target="_blank"
                class="icon-btn white"
              >
                <img
                  src="./assets/icons/telegram-icon copy.svg"
                  alt="Telegram"
                />
              </a>
              <a
                href="https://www.instagram.com/rahmatqr.uz?igsh=cDFxcm5qOHE1OGJq"
                target="_blank"
                class="icon-btn white"
              >
                <img src="./assets/icons/instagram-icon.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      `;
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const selectedLang = btn.getAttribute("data-lang");
          const currentUrl = new URL(window.location.href);

          // Update or set the `lang` query parameter
          currentUrl.searchParams.set("lang", selectedLang);

          // Refresh the page with the updated language
          window.location.href = currentUrl.toString();
        });
      });
      resolve("Navbar loaded");
    } else {
      reject(new Error("Navbar element not found!"));
    }
  });
};
