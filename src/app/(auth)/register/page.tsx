"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { registerUser } from "@/services/user.service";

export default function Register() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShowError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const newUser = async () => {
		console.log("Registering user", userName, email, password);
		if (await !registerUser(userName, email, password)) {
			setErrorMsg("Something went wrong");
			setShowError(true);
			return;
		}
		setErrorMsg("");
		setShowError(false);
		console.log("User registered");
	};

	return (
		<>
			<TextField
				placeholder='Enter your Name'
				value={userName}
				onChange={(e) => {
					setUserName(e.target.value);
				}}
				fullWidth
				size='small'
			/>
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
			<Button onClick={newUser}>Register</Button>
			{showError && <p>{errorMsg}</p>}
		</>
	);
}
