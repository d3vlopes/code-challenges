'use client';

import { ComponentProps, forwardRef, useId } from 'react';

import * as S from './styles';

export type BaseInputProps = ComponentProps<'input'>;

export interface InputProps extends BaseInputProps {
	label: string;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, ...props }, ref) => {
		const id = useId();

		return (
			<S.Wrapper>
				<S.Label htmlFor={id}>{label}</S.Label>

				<S.Input id={id} ref={ref} isError={!!error} {...props} />

				{!!error && <S.MessageError>{error}</S.MessageError>}
			</S.Wrapper>
		);
	},
);
