"use client";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableCard from "@/components/draggableCard";
import { useState } from "react";

const initialCards = [
  { id: "card1", content: "Card 1" },
  { id: "card2", content: "Card 2" },
  { id: "card3", content: "Card 3" },
  // Add more cards as needed
];

const App = () => {
  const [cards, setCards] = useState(initialCards);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedCards = Array.from(cards);
    const [reorderedCard] = updatedCards.splice(result.source.index, 1);
    updatedCards.splice(result.destination.index, 0, reorderedCard);

    setCards(updatedCards);
  };

  return (
    <div className="app">
      <h1>Vertical Draggable Cards</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable" direction="vertical">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((card, index) => (
                <DraggableCard key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
