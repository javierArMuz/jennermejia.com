import './Defray.css'

const Defray = () => {
  return (
    <article className="defray my-5">
      <img className='row' src="/images/verde.png" alt="" />
      <div className='row justify-content-center'>
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center px-5 mb-4">
          <p className="text-center py-3 h3"><strong>¿Cómo votar por Jenner?</strong></p>
          <p>En el tarjeton no olvides cruar dos (2) líneas formando una X sin salirse de recuadro.</p>
          <div className="icon">
            <img src="/images/logosabanalarganosune.png" alt="" />
          </div>
        </div>
        <div className="col-sm-6">
          <img src="/images/tarjeton.png" alt="" />
        </div>
      </div>
    </article>
  )
}

export default Defray