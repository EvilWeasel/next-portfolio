import { section } from "framer-motion/client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[
          { id: 1, title: "Title 1", description: "Description 1" },
          { id: 2, title: "Title 2", description: "Description 2" },
          { id: 3, title: "Title 3", description: "Description 3" },
          { id: 4, title: "Title 4", description: "Description 4" },
          { id: 5, title: "Title 5", description: "Description 5" },
          { id: 6, title: "Title 6", description: "Description 6" },
        ].map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.id === 1 || item.id === 5 ? "lg:row-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
