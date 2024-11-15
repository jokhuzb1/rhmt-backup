const html = (strings, ...values) => strings.raw[0];

export const PayReviewSection = () => {
  return new Promise((resolve, reject) => {
    const payReview = document.getElementById("pay-review");

    if (payReview) {
      payReview.innerHTML = html`
        <div
          class="container-pay-review  flex flex-col items-center justify-between  !h-[100vh]    overflow-hidden w-full opacity-0"
        >
          <div
            class="right-illustrator  fixed opacity-0 -z-[99] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
          >
            <img
              src="./assets/icons/showcase-right-illustrator.svg"
              alt="Right Illustrator"
            />
          </div>
          <div class="top-divs flex  z-[999]   !h-[15vh] -translate-x-[1500px]">
            <img
              src="/assets/payment-images/img_0.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px] object-contain"
            />
            <img
              src="/assets/payment-images/img_1.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px] object-contain"
            />
            <img
              src="/assets/payment-images/img_2.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px] object-contain"
            />
            <img
              src="/assets/payment-images/img_3.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px] object-contain"
            />
          </div>
          <div
            class="main-div  h-[48vh] fixed  top-[150%]  left-[50%] -translate-x-[50%]"
          >
            <img
              src="/assets/phone.png"
              alt="animated phone"
              class="phone-image w-full h-full object-contain z-[9999]"
            />
          </div>
          <div class="bottom-divs flex z-[999]  !h-[15vh] translate-x-[1500px]">
            <img
              src="/assets/payment-images/img_4.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px] object-contain"
            />
            <img
              src="/assets/payment-images/img_5.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px] object-contain"
            />
            <img
              src="/assets/payment-images/img_6.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px] object-contain"
            />
            <img
              src="/assets/payment-images/img_7.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px] object-contain"
            />
          </div>
          <div
            class="left-illustrator  fixed opacity-0 -z-[99] top-[50%]  -translate-y-[50%] left-[50%] -translate-x-[50%]"
          >
            <img
              src="./assets/icons/showcase-left-illustrator.svg"
              alt="Left Illustrator"
            />
          </div>
        </div>
      `;
      resolve("pay review loaded");
    } else {
      reject(new Error("pay review element not found!"));
    }
  });
};
