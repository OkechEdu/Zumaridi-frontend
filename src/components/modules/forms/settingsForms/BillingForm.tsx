import { useState } from "react";

const BillingForm = () => {
  const [autoRenew, setAutoRenewal] = useState(false);

  const checkAutoRenewal = () => {
    setAutoRenewal(!autoRenew);
  };
  return (
    <div>
      <div className=" flex padding-[10px] border-white bg-white rounded-md lg:max-w-[1152px] max-w-full h-[250px] border-[1px]  px-1 mt-4">
        <div className="w-4/5 overflow-hidden padding-top-[2px] ml-2 mr-2 mt-1">
          <h6>Plan</h6>
          <div
            className="
              flex 
              md:flex-row
              list-none
              border-b-0
              pl-0
              pr-3
              text-white-200 
              bg-green-500
              rounded-md 
              lg:max-w-[540px] 
              max-w-full 
              h-[180px]  
              justify-between px-2 mt-0"
          >
            <div className="ml-2 mt-2 absolute w-94.55 h-17.74 left-17.87 top-28.49 text-white">
              Premium
            </div>
          </div>
          <div>
            <label
              htmlFor="auto-renewal"
              className="flex md:flex-row flex-wrap mt-1 text-gray-200 padding-[10px] text-sl justify-between-[180px] px-1"
            >
              <input
                type="checkbox"
                id="auto-renewal"
                name="auto-renewal"
                onClick={checkAutoRenewal}
                className="border-green-200 mr-2"
              />
              Check Box For Auto-Renewal
            </label>
          </div>
        </div>
        <div className="w-4/5 overflow-hidden padding-top-[2px] mr-2 mt-5">
          <div className="text-green bg-white border-green rounded-md lg:max-w-[540px] max-w-full h-[180px] border-[2px] justify-between px-2 mt-4">
            <div className="ml-2 mt-2 absolute w-94.55 h-17.74 left-17.87 top-28.49 text-green">
              Premium Monthly
            </div>
          </div>
        </div>
        <div className="w-4/5 overflow-hidden padding-top-[2px] mr-2 mt-5">
          <div className="text-green bg-white border-green rounded-md lg:max-w-[540px] max-w-full h-[180px] border-[2px] justify-between px-2 mt-4">
            <div className="ml-2 mt-2 absolute w-94.55 h-17.74 left-17.87 top-28.49 text-green">
              Free
            </div>
          </div>
        </div>
      </div>
      <div className=" flex padding-[10px] border-white bg-white rounded-md lg:max-w-[578px] max-w-full h-[280px] border-[1px] justify-between px-1 mt-6">
        Payment Cards
      </div>
      <div className="mt-3">Payment History</div>
    </div>
  );
};

export default BillingForm;
