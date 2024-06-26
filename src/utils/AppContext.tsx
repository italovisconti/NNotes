'use client'
import { useState, createContext, useContext } from "react";

export interface Note {
  _id: number;
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
  const [notes, setNotes] = useState<Note[]>([]);
  const [notesSearched, setNotesSearched] =  useState<Note[]>([]);
  const [valueSearched, setValueSearched] = useState<string>('');

  // EVENTOS
  const showModal = (event: any) => {
    if(event.target.id === 'article' || event.target.id === 'article-text' || event.target.id === 'button-create' || event.target.id === 'img'){
      setOpen(true);
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

  const getAllNotes = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notes`);
      const data = await response.json();
      contructorNoteList(data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }

  const contructorNoteList = (notesFromAPI: Note[]) => {
    const notes = notesFromAPI.map(note => ({
      _id: note._id,
      title: note.title || `Titulo de nota ${note._id}`,
      content: note.content || `Contenido de nota ${note._id}`,
    }));
    setNotes(notes);
  }

  const createNote = async (title: string, content: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          content: content
        }),
      });
      return response.status;
    } catch (error) {
      return 'Ocurrió un error al crear la nota. Inténtalo nuevamente.';
    }
  };

  const updateNote = async (noteID: String, title: string, content: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notes`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: noteID,
          title: title,
          content: content
        }),
      });
      return response.status;
    } catch (error) {
      return 'Ocurrió un error al crear la nota. Inténtalo nuevamente.';
    }
  }

  const deleteNote = async (noteID: String) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notes?_id=${noteID}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.status;
    } catch (error) {
      return 'Ocurrió un error al crear la nota. Inténtalo nuevamente.';
    }
  }

  const courtact = {
    loading,
    setLoading,
    open,
    setOpen,
    action,
    setAction,
    notes,
    setNotes,
    notesSearched,
    setNotesSearched,
    valueSearched,
    setValueSearched,
    // EVENTOS
    showModal,
    handleOk,
    handleCancel,
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
  };

  return (
    <AppContext.Provider value={courtact}>{children}</AppContext.Provider>
  );
};

export default AppProvider;