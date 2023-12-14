import { Button, TextField } from '@mui/material';

const Authentication = () => {
	return (
		<div style={{ marginTop: '2em' }}>
			<p>인증코드를 입력해주세요</p>
			<TextField fullWidth />
			<Button variant="contained" fullWidth sx={{ marginTop: '0.6em' }}>
				인증
			</Button>
		</div>
	);
};

export default Authentication;
