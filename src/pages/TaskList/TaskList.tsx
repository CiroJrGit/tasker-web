import { useParams } from 'react-router';

const TaskList = () => {
  const { id } = useParams();

  return <div>Lista de Tarefas: {id}</div>;
};

export default TaskList;
