import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { BuildDropdown } from './BuildDropdown';
import { openModal, toggleBuildDropdown } from '../../../slice/modelSlice';
import { BuildNav } from './BuildNav';
import * as style from '../../../styles/buildModel/buildNavBarStyle';

function message() {
  return <div>내 차 만들기를 종료하시겠습니까?</div>;
}

export function BuildHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const dispatch = useDispatch();
  const showDropdown = useSelector((state: any) => state.powertrain.showBuildDropdown);
  const toggle = () => {
    dispatch(toggleBuildDropdown());
  };

  // 종료 모달
  const navigate = useNavigate();

  const children = message();
  const onCancel = () => {};
  const onSubmit = () => {
    navigate(`/`);
  };

  const modal = () => {
    dispatch(openModal({ children, onCancel, onSubmit }));
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
          <div>
            <button onClick={modal} type="button">
              종료
            </button>
          </div>
        </style.UpperHeader>
        <style.UnderHeader>
          <BuildNav />
        </style.UnderHeader>
      </style.Header>
      {showDropdown ? <BuildDropdown /> : null}
    </>
  );
}
