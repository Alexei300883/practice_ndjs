import {TypeProduct} from "../../../types";
import ListItem from "./ListItem";
import "./ListView.css";

type CardsViewType= {
    products :  TypeProduct[]
}

const ListView = (props: CardsViewType ) => {
    const {products} = props
    return (
        <div className="listview-wraper">
            {products.map(item => (<ListItem  key={item.id} item={item}/>))}         
        </div>
    )
}

export default ListView;