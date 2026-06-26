"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { getChats } from "@/services/chats.service";
import { Chat } from "@/types/chat";
import { MessageBubble } from "./MessageBubble";
import { useChatEvents } from "@/socket/chat.events";

export function ChatContainer({ room }: { room: string }) {
	const chatContainerRef = useRef(null);

	const [chat, setChat] = useState<Chat[]>([]);
	const [typingUser, setTypingUser] = useState<any>(null);

	useChatEvents({
		onReceiveMessage : (data:any)=>{
			setChat((prev) => [...prev, data]);
		},
		onUserTyping : (user : string) => {
			setTypingUser(user);
		},
		onUserStopTyping : () => {
			setTypingUser(null);
		},
		onUserJoined : (user : string) => {

		}
	})

	useEffect(() => {
		loadChat(room);
	});

	const loadChat = async (room: string) => {
		let chats = await getChats(room);
		if (!chats) return;
		setChat(chats);
	};

	return (
		<Box
			ref={chatContainerRef}
			sx={{
				height: "400px",
				overflowY: "auto",
				border: "1px solid #ddd",
				borderRadius: "8px",
				padding: 2,
				marginBottom: 2,
				backgroundColor: "#f9f9f9",
			}}
		>
			{chat.length === 0 ? (
				<Box style={{ textAlign: "center", color: "#999", marginTop: "50px" }}>
					No messages yet. Start a conversation!
				</Box>
			) : (
				<>
					{chat.map((msg, index) =>
						msg.username === "System" ? (
							<Box
								key={index}
								style={{
									textAlign: "center",
									color: "#999",
									marginTop: "10px",
								}}
							>
								{msg.message}
							</Box>
						) : (
							<MessageBubble
								key={index}
								message={msg}
								isOwn={msg.username === "person1"} //hardcoded for testing
							/>
						),
					)}
				</>
			)}
			{typingUser && (
				<Box
					style={{
						color: "#999",
						marginTop: "10px",
					}}
				>
					{typingUser} is typing...
				</Box>
			)}
		</Box>
	);
}
