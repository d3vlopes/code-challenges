import { Modal as ModalBase } from '@/infra/libs/ui-library/Modal';
import type { ModalProps } from '@/infra/libs/ui-library/Modal';

export const Modal = ({ children, ...props }: ModalProps) => {
	return <ModalBase {...props}>{children}</ModalBase>;
};
