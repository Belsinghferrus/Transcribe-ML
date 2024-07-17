import React from 'react'



const FileDisplay = (props) => {
    const {file, audioStream, handleAudioReset} = props;
  return (
    <main className='flex-1  p-4 flex flex-col text-center gap-3 sm:gap-4 md:gap-5 justify-center pb-20 w-fit max-w-full mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your<span className='text-blue-400 bold'>File</span></h1>
        <div className='mx-auto flex flex-col text-left my-4'>
            <h3 className='font-semibold'>Name</h3>
            <p>{file.name}</p>
        </div>
        <div className='flex items-cemter justify-between gap-4'>
            <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-200'>
                Reset
            </button>
            <button className='specialBtn px-3 p-2 rounded-lg text-blue-400 flex-items-center gap-2 font-medium'>
                <p>Transcribe</p>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
    </main>
  )
}

export default FileDisplay
