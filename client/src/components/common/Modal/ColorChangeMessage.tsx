import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrimChangeTile } from './TrimChangeTile';
import { ModelChangeAddRemove } from './ModelChangeAddRemove';
import { modelPreview } from '../../../slice/buildSlice';
import { AppDispatch } from '../../../store/store';
import * as style from '../../../styles/common/addRemoveStyle';

export function ColorChangeMessage({ currentId, targetId }: { currentId: number; targetId: number }) {
  const warning = useSelector((state: any) => state.build.warning);
  const type = useSelector((state: any) => state.build.type);
  const beforeTrim = useSelector((state: any) => state.build.beforeTrim);
  const afterTrim = useSelector((state: any) => state.build.afterTrim);
  const selected = useSelector((state: any) => state.build.selected);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const payload2 = {
      currentId,
      targetId,
      selected,
    };
    console.log(payload2);
    dispatch(modelPreview(payload2));
  }, [targetId]);

  return (
    <>
      <style.TrimWord>{warning}</style.TrimWord>
      {type === 'trim' ? (
        <>
          <style.TrimWord>트림을 변경하시겠습니까?</style.TrimWord>
          <style.TrimWrapper>
            <div>
              <style.TrimWord>현재 트림</style.TrimWord>
              <TrimChangeTile trim={beforeTrim} />
            </div>
            <div>
              <style.TrimWord>변경 트림</style.TrimWord>
              <TrimChangeTile trim={afterTrim} />
            </div>
          </style.TrimWrapper>
          <ModelChangeAddRemove otherPrice={afterTrim.price - beforeTrim.price} />
        </>
      ) : null}
    </>
  );
}
