import {TypeProduct} from "../../../types";
import "./ListView.css";

type CardsItemTyep = {
    item:  TypeProduct
}
const ListItem = (props: CardsItemTyep) => {
    const {item } = props
  return (
    <div className="listitem_conteiner">
         <h2>{item.name}</h2>
         <span>{item.color}</span>
      <img src={item.img} alt="картинки" width={200} height={200}/>
     
     <div className="lictitem-wrap-footer">
      <span className="cardsitem-text">{`$${item.price}`}</span>
      <div className="cardsitem-add">
      <span className="cardsitem-text-add">ADD TO CART</span>
      </div>
      </div>
    </div>
  );
};
export default ListItem;