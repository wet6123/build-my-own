import { ReactNode } from 'react';

export interface ModalDataType {
  children?: ReactNode;
  onCancel?: () => unknown;
  onSubmit?: () => unknown;
}
