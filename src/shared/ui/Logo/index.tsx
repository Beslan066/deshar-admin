
import cn from 'classnames'

import './styles.scss'
import { Link } from 'react-router-dom'

type LogoSize = 'small' | 'large'

interface LogoProps {
	size?: LogoSize
	className?: string
	href?: string
}


export const Logo = ({ size, className, href = '/' }: LogoProps) => {

	return (
		<div className={cn('Logo__container', size, className)}>
			<Link to={href} className="Logo__link" aria-label="Перейти на главную страницу" tabIndex={1}>
				<div
					className="Logo__image_wrapper">
					<img
						src="/logo.svg"
						alt="Логотип компании"


						className="Logo__image"

					/>
				</div>
			</Link>
		</div>
	)
}
