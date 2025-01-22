import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import AssistantList from '../components/AssistantList';
import AssistantConfig from '../components/AssistantConfig';

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#1a1a1a', // Dark theme background
}));

const Dashboard = () => {
  return (
    <DashboardContainer>
      {/* Sidebar Column */}
      <Sidebar />
      
      {/* Middle Column - Assistant List */}
      <AssistantList />
      
      {/* Right Column - Assistant Config */}
      <AssistantConfig />
    </DashboardContainer>
  );
};

export default Dashboard; 