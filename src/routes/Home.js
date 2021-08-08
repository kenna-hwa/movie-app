import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';



class Home extends React.Component {

  state = {
    isLoading : true,
    movies: [],
  }

  getMovies = async () => {
    const ID_KEY = 'UZV5oZ3BtdPJzOWTXH3E';
    const SECRET_KEY = 'oa76uk3qhY';
    const search = this.state.value;
    try{
      if(search === ""){
        this.setState({movies:[], isLoading: false})
      } else {
        const {data: {
          items
        }} = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
          params: {
            query: search,
            display: 20
          },
          headers: {
            'X-Naver-Client-Id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY 
          }
        });
        this.setState({movies: items, isLoading: false});
      }
    } catch(error) {
      console.log(error);
    }
  };

 componentDidMount(){
    this.getMovies();
 }

  render(){

    const { isLoading, movies } = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
          {movies.map(movie => (
            <Movie
            key = {movie.id}
            id =  {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image}
            genres = {movie.genres}
            />
          ))}
          </div>
        )}
      </section>
      );
    }
  }
export default Home;