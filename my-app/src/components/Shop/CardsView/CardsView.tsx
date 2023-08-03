import {TypeProduct} from "../../../types";
import CardsItem from "./CardsItem";
import "./CardsView.css";

type CardsViewType= {
    products :  TypeProduct[]
}

const CardsView = (props: CardsViewType ) => {
    const {products} = props
    return (
        <div className="cardsview-wraper">
            {products.map(item => (<CardsItem  key={item.id} item={item}/>))}         
        </div>
    )
}

export default CardsView;