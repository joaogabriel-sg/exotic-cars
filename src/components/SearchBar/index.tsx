import 'react-datepicker/dist/react-datepicker.css';

import { forwardRef, InputHTMLAttributes } from 'react';
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

export function SearchBar() {
  const minDate = new Date();

  return (
    <S.Container>
      <S.InputWrapper htmlFor="location">
        <S.LocationIcon />
        <S.Input type="text" id="location" defaultValue="North Carolina" />
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
    </S.Container>
  );
}
