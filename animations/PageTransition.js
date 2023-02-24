import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PageTransition = () => {
	const scrollTriggerFresh = () => ScrollTrigger.refresh();

	window.requestAnimationFrame(() => {
		gsap.from(".navAni", {
			ease: "power3.out",
			delay: 0.3,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
			y: -32,
			onComplete: scrollTriggerFresh,
		});

		gsap.from(".fadeAni", {
			ease: "power3.out",
			opacity: 0,
			stagger: 0.2,
			delay: 0.2,
			duration: 1,
			y: 32,
			onComplete: scrollTriggerFresh,
		});
	});
};

export default PageTransition;
