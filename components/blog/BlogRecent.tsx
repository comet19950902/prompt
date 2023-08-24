import React from 'react'

interface Props {
    title: string;
    desc: string;
    author: string;
    publisher: string;
    category: string;
    url: string;
}

const BlogRecent: React.FC<Props> = ({ title, desc, author, publisher, category, url }) => {
  return (
    <div className='w-[50%] mr-4 text-[#334]'>
        <img src={url} className='w-full aspect-video'/>
        <div className='my-1 border-b border-dotted border-[#334] text-black'>{publisher}</div>
        <div>{title}</div>
    </div>
  )
}

export default BlogRecent;