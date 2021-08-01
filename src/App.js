import React from 'react';

function Food({ name, picture }){
  return <div>
  <h2>I like {name} </h2>
  <img src={picture} alt={name}/>
  </div>;
}


const foodLike = [
  { id: 1,
    name: 'kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.b1--UnlhGFKh5BddbDxkCAHaF2%26pid%3DApi&f=1',
  },
  { id: 2,
    name: 'applepie',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.puUGdHGz0U2e_zPLUrSelgHaE8%26pid%3DApi&f=1',
  },
  { id: 3,
    name: 'coke',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IQR9ILFuyZMeBQbF49ckEgHaHa%26pid%3DApi&f=1',
  },
  { id: 4,
    name: 'galbi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KpNRot7v1-nWcWNBmWpCqwHaE_%26pid%3DApi&f=1',
  },
  { id: 5,
    name: 'chicken',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MVweLYuSzlCq58-O1YovuAHaLH%26pid%3DApi&f=1',
  },
];


function App() {
  return (
  <div>
    {foodLike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
  </div>
    
  
  
  );
}

export default App;
