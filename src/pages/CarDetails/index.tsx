import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '@components';

import { useReduxSelector } from '@shared/hooks';

import { selectCars } from '@store/slices/cars/selectors';

import * as S from './styles';

type Params = {
  carId: string;
};

export function CarDetails() {
  const { carId } = useParams() as Params;

  const cars = useReduxSelector(selectCars);

  const selectedCar = useMemo(
    () => cars.find((car) => car.id === +carId)!,
    [carId, cars]
  );

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
            <S.ColorIndex>01</S.ColorIndex>
            <S.ColorName>{selectedCar.colors[0].color}</S.ColorName>
          </S.Color>

          <S.CarImageContainer>
            <S.CarImage src={selectedCar.colors[0].image} />
          </S.CarImageContainer>

          <S.BookNowButtonContainer>
            <S.BookNowButton to="/">
              Book now
              <S.ArrowRightIcon />
            </S.BookNowButton>
          </S.BookNowButtonContainer>

          <S.BackToCatalogButton to="/" isOutlined>
            <S.ArrowLeftIcon />
            Back to catalog
          </S.BackToCatalogButton>
        </S.Car>
      </S.Content>
    </S.Container>
  );
}
