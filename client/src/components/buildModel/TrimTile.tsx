import { Link, useSearchParams } from 'react-router-dom';
import { Trim } from '../../types/sliceType';
import * as style from '../../styles/buildModel/trimTileStyle';

export function TrimTile({ trimObj }: { trimObj: Trim }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const toOptionLink = `/build/option?id=${id}&name=${name}&modelId=${trimObj.modelId}`;

  return (
    <style.TrimTile>
      <div>
        <style.TrimName>{trimObj.trim}</style.TrimName>
        <style.TrimPrice>{trimObj.price.toLocaleString('ko-KR')} 원</style.TrimPrice>
        <div>
          <Link to={toOptionLink}>
            <style.TrimImg src={trimObj.image} alt="carImg" />
          </Link>
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
      <style.BuildBtn to={toOptionLink}>내 차 만들기</style.BuildBtn>
    </style.TrimTile>
  );
}
