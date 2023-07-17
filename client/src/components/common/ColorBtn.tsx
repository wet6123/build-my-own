import { ReactNode, useState } from 'react';

import * as style from '../../styles/common/colorBtnStyle';

export function ColorBtn({
  children,
  name,
  available,
  selected,
  func,
}: {
  children: ReactNode;
  name: string;
  available: boolean;
  selected: boolean;
  func: any;
}) {
  const [hover, setHover] = useState(false);

  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {available ? (
        <style.SelectBtn onClick={func} type="button">
          <style.SelectedImg
            isSelected={selected}
            src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/color_selected.png"
            alt="selected img"
          />
          {children}
        </style.SelectBtn>
      ) : (
        <style.AlertBtn onClick={func} type="button">
          <style.AlertImg
            src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/common/color_alert.png"
            alt="alertImg"
          />
          {children}
        </style.AlertBtn>
      )}
      <style.NameTag isHover={hover}>{name}</style.NameTag>
    </span>
  );
}
