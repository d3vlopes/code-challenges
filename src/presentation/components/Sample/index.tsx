import * as S from './styles';

export interface SampleProps {
  title?: string;
}

export const Sample = ({ title }: SampleProps) => {
  return (
    <div>
      <S.Heading>{title}</S.Heading>
    </div>
  );
};
