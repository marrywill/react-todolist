import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px 48px;
	overflow-y: auto;
`;

export default function TodoList() {
	const todos = useTodoState();
	return (
		<TodoListBlock>
			{/* <TodoItem text='프로젝트 생성하기' done={true} />
			<TodoItem text='컴포넌트 스타일링 하기' done={true} />
			<TodoItem text='컨텍스트 만들기' done={true} />
			<TodoItem text='기능 구현하기' done={false} />
			<TodoItem text='마무리작업 하기' done={false} /> */}
			{todos.map((todo) => (
				<TodoItem
					text={todo.text}
					done={todo.done}
					key={todo.id}
					id={todo.id}
				/>
			))}
		</TodoListBlock>
	);
}
