import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { setShowPreview } from '../../slice/buildSlice';
import * as style from '../../styles/buildComplete/buildCompletePageStyle';

export function CompletePreview() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const showPreview = useSelector((state: any) => state.build.showPreview);

  const modelName = useSelector((state: any) => state.build.modelName);
  const exteriorPreview = useSelector((state: any) => state.build.exteriorPreview);
  const interiorPreview = useSelector((state: any) => state.build.interiorPreview);

  return (
    <style.Preview>
      <style.PreviewTitle>{name} (이)가 완성되었습니다!</style.PreviewTitle>
      <style.PreviewModelName>{modelName}</style.PreviewModelName>
      <div>
        <style.PreviewWrapper>
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
        </style.PreviewWrapper>
      </div>
    </style.Preview>
  );
}
