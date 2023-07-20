import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../slice/modelSlice';
import * as style from '../../styles/common/modalStyle';

export function Modal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.powertrain.showModal);
  const modalData = useSelector((state: any) => state.powertrain.modalData);
  const targetModelId = useSelector((state: any) => state.build.targetModelId);

  const Cancel = () => {
    modalData.onCancel?.();
    dispatch(closeModal());
  };
  const Submit = () => {
    modalData.onSubmit?.(targetModelId);
    dispatch(closeModal());
  };

  return (
    <style.WindowBackground show={showModal}>
      <style.Background show={showModal} onClick={Cancel} />
      <style.Window>
        <style.CloseBtn onClick={Cancel} type="button">
          {/* 창닫기 */}
        </style.CloseBtn>
        <style.Detail>{modalData.children}</style.Detail>
        <style.BtnWrapper>
          <style.Button onClick={Cancel} type="button" color="gray">
            취소
          </style.Button>
          <style.Button onClick={Submit} type="button">
            확인
          </style.Button>
        </style.BtnWrapper>
      </style.Window>
    </style.WindowBackground>
  );
}
