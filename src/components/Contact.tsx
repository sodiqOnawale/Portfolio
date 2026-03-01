import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'onawalesodiq@gmail.com',
      href: 'mailto:onawalesodiq@gmail.com',
    },
    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null,
    },
  ];

  const socials = [
    { icon: <GitHubIcon />, href: 'https://github.com/sodiqonawale', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/sodiq-onawale-4a548a339/', label: 'LinkedIn' },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
      }}
    >
      {/* Background Accent */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 10 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#FF6B35',
              fontWeight: 500,
              mb: 2,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.875rem',
            }}
          >
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Let's Work{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Together
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing!
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              component={motion.form}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(27, 40, 56, 0.6) 0%, rgba(13, 27, 42, 0.6) 100%)',
                border: '1px solid rgba(255, 107, 53, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 107, 53, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF6B35',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#FF6B35',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 107, 53, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF6B35',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#FF6B35',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 107, 53, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF6B35',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#FF6B35',
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    py: 1.5,
                    alignSelf: 'flex-start',
                    px: 5,
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                Contact Information
              </Typography>

              <Stack spacing={3} sx={{ mb: 5 }}>
                {contactInfo.map((info) => (
                  <Box
                    key={info.label}
                    component={info.href ? 'a' : 'div'}
                    href={info.href || undefined}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'all 0.3s ease',
                      '&:hover': info.href ? {
                        color: '#FF6B35',
                      } : {},
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 107, 53, 0.1)',
                        color: '#FF6B35',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
                      >
                        {info.label}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                Follow Me
              </Typography>
              <Stack direction="row" spacing={2}>
                {socials.map((social) => (
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
                      borderRadius: 2,
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
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            background: snackbar.severity === 'success'
              ? 'linear-gradient(135deg, #1B998B 0%, #147A6F 100%)'
              : undefined,
            color: 'white',
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;

