import JSON from "./cronograma.json"

// import "./secciones_cronograma.css"

export default function Dias({ dia }) {
  const actividades = JSON[dia]
  return (
    <div className="PrimerDia">
      <div className="cronograma">
        {actividades.map((actividad) => {
          return (
            <>
              {actividad.inicio == "Salones: " ? <FranjaHoraria actividad={actividad} estatus="resaltado" /> : <FranjaHoraria actividad={actividad} estatus="" />}
            </>
          )
        })}
      </div>
    </div>
  );
}

function FranjaHoraria({ actividad, estatus }) {
  return (
    <div className="franja_horaria">

{estatus == "resaltado" ? <div className={"hora " + estatus}> {actividad.inicio} </div> : <div className={"hora " + estatus}> {actividad.inicio} - {actividad.fin} </div>}
      

      <div className={"eventos " + estatus}>
        {actividad.eventos.map((evento) => {
          return (
            <div className="evento">
              {evento}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Evento() {
  return (
    <div className="evento">
      <div className="hora">
        23:00
      </div>
      <div className="evento_nombre">

      </div>

    </div>
  )
}
