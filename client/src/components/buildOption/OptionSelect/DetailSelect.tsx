import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Option } from '../../../types/sliceType';
import { OptionTile } from '../../common/OptionTile';
import { AppDispatch } from '../../../store/store';
import { fetchOptionList } from '../../../slice/buildSlice';
import * as style from '../../../styles/common/optionTileStyle';

export function DetailSelect() {
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
      <div>상세 품목</div>
      <div>
        상세 품목 리스트
        <style.OptionUl>
          {optionList?.map((detailOption: Option) => {
            if (detailOption.type === 'detail item')
              return (
                <OptionTile
                  option={detailOption}
                  isSelected={selected.includes(detailOption.optionId)}
                  func={select}
                  key={detailOption.optionId}
                />
              );
          })}
        </style.OptionUl>
      </div>
    </>
  );
}
