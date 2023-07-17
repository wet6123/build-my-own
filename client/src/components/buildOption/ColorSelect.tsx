import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { checkExIn, fetchExterior, fetchInterior, resetCheckState } from '../../slice/buildSlice';
import { InteriorSelect } from './InteriorSelect';
import { ExteriorSelect } from './ExteriorSelect';
import { openModal } from '../../slice/modelSlice';
import * as style from '../../styles/buildOption/colorStyle';

export function ColorSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = Number(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: any) => state.build.loading);
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

  const refreshInterior = () => {
    const payload = {
      carNameId: id,
      modelId,
      exteriorId: nextExteriorId,
    };
    dispatch(fetchInterior(payload));
  };

  const checkColorCombination = (exterior: number, interior: number) => {
    const paylaod = {
      beforeEx: exteriorId,
      beforeIn: interiorId,
      carNameId: id,
      exterior,
      interior,
      modelId,
    };
    dispatch(checkExIn(paylaod));
  };

  useEffect(() => {
    checkColorCombination(nextExteriorId, nextInteriorId);
  }, [nextInteriorId, nextExteriorId]);

  useEffect(() => {
    if (!loading && !available && warning && exteriorId != 0 && interiorId != 0) {
      const message = () => <div>{warning}</div>;
      const children = message();
      const onCancel = () => {
        dispatch(resetCheckState());
      };
      const onSubmit = () => {
        dispatch(resetCheckState());
      };

      dispatch(openModal({ children, onCancel, onSubmit }));
    }
  }, [loading, available]);

  return (
    <style.ColorSelector>
        <ExteriorSelect />
        <InteriorSelect />
      </style.ColorSelector>
  );
}
