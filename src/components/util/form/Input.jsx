import React from "react";

	if (min && max) {
		return (
			<div className="form-control">
				<label htmlFor={id}>{title}</label>
				<input
					type={type}
					id={id}
					min={min}
					max={max}
				/>
			</div>
		);
	}
	return (
		<div className="form-control">
			<label htmlFor={id}>{title}</label>
		</div>
	);
};

export default Input;
