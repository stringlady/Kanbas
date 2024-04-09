import React from "react";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingData";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanState";
import StringStateVariables from "./StringState";
import DateStateVariable from "./DateState";
import ObjectStateVariable from "./ObjectStae";
import ArrayStateVariable from "./ArrayState";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentStateComponent from "./ParentState";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <PassingDataOnEvent/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
    </>
  );
};
export default Assignment4;