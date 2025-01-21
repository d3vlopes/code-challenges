'use client';

import { useState } from 'react';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { NewsletterSectionModel } from '@/domain/models/Sections';

import { useForm, zodResolver } from '@/infra/libs/forms/react-hook-form';

import { Button } from '@/presentation/components/Button';
import { Input } from '@/presentation/components/Input';
import { OptionsProps, Select } from '@/presentation/components/Select';

import { NewsletterFormModel, newsletterFormSchema } from './schema';

import { addOnNewsletter } from './action';

import * as S from '../../styles';

type FormProps = Pick<NewsletterSectionModel, 'buttonText' | 'tracks'>;

export const Form = ({ buttonText, tracks }: FormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<NewsletterFormModel>({
		mode: 'onBlur',
		resolver: zodResolver(newsletterFormSchema),
	});

	const [isLoading, setIsLoading] = useState(false);

	const toastOptions: ToastOptions = {
		position: 'bottom-center',
		hideProgressBar: true,
		autoClose: 5000,
		theme: 'dark',
	};

	async function onSubmit(formData: NewsletterFormModel) {
		setIsLoading(true);

		try {
			const response = await addOnNewsletter(formData);

			if (response.payload?.error) {
				const errorMessage = response.payload.error[0].message;

				if (errorMessage.includes('email')) {
					toast.error('Email já cadastrado', toastOptions);

					return;
				} else {
					toast.error('Ocorreu um erro, tente novamente', toastOptions);

					return;
				}
			}

			toast.success('Cadastro realizado com sucesso', toastOptions);
		} catch {
			toast.error('Ocorreu um erro, tente novamente', toastOptions);
		} finally {
			setIsLoading(false);
		}
	}

	const options: OptionsProps[] = tracks.map((track) => ({
		id: track.id,
		text: track.name,
		value: track.name.replaceAll(' ', '-').toLowerCase(),
	}));

	return (
		<S.FormWrapper>
			<ToastContainer />

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

			<Select
				label="Qual trilha você mais tem interesse?"
				options={options}
				{...register('track')}
			/>

			<S.ButtonWrapper>
				<Button
					type="button"
					disabled={!isValid || isLoading}
					onClick={handleSubmit(onSubmit)}
				>
					{isLoading ? 'Enviando...' : buttonText}
				</Button>
			</S.ButtonWrapper>
		</S.FormWrapper>
	);
};
