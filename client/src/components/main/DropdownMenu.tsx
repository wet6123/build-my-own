import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as drop from '../../styles/mainDropdownStyle';
import { fetchCarNameList } from '../../slice/carNameSlice';
import { MainCarType } from './MainCarTile';

const ModelList = [
  {
    id: 1,
    name: '수소/전기차',
  },
  {
    id: 2,
    name: '승용',
  },
  {
    id: 3,
    name: 'SUV',
  },
  {
    id: 4,
    name: 'MPV',
  },
  {
    id: 5,
    name: '소형트럭&택시',
  },
  {
    id: 6,
    name: '트럭',
  },
  {
    id: 7,
    name: '버스',
  },
  {
    id: 8,
    name: 'GENESIS',
  },
  {
    id: 9,
    name: 'CASPER',
  },
];

export function DropdownMenu({ name, close }: any) {
  const dispatch = useDispatch();
  const [carType, setCarType] = useState<String>('수소/전기차');
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
              {ModelList.map((model: any) => (
                <li>
                  {carType == model.name ? (
                    <>
                      <drop.CarTypeListHighlight onMouseOver={() => setCarType(model.name)}>
                        <Link to="/">{model.name}</Link>
                      </drop.CarTypeListHighlight>
                      <drop.ModelList>
                        <ul>
                          {carNameList &&
                            carNameList.map((carName: any, idx: any) => (
                              <MainCarType
                                carName={carName.carName}
                                startPrice={carName.startPrice}
                                carImg={carName.carImage}
                              />
                            ))}
                        </ul>
                      </drop.ModelList>
                    </>
                  ) : (
                    <drop.CarTypeList onMouseOver={() => setCarType(model.name)}>
                      <Link to="/">{model.name}</Link>
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
