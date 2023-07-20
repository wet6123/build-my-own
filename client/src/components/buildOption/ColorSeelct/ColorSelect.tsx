import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import {
  setOptionExpand,
  changeModel,
  changeTrim,
  checkExIn,
  fetchExterior,
  fetchInterior,
  resetCheckState,
  setShowPreview,
} from '../../../slice/buildSlice';
import { InteriorSelect } from './InteriorSelect';
import { ExteriorSelect } from './ExteriorSelect';
import { openModal } from '../../../slice/modelSlice';
import * as style from '../../../styles/buildOption/colorStyle';
import { ColorChangeMessage } from '../../common/Modal/ColorChangeMessage';

export function ColorSelect() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
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
  const type = useSelector((state: any) => state.build.type);
  const targetInterior = useSelector((state: any) => state.build.targetInterior);
  const targetModelId = useSelector((state: any) => state.build.targetModelId);
  const selected = useSelector((state: any) => state.build.selected);

  const exteriorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) dispatch(setShowPreview('ex'));
      else dispatch(setShowPreview('in'));
    });

    exteriorRef.current && observer.observe(exteriorRef.current);
  }, []);

  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) dispatch(setOptionExpand(true));
      else dispatch(setOptionExpand(false));
    });

    detailRef.current && observer.observe(detailRef.current);
  }, []);

  useEffect(() => {
    const payload = {
      carNameId: id,
      modelId,
      exteriorId: 0,
    };

    dispatch(fetchInterior(payload));
  }, []);

  useEffect(() => {
    const paylaod = {
      beforeEx: exteriorId,
      beforeIn: interiorId,
      carNameId: id,
      exterior: nextExteriorId,
      interior: nextInteriorId,
      modelId,
    };
    dispatch(checkExIn(paylaod));
  }, [nextInteriorId, nextExteriorId]);

  useEffect(() => {
    if (
      !loading &&
      !available &&
      warning &&
      exteriorId != 0 &&
      interiorId != 0 &&
      (type !== 'trim' || (type === 'trim' && targetInterior != 0))
    ) {
      const message = () => <ColorChangeMessage currentId={modelId} targetId={targetModelId} />;
      const children = message();
      const onCancel = () => {
        dispatch(resetCheckState());
      };
      const onSubmit = () => {
        if (type === 'trim') {
          // modelChange
          navigate(`/build/option?id=${id}&name=${name}&modelId=${targetModelId}`);
          const paylaod = {
            beforeEx: exteriorId,
            beforeIn: interiorId,
            carNameId: id,
            exterior: nextExteriorId,
            interior: targetInterior,
            modelId: targetModelId,
          };
          dispatch(changeTrim(paylaod));
          const payload1 = {
            carNameId: id,
            modelId: targetModelId,
            exteriorId: nextExteriorId,
          };
          dispatch(fetchInterior(payload1));
          const payload2 = {
            currentId: modelId,
            targetId: targetModelId,
            selected,
          };
          dispatch(changeModel(payload2));
        }
        dispatch(resetCheckState());
      };

      dispatch(openModal({ children, onCancel, onSubmit }));
    }
  }, [loading, available, targetInterior]);

  return (
    <style.ColorSelector>
      <div ref={exteriorRef} />
      <ExteriorSelect />
      <div ref={detailRef} />
      <InteriorSelect />
    </style.ColorSelector>
  );
}
