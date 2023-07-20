import { Link } from 'react-router-dom';
import * as style from '../../styles/buildComplete/buildCompletePageStyle';

export function CompleteHeader() {
  return (
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
        </style.UpperLeft>
      </style.UpperHeader>
    </style.Header>
  );
}
