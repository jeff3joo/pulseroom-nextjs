import { useEffect } from "react";
import { socket } from "./socket";

export const useRoomEvents = (callbacks: any) => {
  useEffect(() => {
	if(callbacks.onRoomsList) {
	  socket.on("rooms_list", callbacks.onRoomsList);
	}

	return () => {
	  socket.off("rooms_list");
	};
  }, [callbacks]);
};

export const useRoomUsersEvent = (callbacks:any) => {
    useEffect(() => {
        if (callbacks.onRoomUsers) {
            socket.on("room_users", callbacks.onRoomUsers);
        }

        return () => {
            socket.off("room_users");
        };
    }, [callbacks]);
}