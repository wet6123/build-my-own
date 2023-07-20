import { Option } from '../../types/sliceType';
import * as style from '../../styles/buildComplete/optionTileStyle';

export function OptionTile({ option }: { option: Option }) {
  return (
    <style.OptionWrapper>
      <style.OptionLeft>
        <style.OptionImg src={`${option.image}`} alt={`${option.name}Img`} />
        <style.OptionTitle>{option.name}</style.OptionTitle>
      </style.OptionLeft>
      <style.OptionPrice>{option.price.toLocaleString('ko-KR')} 원</style.OptionPrice>
    </style.OptionWrapper>
  );
}
