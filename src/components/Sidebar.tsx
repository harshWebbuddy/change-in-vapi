import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Phone, Description, Assessment, History } from '@mui/icons-material';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '280px',
  backgroundColor: '#111111',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4)
}));

const UserSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  '& .MuiAvatar-root': {
    width: 48,
    height: 48,
    background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    fontSize: '1.2rem',
    fontWeight: 600
  }
}));

const NavItem = styled(ListItem)(({ theme }) => ({
  borderRadius: 8,
  marginBottom: theme.spacing(1),
  padding: '10px 16px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    '&:hover': {
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
    }
  }
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontWeight: 500,
    fontSize: '0.95rem'
  }
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <UserSection>
        <Avatar>S</Avatar>
        <Box>
          <Box sx={{ 
            color: '#ffffff', 
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '4px'
          }}>
            Sanskar Shastri
          </Box>
          <Box sx={{ 
            color: 'rgba(255, 255, 255, 0.5)', 
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            Free Plan
          </Box>
        </Box>
      </UserSection>

      <List sx={{ width: '100%', padding: 0 }}>
        <NavItem sx={{ backgroundColor: 'rgba(139, 92, 246, 0.15)' }}>
          <ListItemIcon sx={{ color: '#8B5CF6', minWidth: 40 }}>
            <Assessment />
          </ListItemIcon>
          <StyledListItemText primary="Assistants" sx={{ color: '#ffffff' }} />
        </NavItem>
        <NavItem>
          <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', minWidth: 40 }}>
            <Phone />
          </ListItemIcon>
          <StyledListItemText primary="Phone Numbers" sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
        </NavItem>
        <NavItem>
          <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', minWidth: 40 }}>
            <Description />
          </ListItemIcon>
          <StyledListItemText primary="Files" sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
        </NavItem>
        <NavItem>
          <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', minWidth: 40 }}>
            <History />
          </ListItemIcon>
          <StyledListItemText primary="Call Logs" sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
        </NavItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar; 