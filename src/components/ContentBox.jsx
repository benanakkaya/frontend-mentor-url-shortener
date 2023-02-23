import React from 'react'

export default function ContentBox({ box, index }) {

 
    return (
        <div key={index} className={`relative`} style={{top:`${index*30}px`}}>
            <div className='relative -bottom-8 left-4 w-20 h-20 rounded-full bg-darkVio flex items-center justify-center'>
                <img className='w-10 h-10' src={require(`../images/icon-${box.image}.svg`)} alt={box.image} />
            </div>
            <div className='flex flex-col gap-5 bg-white p-4 pt-16 rounded-lg'>
                <h3 className='text-xl font-bold text-vDarkVio'>{box.title}</h3>
                <p className='text-customGray text-base'>{box.text}</p>
            </div>
        </div>
    )
}
