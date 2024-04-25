import { PricingCard } from "components/modules";
import { priceCardData } from "utils";

const PriceCardsSection = () => {
  return (
    <div className="px-5">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        {priceCardData.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PriceCardsSection;
