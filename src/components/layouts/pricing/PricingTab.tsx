import { useState } from "react";
import PriceCardsSection from "./PriceCardsSection";

const PricingTab = () => {
  const [tabOpen, setTabOpen] = useState(1);
  return (
    <div className="py-12 md:px-10 xl:px-20">
      <h1 className="font-[700] md:text-[47px] text-[28px] text-black text-center leading-[150% mt-[1.2em] mb-[1.7em]">
        The best platform for price{" "}
      </h1>
      <div className="">
        <div className="px-5">
          <div className="flex w-[320px] bg-white rounded-[30px] mx-auto my-12">
            <button onClick={() => setTabOpen(1)}>
              <h3
                className={
                  tabOpen === 1
                    ? "bg-green font-bold text-white p-4 rounded-[30px] w-[160px] text-lg"
                    : "bg-white font-bold text-black p-4 rounded-[30px] w-[160px] text-lg"
                }
              >
                Yearly
              </h3>
            </button>
            <button onClick={() => setTabOpen(2)}>
              <h3
                className={
                  tabOpen === 2
                    ? "bg-green font-bold text-white p-4 rounded-[30px] w-[160px] text-lg"
                    : "bg-white font-bold text-black p-4 rounded-[30px] w-[160px] text-lg"
                }
              >
                Monthly
              </h3>
            </button>
          </div>
        </div>

        <div>{tabOpen === 1 && <PriceCardsSection />}</div>
        <div>{tabOpen === 2 && <PriceCardsSection />}</div>
      </div>
    </div>
  );
};

export default PricingTab;
