import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { openModal } from '../../../slice/modelSlice';
import * as style from '../../../styles/buildModel/buildNavBarStyle';

function message() {
  return (
    <>
      <div> 모델선택 화면으로 이동하시겠습니까?</div>
      <div>현재까지의 변경사항은 저장되지 않습니다.</div>
    </>
  );
}

export function BuildNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');

  const navigate = useNavigate();
  const currentUrl = useLocation();

  const dispatch = useDispatch();

  const children = message();
  const onCancel = () => {};
  const onSubmit = () => {
    navigate(`/build/model?id=${id}&name=${name}`);
  };

  const modal = () => {
    dispatch(openModal({ children, onCancel, onSubmit }));
  };

  return (
    <style.BuildNavWrapper>
      <style.BuildNavMenu>
        <style.BuildNavBtn
          onClick={modal}
          disabled={currentUrl.pathname === '/build/model'}
          current={currentUrl.pathname === '/build/model'}
          type="button">
          01 모델 선택
        </style.BuildNavBtn>
      </style.BuildNavMenu>
      <style.BuildNavMenu>
        <style.BuildNavBtn
          disabled={currentUrl.pathname === '/build/model' || currentUrl.pathname === '/build/option'}
          current={currentUrl.pathname === '/build/option'}
          type="button">
          02 내 차 만들기
        </style.BuildNavBtn>
      </style.BuildNavMenu>
    </style.BuildNavWrapper>
  );
}
