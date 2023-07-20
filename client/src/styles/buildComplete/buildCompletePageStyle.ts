import { styled } from 'styled-components';

// Header
export const Header = styled.div`
  position: relative;
  height: 139px;
  width: 100%;
  background: #e4dcd3;
`;

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

// Preview

export const Preview = styled.h2`
  padding: 80px 30px 0 30px;
`;

export const PreviewTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 30px;
`;

export const PreviewModelName = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 60px;
`;

export const PreviewWrapper = styled.div`
  width: 568px;
  margin: 0 auto;
`;

export const PreviewImgWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;
  background: url(https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/bg_vr360_circle.png) no-repeat bottom;
  background-size: contain;
`;

export const PreviewExImg = styled.img<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  max-width: 940px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const PreviewInImg = styled.img<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PreviewWarning = styled.div`
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: -0.8px;
  color: #666;
`;

export const PreviewColorBtnWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const PreviewColorBtn = styled.button<{ show: boolean }>`
  background: ${props => (props.show ? '#007fa8;' : '#e4dcd3')};
  color: ${props => (props.show ? '#fff;' : '#000')};
  width: 140px;
  height: 40px;
`;

// CompleteSelected

export const SelectedWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const SelectedTitle = styled.div`
  display: block;
  width: 100%;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 2px solid #7f7f7f;
  z-index: 10;
  font-size: 20px;
  font-weight: 600;
`;

export const SelectedTile = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const SelectedTileTitle = styled.div`
  flex: none;
  max-width: 256px;
  width: 25%;
`;

export const SelectedTileDetail = styled.div`
  width: 100%;
`;

export const TileType = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const TilePrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ChangeBtn = styled.button`
  font-size: 12px;
  font-weight: 400;
  height: 30px;
  width: 70px;
  background-color: #767676;
  color: #fff;
`;

// model detail
export const ModelName = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 30px;
`;

export const DetailWrapper = styled.div`
  padding-bottom: 30px;
`;

export const DetailTile = styled.span`
  padding-right: 160px;
`;

export const DetailName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const DetailValue = styled.span`
  padding-left: 30px;
  font-size: 16px;
`;

export const DetailSub = styled.div`
  font-size: 16px;
  color: #666;
`;

export const DetailImgTile = styled.div`
  padding-right: 60px;
  display: flex;
  align-items: flex-start;
`;

export const DetailImg = styled.img`
  width: 85px;
  height: 85px;
  margin: 0 10px 0 30px;
`;

export const DetailTileWrapper = styled.div`
  display: flex;
`;

// option
export const OptionWrapper = styled.div`
  display: flex;
`;

export const OptionTitle = styled.div`
  width: 82px;
  font-weight: 600;
`;

export const SelectedTotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  padding-bottom: 90px;
`;

export const SelectedPriceTtile = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const SelectedPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-left: 30px;
`;
