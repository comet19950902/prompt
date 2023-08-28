import React from 'react'

export default function Logo() {
    return (
        <div className=' mx-4 flex flex-col md:flex-row items-center font-Urbansit overflow-visible'>
            <div className=' mr-0 md:mr-2 leading-[50px] md:text-8xl text-6xl text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4] '>AI</div>
            <div className=' text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4]'>
                <div className='flex flex-col justify-center'>
                    <div className='md:text-4xl text-lg leading-tight'>Resources</div>
                    <div className='md:text-[32px] text-base leading-none'>Marketplace</div>
                </div>
            </div>
        </div>
    )
}
