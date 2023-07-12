import { Trim } from '../../types/sliceType';
import * as style from '../../styles/buildModel/trimTileStyle';

export function TrimTile({ trimObj }: { trimObj: Trim }) {
  return (
    <style.TrimTile>
      <div>
        <style.TrimName>{trimObj.trim}</style.TrimName>
        <style.TrimPrice>{trimObj.price.toLocaleString('ko-KR')} 원</style.TrimPrice>
        <div>
          <style.TrimImg src={trimObj.image} alt="carImg" />
        </div>
        <style.TrimPowertrain>
          {trimObj.engine} {trimObj.transmission} {trimObj.drivetrain}
        </style.TrimPowertrain>
        <style.TrimDetailList>
          <style.TrimDetailImg src={trimObj.detail1} alt="detail_1" />
          <style.TrimDetailImg src={trimObj.detail2} alt="detail_2" />
          <style.TrimDetailImg src={trimObj.detail3} alt="detail_3" />
        </style.TrimDetailList>
      </div>
      <style.BuildBtn type="button">내 차 만들기</style.BuildBtn>
    </style.TrimTile>
  );
}
