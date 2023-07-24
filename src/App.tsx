import './styles/global.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import AuthProvider from './contexts/authContext';
// import TaskListContext from './contexts/tasklistsContext';
// import ThemeProvider from './contexts/themeContext';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center dark:bg-gray-950 dark:text-gray-50 bg-white-900 text-gray-500">
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
