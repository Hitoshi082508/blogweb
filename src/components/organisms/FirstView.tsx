import React from 'react';
import styled from 'styled-components';
type Styling = {}
type Props = {
  className?: string
}
export const FCFirstView: React.FC<Props & Styling> = ({ className }) => {
return (
    <div className={className}>
      <div className={`${className}__text-container`}>
        <h1>
          ハートを揺さぶるデザインで世界を<br />
          前進させる<br />
          デザインの力を証明する
        </h1>
        <h3>
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテ。 ーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミ。
        </h3>
      </div>
      <div className={`${className}__circle-container`}>
        <div className={`${className}__scroll-text`}>Scroll</div>
        <div className={`${className}__scroll-circle`}></div>
      </div>
    </div>
  );
};
export const FirstView = styled(FCFirstView)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &__text-container {
    margin-top: 10%;
    ${({ theme }) => theme.media.sp`
      margin-top: 20%;
    `}
  }
  h1 {
    width: 500px;
    font-size: 30px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 10%;
    ${({ theme }) => theme.media.sp`
      width: 240px;
      font-size: 20px;
    `}
  }
  h3 {
    width: 500px;
    font-size: 15px;
    font-weight: normal;
    color: #FFF;
    ${({ theme }) => theme.media.sp`
      width: 240px;
      font-size: 14px;
    `}
  }
  &__circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__scroll-text {
    font-size: 20px;
    color: #FFF;
    margin-bottom: 15px;
    ${({ theme }) => theme.media.sp`
      font-size: 13px;
      margin-bottom: 10px;
    `}
  }
  &__scroll-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #FFF;
    ${({ theme }) => theme.media.sp`
      width: 5px;
      height: 5px;
    `}
  }
`;