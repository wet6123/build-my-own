import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, StateType } from '../../store/store';
import { changePowertrain } from '../../slice/modelSlice';
import * as power from '../../styles/buildModel/powertrainTileStyle';

export function PowertrainTile({ name, value, type }: { name: string; value: string; type: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));

  const dispatch = useDispatch<AppDispatch>();
  const powertrain = useSelector((state: StateType) => state.powertrain.powertrain);

  const change = () => {
    const carNamePayload = {
      carNameId: id,
      engine: powertrain.engine,
      transmission: powertrain.transmission,
      drivetrain: powertrain.drivetrain,
    };

    if (type === 'engine') carNamePayload.engine = name;
    else if (type === 'transmission') carNamePayload.transmission = name;
    else if (type === 'drivetrain') carNamePayload.drivetrain = name;

    dispatch(changePowertrain(carNamePayload));
  };

  return (
    <div>
      {value === name ? (
        <power.PowertrainTileHighlight>{name}</power.PowertrainTileHighlight>
      ) : (
        <power.PowertrainTile onClick={change}>{name}</power.PowertrainTile>
      )}
    </div>
  );
}
