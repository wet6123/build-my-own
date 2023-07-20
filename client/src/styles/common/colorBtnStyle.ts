import { styled } from 'styled-components';

export const SelectBtn = styled.button`
  position: relative;
`;

export const SelectedImg = styled.img<{ isSelected: boolean }>`
  display: ${props => (props.isSelected ? 'block' : 'none')};
  position: absolute;
  top: 0%;
  left: 100%;
  transform: translate(-50%, -50%);
`;

export const AlertBtn = styled.button`
  position: relative;
`;

export const AlertImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NameTag = styled.span<{ isHover: boolean }>`
  display: ${props => (props.isHover ? 'block' : 'none')};
  position: absolute;
  padding: 28px 30px;
  min-width: 10px;
  border: 1px solid #e4dcd3;
  background: #fff;
  z-index: 80;
`;
