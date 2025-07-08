import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import './App.css';

const personalData = {
  name: 'Mathias Isaac Freire Unda',
  title: 'Estudiante de Ingeniería en Software',
  photo: 'https://randomuser.me/api/portraits/men/1.jpg', // Cambia por tu foto real
  email: 'matifreireu@hotmail.com',
  phone: '(593) 9788-73119',
  location: 'Ecuador',
};

const aboutMe = `Soy una persona enfocada en aprender cosas que contribuyan a mi formación profesional, que le gusta trabajar en equipo en pos de un fin común.`;

const education = [
  {
    institution: 'COLEGIO TÉCNICO SALESIANO DON BOSCO',
    degree: 'Bachiller Técnico - Área Técnica Industrial Electrónica de Consumo',
    date: 'Julio 2022',
  },
  {
    institution: 'UNIVERSIDAD INTERNACIONAL SEK',
    degree: 'Ingeniería en Software (Cursando quinto semestre)',
    date: '',
  },
];

const courses = [
  {
    name: 'Curso Profesional de la Nube',
    institution: 'AMAZON',
    hours: '8 horas',
    date: 'Enero 2025',
  },
  {
    name: 'Curso Exploración de IoT con Cisco Packet Tracer',
    institution: 'CISCO PACKET TRACER',
    hours: '3 horas',
    date: 'Enero 2025',
  },
  {
    name: 'Curso Introducción a Cisco',
    institution: 'CISCO',
    hours: '2 horas',
    date: 'Mayo 2024',
  },
];

const experience = [
  {
    company: 'JERSEY CLUB',
    role: 'Asesor de Ventas Online',
    period: 'Noviembre 2023 - Mayo 2024',
    duration: '6 Meses',
    description: [
      'Respuesta a requerimientos de clientes',
      'Asesoría y cierre de ventas a clientes',
      'Elaboración de reportes de ventas',
      'Distribución y seguimiento de paquetería',
    ],
  },
];

const skills = [
  'Liderazgo',
  'Aprendizaje Autónomo',
  'Resolución de problemas',
  'Trabajo en equipo',
  'Pensamiento crítico',
];

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B1' },
];

const tools = [
  'Desarrollo de Páginas Web',
  'Aplicaciones móviles',
  'Manejo de Bases de Datos',
  'Manejo de Office',
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function App() {
  return (
    <Box sx={{ bgcolor: 'linear-gradient(135deg, #e0e7ff 0%, #f5f5f5 100%)', minHeight: '100vh', pb: 8 }}>
      <HideOnScroll>
        <AppBar position="fixed" color="primary" elevation={4} sx={{ mb: 8, borderRadius: 0, background: 'linear-gradient(90deg, #6366f1 0%, #3730a3 100%)' }}>
          <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
            <Button sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }} onClick={() => scrollToSection('formacion')}>Formación Académica</Button>
            <Button sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }} onClick={() => scrollToSection('cursos')}>Cursos Realizados</Button>
            <Button sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }} onClick={() => scrollToSection('experiencia')}>Experiencia Laboral</Button>
            <Button sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }} onClick={() => scrollToSection('habilidades')}>Habilidades</Button>
            <Button sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }} onClick={() => scrollToSection('idiomas')}>Idiomas</Button>
            <Button sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }} onClick={() => scrollToSection('paquetes')}>Manejo de Paquetes</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Card sx={{ mb: 6, borderRadius: 6, boxShadow: 8, p: 4, background: 'rgba(255,255,255,0.98)', position: 'relative', overflow: 'visible' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: -60 }}>
            <Avatar src={personalData.photo} alt={personalData.name} sx={{ width: 130, height: 130, boxShadow: 6, border: '5px solid #6366f1', mb: 2, bgcolor: '#fff' }} />
            <Typography variant="h2" fontWeight={900} color="#3730a3" sx={{ letterSpacing: 1, mb: 1 }}>{personalData.name}</Typography>
            <Typography variant="h5" color="#6366f1" sx={{ mb: 2, fontWeight: 600 }}>{personalData.title}</Typography>
            <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" sx={{ mb: 1 }}>
              <EmailIcon fontSize="small" color="primary" />
              <Typography variant="body1" color="text.secondary">{personalData.email}</Typography>
              <PhoneIcon fontSize="small" color="primary" />
              <Typography variant="body1" color="text.secondary">{personalData.phone}</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">{personalData.location}</Typography>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ px: { xs: 0, md: 6 }, textAlign: 'center' }}>
            <Typography variant="h4" color="#3730a3" fontWeight={700} sx={{ mb: 2 }}>Acerca de mí</Typography>
            <Typography variant="body1" color="text.secondary" fontSize={18}>{aboutMe}</Typography>
          </Box>
        </Card>

        <Grid container spacing={4} justifyContent="center" direction="row" alignItems="stretch" sx={{ flexWrap: 'nowrap', mb: 6 }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Card id="formacion" sx={{ borderRadius: 4, boxShadow: 4, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'stretch', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
              <CardHeader avatar={<SchoolIcon color="primary" />} title={<Typography variant="h5" fontWeight={700}>Formación Académica</Typography>} />
              <CardContent>
                <Stack spacing={2}>
                  {education.map((ed, idx) => (
                    <Box key={idx}>
                      <Typography variant="subtitle1" fontWeight={700} color="#6366f1">{ed.institution}</Typography>
                      <Typography variant="body2">{ed.degree}</Typography>
                      {ed.date && <Typography variant="caption" color="text.secondary">{ed.date}</Typography>}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Card id="cursos" sx={{ borderRadius: 4, boxShadow: 4, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'stretch', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
              <CardHeader avatar={<EmojiObjectsIcon color="secondary" />} title={<Typography variant="h5" fontWeight={700}>Cursos Realizados</Typography>} />
              <CardContent>
                <Stack spacing={2}>
                  {courses.map((course, idx) => (
                    <Box key={idx}>
                      <Typography variant="subtitle1" fontWeight={700} color="#6366f1">{course.name}</Typography>
                      <Typography variant="body2">{course.institution} • {course.hours}</Typography>
                      <Typography variant="caption" color="text.secondary">{course.date}</Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box my={6} display="flex" justifyContent="center">
          <Box width={{ xs: '100%', md: '80%' }}>
            <Divider sx={{ mb: 3 }}>
              <Typography id="experiencia" variant="h4" color="#fff" fontWeight={700} sx={{ letterSpacing: 1 }}>Experiencia Laboral</Typography>
            </Divider>
            <Grid container spacing={3} mt={1} justifyContent="center">
              {experience.map((exp, idx) => (
                <Grid item xs={12} key={idx} display="flex" justifyContent="center">
                  <Card sx={{ borderRadius: 4, boxShadow: 3, width: '100%', background: 'linear-gradient(135deg, #e0e7ff 0%, #f5f5f5 100%)' }}>
                    <CardHeader avatar={<BusinessCenterIcon color="primary" />} title={<Typography variant="h6" fontWeight={700}>{exp.company}</Typography>} subheader={<Typography color="text.secondary">{exp.period} • {exp.duration}</Typography>} />
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight={600}>{exp.role}</Typography>
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {exp.description.map((desc, i) => (
                          <li key={i}><Typography variant="body2">{desc}</Typography></li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box my={6} display="flex" justifyContent="center">
          <Box width={{ xs: '100%', md: '80%' }}>
            <Grid container spacing={5} justifyContent="center">
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <Card id="habilidades" sx={{ borderRadius: 4, boxShadow: 3, width: '100%', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                  <CardHeader avatar={<CodeIcon color="primary" />} title={<Typography variant="h5" fontWeight={700}>Habilidades</Typography>} />
                  <CardContent>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {skills.map(skill => <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ fontSize: 16, m: 0.5, fontWeight: 600 }} />)}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <Card id="idiomas" sx={{ borderRadius: 4, boxShadow: 3, width: '100%', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
                  <CardHeader avatar={<LanguageIcon color="secondary" />} title={<Typography variant="h5" fontWeight={700}>Idiomas</Typography>} />
                  <CardContent>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {languages.map(lang => <Chip key={lang.name} label={`${lang.name} (${lang.level})`} color="secondary" sx={{ fontSize: 16, m: 0.5, fontWeight: 600 }} />)}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box my={6} display="flex" justifyContent="center">
          <Box width={{ xs: '100%', md: '80%' }}>
            <Card id="paquetes" sx={{ borderRadius: 4, boxShadow: 3, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
              <CardHeader avatar={<WorkIcon color="primary" />} title={<Typography variant="h5" fontWeight={700}>Manejo de Paquetes</Typography>} />
              <CardContent>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {tools.map(tool => <Chip key={tool} label={tool} color="success" sx={{ fontSize: 16, m: 0.5, fontWeight: 600 }} />)}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
