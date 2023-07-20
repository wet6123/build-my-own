import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { fetchOptionList } from '../../../slice/buildSlice';
import { Option } from '../../../types/sliceType';
import { OptionTile } from '../../common/OptionTile';
import * as style from '../../../styles/buildOption/optionSelectStyle';

export function HGenuineSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const modelId = Number(searchParams.get('modelId'));
  const optionList = useSelector((state: any) => state.build.optionList);
  const selected = useSelector((state: any) => state.build.selected);

  const dispatch = useDispatch<AppDispatch>();

  const select = (id: number, isRemove: boolean) => {
    let type = 'add';
    if (isRemove) type = 'remove';

    const payload = {
      modelId,
      optionId: id,
      selected,
      type,
    };
    dispatch(fetchOptionList(payload));
  };

  return (
    <>
      <style.OptionTitle>H Genuine Accessories</style.OptionTitle>
      <style.OptionDescription>
        다양한 일반 편의, 레저 상품 등으로 차별화 커스터마이징을 원하는 고객의 니즈 및 라이프스타일을 지원합니다.
      </style.OptionDescription>
      <style.OptionUl>
        {optionList?.map((HGenuineOption: Option, idx: number) => {
          if (HGenuineOption.type === 'H Genuine Accessories' && HGenuineOption.available)
            return (
              <OptionTile
                option={HGenuineOption}
                isSelected={selected.includes(HGenuineOption.optionId)}
                func={select}
                key={HGenuineOption.optionId}
                forceUnavailable={false}
                index={idx}
              />
            );
        })}
      </style.OptionUl>
    </>
  );
}
