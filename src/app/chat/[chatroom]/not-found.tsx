"use client";

import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();
	const chatroom = pathname.split("/")[2];

	return (
		<>
			<Typography>{chatroom} - Room Not Found</Typography>
		</>
	);
}
