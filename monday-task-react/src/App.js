import React from "react";
import Book from "./Books";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Header from "./Header";
import message from "./message";


class App extends React.Component {

  render(){

    // const bookInfo = message.map(book=>{
    //   return (<Book 
      
    //     bookDetails = {{
    //       bookTitle : book.bookTitle,
    //       author : book.author,
    //       description : book.description,
    //       bookImage : book.bookImage,

    //     }}
      
    //   />)
    // })



  
  return (
    <div>
      <Header />
      <div className='container d-flex'>
        <Book bookDetails = {message}/>
      </div>
      <Footer />
    </div>



  );
}}

export default App;
