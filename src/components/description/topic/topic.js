import React from 'react';
import "./topic.css";


// const props = {
//   title: 'string',
//   paragraphs: 'string',
// };

// parâmetro = props
export function Topic({ title, paragraphs, subtopics }) {
  return (
    <div className="topic-card">
      {/*
        Para receber o valor de variáveis JS no HTML do React
        precisamos usar "{}" em volta da variável.
      */}
      <h4>{ title }</h4>
      {/*
        Método de array "map". Conteúdo mais avançado de JS.
        Basciamente é o mesmo que fiz no arquivo "description.js" com o loop for.
        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      */}
      <br />
      { paragraphs && paragraphs.map((paragraph, index) => (
        <p key={ index }>{ paragraph }</p>
      )) }
      <ul className="subtopic-list">
        {
          subtopics && subtopics.map(({ title: subtopicTitle, info }, index) => (
            <li key={ index } className="subtopic-item">
              <h5>{ subtopicTitle }</h5>
              <p>{ info }</p>
            </li>
        ))}
      </ul>
    </div>
  );
}
