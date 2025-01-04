import { Popover } from '@ark-ui/react'
import { PiList } from 'react-icons/pi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'

const links = [
	{
		value: '',
		label: 'Home',
	},
	{
		value: '/cv',
		label: 'Curriculum Vitae',
	},
	{
		value: '/blog',
		label: 'Blog',
	},
]

export const PopoverMenu = ({ styles, locale, theme }) => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const popoverRef = useRef(null)

	function handleLink(path, locale) {
		return `/${locale}${path}`
	}

	function handleToggle() {
		setIsOpen(!isOpen)
	}

	function handleClose() {
		setIsOpen(false)
	}

	const handleClickLink = url => {
		setIsOpen(false)
		window.location.href = url
	}

	return (
		<Popover.Root isOpen={isOpen} onOpenChange={setIsOpen}>
			<Popover.Trigger>
				<Popover.Indicator>
					<PiList className={styles} />
				</Popover.Indicator>
			</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content ref={popoverRef}>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '170px',
							backgroundColor: theme === 'light' ? '#1f1d1d' : '#C94747',
							fontSize: '16px',
							fontWeight: '300',
						}}
					>
						{links.map(link => {
							const url = handleLink(link.value, locale)
							return (
								<li
									key={link.value}
									style={{
										display: pathname === url ? 'none' : 'flex',
										justifyContent: 'center',
										padding: '10px 0',
										width: '100%',
										height: '100%',
									}}
								>
									<Link href={url} onClick={() => handleClickLink(url)}>
										{link.label}
									</Link>
								</li>
							)
						})}
					</ul>
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	)
}
