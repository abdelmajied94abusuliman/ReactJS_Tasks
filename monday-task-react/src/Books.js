import React from "react";
import { useState } from "react";

function Books (props){

    const [state, setstate] = useState(props.bookDetails);

    const booksINFO = state.map(bookDetails=>{
        return (
            <div className="card bg-dark text-white" style={{width: "18rem" , marginLeft : "25px"}}>
                <img src={bookDetails.bookImage} className={`image for book ${bookDetails.bookImage}`}alt="..." />

                <div className="card-body">
                    <p className="card-text">Book Title : {bookDetails.bookTitle}</p>
                    <p className="card-text">Author : {bookDetails.author}</p>
                    <p className="card-text">Description : {bookDetails.description}</p>
                </div>
            </div>
        )
    })
    return(
        booksINFO
    )
}

export default Books