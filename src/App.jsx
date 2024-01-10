import { useEffect, useState } from "react";
import AttachmentModal from "./components/AttachmentModal";
import Carts from "./components/Carts"
import { useModal } from "./contexts/ModalContext";
import axios from "axios";
import Loading from "./components/loading/Loading";
const DemoCartTitle = [
  { title: "Complete", className: { textColor: "bg-red-500" }, count: 8 },
  { title: "To do", className: { textColor: "bg-blue-500" }, count: 20 },
  { title: "Doing", className: { textColor: "bg-yellow-500" }, count: 30 },
  { title: "Under Review", className: { textColor: "bg-red-500" }, count: 0 },
  { title: "Completed", className: { textColor: "bg-blue-500" }, count: 0 },
  { title: "Overview", className: { textColor: "bg-yellow-500" }, count: 0 }

]

function App() {
  const { isOpen,attachment,setAttachment,setTotal } = useModal();
   const [loading,setLoading]=useState(false);
  useEffect(() => {
    setLoading(true)
    // Fetch data from an API
    axios.get('https://task-cart-server.onrender.com/tasks')
      .then(response => {
        setAttachment(response.data);
        setTotal(response.data.length)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        console.error('Error fetching data:', error);
      });
  }, [setAttachment]);

  if(loading){
    return <Loading/>
  }

  return (
    <div className="w-full  overflow-hidden px-2 relative">
      <div className="flex gap-2 w-full h-screen overflow-x-scroll overflow-y-hidden">

        {
          DemoCartTitle.map((item, index) => (<div key={index} className="bg-slate-200 w-full relative">
            <div className="absolute top-0 w-full h-6  bg-slate-200 ">
              <div className="flex justify-between items-center px-3 py-5">
                <div className="w-full rounded-lg relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full ${item.className.textColor}`}
                    style={{ width: `${item.count}%` }}
                  ></div>
                  <h1 className="relative z-10 pl-5">{item.title}</h1>
                </div>
                <div className="w-6 h-6 rounded-md bg-slate-300 flex justify-center items-center"><p>{item.count}</p></div>
              </div>
            </div>
            <Carts />
          </div>
          ))
        }
      </div>

      {isOpen && <AttachmentModal/>}
      {/* <AttachmentModal/> */}
    </div>
  )
}

export default App
