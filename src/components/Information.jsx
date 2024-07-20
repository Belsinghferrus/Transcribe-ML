import React from 'react'
import { useState } from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

function Information(props) {

const {output} = props;
console.log(output);
const [tab, setTab] = useState('transcription')

  function handleCopy(){
    navigator.clipboard.writeText()
  }

  function handleDownload(){
    const element = document.createElement('a')
    const file = new Blob([], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download(`Transcribe_${(new Date()).toDateString()}.txt`)
    document.body.appendChild(element)
    element.click()
  }

  return (
    <main className='flex-1  p-4 flex flex-col text-center gap-3 sm:gap-4 md:gap-5 justify-center pb-20 max-w-prose w-full mx-auto'>
    <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>Your<span className='text-blue-400 bold'>  Transcription</span></h1>
    <div className='grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden  items-center'>
        <button onClick={() => setTab('transcription')} className={'px-4 py-1 duration-200 ' + (tab === 'transcription'? 'bg-blue-400 text-white' : 'text-blue-400 hover:text-blue-600')} >Transcription</button>
        <button onClick={() => setTab('translation')} className={'px-4 py-1 duration-200 '+ (tab === 'translation'? 'bg-blue-400 text-white' : 'text-blue-400 hover:text-blue-600')}>Translation</button>
    </div>
    <div className='my-8 flex flex-col '>
    {tab ==='transcription' 
    ? (<Transcription output={output}/>) 
    : (<Translation {...props}/>)}
    </div>
    <div className='flex flex-center gap-4 mx-auto '>
        <button title='copy' className='bg-white hover:text-blue-500 text-blue-400 px-2 aspect-square grid place-items-center  rounded '>
          <i className="fa-solid fa-copy"></i> 
        </button>
        <button title='download' className='bg-white hover:text-blue-500 text-blue-400 px-2 aspect-square grid place-items-center  rounded '>
          <i className="fa-solid fa-download"></i>
        </button>
    </div>
    </main>
  )
}

export default Information
