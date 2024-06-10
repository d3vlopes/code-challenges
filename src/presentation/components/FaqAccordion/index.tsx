'use client';

import { ChevronDown } from '@styled-icons/evil/ChevronDown';
import { useId, useState } from 'react';

import { QuestionModel } from '@/domain/models/Question';

import * as S from './styles';

export interface FaqAccordionProps {
	items: QuestionModel[];
}

export const FaqAccordion = ({ items }: FaqAccordionProps) => {
	const [openIndex, setOpenIndex] = useState<null | number>(null);
	const id = useId();

	function handleToggle(index: number) {
		setOpenIndex(openIndex === index ? null : index);
	}

	return (
		<S.Wrapper>
			{items.map((item, index) => {
				const isOpen = openIndex === index;

				return (
					<S.Accordion key={item.id}>
						<S.AccordionHeader>
							<S.Button
								type="button"
								id={`accordion-${id}`}
								aria-controls={`${id}-panel`}
								aria-expanded={isOpen}
								onClick={() => handleToggle(index)}
								isActive={isOpen}
							>
								<h3>{item.title}</h3>
								<ChevronDown
									width={40}
									height={40}
									aria-label={isOpen ? 'Esconder conteúdo' : 'Mostrar conteúdo'}
								/>
							</S.Button>
						</S.AccordionHeader>

						<S.Content
							id={`${id}-panel`}
							aria-labelledby={`accordion-${id}`}
							aria-hidden={isOpen}
							isActive={isOpen}
						>
							{item.content}
						</S.Content>
					</S.Accordion>
				);
			})}
		</S.Wrapper>
	);
};
