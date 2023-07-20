import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { fetchExterior, setNextExterior } from '../../../slice/buildSlice';
import { Option } from '../../../types/sliceType';
import { ExteriorTile } from './ExteriorTile';
import * as style from '../../../styles/buildOption/colorStyle';

export function ExteriorSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const available = useSelector((state: any) => state.build.available);
  const warning = useSelector((state: any) => state.build.warning);
  const interiorId = useSelector((state: any) => state.build.interiorId);
  const exteriorId = useSelector((state: any) => state.build.exteriorId);
  const nextInteriorId = useSelector((state: any) => state.build.nextInteriorId);
  const nextExteriorId = useSelector((state: any) => state.build.nextExteriorId);
  const exteriorList = useSelector((state: any) => state.build.exteriorList);
  const interiorList = useSelector((state: any) => state.build.interiorList);

  const refreshExterior = () => {
    const payload = {
      carNameId: id,
      modelId,
      interiorId: nextInteriorId,
    };
    dispatch(fetchExterior(payload));
  };

  useEffect(() => {
    refreshExterior();
  }, [nextInteriorId]);

  useEffect(() => {
    const found = exteriorList.find((e: Option) => e.optionId == nextExteriorId);
    if (!found?.available) {
      for (const exterior of exteriorList) {
        if (exterior.available) {
          dispatch(setNextExterior(exterior.optionId));
          break;
        }
      }
    }
  }, [exteriorList]);

  return (
    <>
      <style.ColorTitle>외장색상</style.ColorTitle>
      <div>
        <style.ColorTileWrapper>
          {exteriorList?.map((exterior: Option) => <ExteriorTile exterior={exterior} />)}
        </style.ColorTileWrapper>
      </div>
    </>
  );
}
