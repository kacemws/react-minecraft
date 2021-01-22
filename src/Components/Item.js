// Component: Item
// Def: This component allows us to drag the items around & returns the actual item inside our smart blocks.

import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

const Item = ({ item, position, inventoryType }) => {
  // The drag hook via dnd
  const [{ isDragging }, drag, connectDragPreview] = useDrag({
    item: { type: "item", id: item.item, position, inventoryType },
    // Monitor if we are dragging the item
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  // Varible which fetches the correct item from our assets
  const itemVisual = require(`../Assets/Items/${item.item}.svg`);
  console.log(itemVisual);
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} src={itemVisual.default} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0 : 1,
        }}
      >
        <img src={itemVisual} alt="alt" />
      </div>
    </>
  );
};

export default Item;
