import { styled } from 'styled-components';

// ColorSelect
export const ColorSelector = styled.div`
  width: 100%;
`;

export const ColorHeader = styled.div`
  position: fixed;
  top: 100px;
  width: 640px;
  padding-left: 70px;
  opacity: 1;
`;
// ExteriorSelect

export const ColorTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ColorTileWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

// ExteriorTile
export const ColorTile = styled.li`
  margin: 8px;
`;

export const ExteriorImg = styled.img`
  width: 85px;
  height: 85px;
`;

// InteriorTile
export const InteriorImg = styled.img`
  width: 496px;
  height: 75px;
`;
