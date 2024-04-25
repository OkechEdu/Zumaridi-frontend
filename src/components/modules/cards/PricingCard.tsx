import { checkcircle } from "assets/images";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  buttonColor: string;
  price: string;
  per: string;
  button: string;
  features: string[];
  link: string;
}

const PricingCard = ({
  title,
  buttonColor,
  price,
  per,
  button,
  features,
  link
}: PricingCardProps) => {
  return (
    <div className="border-[1px] rounded-lg p-5 border-black w-full md:h-[400px] h-full">
      <div>
        <div className="flex justify-between pb-4">
          <p className={`font-bold md:text-[36px] text-[28px] text-[#41723]`}>{title}</p>
          <div className="flex items-end">
            <p className="font-bold md:text-[36px] text-[28px] text-green">{price}</p>
            <p className="text-black md:text-lg text-[12px] font-bold mb-2">{per}</p>
          </div>
        </div>
        <p
          className={`p-2 rounded-md md:w-[35%] w-full text-center text-lg font-bold ${buttonColor}`}
        >
          {button}
        </p>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4  pt-4">
          {features.map((feature, index) => (
            <li key={index} className="">
              <span className="flex gap-2 text-[18px]">
                <img src={checkcircle} />
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <Link to={link} className="text-green text-[18px]">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
