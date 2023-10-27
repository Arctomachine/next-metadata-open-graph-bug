import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata (): Promise<Metadata> {
	const siteName = 'Site name'
	const title = {
		default: 'Root layout title',
		template: `%s | ${siteName}`,
	}
	const description = 'Root layout description'

	return {
		title,
		description,
		keywords: 'Root layout keywords',
		openGraph: {
			title,
			description,
			siteName,
			type: 'website',
			locale: 'it_JP',
		},
		twitter: {
			card: 'summary_large_image',
			site: siteName,
			creator: 'ABC',
		},
	}
}

export default function RootLayout ({ children }) {
	return (
		<html>
		<head/>
		<body>
		<nav>
			<ul>
				<li><Link href={'/'}>Home</Link></li>
				<li><Link href={'/about'}>About</Link></li>
			</ul>
		</nav>
		{children}
		</body>
		</html>
	)
}
