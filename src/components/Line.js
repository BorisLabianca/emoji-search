const Line = ({ title, symbol }) => {
  // console.log(elem);
  return (
    <div
      className="result-line"
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <span>{title}</span> <span>{symbol}</span>
      <span className="tooltip">Emoji copied</span>
    </div>
  );
};
export default Line;
