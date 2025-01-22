import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import { Search, Add } from '@mui/icons-material';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '360px',
  backgroundColor: '#1a1a1a',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
}));

const CreateButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#8B5CF6',
  color: '#ffffff',
  padding: '12px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '0.9375rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#7C3AED',
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  marginTop: '16px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#262626',
    borderRadius: '6px',
    height: '40px',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#ffffff',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      opacity: 1,
    },
  },
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
}));

const AssistantItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

const AssistantAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#8B5CF6',
  width: 36,
  height: 36,
  fontSize: '1rem',
}));

const AssistantInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

const AssistantName = styled(Box)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '0.9375rem',
  fontWeight: 500,
}));

const AssistantType = styled(Box)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.8125rem',
}));

const AssistantList = styled(Box)(({ theme }) => ({
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <CreateButton
        fullWidth
        startIcon={<Add />}
      >
        Create Assistant
      </CreateButton>

      <SearchField
        fullWidth
        placeholder="Search assistants..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <AssistantList>
        {['Assistant 1', 'Assistant 2', 'Assistant 3'].map((name) => (
          <AssistantItem key={name}>
            <AssistantAvatar>A</AssistantAvatar>
            <AssistantInfo>
              <AssistantName>{name}</AssistantName>
              <AssistantType>AI Assistant</AssistantType>
            </AssistantInfo>
          </AssistantItem>
        ))}
      </AssistantList>
    </SidebarContainer>
  );
};

export default Sidebar; 