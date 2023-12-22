import Card from "./Components/Card";
import './style.css';
import cources from './data';

function App() {
  return (
    <div className="courses-container">
      {cources.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  )
}

export default App