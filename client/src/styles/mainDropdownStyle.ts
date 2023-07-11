import { styled } from 'styled-components';

// dropdown
export const Dropdown = styled.div`
  display: block;
  overflow-y: overlay;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 99;
  max-height: calc(100vh - 80px);

  background-color: #f6f3f2;
  border-top: 1px solid #002c5f;
  border-bottom: 1px solid #e5e5e5;
`;

export const DropdownWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 32px 30px 38px;
  max-width: 1400px;
`;

export const ModelMenu = styled.div`
  position: relative;
  min-height: 462px;
`;

export const CarTypeList = styled.div`
  display: block;
  position: relative;
  color: #000;
  font-size: 16px;
  line-height: 30px;
  padding: 8px 0;
  width: 18%;
`;

export const CarTypeListHighlight = styled.div`
  display: block;
  position: relative;
  color: #007fa8;
  font-size: 16px;
  line-height: 30px;
  padding: 8px 0;
  width: 18%;
`;

export const ModelList = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 18%;
  margin: 18px 0 0;
  padding: 0 4% 0 6.5%;
  width: 82%;
  height: 100%;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 15px;
  width: 50px;
  height: 50px;
`;
