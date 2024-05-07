import Image from 'next/image'
import React from 'react'

interface Note {
  title: string;
  content: string;
}

export const NoteFromList = ({ note }: { note: Note }) => {
  return (
    <article className='rounded-lg border h-[250px] w-[350px] p-7 relative bg-gray-note-to-show-background hover:bg-gray-note-to-show-hover cursor-pointer'>
      <button  className='rounded-tr-lg absolute top-[-1px] right-[-1px] border-t border-r p-3 bg-blue-details'>
        <Image
          src="/icons/arrow-up-right.svg"
          alt="Delete note"
          width={20}
          height={20}
        ></Image>
      </button>
      {/* Titulo de nota */}
      <section className=' max-w-[250px] overflow-hidden text-nowrap mb-5'>
        <h1 className="text-white">{note.title}</h1>
      </section>
      {/* Contenido de nota */}
      <section className='text-gray-details'>
        <p>{note.content}</p>
      </section>
    </article>
  )
}
