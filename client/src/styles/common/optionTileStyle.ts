import { styled } from 'styled-components';

// optionTile
export const OptionLi = styled.li<{ index: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 237px;
  height: 276px;
  margin-right: ${props => ((props.index + 1) % 4 ? '33px' : ' 0px')};
  margin-bottom: 33px;
  border: 1px solid #ccc;
`;

export const SelectBtn = styled.button`
  position: relative;
  height: 100%;
  width: auto;
`;

export const AvailableDiv = styled.div<{ available: boolean }>`
  display: ${props => (props.available ? 'none' : 'block')};
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 237px;
  height: 158px;
  z-index: 80;
`;

export const AvailableIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OptionImg = styled.img`
  width: 100%;
  height: 158px;
`;

export const OptionTitle = styled.div`
  height: 75px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const OptionPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px 14px;
  font-size: 16px;
  font-weight: 600;
`;
