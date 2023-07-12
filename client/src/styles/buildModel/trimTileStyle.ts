import { styled } from 'styled-components';

export const TrimTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f6f3f2;
  border: 3px solid #f6f3f2;
  padding: 30px;
  height: 100%;
  width: calc(25% - 22.5px);
`;

export const TrimName = styled.div`
  font-size: 26px;
  letter-spacing: 0.32px;
  line-height: 1;
  font-weight: 600;
`;

export const TrimPrice = styled.div`
  font-size: 22px;
  letter-spacing: 0.32px;
  line-height: 1;
  font-weight: 600;
  margin-top: 8px;
`;

export const TrimImg = styled.img`
  height: auto;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const TrimPowertrain = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #666;
  height: 16px;
`;

export const TrimDetailList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
  height: auto;
  width: 100%;
`;

export const TrimDetailImg = styled.img`
  height: auto;
  width: 30%;
`;

export const BuildBtn = styled.button`
  background: #002c5f;
  color: #fff;
  height: 50px;
  width: 100%;
`;
