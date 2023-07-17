import { Option } from '../../types/sliceType';
import * as style from '../../styles/common/optionTileStyle';

export function OptionTile({
  option,
  isSelected,
  func,
}: {
  option: Option;
  isSelected: boolean;
  func: (id: number, isRemove: boolean) => void;
}) {
  return (
    <style.OptionLi>
      <style.SelectBtn onClick={() => func(option.optionId, isSelected)} type="button">
        <style.AvailableDiv available={option.available}>
          <style.AvailableIcon
            src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/color_alert.png"
            alt="alertImg"
          />
        </style.AvailableDiv>
        <style.OptionImg src={`${option.image}`} alt="optionImage" />
        <style.OptionTitle>{option.name}</style.OptionTitle>
        <style.OptionPrice>
          <div>{option.price.toLocaleString('ko-KR')} 원</div>
          {isSelected ? (
            <img
              src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/color_selected.png"
              alt="selected img"
            />
          ) : (
            <img src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/option_add.png" alt="addImg" />
          )}
        </style.OptionPrice>
      </style.SelectBtn>
    </style.OptionLi>
  );
}
