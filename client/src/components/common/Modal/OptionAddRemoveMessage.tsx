import { useSelector } from 'react-redux';
import { Option } from '../../../types/sliceType';
import { OptionAddRemoveTile } from './OptionAddRemoveTile';

// 2개 추가 - target은 require 추가 후 선택 가능합니다. require 추가 후 target를 추가하시겠습니까?
// 1개 추가 1개 삭제 - target은 require 삭제 후 선택 가능합니다. exclusive 삭제 후 target를 추가하시겠습니까?
// 2개 삭제 - N Pef 삭제 시만 모달 뜸, detail 2개는 모달 안뜸

export function OptionAddRemoveMessage() {
  const target = useSelector((state: any) => state.build.target);
  const nextOptionList = useSelector((state: any) => state.build.nextOptionList);
  const nextSelected = useSelector((state: any) => state.build.nextSelected);
  const add = useSelector((state: any) => state.build.add);
  const remove = useSelector((state: any) => state.build.remove);

  function notTarget(element: Option) {
    if (element.optionId != target.optionId) return true;
  }

  const requireAdd = add.filter(notTarget);
  const requireRemove = remove.filter(notTarget);

  const addOrRemove = () => {
    if (requireAdd.length >= 1) {
      return (
        <>
          {requireAdd.map((value: Option) => `${value.name} `)}
          추가
        </>
      );
    }
    return (
      <>
        {requireRemove.map((value: Option) => `${value.name} `)}
        삭제
      </>
    );
  };

  const price = () => {
    let answer = 0;
    add.map((value: Option) => {
      answer += value.price;
    });
    remove.map((value: Option) => {
      answer -= value.price;
    });
    return answer;
  };

  return (
    <div>
      <div>
        {target?.name} 은 {addOrRemove()} 후 선택 가능합니다.
      </div>
      <div>
        {addOrRemove()} 후 {target?.name} 를 추가하시겠습니까?
      </div>
      {add?.length ? (
        <div>
          <div>추가되는 품목</div>
          <div>
            <ul>
              {add.map((value: Option) => (
                <OptionAddRemoveTile option={value} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {remove?.length ? (
        <div>
          <div>삭제되는 품목</div>
          <div>
            <ul>
              {remove.map((value: Option) => (
                <OptionAddRemoveTile option={value} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      <div>
        <div>변경 금액</div>
        <div>{price()} 원</div>
      </div>
    </div>
  );
}
