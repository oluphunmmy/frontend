import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'


const BooksTable = ({books}) => {
  return (
    <div>
       <table className='w-full border-separate border-spacing'>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'>No</th>
                  <th className='border border-slate-600 rounded-md'>Title</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>PublishedYear</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>Book Image</th>
                  <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
              </thead>
              <tbody>
                {
                  books.map((book, index)=>(
                    <tr key={book._id} className='h-8'>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {index + 1}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {book.title}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {book.author}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {book.publishedYear}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                          <img src={book.imageUrl} alt={book.imageUrl} />
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                          <div className='flex justify-center gap-x-4'>

                            <Link to={`/books/details/${book._id}`}>
                              <BsInfoCircle className='text-2xl text-green-800'/>
                            </Link>

                            <Link to={`/books/edit/${book._id}`}>
                              <AiOutlineEdit className='text-2xl text-yellow-300'/>
                            </Link>

                            <Link to={`/books/delete/${book._id}`}>
                              <MdDeleteForever className='text-2xl text-red-600'/>
                            </Link>

                          </div>

                        </td>
                    </tr>
                  ))

                }
                
              </tbody>

            </table>
    </div>
  )
}

export default BooksTable