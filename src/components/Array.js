import React from "react";
import { Rect, Text, Group } from "react-konva";
import Konva from "konva";

export default function Array(props) {
  const elementStartX = props.elementIndex * 100;
  const sizeRect = 50;

  console.log(props.arrayItems);

  const arrayItems = props.arrayItems.map((element, index) => {
    return (
      <Group>
        <Rect
          x={elementStartX}
          y={100 + sizeRect * index}
          width={sizeRect}
          height={sizeRect}
          fill="grey"
        />
        <Text
          x={elementStartX}
          y={100 + sizeRect * index}
          text={index}
          width={sizeRect}
          height={sizeRect}
          align="center"
          verticalAlign="middle"
          fill="white"
        />
      </Group>
    );
  });

  return (
    <Group draggable="true">
      <Text
        x={elementStartX}
        y={50}
        text={props.name}
        width={sizeRect}
        height={sizeRect}
        align="center"
        verticalAlign="middle"
        fill="white"
      />
      {arrayItems}
    </Group>
  );
}
