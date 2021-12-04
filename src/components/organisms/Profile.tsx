import React from 'react';
import styled from 'styled-components';
type Styling = {}
type Props = {
  className?: string
}
export const FCProfile: React.FC<Props & Styling> = ({ className }) => {
return (
    <div className={className}>
      <h1>Profile</h1>
      <div className={`${className}__container`}>
        <div className={`${className}__box`}>
          <img src="logo.png" />
          <div className={`${className}__text-container`}>
            <h4 className={`${className}__name`}>中澤 仁志</h4>
            <p className={`${className}__english-name`}>Hitoshi Nakazawa</p>
            <p className={`${className}__skill`}>フロントエンドエンジニア</p>
            <p className={`${className}__skill-pc`}>React/Vue/TypeScript/PHP/Next.js/ReactNative/Laravel/WordPress/Firebase...</p>
            <p className={`${className}__skill-sp`}>
              React/ReactNative/TypeScript<br />
              Next.js/Vue/PHP/Laravel<br />
              WordPress/Firebase...
            </p>
            <p className={`${className}__introduction`}>
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Profile = styled(FCProfile)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;
  ${({ theme }) => theme.media.sp`
    margin-bottom: 50px;
  `}
  h1 {
    font-size: 100px;
    color: #FFF;
    margin-bottom: -25px;
    ${({ theme }) => theme.media.sp`
      font-size: 50px;
      margin-bottom: -15px;
    `}
  }
  &__container {
    width: 97%;
    height: 600px;
    background-color: #FFF;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.media.sp`
      height: 850px;
    `}
  }
  &__box {
    width: 1235px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    ${({ theme }) => theme.media.sp`
      flex-direction: column;
    `}
  }
  img {
    width: 387px;
    height: 387px;
    border-radius: 50%;
    ${({ theme }) => theme.media.sp`
      width: 220px;
      height: 220px;
      margin-top: 50px;
      margin-bottom: 30px;
    `}
  }
  &__name {
    font-size: 30px;
  }
  &__english-name {
    font-size: 20px;
    color: #4795D7;
    font-weight: normal;
    margin-bottom: 10px;
  }
  &__skill {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__skill-pc {
    font-size: 15px;
    font-weight: bold;
    ${({ theme }) => theme.media.sp`
      display: none;
    `}
  }
  &__skill-sp {
    display: none;
    ${({ theme }) => theme.media.sp`
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
    `}
  }
  &__introduction {
    font-size: 15px;
    line-height: 26px;
    width: 530px;
    margin-top: 35px;
    ${({ theme }) => theme.media.sp`
      font-size: 14px;
      line-height: 24px;
      width: 245px;
    `}
  }
`;