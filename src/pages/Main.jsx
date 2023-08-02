import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCalendar2HeartFill, BsClipboardCheck } from 'react-icons/bs';

function Main() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col my-10 justify-center items-center max-w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <span>반갑습니다.</span>
        {/* <img src="../../images/hi.gif" alt="Animated GIF" /> */}
        <iframe
          src="https://giphy.com/embed/3o6ZtpxSZbQRRnwCKQ"
          width="480"
          height="321"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/studiosoriginals-reaction-gifs-3o6ZtpxSZbQRRnwCKQ"></a>
        </p>
        <span>오늘 하루 어떠신가요? </span>
        <div className="flex flex-col items-center justify-center">
          <button>
            <BsFillCalendar2HeartFill />
          </button>
          <span>오늘의 할일을 적으러 가볼까요?</span>
          <button
            onClick={() => {
              navigate(`/todo`);
            }}
            className="cursor-pointer"
          >
            <BsClipboardCheck />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Main;
