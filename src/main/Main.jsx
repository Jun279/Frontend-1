import { useState } from "react";
import Header from "../Components/Header";
import "./main.css";

export default function Main() {
  const [todoButton, setToDoButton] = useState(true);
  const [diaryButton, setDiaryButton] = useState(false);

  function handleDiaryActive() {
    setDiaryButton(true);
    setToDoButton(false);
  }

  function handleToDoButtonActive() {
    setToDoButton(true);
    setDiaryButton(false);
  }

  return (
    <>
      <Header />
      <div className="selectButtonBox">
        <button className={todoButton ? "selectButton buttonActive" : "selectButton"} onClick={handleToDoButtonActive}>TODO</button>
        <button className={diaryButton ? "selectButton buttonActive" : "selectButton"} onClick={handleDiaryActive}>일기쓰기</button>
      </div>
    </>
  )
}