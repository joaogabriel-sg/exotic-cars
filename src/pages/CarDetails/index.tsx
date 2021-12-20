import { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CarColorsSlider, Header } from '@components';

import { useReduxSelector } from '@shared/hooks';

import { selectCars } from '@store/slices/cars/selectors';

import * as S from './styles';

type Params = {
  carId: string;
};

export function CarDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { carId } = useParams() as Params;

  const cars = useReduxSelector(selectCars);

  const selectedCar = useMemo(
    () => cars.find((car) => car.id === +carId)!,
    [carId, cars]
  );

  const handleSelectCarColor = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.Car>
          <S.Details>
            <S.BrandLogo src={selectedCar.brandLogo} />
            <S.Info>
              <S.BrandModel>
                {selectedCar.brand} {selectedCar.model}
              </S.BrandModel>
              <S.Rent>
                ${selectedCar.rent.price}/{selectedCar.rent.period}
              </S.Rent>
            </S.Info>
          </S.Details>

          <S.Color>
            <S.ColorIndex>
              {`${currentIndex + 1}`.padStart(2, '0')}
            </S.ColorIndex>
            <S.ColorName>{selectedCar.colors[currentIndex].color}</S.ColorName>
          </S.Color>

          <S.CarImageContainer>
            <S.CarImage src={selectedCar.colors[currentIndex].image} />
          </S.CarImageContainer>

          <S.BookNowButtonContainer>
            <S.BookNowButton to="/">
              Book now
              <S.ArrowRightIcon />
            </S.BookNowButton>
          </S.BookNowButtonContainer>

          <S.BackToCatalogButton to="/" $isOutlined>
            <S.ArrowLeftIcon />
            Back to catalog
          </S.BackToCatalogButton>
        </S.Car>

        <CarColorsSlider
          currentSlideIndex={currentIndex}
          carColors={selectedCar.colors}
          handleSelectCarColor={handleSelectCarColor}
        />
      </S.Content>
    </S.Container>
  );
}
