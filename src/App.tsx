import React from 'react';
import './App.css';
import Arusa from './Container/AboutArusa/Arusa';
import ArticleContainer from './Container/ArticleContainer/ArticleContainer';
import ArticleSofa from './Container/ArticleSofa/ArticleSofa';
import Detail from './Container/DetailContainer/Detail';
import Footer from './Container/FooterContainer/Footer';
import LightChair from './Container/LightChairContainer/LightChair';
import LookBook from './Container/LookBookContainer/LookBook';
import NavBar from './Container/NavBar/NavBar';
 import ProductTwo from './Container/ProductContainerTwo/ProductTwo';
import ProductItem from './Container/ProductItem/ProductItem';
 import ProductItemOne from './Container/ProductItemOne/ProductItemOne';
import Promotion from './Container/PromotionContainer/Promotion';
import RegisterForm from './Container/RegisterForm/RegisterForm';

function App() {
  return (
  <div className="Container">
    <div className="main-container">
   <NavBar/>
   <Arusa/>
   <ProductItem/>
   <LightChair/>
   <ProductTwo/> 
   <ProductItemOne/>
   <LookBook/>
   <Detail/>
   <Promotion/>
   <ArticleSofa/>
   <ArticleContainer/>
   <Footer/>
   <RegisterForm/>
   </div>
   </div>
   
  );
}

export default App;
