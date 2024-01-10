import Carts from "./components/Carts"
const DemoCartTitle = [
  { title: "Complete", className: { textColor: "bg-red-500" }  , count:0},
  { title: "To do", className: { textColor: "bg-blue-500" } , count:0 },
  { title: "Doing", className: { textColor: "bg-yellow-500" }  , count:0},
  { title: "Under Review", className: { textColor: "bg-red-500" } , count:0 },
  { title: "Completed", className: { textColor: "bg-blue-500" } , count:0 },
  { title: "Overview", className: { textColor: "bg-yellow-500" } , count:0 }

]

function App() {


  return (
    <div className="w-full max-h-[700px] ">
      <div className="flex gap-2 w-full max-h-[700px] overflow-scroll ">

      {
        DemoCartTitle.map((item, index) => (<div key={index} className="bg-slate-200">
          <div className="sticky">
            <div className="flex justify-between items-center px-3 py-5">
              <div> <h1>{item.title}</h1></div>
              <div className="w-5 h-5 rounded-md bg-slate-300 flex justify-center items-center"><p>{item.count}</p></div>
            </div>
          </div>
          <Carts />
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default App
