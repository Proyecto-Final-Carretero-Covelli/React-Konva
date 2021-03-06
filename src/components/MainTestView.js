import React, { useState } from "react";
import { Stage, Layer, Rect, Text, Group, useStrictMode } from "react-konva";
import Konva from "konva";
import Array from "./Array";
import Variable from "./Variable";
import {
  declaredVariables,
  declaredArrays,
} from "../codeParser/vista-interactiva";

export default function MainTestView() {
  const [state, setState] = useState({ stageScale: 1, stageX: 0, stageY: 0 });
  const [testVariable, setValueTestVariable] = useState({
    name: "Variable X",
    value: 2,
  });
  let itemCounter = 1;
  const handleWheel = (e) => {
    // Posible transformacion a Custom Hook
    e.evt.preventDefault();

    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

    setState({
      stageScale: newScale,
      stageX:
        -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
        -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    });
  };

  const variableX = (
    <Variable
      name={testVariable.name}
      value={testVariable.value}
      elementIndex={itemCounter++}
      onClick={handleClickVarX}
    />
  );

  const arrays = declaredArrays.map((array) => {
    return (
      <Array
        name={array.name}
        arrayItems={array.value}
        elementIndex={itemCounter++}
      />
    );
  });

  const variables = declaredVariables.map((variable) => {
    return (
      <Variable
        name={variable.name}
        value={variable.value}
        elementIndex={itemCounter++}
      />
    );
  });

  function handleClickVarX() {
    console.log("Valor Variable X State: " + testVariable.value);
    setValueTestVariable((prevState) => {
      const value = prevState.value + 1;
      const newObj = { ...prevState, value: value };
      return newObj;
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div style={{ overflow: "scroll" }}>
        <Stage
          style={{ alignSelf: "center", backgroundColor: "#44475A" }}
          width="500"
          height="500"
          onWheel={handleWheel}
          scaleX={state.stageScale}
          scaleY={state.stageScale}
          x={state.stageX}
          y={state.stageY}
          draggable="true"
        >
          <Layer>
            {arrays}
            {variables}
            {variableX}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
