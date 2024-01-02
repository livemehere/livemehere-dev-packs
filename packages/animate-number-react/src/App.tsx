import { AnimateNumber } from "./lib";
import { useState } from "react";

type Item = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export default function App() {
  const [slideAnimate, setSlideAnimate] = useState(true);
  const [v, setV] = useState<string>("10");
  const [newV, setNewV] = useState(+v);

  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        margin: "20px",
      }}
    >
      <div>
        <input type="text" value={v} onChange={(e) => setV(e.target.value)} />
        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          <button
            onClick={() => {
              setNewV(+v);
            }}
          >
            update
          </button>
          <button onClick={() => setSlideAnimate(!slideAnimate)}>
            slideAnimate {slideAnimate ? "on" : "off"}
          </button>
        </div>
      </div>
      <AnimateNumber
        duration={1000}
        slideAnimation={false}
        animation={true}
        easing={"easeOut"}
        decimal={0}
        startVal={0}
      >
        {newV}
      </AnimateNumber>
    </div>
  );
}
