import {TypeProduct} from "../../../types";
import "./CardsView.css";

type CardsItemTyep = {
    item:  TypeProduct
}
const CardsItem = (props: CardsItemTyep) => {
    const {item } = props
  return (
    <div className="cardsitem_conteiner">
      <img src={item.img} alt="картинки" width={90} height={60}/>
      <h2>{item.name}</h2>
      <span>{item.color}</span>
      <span className="cardsitem-text">{`$${item.price}`}</span>
      <div className="cardsitem-add">
      <span className="cardsitem-text-add">ADD TO CART</span>
      </div>
    </div>
  );
};
export default CardsItem;
