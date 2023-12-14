import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Typography } from '@mui/material';

const Success2FABody = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<DoneOutlineIcon style={{ width: '5em', height: '4em' }} />
			<Typography>회원가입이 완료되었습니다</Typography>
			<Typography>2차 인증을 설정하시겠습니까?</Typography>
		</div>
	);
};

export default Success2FABody;
