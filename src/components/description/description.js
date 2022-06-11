import React from 'react';
import { Topic } from './topic/topic';
import { descriptionData } from '../../description-data';
import "./description.css";

// lado direito da pagina
export function Description() {
  /*
    Essa função foi criada para criar uma lista de componentes "Topic"
    a partir da lista de informações "descriptionData".
    Conteúdos para estudar: "for no javascript".
  */
  const createTopics = () => {
    const topics = [];

    for (let index = 0; index < descriptionData.length; index += 1) {
      const currentTopic = descriptionData[index];
      topics.push(
        <Topic
          key={ index }
          title={ currentTopic.title }
          content= { currentTopic.content }
        />
      );
    }

    return topics;
  };

  return (
    <section id="curriculum-description">
      { createTopics() }
    </section>
  );
}
