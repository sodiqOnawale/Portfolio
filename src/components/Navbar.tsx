import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        position="fixed"
        sx={{
          background: trigger
            ? 'rgba(13, 27, 42, 0.95)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
          borderBottom: trigger ? '1px solid rgba(255, 107, 53, 0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            py: 1.5,
            px: { xs: 2, md: 6 },
            maxWidth: '1400px',
            width: '100%',
            mx: 'auto',
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
              letterSpacing: '0.02em',
            }}
            onClick={() => scrollToSection('#home')}
          >
            SO
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item, index) => (
              <Button
                key={item.label}
                component={motion.button}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  color: activeSection === item.href.slice(1) ? '#FF6B35' : 'text.secondary',
                  fontWeight: activeSection === item.href.slice(1) ? 600 : 400,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: activeSection === item.href.slice(1) ? '60%' : '0%',
                    height: 2,
                    background: 'linear-gradient(90deg, #FF6B35, #F7931E)',
                    borderRadius: 1,
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    color: '#FF6B35',
                    background: 'transparent',
                    '&::after': {
                      width: '60%',
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#FF6B35' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 300,
            background: 'linear-gradient(180deg, #0D1B2A 0%, #1B2838 100%)',
            borderLeft: '1px solid rgba(255, 107, 53, 0.2)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#FF6B35' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item, index) => (
              <ListItem
                key={item.label}
                disablePadding
                component={motion.li}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItemButton
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    py: 2,
                    borderRadius: 2,
                    mb: 1,
                    '&:hover': {
                      background: 'rgba(255, 107, 53, 0.1)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      color: activeSection === item.href.slice(1) ? '#FF6B35' : 'text.primary',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
