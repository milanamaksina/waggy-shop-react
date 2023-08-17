import "./HomePage.scss";
import { GoodsSection } from "./components/GoodsSection/GoodsSection";
import {
  ItemsSection,
} from "./components/ItemsSection/ItemsSection";
import { TopMainSection } from "./components/TopMainSection/TopMainSection";
import dogCard1 from '../../assets/dog-card1.png';
import dogCard2 from '../../assets/dog-card2.png';
import dogCard3 from '../../assets/dog-card3.png';
import dogCard4 from '../../assets/dog-card4.png';

import foodCard1 from '../../assets/food1.png';
import foodCard2 from '../../assets/food2.png';
import foodCard3 from '../../assets/food3.png';
import foodCard4 from '../../assets/food4.png';
import foodCard5 from '../../assets/food5.png';
import foodCard6 from '../../assets/food6.png';
import foodCard7 from '../../assets/food7.png';
import foodCard8 from '../../assets/food8.png';

import dogSale1 from '../../assets/sale-1.png';
import dogSale2 from '../../assets/sale-2.png';
import dogSale3 from '../../assets/sale-3.png';
import dogSale4 from '../../assets/sale-4.png';

import { BottomMainSection } from "./components/BottomMainSection.tsx/BottomMainSection";
import { RegistrationSection } from "./components/RegistrationSection/RegistrationSection";
import { BlogSection } from "./components/BlogSection/BlogSection";
import { Footer } from "../../components/Footer/Footer";

const clothing: any[] = [
  { img: dogCard1, description: "Grey hoodie" },
  { img: dogCard2, description: "Grey hoodie" },
  { img: dogCard3, description: "Grey hoodie" },
  { img: dogCard4, description: "Grey hoodie" },
];

const food: any[] = [
  { img: foodCard1, description: "Grey hoodie" },
  { img: foodCard2, description: "Grey hoodie" },
  { img: foodCard3, description: "Grey hoodie" },
  { img: foodCard4, description: "Grey hoodie" },
  { img: foodCard5, description: "Grey hoodie" },
  { img: foodCard6, description: "Grey hoodie" },
  { img: foodCard7, description: "Grey hoodie" },
  { img: foodCard8, description: "Grey hoodie" },
];

const saleProduscts: any[] = [
  { img: dogSale1, description: "Grey hoodie" },
  { img: dogSale2, description: "Grey hoodie" },
  { img: dogSale3, description: "Grey hoodie" },
  { img: dogSale4, description: "Grey hoodie" },
];

export const HomePage = () => {
  return (
    <>
      <TopMainSection></TopMainSection>
      <GoodsSection></GoodsSection>
      <ItemsSection header={"Pet Clothing"} buttonText={"Shop all"} items={clothing} isDogCard={true} />
      <ItemsSection header={"Pet Clothing"} buttonText={"Shop all"} items={food} isDogCard={false} />
      <BottomMainSection/>
      <ItemsSection header={"Best selling products"} buttonText={"Shop all"} items={saleProduscts} isDogCard={false} />
      <RegistrationSection/>
      <BlogSection/>
      <Footer/>
    </>
  );
};
