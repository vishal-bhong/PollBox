import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashBoardPage from './pages/DashBoardPage';
import CreatePollPage from './pages/CreatePollPage';
import AllPollResultsPage from './pages/AllPollResultsPage';
import MyPollsPage from './pages/MyPollsPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
            <Route path="/createpoll" element={<CreatePollPage />} />
            <Route path="/allResults" element={<AllPollResultsPage />} />
            <Route path="/myPolls" element={<MyPollsPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;
