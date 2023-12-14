import { Button, TextField } from '@mui/material';

const EmailInputTemplate = () => {
	return (
		<div>
			<p>인증에 사용할 이메일 입력해주세요</p>
			<div style={{ display: 'flex' }}>
				<TextField />
				<p>@</p>
				<TextField />
			</div>
			<Button variant="contained" fullWidth>
				인증코드 발송
			</Button>
		</div>
	);
};

export default EmailInputTemplate;
