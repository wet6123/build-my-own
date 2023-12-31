import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as nav from '../../styles/mainNavBarStyle';
import { DropdownMenu } from './DropdownMenu';

const MenuList = [
  {
    id: 1,
    name: '모델',
    target: '/',
    showImg: false,
    imgLink: '',
  },
  {
    id: 2,
    name: '구매/이벤트',
    target: '/',
    showImg: false,
    imgLink: '',
  },
  {
    id: 3,
    name: '서비스/멤버십',
    target: '/',
    showImg: false,
    imgLink: '',
  },
  {
    id: 4,
    name: '디지털/고객지원',
    target: '/',
    showImg: false,
    imgLink: '',
  },
  {
    id: 5,
    name: '브랜드',
    target: '/',
    showImg: false,
    imgLink: '',
  },
  {
    id: 6,
    name: 'shop',
    target: '/',
    showImg: true,
    imgLink: 'https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/main/hyundai_shop_logo.png',
  },
];

export function MainNavBar() {
  const [hover, setHover] = useState<String>('');
  const close = () => {
    setHover('');
  };

  return (
    <nav.Haeder>
      <nav.Wrapper>
        <div>
          <Link to="/">
            <nav.Logo src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/main/hyundai-Logo.png" alt="Logo" />
          </Link>
        </div>
        <nav.Menu>
          <nav.LeftMenu>
            {MenuList.map((menu: any) => {
              if (menu.showImg) {
                return (
                  <>
                    <Link to={menu.target} onMouseOver={() => setHover(menu.name)}>
                      <img src={menu.imgLink} alt="Shop" />
                    </Link>
                    {hover == menu.name ? <DropdownMenu name={menu.name} close={() => close()} /> : null}
                  </>
                );
              }
              return (
                <>
                  <Link to={menu.target} onMouseOver={() => setHover(menu.name)}>
                    {menu.name}
                  </Link>
                  {hover == menu.name ? <DropdownMenu name={menu.name} close={() => close()} /> : null}
                </>
              );
            })}
          </nav.LeftMenu>
          <nav.RightMenu>right menu</nav.RightMenu>
        </nav.Menu>
      </nav.Wrapper>
    </nav.Haeder>
  );
}
