import Lottie from 'react-lottie';

import carAnimation from '@shared/assets/lotties/car-animation.json';

import * as S from './styles';

export function Loading() {
  return (
    <S.Container>
      <Lottie
        options={{
          animationData: carAnimation,
          loop: true,
          autoplay: true,
        }}
        width={300}
        height={300}
      />
    </S.Container>
  );
}
