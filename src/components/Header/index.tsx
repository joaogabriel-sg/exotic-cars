import 'react-datepicker/dist/react-datepicker.css';

import { forwardRef, InputHTMLAttributes, useState } from 'react';
import DatePicker from 'react-datepicker';

import * as S from './styles';

const InputDate = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ value, onClick, onChange }, ref) => (
  <S.Input
    ref={ref}
    type="date"
    value={value}
    onChange={onChange}
    onClick={onClick}
  />
));

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const minDate = new Date();

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <S.HighlightedText>Exotic</S.HighlightedText> Cars
        </S.Logo>

        <S.SearchBarContainer>
          <S.InputWrapper>
            <S.LocationIcon />
            <S.Input type="text" defaultValue="North Carolina" />
          </S.InputWrapper>

          <S.CalendarInputs>
            <S.InputWrapper htmlFor="dateStart">
              <S.CalendarIcon />
              <DatePicker
                id="dateStart"
                onChange={() => {}}
                minDate={minDate}
                customInput={<InputDate />}
              />
            </S.InputWrapper>

            <S.InputWrapper htmlFor="dateEnd">
              <S.CalendarIcon />
              <DatePicker
                id="dateEnd"
                onChange={() => {}}
                minDate={minDate}
                customInput={<InputDate />}
              />
            </S.InputWrapper>
          </S.CalendarInputs>

          <S.SearchButton>
            <S.SearchIcon />
          </S.SearchButton>
        </S.SearchBarContainer>

        <S.AuthButtons isMobileMenuOpen={isMobileMenuOpen}>
          <S.CloseMobileMenuButton onClick={handleCloseMobileMenu}>
            <S.CloseIcon />
          </S.CloseMobileMenuButton>

          <S.AuthButton styleType="secondary">Sign up</S.AuthButton>
          <S.AuthButton styleType="primary">Sign in</S.AuthButton>
        </S.AuthButtons>

        <S.OpenMobileMenuButton onClick={handleOpenMobileMenu}>
          <S.BurgerMenuIcon />
        </S.OpenMobileMenuButton>
      </S.Content>
    </S.Container>
  );
}
