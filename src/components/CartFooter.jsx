import user1 from "/images/user1.jpg"
import { RiAttachment2 } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useModal } from "../contexts/ModalContext";
const CartFooter = () => {
    const {  setIsOpen ,setSelectedFiles,totalAtt} = useModal();
    

    const handleFileSelect = (event) => {
        const fileList = event.target.files;
        const filesArray = Array.from(fileList);
        setSelectedFiles(filesArray);
        if(filesArray.length != 0){

            setIsOpen(true)
        }
    };
   
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
                <IoChatbubblesOutline />  <span>15</span>
            </div>

            <div className="">
                <form className="flex gap-2">
                    <input type="file" id="fileInput" className="hidden" multiple onChange={handleFileSelect} />
                    <label htmlFor="fileInput">
                        <RiAttachment2 className="cursor-pointer" />
                    </label>
                    <span >{totalAtt | 0}</span>
                </form>

            </div>

            <div className="flex gap-2">
                <FaCalendarAlt />
                <span>30-12-22</span>
            </div>


        </div>
    );
};

export default CartFooter;