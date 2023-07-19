import { useSelector } from 'react-redux';
import { BuildHeader } from '../components/buildHeader/BuildHeader';
import { BuildPreview } from '../components/buildOption/BuildPreveiw/BuildPreview';
import { Modal } from '../components/common/Modal';
import { ColorSelect } from '../components/buildOption/ColorSeelct/ColorSelect';
import { OptionSelect } from '../components/buildOption/OptionSelect/OptionSelect';
import * as style from '../styles/buildOption/buildPageStyle';

export function BuildOptionPage() {
  const optionExpand = useSelector((state: any) => state.build.optionExpand);

  return (
    <>
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
        </style.SelectWrapper>
      </style.SectionWrapper>
      <Modal />
    </>
  );
}
