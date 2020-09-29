import axios from "axios";
// importing axios for supporing the promise API  it can be used to intercept HTTP Ruest get, post and using api key to get the searched book

export default {
  searchBooks: query => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  saveBook: book => {
    console.log(book)
    return axios.post("/api/books",book)
  },
  findSavedBooks: () => {
    return axios.get("/api/books")
  },
  deleteSavedBook: (id) => {
    return axios.delete(`/api/books/${id}`)
  }
};