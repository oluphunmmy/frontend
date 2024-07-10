import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './elements/Spinner';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import BooksCard from './home/BooksCard';
import BooksTable from './home/BooksTable';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowType] = useState('table');
  const navigate = useNavigate(); // Correctly call useNavigate as a function
  const appurl = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('token');

  useEffect(() => {
    handleRetrieveBooks();
  }, [token]);

  const handleRetrieveBooks = async () => {
    if (!token) {
      toast.error('Authorization required, please login');
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    setLoading(true);
    axios
      .get(`${appurl}`, { headers })
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data, 'books');
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // Correctly navigate to the root path
  };

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-l'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-l'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center gap-x-4'>
        <h1 className='text-3xl my-8'>BOOKS LIST</h1>
        <div className='flex flex-row items-start gap-4'>
          <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
          <Button variant='outlined' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      {loading ? <Spinner /> : showtype === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />}
    </div>
  );
};

export default Home;
