import React from 'react'

interface Props {
    title: string;
    image: string[];
}
const MemArticlesComp:React.FC<Props> = ({title, image}) => {
  return (
    <div className='w-full my-4 '>
        <div className=' lg:text-4xl md:text-3xl text-2xl my-4 font-semibold '>
            <span className='text-[transparent] bg-clip-text bg-gradient-to-r from-[#4de6fd] to-[#f700c2]'>{title}</span>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 py-6 px-4 rounded-2xl shadow-card-upload-black'>
            {image.map((img, index) => (
                <div className='w-full outline-2 p-1 rounded-lg shadow-card-upload relative' key={index}>
                    <img src={img} className='w-full h-full rounded-lg' alt='ddd'/>
                    <div className='absolute bottom-0 left-0 w-full bg-[#ffffffcc] justify-between truncate text-[black] rounded-b-lg px-3 py-2 font-semibold flex'>
                        {title}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MemArticlesComp;