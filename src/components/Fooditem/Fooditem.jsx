import { assets } from "../../assets/assets"
import "./Fooditem.css"


 const Fooditem = ({id, name, image, price, description }) => {
  return (
	<div className="food-item">
		<div className="food-item-imf-containter">
			<img src={image} alt="" className="food-item-img" />
		</div>

		<div className="food-item-info">
			<div className="food-item-name-rating">
				<p>{name}</p>
				<img src={assets.rating_starts} alt="" />
			</div>
			<p className="food-item-description">{description}</p>
			<p className="food-item-price">${price}</p>

		</div>

	</div>
  )
}

export default Fooditem