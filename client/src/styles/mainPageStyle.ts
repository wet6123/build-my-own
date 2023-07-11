import { styled } from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Poster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  height: 800px;
  width: auto;
  max-width: 2560px;
`;

// 문구
export const Phrases = styled.div`
  position: absolute;
  display: block;
  left: 7vw;
  top: 152px;
  right: 0;
  width: 1260px;
  height: auto;
  z-index: -1;
  text-align: left;
  margin: 0 auto;
`;

export const CarName = styled.div`
  font-size: 72px;
  margin-bottom: 30px;
`;

export const Sub = styled.div`
  font-size: 26px;
`;

// 이미지
export const ImgBox = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const CarImg = styled.img`
  vertical-align: middle;
  margin-top: 6vw;
  max-width: 100%;
  height: auto;
`;
