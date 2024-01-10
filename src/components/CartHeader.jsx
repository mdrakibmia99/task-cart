import user1 from "/images/user1.jpg"
const CartHeader = () => {
    return (
        <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="img-div">
                        <img src={user1} alt="client image" />
                    </div>
                    <p className="text-xs">Client Name</p>
                </div>
                <div  className="flex items-center gap-2">
                    <div className="img-div">
                    <img src={user1} alt="client image" />
                    </div>
                    <p>Sadik Istiak</p>
                </div>

            </div>
    );
};

export default CartHeader;