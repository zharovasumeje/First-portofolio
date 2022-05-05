import React from 'react';
import './Cards.css';
import CardItem from './CardsItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What I can do : </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/backend.jpg'
              text='Some basic postgreSQL and PHP knowledge'
              label='Backend'
              path='/'
            />
            <CardItem
              src='img/api.jpg'
              text='Some basic API testing using Postman'
              label='API'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img\webdev.jpg'
              text='Some basic HTML5 , CSS3 , Bootstrap , Javascript and ReactJs knowlwdge'
              label='WebDev'
              path='/about'
            />
            <CardItem
              src='img/contact1.jpg'
              text='Contact me to get more details.'
              label='Contact'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;