import React, { useState } from 'react'

export default function ShortenedUrls({ shortenedUrls }) {


  const [copiedUrl, setCopiedUrl] = useState("");


  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
  }


  return (
    <div className='container px-12 py-8 flex flex-col gap-8'>
      {shortenedUrls.map((url, ind) => (
        <div key={ind} className='bg-white py-6 rounded-xl  flex flex-col justify-start items-start md:flex-row md:items-center md:justify-between px-4 md:px-24 gap-8 '>
          <a className='text-normal' href={`${url.pure}`}>{url.pure}</a>
          <div className='w-full md:w-auto flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-t border-customGray pt-4 md:pt-0 md:border-none'>
            <a className='text-cyan' href={`${url.shortened}`}>{url.shortened}</a>
            <button
              onClick={() => handleCopy(url.shortened)}
              className={`${copiedUrl === url.shortened ? "bg-darkVio" : "bg-cyan"}  w-full md:w-32 h-10 rounded-xl text-white hover:opacity-70`}>
              {copiedUrl === url.shortened ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
