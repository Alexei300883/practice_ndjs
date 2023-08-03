import "./IconSwitch.css";

type IconSwitchType = {
  icon: string;
  onSwitch: () => void;
};
const IconSwitch = (props: IconSwitchType) => {
  const { icon, onSwitch } = props;
  return (
    <div className="iconswitch_wraper">
      <button type="button" className="iconswitch_button" onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  );
};

export default IconSwitch;
