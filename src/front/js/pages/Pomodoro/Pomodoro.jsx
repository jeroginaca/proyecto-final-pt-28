import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarVolver from "../../component/2nd Navbar/NavbarVolver.jsx";
import BottomBar from "../../component/Bottom Bar/BottomBar.jsx";
import "./pomodoro.css";

const Pomodoro = () => {
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
    <>
      <NavbarVolver />
      <div className="pomodoro-background">
        <div className="pomodoro-container">
          <div className="background">
            <h1 className="pomodoro-title">Zona de Estudio</h1>

            <div className="timer-container">
              <div className="tiempo-restante">
                <p className="tiempo-restante-text">Tiempo restante:</p>
                <p id="timer" className="timer">
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </p>
              </div>
              <div className="buttons-iniciar-reiniciar">
                <button
                  className="button"
                  onClick={isRunning ? pauseTimer : startTimer}
                >
                  {isRunning ? "Pausar" : "Iniciar"}
                </button>
                <button className="button" onClick={resetTimer}>
                  Reiniciar
                </button>
              </div>
            </div>

            <div className="duracion-container">
              <div className="duracion-buttons">
                <p className="text">
                  Duración <br />
                  de los pomodoros:
                </p>
                <input
                  className="duracion-button"
                  type="number"
                  value={pomodoroDuration}
                  onChange={handlePomodoroDurationChange}
                  min="1"
                  max="60"
                />
              </div>

              <div className="duracion-buttons">
                <p className="text">
                  Duración <br />
                  de los descansos:
                </p>
                <input
                  className="duracion-button"
                  type="number"
                  value={breakDuration}
                  onChange={handleBreakDurationChange}
                  min="1"
                  max="60"
                />
              </div>
            </div>

            <div className="text">
              <p className="estamos-en">Estamos en un:</p>
              <p className="pomodoro" id="break-or-pomodoro">
                {isBreak ? "Descanso" : "Pomodoro"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Pomodoro;
