import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";

function Giphy() {
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
  const gridRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async (offset) => {
    return gf.search(value, { offset, limit: 10 });
  };
  useEffect(() => {
    // fetch gif initially based on search term
    const fetchInitialGifs = async () => {
      setisLoading(true);
      setError(null);
      try {
        const initialGif = await fetchGifs(0);
        setGifs([initialGif.data]);
      } catch (err) {
        setError(err);
      } finally {
        setisLoading(false);
      }
    };
    fetchInitialGifs();
  }, []);
  return (
    <div ref={gridRef} className="w-full mt-3">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search GIF"
        className="border border-stroke rounded-md w-full p-2 mb-2 outline-none dark:border-strokedark"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isLoading && <p>Loading GIFs...</p>}
      {error && <p className="text-red">Error: {error}</p>}
      <div className="h-48 overflow-auto no-scrollbar ">
        <Grid
          width={gridRef.current?.offsetWidth}
          columns={8}
          gutter={6}
          fetchGifs={fetchGifs}
          key={value}
          onGifClick={() => {}}
          data={gifs}
        />
      </div>
    </div>
  );
}

export default Giphy;
