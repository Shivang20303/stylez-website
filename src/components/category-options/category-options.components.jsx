import CategoryItem from "../category-item/category-item.component";
import "./category-options.styles.scss";

function Options({ categories }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
}

export default Options;
