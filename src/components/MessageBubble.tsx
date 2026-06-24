import { Chat } from "@/types/chat";
import { Box, Typography } from "@mui/material";

export function MessageBubble({
	message,
	isOwn,
}: {
	message: Chat;
	isOwn: boolean;
}) {
	return (
		<Box
			style={{
				display: "flex",
				justifyContent: isOwn ? "flex-end" : "flex-start",
				margin: "8px 0",
			}}
		>
			<Box
				style={{
					background: isOwn ? "#4caf50" : "#333",
					color: "white",
					padding: "10px 14px",
					borderRadius: "10px",
					maxWidth: "60%",
					wordWrap: "break-word",
				}}
			>
				{!isOwn && (
					<Typography
						sx={{ fontWeight: 800, opacity: 0.8 }}
						variant='subtitle2'
					>
						{message.username}
					</Typography>
				)}
				<Typography color='white'>{message.message}</Typography>
				<Typography sx={{ fontSize: "0.6rem" }} style={{ opacity: 0.8 }}>
					{new Date(message.timestamp).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
						hour12: true,
					})}
				</Typography>
			</Box>
		</Box>
	);
}
