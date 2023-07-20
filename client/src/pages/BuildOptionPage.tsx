import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { BuildHeader } from '../components/buildHeader/BuildHeader';
import { BuildPreview } from '../components/buildOption/BuildPreveiw/BuildPreview';
import { Modal } from '../components/common/Modal';
import { ColorSelect } from '../components/buildOption/ColorSeelct/ColorSelect';
import { OptionSelect } from '../components/buildOption/OptionSelect/OptionSelect';
import * as style from '../styles/buildOption/buildPageStyle';

export function BuildOptionPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const name = String(searchParams.get('name'));
  const modelId = Number(searchParams.get('modelId'));

  const optionExpand = useSelector((state: any) => state.build.optionExpand);
  const showModal = useSelector((state: any) => state.powertrain.showModal);

  const [position, setPosition] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (showModal) {
      setToggle(true);
      setPosition(Math.round(window.scrollY));
    } else {
      setToggle(false);
    }
  }, [showModal]);

  useEffect(() => {
    if (!toggle) window.scrollTo(0, position);
  }, [toggle]);

  // 완성 페이지 이동
  const handleComplete = () => {
    navigate(`/build/complete?id=${id}&name=${name}&modelId=${modelId}`);
  };

  return (
    <style.Wrapper scroll={toggle} position={position}>
      <style.HaederWrapper>
        <BuildHeader />
      </style.HaederWrapper>
      <style.SectionWrapper>
        <style.PreviewWrapper show={optionExpand}>
          <BuildPreview />
        </style.PreviewWrapper>
        <span />
        <style.SelectWrapper show={optionExpand}>
          <style.ColorHeader show={optionExpand}>색상</style.ColorHeader>
          <ColorSelect />
          <style.SelectHeader show={optionExpand}>옵션</style.SelectHeader>
          <OptionSelect />
          <style.CompleteBtnWrapper>
            <style.CompleteBtn onClick={handleComplete} type="button">
              내 차 만들기 완료
            </style.CompleteBtn>
          </style.CompleteBtnWrapper>
        </style.SelectWrapper>
      </style.SectionWrapper>
      <Modal />
    </style.Wrapper>
  );
}
