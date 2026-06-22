"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Register (){

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = () => {
        console.log("Registering user", userName, email, password);
    }

    return(
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
            <Button onClick={registerUser}>Register</Button>
        </>
    )
}