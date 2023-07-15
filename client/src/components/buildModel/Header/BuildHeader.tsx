import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { BuildDropdown } from './BuildDropdown';
import { toggleBuildDropdown } from '../../../slice/modelSlice';
import { BuildNav } from './BuildNav';
import * as style from '../../../styles/buildModel/buildNavBarStyle';

export function BuildHeader() {
  const location = useLocation();
  const { name } = location.state;

  const dispatch = useDispatch();
  const showDropdown = useSelector((state: any) => state.powertrain.showBuildDropdown);
  const toggle = () => {
    dispatch(toggleBuildDropdown());
  };

  return (
    <>
      <style.Header>
        <style.UpperHeader>
          <style.UpperLeft>
            {/* logo */}
            <div>
              <Link to="/">
                <style.Logo
                  src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/main/hyundai-Logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            {/* model select */}
            <div>
              <button onClick={toggle} type="button">
                {name}
                {showDropdown ? '▼' : '▲'}
              </button>
            </div>
          </style.UpperLeft>
          <div>exit</div>
        </style.UpperHeader>
        <style.UnderHeader>
          <BuildNav />
        </style.UnderHeader>
      </style.Header>
      {showDropdown ? <BuildDropdown /> : null}
    </>
  );
}
