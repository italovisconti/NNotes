import { Note, useAppContext } from '@/utils/AppContext';
import Image from 'next/image';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

export const ModalNoteComponent = ({}) => {
  const [ currentNote, setCurrentNote ] = React.useState<Note>({ _id:99999, title: "", content: "" });
  const {
    open,
    action,
    handleCancel,
    createNote,
    setOpen,
    getAllNotes,
  } = useAppContext();

  useEffect(() => {
    if (open) {
      if (action === 'update' && localStorage.getItem('note')) {
        const noteFromJson = JSON.parse(localStorage.getItem('note') || '{}') as Note;
        setCurrentNote({ ...noteFromJson });
      } else {
        setCurrentNote({ _id:99999, title: "", content: "" });
      }
    } else {
      setCurrentNote({ _id:99999, title: "", content: "" });
    }
  }, [open]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setCurrentNote({ ...currentNote, [name]: value });
  };

  const handleCreateOrUpdateNote = async () => {
    const title = document.getElementById('title') as HTMLInputElement;
    const content = document.getElementById('content') as HTMLInputElement;
    if(action === 'create'){
      const response = await createNote(title.value, content.value);
      if(response === 200){
        setOpen(false);
        getAllNotes();
        toast.success('¡Nota creada con éxito!')
      }else{
        toast.error("¡Error al crear la nota!")
      }
    }else{
      console.log('Editamos la nota');
    }
  }

  return (
    <article style={{ opacity: 1 }} id='article-modal' className='relative rounded-lg h-[50%] w-[80%] p-7 bg-gray-note-to-show-background group '>
      <button id='button' className="z-10 rounded-tr-lg absolute top-[0px] right-[0px] p-3 cursor-pointer bg-gray-note-to-show-background group" onClick={handleCancel}>
        <Image
          id='icon'
          className='group-hover:filter-none hover:scale-110'
          src="/icons/x.svg"
          alt="exit"
          width={20}
          height={20}
        ></Image>
      </button>
      {/* Nota values */}
      <section className='flex flex-col justify-center items-start'>
        {/* Título de la nota */}
        <input
          id='title'
          type="text"
          style={{ backgroundColor: "transparent" }}
          className=" p-2 placeholder-gray-details focus:outline-none bg-transparent text-xl text-gray-details w-[80%] h-full"
          placeholder="Título de nota ..."
          value={currentNote.title}
          onChange={handleInputChange}
          name="title"
        />
        {/* Contenido de la nota */}
        <textarea
          name="content"
          id="content"
          style={{ backgroundColor: "transparent" }}
          placeholder='Contenido de nota ...'
          className='w-[100%] p-2 h-[190px] focus:outline-none resize-none'
          value={currentNote.content}
          onChange={handleInputChange}
        />
      </section>
      <button
        className='w-full absolute bottom-0 left-0 bg-green-hover-border rounded-b-lg text-gray-note-to-show-background cursor-pointer py-3 hover:font-bold'
        onClick={handleCreateOrUpdateNote}
      >
        {action === 'update' ? 'Actualizar' : 'Crear'}
      </button>
    </article>
  );
}