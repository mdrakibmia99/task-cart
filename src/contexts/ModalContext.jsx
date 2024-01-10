import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [attachment,setAttachment]=useState(0)
    const [totalAtt,setTotal] = useState(0);
  
    
  
    return (
      <ModalContext.Provider value={{ isOpen,setIsOpen,totalAtt,setTotal,attachment,setAttachment,selectedFiles,setSelectedFiles }}>
        {children}
      </ModalContext.Provider>
    );
  };