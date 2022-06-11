import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import './header.css';

// lado esquerdo da pagina
export function Header() {
  return (
    // para inserir a imagem
    <header id="curriculum-header">
      {/* Foto de perfil */}
      <img
        id="profile-image"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQE16s21Bch2fg/profile-displayphoto-shrink_200_200/0/1624564934159?e=1660176000&v=beta&t=jXVajDYddyVk8GXa8fRWus5UluvkECZeCWJO_mGS470"
        alt="Foto de perfil"
      />
      {/* atualizado */}
      <h1 id="header-title">Clara de Medeiros Closs</h1>
      <p id="header-description">Estudante de Engenharia Aeroespacial na Universidade de Brasília</p>
      <p id="header-contact">clara@closs.net.br - (61) 9 992844311</p>
      {/* para abrir os links em uma pag em branco */}
      <div id="header-links">
        <a href="https://www.instagram.com/clari_css/" rel="noreferrer" target="_blank">
          {/* Ícone do Instagram */}
          <BsInstagram /> 
        </a>
        <a href="https://www.linkedin.com/in/clara-closs/" rel="noreferrer" target="_blank">
          {/* Ícone do LinkedIN */}
          <BsLinkedin />
        </a>
      </div>
      <footer id="header-footer">Brasília, Brasil</footer>
    </header>
  );
}
