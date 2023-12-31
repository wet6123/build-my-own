import { styled } from 'styled-components';

// header
export const Haeder = styled.div`
  position: fixed;
  top: 0;
  padding: 0px 30px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 80px;
  max-width: 1400px;
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: calc(29% + 500);
  width: 76%;
`;

export const LeftMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 500px;
  width: 55%;
`;

export const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  width: 30%;
`;
