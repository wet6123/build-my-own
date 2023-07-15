import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { CarName } from '../../types/sliceType';
import { openModal, toggleBuildDropdown } from '../../slice/modelSlice';
import * as style from '../../styles/buildModel/buildCarTileStyle';

function message() {
  return (
    <>
      <div>차종을 변경하시겠습니까?</div>
      <div>현재까지의 변경사항은 저장되지 않습니다.</div>
    </>
  );
}

export function BuildCarTile({ car }: { car: CarName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = useLocation();

  const children = message();
  const onCancel = () => {};
  const onSubmit = () => {
    dispatch(toggleBuildDropdown());
    navigate(`/build/model?id=${car.id}&name=${car.carName}`);
  };

  const toggle = () => {
    if (currentUrl.pathname === '/build/model') {
      dispatch(toggleBuildDropdown());
      navigate(`/build/model?id=${car.id}&name=${car.carName}`);
    } else {
      dispatch(openModal({ children, onCancel, onSubmit }));
    }
  };

  return (
    <style.Tile>
      <style.TileWrapper onClick={toggle}>
        <style.Img src={car.carImage} alt="carImg" />
        <style.CarName>{car.carName}</style.CarName>
        <style.StartPrice>{(car.startPrice / 1000).toLocaleString('ko-KR')}만원~</style.StartPrice>
      </style.TileWrapper>
    </style.Tile>
  );
}
