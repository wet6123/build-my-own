import { styled } from 'styled-components';

export const Wrapper = styled.div<{ scroll: boolean; position: number }>`
  position: ${props => (props.scroll ? 'fixed' : 'relative')};
  top: ${props => (props.scroll ? `-${props.position}px` : '')};
  overflow-y: ${props => (props.scroll ? 'scroll' : '')};
  width: ${props => (props.scroll ? '100%' : '')};
`;

export const HaederWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 90;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  height: 100%;
  margin-top: 139px;
`;

export const PreviewWrapper = styled.section<{ show: boolean }>`
  width: ${props => (props.show ? 'calc(100% - 640px)' : 'calc(100% - 1162px)')};
  min-width: 350px;
  height: 100%;
  padding: 160px 80px 0 72px;
  position: fixed;
  left: 0;
  top: 0;
`;

export const SelectWrapper = styled.section<{ show: boolean }>`
  width: ${props => (props.show ? '640px' : '1162px')};
  height: 100%;
  padding: 120px 50px 120px 60px;
  border-left: 1px solid #d3d3d3;
`;

export const ColorHeader = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 139px;
  right: -1px;
  width: 640px;
  padding: 60px 60px 30px;
  opacity: 1;
  font-size: 30px;
  font-weight: 600;
  background: #fff;
  z-index: 85;
`;

export const SelectHeader = styled.div<{ show: boolean }>`
  display: block;
  position: sticky;
  top: 139px;
  right: -1px;
  width: ${props => (props.show ? '640px' : '100%')};
  padding: 60px 0 30px;
  opacity: 1;
  font-size: 30px;
  font-weight: 600;
  background: #fff;
  z-index: 85;
`;

export const CompleteBtnWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;
`;

export const CompleteBtn = styled.button`
  width: 180px;
  height: 50px;
  background: #002c5f;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
