import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Tile = styled.div`
  height: 183px;
  width: calc(14.28571% - 8.57143px);
  &:hover {
    background-color: white;
    :last-child {
      visibility: visible;
    }
  }
`;

export const LinkTag = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px 15px;
  height: 100%;
  width: auto;
`;

export const Img = styled.img`
  height: auto;
  width: 100%;
`;

export const CarName = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const StartPrice = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
