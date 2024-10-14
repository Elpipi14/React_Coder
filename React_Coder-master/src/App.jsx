import './App.css';
import NavBar from './component/NavBar/NavBar';
import Content from './component/Header';
import SampleProducts  from './component/SampleProducts/SampleProducts';
import Products from './component/Products/Products';
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
      <Content />
      <SampleProducts />
      <Products />
      <Footer />
    </>
  );
}

export default App;
