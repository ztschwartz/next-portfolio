import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeaderTransition = (name, link, bg) => {
	const scrollTriggerFresh = () => ScrollTrigger.refresh();

	window.requestAnimationFrame(() => {
		gsap.from(`#${link}`, {
			scrollTrigger: {
				trigger: `#${name}`,
				start: "top top",
				toggleActions: "play none none reverse",
			},
			display: "none",
			duration: 0.3,
			ease: "Power2.easeOut",
			opacity: 0,
		});

		gsap.to(`#${bg}`, {
			scrollTrigger: {
				trigger: `#${name}`,
				start: "top top",
				toggleActions: "play none none reverse",
			},
			display: "block",
			opacity: 1,
			duration: 0.2,
			ease: "Power2.easeOut",
		});
	});
};

export default HeaderTransition;
