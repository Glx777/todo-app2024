import { styled } from 'styled-components'

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 600px) {
		margin-bottom: 20px;
	}
`

const StyledTitle = styled.h1`
    font-size: 50px;
    color: #e0e1dd;
    margin-right: 20px;
`

export const Title = () => (
	<Wrapper>
		<StyledTitle>Todo App</StyledTitle>
		<img width="50" height="50" src="checkmark.svg" alt="checkmark" />
	</Wrapper>
)