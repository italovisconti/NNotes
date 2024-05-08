'use client'
import { useState, createContext, useContext } from "react";

export interface Note {
  id: number;
  title: string;
  content: string;
}

export const AppContext = createContext<any>(null);
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // ESTADOS
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [note, setNote] = useState<Note>({ id:0, title: "", content: "" });

  // EVENTOS
  const showModal = (event: any) => {
    console.log(event.target.id);
    if(event.target.id === 'article' || event.target.id === 'article-text' || event.target.id === 'button-create' || event.target.id === 'img'){
      setOpen(true);
      console.log('Nota abierta');
    }
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = (event: any) => {
    if(event.target.id !== 'article-modal' ) {
      setOpen(false);
    }
  };

  const courtact = {
    loading,
    setLoading,
    open,
    setOpen,
    action,
    setAction,
    note,
    setNote,
    // EVENTOS
    showModal,
    handleOk,
    handleCancel,
  };

  return (
    <AppContext.Provider value={courtact}>{children}</AppContext.Provider>
  );
};

export default AppProvider;