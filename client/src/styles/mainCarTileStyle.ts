import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Tile = styled.li`
  height: 216px;
  width: 220px;
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 15px;
  height: 100%;
  width: auto;
`;

export const Img = styled.img`
  height: auto;
  width: 100%;
`;

export const LinkBtn = styled.div`
  visibility: hidden;
  :last-child {
    &::before {
      content: '|';
      padding: 0px 8px 0px 8px;
    }
  }
`;
