import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Star, ContentCopy, Info, Add, Description, MoreVert } from '@mui/icons-material';

const ConfigContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#fafafa',
  minHeight: '100vh',
  overflowY: 'auto',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 32px',
  height: '64px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: '#ffffff',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  padding: '24px 32px',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const FormLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '140px 1fr',
  gap: theme.spacing(2.5),
  '& > *:nth-of-type(odd)': {
    paddingTop: 6,
  },
}));

const LabelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    height: '36px',
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.12)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.87)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00BFA5',
      borderWidth: '1px',
    },
  },
  '& .MuiSelect-select': {
    paddingTop: '6px',
    paddingBottom: '6px',
    fontSize: '0.875rem',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.6)',
    transform: 'translate(14px, 7px) scale(1)',
    fontSize: '0.875rem',
    '&.Mui-focused': {
      color: '#00BFA5',
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    fontSize: '0.875rem',
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.12)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.87)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00BFA5',
      borderWidth: '1px',
    },
  },
  '& .MuiInputBase-inputSizeSmall': {
    padding: '6px 12px',
    height: '22px',
  },
  '& .MuiInputBase-multiline': {
    padding: '0',
    '& textarea': {
      padding: '6px 12px',
    },
  },
}));

const AssistantIdContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& .MuiTypography-root': {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.875rem',
  },
  '& .id-text': {
    backgroundColor: '#f5f5f5',
    padding: '4px 8px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
  },
  '& .MuiIconButton-root': {
    padding: 4,
  },
}));

const AssistantConfig = () => {
  const handleCopyId = () => {
    navigator.clipboard.writeText('282a506b-3f9c-46c1-bdc6-176313a36818');
  };

  return (
    <ConfigContainer>
      <Header>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 500 }}>
            New Assistant
          </Typography>
          <IconButton size="small">
            <Star fontSize="small" />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#00BFA5',
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#00A693',
                boxShadow: 'none',
              }
            }}
          >
            Talk with Assistant
          </Button>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#00BFA5',
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#00A693',
                boxShadow: 'none',
              }
            }}
          >
            Publish
          </Button>
          <IconButton size="small">
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>
      </Header>

      <ContentWrapper>
        <Section>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
            <Box>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 500, mb: 0.5, color: 'rgba(0, 0, 0, 0.87)' }}>
                Model Configuration
              </Typography>
              <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                Configure the model settings for the assistant.
              </Typography>
            </Box>
            <AssistantIdContainer>
              <Typography>Assistant ID</Typography>
              <Typography className="id-text">282a506b-3f9c-46c1-bdc6-176313a36818</Typography>
              <IconButton onClick={handleCopyId} size="small">
                <ContentCopy sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </IconButton>
            </AssistantIdContainer>
          </Box>

          <FormLayout>
            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Provider</Typography>
              <Tooltip title="Select AI provider" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <StyledFormControl fullWidth size="small">
              <Select 
                value="open-ai"
                sx={{
                  '& .MuiSelect-select': {
                    paddingLeft: '12px',
                  }
                }}
              >
                <MenuItem value="open-ai">open-ai</MenuItem>
              </Select>
            </StyledFormControl>

            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Model</Typography>
              <Tooltip title="Select AI model" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <StyledFormControl fullWidth size="small">
              <Select 
                value="gpt-3.5-turbo"
                sx={{
                  '& .MuiSelect-select': {
                    paddingLeft: '12px',
                  }
                }}
              >
                <MenuItem value="gpt-3.5-turbo">gpt-3.5-turbo</MenuItem>
              </Select>
            </StyledFormControl>

            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>First Message</Typography>
              <Tooltip title="Initial message configuration" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <StyledTextField
              fullWidth
              multiline
              rows={4}
              defaultValue="Hello, how can I assist you today?"
              size="small"
            />

            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>System Prompt</Typography>
              <Tooltip title="System prompt configuration" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <StyledTextField
              fullWidth
              multiline
              rows={4}
              defaultValue="This is a blank template with minimal defaults, you can change the model, temperature, and messages."
              size="small"
            />

            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Knowledge Base</Typography>
              <Tooltip title="Add files to enhance assistant knowledge" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
                <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.6)' }}>
                  Selected Files
                </Typography>
                <Button
                  startIcon={<Add sx={{ fontSize: 14 }} />}
                  sx={{ 
                    color: '#00BFA5',
                    textTransform: 'none',
                    padding: '3px 6px',
                    minWidth: 'unset',
                    fontSize: '0.875rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 191, 165, 0.04)'
                    }
                  }}
                >
                  Add a new file
                </Button>
              </Box>
              <Box sx={{ 
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: '4px',
                backgroundColor: '#ffffff',
              }}>
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.75,
                  py: 6,
                  px: 2,
                }}>
                  <Box sx={{ 
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    mb: 0.5
                  }}>
                    <Description sx={{ color: 'rgba(0, 0, 0, 0.38)', fontSize: 20 }} />
                  </Box>
                  <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>
                    No files selected
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>
                    Select files to enhance your assistant's knowledge
                  </Typography>
                  <Button
                    sx={{ 
                      color: '#00BFA5',
                      textTransform: 'none',
                      mt: 0.5,
                      padding: '4px 8px',
                      fontSize: '0.875rem',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 191, 165, 0.04)'
                      }
                    }}
                  >
                    Browse files
                  </Button>
                </Box>
              </Box>
            </Box>

            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Voice Configuration</Typography>
              <Tooltip title="Configure voice settings" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <Box>
              <Typography sx={{ 
                fontSize: '0.875rem', 
                color: 'rgba(0, 0, 0, 0.6)', 
                mb: 1.5,
                lineHeight: 1.5
              }}>
                Choose from the list of voices, or sync your voice library if you aren't able to find your voice in the dropdown. 
                If you are still facing any error, you can enable custom voice and add a voice ID manually.
              </Typography>
              <Box display="flex" gap={1.5}>
                <StyledFormControl fullWidth size="small">
                  <InputLabel sx={{ 
                    fontSize: '0.875rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}>Provider</InputLabel>
                  <Select 
                    value="11labs" 
                    label="Provider"
                    sx={{
                      '& .MuiSelect-select': {
                        paddingLeft: '12px',
                      }
                    }}
                  >
                    <MenuItem value="11labs">11labs</MenuItem>
                  </Select>
                </StyledFormControl>
                <StyledFormControl fullWidth size="small">
                  <InputLabel sx={{ 
                    fontSize: '0.875rem',
                    color: 'rgba(0, 0, 0, 0.6)',
                  }}>Voice</InputLabel>
                  <Select 
                    value="Burt" 
                    label="Voice"
                    sx={{
                      '& .MuiSelect-select': {
                        paddingLeft: '12px',
                      }
                    }}
                  >
                    <MenuItem value="Burt">Burt</MenuItem>
                  </Select>
                </StyledFormControl>
              </Box>
            </Box>

            <LabelContainer>
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Max Tokens</Typography>
              <Tooltip title="Configure maximum tokens" arrow>
                <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </Tooltip>
            </LabelContainer>
            <StyledTextField
              fullWidth
              type="number"
              defaultValue="250"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '36px',
                }
              }}
              inputProps={{ 
                style: { 
                  height: '22px',
                  padding: '6px 12px',
                  fontSize: '0.875rem'
                } 
              }}
            />
          </FormLayout>
        </Section>
      </ContentWrapper>
    </ConfigContainer>
  );
};

export default AssistantConfig; 