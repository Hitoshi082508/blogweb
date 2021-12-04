import React from 'react';
import styled from 'styled-components';
type Props = {
  className?: string
  text: string
}
export const FCQuestion: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={className}>
      <div className={`${className}__text`}>{text}</div>
    </div>
  );
};
export const Question = styled(FCQuestion)`
  margin: 0 0 30px 90px;
  ${({ theme }) => theme.media.sp`
    margin: 0 0 15px 25px;
  `}
  &__text {
    width: 700px;
    height: 60px;
    font-size: 15px;
    line-height: 60px;
    padding-left: 30px;
    border-radius: 36px;
    color: #FFF;
    background: transparent linear-gradient(180deg, #4594D7 0%, #6EB3E0 100%, #94D0E9 100%) 0% 0% no-repeat padding-box;
    position: relative;
    ::before {
      position: absolute;
      display: inline-block;
      content: '';
      top: 45px;
      left: -5px;
      border-style: solid;
      border-width: 2px 8px 8px 10px;
      border-color: transparent transparent #94D0E9 transparent;
      ${({ theme }) => theme.media.sp`
        border-width: 0;
      `}
    }
    ${({ theme }) => theme.media.sp`
      width: 260px;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      padding-left: 15px;
    `}
  }
`;