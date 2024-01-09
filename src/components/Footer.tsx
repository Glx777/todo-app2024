import { styled } from 'styled-components'

interface IFooterProps {
    todosCount: number
}

const Text = styled.div`
    display: flex;
    align-items: center;
    background-color: #1b263b;
    padding: 0 10px;
    height: 50px;
    color: #979dac;
    width: 100%;
`

export const Footer = ({ todosCount }: IFooterProps) => {
	const text = todosCount > 0 ? `${todosCount} items left` : 'No items'

	return (
		<Text>{text}</Text>
	)
}