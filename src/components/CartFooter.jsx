import user1 from "/images/user1.jpg"
import {  RiAttachment2 } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
const CartFooter = () => {
    return (
        <div className="flex justify-around gap-2 items-center ">

        <div className="flex gap-2 items-center">
            <div className="img-div">
            <img src={user1} alt="user image" />
            </div>
            <div className="img-div">
            <img src={user1} alt="user image" />
            </div>
            <div className="img-div bg-slate-300 flex justify-center items-center">
            <span className="text-[10px] cursor-pointer">12+</span>
            </div>
        </div>
        <div className="flex gap-2 cursor-pointer">
            <IoChatbubblesOutline /> <span>15</span>
        </div>

        <div className="flex gap-2">
            <form className="">
                <input type="file" className="hidden" name="input"  />
                <label htmlFor="input">
                <RiAttachment2  className="cursor-pointer"/>
                </label>
            </form>
            <span>{"25"}</span>
        </div>

        <div className="flex gap-2">
            <FaCalendarAlt />
            <span>30-12-22</span>
        </div>
    </div>
    );
};

export default CartFooter;