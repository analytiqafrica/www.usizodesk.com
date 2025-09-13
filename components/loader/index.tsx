export default function Loader() {
  return (
    <div className="preloader justify-content-center align-items-center">
      <div className="preloader-wrap">
        <div className="lds-ellipsis">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        LOADING
      </div>
    </div>
  );
}
