import React, { useEffect } from 'react'
import { NoteFromList } from '../noteFromList/page';
import { Note, useAppContext } from '@/utils/AppContext';
import { Spin } from 'antd';

export const NoteLIst = ({}) => {
  const {
    showModal,
    setAction,
    notes,
    loading,
    notesSearched,
    valueSearched,
  } = useAppContext();

  const [ notesToRender, setNotesToRender ] = React.useState([]);

  const handleSetNote = (note: Note) => {
    localStorage.setItem('note', JSON.stringify(note));
    setAction('update');
  }
  useEffect(() => {
    if(notesSearched?.length > 0){
      const notesAll =  notesSearched.map((note: Note) => {
        return <NoteFromList key={note._id} note={note} showModal={showModal}  handleSetNote={handleSetNote}/>
      })
      setNotesToRender(notesAll)
    }else{
      if(valueSearched !== ''){
        setNotesToRender([])
      }else{
        const notesALl = notes.map((note: Note) => {
          return <NoteFromList key={note._id} note={note} showModal={showModal}  handleSetNote={handleSetNote}/>
        })
        setNotesToRender(notesALl)
      }
    }
  }, [notesSearched, notes])

  return (
    <section className='flex flex-wrap gap-5 justify-center'>
      {loading
        ?  notesToRender.length !==0 ? notesToRender : <h1 className='text-3xl text-gray-details mt-48'>No se encontraron notas</h1>
        : <Spin size="large" className='scale-150 mt-48' />
      }
    </section>
  )
}
