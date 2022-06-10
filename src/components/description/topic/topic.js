import React from 'react';

// const props = {
//   title: 'string',
//   content: 'string',
// };

// parâmetro = props
export function Topic({ title, content }) {
  return (
    <div>
      {/*
        Para receber o valor de variáveis JS no HTML do React
        precisamos usar "{}" em volta da variável.
      */}
      <h4>{ title }</h4>
      <p>{ content }</p>
    </div>
  );
}
