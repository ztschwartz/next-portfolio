import { gsap } from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";

// gsap.registerPlugin(Flip);

export const animateToHeight = (description, newStyle) => {
	const state = Flip.getState(".heightAni");

	description.current.classList.toggle(newStyle);

	Flip.from(state, {
		duration: 0.3,
		ease: "power3.out",
		nested: true,
		simple: true,
	});
};

export const animateBack = (description, newStyle) => {
	const state = Flip.getState(".heightAni");

	description.current.classList.toggle(newStyle);

	Flip.from(state, {
		duration: 0.3,
		ease: "power3.out",
		nested: true,
		simple: true,
	});
};
