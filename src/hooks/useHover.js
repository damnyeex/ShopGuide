import { useState } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (id) => {
    setHovered(id);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return {
    hovered,
    handleHover,
    handleLeave,
  };
};
