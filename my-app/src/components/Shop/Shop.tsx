import IconSwitch from "./IconSwitch/IconSwitch";
import { products } from "../../helpers"
import CardsView from "./CardsView/CardsView";
import {useState} from "react"
import ListView from "./ListView/ListView";


const Shop = () => {
    const [isShow, setIsShow] = useState(false);
    const onSwitch = () => {
        setIsShow(!isShow);    
    }

    return (
        <>
            <IconSwitch icon={isShow ? "view_list" : "view_module"} onSwitch={onSwitch}/>
            {!isShow ?<CardsView products={products}/> : <ListView products={products} />  }
            
        </>
    )
};
export default Shop;