import React, { useState } from 'react';
import { TStringObj } from 'types/types';

export const INPUT_LABEL: TStringObj<string> = {
  name: '회원명',
  customerNo: '특허고객번호',
  userType: '회원종류',
  status: '상태',
  joinDate: '가입날짜'
};

export interface IProps {
  children: React.ReactNode;
  handleReset: () => void;
  handleSearch: () => void;
}

const SearchGroup = ({ children, handleReset, handleSearch }: IProps) => {
  const [searchConditions, setSearchConditions] = useState<TStringObj<string> | undefined>();

  const handleChange = (e: React.MouseEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.currentTarget;
    setSearchConditions({
      ...searchConditions,
      [id]: value
    });
  };

  const onReset = () => {
    setSearchConditions(undefined);
    handleReset();
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') handleSearch();
  };

  return (
    <section className='set-util-box'>
      <div className='l-side'>
        <button type='button' className='btn-ok-exec' onClick={onReset}>
          초기화
        </button>
        <button type='button' className='btn-ok-exec' onClick={handleSearch}>
          조회
        </button>
      </div>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        if (!child.props || !child.props.id) return null;
        const { id, required } = child.props;
        return (
          <>
            <label htmlFor={id} className='label-block'>
              {INPUT_LABEL[id]}
              {required && <span className='point'>(필수입력)</span>}
            </label>
            <child.type
              {...child.props}
              value={searchConditions ? searchConditions[id] : ''}
              onKeyUp={handleEnter}
              onChange={handleChange}
              autoFocus={index === 0}
            />
          </>
        );
      })}
    </section>
  );
};

export default SearchGroup;
