"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { InventoryItem } from '../types/inventory';
import InventorySlot from './InventorySlot';

interface InventoryProps {
  items: InventoryItem[];
  onDragEnd: (result: any) => void;
}

const Inventory: React.FC<InventoryProps> = ({ items, onDragEnd }) => {
  const gridSize = 5;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Inventory</h2>
        <Droppable droppableId="inventory">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                width: `${gridSize * 80}px`,
              }}
            >
              {Array.from({ length: gridSize * gridSize }).map((_, index) => (
                <InventorySlot
                  key={items[index]?.id || `empty-${index}`}
                  item={items[index]}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </motion.div>
    </DragDropContext>
  );
};

export default Inventory;