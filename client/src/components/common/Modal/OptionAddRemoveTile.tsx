import { Option } from '../../../types/sliceType';

export function OptionAddRemoveTile({ option }: { option: Option }) {
  return (
    <li>
      <div>
        <img src={`${option.image}`} alt="OptionImg" />
      </div>
      <div>{option.name}</div>
      <div>{option.price} 원</div>
    </li>
  );
}
