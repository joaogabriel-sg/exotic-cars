import { useEffect, useState } from 'react';

import { Car, Header, Loading } from '@components';

import { useReduxDispatch, useReduxSelector } from '@shared/hooks';

import { selectCars } from '@store/slices/cars/selectors';
import { fetchCars } from '@store/slices/cars/actions';

import * as S from './styles';

export function CarsOverview() {
  const [isLoading, setIsLoading] = useState(true);

  const cars = useReduxSelector(selectCars);
  const dispatch = useReduxDispatch();

  useEffect(() => {
    async function loadCars() {
      await dispatch(fetchCars());
      setIsLoading(false);
    }

    loadCars();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Content>
        {isLoading && <Loading />}

        {!isLoading && (
          <S.CarList>
            {cars.map((car) => (
              <Car key={car.id} car={car} />
            ))}
          </S.CarList>
        )}
      </S.Content>
    </S.Container>
  );
}
