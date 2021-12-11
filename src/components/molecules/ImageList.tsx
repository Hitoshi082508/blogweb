import React from 'react';
import styled from 'styled-components';
type Styling = {}
type Props = {
  className?: string
  imageFirst: string
  imageSecond: string
  imageThird: string
}
export const FCImageList: React.FC<Props & Styling> = ({ className, imageFirst, imageSecond, imageThird }) => {
return (
    <div className={className}>
      <div className={`${className}__big-image-box`}>
        <img src={imageFirst} />
      </div>
      <div className={`${className}__image-container`}>
        <div className={`${className}__image-box`}>
          <img src={imageSecond} className={`${className}__image`}/>
        </div>
        <div style={{ width: '5%' }}></div>
        <div className={`${className}__image-box`}>
          <img src={imageThird} className={`${className}__image`}/>
        </div>
      </div>
    </div>
  );
};
export const ImageList = styled(FCImageList)`
  &__big-image-box {
    width: 100%;
    box-shadow: 5px 10px 40px 0px rgba(0,0,0,0.6);
  }
  &__image-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  &__image-box {
    width: 50%;
    box-shadow: 5px 10px 40px 0px rgba(0,0,0,0.6);
  }
  &__image {
    width: 100%;
    height: auto;
  }
`;