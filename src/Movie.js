import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


//Movie 컴포넌트는 state가 필요하지 않으니 함수형 컴포넌트로 작성

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0,180)}...</p>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                </ul>
            </div>
        </div>
        )
}

//api로 넘어오는 데이터를 관리하기 위해 prop-types 사용
Movie.propTypes = {
     year: PropTypes.number.isRequired,
     title: PropTypes.string.isRequired,
     summary: PropTypes.string.isRequired,
     poster: PropTypes.string.isRequired,
     genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;
