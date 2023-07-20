import { styled } from 'styled-components';

export const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 32px;
  margin-bottom: 30px;
`;

export const Dropdown = styled.select`
  width: 100%;
  max-width: 320px;
  height: 40px;
  font-weight: 600;
  padding: 0 10px;
`;

export const TrimBtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

export const TrimBtn = styled.button<{ highlight: boolean }>`
  border: ${props => (props.highlight ? '2px solid #007fa8' : '2px solid #d3d3d3')};
  width: 150px;
  height: 96px;
  padding: 10px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const ModelChangeWrapper = styled.div`
  margin-top: 80px;
`;

export const ModelChangeTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 32px;
  margin-bottom: 30px;
`;
