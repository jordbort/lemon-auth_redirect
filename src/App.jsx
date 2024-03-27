import { useSearchParams } from 'react-router-dom'

import Instructions from './components/Instructions'
import Success from './components/Success'
import Error from './components/Error'

function App() {
	const [searchParams] = useSearchParams()

	const error = searchParams.get('error')
	const errorDescription = searchParams.get('error_description')
	const code = searchParams.get('code')
	const scope = searchParams.get('scope')

	return (
		<div className='container'>
			<h1 className='bold'>Thank you for using lemony_friend 🍋</h1>
			{error
				? <Error error={error} errorDescription={errorDescription} />
				: code
					? <Success code={code} scope={scope} />
					: <Instructions />}
		</div>
	)
}

export default App
