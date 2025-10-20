function Btn(props) {
  return (
    <div id="btn">
      <button
        onClick={props.onClick}
        className="text-md max-md:scale-90 max-sm:scale-75 max-xs:scale-60 max-xxs:scale-50 px-5 py-3 rounded-[3px] cursor-pointer bg-[var(--primary-color)] text-black opacity-85 hover:bg-[var(--tertiary-color)] hover:text-[var(--primary-color)] duration-300"
      >
        {props.text}
      </button>
    </div>
  );
}
export default Btn;
