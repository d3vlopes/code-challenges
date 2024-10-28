'use client';

import { ComponentProps, forwardRef, useId } from 'react';

import * as S from './styles';

type SelectBaseProps = ComponentProps<'select'>;

export interface OptionsProps {
	id: string;
	value: string;
	text: string;
}

export interface SelectProps extends SelectBaseProps {
	name: string;
	label?: string;
	options: OptionsProps[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ name, label, options, ...props }, ref) => {
		const id = useId();

		return (
			<S.Wrapper>
				{!!label && <S.Label htmlFor={id}>{label}</S.Label>}

				<S.Select id={id} name={name} {...props} ref={ref}>
					{options.map((option) => {
						return (
							<option key={option.id} value={option.value}>
								{option.text}
							</option>
						);
					})}
				</S.Select>
			</S.Wrapper>
		);
	},
);
