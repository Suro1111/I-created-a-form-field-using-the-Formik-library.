import { SectionContainer } from "../SectionContainer/SectionContainer";
import {  FormBlock } from "./Form/Form";
import style from "./ParentForms.module.css";

export function ParentForms({globalData}) {
  
  return (
    <>
      <SectionContainer section={"section1"}>
        <FormBlock globalData={globalData}/>
      </SectionContainer>
    </>
  );
}
