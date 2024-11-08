import { useState } from "react";

function useAnimation(initialSelected = "profile", animationDuration = 500) {
  const [selected, setSelected] = useState(initialSelected);
  const [textOpacity, setTextOpacity] = useState(1);

  const handleHover = (id) => {
    setSelected(id);
    setTextOpacity(0);
    setTimeout(() => setTextOpacity(1), animationDuration);
  };

  const handleSwipe = (direction) => {
    setSelected((prev) => {
      if (direction === "left") {
        return prev === "profile" ? "subscriptions" : "profile";
      } else if (direction === "right") {
        return prev === "subscriptions" ? "profile" : "subscriptions";
      }
      return prev;
    });
  };

  return {
    selected,
    textOpacity,
    handleHover,
    handleSwipe,
  };
}

export default useAnimation;
