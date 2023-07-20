import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Option } from '../../types/sliceType';
import { OptionTile } from './OptionTile';
import * as style from '../../styles/buildComplete/buildCompletePageStyle';

export function CompleteSelected() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const modelName = useSelector((state: any) => state.build.modelName);
  const price = useSelector((state: any) => state.build.price);
  const displacement = useSelector((state: any) => state.build.displacement);
  const averageMileage = useSelector((state: any) => state.build.averageMileage);
  const optionInfo = useSelector((state: any) => state.build.optionInfo);
  const totalPrice = useSelector((state: any) => state.build.totalPrice);

  const [interiorInfo, setInteriorInfo] = useState({
    optionId: 0,
    price: 0,
    type: '',
    name: '',
    image: '',
    preview: '',
    available: false,
  });

  const [exteriorInfo, setExteriorInfo] = useState({
    optionId: 0,
    price: 0,
    type: '',
    name: '',
    image: '',
    preview: '',
    available: false,
  });

  useEffect(() => {
    for (const option of optionInfo) {
      if (option.type === 'interior') {
        setInteriorInfo(option);
      }
    }
  }, [optionInfo]);

  useEffect(() => {
    for (const option of optionInfo) {
      if (option.type === 'exterior') {
        setExteriorInfo(option);
      }
    }
  }, [optionInfo]);

  const [optionPrice, setOptionPrice] = useState(0);

  useEffect(() => {
    let res = 0;
    for (const option of optionInfo) {
      if (option.type !== 'interior' && option.type !== 'exterior') {
        res += option.price;
      }
    }
    setOptionPrice(res);
  }, [optionInfo]);

  // handle change
  const handleChange = () => {
    navigate(`/build/option?id=${id}&name=${name}&modelId=${modelId}`);
  };

  return (
    <style.SelectedWrapper>
      <style.SelectedTitle>차량 선택 사항</style.SelectedTitle>
      <style.SelectedTile>
        <style.SelectedTileTitle>
          <style.TileType>모델</style.TileType>
          <style.TilePrice>{price.toLocaleString('ko-KR')} 원</style.TilePrice>
          <style.ChangeBtn onClick={handleChange} type="button">
            변경하기
          </style.ChangeBtn>
        </style.SelectedTileTitle>
        <style.SelectedTileDetail>
          <style.ModelName>{modelName}</style.ModelName>
          <style.DetailWrapper>
            <style.DetailTile>
              <style.DetailName>배기량</style.DetailName>
              <style.DetailValue>{displacement.toLocaleString('ko-KR')}cc</style.DetailValue>
            </style.DetailTile>
            <style.DetailTile>
              <style.DetailName>평균연비</style.DetailName>
              <style.DetailValue>{averageMileage}km/ℓ</style.DetailValue>
            </style.DetailTile>
          </style.DetailWrapper>
          <style.DetailSub>* 모델을 변경하시면 색상과 옵션이 초기화 됩니다.</style.DetailSub>
        </style.SelectedTileDetail>
      </style.SelectedTile>
      <style.SelectedTile>
        <style.SelectedTileTitle>
          <style.TileType>색상</style.TileType>
          <style.TilePrice>
            {interiorInfo.price + exteriorInfo.price
              ? `${(interiorInfo.price + exteriorInfo.price).toLocaleString('ko-KR')} 원`
              : '추가금액 없음'}
          </style.TilePrice>
          <style.ChangeBtn onClick={handleChange} type="button">
            변경하기
          </style.ChangeBtn>
        </style.SelectedTileTitle>
        <style.SelectedTileDetail>
          <style.DetailTileWrapper>
            <style.DetailImgTile>
              <style.DetailName>외장색상</style.DetailName>
              <style.DetailImg src={`${exteriorInfo.image}`} alt="exteriorImg" />
              <style.DetailName>{exteriorInfo.name}</style.DetailName>
            </style.DetailImgTile>
            <style.DetailImgTile>
              <style.DetailName>내장색상</style.DetailName>
              <style.DetailImg src={`${interiorInfo.image}`} alt="interiorImg" />
              <style.DetailName>{interiorInfo.name}</style.DetailName>
            </style.DetailImgTile>
          </style.DetailTileWrapper>
        </style.SelectedTileDetail>
      </style.SelectedTile>
      <style.SelectedTile>
        <style.SelectedTileTitle>
          <style.TileType>옵션</style.TileType>
          <style.TilePrice>
            {optionPrice ? `${optionPrice.toLocaleString('ko-KR')} 원` : '추가금액 없음'}
          </style.TilePrice>
          <style.ChangeBtn onClick={handleChange} type="button">
            변경하기
          </style.ChangeBtn>
        </style.SelectedTileTitle>
        <style.SelectedTileDetail>
          <style.OptionWrapper>
            <style.OptionTitle>옵션</style.OptionTitle>
            <div>
              {optionInfo.map((value: Option) => {
                if (value.type !== 'interior' && value.type !== 'exterior') {
                  return <OptionTile option={value} />;
                }
              })}
            </div>
          </style.OptionWrapper>
        </style.SelectedTileDetail>
      </style.SelectedTile>
      <style.SelectedTotalPrice>
        <style.SelectedPriceTtile>총 차량 가격</style.SelectedPriceTtile>
        <style.SelectedPrice>{totalPrice.toLocaleString('ko-KR')} 원</style.SelectedPrice>
      </style.SelectedTotalPrice>
    </style.SelectedWrapper>
  );
}
