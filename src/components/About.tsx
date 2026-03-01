import { Box, Container, Typography, Grid, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material UI'] },
  { category: 'Styling', items: ['Sass/SCSS', 'Tailwind CSS', 'Styled Components', 'CSS Modules'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'npm', 'Vite', 'Webpack'] },
  { category: 'Learning', items: ['Next.js', 'Node.js', 'GraphQL', 'Testing'] },
];

const highlights = [
  {
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code following best practices.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    title: 'UI/UX Focused',
    description: 'Creating intuitive and aesthetically pleasing user interfaces.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 32 }} />,
    title: 'Performance',
    description: 'Optimizing applications for speed and smooth user experience.',
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 32 }} />,
    title: 'Responsive',
    description: 'Building applications that work seamlessly across all devices.',
  },
];

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
      }}
    >
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
            About Me
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Passionate About{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Building
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            I'm a frontend developer with a keen eye for design and a passion for 
            creating engaging web experiences. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </Typography>
        </Box>

        {/* Highlights Grid */}
        <Grid
          container
          spacing={3}
          sx={{ mb: 10 }}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={3} key={highlight.title}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  background: 'linear-gradient(145deg, rgba(27, 40, 56, 0.6) 0%, rgba(13, 27, 42, 0.6) 100%)',
                  border: '1px solid rgba(255, 107, 53, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(247, 147, 30, 0.1) 100%)',
                    color: '#FF6B35',
                    mb: 3,
                  }}
                >
                  {highlight.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
                  {highlight.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {highlight.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Skills Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={4}>
            {skills.map((skillGroup, groupIndex) => (
              <Grid item xs={12} sm={6} md={3} key={skillGroup.category}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: '#FF6B35',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {skillGroup.category}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Chip
                        key={skill}
                        label={skill}
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                        sx={{
                          fontSize: '0.875rem',
                          py: 2,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

