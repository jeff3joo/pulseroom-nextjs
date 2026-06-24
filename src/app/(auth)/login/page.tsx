"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = () => {
		console.log("Logging user", email, password);
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
		</>
	);
}
