import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
    <main>
      <div className='flex'>
      <Image src={'https://tse3.mm.bing.net/th/id/OIP.3pc5VJafzxVUj7iAX_1l6QHaEI?rs=1&pid=ImgDetMain&o=7&rm=3'}alt='night' width={600} height={450}/>
      <Image src={'/bg.png'} alt='water' width={600} height={450} />
      </div>
      <h1>Welcome to volts program</h1>
    </main>
    </>
  )
}
