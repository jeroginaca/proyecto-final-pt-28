import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pomodoro() {
  const buttons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
  };

  const button = {
    padding: "0.7rem",
    borderRadius: "15px",
    margin: "0.5rem",
    backgroundColor: "#754942",
    border: "none",
    color: "#FBF7F1",
  };

  const text = {
    textAlign: "center",
    color: "#754942",
    textDecoration: "none",
  };
  const [timeLeft, setTimeLeft] = useState(1500); // tiempo restante en segundos
  const [isRunning, setIsRunning] = useState(false); // indica si el cronómetro está en ejecución o en pausa
  const [pomodoroDuration, setPomodoroDuration] = useState(25); // duración de los pomodoros en minutos
  const [breakDuration, setBreakDuration] = useState(5); // duración de los descansos en minutos
  const [isBreak, setIsBreak] = useState(false); // indica si estamos en un descanso o en un pomodoro

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timeoutId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (isRunning && timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? pomodoroDuration * 60 : breakDuration * 60);
    }
  }, [isRunning, timeLeft, pomodoroDuration, breakDuration, isBreak]);

  useEffect(() => {
    setTimeLeft(isBreak ? breakDuration * 60 : pomodoroDuration * 60);
  }, [pomodoroDuration, breakDuration, isBreak]);

  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setTimeLeft(pomodoroDuration * 60);
    setIsRunning(false);
  }

  function handlePomodoroDurationChange(e) {
    setPomodoroDuration(e.target.value);
  }

  function handleBreakDurationChange(e) {
    setBreakDuration(e.target.value);
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{ backgroundColor: "#EDDCC3" }}>
      <h1 style={text}>Método Pomodoro</h1>
      <div>
        <p style={text}>Tiempo restante:</p>
        <p id="timer" style={text}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
      <div style={buttons}>
        <button style={button} onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
        <button style={button} onClick={resetTimer}>
          Reiniciar
        </button>
      </div>
      <hr />
      <div style={buttons}>
        <p style={text}>Duración de los pomodoros:</p>
        <input
          style={button}
          type="number"
          value={pomodoroDuration}
          onChange={handlePomodoroDurationChange}
        />

        <p style={text}>Duración de los descansos:</p>
        <input
          style={button}
          type="number"
          value={breakDuration}
          onChange={handleBreakDurationChange}
        />
      </div>
      <div style={text}>
        <p>Estamos en un:</p>
        <p id="break-or-pomodoro">{isBreak ? "Descanso" : "Pomodoro"}</p>
      </div>
      <Link style={text} to={"/"}>
        <p>Volver</p>
      </Link>
    </div>
  );
}

export default Pomodoro;
