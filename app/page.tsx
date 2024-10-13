"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Inventory from '../components/Inventory';
import { InventoryItem } from '../types/inventory';

export default function Home() {
  const [items, setItems] = useState<InventoryItem[]>([
    { id: '1', name: 'Sword', weight: 5, quantity: 1, image: '/items/sword.png' },
    { id: '2', name: 'Shield', weight: 8, quantity: 1, image: '/items/shield.png' },
    { id: '3', name: 'Potion', weight: 1, quantity: 5, image: '/items/potion.png' },
    { id: '4', name: 'Bow', weight: 3, quantity: 1, image: '/items/bow.png' },
    { id: '5', name: 'Arrow', weight: 0.1, quantity: 20, image: '/items/arrow.png' },
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <Inventory items={items} onDragEnd={onDragEnd} />
    </motion.div>
  );
}