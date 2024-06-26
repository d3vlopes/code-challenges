const flashAnimation = () => {
	const animation = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			repeat: Number.POSITIVE_INFINITY,
			type: 'spring',
		},
	};

	return animation;
};

const moveAnimation = (x: number) => {
	const animation = {
		initial: { opacity: 0, x: 0 },
		animate: { opacity: 1, x: [x, 0] },
		transition: {
			duration: 0.5,
			ease: [0, 0.71, 0.2, 1.01],
			type: 'tween',
		},
	};

	return animation;
};

export const makeAnimation = {
	flashAnimation: () => flashAnimation(),
	moveAnimation: (x: number) => moveAnimation(x),
};
