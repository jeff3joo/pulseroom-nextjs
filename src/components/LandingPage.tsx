"use client";

import { Button, Grid } from "@mui/material";
import Link from "next/link";

export default function LandingPage() {
	return (
		<div>
			<Grid container>
				<Button>
					<Link href='/login'>Login</Link>
				</Button>
				<Button>
					<Link href='/register'>Register</Link>
				</Button>
				<Button>
					<Link href='/forgot-password'>Forgot Password</Link>
				</Button>
			</Grid>
		</div>
	);
}
