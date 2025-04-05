"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function Home() {
  const dragAreaRef = useRef(null);
  const [items, setItems] = useState<{ parent: string; value: string }[]>([
    { parent: "tray", value: "AB" },
    { parent: "tray", value: "CD" },
    { parent: "tray", value: "EF" },
    { parent: "tray", value: "GH" },
  ]);

  const handleDragStart = (event: React.DragEvent, itemValue: string) => {
    // Set the data being dragged (we'll use the item's value)
    event.dataTransfer.setData("text/plain", itemValue);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // Allow dropping
  };

  const handleDrop = (event: React.DragEvent, newParent: string) => {
    const droppedValue = event.dataTransfer.getData("text/plain");
    if (droppedValue) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.value === droppedValue ? { ...item, parent: newParent } : item
        )
      );
    }
  };

  return (
    <main
      ref={dragAreaRef}
      className="min-w-screen min-h-screen flex flex-col items-center py-12 bg-zinc-900 text-zinc-50 overflow-hidden"
    >
      <h1 className="font-medium text-4xl">THE TIER LIST</h1>
      <section className="flex flex-col w-full p-4 gap-2">
        <div
          className="w-full bg-zinc-800 flex flex-wrap gap-2"
          onDrop={(e) => handleDrop(e, "S")}
          onDragOver={handleDragOver}
        >
          <h1 className="size-32 flex items-center justify-center bg-red-400 font-medium text-3xl">
            S
          </h1>
          {items.map(
            (item) =>
              item.parent === "S" && (
                <motion.article
                  key={item.value}
                  layout
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </div>
        <div
          className="w-full bg-zinc-800 flex flex-wrap gap-2"
          onDrop={(e) => handleDrop(e, "A")}
          onDragOver={handleDragOver}
        >
          <h1 className="size-32 flex items-center justify-center bg-blue-400 font-medium text-3xl">
            A
          </h1>
          {items.map(
            (item) =>
              item.parent === "A" && (
                <motion.article
                  key={item.value}
                  layout
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </div>
        <div
          className="w-full bg-zinc-800 flex flex-wrap gap-2"
          onDrop={(e) => handleDrop(e, "B")}
          onDragOver={handleDragOver}
        >
          <h1 className="size-32 flex items-center justify-center bg-green-400 font-medium text-3xl">
            B
          </h1>
          {items.map(
            (item) =>
              item.parent === "B" && (
                <motion.article
                  key={item.value}
                  layout
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </div>
        <div
          className="w-full bg-zinc-800 flex flex-wrap gap-2"
          onDrop={(e) => handleDrop(e, "C")}
          onDragOver={handleDragOver}
        >
          <h1 className="size-32 flex items-center justify-center bg-yellow-400 font-medium text-3xl">
            C
          </h1>
          {items.map(
            (item) =>
              item.parent === "C" && (
                <motion.article
                  key={item.value}
                  layout
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </div>
        <div
          className="w-full bg-zinc-800 flex flex-wrap gap-2"
          onDrop={(e) => handleDrop(e, "D")}
          onDragOver={handleDragOver}
        >
          <h1 className="size-32 flex items-center justify-center bg-purple-400 font-medium text-3xl">
            D
          </h1>
          {items.map(
            (item) =>
              item.parent === "D" && (
                <motion.article
                  key={item.value}
                  layout
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </div>
        <div
          className="w-full bg-zinc-800 flex flex-wrap gap-2"
          onDrop={(e) => handleDrop(e, "F")}
          onDragOver={handleDragOver}
        >
          <h1 className="size-32 flex items-center justify-center bg-teal-400 font-medium text-3xl">
            F
          </h1>
          {items.map(
            (item) =>
              item.parent === "F" && (
                <motion.article
                  key={item.value}
                  layout
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </div>

        <section className="w-full flex flex-row flex-wrap gap-2 mt-10 bg-zinc-800">
          <button className="size-32 flex items-center justify-center text-3xl hover:bg-zinc-700 hover:cursor-pointer transition-colors duration-300 ease-in">
            +
          </button>
          {items.map(
            (item) =>
              item.parent === "tray" && (
                <motion.article
                  layout
                  key={item.value}
                  dragConstraints={dragAreaRef}
                >
                  <div
                    draggable
                    className="size-32 flex items-center justify-center bg-zinc-700 font-medium text-3xl hover:cursor-grab active:cursor-grabbing"
                    onDragStart={(e) => handleDragStart(e, item.value)}
                  >
                    {item.value}
                  </div>
                </motion.article>
              )
          )}
        </section>
      </section>
    </main>
  );
}
