import React, { useEffect, useState } from "react";

const Thumb = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    const key = "AIzaSyCtndV2Y6xntlF3sApHr8hJUEa4VeCukEA";
    const playListId = "PLCaXxPHHJ1X7ZZm4GpAVXZL12S6nL-0IO";
    const URL = "https://www.googleapis.com/youtube/v3/playlistItems";
    const options = {
      part: "snippet",
      key: key,
      maxResults: 20,
      playlistId: playListId,
    };

    const load = async () => {
      const response = await fetch(URL + "?" + new URLSearchParams(options));
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setId(data.items[0].snippet.resourceId.videoId);
      } else {
        console.error("Failed to load data:", response.status);
      }
    };
    load();
  }, []);

  const handleClick = (event) => {
    if (event.target.tagName === "ARTICLE") {
      setId(event.target.dataset.key);
    }
  };

  return (
    <div className="container2 ">
      <section id="video" className="glow">
        <iframe  
          width="520"
          height="230"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </section>
      <main onClick={handleClick}>
        {data.items &&
          data.items.map((item, i) => {
            const thumb = item.snippet.thumbnails && item.snippet.thumbnails.medium ? item.snippet.thumbnails.medium.url : null;

            // const thumb = item.snippet.thumbnails.medium.url;
            const title = item.snippet.title;
            const description = item.snippet.description.substring(0, 100);
            const vid = item.snippet.resourceId.videoId;
            return (
              <article key={i} data-key={vid}>
                <img src={thumb} alt="" className="thumb" />
                
              </article>
            );
          })}
      </main>
    </div>
  );
};

export default Thumb;
