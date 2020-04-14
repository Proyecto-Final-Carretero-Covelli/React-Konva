import React, { useState } from "react";
import { Rect, Text, Group } from "react-konva";

export default function Variable(props) {
  const elementStartX = props.elementIndex * 100;
  const sizeRect = 50;

  return (
    <Group draggable="true" onClick={props.onClick}>
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
      <Rect
        x={elementStartX}
        y={100}
        width={sizeRect}
        height={sizeRect}
        fill="#3b6978"
      />
      <Text
        x={elementStartX}
        y={100}
        text={props.value}
        width={sizeRect}
        height={sizeRect}
        align="center"
        verticalAlign="middle"
        fill="white"
      />
    </Group>
  );
}
