import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.tsx'

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <div className='flex pt-20 flex-row h-screen items-start'>
        <div className='md:w-1/2 w-full bg-violet-400 text-white h-3/4 pl-14 md:pl-32 items-left flex flex-col justify-center'>
          <h1 className='text-5xl md:text-7xl font-nunito'>Work-Life</h1>
          <h1 className='text-5xl md:text-7xl whitespace-nowrap font-nunito'>Harmony matters</h1>
          <p className='text-md pt-2'>
          VEEZEN, POUR UN MEILLEUR ENGAGEMENT DANS VOTRE VIE.
          </p>
          <div className='flex flex-col pt-16 gap-5'>
              <div>
                <p>Bien Être & Performance</p>
              </div>
              <div>
                <p>Bien Être & Performance</p>
              </div>
              <div>
                <p>Bien Être & Performance</p>
              </div>
          </div>
        </div>
        <div className='md:w-1/2 w-0 hidden md:block bg-violet-500 h-full'>
        <p>img</p>
        </div>
      </div>
    </div>
  )
}
