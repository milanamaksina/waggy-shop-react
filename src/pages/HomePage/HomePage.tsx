import "./HomePage.scss";
import { GoodsSection } from "./components/GoodsSection/GoodsSection";
import {
  ItemsSection,
} from "./components/ItemsSection/ItemsSection";
import { TopMainSection } from "./components/TopMainSection/TopMainSection";
import dogCard1 from '../../components/assets/dog-card1.png';
import dogCard2 from '../../components/assets/dog-card2.png';
import dogCard3 from '../../components/assets/dog-card3.png';
import dogCard4 from '../../components/assets/dog-card4.png';

const clothing: any[] = [
  { img: dogCard1, description: "Grey hoodie" },
  { img: dogCard2, description: "Grey hoodie" },
  { img: dogCard3, description: "Grey hoodie" },
  { img: dogCard4, description: "Grey hoodie" },
];

const food: any[] = [
  { img: dogCard1, description: "Grey hoodie" },
  { img: dogCard2, description: "Grey hoodie" },
  { img: dogCard3, description: "Grey hoodie" },
  { img: dogCard4, description: "Grey hoodie" },
];

export const HomePage = () => {
  return (
    <>
      <TopMainSection></TopMainSection>
      <GoodsSection></GoodsSection>
      <ItemsSection header={"Pet Clothing"} buttonText={"Shop now"} items={clothing} isDogCard={true} />
    </>
  );
};
