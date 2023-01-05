import React from "react";
import Testimonial from "../util/testimonial/Testimonial";
import styles from "../../../lib/utils.module.css";
const Testimonials = () => {
	return (
		<>
			<h1 className={styles.lg}>Testimonials</h1>
			<ul
				className={`${styles.flex} ${styles.flexGap} ${styles.w100} ${styles.mt5}`}
			>
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</ul>
		</>
	);
};

export default Testimonials;