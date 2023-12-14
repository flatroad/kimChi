import { Button } from '@mui/material';

const Success2FAFooter = () => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<Button variant="contained" fullWidth sx={{ borderRadius: 0 }}>
				예
			</Button>
			<Button variant="contained" color="inherit" fullWidth sx={{ borderRadius: 0 }}>
				아니요
			</Button>
		</div>
	);
};

export default Success2FAFooter;
