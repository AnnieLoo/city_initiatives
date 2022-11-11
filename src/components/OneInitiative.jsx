import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OneInitiative({ initiative, allInitiatives }) {
  const [error, setError] = useState(null);
  const [votesFor, setVotesFor] = useState(Number(initiative.vote_for));
  const [votesAgainst, setVotesAgainst] = useState(Number(initiative.vote_against));
  const [editFor, setEditFor] = useState(false);
  const [editAgainst, setEditAgainst] = useState(false);

  // const clickForHandler = () => {
  //   setEditFor(true);
  // };

  // const clickAgainstHandler = () => {
  //   setEditAgainst(true);
  // };

  const votesForHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/initiatives/${initiative.id}/voteFor`, {
        method: 'POST',
        headers: {
          'Contenet-Type': 'application/json',
        },
        body: JSON.stringify({ votesFor }),
      });
      const data = await response.json();
      if (response.ok) {
        setVotesFor(votesFor + 1);
        setEditFor(true);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const votesAgainstHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/initiatives/${initiative.id}/voteAgainst`, {
        method: 'POST',
        headers: {
          'Contenet-Type': 'application/json',
        },
        body: JSON.stringify({ votesAgainst }),
      });
      const data = await response.json();
      if (response.ok) {
        setVotesAgainst(votesAgainst + 1);
        setEditAgainst(true);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="oneInitiative-section">

      <div className="container-1">
        {/* <div className="text-center" style={{ marginBottom: '5px' }}>
          <img src={initiative?.avatar} className="rounded" alt="..." />
        </div> */}
        <h1 className="oneInitiative-title">{initiative.name}</h1>
        <h6 className="card-subtitle mb-2 text-success">{initiative['User.name']}</h6>
        <div className="oneInitiative-text">
          {initiative.description}
        </div>
      </div>

      <div className="container-2">
        <h5>СРОК ОКОНЧАНИЯ ГОЛОСОВАНИЯ: </h5>
        <h6 className="card-subtitle mb-2 text-danger">
          {initiative.term}
          {' '}
        </h6>
        <h5>УРОВЕНЬ ИНИЦИАТИВЫ:</h5>
        <h6 className="card-subtitle mb-2 text-danger">{initiative['Level.name']}</h6>
        <h5>СУММАРНОЕ КОЛИЧЕСТВО ПРОГОЛОСОВАВШИХ:</h5>
        <h6 className="card-subtitle mb-2 text-danger">{votesFor + votesAgainst}</h6>
        <h5>ПРОЦЕНТ ПРОГОЛОСОВАВШИХ ЗА ИНИЦИАТИВУ </h5>
        <h6 className="card-subtitle mb-2 text-danger">
          {(((votesFor / (votesFor + votesAgainst)) * 100).toFixed()) == 'NaN' ? 'еще нет голосов' : `${((votesFor / (votesFor + votesAgainst)) * 100).toFixed()}%`}
        </h6>
        <div className="linkBtn">
          <a href={`/initiatives/${initiative?.user_id}/author`} className="btn btn-success">Все инициативы автора</a>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form className="btn_card" onSubmit={votesForHandler}>
            <button disabled={editFor} type="submit" className="btn btn-info">За</button>
          </form>
          <form className="btn_card" onSubmit={votesAgainstHandler}>
            <button type="submit" disabled={editAgainst} className="btn btn-danger">Против</button>
          </form>
        </div>
      </div>
    </div>

  );
}
