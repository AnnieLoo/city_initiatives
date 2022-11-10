import React from 'react';

export default function InitiativeCard({ card }) {
  // console.log('card', card);
  return (
      <div className="col-sm-6">
        <div
          className="card"
        >
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p className="card-text">{`${card.description.slice(0, 50)}...`}</p>
            <p className="fst-italic">
              Общее кол-во голосов:
              {' '}
              <strong>
                {card.vote_for + card.vote_against}
              </strong>
            </p>
            <p className="fst-italic">
              % голосов "ЗА":
              {' '}
              <strong>
                {((card.vote_for / (card.vote_for + card.vote_against)) * 100).toFixed()}
                %

              </strong>
            </p>
            <p className="fst-normal">
              Уровень инициативы:
              {' '}
              {card['Level.name']}
            </p>
            <a href={`/initiatives/${card.id}`} className="card-link">Подробнее</a>
          </div>
        </div>
      </div>
  );
}
