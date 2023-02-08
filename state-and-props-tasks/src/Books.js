import React from "react";

class Books extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.bookDetails;
    }

    render(){
        console.log(this.state)
        console.log(this.props.bookDetails)
        const booksINFO = this.state.map(bookDetails=>{
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
        // return (
        //     <div className="card bg-dark text-white" style={{width: "18rem" , marginLeft : "25px"}}>
        //         <img src={this.props.bookDetails.bookImage} className={`image for book ${this.props.bookDetails.bookImage}`}alt="..." />

        //         <div className="card-body">
        //             <p className="card-text">Book Title : {this.props.bookDetails.bookTitle}</p>
        //             <p className="card-text">Author : {this.props.bookDetails.author}</p>
        //             <p className="card-text">Description : {this.props.bookDetails.description}</p>
        //         </div>
        //     </div>
        // )
    }
}

export default Books