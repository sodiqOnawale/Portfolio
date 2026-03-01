import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <GitHubIcon />, href: 'https://github.com/sodiqonawale', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/sodiq-onawale-4a548a339/', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:onawalesodiq@gmail.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid rgba(255, 107, 53, 0.1)',
        background: 'rgba(13, 27, 42, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SO
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            © {currentYear} Sodiq Onawale. Built with{' '}
            <FavoriteIcon sx={{ color: '#FF6B35', fontSize: 16 }} /> using React & MUI
          </Typography>

          <Stack direction="row" spacing={1}>
            {socials.map((social) => (
              <IconButton
                key={social.label}
                component={motion.a}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#FF6B35',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

