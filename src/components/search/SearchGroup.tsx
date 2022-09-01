import React, { useCallback, useRef, useState } from 'react';
import { TStringObj } from 'types/types';
import { INPUT_LABEL } from './constants';

export interface IProps {
  children: React.ReactNode;
  handleReset: () => void;
  handleSearch: (_condition: TStringObj) => void;
}

const SearchGroup = ({ children, handleReset, handleSearch }: IProps) => {
  const [searchConditions, setSearchConditions] = useState<TStringObj>({});
  const selectRef = useRef<{ [id: string]: HTMLSelectElement }>({});

  const handleChange = (e: React.MouseEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.currentTarget;
    setSearchConditions({
      ...searchConditions,
      [id]: value
    });
  };

  const onReset = () => {
    setSearchConditions({});
    handleReset();
  };

  const onSearch = async () => {
    const merged = { ...searchConditions };
    Object.values(selectRef.current).forEach((ref) => {
      Object.assign(merged, { [ref.id]: ref.value });
    });
    setSearchConditions(merged);
    handleSearch(merged);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') handleSearch(searchConditions);
  };

  const renderChildNode = useCallback(
    (child: React.ReactElement, autoFocus: boolean) => {
      const { props, type: nodeType } = child;
      const { id, required } = props;

      if (nodeType === 'select') {
        return (
          <>
            <label htmlFor={id} className='label-block'>
              {INPUT_LABEL[id]}
              {required && <span className='point'>(필수입력)</span>}
            </label>
            <child.type
              {...child.props}
              // eslint-disable-next-line no-return-assign
              ref={(el: HTMLSelectElement) => (selectRef.current[id] = el)}
              onKeyUp={handleEnter}
              autoFocus={autoFocus}
            />
          </>
        );
      }

      return (
        <>
          <label htmlFor={id} className='label-block'>
            {INPUT_LABEL[id]}
            {required && <span className='point'>(필수입력)</span>}
          </label>
          <child.type
            {...child.props}
            value={searchConditions[id] || ''}
            onKeyUp={handleEnter}
            onChange={handleChange}
            autoFocus={autoFocus}
          />
        </>
      );
    },
    [searchConditions, handleEnter, handleChange]
  );

  return (
    <section className='set-util-box'>
      <div className='l-side'>
        <button type='button' className='btn-ok-exec' onClick={onReset}>
          초기화
        </button>
        <button type='button' className='btn-ok-exec' onClick={onSearch}>
          조회
        </button>
      </div>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        if (child.type === React.Fragment) {
          const nodes = child.props.children.map((node: React.ReactElement, index: number) =>
            renderChildNode(node, index === 0)
          );
          return nodes;
        }
        return renderChildNode(child, index === 0);
      })}
    </section>
  );
};

export default SearchGroup;
