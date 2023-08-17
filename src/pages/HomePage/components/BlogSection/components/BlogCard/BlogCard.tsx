import "../../../../../../index.scss";
import "../../../Card/GoodsCard.scss";
import './BlogCard.scss';

interface BlogCardProps {
  blogPicture: string;
  header: string;
  description: string;
}

export const BlogCard = ({
  blogPicture,
  header,
  description,
}: BlogCardProps) => {
  return (
    <>
        <div className="blog-card">
          <img className="blog-img" src={blogPicture} />
          <div>
            <p className="blog-card-header">{header}</p>
            <p className="blog-description">{description}</p>
          </div>
        </div>
    </>
  );
};
