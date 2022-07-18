import { useState } from "react";

const useMobileFilter = () => {
  const [displayFilter, setDisplayFilter] = useState(false);

  const openFilter = () => {
    setDisplayFilter(true);
  };

  const closeFilter = () => {
    setDisplayFilter(false);
  };

  return { displayFilter, closeFilter, openFilter };
};

export { useMobileFilter };
