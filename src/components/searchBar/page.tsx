import React from 'react'

export const SearchBarComponent = () => {
  return (
    <section className='flex border-b border-gray-details pb-5 pt-8'>
      <input type="text" style={{backgroundColor: "transparent"}} className=" p-2 placeholder-gray-details focus:outline-none bg-transparent text-2xl text-gray-details" placeholder="Busque sus notas..." />
    </section>
  )
}
