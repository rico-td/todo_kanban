import LoadingScreen from "../utils/LoadingScreen";
import style from "./Login.module.css";
import SignInForm from "../components/SignInForm/SignInForm";
import { useState } from "react";
import gif from "../assets/img/goodfellas-henry-hill.gif";
import dislikeSound from "../assets/sound/emotional-damage-meme(1).mp3";
<assets />;

function Login() {
  const [count, setCount] = useState(37);
  const [likeText, setLikeText] = useState("Like");
  const [disLikeText, setdisLikeText] = useState("Dont Like");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    playClickSound();
  };

  const playClickSound = () => {
    const audio = new Audio(dislikeSound);
    audio.play();
  };

  return (
    <div className={style.Login}>
      <LoadingScreen>
        <SignInForm />
        <div className={style.rightSide}>
          <h3 style={{ display: "block" }}>Likes: {count}</h3>
          <button
            onClick={() => {
              setCount(count + 1);
              setLikeText("Thanks");
            }}
            onMouseUp={() => {
              setTimeout(() => {
                setLikeText("Like");
              }, 2000);
            }}
            className={style.like}
          >
            {likeText}
          </button>
          {/* <audio
            id="clickSound"
            src="../assets/vids/emotional-damage-meme(1).mp3"
          ></audio> */}

          <button
            id="buttonS"
            onClick={() => {
              setCount(count - 1);
            }}
            onMouseDown={() => {
              setdisLikeText("Nope :P");
              handleButtonClick();
              playClickSound();
            }}
            onMouseUp={() => {
              setTimeout(() => {
                setdisLikeText("Dont Like");
              }, 2000);
            }}
            className={style.dislike}
          >
            {disLikeText}
          </button>
          {buttonClicked && (
            <img
              style={{
                width: "250px",
                position: "absolute",
                transform: "translateX(-330px)",
              }}
              src={gif}
              alt="Bild"
            />
          )}
        </div>
      </LoadingScreen>
    </div>
  );
}
export default Login;
