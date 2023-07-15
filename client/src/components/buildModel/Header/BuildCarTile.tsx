import { useDispatch, useSelector } from 'react-redux';
import { CarName } from '../../../types/sliceType';
import { toggleBuildDropdown } from '../../../slice/modelSlice';
import * as style from '../../../styles/buildModel/buildCarTileStyle';

export function BuildCarTile({ car }: { car: CarName }) {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleBuildDropdown());
  };

  return (
    <style.Tile>
      <style.LinkTag onClick={toggle} to={`/build/model?id=${car.id}&name=${car.carName}`}>
        <style.Img src={car.carImage} alt="carImg" />
        <style.CarName>{car.carName}</style.CarName>
        <style.StartPrice>{(car.startPrice / 1000).toLocaleString('ko-KR')}만원~</style.StartPrice>
      </style.LinkTag>
    </style.Tile>
  );
}
