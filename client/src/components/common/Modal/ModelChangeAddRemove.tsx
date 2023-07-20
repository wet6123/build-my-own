import { useSelector } from 'react-redux';
import { OptionAddRemoveTile } from './OptionAddRemoveTile';
import { Option } from '../../../types/sliceType';
import * as style from '../../../styles/common/addRemoveStyle';

export function ModelChangeAddRemove() {
  const previewPrice = useSelector((state: any) => state.build.previewPrice);
  const previewAdd = useSelector((state: any) => state.build.previewAdd);
  const previewRemove = useSelector((state: any) => state.build.previewRemove);

  return (
    <>
      <style.Wrapper show={previewRemove.length > 0}>
        <style.OptionWord>변경 시 선택 해제되는 품목</style.OptionWord>
        <style.OptionUl>
          {previewRemove.map((value: Option) => (
            <OptionAddRemoveTile option={value} />
          ))}
        </style.OptionUl>
      </style.Wrapper>
      <style.Wrapper show={previewAdd.length > 0}>
        <style.OptionWord>변경 시 추가되는 품목</style.OptionWord>
        <style.OptionUl>
          {previewAdd.map((value: Option) => (
            <OptionAddRemoveTile option={value} />
          ))}
        </style.OptionUl>
      </style.Wrapper>
      <style.OptionDiv>
        <style.OptionWord>변경 금액</style.OptionWord>
        <style.OptionWord>{previewPrice.toLocaleString('ko-KR')} 원</style.OptionWord>
      </style.OptionDiv>
    </>
  );
}
