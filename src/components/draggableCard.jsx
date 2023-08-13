"use client";
import { Draggable } from "react-beautiful-dnd";
import "@/styles/dragableCard.css"; // Create this CSS file for styling

const DraggableCard = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`draggable-card ${snapshot.isDragging ? "dragging" : ""}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableCard;
