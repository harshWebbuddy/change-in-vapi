import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import { Add, Search } from '@mui/icons-material';

const AssistantListContainer = styled(Box)(({ theme }) => ({
  width: '380px',
  backgroundColor: '#111111',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(3),
}));

const CreateButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
  color: '#ffffff',
  padding: '12px 24px',
  marginBottom: theme.spacing(3),
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
  '&:hover': {
    background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1A1A1A',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8B5CF6',
    },
    '& input': {
      color: '#ffffff',
      padding: '12px 16px',
      fontSize: '0.95rem',
      '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.5)',
        opacity: 1,
      },
    },
  },
}));

const AssistantItem = styled(ListItem)(({ theme }) => ({
  borderRadius: '8px',
  marginBottom: theme.spacing(1),
  padding: '12px 16px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  '& .MuiAvatar-root': {
    background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    width: 40,
    height: 40,
  },
}));

const AssistantList = () => {
  return (
    <AssistantListContainer>
      <CreateButton
        fullWidth
        startIcon={<Add />}
        disableElevation
      >
        Create Assistant
      </CreateButton>

      <SearchField
        fullWidth
        placeholder="Search assistants..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
            </InputAdornment>
          ),
        }}
      />

      <List sx={{ padding: 0 }}>
        {['Assistant 1', 'Assistant 2', 'Assistant 3'].map((name, index) => (
          <AssistantItem key={index}>
            <ListItemAvatar>
              <Avatar>
                {name.charAt(0)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={name}
              secondary="AI Assistant"
              primaryTypographyProps={{ 
                sx: { 
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  marginBottom: '2px'
                } 
              }}
              secondaryTypographyProps={{ 
                sx: { 
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.875rem'
                } 
              }}
            />
          </AssistantItem>
        ))}
      </List>
    </AssistantListContainer>
  );
};

export default AssistantList; 