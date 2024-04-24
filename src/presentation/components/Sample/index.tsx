import * as S from './styles';

export interface SampleProps {
	title?: string;
}

export const Sample = ({ title }: SampleProps) => {
	return (
		<div>
			<S.Heading>{title}</S.Heading>
			<p>Text</p>
			<S.Highlight>Loren ipsum dolor</S.Highlight>
		</div>
	);
};
