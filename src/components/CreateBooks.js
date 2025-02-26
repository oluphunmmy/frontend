import React, { useState } from 'react'
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBooks = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setpublishedYear] = useState('')
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const authurlBook = process.env.REACT_APP_AUTH_URL
  console.log('url',authurlBook)
  

  const handleSaveBook = (event) =>{

    event.preventDefault();

    
    if(!title || !author || !publishedYear || !image){
      toast.error('Fill up all details')
      return
    }
    if (!token){
      toast.error('Authorization required. Please login.');
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    }

    const data = {
      title: title,
      author: author,
      publishedYear: publishedYear
    }
    setLoading(true)

    axios.post(`https://backend-2ozo.onrender.com/api/book`, data, {headers})
    .then(()=>{
      setLoading(false)
      toast.success("Book Added Successfully")
      setTimeout(()=>{
        navigate('/home')

      },2000)
      
    })
    .catch((error)=>{
      console.log(error)
      toast.error("Error: ", error)
    })
  }
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
        
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
          type='text'
          value={title}
          required
          onChange={(e)=>setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
          type='text'
          value={author}
          required
          onChange={(e)=>setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>PublishedYear</label>
          <input
          type='text'
          value={publishedYear}
          required
          onChange={(e)=>setpublishedYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Upload Book Image</label>
          <input
          type='file'
          accept='image/*'
          required
          onChange={(e)=>setImage(e.target.files[0])}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>

        </div>

        <ToastContainer/>
    </div>
  )
}

export default CreateBooks