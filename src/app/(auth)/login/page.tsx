"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { validateLogin } from "@/services/user.service";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const loginUser = async () => {
		console.log("Logging user", email, password);
		if (await !validateLogin(email, password)) {
			setErrorMsg("Invalid email or password");
			setShowError(true);
		}

		setErrorMsg("");
		setShowError(false);
	};

	const onForgotPassword = () => {
		console.log("Forgot password");
	};

	return (
		<>
			<TextField
				placeholder='Enter your email'
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				fullWidth
				size='small'
			/>
			<TextField
				placeholder='Enter your password'
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				fullWidth
				size='small'
			/>
			<Button onClick={loginUser}>Login</Button>
			<Button onClick={onForgotPassword}>
				<Link href='/forgot-password'>Forgot Password</Link>
			</Button>
			{showError && <p>{errorMsg}</p>}
		</>
	);
}
