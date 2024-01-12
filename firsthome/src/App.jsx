
import { AuthContextProvider } from './AuthContext';
import ParentComponent from './Components/ParentComponents';

const App = () => {
  return (
    <AuthContextProvider>
      <div>
        <h1>My App</h1>
        <ParentComponent />
      </div>
    </AuthContextProvider>
  );
};

export default App;