import { useState } from 'react';

import { Car, Header } from '@components';

import * as S from './styles';

export function CarsOverview() {
  const [cars] = useState([
    {
      id: 1,
      brand: 'Audi',
      brandLogo: 'https://i.ibb.co/2dzKvDW/logo.png',
      model: 'TT RS',
      thumbnail: 'https://i.ibb.co/vH8DTkj/lateral.png',
      rent: {
        price: 525,
        period: 'day',
      },
      colors: [
        {
          color: 'Metal',
          image: 'https://i.ibb.co/bKn02j8/01.jpg',
        },
        {
          color: 'Red',
          image: 'https://i.ibb.co/RTmwvvx/02.jpg',
        },
      ],
    },
  ]);

  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.CarList>
          {cars.map((car) => (
            <Car key={car.id} car={car} />
          ))}
        </S.CarList>
      </S.Content>
    </S.Container>
  );
}
