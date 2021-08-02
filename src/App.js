import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  return <div>
  <h2>I like {name} </h2>
  <h4>rating : {rating} / 5.0</h4>
  <img src={picture} alt={name}/>

  </div>;
}


const foodLike = [
  { id: 1,
    name: 'kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.b1--UnlhGFKh5BddbDxkCAHaF2%26pid%3DApi&f=1',
    rating: 3.1,
  },
  { id: 2,
    name: 'applepie',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.puUGdHGz0U2e_zPLUrSelgHaE8%26pid%3DApi&f=1',
    rating: 4.5,
  },
  { id: 3,
    name: 'coke',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IQR9ILFuyZMeBQbF49ckEgHaHa%26pid%3DApi&f=1',
    rating: 4.1,
  },
  { id: 4,
    name: 'galbi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KpNRot7v1-nWcWNBmWpCqwHaE_%26pid%3DApi&f=1',
    rating: 5.0,
  },
  { id: 5,
    name: 'chicken',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MVweLYuSzlCq58-O1YovuAHaLH%26pid%3DApi&f=1',
    rating: 5.0,
  },
];
//App 컴포넌트 상위 컴포넌트
//Food 컴포넌트 하위 컴포넌트


function App() {
  return (
  <div>
    {foodLike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
  </div> 
  );
}

export default App;


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}