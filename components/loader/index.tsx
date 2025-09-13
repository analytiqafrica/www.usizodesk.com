export default function Loader() {
  return (
    <div className="loaderbgr">
      <svg
        className="circle-chart"
        viewBox="0 0 80 80"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circle-chart__background"
          strokeWidth="5"
          fill="none"
          cx="40"
          cy="40"
          r="30"
        ></circle>
        <circle
          className="circle-chart__circle"
          stroke="#000000"
          strokeWidth="5"
          strokeDasharray="34,234"
          strokeLinecap="round"
          fill="none"
          cx="40"
          cy="40"
          r="30"
        ></circle>
      </svg>
    </div>
  );
}
