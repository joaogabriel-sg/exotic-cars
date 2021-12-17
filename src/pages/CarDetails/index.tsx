import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '@components';

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

          <S.BackToCatalogButton to="/" isOutlined>
            <S.ArrowLeftIcon />
            Back to catalog
          </S.BackToCatalogButton>
        </S.Car>

        <S.Slides
          infinite
          centerMode
          focusOnSelect
          slidesToShow={selectedCar.colors.length}
          slidesToScroll={1}
          beforeChange={(_, next) => setCurrentIndex(next)}
          swipeToSlide
        >
          {selectedCar.colors.map(({ color, image }, index) => (
            <S.Slide key={color}>
              <S.Card isActive={index === currentIndex}>
                <S.CarColorThumb src={image} />
              </S.Card>
            </S.Slide>
          ))}
        </S.Slides>
      </S.Content>
    </S.Container>
  );
}
