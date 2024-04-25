type ModalId = string | null;

interface AboutCardProps {
  icon: string;
  icon2: string;
  title: string;
  description: string;
  setOpenModal: (value: ModalId) => void;
}

const AboutCard = ({ icon, icon2, title, description, setOpenModal }: AboutCardProps) => {
  return (
    <div
      className=" rounded-md border-2 md:h-[336px] h-64 md:w-[346px] w-full flex justify-center flex-col items-center bg-white hover:bg-[#F8F9FC] border-gray-100 hover:border-green cursor-pointer"
      onClick={() => setOpenModal(null)}
    >
      <img src={icon} className="h-7 w-7 m-2" />
      <img src={icon2} className="h-7 w-7 m-2" />
      <p className="font-bold md:text-[20px] text-lg p-2">{title}</p>
      <p className="font-normal md:text-[20px] text-lg p-3 text-center">{description}</p>
    </div>
  );
};

export default AboutCard;
