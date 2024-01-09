import { ITodo } from '../App'
import { styled } from 'styled-components'

interface ITodoListProps {
    deleteTodo: (todoId: ITodo['id']) => void
    todos: ITodo[]
}

const List = styled.ul`
    margin: 0;
    font-size: 24px;
    width: 100%;
    max-height: 300px;
    overflow: auto;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1b263b;
    padding: 15px 10px;
    color: #e0e1dd;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #979dac;
    position: relative;
`

const Text = styled.span`
    max-width: calc(100% - 40px);
    word-wrap: break-word;
`

const DeleteButton = styled.button`
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

export const TodoList = ({ deleteTodo, todos }: ITodoListProps) => (
	<List>
		{todos.map((todo, index) => (
			<ListItem key={todo.id}>
				<Text>{index + 1}. {todo.title}</Text>
				<DeleteButton
					onClick={() => deleteTodo(todo.id)}
				>
					<img
						src="clear.svg"
						width="30"
						height="30"
						alt="clear text"
					/>
				</DeleteButton>
			</ListItem>
		))}
	</List>
)