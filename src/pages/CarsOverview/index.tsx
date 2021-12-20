import { useCallback, useEffect, useState } from 'react';

import { Car, Loading } from '@components';

import { useReduxDispatch, useReduxSelector } from '@shared/hooks';

import { selectCars } from '@store/slices/cars/selectors';
import { fetchCars } from '@store/slices/cars/actions';

import * as S from './styles';

export function CarsOverview() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cars = useReduxSelector(selectCars);
  const dispatch = useReduxDispatch();

  const loadCars = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(false);
      await dispatch(fetchCars()).unwrap();
      setIsLoading(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function handleTryAgain() {
    loadCars();
  }

  useEffect(() => {
    loadCars();
  }, []);

  return (
    <S.Container>
      <S.Content>
        {isLoading && <Loading />}

        {!error && !isLoading && cars.length > 0 && (
          <S.CarList>
            {cars.map((car) => (
              <Car key={car.id} car={car} />
            ))}
          </S.CarList>
        )}

        {!error && !isLoading && cars.length === 0 && (
          <S.Wrapper>
            <S.SadIcon />
            <S.Message>
              Oops...there are no cars registered in the system.
            </S.Message>
          </S.Wrapper>
        )}

        {error && !isLoading && (
          <S.Wrapper>
            <S.SadIcon />
            <S.Message>
              Oops...an error occurred contacting the server.
            </S.Message>
            <S.TryAgainButton type="button" onClick={() => handleTryAgain()}>
              Try again
            </S.TryAgainButton>
          </S.Wrapper>
        )}
      </S.Content>
    </S.Container>
  );
}
