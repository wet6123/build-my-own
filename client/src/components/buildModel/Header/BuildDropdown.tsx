import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carTypeList } from '../../../utils/menu/carTypeList';
import { fetchCarNameList } from '../../../slice/carNameSlice';
import { BuildCarTile } from './BuildCarTile';
import * as style from '../../../styles/buildModel/buildNavBarStyle';

export function BuildDropdown() {
  const dispatch = useDispatch();
  const availableList = carTypeList.filter(carType => carType.type === 'carType');
  const [carType, setCarType] = useState<string>(availableList[0].name);
  const carNameList = useSelector((state: any) => state.carName.carNameList);
  useEffect(() => {
    dispatch(fetchCarNameList(carType));
  }, [carType]);

  return (
    <style.DropDown>
      <div>
        {availableList?.map((type: any) => (
          <style.CarTypeBtn
            onClick={() => {
              setCarType(type.name);
            }}
            type="button"
            selected={carType === type.name}>
            {type.name}
          </style.CarTypeBtn>
        ))}
      </div>
      <style.TileWrapper>{carNameList?.map((carName: any) => <BuildCarTile car={carName} />)}</style.TileWrapper>
    </style.DropDown>
  );
}
