import { Link } from 'react-router-dom';
import * as tile from '../../styles/mainCarTileStyle';

export function MainCarType({ carName, startPrice, carImg }: any) {
  return (
    <tile.Tile>
      <tile.LinkTag to="/">
        <tile.Img src={carImg} alt="carImg" />
        <div>{carName}</div>
        <div>{(startPrice / 1000).toLocaleString('ko-KR')}만원~</div>
        <tile.LinkBtn>
          <Link to="/">자세히 보기</Link>
          <Link to="/">내 차 만들기</Link>
        </tile.LinkBtn>
      </tile.LinkTag>
    </tile.Tile>
  );
}
