import { useSelector } from 'react-redux';
import { TrimChangeTile } from './TrimChangeTile';

export function ColorChangeMessage() {
  const warning = useSelector((state: any) => state.build.warning);
  const type = useSelector((state: any) => state.build.type);
  const beforeTrim = useSelector((state: any) => state.build.beforeTrim);
  const afterTrim = useSelector((state: any) => state.build.afterTrim);

  return (
    <>
      <div>{warning}</div>
      {type === 'trim' ? (
        <>
          <div>트림을 변경하시겠습니까?</div>
          <div>
            <div>
              <div>현재 트림</div>
              <TrimChangeTile trim={beforeTrim} />
            </div>
            <div>
              <div>변경 트림</div>
              <TrimChangeTile trim={afterTrim} />
            </div>
          </div>
          <div>
            <div>변경 시 선택 해제되는 품목</div>
          </div>
          <div>
            <div>변경 금액</div>
          </div>
        </>
      ) : null}
    </>
  );
}
