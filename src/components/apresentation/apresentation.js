import React from 'react';
import './apresentation.css';

// lado esquerdo da pagina
export function Apresentation() {
  return (
    // para inserir a imagem
    <section className="curriculum-section">
      <img
        id="profile-image"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQE16s21Bch2fg/profile-displayphoto-shrink_200_200/0/1624564934159?e=1660176000&v=beta&t=jXVajDYddyVk8GXa8fRWus5UluvkECZeCWJO_mGS470"
        alt="Foto de perfil"
      />
      {/* mudar e atualizar */}
      <h1>Hey, I'm Clara</h1>
      <p>I'm a Web Developer & Designer from Porto, Portugal</p>
      <p>Engeneering Student @ UNB</p>
      {/* para abrir os links em uma pag em branco */}
      <a href="" target="_blank"></a>
      <a href="" target="_blank"></a>
      <a href="" target="_blank"></a>
    </section>
  );
}
