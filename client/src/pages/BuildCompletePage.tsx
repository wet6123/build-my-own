import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import {
  fetchModelInfo,
  fetchOptionInfo,
  setExteriorPreview,
  setInteriorPreview,
  setShowPreview,
  setTotalPrice,
} from '../slice/buildSlice';
import { CompleteHeader } from '../components/buildComplete/CompleteHeader';
import { CompletePreview } from '../components/buildComplete/CompletePreview';
import { CompleteSelected } from '../components/buildComplete/CompleteSelected';

export function BuildCompletePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const showPreview = useSelector((state: any) => state.build.showPreview);

  const modelName = useSelector((state: any) => state.build.modelName);
  const interiorId = useSelector((state: any) => state.build.interiorId);
  const exteriorId = useSelector((state: any) => state.build.exteriorId);
  const exteriorList = useSelector((state: any) => state.build.exteriorList);
  const interiorList = useSelector((state: any) => state.build.interiorList);
  const exteriorPreview = useSelector((state: any) => state.build.exteriorPreview);
  const interiorPreview = useSelector((state: any) => state.build.interiorPreview);
  const selected = useSelector((state: any) => state.build.selected);
  const price = useSelector((state: any) => state.build.price);
  const optionInfo = useSelector((state: any) => state.build.optionInfo);

  useEffect(() => {
    dispatch(setShowPreview('ex'));
  }, []);

  // 모델 정보 불러오기
  useEffect(() => {
    const payload = {
      modelId,
    };

    dispatch(fetchModelInfo(payload));
  }, [modelId]);

  useEffect(() => {
    for (const interior of interiorList) {
      if (interior.optionId === interiorId) {
        dispatch(setInteriorPreview(interior.preview));
      }
    }
  }, [interiorId]);

  useEffect(() => {
    for (const exterior of exteriorList) {
      if (exterior.optionId === exteriorId) {
        dispatch(setExteriorPreview(exterior.preview));
      }
    }
  }, [exteriorId]);

  // 옵션 가격 불러오기
  useEffect(() => {
    if (interiorId && exteriorId) {
      const payload = {
        optionList: [...selected, interiorId, exteriorId],
      };

      dispatch(fetchOptionInfo(payload));
    }
  }, [selected, interiorId, exteriorId]);

  useEffect(() => {
    let res = 0;

    res += price;

    for (const option of optionInfo) {
      res += option.price;
    }

    dispatch(setTotalPrice(res));
  }, [price, optionInfo]);

  return (
    <>
      <div>
        <CompleteHeader />
      </div>
      <div>
        <CompletePreview />
      </div>
      <div>
        <CompleteSelected />
      </div>
    </>
  );
}
