import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailSelect } from './DetailSelect';
import { fetchOptionList, resetOptionList, setOptionList, setSelected } from '../../../slice/buildSlice';
import { AppDispatch } from '../../../store/store';
import { OptionAddRemoveMessage } from '../../common/Modal/OptionAddRemoveMessage';
import { openModal } from '../../../slice/modelSlice';
import { Option } from '../../../types/sliceType';
import { HGenuineSelect } from './HGenuineSelect';
import { NPerformanceSelect } from './NPerformanceSelect';

export function OptionSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const modelId = Number(searchParams.get('modelId'));
  const target = useSelector((state: any) => state.build.target);
  const optionList = useSelector((state: any) => state.build.optionList);
  const nextOptionList = useSelector((state: any) => state.build.nextOptionList);
  const nextSelected = useSelector((state: any) => state.build.nextSelected);
  const add = useSelector((state: any) => state.build.add);
  const remove = useSelector((state: any) => state.build.remove);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const payload = {
      modelId,
      selected: [],
      type: 'get',
    };
    dispatch(fetchOptionList(payload));
  }, []);

  useEffect(() => {
    if (add.length + remove.length === 0) {
      dispatch(setOptionList(nextOptionList));
      dispatch(setSelected(nextSelected));
    } else if (add.length + remove.length === 1) {
      dispatch(setOptionList(nextOptionList));
      dispatch(setSelected(nextSelected));
    } else if (add.length + remove.length >= 2 && target != null) {
      // 모든 삭제 옵션이 상세 옵션이면 그냥 삭제
      if (remove.length >= 2) {
        const requireRemove = remove.filter((element: Option) => {
          if (element.optionId != target.optionId && element.type != target.type) return true;
        });
        if (requireRemove <= 0) {
          dispatch(setOptionList(nextOptionList));
          dispatch(setSelected(nextSelected));
          return;
        }
        // 삭제되는 옵션이 H, N 인 경우 메세지, 상세 옵션 표기 안하고 모달 띄움
      }
      // 이외의 경우 모달 띄움
      const message = () => <OptionAddRemoveMessage />;
      const children = message();
      const onCancel = () => {};
      const onSubmit = () => {
        dispatch(setOptionList(nextOptionList));
        dispatch(setSelected(nextSelected));
      };

      console.log(add);
      console.log(remove);
      console.log(`target:`);
      console.log(target);

      dispatch(openModal({ children, onCancel, onSubmit }));
    }
  }, [nextOptionList, nextSelected]);

  const HGenuineList = optionList.filter((element: Option) => {
    if (element.type === 'H Genuine Accessories' && element.available) return true;
  });
  const NPerformanceList = optionList.filter((element: Option) => {
    if (element.type === 'N Performance' && element.available) return true;
  });

  return (
    <>
      <DetailSelect />
      {HGenuineList.length ? <HGenuineSelect /> : null}
      {NPerformanceList.length ? <NPerformanceSelect /> : null}
    </>
  );
}
