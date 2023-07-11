import { MainNavBar } from '../components/main/MainNavBar';
import * as main from '../styles/mainPageStyle';

export function MainPage() {
  return (
    <>
      <MainNavBar />
      <main.Background>
        <main.Poster>
          <main.Phrases>
            <main.CarName>PALISADE</main.CarName>
            <main.Sub>당신의 모든 세상</main.Sub>
          </main.Phrases>
          <main.ImgBox>
            <main.CarImg
              src="https://build-my-own.s3.ap-northeast-2.amazonaws.com/img/main/main-palisade-24my-w.png"
              alt="main-car-img"
            />
          </main.ImgBox>
        </main.Poster>
      </main.Background>
    </>
  );
}
