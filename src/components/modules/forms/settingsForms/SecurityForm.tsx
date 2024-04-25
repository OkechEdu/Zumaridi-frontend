const SecurityForm = () => {
  return (
    <div>
      {/* two step verification part */}
      <div className="mt-10">
        <div className=" flex border-red-400 border-green bg-white rounded-md lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2">
          <p className="w-4/5 overflow-hidden mr-2">
            <h6>Two Step Verification</h6>
            <div className="text-gray-200">Secure your account with extra verification</div>
          </p>
          <button>toggle</button>
        </div>
      </div>
      {/* Email  verification part */}
      <div className="mt-10">
        <div className=" flex border-red-400 border-green bg-white rounded-md lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2">
          <p className="w-4/5 overflow-hidden mr-2">
            <h6>Email Verification</h6>
            <div className="text-gray-200">Use email as extra verification to your pin</div>
          </p>
          <button>toggle</button>
        </div>
      </div>
      {/* Phone number verification part */}
      <div className="mt-10">
        <div className=" flex border-red-400 border-green bg-white rounded-md lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2">
          <p className="w-4/5 overflow-hidden mr-2">
            <h6>Phone number Verification</h6>
            <div className="text-gray-200">Use phone number as extra verification to your pin</div>
          </p>
          <button>toggle</button>
        </div>
      </div>
    </div>
  );
};

export default SecurityForm;
