import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        pt: { xs: 10, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Floating Orbs */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        component={motion.div}
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: { xs: 100, md: 180 },
          height: { xs: 100, md: 180 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27, 153, 139, 0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variant="h6"
            sx={{
              color: '#FF6B35',
              fontWeight: 500,
              mb: 2,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: { xs: '0.875rem', md: '1rem' },
            }}
          >
            Frontend Developer
          </Typography>

          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variant="h1"
            sx={{
              mb: 3,
              color: 'white',
            }}
          >
            Hi, I'm{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #1B998B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Sodiq
            </Box>
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mb: 5,
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.8,
            }}
          >
            A passionate frontend developer crafting beautiful, responsive, 
            and user-friendly web applications with React, TypeScript, and modern technologies.
          </Typography>

          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 6 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={scrollToProjects}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={scrollToContact}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Get In Touch
            </Button>
          </Stack>

          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            direction="row"
            spacing={2}
          >
            {[
              { icon: <GitHubIcon />, href: 'https://github.com/sodiqonawale', label: 'GitHub' },
              { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/sodiq-onawale-4a548a339/', label: 'LinkedIn' },
              { icon: <EmailIcon />, href: 'mailto:onawalesodiq@gmail.com', label: 'Email' },
            ].map((social) => (
              <Box
                key={social.label}
                component={motion.a}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  color: '#FF6B35',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                    color: 'white',
                    boxShadow: '0 8px 30px rgba(255, 107, 53, 0.4)',
                  },
                }}
              >
                {social.icon}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            mb: 1,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
          }}
        >
          Scroll
        </Typography>
        <Box
          component={motion.div}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          sx={{
            width: 24,
            height: 40,
            borderRadius: 12,
            border: '2px solid rgba(255, 107, 53, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              borderRadius: 2,
              background: '#FF6B35',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
