import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { TodoList } from './components/TodoList'
import { Footer } from './components/Footer'
import { Title } from './components/Title'
import { CreateTodoInput } from './components/CreateTodoInput'
import { v4 as uuidv4 } from 'uuid'
import { useQuery } from '@tanstack/react-query'

export interface ITodo {
	completed: boolean
	id: number | string
	title: string
	userId: number
}

const StyledApp = styled.div`
	min-height: 100vh;
	min-width: 100%;
	background: linear-gradient(89.7deg, rgb(0, 32, 95) 2.8%, rgb(132, 53, 142) 97.8%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 600px) {
		width: 100%;
	}
`

const fetchTodos = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')

	return res.json()
}

export const App = () => {
	const [todos, setTodos] = useState<ITodo[]>([])

	const savedTodos = localStorage.getItem('todos')
	const formattedSavedTodos = !!savedTodos && !!JSON.parse(savedTodos).length && JSON.parse(savedTodos)

	const { data, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos, enabled: !formattedSavedTodos })

	useEffect(() => {
		if (data) {
			setTodos(data)
			localStorage.setItem('todos', JSON.stringify(data))
		} else if (formattedSavedTodos) {
			setTodos(formattedSavedTodos)
		}
	}, [data])

	const deleteTodo = (todoId: ITodo['id']) => {
		const newTodos = todos.filter(todo => todo.id !== todoId)

		setTodos(newTodos)
		localStorage.setItem('todos', JSON.stringify(newTodos))
	}

	const addTodo = (title: ITodo['title']) => {
		const newTodos = [
			{
				completed: false,
				id: uuidv4(),
				title,
				userId: 1
			},
			...todos
		]

		setTodos(newTodos)
		localStorage.setItem('todos', JSON.stringify(newTodos))
	}

	return (
		<StyledApp>
			{isLoading ?
				<img src="spinner.svg" height="100" width="100" alt="spinner" /> : (
					<Wrapper>
						<Title />
						<CreateTodoInput addTodo={addTodo} />
						<TodoList todos={todos} deleteTodo={deleteTodo} />
						<Footer todosCount={todos.length} />
					</Wrapper>
				)}
		</StyledApp>
	)
}