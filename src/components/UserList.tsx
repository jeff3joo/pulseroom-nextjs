"use client";

import { getUsers } from "@/services/chats.service";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function UserList({ room, flex = 1 }: { room: string; flex?: number }) {
	const [users, setUsers] = useState<string[]>([]);

	const loadUsers = async () => {
		let userList = await getUsers(room);
		setUsers(userList);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<Paper
			sx={{
				padding: 2,
				backgroundColor: "#f5f5f5",
				flex,
				maxHeight: { xs: 160, md: "none" },
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography variant='h6' gutterBottom>
				Room: <strong>{room}</strong>
			</Typography>

			<Typography variant='subtitle2' gutterBottom>
				Users Online ({users.length})
			</Typography>

			<ul style={{ margin: 0, paddingLeft: 20, overflowY: "auto", flex: 1 }}>
				{users.map((user: any) => (
					<li key={user} style={{ marginBottom: "5px" }}>
						{user}
					</li>
				))}
			</ul>
		</Paper>
	);
}
