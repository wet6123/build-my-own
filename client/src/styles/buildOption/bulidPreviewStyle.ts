import { styled } from 'styled-components';

export const PreviewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PreviewTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

export const PreviewModelName = styled.span`
  font-size: 16px;
  line-height: 30px;
  color: #666;
  margin: 10px 40px 0 0;
`;

export const PreviewBtn = styled.button`
  font-size: 16px;
  font-weight: 800;
  color: #002c5f;
  margin: 0 10px 0 0;
`;

export const PreviewWrapper = styled.div`
  margin-top: 35px;
`;

export const PreviewPriceTitle = styled.span`
  font-size: 19px;
  font-weight: 600;
  margin-right: 30px;
`;

export const PreviewPrice = styled.b`
  font-size: 30px;
  font-weight: 600;
`;

export const PreviewImgWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;
  background: url(https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/bg_vr360_circle.png) no-repeat bottom;
  background-size: contain;
`;

export const PreviewExImg = styled.img<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  max-width: 940px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const PreviewInImg = styled.img<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PreviewWarning = styled.div`
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: -0.8px;
  color: #666;
`;

export const PreviewColorBtnWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const PreviewColorBtn = styled.button<{ show: boolean }>`
  background: ${props => (props.show ? '#007fa8;' : '#e4dcd3')};
  color: ${props => (props.show ? '#fff;' : '#000')};
  width: 140px;
  height: 40px;
`;
