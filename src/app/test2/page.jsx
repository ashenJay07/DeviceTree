"use client";

import { useState } from "react";

const VerticalDraggableCards = () => {
  const [draggedCard, setDraggedCard] = useState(null);

  const handleDragStart = (event) => {
    setDraggedCard(event.target);
    event.target.classList.add("dragged");
  };

  const handleDragEnd = (event) => {
    event.target.classList.remove("dragged");
    setDraggedCard(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    const container = event.target.closest(".card-container");
    if (container && draggedCard) {
      const afterElement = getDragAfterElement(container, event.clientY);
      if (afterElement) {
        container.insertBefore(draggedCard, afterElement.nextElementSibling);
      } else {
        container.appendChild(draggedCard);
      }
    }
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll(".draggable-card:not(.dragged)"),
    ];
    return draggableElements.reduce(
      (closest, element) => {
        const box = element.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: element };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  return (
    <div className="container mt-5">
      <div className="card-container" onDragOver={handleDragOver}>
        <div
          className="draggable-card"
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="card mb-3">
            <div className="card-body">Card 1</div>
          </div>
        </div>
        <div
          className="draggable-card"
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="card mb-3">
            <div className="card-body">Card 2</div>
          </div>
        </div>
        <div
          className="draggable-card"
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="card mb-3">
            <div className="card-body">Card 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalDraggableCards;
