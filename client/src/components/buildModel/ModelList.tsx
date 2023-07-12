import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../../store/store';
import { fetchTrimList } from '../../slice/modelSlice';
import { Trim } from '../../types/sliceType';
import { TrimTile } from './TrimTile';
import * as style from '../../styles/buildModel/trimListStyle';

export function ModelList() {
  const location = useLocation();
  const { id } = location.state;

  const dispatch = useDispatch<AppDispatch>();
  const trimList = useSelector((state: StateType) => state.powertrain.trimList);
  const powertrain = useSelector((state: StateType) => state.powertrain.powertrain);

  useEffect(() => {
    const carNamePayload = {
      carNameId: id,
      engine: powertrain.engine,
      transmission: powertrain.transmission,
      drivetrain: powertrain.drivetrain,
    };
    if (carNamePayload.engine) dispatch(fetchTrimList(carNamePayload));
  }, [powertrain]);

  return (
    <>
      <style.TrimTitle>전체 모델 ({trimList.length})</style.TrimTitle>
      <style.TrimTileList>{trimList?.map((trim: Trim) => <TrimTile trimObj={trim} />)}</style.TrimTileList>
    </>
  );
}
