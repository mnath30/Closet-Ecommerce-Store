import { useState } from "react";

const useDisplayModal = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const hideModal = () => {
    setDisplayModal(false);
  };

  const showModal = () => {
    setDisplayModal(true);
  };

  return { displayModal, hideModal, showModal };
};

export { useDisplayModal };
