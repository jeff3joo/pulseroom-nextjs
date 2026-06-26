"use client";

import { Paper, Typography } from "@mui/material";

export function UserList({ room, users, flex = 1 }: { room: string; users: string[];flex?: number }) {
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
