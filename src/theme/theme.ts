import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      main: string;
      light: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    accent?: {
      main: string;
      light: string;
      dark: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B35',
      light: '#FF8C5A',
      dark: '#E55A2B',
    },
    secondary: {
      main: '#1B998B',
      light: '#2DBDAC',
      dark: '#147A6F',
    },
    accent: {
      main: '#F7931E',
      light: '#FFB347',
      dark: '#D97706',
    },
    background: {
      default: '#0D1B2A',
      paper: '#1B2838',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0AEC0',
    },
    error: {
      main: '#EF4444',
    },
    success: {
      main: '#10B981',
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 8vw, 5rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
          boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF8C5A 0%, #FFB347 100%)',
            boxShadow: '0 6px 30px rgba(255, 107, 53, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#FF6B35',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1B2838 0%, #0D1B2A 100%)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 107, 53, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          background: 'rgba(255, 107, 53, 0.15)',
          border: '1px solid rgba(255, 107, 53, 0.3)',
          color: '#FF8C5A',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;

