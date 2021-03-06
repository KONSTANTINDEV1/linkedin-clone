import "./InputOption.scss";

function InputOption({Icon, title, color}) {
  return (
    <div className="inputOption">
      {Icon && <Icon style={{ color: color }} />}
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
