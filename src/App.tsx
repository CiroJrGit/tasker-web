import './styles/global.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import AuthProvider from './contexts/authContext';
// import TaskListProvider from './contexts/tasklistsContext';
// import ThemeProvider from './contexts/themeContext';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        {/* <ThemeProvider> */}
        {/* <TaskListContext> */}
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
        {/* </TaskListContext> */}
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
