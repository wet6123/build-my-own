import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { Color } from '../../types/sliceType';
import { checkExIn, setNextExterior } from '../../slice/buildSlice';
import { ColorBtn } from '../common/ColorBtn';
import * as style from '../../styles/buildOption/colorStyle';

export function ExteriorTile({ exterior }: { exterior: Color }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const oldInteriorId = useSelector((state: any) => state.build.interiorId);
  const oldExteriorId = useSelector((state: any) => state.build.exteriorId);

  const changeColor = (exteriorId: number, available: boolean) => {
    if (available) {
      dispatch(setNextExterior(exteriorId));
    } else {
      const paylaod = {
        beforeEx: oldExteriorId,
        beforeIn: oldInteriorId,
        carNameId: id,
        exterior: exteriorId,
        interior: oldInteriorId,
        modelId,
      };
      dispatch(checkExIn(paylaod));
    }
  };

  return (
    <style.ColorTile>
      <ColorBtn
        name={exterior.name}
        available={exterior.available}
        selected={oldExteriorId === exterior.optionId}
        func={() => changeColor(exterior.optionId, exterior.available)}>
        <style.ColorImg src={`${exterior.image}`} alt="exteriorImage" />
      </ColorBtn>
    </style.ColorTile>
  );
}
