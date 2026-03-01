import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: `
            radial-gradient(ellipse at 20% 0%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(27, 153, 139, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #0D1B2A 0%, #0A1420 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Geometric Background Pattern */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
