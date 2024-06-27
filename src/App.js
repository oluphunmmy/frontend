import React from 'react';
import  {Routes, Route} from 'react-router-dom'
import DeleteBook from './components/DeleteBooks';
import EditBook from './components/EditBooks';
import ShowBook from './components/ShowBooks';
import CreateBook from './components/CreateBooks';
import Home from './components/Home';
import Login from './components/authcomponent/Login'
import Signup from './components/authcomponent/Signup';
import PrivateRoute from './components/authcomponent/PrivateRoute';

function App() {
  return (
    <Routes>
       {/* Public Routes */}
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      
      {/* PRIVATE */}
      <Route element={<PrivateRoute/>}>

      <Route path='/home' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>

      
      
      </Route>




    </Routes>
  );
}

export default App;
