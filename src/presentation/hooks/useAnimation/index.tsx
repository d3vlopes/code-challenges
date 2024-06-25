import { useEffect, useRef } from 'react';

import {
	useAnimation as useAnimationLib,
	useInView,
} from '@/infra/libs/animations/framer-motion';

export const useAnimation = () => {
	const ref = useRef(null);
	const control = useAnimationLib();

	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			control.start('visible');
		}
	}, [control, inView]);

	return {
		ref,
		inView,
	};
};
