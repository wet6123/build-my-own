import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import * as model from '../../styles/buildModel/powertrainSelectPageStyle';
import { changePowertrain, fetchPowertrainList } from '../../slice/modelSlice';
import { AppDispatch, StateType } from '../../store/store';
import { PowertrainTile } from './PowertrainTile';

export function PowertrainSelect() {
  const location = useLocation();
  const { id, name } = location.state;

  const dispatch = useDispatch<AppDispatch>();
  const powertrainList = useSelector((state: StateType) => state.powertrain.powertrainList);
  const powertrain = useSelector((state: StateType) => state.powertrain.powertrain);

  useEffect(() => {
    dispatch(fetchPowertrainList(id));

    const carNamePayload = {
      carNameId: id,
      engine: null,
      transmission: null,
      drivetrain: null,
    };

    dispatch(changePowertrain(carNamePayload));
  }, [id]);

  return (
    <model.Powertrain>
      <model.PowertrainSelector>
        <div>엔진</div>
        <model.PowertrainTileWrapper>
          {powertrainList.engine.length > 0 &&
            powertrainList.engine.map(engine => (
              <PowertrainTile name={engine} value={powertrain.engine} type="engine" />
            ))}
        </model.PowertrainTileWrapper>
      </model.PowertrainSelector>
      <model.PowertrainSelector>
        {powertrainList.transmission.length > 1 ? (
          <>
            <div>변속기</div>
            <model.PowertrainTileWrapper>
              {powertrainList.transmission.map(transmission => (
                <PowertrainTile name={transmission} value={powertrain.transmission} type="transmission" />
              ))}
            </model.PowertrainTileWrapper>
          </>
        ) : null}
      </model.PowertrainSelector>
      <model.PowertrainSelector>
        {powertrainList.drivetrain.length > 1 ? (
          <>
            <div>구동방식</div>
            <model.PowertrainTileWrapper>
              {powertrainList.drivetrain.map(transmission => (
                <PowertrainTile name={transmission} value={powertrain.drivetrain} type="drivetrain" />
              ))}
            </model.PowertrainTileWrapper>
          </>
        ) : null}
      </model.PowertrainSelector>
    </model.Powertrain>
  );
}
