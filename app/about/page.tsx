import { Metadata } from 'next'

export async function generateMetadata (): Promise<Metadata> {
	// want to update the title for this page
	const title = 'About page'

	return {
		// here it works as expected, a metadata object is extended
		title,

		openGraph: {
			// and here it works not as expected, an entire object is overwritten
			title,
		},
	}
}

export default function () {
	return (
		<>
			<h1>About page</h1>
			<p>
				<ol start={5}>
					<li>Look at og-related properties for this page. They all are replaced
						by single title property. Link to image is also removed.
					</li>
					<li>Look at twitter-specific properties. They are mostly the same, but
						link to image and image sizes are removed too.
					</li>
				</ol>
			</p>
		</>
	)
}
