"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const getOTP = () => {
		console.log("Forgot password");
	};

	const updatePassword = () => {
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
			<Button onClick={updatePassword}>Update Password</Button>
		</>
	);
}
