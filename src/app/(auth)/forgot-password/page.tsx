"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { validateEmail, updatePassword } from "@/services/user.service";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [showError, setShowError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const getOTP = async () => {
		if (await !validateEmail(email)) {
			setShowError(true);
			setErrorMsg("Invalid email");
			return;
		}
		setShowError(false);
		setErrorMsg("");

		//OTP Logic to be added
		console.log("Forgot password");
	};

	const updateNewPassword = async () => {
		if (otp.length !== 6) {
			setShowError(true);
			setErrorMsg("Invalid OTP");
			return;
		}
		if (await !updatePassword(email, newPassword, otp)) {
			setShowError(true);
			setErrorMsg("Invalid OTP");
			return;
		}

		setShowError(false);
		setErrorMsg("");
		console.log("Updating password");
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
			<Button onClick={getOTP}>Get OTP</Button>
			<TextField
				placeholder='Enter OTP'
				value={otp}
				onChange={(e) => {
					setOtp: e.target.value;
				}}
				fullWidth
				size='small'
			/>
			<TextField
				placeholder='New Password'
				value={newPassword}
				onChange={(e) => {
					setNewPassword: e.target.value;
				}}
				fullWidth
				size='small'
			/>
			<Button onClick={updateNewPassword}>Update Password</Button>
			{showError && <p>{errorMsg}</p>}
		</>
	);
}
