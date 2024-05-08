import Image from 'next/image'
import React from 'react'

export const ModalNoteComponent = ({handleCancel, action} : {handleCancel: any, action: String}) => {
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
      {/* Aggregar un textarea de dentro de este articulo */}
      <h1>hola esta esaskckaskdckasndcknaksdncmansdmcnmansdmcnamsdncmnajsd nckansdlcalsdnclkjansdc lknalksndc lkansd clknalsdckansdclknalskdclaksndclkansldcnlaksd la comida</h1>
      <button className='w-full absolute bottom-0 left-0 bg-green-hover-border rounded-b-lg text-gray-note-to-show-background cursor-pointer py-3 hover:font-bold'>
        {action}
      </button>
    </article>
  )
}
