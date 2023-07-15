import { styled } from 'styled-components';

export const Background = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
  z-index: 98;
`;

export const WindowBackground = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 97;
`;

export const Window = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  margin-top: 7.5vh;
  padding: 80px 40px;
  height: auto;
  width: 600px;
  background-color: white;
  z-index: 99;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 28px;
  right: 28px;
  width: 50px;
  height: 50px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 1px;
    background-color: #000;
    transform: translate(-50%) rotate(-45deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 1px;
    background-color: #000;
    transform: translatex(-50%) rotate(45deg);
  }
`;

export const Detail = styled.div`
  margin-top: 30px;
`;

export const BtnWrapper = styled.div`
  margin-top: 60px;
`;

export const Button = styled.button`
  margin-left: 8px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  width: 120px;
  height: 40px;
  background-color: ${props => (props.color === 'gray' ? '#767676' : '#002c5f')};
`;
