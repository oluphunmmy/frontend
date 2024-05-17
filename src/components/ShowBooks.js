import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BlackButton from './elements/BackButton'
import Spinner from './elements/Spinner'
import BackButton from './elements/BackButton'

const ShowBooks = () => {
    const [book, setbook] = useState({})
    const [loading,setLoading] = useState(false)
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3001/api/book/${id}`)
        .then((response)=>{
            setbook(response.data)
            console.log(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    }, [])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text 3x1 my-4'>ShowBook</h1>
      {
        loading ? (
          <Spinner/>
        ): (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Id</span>
              <span>{book._id}</span>
            </div>
            
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Title</span>
              <span>{book.title}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Author</span>
              <span>{book.author}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>publishedYear</span>
              <span>{book.publishedYear}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Created</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Updated</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
            
          </div>
        )
      }
    </div>
  )
}

export default ShowBooks