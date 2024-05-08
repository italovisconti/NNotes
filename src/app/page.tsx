'use client'
import { LogoSectionComponent } from "@/components/logoSection/page";
import { ModalNoteComponent } from "@/components/modal/page";
import { NoteFromList } from "@/components/noteFromList/page";
import { SearchBarComponent } from "@/components/searchBar/page";
import { Button, Modal } from 'antd';
import { useState } from "react";

interface Note {
  title: string;
  content: string;
}
const note: Note = {
  title: "Esta sera la nota del beta ddddddddd",
  content: "Esta es la descripcion de la nota del beta",
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = (event: any) => {
    if(event.target.id === 'article' || event.target.id === 'article-text'){
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

  return (
    <main className="flex min-h-screen flex-col py-14 px-32">
      <LogoSectionComponent />
      <SearchBarComponent />
      <NoteFromList note={note} showModal={showModal}/>
      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90" onClick={handleCancel}></div>
          <ModalNoteComponent handleCancel={handleCancel} action={'Actualizar'}/>
        </div>
      )}
    </main>
  );
}
