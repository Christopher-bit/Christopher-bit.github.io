document.querySelector("#year").textContent = new Date().getFullYear();

const videos = [...document.querySelectorAll("video")];

videos.forEach((video) => {
  const showPreviewFrame = () => {
    if (video.duration > 0.15 && video.currentTime === 0) video.currentTime = 0.1;
  };

  if (video.readyState >= 1) showPreviewFrame();
  else video.addEventListener("loadedmetadata", showPreviewFrame, { once: true });

  video.addEventListener("play", () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) otherVideo.pause();
    });
  });
});
