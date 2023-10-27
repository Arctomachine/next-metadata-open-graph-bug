import Link from 'next/link'

/** Add your relevant code here for the issue to reproduce */
export default function Home () {
	return (
		<>
			<h1>Home page</h1>
			<p>The bug is reproduced in this project. To see it do following: <ol>
				<li>Open dev tools</li>
				<li>Expand head tag</li>
				<li>Remember og-related properties</li>
				<li>Go to <Link href={'/about'}>about
					page</Link></li>
			</ol></p>
		</>
	)
}
