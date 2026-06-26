import { useEffect } from "react";
import { socket } from "./socket";

export const useChatEvents = (callbacks: any) => {
	useEffect(() => {
        if (callbacks.onUserJoined) {
            socket.on("user_joined", callbacks.onUserJoined);
        }

		if (callbacks.onReceiveMessage) {
			socket.on("receive_message", callbacks.onReceiveMessage);
		}

		if (callbacks.onUserTyping) {
			socket.on("user_typing", callbacks.onUserTyping);
		}

		if (callbacks.onUserStopTyping) {
			socket.on("user_stop_typing", callbacks.onUserStopTyping);
		}

		return () => {
            socket.off("user_joined")
			socket.off("receive_message");
			socket.off("user_typing");
			socket.off("user_stop_typing");
		};
	}, [callbacks]);
};
