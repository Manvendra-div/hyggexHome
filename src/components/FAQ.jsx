import React from "react";
import { Accordion } from "keep-react";
const FAQ = () => {
  return (
    <div className="w-full md:w-[70%] 2xl:w-[1400px] mt-16">
      <svg
        width="91"
        height="39"
        viewBox="0 0 91 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0340909 36V1.09091H23.1477V7.17614H7.41477V15.4943H21.6136V21.5795H7.41477V36H0.0340909ZM30.0099 36H22.1008L34.1519 1.09091H43.6633L55.6974 36H47.7883L39.044 9.06818H38.7712L30.0099 36ZM29.5156 22.2784H48.1974V28.0398H29.5156V22.2784ZM71.6746 23.8636H77.9473L81.1007 27.9205L84.203 31.5341L90.0496 38.8636H83.1632L79.1405 33.9205L77.078 30.9886L71.6746 23.8636ZM90.578 18.5455C90.578 22.3523 89.8564 25.5909 88.4132 28.2614C86.9814 30.9318 85.0269 32.9716 82.5496 34.3807C80.0837 35.7784 77.311 36.4773 74.2314 36.4773C71.1291 36.4773 68.3451 35.7727 65.8791 34.3636C63.4132 32.9545 61.4644 30.9148 60.0326 28.2443C58.6007 25.5739 57.8848 22.3409 57.8848 18.5455C57.8848 14.7386 58.6007 11.5 60.0326 8.82955C61.4644 6.15909 63.4132 4.125 65.8791 2.72727C68.3451 1.31818 71.1291 0.613635 74.2314 0.613635C77.311 0.613635 80.0837 1.31818 82.5496 2.72727C85.0269 4.125 86.9814 6.15909 88.4132 8.82955C89.8564 11.5 90.578 14.7386 90.578 18.5455ZM83.0951 18.5455C83.0951 16.0795 82.7257 14 81.9871 12.3068C81.2598 10.6136 80.2314 9.32955 78.9019 8.45455C77.5723 7.57955 76.0155 7.14205 74.2314 7.14205C72.4473 7.14205 70.8905 7.57955 69.561 8.45455C68.2314 9.32955 67.1973 10.6136 66.4587 12.3068C65.7314 14 65.3678 16.0795 65.3678 18.5455C65.3678 21.0114 65.7314 23.0909 66.4587 24.7841C67.1973 26.4773 68.2314 27.7614 69.561 28.6364C70.8905 29.5114 72.4473 29.9489 74.2314 29.9489C76.0155 29.9489 77.5723 29.5114 78.9019 28.6364C80.2314 27.7614 81.2598 26.4773 81.9871 24.7841C82.7257 23.0909 83.0951 21.0114 83.0951 18.5455Z"
          fill="url(#paint0_linear_1_209)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_209"
            x1="45.5"
            y1="1"
            x2="45.5"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#06286E" />
            <stop offset="1" stop-color="#164EC0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col justify-center items-center p-10">
      <Accordion>
      <Accordion.Panel className="rounded-lg border-2 border-gray-600">
        <Accordion.Container className="rounded-lg">
          <Accordion.Title>Can education flashcards be used for all age groups?</Accordion.Title>
        </Accordion.Container>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    <Accordion className="my-3">
    <Accordion.Panel className="rounded-lg border-2 border-gray-600">
      <Accordion.Container className="rounded-lg">
        <Accordion.Title>How do education flashcards work?</Accordion.Title>
      </Accordion.Container>
      <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
  <Accordion className="">
  <Accordion.Panel className="rounded-lg border-2 border-gray-600">
    <Accordion.Container className="rounded-lg">
      <Accordion.Title>Can education flashcards be used for test preparation?</Accordion.Title>
    </Accordion.Container>
    <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
      </div>
    </div>
  );
};

export default FAQ;
