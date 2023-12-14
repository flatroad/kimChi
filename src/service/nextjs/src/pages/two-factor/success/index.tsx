import Success2FABody from '@/component/2fa/success/Success2FABody';
import Success2FAFooter from '@/component/2fa/success/Success2FAFooter';
import style from '@/style/main/index.module.css';

const ConfirmButtons = () => {
	return (
		<div className={style.container}>
			<Success2FABody />
			<Success2FAFooter />
		</div>
	);
};
export default ConfirmButtons;
