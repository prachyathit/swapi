import React from 'react'
import Card from './Card';

const CardList = ({people, image}) => {
  const cardComponents = people.map((el, i) => {
    return <Card key={i} name={people[i].name} image={image[i]}/>
  })
  return (
    <div>
      {cardComponents}
    </div>
  );
}

export default CardList