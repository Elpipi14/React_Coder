import './App.css';
import NavBar from './component/NavBar/NavBar';
import Content from './component/Header';
import SampleProducts  from './component/SampleProducts/SampleProducts';
import ItemListContainerHoc from './component/Products/ItemListContainer';
import Footer from './component/Footer';

import Swal from 'sweetalert2';
import {useEffect, useState } from 'react';


function App() {
  return (
    <>
      <NavBar />
      <Content />
      <SampleProducts />
      <ItemListContainerHoc />
      <Footer />
    </>
  );
}

export default App;
