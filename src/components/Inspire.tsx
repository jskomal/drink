import React from 'react'

type InspireProps = {
	searchTerm: string
}

function Inspire({ searchTerm }: InspireProps) {
	return <div>{searchTerm}</div>
}

export default Inspire
