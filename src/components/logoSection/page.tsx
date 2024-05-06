import Image from 'next/image'
import React from 'react'

export const LogoSectionComponent = () => {
  return (
    <section className="">
      <Image
        src="images/logoNNotes.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
    </section>
  )
}
