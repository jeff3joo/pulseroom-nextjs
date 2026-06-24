"use client";

import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	const router = useRouter();

	const reload = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};

	return (
		<div>
			<Grid>
				<Typography>Something went wrong:: {error.message}</Typography>
				<Button onClick={reload}>Try Again</Button>
			</Grid>
		</div>
	);
}
