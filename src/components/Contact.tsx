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
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL?.trim() ?? '';

const textFieldSx = {
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
} as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_URL) {
      setSnackbar({
        open: true,
        message:
          'Contact form is not configured. Add VITE_FORMSPREE_URL to your .env file (see .env.example).',
        severity: 'error',
      });
      return;
    }

    setSubmitting(true);
    try {
      const body = new FormData(e.currentTarget);
      const name = String(body.get('name') ?? '').trim();
      const email = String(body.get('email') ?? '').trim();
      const message = String(body.get('message') ?? '').trim();
      if (!name || !email || !message) {
        setSnackbar({
          open: true,
          message: 'Please fill in all fields before sending.',
          severity: 'error',
        });
        return;
      }

      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });

      const data: { ok?: boolean; error?: string; errors?: unknown } = await res.json().catch(() => ({}));

      if (res.ok) {
        setSnackbar({
          open: true,
          message: 'Thanks — your message was sent. I will get back to you soon.',
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const detail =
          typeof data.error === 'string'
            ? data.error
            : 'Something went wrong sending your message. Please try again or email me directly.';
        setSnackbar({ open: true, message: detail, severity: 'error' });
      }
    } catch {
      setSnackbar({
        open: true,
        message: 'Network error — check your connection or try emailing me directly.',
        severity: 'error',
      });
    } finally {
      setSubmitting(false);
    }
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
    {
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/sodiq-onawale-4a548a339/',
      label: 'LinkedIn',
    },
  ];

  const allFieldsFilled =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  const sendDisabled = submitting || !FORMSPREE_URL || !allFieldsFilled;

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
      }}
    >
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
            Let&apos;s Work{' '}
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
            Send a message through the form — it delivers via{' '}
            <Box component="span" sx={{ color: 'text.primary' }}>
              Formspree
            </Box>
            . You can also reach me by email anytime.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(27, 40, 56, 0.6) 0%, rgba(13, 27, 42, 0.6) 100%)',
                border: '1px solid rgba(255, 107, 53, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {!FORMSPREE_URL && (
                <Alert severity="warning" sx={{ mb: 3 }}>
                  Add <code style={{ wordBreak: 'break-all' }}>VITE_FORMSPREE_URL</code> to a{' '}
                  <code>.env</code> file (copy <code>.env.example</code>). Restart{' '}
                  <code>npm run dev</code> after saving.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot — bots only; kept empty by real visitors */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    multiline
                    rows={5}
                    sx={textFieldSx}
                  />
                  <Box
                    sx={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      cursor: sendDisabled ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={sendDisabled}
                      endIcon={
                        submitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />
                      }
                      sx={{
                        py: 1.5,
                        px: 5,
                        '&.Mui-disabled': {
                          cursor: 'not-allowed',
                          pointerEvents: 'none',
                        },
                      }}
                    >
                      {submitting ? 'Sending…' : 'Send message'}
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>

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
                      '&:hover': info.href
                        ? {
                            color: '#FF6B35',
                          }
                        : {},
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
        autoHideDuration={8000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          sx={{
            background:
              snackbar.severity === 'success'
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
