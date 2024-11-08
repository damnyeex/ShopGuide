import PropTypes from "prop-types";
import { createContext, useState } from "react";

const TittleContext = createContext();

export const TittleProvider = ({ children }) => {
  const [activeTittle, setActiveTittle] = useState(0);

  const switchTittle = (index) => {
    setActiveTittle(index);
  };

  return (
    <TittleContext.Provider value={{ activeTittle, switchTittle }}>
      {children}
    </TittleContext.Provider>
  );
};

TittleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TittleContext };
