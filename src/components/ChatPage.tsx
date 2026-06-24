"use client";
import { UserList } from "@/components/UserList";
import { Button, Grid, TextField } from "@mui/material";
import { ChatContainer } from "@/components/ChatContainer";
import { useState } from "react";
import { sendMessage } from "@/services/chats.service";
import { Chat } from "@/types/chat";

export default function ChatPage({ room }: { room: string }) {
	const [message, setMessage] = useState("");

	const onSend = () => {
		let msg: Chat = {
			username: "person1", //hardcoded
			message: message,
			timestamp: new Date(),
		};
		sendMessage(room, msg);
	};

	return (
		<div>
			<Grid container size={12}>
				<Grid size={3}>
					<UserList room={room} />
				</Grid>
				<Grid size={8}>
					<ChatContainer room={room} />
				</Grid>
				<Grid size={12}>
					<TextField
						placeholder='Type a message...'
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								onSend();
							}
						}}
						fullWidth
						size='small'
					/>

					<Button
						variant='contained'
						onClick={onSend}
						disabled={!message.trim()}
					>
						Send
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
