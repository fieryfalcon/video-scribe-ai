import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isYouTube, setIsYouTube] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      const currentUrl = activeTab.url;

      // Check if the URL is from YouTube
      const isYouTubeSite = currentUrl.includes("youtube.com");
      setIsYouTube(isYouTubeSite);

      // Check if the URL is a YouTube video (i.e., contains "/watch")
      const isVideo = currentUrl.includes("/watch");
      setIsVideoPlaying(isYouTubeSite && isVideo);
    });
  }, []);

  return (
    <div>
      {isYouTube ? (
        <div>
          {isVideoPlaying ? (
            <button onClick={() => alert("Extracting captions...")}>
              Extract Captions
            </button>
          ) : (
            <p>No video is currently playing on YouTube.</p>
          )}
        </div>
      ) : (
        <p>You&#39;re not on YouTube.</p>
      )}
    </div>
  );
};

export default Popup;
