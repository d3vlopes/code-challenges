'use client';

import { NewsletterSectionModel } from '@/domain/models/Sections';

import { useForm, zodResolver } from '@/infra/libs/forms/react-hook-form';

import { Button } from '@/presentation/components/Button';
import { Input } from '@/presentation/components/Input';
import { Select } from '@/presentation/components/Select';

import { options } from './options';

import { NewsletterFormModel, newsletterFormSchema } from './schema';

import * as S from '../../styles';

type FormProps = Pick<NewsletterSectionModel, 'buttonText'>;

export const Form = ({ buttonText }: FormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<NewsletterFormModel>({
		mode: 'onBlur',
		resolver: zodResolver(newsletterFormSchema),
	});

	function onSubmit(data: NewsletterFormModel) {
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log(data);
	}

	return (
		<S.FormWrapper>
			<Input
				label="Nome"
				placeholder="Nome completo"
				error={errors.name?.message}
				{...register('name')}
			/>

			<Input
				label="Email"
				placeholder="Seu melhor email"
				type="email"
				error={errors.email?.message}
				{...register('email')}
			/>

			<Select label="Trilha" options={options} {...register('track')} />

			<Button
				type="button"
				disabled={!isValid}
				onClick={handleSubmit(onSubmit)}
			>
				{buttonText}
			</Button>
		</S.FormWrapper>
	);
};
