import { socket } from "@/socket/socket";
import { getUserName } from "./user.service";

//Temporary room data
let room = ["room1", "room2"];

export const createRoom = async (roomName: string) => {
	room.push(roomName);
};

export const getRooms = async () => {
	socket.emit("get_rooms");
};

export const modifyRoom = async (roomName: string, newRoomName: string) => {};

export const deleteRoom = async (roomName: string) => {};

export const joinRoom = async (roomName: string) => {
	const username = await getUserName();
	socket.emit("join_room", { username, room: roomName });
};

export const leaveRoom = async (roomName: string) => {
	const username = await getUserName();
	socket.emit("leave_room", { username, room: roomName });
};
