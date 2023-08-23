import React from 'react'
import PriceComp from './PriceComp'

const monthlyStarter = [
    {
        numReview: 10,
        monthPrice: 30,
        promptPrice: 3,
        accessArticle: false
    },
    {
        numReview: 30,
        monthPrice: 60,
        promptPrice: 2,
        accessArticle: true
    },
    {
        numReview: 50,
        monthPrice: 80,
        promptPrice: 1.6,
        accessArticle: true
    },
    {
        numReview: 200,
        monthPrice: 199,
        promptPrice: 1,
        accessArticle: true
    },
]
export default function Price() {
    return (
        <div>
            {
                monthlyStarter.map((plan, index) => (
                    <PriceComp key={index} numReview={plan.numReview} monthPrice={plan.monthPrice} promptPrice={plan.promptPrice} accessArticle={plan.accessArticle} />
                ))
            }

        </div>
    )
}
