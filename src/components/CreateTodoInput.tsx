import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { ITodo } from '../App'

interface ICreateTodoInputProps {
    addTodo: (title: ITodo['title']) => void
}

interface IImageProps {
    $isClearIcon?: boolean
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    margin-bottom: 40px;
    padding: 13px 90px 13px 20px;
    font-size: 30px;
    background-color: #1b263b;
    color: #e0e1dd;
    border: 0;
    border-radius: 10px;

	@media (max-width: 600px) {
		margin-bottom: 20px;
	}
`

const DeleteButton = styled.button<IImageProps>`
    position: absolute;
    top: 15px;
    right: ${props => props.$isClearIcon ? '50px' : '10px'};
    cursor: pointer;
    border: none;
    appearance: none;
    background-color: inherit;
    padding: 0;
    height: 30px;
    width: 30px;

    &:hover {
        transform: scale(1.3);
    }
`

export const CreateTodoInput = ({ addTodo }: ICreateTodoInputProps) => {
	const [value, setValue] = useState('')
	const [isInputFocused, setIsInputFocused] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const keydownHandler = (event: KeyboardEvent) => {
		if (event.key === 'Enter' && inputRef.current?.value) {
			addTodo(inputRef.current.value)
			setValue('')
		}
	}

	useEffect(() => {
		if (inputRef.current && isInputFocused) {
			inputRef.current.addEventListener('keydown', keydownHandler)
		}

		return () => {
			if (inputRef.current && isInputFocused) {
				inputRef.current.removeEventListener('keydown', keydownHandler)
			}
		}
	}, [isInputFocused, inputRef])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

	const handleClearClick = () => setValue('')

	const handleApplyClick = () => {
		addTodo(value)
		setValue('')
	}

	const handleFocus = () => setIsInputFocused(true)
	const handleBlur = () => setIsInputFocused(false)

	return (
		<Wrapper>
			<Input
				onChange={handleChange}
				value={value}
				type="text"
				placeholder="Create a todo"
				onFocus={handleFocus}
				onBlur={handleBlur}
				ref={inputRef}
			/>
			{value && (
				<>
					<DeleteButton onClick={handleClearClick} $isClearIcon>
						<img
							src="clear.svg"
							width="30"
							height="30"
							alt="clear text"
						/>
					</DeleteButton>
					<DeleteButton onClick={handleApplyClick}>
						<img
							src="checkmark-simple.svg"
							width="30"
							height="30"
							alt="create todo"
						/>
					</DeleteButton>
				</>
			)}
		</Wrapper>
	)
}