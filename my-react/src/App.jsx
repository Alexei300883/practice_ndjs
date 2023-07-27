import "./App.css";
import Calendar from "./componets/Calendar/Calendar";
import ShopItemClass from "./componets/ShopItemClass/ShopItemClass";
import ShopItemFunc from "./componets/ShopItemFuns/ShopItemFunc";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£",
};

const months = [
  "январ",
  " феврал",
  "март",
  "апрел",
  "ма",
  " июн",
  "июл",
  " август",
  " сентябр ",
  "октябр ",
  "ноябр",
  " декабр",
];

const days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
 
]

const handlerParam = () => {
  const now = new Date();
  const param = {
    date: now.getDate(),
    year: now.getFullYear(),
    month: months[now.getMonth()],
    day: days[now.getDay()]
  };

  return param;
};

const App = () => {
  return (

    
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
        {/* <ShopItemClass item={item} /> */}
        {/* <Calendar param={handlerParam()} /> */}
      </div>
      
    </div>
   

  );
};

export default App;
