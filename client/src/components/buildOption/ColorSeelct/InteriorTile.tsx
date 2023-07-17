import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Color } from '../../../types/sliceType';
import { AppDispatch } from '../../../store/store';
import { checkExIn, setNextInterior } from '../../../slice/buildSlice';
import { ColorBtn } from '../../common/ColorBtn';
import * as style from '../../../styles/buildOption/colorStyle';

export function InteriorTile({ interior }: { interior: Color }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const modelId = Number(searchParams.get('modelId'));

  const dispatch = useDispatch<AppDispatch>();
  const oldInteriorId = useSelector((state: any) => state.build.interiorId);
  const oldExteriorId = useSelector((state: any) => state.build.exteriorId);

  const changeColor = (interiorId: number, available: boolean) => {
    if (available) {
      dispatch(setNextInterior(interiorId));
    } else {
      const paylaod = {
        beforeEx: oldExteriorId,
        beforeIn: oldInteriorId,
        carNameId: id,
        exterior: oldExteriorId,
        interior: interiorId,
        modelId,
      };
      dispatch(checkExIn(paylaod));
    }
  };

  return (
    <style.ColorTile>
      <ColorBtn
        name={interior.name}
        available={interior.available}
        price={null}
        selected={oldInteriorId === interior.optionId}
        func={() => changeColor(interior.optionId, interior.available)}>
        <style.InteriorImg src={`${interior.image}`} alt="interiorImage" />
      </ColorBtn>
    </style.ColorTile>
  );
}
