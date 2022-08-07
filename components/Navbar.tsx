import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex absolute h-20 flex-row justify-between bg-slate-500 w-full'>
        <div className='w-1/3'>
            <Image src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1659314115/unknown_pxeyzx.png" alt="veezen" width={90} height={80} />
        </div>
        <div className='text-white flex flex-row w-full justify-between items-center'>
            <div>
                <p>Acceuil</p>    
            </div>
            <div>
                <p>Apercu</p>    
            </div>
            <div>
                <p>Apercu</p>    
            </div>
            <div>
                <p>Apercu</p>    
            </div>
            <div>
                <p>Apercu</p>    
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Navbar