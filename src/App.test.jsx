import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Validaciones del portafolio personal', () => {
  it('debe mostrar una imagen de fotografía', () => {
    render(<App />);
    const photo = screen.getByTestId('profile-photo');
    const img = photo.querySelector('img');
    expect(img).to.exist;
    expect(img.getAttribute('src')).to.match(/\.(jpg|jpeg|png|gif|webp)$/i);
  });

  it('debe mostrar el número de teléfono', () => {
    render(<App />);
    const phone = screen.getAllByTestId('phone-number');
    expect(phone.length).to.be.greaterThan(0);
    phone.forEach(p => expect(p.textContent).to.match(/\d{4,}/));
  });

  it('debe mostrar nombres y apellidos', () => {
    render(<App />);
    const name = screen.getAllByTestId('full-name');
    expect(name.length).to.be.greaterThan(0);
    name.forEach(n => {
      expect(n.textContent).to.not.equal('');
      expect(n.textContent.length).to.be.greaterThan(5);
    });
  });

  it('debe tener al menos 5 habilidades', () => {
    render(<App />);
    const skills = screen.getAllByTestId('skill-item');
    expect(skills.length).toBeGreaterThanOrEqual(5);
  });

  it('debe tener al menos 3 elementos en experiencia/proyectos', () => {
    render(<App />);
    const projects = screen.getAllByTestId('project-item');
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });
});
