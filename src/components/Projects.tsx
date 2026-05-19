import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Bloganity',
    description: 'A modern, feature-rich blog application built with React. Features include article browsing, responsive design, and an intuitive user interface for reading and discovering blog content.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    liveUrl: 'https://bloganity-r4kpblf1g-olamide-cybers-projects.vercel.app/',
    githubUrl: 'https://github.com/sodiqOnawale/Bloganity',
    featured: true,
  },
  {
    title: 'Task Manager Pro',
    description: 'A productivity application for managing daily tasks with features like drag-and-drop, categories, due dates, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'TypeScript', 'Material UI', 'Local Storage'],
    liveUrl: 'https://task-manager-pro-jet.vercel.app/',
    githubUrl: 'https://github.com/sodiqOnawale/Task-Manager-Pro',
  },
  {
    title: 'Weather Now',
    description: 'A clean weather application that displays current conditions and forecasts using a weather API, featuring location search and beautiful visualizations.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'TypeScript', 'REST API', 'CSS Modules'],
    liveUrl: 'https://weather-app-nine-beta-55.vercel.app/',
    githubUrl: 'https://github.com/sodiqOnawale/Weather-App',
  },
  {
    title: 'E-Commerce UI',
    description: 'A modern e-commerce frontend with product catalog, shopping cart, and checkout flow. Built with attention to user experience and conversion optimization.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'TypeScript', 'Material UI', 'Webpack'],
    liveUrl: 'https://ecommerce-ui-three-eosin.vercel.app/',
    githubUrl: 'https://github.com/sodiqOnawale/Ecommerce-ui',
  },
  {
    title: 'Spotlight Talks',
    description:
      'A conference-style talk catalog: browse sessions, filter by topic, search the library, and open detail pages with optional YouTube embeds. Built with the App Router and static generation.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'App Router'],
    liveUrl: 'https://talks-kappa.vercel.app/',
    githubUrl: 'https://github.com/sodiqOnawale/talks',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
          top: '50%',
          left: '-20%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27, 153, 139, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
            My Work
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Featured{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
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
            Here are some of my recent projects that showcase my skills and passion for frontend development.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={project.featured ? 12 : 6} key={project.title}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                sx={{
                  display: 'flex',
                  flexDirection: project.featured ? { xs: 'column', md: 'row' } : 'column',
                  overflow: 'hidden',
                  height: '100%',
                  position: 'relative',
                  '&::before': project.featured ? {
                    content: '"★ Featured"',
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 10,
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  } : {},
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: project.featured ? { xs: '100%', md: '50%' } : '100%',
                    minHeight: project.featured ? { xs: 250, md: 350 } : 220,
                    flexShrink: 0,
                  }}
                >
                  <CardMedia
                    component={motion.img}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    image={project.image}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(13, 27, 42, 0.9) 0%, transparent 100%)',
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: 3, md: 4 },
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      fontSize: project.featured ? { xs: '1.5rem', md: '1.75rem' } : '1.25rem',
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.7,
                      flex: 1,
                      fontSize: project.featured ? '1rem' : '0.9rem',
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.75rem',
                          height: 28,
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <IconButton
                      component={motion.a}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #FF8C5A 0%, #FFB347 100%)',
                        },
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                    {project.githubUrl && (
                      <IconButton
                        component={motion.a}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                          border: '1px solid rgba(255, 107, 53, 0.3)',
                          color: '#FF6B35',
                          '&:hover': {
                            background: 'rgba(255, 107, 53, 0.1)',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

