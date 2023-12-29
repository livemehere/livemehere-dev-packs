import { ViewPortRenderList } from "./lib";
import { useEffect, useState } from "react";

type Item = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export default function App() {
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => {
        setList(res);
      });
  }, []);
  return (
    <div>
      <h1
        style={{
          height: `20px`,
        }}
      >
        App
      </h1>
      <header
        style={{
          height: `100px`,
        }}
      >
        <h2>header</h2>
      </header>
      <ViewPortRenderList
        render={(index) => (
          <div>
            <h5>{list[index].title}</h5>
            <img src={list[index].thumbnailUrl} alt="" />
          </div>
        )}
        totalCount={list.length}
        rowHeight={193}
        startMargin={120}
      />
    </div>
  );
}
