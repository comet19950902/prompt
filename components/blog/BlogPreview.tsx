import React from 'react'
import { FaStream } from 'react-icons/fa';

interface Props {
    title: string;
    desc: string;
    author: string;
    publisher: string;
    category: string;
    url: string;
}
const BlogPreview: React.FC<Props> = ({ title, desc, author, publisher, category, url }) => {
    return (
        <div className='w-full mr-5  text-[#555]'>
            <div className='relative'>
                <img src={url} className='w-full aspect-video' />
                <div className='absolute bg-[#ff1d46] bottom-[-20px] left-4 px-6 py-4 text-white uppercase font-semibold'>
                    {category}
                </div>
            </div>
            <div className='w-full px-2 my-6'>
                <div className='w-full text-6xl font-body font-semibold text-[#334] my-4'>
                    {title}
                </div>
                <div className='w-full font-body'>{desc}</div>
                <div className='flex items-center mt-5'>
                    <FaStream className='mr-3 text-[#ff1d46] text-lg'/>
                    <div className=' font-bold text-[#334]'>By {author}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogPreview;