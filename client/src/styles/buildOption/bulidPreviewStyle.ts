import { styled } from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  height: 100%;
`;

export const PreviewWrapper = styled.section`
  width: calc(100% - 640px);
  /* width: calc(100% - 1162px); */
  height: 100%;
`;

export const SelectWrapper = styled.section`
  width: 640px;
  /* width: 1162px; */
  height: 100%;
`;
