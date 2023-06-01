import React from 'react';
import MasterViewPage from './../../pages/MasterViewPage';
import { Dashboard } from '@mui/icons-material';

interface DashboardPageLoggedInViewProps {
  title: string;
  loggedInUser: any; // replace with the actual type of user
}

const DashboardPageLoggedInView: React.FC<DashboardPageLoggedInViewProps> = ({ title, loggedInUser }) => (
  <h2>DashboardPageLoggedInView</h2>
);

export default DashboardPageLoggedInView;
