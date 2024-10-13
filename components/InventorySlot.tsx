"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Draggable } from 'react-beautiful-dnd';
import { InventoryItem } from '../types/inventory';
import { GripVertical } from 'lucide-react';

interface InventorySlotProps {
  item?: InventoryItem;
  index: number;
}

const InventorySlot: React.FC<InventorySlotProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item?.id || `empty-${index}`} index={index}>
      {(provided) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="w-20 h-20 bg-gray-700 rounded-md flex flex-col items-center justify-center relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div {...provided.dragHandleProps} className="absolute top-0 left-0 w-full h-full cursor-move">
            <GripVertical size={16} className="text-gray-400 absolute top-1 left-1" />
          </div>
          {item ? (
            <>
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                className="object-contain z-10"
              />
              <div className="absolute bottom-1 right-1 bg-gray-900 text-white text-xs px-1 rounded z-20">
                {item.quantity}
              </div>
              <div className="absolute top-6 left-1 bg-gray-900 text-white text-xs px-1 rounded z-20">
                {item.weight}kg
              </div>
            </>
          ) : null}
        </motion.div>
      )}
    </Draggable>
  );
};

export default InventorySlot;