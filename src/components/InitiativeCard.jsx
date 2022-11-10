import React from 'react';

export default function InitiativeCard({ card }) {
  // console.log('card', card);
  const votesProcents = (((card.vote_for / (card.vote_for + card.vote_against)) * 100).toFixed()) == 'NaN' ? 'пока нет голосов' : `${((card.vote_for / (card.vote_for + card.vote_against)) * 100).toFixed()}%`;

  const dateString = card.term;
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const dt = new Date(dateString.replace(pattern, '$3-$2-$1'));
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
  const status = dt < today ? 'Не активная' : 'Активная';
  console.log('status', dt);
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
              {votesProcents}

            </strong>
          </p>
          <p className="fst-normal">
            Уровень инициативы:
            {' '}
            <strong>
              {card['Level.name']}
            </strong>
          </p>
          <p className="fst-normal">
            Статус:
            {' '}
            <strong>
              {status}
            </strong>
          </p>
          <a href={`/initiatives/${card.id}`} className="card-link">Подробнее</a>
        </div>
      </div>
    </div>
  );
}
