import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as drop from '../../styles/mainDropdownStyle';
import { fetchCarNameList } from '../../slice/carNameSlice';
import { MainCarType } from './MainCarTile';
import { carTypeList } from '../../utils/menu/carTypeList';

export function DropdownMenu({ name, close }: any) {
  const dispatch = useDispatch();
  const [carType, setCarType] = useState<string>('수소/전기차');
  const carNameList = useSelector((state: any) => state.carName.carNameList);
  useEffect(() => {
    dispatch(fetchCarNameList(carType));
  }, [carType]);

  return (
    <drop.Dropdown>
      <drop.DropdownWrapper>
        <drop.ModelMenu>
          {name == '모델' ? (
            <ul>
              {carTypeList.map((type: any) => (
                <li>
                  {carType == type.name ? (
                    <>
                      <drop.CarTypeListHighlight onMouseOver={() => setCarType(type.name)}>
                        <Link to="/">{type.name}</Link>
                      </drop.CarTypeListHighlight>
                      <drop.ModelList>
                        <ul>
                          {carNameList &&
                            carNameList.map((carName: any, idx: any) => (
                              <MainCarType
                                car={carName}
                                name={carName.carName}
                                startPrice={carName.startPrice}
                                carImg={carName.carImage}
                              />
                            ))}
                        </ul>
                      </drop.ModelList>
                    </>
                  ) : (
                    <drop.CarTypeList onMouseOver={() => setCarType(type.name)}>
                      <Link to="/">{type.name}</Link>
                    </drop.CarTypeList>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <>{name} 메뉴 리스트</>
          )}
        </drop.ModelMenu>
        <drop.CloseBtn onClick={close}>닫기</drop.CloseBtn>
      </drop.DropdownWrapper>
    </drop.Dropdown>
  );
}
