import { useAppContext } from '@/utils/AppContext';
import Image from 'next/image'
import React from 'react'

export const ButtonPlus = ({}) => {
  const {
    showModal,
    setAction,
  } = useAppContext();

  const handleOpenModal = (event:any) => {
    showModal(event)
    setAction('create');
  }
  return (
    <button id='button-create' className='rounded-full bg-blue-details p-4 hover:scale-110' onClick={handleOpenModal}>
      <Image id='img' src="icons/plus.svg" alt="plus" width={30} height={30} />
    </button>
  )
}
