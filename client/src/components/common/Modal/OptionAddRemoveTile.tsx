import * as style from '../../../styles/common/addRemoveStyle';
import { Option } from '../../../types/sliceType';

export function OptionAddRemoveTile({ option }: { option: Option }) {
  return (
    <style.OptionTile>
      <style.OptionItem>
        <style.OptionImg src={`${option.image}`} alt="OptionImg" />
        <div>{option.name}</div>
      </style.OptionItem>
      <div>{option.price.toLocaleString('ko-KR')} 원</div>
    </style.OptionTile>
  );
}
