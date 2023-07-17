import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { fetchInterior, setNextInterior } from '../../../slice/buildSlice';
import { Color } from '../../../types/sliceType';
import { InteriorTile } from './InteriorTile';
import * as style from '../../../styles/buildOption/colorStyle';

export function InteriorSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const nextInteriorId = useSelector((state: any) => state.build.nextInteriorId);
  const nextExteriorId = useSelector((state: any) => state.build.nextExteriorId);
  const interiorList = useSelector((state: any) => state.build.interiorList);

  const refreshInterior = () => {
    const payload = {
      carNameId: id,
      modelId,
      exteriorId: nextExteriorId,
    };
    dispatch(fetchInterior(payload));
  };

  useEffect(() => {
    refreshInterior();
  }, [nextExteriorId]);

  useEffect(() => {
    const found = interiorList.find((e: Color) => e.optionId == nextInteriorId);
    if (!found?.available) {
      for (const interior of interiorList) {
        if (interior.available) {
          dispatch(setNextInterior(interior.optionId));
          break;
        }
      }
    }
  }, [interiorList]);

  return (
    <>
      <style.ColorTitle>내장색상</style.ColorTitle>
      <div>
        <ul>{interiorList?.map((interior: Color) => <InteriorTile interior={interior} />)}</ul>
      </div>
    </>
  );
}
