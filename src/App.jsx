import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./RootLayOut";
import DashBoard from "./Page/DashBoard";
import Expense from "./Page/Expense";
import Wallets from "./Page/Wallets";
import Summary from "./Page/Summary";
import Accounts from "./Page/Accounts";
import Settings from "./Page/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route 
  path="/" element={<RootLayOut />}>
    <Route index element ={<DashBoard/>}/>
    <Route path="expense" element ={<Expense/>}>Expense </Route>
    <Route path="wallets" element ={<Wallets/>}>Wallets </Route>
    <Route path="summary" element ={<Summary/>}>Summary </Route>
    <Route path="accounts" element ={<Accounts/>}>Accounts </Route>
    <Route path="settings" element ={<Settings/>}>Settings </Route>
  </Route>)
);




const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
