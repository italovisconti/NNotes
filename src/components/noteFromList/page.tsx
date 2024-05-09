'use client'
import { Note, useAppContext } from '@/utils/AppContext';
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast';

export const NoteFromList = ({ note, showModal, handleSetNote }: { note: Note; showModal: any, handleSetNote:any }) => {
  const {
    deleteNote,
    getAllNotes,
  } = useAppContext();

  const deleteNoteHandler = async (event: any) => {
    if(event.target.id === 'icon' || event.target.id === 'button') {
      const response = await deleteNote(note._id);
      if(response === 200){
        getAllNotes();
        toast.success('Nota eliminada con éxito!')
      }else{
        toast.error('Error al eliminar la nota')
      }
    }
  }
  function setInfoModal(event: any) {
      showModal(event);
      handleSetNote(note);
  }
  return (
    <article id='article' className="rounded-lg border h-[250px] w-[320px] p-7 relative bg-gray-note-to-show-background group hover:border-green-hover-border cursor-pointer select-none overflow-scroll overflow-x-hidden" onClick={setInfoModal}>
      <button id='button' className="rounded-tr-lg absolute top-[-1px] right-[-1px] border-t border-r p-3 cursor-pointer group-hover:border-green-hover-border bg-gray-note-to-show-background group" onClick={deleteNoteHandler}>
        <Image
          id='icon'
          className='group-hover:filter-none hover:scale-110'
          src="/icons/delete.svg"
          alt="Delete note"
          width={15}
          height={15}
        ></Image>
      </button>
      {/* Titulo de nota */}
      <section className=' max-w-[250px] overflow-hidden text-nowrap mb-5'>
        <h1 id='article-text' className="text-white">{note.title}</h1>
      </section>
      {/* Contenido de nota */}
      <section className='text-gray-details'>
        <p id='article-text'>{note.content}</p>
      </section>
    </article>
  )
}
