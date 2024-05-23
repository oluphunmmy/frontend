import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'
// import { MdOutlineAddBox } from 'react-icons/md'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const BookModal = ({ book, onClose }) => {

    
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />

                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg '>
                    {book.publishedYear}
                </h2>

                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-l'> {book.title} </h2>
                </div>

                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-l'> {book.author} </h2>
                </div>
                <p className='mt-4'>Abstract....</p>
                <p className='my-2'>
                Ullamco pariatur eu commodo non pariatur eiusmod aliquip. 
                Enim cillum nostrud eiusmod ipsum. Fugiat dolore do mollit 
                deserunt sit aliquip incididunt laborum.
                Laboris eiusmod occaecat occaecat in dolor et anim id in 
                culpa dolore commodo. Anim eiusmod cillum ut qui ad voluptate. 
                Laborum exercitation proident consectetur sit velit ex amet dolore 
                est fugiat veniam do ea.Pariatur Lorem culpa anim laboris qui 
                reprehenderit nostrud. Ut laboris nulla ullamco eiusmod qui. Culpa 
                in fugiat dolore sunt est aute dolore. Culpa veniam sint enim velit 
                proident consequat dolor irure commodo esse nulla consectetur eiusmod. 
                Anim Lorem esse irure nostrud non elit dolor fugiat quis enim consequat.
                </p>

            </div>
        </div>
    )
}

export default BookModal