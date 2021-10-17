import React from "react"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/material'

export const Login: React.FC = () => {
	return (
		<Box
			sx={{
				width: '60vw',
				backgroundColor : '#dff5da'
			}}
		 >
			<div>
				Welcome chat app
			</div>
			<div>
				<GoogleIcon /> Sign in Google
			</div>
			<div>
				<FacebookIcon /> Sign in Facebook
			</div>
		</Box>
	)
}

