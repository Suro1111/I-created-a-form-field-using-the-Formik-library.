import "./assets/global/global.css";
import { ParentForms } from "./components/ParentForms/ParentForms";

export function App({globalData}) {  
  return (
    <>
      <ParentForms globalData={globalData}/>
    </>
  );
}
