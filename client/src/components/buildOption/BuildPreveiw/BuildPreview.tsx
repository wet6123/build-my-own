import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  fetchModelInfo,
  fetchOptionInfo,
  setExteriorPreview,
  setInteriorPreview,
  setShowPreview,
  setTotalPrice,
} from '../../../slice/buildSlice';
import { AppDispatch } from '../../../store/store';
import * as style from '../../../styles/buildOption/bulidPreviewStyle';

export function BuildPreview() {
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const modelName = useSelector((state: any) => state.build.modelName);
  const trim = useSelector((state: any) => state.build.trim);
  const price = useSelector((state: any) => state.build.price);
  const selected = useSelector((state: any) => state.build.selected);
  const interiorId = useSelector((state: any) => state.build.interiorId);
  const exteriorId = useSelector((state: any) => state.build.exteriorId);
  const exteriorList = useSelector((state: any) => state.build.exteriorList);
  const interiorList = useSelector((state: any) => state.build.interiorList);
  const optionInfo = useSelector((state: any) => state.build.optionInfo);
  const totalPrice = useSelector((state: any) => state.build.totalPrice);
  const exteriorPreview = useSelector((state: any) => state.build.exteriorPreview);
  const interiorPreview = useSelector((state: any) => state.build.interiorPreview);
  const showPreview = useSelector((state: any) => state.build.showPreview);

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

  return (
    <>
      <style.PreviewHeader>
        <div>
          <style.PreviewTitle>
            {name} - {trim}
          </style.PreviewTitle>
          <style.PreviewModelName>{modelName}</style.PreviewModelName>
          <style.PreviewBtn type="button">모델변경 &gt;</style.PreviewBtn>
          <style.PreviewBtn type="button">카탈로그 &gt;</style.PreviewBtn>
        </div>
        <style.PreviewWrapper>
          <style.PreviewPriceTitle>총 차량 가격</style.PreviewPriceTitle>
          <style.PreviewPrice>{`${totalPrice.toLocaleString('ko-KR')} 원`}</style.PreviewPrice>
        </style.PreviewWrapper>
      </style.PreviewHeader>
      <div>
        <style.PreviewImgWrapper>
          <style.PreviewExImg src={exteriorPreview} alt="exteior preview img" show={showPreview === 'ex'} />
          <style.PreviewInImg src={interiorPreview} alt="inteior preview img" show={showPreview === 'in'} />
        </style.PreviewImgWrapper>
        <style.PreviewWarning>
          * 상기 이미지는 내/외장 색상 선택을 돕기 위한 참고용으로 제공되고 있습니다.
        </style.PreviewWarning>
        <style.PreviewColorBtnWrapper>
          <style.PreviewColorBtn
            onClick={() => dispatch(setShowPreview('ex'))}
            show={showPreview === 'ex'}
            type="button">
            Exterior
          </style.PreviewColorBtn>
          <style.PreviewColorBtn
            onClick={() => dispatch(setShowPreview('in'))}
            show={showPreview === 'in'}
            type="button">
            Interior
          </style.PreviewColorBtn>
        </style.PreviewColorBtnWrapper>
      </div>
    </>
  );
}
