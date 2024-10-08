import './App.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer';
import Content from './component/Header';
import SampleProducts  from './component/SampleProducts/SampleProducts';
import Products from './component/Products/Products';
import Register from './component/Users/RegisterUser';
import SessionUser from './component/Users/SessionUser';
import Footer from './component/Footer';

import Swal from 'sweetalert2';
import {useEffect, useState } from 'react';


function App() {
  
  // const [name, setName] = useState('');
  
  // useEffect(() => {
  //   Swal.fire({
  //     title: "¿Cuál es tu nombre?",
  //     input: "text",
  //     showCancelButton: false,
  //     confirmButtonText: 'Enviar'
  //   }).then((result) => {
  //     if (result.value) {
  //       setName(result.value); 
  //     }
  //   });
  // }, []);

  return (
    <>
      <NavBar />
      <ItemListContainer name={name} />
      <Content />
      <SampleProducts />
      <Products />
      <Register />
      <SessionUser />
      <Footer />
    </>
  );
}

export default App;
