import React, { useState } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import { Star, ContentCopy, Info, Add, Description, MoreVert } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material';

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

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  padding: '24px',
  marginTop: '16px',
}));

const FormSection = styled(Box)(({ theme }) => ({
  '&:not(:last-child)': {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
}));

const FormLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '140px 1fr',
  gap: theme.spacing(3),
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
    paddingLeft: '12px !important',
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

interface AssistantConfigProps {
  initialAssistantId?: string;
  onSave?: (config: AssistantConfigType) => Promise<void>;
  onPublish?: (config: AssistantConfigType) => Promise<void>;
}

interface AssistantConfigType {
  id: string;
  provider: string;
  model: string;
  name: string;
  firstMessage: string;
  systemPrompt: string;
  maxTokens: number;
  voiceProvider: string;
  voice: string;
}

const AVAILABLE_PROVIDERS = [
  { value: 'open-ai', label: 'open-ai' },
];

const MODEL_OPTIONS = {
  'open-ai': [
    { value: 'gpt-3.5-turbo', label: 'gpt-3.5-turbo' },
  ],
};

const VOICE_PROVIDERS = [
  { value: '11labs', label: '11labs' },
];

const VOICES = [
  { value: 'Burt', label: 'Burt' },
];

const AssistantConfig: React.FC<AssistantConfigProps> = ({ 
  initialAssistantId,
  onSave,
  onPublish 
}) => {
  const [config, setConfig] = useState<AssistantConfigType>({
    id: initialAssistantId || '282a506b-3fbc-46c1-bdc6-176313a36810',
    provider: 'open-ai',
    model: 'gpt-3.5-turbo',
    name: 'New Assistant',
    firstMessage: 'Hello, how can I assist you today?',
    systemPrompt: 'This is a blank template with minimal defaults, you can change the model, temperature, and messages.',
    maxTokens: 250,
    voiceProvider: '11labs',
    voice: 'Burt',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleChange = (field: keyof AssistantConfigType) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    setConfig((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(config.id);
  };

  const handleSave = async () => {
    if (onSave) {
      setIsSaving(true);
      try {
        await onSave(config);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handlePublish = async () => {
    if (onPublish) {
      setIsPublishing(true);
      try {
        await onPublish(config);
      } finally {
        setIsPublishing(false);
      }
    }
  };

  return (
    <ConfigContainer>
      <Header>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 500 }}>
            {config.name}
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
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? <CircularProgress size={20} /> : 'Save Changes'}
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
            onClick={handlePublish}
            disabled={isPublishing}
          >
            {isPublishing ? <CircularProgress size={20} /> : 'Publish'}
          </Button>
          <IconButton size="small">
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>
      </Header>

      <ContentWrapper>
        <Section>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
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
              <Typography className="id-text">{config.id}</Typography>
              <IconButton onClick={handleCopyId} size="small">
                <ContentCopy sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
              </IconButton>
            </AssistantIdContainer>
          </Box>

          <FormContainer>
            <FormSection>
              <FormLayout>
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
                  size="small"
                  value={config.firstMessage}
                  onChange={handleChange('firstMessage')}
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
                  size="small"
                  value={config.systemPrompt}
                  onChange={handleChange('systemPrompt')}
                />
              </FormLayout>
            </FormSection>

            <FormSection>
              <FormLayout>
                <LabelContainer>
                  <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Provider</Typography>
                  <Tooltip title="Select AI provider" arrow>
                    <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
                  </Tooltip>
                </LabelContainer>
                <StyledFormControl fullWidth size="small">
                  <Select 
                    value={config.provider}
                    onChange={handleChange('provider')}
                    displayEmpty
                  >
                    {AVAILABLE_PROVIDERS.map((provider) => (
                      <MenuItem key={provider.value} value={provider.value}>
                        {provider.label}
                      </MenuItem>
                    ))}
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
                    value={config.model}
                    onChange={handleChange('model')}
                    displayEmpty
                  >
                    {MODEL_OPTIONS[config.provider as keyof typeof MODEL_OPTIONS].map((model) => (
                      <MenuItem key={model.value} value={model.value}>
                        {model.label}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </FormLayout>
            </FormSection>

            <FormSection>
              <FormLayout>
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
              </FormLayout>
            </FormSection>

            <FormSection>
              <FormLayout>
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
                        value={config.voiceProvider}
                        onChange={handleChange('voiceProvider')}
                        label="Provider"
                        sx={{
                          '& .MuiSelect-select': {
                            paddingLeft: '12px',
                          }
                        }}
                      >
                        {VOICE_PROVIDERS.map((provider) => (
                          <MenuItem key={provider.value} value={provider.value}>
                            {provider.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </StyledFormControl>
                    <StyledFormControl fullWidth size="small">
                      <InputLabel sx={{ 
                        fontSize: '0.875rem',
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}>Voice</InputLabel>
                      <Select 
                        value={config.voice}
                        onChange={handleChange('voice')}
                        label="Voice"
                        sx={{
                          '& .MuiSelect-select': {
                            paddingLeft: '12px',
                          }
                        }}
                      >
                        {VOICES.map((voice) => (
                          <MenuItem key={voice.value} value={voice.value}>
                            {voice.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </StyledFormControl>
                  </Box>
                </Box>
              </FormLayout>
            </FormSection>

            <FormSection>
              <FormLayout>
                <LabelContainer>
                  <Typography sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.87)' }}>Max Tokens</Typography>
                  <Tooltip title="Maximum number of tokens in the response" arrow>
                    <Info sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.38)' }} />
                  </Tooltip>
                </LabelContainer>
                <StyledTextField
                  fullWidth
                  size="small"
                  type="number"
                  value={config.maxTokens}
                  onChange={handleChange('maxTokens')}
                />
              </FormLayout>
            </FormSection>
          </FormContainer>
        </Section>
      </ContentWrapper>
    </ConfigContainer>
  );
};

export default AssistantConfig; 