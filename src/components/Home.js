import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Spinner from './elements/Spinner'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'
import BooksCard from './home/BooksCard.js'
import BooksTable from './home/BooksTable.js'


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true)
      axios.get('http://localhost:3001/api/book')
      .then((res)=>{
        setBooks(res.data.data)
        setLoading(false)
      }).catch((error)=>{
        console.log(error)
      })
    }, [])

  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3x1 my-8' >BOOKS LIST</h1>
          <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4x1'/>
          </Link>
            
        </div>
        {
          loading ? (
            <Spinner/>
          ):(
            <table className='w-full border-separate border-spacing'>
              <thead>
                <tr>
                  <th className='border border-slate-600 rounded-md'>No</th>
                  <th className='border border-slate-600 rounded-md'>Title</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                  <th className='border border-slate-600 rounded-md max-md:hidden'>PublishedYear</th>
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
                          <div className='flex justify-center gap-x-4'>

                            <Link to={'/books/details/${book._id}'}>
                              <BsInfoCircle className='text-2x1 text-green-800'/>
                            </Link>

                            <Link to={'/books/edit/${book._id}'}>
                              <AiOutlineEdit className='text-2x1 text-yellow-300'/>
                            </Link>

                            <Link to={'/books/delete/${book._id}'}>
                              <MdOutlineDelete className='text-2x1 text-red-600'/>
                            </Link>

                          </div>

                        </td>
                    </tr>
                  ))

                }
                
              </tbody>

            </table>
          )
        }
    </div>
  )
}

export default Home