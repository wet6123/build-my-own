import { Trim } from '../../../types/sliceType';

export function TrimChangeTile({ trim }: { trim: Trim }) {
  return (
    <div>
      <img src={`${trim.image}`} alt="trimImg" />
      <div>{trim.trim}</div>
      <div>{trim.price.toLocaleString('ko-KR')} 원</div>
    </div>
  );
}
