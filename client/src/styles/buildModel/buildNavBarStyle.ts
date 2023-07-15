import { styled } from 'styled-components';

export const Header = styled.div`
  position: relative;
  height: 139px;
  width: 100%;
  background: #e4dcd3;
`;

// upper
export const UpperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

export const UpperLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 30px 20px 0px 50px;
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 50px;
`;

// 수정 (분리할것) - BuildDropdown
export const DropDown = styled.div`
  position: absolute;
  z-index: 90;
  top: 81px;
  width: 100%;
  height: 340px;
  padding: 20px 0 40px;
  background: #fff;
  overflow: hidden;
`;

export const TileWrapper = styled.div`
  margin-top: 61px;
`;

export const CarTypeBtn = styled.button<{ selected: boolean }>`
  color: ${props => (props.selected ? '#444' : '#fff')};
  background: ${props => (props.selected ? '#fff' : '#444')};
  line-height: 22px;
  font-weight: 500;
  font-size: 15px;
  width: 140px;
  height: 40px;
  padding: 0 20px;
`;

// under
export const UnderHeader = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 78px;
  padding: 0 50px;
`;

export const BuildNavWrapper = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50px;
  height: auto;
`;

export const BuildNavMenu = styled.li`
  display: inline-block;
  height: 49px;
`;
export const BuildNavBtn = styled.button<{ current: boolean }>`
  color: ${props => (props.current ? 'black' : '#00000080')};
  font-weight: 600;
  font-size: 20px;
  width: 180px;
`;
