import { Chat } from "@/types/chat";
import { getUserName } from "./user.service";
import { socket } from "@/socket/socket";

const chats: Record<string, Chat[]> = {
	room1: [
		{
			username: "person1",
			message: "Hi",
			timestamp: new Date(),
		},
		{
			username: "person2",
			message: "Hello",
			timestamp: new Date(),
		},
		{
			username: "person1",
			message: "How are you?",
			timestamp: new Date(),
		},
	],
	room2: [
		{
			username: "person3",
			message: "Hey",
			timestamp: new Date(),
		},
		{
			username: "person4",
			message: "Hi",
			timestamp: new Date(),
		},
	],
};

export const getChats = async (
	roomNumber: string,
): Promise<Chat[] | undefined> => {
	return chats[roomNumber];
};

export const sendMessage = async (
	roomNumber: string,
	message: string,
): Promise<void> => {
	if (!chats[roomNumber]) {
		chats[roomNumber] = [];
	}
	console.log("Sending message to room " + roomNumber + ": ", message);

	const username = getUserName();
	socket.emit("send_message", {
		username,
		roomNumber,
		message,
	});
};

export const typing = async (roomNumber: string) => {
	const username = getUserName();
	socket.emit("typing", { username, roomNumber });
};
