import { DataType } from "../../../types";

type ListingType = {
  datas: DataType[];
};

const Listing: React.FC<ListingType> = (props) => {
  const { datas } = props;
  const handlerValuta = (code: string) => {
    switch (code) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return code;    
    } 
  };
  const handlerStyles = (num: number) => {
      if(num > 0 && num <= 10) {
        return "low"
      }else if (num > 10 && num <= 20){
        return "medium"
      }else{
        return "high"
      }
  }
  return (
    <div className="item-list">
      {datas.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt="img" />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{`${handlerValuta(item.currency_code)}${item.price}`}</p>
            <p className={`item-quantity level-${handlerStyles(item.quantity)}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
