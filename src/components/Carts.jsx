import Cart from "./Cart";

const Carts = () => {
   const value=12;
    const demoCartArray = Array.from({ length: value }, (_, index) => index + 1);
    return (
        <div className="flex flex-col gap-3 w-full h-full overflow-y-scroll">
            {
                demoCartArray.map((item,index)=> <Cart key={index}/>)
            }
        </div>
    );
};

export default Carts;