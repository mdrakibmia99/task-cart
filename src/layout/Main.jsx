import { Outlet } from "react-router-dom";
import App from "../App";

const Main = () => {
    return (
        <div>
              <App/>
              <Outlet/>
        </div>
    );
};

export default Main;