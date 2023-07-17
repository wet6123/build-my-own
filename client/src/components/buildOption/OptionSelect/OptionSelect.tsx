import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailSelect } from './DetailSelect';
import { fetchOptionList, setOptionList, setSelected } from '../../../slice/buildSlice';
import { AppDispatch } from '../../../store/store';

export function OptionSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const modelId = Number(searchParams.get('modelId'));
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
    }
  }, [nextOptionList, nextSelected]);

  return (
    <>
      <DetailSelect />
      <div>HGenuineSelect</div>
      <div>NPerformanceSelect</div>
    </>
  );
}
