import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import AuthPage from '../pages/Auth/Auth';
// import AuthPageTest from '../pages/_AuthPage/AuthPageTest';
import Resume from '../pages/Welcome/Welcome';
import TaskList from '../pages/TaskList/TaskList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      {/* <Route path="/alt" element={<AuthPageTest />} /> */}

      <Route
        path="/welcome"
        element={
          <PrivateRoute redirectTo="/">
            <Resume />
          </PrivateRoute>
        }
      />
      <Route
        path="/tasklist/:id"
        element={
          <PrivateRoute redirectTo="/">
            <TaskList />
          </PrivateRoute>
        }
      />
      <Route
        path="/notes/:id"
        element={
          <PrivateRoute redirectTo="/">
            <TaskList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
