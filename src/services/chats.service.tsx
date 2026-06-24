import { Chat } from "@/types/chat";

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
	chat: Chat,
): Promise<void> => {
	if (!chats[roomNumber]) {
		chats[roomNumber] = [];
	}
	console.log("Sending message to room " + roomNumber + ": ", chat);
	chats[roomNumber].push(chat);
};

export const getUsers = async (roomNumber: string) => {
	// Dummy implementation
	return ["user1", "user2", "user3"];
};
