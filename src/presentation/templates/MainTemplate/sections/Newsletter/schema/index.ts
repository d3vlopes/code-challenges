import { z } from '@/infra/libs/forms/react-hook-form';

export const newsletterFormSchema = z.object({
	name: z.string().min(3, { message: 'Nome inválido' }),
	email: z.string().email({ message: 'Email inválido' }),
	track: z.enum([
		'frontend-developer',
		'backend-developer',
		'full-stack-developer',
		'mobile-developer',
	]),
});

export type NewsletterFormModel = z.infer<typeof newsletterFormSchema>;
