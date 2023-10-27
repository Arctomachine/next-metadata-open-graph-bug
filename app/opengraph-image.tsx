import { ImageResponse } from 'next/og'

export default async function Image () {
	return new ImageResponse(
		<div>
			Root open graph image
		</div>,
	)
}
