export const validateLogin = async (email: string, password: string) => {
	try {
		const response = await fetch("/api/auth/login", {
			// Backend URL
			method: "GET",
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return true;
		}
		return false;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const registerUser = async (
	username: string,
	email: string,
	password: string,
) => {
	try {
		const response = await fetch("/api/auth/register", {
			// Backend URL
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return true;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const updatePassword = async (
	email: string,
	password: string,
	otp: string,
) => {
	try {
		const response = await fetch("/api/auth/updatePassword", {
			// Backend URL
			method: "PUT",
			body: JSON.stringify({
				email,
				password,
				otp,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return true;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const validateEmail = async (email: string) => {
	try {
		const response = await fetch("/api/auth/validateEmail", {
			// Backend URL
			method: "POST",
			body: JSON.stringify({
				email,
			}),
		});
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return true;
		}
		return false;
	} catch (error) {
		console.log(error);
		return false;
	}
};
