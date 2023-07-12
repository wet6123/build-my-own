import { Link } from 'react-router-dom';
import * as style from '../../styles/buildModel/buildNavBarStyle';

export function BuildNavBar() {
  return (
    <>
      <style.Header>
        <style.UpperHeader>
          <style.UpperLeft>
            <div>
              <Link to="/">
                <style.Logo
                  src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/main/hyundai-Logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div>
              <div>모델 이름</div>
            </div>
          </style.UpperLeft>
          <div>exit</div>
        </style.UpperHeader>
        <style.UnderHeader>
          <div>01. 모델 선택</div>
          <div>02. 내 차</div>
        </style.UnderHeader>
      </style.Header>
      <style.DropDown>
        드롭 다운 메뉴
        <div>차종 리스트</div>
        <div>모델 리스트</div>
      </style.DropDown>
    </>
  );
}
