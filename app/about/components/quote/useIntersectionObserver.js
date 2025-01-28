import { useEffect, useState, useRef } from "react";

export function useIntersectionObserver() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const currentRef = ref.current; // Copy ref.current to a local variable

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef); // Use the local variable for cleanup
			}
		};
	}, []); // The dependency array remains empty as the observer logic doesn't depend on external values.

	return [ref, isIntersecting];
}
