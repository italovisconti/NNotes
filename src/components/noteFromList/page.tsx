'use client'
import Image from 'next/image'
import React from 'react'

interface Note {
  title: string;
  content: string;
}

export const NoteFromList = ({ note }: { note: Note }) => {
  function openModal(event: any) {
    if(event.target.id === 'article' || event.target.id === 'article-text'){
      console.log('Nota abierta');
    }
  }
  function deleteNote(event: any) {
    if(event.target.id === 'icon' || event.target.id === 'button') {
      console.log('Nota eliminada');
    }
  }
  return (
    <article id='article' className="rounded-lg border h-[250px] w-[350px] p-7 relative bg-gray-note-to-show-background group hover:border-green-hover-border cursor-pointer select-none" onClick={openModal}>
      <button id='button' className="rounded-tr-lg absolute top-[-1px] right-[-1px] border-t border-r p-3 cursor-pointer group-hover:border-green-hover-border bg-gray-note-to-show-background group" onClick={deleteNote}>
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
