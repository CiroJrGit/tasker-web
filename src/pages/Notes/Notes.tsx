import { useParams } from 'react-router-dom';

const Notes = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Anotações {id}</h1>
    </div>
  );
};

export default Notes;
