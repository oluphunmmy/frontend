import React, { useState, useEffect } from 'react';
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const EditBooks = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState('')
  const [editedbook, setEditedBook] = useState([])
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const authurlBook = process.env.REACT_APP_API_URL

  useEffect(() => {

    if (!token) {
      toast.error('Authorization required. Please login.');
      return;
  }

  const headers = {
      Authorization: `Bearer ${token}`
  }



    setLoading(true)
    axios.get(`${authurlBook}/${id}`, {headers})
      .then((res) => {
        // setTitle(res.data.title)
        // setAuthor(res.data.author)
        // setPublishedYear(res.data.publishedYear)
        setEditedBook(res.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        toast.error("Error: ", error)
      })
  })

  const handleEditBook = () => {
    // 
    if (!token) {
      toast.error('Authorization required. Please login.');
      return;
  }

  const headers = {
      Authorization: `Bearer ${token}`
  }

    const data = {
      title: title,
      author: author,
      publishedYear: publishedYear
    }
    setLoading(true)

    axios.put(`http://localhost:3001/api/book/${id}`, data, {headers})
      .then(() => {
        setLoading(false)
        toast.success("Book Edited Successfully")
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      })
      .catch((error) => {
        console.log(error)
        toast.error("Error: ", error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            placeholder={editedbook.title}
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            placeholder={editedbook.author}
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>PublishedYear</label>
          <input
            type='number'
            placeholder={editedbook.publishedYear}
            value={publishedYear}
            required
            onChange={(e) => setPublishedYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8'
          onClick={handleEditBook}>
          Save
        </button>

      </div>

      <ToastContainer />
    </div>
  )
}

export default EditBooks