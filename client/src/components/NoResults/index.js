import React from 'react'
// importing react
// These const is declared render a message of unsuccessful
// That if a book is not available for that google API then it we need to give the result "no book to display"
const headerstyled = {
    textAlign:"center"
}
const NoResults = () =>{
    return(
        <div style={headerstyled} className="no-results-wrapper"><h1>No Books To Display</h1></div>
    )
}

export default NoResults