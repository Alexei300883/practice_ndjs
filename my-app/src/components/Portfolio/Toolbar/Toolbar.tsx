import "./Toolbar.css";
import {useState} from "react"
type ToolbarType = {
  onSelectFilter: (item: string) => void;
};

const Toolbar = (props: ToolbarType) => {
  const [index, setIndex] = useState(0)
  const { onSelectFilter } = props;
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const handlerClick = (item: string, ind: number) => {
    onSelectFilter(item);
    setIndex(ind)
  }
  return (
    <div className="wraper_toolbar">
      {filters.map((item, ind) => (
        <button
          type="button"
          onClick={() =>handlerClick(`${item}`, ind)}
          className={index === ind ?"button_toolbar": undefined}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
