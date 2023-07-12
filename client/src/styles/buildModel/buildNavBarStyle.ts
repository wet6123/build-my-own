import { styled } from 'styled-components';

export const Header = styled.div`
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

export const DropDown = styled.div`
  display: none;
  position: absolute;
  z-index: 99;
  top: 81px;
  width: 100%;
  height: 340px;
  padding: 20px 0 40px;
  background: #fff;
  overflow: hidden;
`;

// under
export const UnderHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
`;
