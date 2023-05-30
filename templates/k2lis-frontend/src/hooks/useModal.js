import { useState, useEffect } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, [isShowing]);

  const toggleModal = () => {
    setIsShowing(!isShowing);
  };

  return { isShowing, toggleModal };
};

export default useModal;
