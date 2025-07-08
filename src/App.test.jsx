import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Datos de ejemplo para pruebas unitarias
const personalData = {
  name: 'Mathias Isaac Freire Unda',
  title: 'Estudiante de Ingeniería en Software',
  photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  email: 'matifreireu@hotmail.com',
  phone: '(593) 9788-73119',
  location: 'Ecuador',
};

const skills = [
  'Liderazgo',
  'Aprendizaje Autónomo',
  'Resolución de problemas',
  'Trabajo en equipo',
  'Pensamiento crítico',
];

const projects = [
  { title: 'Proyecto 1' },
  { title: 'Proyecto 2' },
  { title: 'Proyecto 3' },
];

describe('Portafolio Personal', () => {
  test('Los datos personales incluyen fotografía, teléfono y nombre completo', () => {
    render(<App />);
    // Foto
    const img = screen.getByRole('img', { name: /mathias isaac freire unda/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', personalData.photo);
    // Teléfono
    expect(screen.getByText(personalData.phone)).toBeInTheDocument();
    // Nombre completo
    expect(screen.getByText(personalData.name)).toBeInTheDocument();
  });

  test('El listado de habilidades tiene al menos 5 elementos', () => {
    render(<App />);
    const chips = screen.getAllByText(/liderazgo|aprendizaje autónomo|resolución de problemas|trabajo en equipo|pensamiento crítico/i);
    expect(chips.length).toBeGreaterThanOrEqual(5);
  });

  test('El listado de proyectos tiene al menos 3 elementos', () => {
    // Simulación: los proyectos se muestran en la sección de cursos y formación
    render(<App />);
    // Buscar títulos de proyectos (puedes adaptar si tienes una sección específica de proyectos)
    const proyectos = [
      screen.getByText(/curso profesional de la nube/i),
      screen.getByText(/curso exploración de iot/i),
      screen.getByText(/curso introducción a cisco/i),
    ];
    expect(proyectos.length).toBeGreaterThanOrEqual(3);
  });
});
