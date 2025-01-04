import { twMerge } from 'tailwind-merge'
import { navLinks } from '../../../lib/constants/navigation'


const wrapper =
	'flex flex-col mx-auto w-full px-4 md:px-0 md:max-w-[720px] lg:max-w-[1140px] gap-[40px]'



export default function HeaderDesktop() {
	return (
		<header className='fixed  top-0 l-0 w-full h-[56px] z-50 bg-white'>
			<nav className={twMerge(wrapper, 'h-full')}>
				<ul className='flex flex-row justify-between w-full h-full px-20'>
					{navLinks.map(link => (
						<a
							key={link.title}
							href={link.url}
							className='flex justify-center items-center h-full'
						>
							<li className='text-darkBlue'>{link.title}</li>
						</a>
					))}
				</ul>
			</nav>
		</header>
	)
}
