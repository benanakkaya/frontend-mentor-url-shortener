import React from 'react'
import ContentBox from './ContentBox'

export default function Content() {


    const boxes = [
        {
            image: "brand-recognition",
            title: "Brand Recognition",
            text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        },
        {
            image: "detailed-records",
            title: "Detailed Records",
            text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            image: "fully-customizable",
            title: "Fully Customizable",
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
    ]


    return (
        <div className='container px-12 flex-col items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-6'>
                <h2 className='text-4xl text-center font-bold text-vDarkVio'>Advanced Statistics</h2>
                <p className='text-gray-600 text-center'>Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 py-20'>
                {boxes.map((box, ind) => (
                        <ContentBox key={ind}  box={box} index={ind} />
                ))}
            </div>
        </div>
    )
}
