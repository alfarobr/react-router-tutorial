import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <>
      <div className="container">
        <div className="py-5">
          <Outlet></Outlet>
        </div>
      </div>
      <footer className="container">
        <div className="py-4 border-top">
          <p>Este es el footer</p>
        </div>
      </footer>
    </>
  );
};

export default LayoutPublic;
