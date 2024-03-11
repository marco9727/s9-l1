const ButtonComponent = function (props) {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className={props.className}>{props.testo}</button>
      </a>
    </div>
  );
};

export default ButtonComponent;
