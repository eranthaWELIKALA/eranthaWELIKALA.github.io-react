import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects';
import ProjectProfile from './components/ProjectProfile/ProjectProfile';
import KnowledgeHub from './pages/KnowledgeHub/KnowledgeHub';
import About from './pages/About/About';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
      <div className="content-wrapper">
          <Navbar />
          <main className="main-content">
              <Outlet />
          </main>
          <Footer />
      </div>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'project',
        element: <ProjectProfile />,
      },
      {
        path: 'knowledge-hub',
        element: <KnowledgeHub />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
