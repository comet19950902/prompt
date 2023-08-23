import React from 'react'

interface Props {
    numReview: number;
    monthPrice: number;
    promptPrice: number;
    accessArticle: boolean;
    totalSave?: number;
}
const PriceComp: React.FC<Props> = ({ numReview, monthPrice, promptPrice, accessArticle, totalSave }) => {
  return (
    <div className='flex flex-col items-center py-16 hover:py-20'>
        <div className='text-xl'>
            {numReview == 10 ? 'Starter' : numReview == 30 ? 'Basic' : numReview == 50 ? 'Premium' : 'Pro'}
        </div>
        <div className='text-center'>
            {numReview} of Reviews Available
        </div>
        <div className='flex h-full'>
            <div className='h-full flex flex-col text-sm'>
                <div>RM</div>
            </div>
            <div className='h-full flex flex-col text-6xl'>
                <div>{monthPrice}</div>
            </div>
            <div className='h-full flex flex-col justify-end text-sm'>
                <div>/mo</div>
            </div>
        </div>
        <div className='text-[white] rounded-full px-2 py-1'>
            Start free trial
        </div>
        <ul className=''>
            <li>
                Mix & Match Midjourney & Chat GPT Available
            </li>
            <li>
                Price of Prompt:  {promptPrice}
            </li>
            {
                totalSave && (
                    <li>
                        Total Save Annually {totalSave}
                    </li>
                )
            }
            <li>
                Selling Prompts
            </li>
            <li>
                100,000+ GPT Prompts Questions
            </li>
            {accessArticle && 
            (<li>
                Access AI Article: Tips, Techniques
            </li>)
            }
        </ul>
    </div>
  )
}

export default PriceComp;