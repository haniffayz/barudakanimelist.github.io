"use client"
import YouTube from "react-youtube"
import { XCircle } from "@phosphor-icons/react/dist/ssr"
import { useState, useEffect } from "react"
import { PlayCircle } from "@phosphor-icons/react/dist/ssr"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setOpen] = useState(true)
  const [option, setOption] = useState({
    width: "450",
    height: "300",
  })

  const handleVideoPlayer = () => {
    setOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and set the option accordingly
      if (window.innerWidth <= 768) {
        setOption({
          width: "350",
          height: "250",
        });
      } else {
        setOption({
          width: "450",
          height: "300",
        })
      }
    }

    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const Player = () => {
    return (
      <button
        className="rounded-2xl fixed bottom-16 right-5 text-colos-dark w-36 flex justify-center items-center border text-colos-accent border-colos-primary bg-colos-button hover:bg-colos-secondary hover:text-colos-primary transition-all shadow-xl p-2 gap-1 z-50"
        onClick={handleVideoPlayer}
      >
        Watch Trailer <PlayCircle size={28} />
      </button>
    )
  }

  const ButtonOpen = () => {
    return (
      <div className="fixed bottom-2 right-2 z-40">
        <button
          className="text-colos-primary float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          className="w-full Youtube z-50"
          // onError={alert("Video is Broken")}
        />
      </div>
    )
  }

  return isOpen ? <Player /> : <ButtonOpen />
}

export default VideoPlayer;
