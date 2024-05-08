import { Note, useAppContext } from '@/utils/AppContext';
import React from 'react'

export const SearchBarComponent = () => {
  const {
    notes,
    notesSearched,
    setNotesSearched,
    setValueSearched
  } = useAppContext();

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setValueSearched(searchTerm)
    console.log("🚀 ~ onChangeSearch ~ searchTerm:", searchTerm)
    if(searchTerm === ''){
      setNotesSearched([])
    }else{
      if(notesSearched.length === 0){
        setNotesSearched([...notes])
      }else{
        const searchedNotes = notes.filter((note:Note) => {
          const searchInTitle = note.title.toLowerCase().includes(searchTerm);
          const searchInContent = note.content.toLowerCase().includes(searchTerm);
          return searchInTitle || searchInContent;
        });
        setNotesSearched(searchedNotes)
      }
    }
  };

  return (
    <section className='flex border-b border-gray-details pb-5 pt-8 mb-7'>
      <input type="text" style={{backgroundColor: "transparent"}} className=" p-2 placeholder-gray-details focus:outline-none bg-transparent text-2xl text-gray-details" placeholder="Busque sus notas..." onChange={onChangeSearch}/>
    </section>
  )
}
