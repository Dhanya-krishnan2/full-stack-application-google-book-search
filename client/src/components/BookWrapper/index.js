import React,{useContext} from 'react'
import './style.css'
import API from '../../api'
import {MessageContext} from '../../Hooks'
// These file requiring other files such as api,styles and hooks , here restructing is happening for the useContext hook, this hooks
//lets the data to pass to children element
const BookWrapper = props => {

    const [message,setMessage] = useContext(MessageContext)
    // we are using arrow function here and setting the message for the user
    const saveArticle = book => {
        API.saveBook(book)
        setMessage("Your book has been saved")
    }
   // thsese are the children properties
    const {authors,title,description,link,image} = props
    return(
        <div className="book-wrapper">
            <div>
            <h1>{title}</h1>
            <h1>Written By : {authors.join(", ")}</h1>
            <h3>Synopsis : {description}</h3>
           
            </div>
            <div>
            
            <h2><img alt={title +"image"} src={image}></img></h2>
            <h2><a className="link" rel="noopener noreferrer" target="_blank" href={link}>Link to Book</a></h2>
            <h2><button className="save-btn" onClick={()=> saveArticle(props)}>Save Book</button></h2>
            <h2>{message}</h2>
            </div>
        </div>
    )




}

// class BookWrapper extends Component {

//     state = {
//         message : ""
//     }

//     saveArticle = book => {
//         API.saveBook(book)
//         this.setState({message:"This Book Has Been Saved! "})

//     }


// render(){
//     const {authors,title,description,link,image} = this.props
  
//     return(
//         <div className="book-wrapper">
//             <div>
//             <h1>{title} Written By : {authors.join(", ")}</h1>
//             <h3>Synopsis : {description}</h3>
           
//             </div>
//             <div>
            
//             <h2><img alt={title +"image"} src={image}></img></h2>
//             <h2><a className="link" rel="noopener noreferrer" target="_blank" href={link}>Link to Book</a></h2>
//             <h2><button className="save-btn" onClick={()=> this.saveArticle(this.props)}>Save Book</button></h2>
//             <h2>{this.state.message}</h2>
//             </div>
//         </div>
//     )
// }

// }



export default BookWrapper
// exporting default here, that is Then in another file you import the default export without using the {}, like this,