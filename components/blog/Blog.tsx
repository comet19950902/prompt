import React from 'react'
import BlogPreview from './BlogPreview'
import BlogRecent from './BlogRecent'
import DoubleCarousel from './DoubleCarousel'
const temp = {
    title: 'SF restaurant says it came nowhere near meeting high costs,is closing',
    desc: 'The restaurant which was owned by a former Lazy Bear sous-chef, is set to close at the end of the month',
    author: 'Susana Guerrero',
    publisher: 'Fiscal Times',
    category: 'Food',
    url: '/store.png'
}
const temp1 = {
    title: 'San Francisco died, again',
    desc: 'The restaurant which was owned by a former Lazy Bear sous-chef, is set to close at the end of the month',
    author: 'Susana Guerrero',
    publisher: 'Fiscal Times',
    category: 'Food',
    url: '/ear.png'
}
const Blog = () => {
    return (
        <div className='flex flex-col w-full shadow-card-upload-black bg-white'>
            <div className='font-header text-glow lg:text-5xl md:text-4xl text-2xl px-2 lg:mb-8 md:mb-4 font-bold z-10 text-[white] tracking-wider flex w-full justify-center py-2 shadow-card-upload text-center bg-[#39a5e4]'>
                News
            </div>
            <div className='flex mx-8 w-full md:px-[250px]'>
                <BlogPreview title={temp.title} desc={temp.desc} author={temp.author} publisher={temp.publisher} category={temp.category} url={temp.url} />
                <div className='flex flex-col h-full md:w-[50%]'>
                    <div className='flex w-full'>
                        <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                        <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                    </div>
                    <div className='flex w-full'>
                        <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                        <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                    </div>
                    <div className='flex w-full'>
                        <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                        <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                    </div>
                </div>
            </div>
                <DoubleCarousel />
        </div>
    )
}

export default Blog;