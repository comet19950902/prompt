import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import ImageUploadBtn from './ImageUploadBtn'

export default function Sell() {
    const genres = ['Midjourney', 'GPT']
    const [imageState, setImageState] = React.useState(false);
    const [images, setImages] = React.useState<string[]>(['']);
    const handleImageUpload = (files: FileList) => {
        if (files.length <= 5) {
            setImageState(true);
            const imageUrls = Object.values(files).map((file) => URL.createObjectURL(file));
            setImages(imageUrls);
        }
    };
    return (
        <div className="flex w-full px-16 md:px-24 py-20 flex-col items-center shadow-card-upload-black relative text-white bg-black before:absolute before:content-[' '] before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[url(/UnicornGradients/6.jpg)] before:opacity-30 before:bg-cover">
            {/* <img className='absolute top-0 left-0 h-full w-full' src='/UnicornGradients/6.jpg' /> */}
            {/* <div className='absolute top-0 left-0 h-full w-full bg-[#00000081] z-[5]'></div> */}
            <div className='font-header text-glow lg:text-6xl md:text-4xl text-center text-3xl px-2 lg:mb-8 md:mb-4 font-bold z-10 tracking-wider '>Sell Your Prompts</div>
            <div className='z-10 mb-10 w-full'>
                <div className=''>
                    <div className='text-3xl font-semibold'>Cover Section</div>
                    <div className='italic font-semibold'>(The information provided here will be visible to the public. Please avoid including the prompts within this section )</div>
                </div>
                <div className='my-8'>
                    <div className='text-xl font-semibold mb-2'>Choose your AI model</div>
                    <div className='relative mr-2'>
                        <select className="pl-2 pr-8 py-1 text-white font-semibold bg-[transparent] border border-white rounded-md shadow-sm outline-none appearance-none  mr-2 outline focus:border-white focus:ring-0 focus:outline focus:outline-white outline-white  cursor-pointer">
                            {genres.map((genre, i) => (
                                <option key={i} selected={genre.includes("Mid")} className='bg-[transparent] text-black'>{genre}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='my-8'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Title (As short as possible)</div>
                    <input className="bg-transparent border border-white py-2 pl-4 pr-8 focus:outline-none focus:rounded-md focus:ring-1 ring-white focus:border-none font-light text-white w-[60%] " />
                </div>
                <div className='my-8 flex flex-col'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Description</div>
                    <textarea
                        name="message"
                        className=" resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                <div className='my-8 flex flex-col'>
                    <div className='text-xl font-semibold mb-2 cursor-pointer' onClick={() => setImageState(false)}><span className='text-red-500 mb-3'>* </span>Upload the Output photos of the prompt (Up to 5)</div>
                    {(!imageState) && (<ImageUploadBtn onImageUpload={handleImageUpload} />)}
                    {imageState && (
                        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 py-6 px-4 rounded-2xl shadow-card-upload-black'>
                            {images.map((img, index) => (
                                <div className='w-full aspect-square outline-2 p-1 rounded-lg shadow-card-upload relative cursor-pointer' key={index}>
                                    <img src={img} className='w-full h-full rounded-lg object-cover object-center' alt='ddd' />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='z-10'>
                <div className=''>
                    <div className='text-3xl font-semibold mb-2'><span className='text-red-500'>* </span>Prompt Section</div>
                    <div className='italic font-semibold'>(The information shared here will become visible only after users successfully purchase / review prompts.)</div>
                </div>
                <div className='my-8'>
                    <div className='text-xl font-semibold mb-2'>Prompt Formula</div>
                    <div className='mb-3'>
                        <div>1. Ensure that all the Midjourney settings and parameters are added at the end of the prompt such as Version, Niji mode, Stylize in such --v 5.2 --niji 5 --s 500</div>
                        <div>2. Put any variables in [square brackets] such as [Animal] for (dog, cat, dolphin, elephant, etc.)</div>
                    </div>
                    <textarea
                        className=" w-full resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                <div className='my-8'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>Example of Prompt</div>
                    <textarea
                        className=" w-full resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                <div className='my-8'>
                    <div className='text-xl font-semibold mb-2'><span className='text-red-500'>* </span>How to Use</div>
                    <textarea
                        className=" w-full resize-y bg-transparent border-b border-white py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-white focus:border-none font-light text-white"
                    ></textarea>
                </div>
                <div className='my-8 flex w-full justify-center items-center'>
                    <div className='py-2 px-8 rounded-xl shadow-card-upload text-2xl hover:shadow-card-upload-black cursor-pointer hover:bg-[#aaaaaa22]'>Submit for Approval</div>
                </div>
            </div>
        </div>
    )
}
