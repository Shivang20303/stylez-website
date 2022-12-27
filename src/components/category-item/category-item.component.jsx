import './category-item.styles.scss';

function CategoryItem({category}) {
    return (
        <div className="category-inner">
          <div className="background-image" style={{
            backgroundImage: `url(${category.imageUrl})`
          }}/>
            <div className="container-inner-body">
              <h2 id={category.id}>{category.title}</h2>
              <p>Shop Now</p>
            </div>
        </div>
    )   
}

export default CategoryItem;