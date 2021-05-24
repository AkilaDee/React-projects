import {AiFillMedicineBox} from "react-icons/ai"
import OrderInfo from "./components/OrderInfo"
import Search from "./components/Search"
import AddOrder from "./components/AddOrder"
// import DropDown from "./components/DropDown"
import OrderList from "./data.json"


function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
     <h1 className="text-5xl">
       <AiFillMedicineBox className="inline-block text-green-700" />Medi Care</h1>
       <AddOrder />
       <Search />
       <ul className="divide-y divide-grey-400">
         {OrderList.map(order=>(<OrderInfo key={order.id} order={order} />))}
         
       </ul>
    </div>
  );
}

export default App;

