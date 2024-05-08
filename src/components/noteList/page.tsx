import React from 'react'
import { NoteFromList } from '../noteFromList/page';
import { Note, useAppContext } from '@/utils/AppContext';
import { Spin } from 'antd';

export const NoteLIst = ({}) => {
  const {
    showModal,
    setAction,
    notes,
    loading,
  } = useAppContext();

  const handleSetNote = (note: Note) => {
    localStorage.setItem('note', JSON.stringify(note));
    setAction('update');
  }
  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {loading
        ?  notes.map((note: Note) => (
            <NoteFromList key={note._id} note={note} showModal={showModal} handleSetNote={handleSetNote}/>
          ))
        : <Spin size="large" className='scale-150 mt-48' />
      }
    </section>
  )
}
