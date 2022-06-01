import { useEffect, useState } from "react";

export default  function Googletimer(){
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hou, setHou] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        if (min === 59) {
          setMin(0);
          setHou(hou + 1);
        }
        setSec(0);
      }
    }, 10);
    return () => clearInterval(timer);
  });

  const Restart = () => {
    setHou(0);
    setSec(0);
    setMin(0);
  };
  const Stop = () => {
    clearInterval(timer);
  };
  const startInt = () => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        if (min === 59) {
          setMin(0);
          setHou(hou + 1);
        }
        setSec(0);
      }
    }, 10);
    return () => clearInterval(timer);
  };

  return (
    <div>
      <h1>Stop-Watch</h1>
      <p>min : sec : millSec</p>
      <h3>
        {hou < 10 ? "0" + hou : hou}:{min < 10 ? "0" + min : min}:
        {sec < 10 ? "0" + sec : sec}
      </h3>
      <button onClick={Restart}>Restart</button>
      <button onClick={Stop}>Stop</button>
      <button
        onClick={() => {
          startInt();
        }}
      >
        start
      </button>
    </div>
  );
};