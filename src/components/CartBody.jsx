import { RiStackFill } from "react-icons/ri";
import { FaClipboardList,  } from "react-icons/fa";
const CartBody = () => {
    return (
        <div className="flex justify-between items-center my-4">
        <div className="flex gap-2 items-center"> <RiStackFill /> <p>Lorem ipsum dolor sit amet curn..</p></div>
        <div className="flex gap-1 items-center bg-slate-200 rounded-md p-1"> <FaClipboardList /> <p>1/2</p></div>
    </div>
    );
};

export default CartBody;