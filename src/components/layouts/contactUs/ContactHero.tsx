const ContactHero = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/12/11/05/10/bird-7648202_960_720.jpg')] bg-no-repeat bg-cover">
      <div className=" relative h-96 w-full bg-cover bg-center md:p-24 px-5 flex flex-col gap-12 justify-center">
        <h3 className="text-white md:text-6xl text-[28px] font-bold">Contact Us</h3>
        <p className="text-white mt-3 md:text-3xl text-lg font-light">
          We’d like to help you with any questions you may have. Get in touch!
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
