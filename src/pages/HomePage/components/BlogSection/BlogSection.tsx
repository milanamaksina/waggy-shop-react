import "./BlogSection.scss";
import "../../../../index.scss";
import { HeaderForSections } from "../HeaderForSections/HeaderForSections";
import dog1 from "./assets/blog1.png";
import dog2 from "./assets/blog2.png";
import dog3 from "./assets/blog3.png";
import { BlogCard } from "./components/BlogCard/BlogCard";
import inst1 from "./assets/inst-1.png";
import inst2 from "./assets/inst-2.png";
import inst3 from "./assets/inst-3.png";
import inst4 from "./assets/inst-4.png";
import inst5 from "./assets/inst-5.png";
import inst6 from "./assets/inst-5.png";

const posts: any[] = [
  {
    img: dog1,
    header: " 10 Reasons to be helpful towards any animals",
    description:
      " At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
  },
  {
    img: dog2,
    header: "How to know your pet is hungry",
    description:
      " At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
  },
  {
    img: dog3,
    header: "Best home for your pets",
    description:
      " At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
  },
];

const imageArray: string[] = [inst1, inst2, inst3, inst4, inst5, inst6];

export const BlogSection = () => {
  return (
    <>
      <div className="blog-section container">
        <HeaderForSections
          header={"Latest Blog posts"}
          buttonText={"Read all"}
        />
        <div className="blog-cards-container">
          {posts.map((item) => (
            <BlogCard
              blogPicture={item.img}
              header={item.header}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="inst-imgs-section desktop-only">
        {imageArray.map((item) => (
          <img src={item} />
        ))}
      </div>
    </>
  );
};
