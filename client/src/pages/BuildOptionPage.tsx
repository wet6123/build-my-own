import { BuildHeader } from '../components/buildHeader/BuildHeader';
import { BuildPreview } from '../components/buildOption/BuildPreview';
import { Modal } from '../components/common/Modal';
import * as style from '../styles/buildOption/bulidPreviewStyle';
import { ColorSelect } from '../components/buildOption/ColorSelect';
import { OptionSelect } from '../components/buildOption/OptionSelect';

export function BuildOptionPage() {
  return (
    <>
      <BuildHeader />
      <style.SectionWrapper>
        <style.PreviewWrapper>
          <BuildPreview />
        </style.PreviewWrapper>
        <style.SelectWrapper>
          <ColorSelect />
          <OptionSelect />
        </style.SelectWrapper>
      </style.SectionWrapper>
      <Modal />
    </>
  );
}
