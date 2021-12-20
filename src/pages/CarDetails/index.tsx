import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CarColorsSlider, DetailedCar, Loading } from '@components';

import { getCarById } from '@shared/services/api/cars/getCarById';
import { CarType } from '@shared/types';

import * as S from './styles';

type Params = {
  carId: string;
};

export function CarDetails() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [car, setCar] = useState<CarType | null>(null);

  const { carId } = useParams() as Params;

  const handleSelectCarColor = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
  }, []);

  const loadCarData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(false);
      const data = await getCarById(carId);
      setCar(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [carId]);

  const handleTryAgain = () => {
    loadCarData();
  };

  useEffect(() => {
    loadCarData();
  }, []);

  return (
    <S.Container>
      <S.Content>
        {isLoading && <Loading />}

        {error && !isLoading && !car && (
          <S.Wrapper>
            <S.SadIcon />
            <S.Message>
              Oops...an error occurred contacting the server
              <br />
              or this is a non-existent car.
            </S.Message>
            <S.TryAgainButton type="button" onClick={handleTryAgain}>
              Try again
            </S.TryAgainButton>
          </S.Wrapper>
        )}

        {!error && !isLoading && car && (
          <>
            <DetailedCar
              car={car}
              color={car.colors[currentIndex].color}
              image={car.colors[currentIndex].image}
              index={currentIndex}
            />
            <CarColorsSlider
              currentSlideIndex={currentIndex}
              carColors={car.colors}
              handleSelectCarColor={handleSelectCarColor}
            />
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
