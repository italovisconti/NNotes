import React from 'react'
import { NoteFromList } from '../noteFromList/page';
import { Note, useAppContext } from '@/utils/AppContext';

export const NoteLIst = ({}) => {
  const {
    showModal,
    setAction,
  } = useAppContext();

  const notas = [
    {
      id: 1,
      title: "Titulo de la nota 1",
      content: "Contenido de la nota 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod eleifend tortor, at lobortis enim ullamcorper sit amet. Sed enim quam, ullamcorper vitae quam eget, congue consectetur mauris. Nullam semper elit velit, ac ullamcorper metus laoreet ut. Sed euismod risus eu augue laoreet, a semper enim hendrerit. Donec nec justo eget quam semper congue. Maecenas euismod quam ac quam semper, eget ullamcorper quam faucibus.",
    },
    {
      id: 2,
      title: "Titulo de la nota 2",
      content: "Contenido de la nota 2. Curabitur non enim vitae nunc tincidunt tincidunt. Maecenas non diam eget risus ullamcorper lobortis. Sed euismod risus eu augue laoreet, a semper enim hendrerit. Donec nec justo eget quam semper congue. Maecenas euismod quam ac quam semper, eget ullamcorper quam faucibus. Vivamus non quam non augue semper, eget ullamcorper quam faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac quam sit amet quam semper lobortis. Nunc ac quam eget quam semper lobortis.",
    },
    {
      id: 3,
      title: "Titulo de la nota 3",
      content: "Contenido de la nota 3. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac quam sit amet quam semper lobortis. Nunc ac quam eget quam semper lobortis. Sed id magna at quam tincidunt congue. Nullam semper elit velit, ac ullamcorper metus laoreet ut. Sed euismod risus eu augue laoreet, a semper enim hendrerit. Donec nec justo eget quam semper congue. Maecenas euismod quam ac quam semper, eget ullamcorper quam faucibus.",
    },
    {
      id: 4,
      title: "Titulo de la nota 4",
      content: "Contenido de la nota 4. Maecenas euismod quam ac quam semper, eget ullamcorper quam faucibus. Vivamus non quam non augue semper, eget ullamcorper quam faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac quam sit amet quam semper lobortis. Nunc ac quam eget quam semper lobortis. Sed id magna at quam tincidunt congue. Nullam semper elit velit, ac ullamcorper metus laoreet ut.",
    },
    {
      id: 5,
      title: "Titulo de la nota 5",
      content: "Contenido de la nota 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod eleifend tortor, at lobortis enim ullamcorper sit amet. Sed enim quam, ullamcorper vitae quam eget, congue consectetur mauris. Nullam semper elit velit, ac ullamcorper metus laoreet ut. Sed euismod risus eu augue laoreet, a semper enim hendrerit. Donec nec justo eget quam semper congue. Maecenas euismod quam ac quam semper, eget ullamcorper quam faucibus.",
    },
    {
      id: 6,
      title: "Titulo de la nota 6",
      content: "Contenido de la nota 6. Curabitur non enim vitae nunc tincidunt tincidunt. Maecenas non diam eget risus ullamcorper lobortis. Sed euismod risus eu augue laoreet, a semper enim hendrerit. Donec nec justo eget quam semper congue. Maecenas euismod quam ac quam semper, eget ullamcorper quam faucibus. Vivamus non quam non augue semper, eget ullamcorper quam faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac quam sit amet quam semper lobortis. Nunc ac quam eget quam semper lobortis.",
    },
    {
      id: 7,
      title: "Titulo de la nota 7",
      content: "Contenido de la nota 7. Vestibulum ante ipsum primis in faucibus orci luctus et"
    }
  ];
  const handleSetNote = (note: Note) => {
    localStorage.setItem('note', JSON.stringify(note));
    setAction('update');
  }
  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {notas.map((note) => (
        <NoteFromList key={note.id} note={note} showModal={showModal} handleSetNote={handleSetNote}/>
      ))}
    </section>
  )
}
