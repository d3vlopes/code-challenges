import { ReactNode } from 'react';
import ReactModal from 'react-modal';

export interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	onRequestClose: () => void;
}

export const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
	ReactModal.setAppElement('#modal-root');
	ReactModal.defaultStyles = {};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="modal-overlay"
			className="modal-content"
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			onAfterOpen={() => (document.body.style.overflow = 'hidden')}
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			onAfterClose={() => (document.body.style.overflow = 'unset')}
		>
			<button className="modal-close" type="button" onClick={onRequestClose}>
				<img
					src="https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwgxfa500c0v07kj3bpvh8an"
					alt="Fechar modal"
					title="Fechar modal"
				/>
			</button>

			{children}
		</ReactModal>
	);
};
