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
      <h1>App</h1>
      {/*{list.map((item) => (*/}
      {/*  <div key={item.id}>*/}
      {/*    <h5>{item.title}</h5>*/}
      {/*    <img src={item.thumbnailUrl} alt="" />*/}
      {/*  </div>*/}
      {/*))}*/}
      <ViewPortRenderList
        render={(index) => (
          <div>
            <h5>{list[index].title}</h5>
            <img src={list[index].thumbnailUrl} alt="" />
          </div>
        )}
        totalCount={list.length}
        rowHeight={193}
      />
    </div>
  );
}
