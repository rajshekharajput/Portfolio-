import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
    console.log('dev')
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          {/* <img src='assets/.png' alt=''/> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hey! hope you doing fine</h2>
          <h1>Rajshekhar this side</h1>
          <h3>i am a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
