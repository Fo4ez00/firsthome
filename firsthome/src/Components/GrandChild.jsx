
import { useAuthContext } from "../AuthContext";

const GrandchildComponent = () => {
  const { user, isAuthenticated, login, logout } = useAuthContext();

  const handleLogin = () => {
    
    login({ username: 'john', role: 'user' });
  };

  const handleLogout = () => {
    
    logout();
  };

  return (
    <div>
      <h4>Grandchild Component</h4>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.username} ({user.role})</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default GrandchildComponent;