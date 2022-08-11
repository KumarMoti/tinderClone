import { width } from '@mui/system';
import React from 'react'
import TinderCard from 'react-tinder-card';
import './Card.css';

export default function Cards() {
  const [cars, setCars] = React.useState([
    {
      name: 'Tesla',
      url: 'https://imageio.forbes.com/specials-images/imageserve/5f1f37a40a5db2c8275972c0/-Photo-by-JOHN-THYS-AFP-via-Getty-Images-/960x0.jpg?format=jpg&width=960'
    },
    {
      name: 'BMW',
      url: 'https://cdn.motor1.com/images/mgl/3WW1j1/s3/2022-bmw-i7.jpg'
    },
    {
      name: 'Lykan',
      url: 'https://wallpaperaccess.com/full/1402612.jpg'
    },
    {
      name: 'Porsche',
      url: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/8718/Porsche-911-GT3-with-Touring-Package/1642402319549/front-left-side-47.jpg'
    },
    {
      name: 'XUV',
      url: 'https://m.economictimes.com/thumb/msid-86834106,width-1200,height-900,resizemode-4,imgsize-49986/xuv-700_mahndra.jpg'
    },
    {
      name: 'Fortuner',
      url: 'https://www.rushlane.com/wp-content/uploads/2021/11/toyota-fortuner-modified-lamborghini-urus-india-price-6-1200x675.jpg'
    },
    {
      name: 'KIA',
      url: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Carnival/7341/1649825407650/front-left-side-47.jpg'
    }
  ]);
  return (
    <>
      <div className='card-container'>
        {
          cars.map(car => (
            <TinderCard className='swipe'
            key={car.name}
            preventSwipe={['up','down']} >
              <div style={{ backgroundImage: `url(${car.url})` }}
              className='card'>
                <h2>{car.name}</h2>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </>
  )
}
