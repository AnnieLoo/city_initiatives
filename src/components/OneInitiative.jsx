import React from 'react';

export default function OneInitiative() {
  return (
    <section className="oneInitiative-section">

      <div className='container-1'>
        <h1 className="oneInitiative-title">НАЗВАНИЕ ИНИЦИАТИВЫ</h1>
        <h6 className="card-subtitle mb-2 text-muted">АВТОР</h6>
        <div className="oneInitiative-text">
          <p>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className='container-2'>
        <h5>СРОК ОКОНЧАНИЯ ГОЛОСОВАНИЯ: </h5>
        <h6 className="card-subtitle mb-2 text-muted">01 февраля 2019г. </h6>
        <h5>УРОВЕНЬ ИНИЦИАТИВЫ:</h5>
        <h6 className="card-subtitle mb-2 text-muted">ФЕДЕРАЛЬНЫЙ</h6>
        <h5>СУММАРНОЕ КОЛИЧЕСТВО ПРОГОЛОСОВАВШИХ:</h5>
        <h6 className="card-subtitle mb-2 text-muted">1000</h6>
        <h5>ПРОЦЕНТ ПРОГОЛОСОВАВШИХ ЗА ИНИЦИАТИВУ </h5>
        <h6 className="card-subtitle mb-2 text-muted">10%</h6>
      </div>
    </section>

  );
}
