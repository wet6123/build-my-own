import { styled } from 'styled-components';

// ColorChangeMessage
export const TrimWord = styled.div`
  height: 40px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const TrimWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0 50px;
`;

// ModelChangeAddRemove
export const Wrapper = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionWord = styled.div`
  height: 40px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const OptionUl = styled.ul`
  border-top: 2px solid #7f7f7f;
  border-bottom: 2px solid #7f7f7f;
  margin: 10px 0;
`;

// OptionAddRemoveTile
export const OptionTile = styled.li`
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  width: 100%;
  padding: 0 30px;
`;

export const OptionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 110px;
`;

export const OptionImg = styled.img`
  height: auto;
  width: 80px;
  margin: 10px 15px;
`;
