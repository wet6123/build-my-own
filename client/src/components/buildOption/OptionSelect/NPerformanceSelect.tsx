import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { fetchOptionList } from '../../../slice/buildSlice';
import { Option } from '../../../types/sliceType';
import { OptionTile } from '../../common/OptionTile';
import * as style from '../../../styles/buildOption/optionSelectStyle';

export function NPerformanceSelect() {
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
      <style.OptionTitle>N Performance</style.OptionTitle>
      <style.OptionDescription>
        현대자동차의 모터스포츠 기술력과 노하우, 그리고 N의 유전자가 결합되어 지금까지 경험하지 못한 고성능 감성을
        제시합니다.
      </style.OptionDescription>
      <style.OptionUl>
        {optionList?.map((NPerformanceOption: Option, idx: number) => {
          if (NPerformanceOption.type === 'N Performance')
            return (
              <OptionTile
                option={NPerformanceOption}
                isSelected={selected.includes(NPerformanceOption.optionId)}
                func={select}
                key={NPerformanceOption.optionId}
                forceUnavailable
                index={idx}
              />
            );
        })}
      </style.OptionUl>
    </>
  );
}
