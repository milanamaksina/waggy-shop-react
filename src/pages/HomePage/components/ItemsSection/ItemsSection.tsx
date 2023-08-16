import "../Card/GoodsCard.scss";
import "../../../../index.scss";
import { GoodsCard } from "../Card/GoodsCard";
import { HeaderForSections } from "../HeaderForSections/HeaderForSections";

interface ItemsSectionProps {
  header: string;
  buttonText: string;
  items: any[];
  isDogCard: boolean;
}

export const ItemsSection = ({
  header,
  buttonText,
  items,
  isDogCard,
}: ItemsSectionProps) => {
  return (
    <>
      <div className="container">
        <HeaderForSections header={header} buttonText={buttonText}/>
        <div className="cards-container">
          {items.map((item) => (
            <GoodsCard
              img={item.img}
              description={item.description}
              isDogCard={isDogCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};
