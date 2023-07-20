import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { Powertrain, Trim } from '../../../types/sliceType';
import { fetchTrimList } from '../../../slice/modelSlice';
import { ModelChangeAddRemove } from './ModelChangeAddRemove';
import { modelPreview, setTargetModelId } from '../../../slice/buildSlice';
import * as style from '../../../styles/common/modelChangeStyle';

export function ModelChangeMessage() {
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const powertrainCombination = useSelector((state: any) => state.powertrain.powertrainCombination);
  const trimList = useSelector((state: any) => state.powertrain.trimList);
  const selected = useSelector((state: any) => state.build.selected);

  const [selectedModel, setSelectedModel] = useState(0);
  const [targetId, setTargetId] = useState(modelId);

  const changePowertrain = (e: any) => {
    setSelectedModel(e.target.value);
  };

  useEffect(() => {
    dispatch(setTargetModelId(modelId));
  }, []);

  useEffect(() => {
    const carNamePayload = {
      carNameId: id,
      engine: powertrainCombination[selectedModel].engine,
      transmission: powertrainCombination[selectedModel].transmission,
      drivetrain: powertrainCombination[selectedModel].drivetrain,
    };
    dispatch(fetchTrimList(carNamePayload));
  }, [selectedModel]);

  const handleTrimChange = (e: Trim) => {
    setTargetId(e.modelId);
    dispatch(setTargetModelId(e.modelId));
  };

  useEffect(() => {
    if (targetId) {
      const payload2 = {
        currentId: modelId,
        targetId,
        selected,
      };
      dispatch(modelPreview(payload2));
    }
  }, [targetId]);

  return (
    <>
      <style.Title>변경할 모델을 선택해주세요</style.Title>
      <style.SubTitle>변경되는 모델에 따라 색상 및 사양이 변경될 수 있습니다.</style.SubTitle>
      <div>
        <style.Dropdown onChange={changePowertrain} value={selectedModel}>
          {powertrainCombination?.map((list: Powertrain, i: number) => (
            <option value={i}>
              <div>
                {name} {list.engine} {list.transmission} {list.drivetrain}
              </div>
            </option>
          ))}
        </style.Dropdown>
      </div>
      <style.TrimBtnWrapper>
        <div>
          {trimList?.map((value: Trim) => (
            <style.TrimBtn onClick={() => handleTrimChange(value)} type="button" highlight={targetId === value.modelId}>
              <div>{value.trim}</div>
              <div>{value.price.toLocaleString('ko-KR')} 원</div>
            </style.TrimBtn>
          ))}
        </div>
      </style.TrimBtnWrapper>
      {modelId !== targetId ? (
        <style.ModelChangeWrapper>
          <style.ModelChangeTitle>모델 변경 시 아래의 항목이 변경됩니다.</style.ModelChangeTitle>
          <div>
            <ModelChangeAddRemove />
          </div>
        </style.ModelChangeWrapper>
      ) : null}
    </>
  );
}
