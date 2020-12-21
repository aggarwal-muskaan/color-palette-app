import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((clr, i) => (
        <DraggableColorBox
          index={i}
          key={clr.name}
          clr={clr}
          handleClick={() => deleteColor(clr.name)}
        />
      ))}
    </div>
  );
});
export default DraggableColorList;
