import { Button, TextField, Typography } from '@mui/material';
import style from '@/style/two-factor/registration/index.module.css';
import Title2FA from '@/component/2fa/registration/title';
import EmailInputTemplate from '@/component/2fa/registration/authentication';
import Authentication from '@/component/2fa/registration/submit';

const Registration = () => {
	return (
		<div className={style.container}>
			<Title2FA />
			<div>
				<EmailInputTemplate />
				<Authentication />
			</div>
		</div>
	);
};

export default Registration;
