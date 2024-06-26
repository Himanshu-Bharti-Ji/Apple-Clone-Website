import React, { useEffect, useRef, useState } from 'react'
import { highlightsSlides } from "../constants"
import gsap from 'gsap';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';

const VideoCarousel = () => {

    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    })

    const [loadedData, setLoadedData] = useState([])

    const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

    useGSAP(() => {
        gsap.to("#video", {
            scrollTrigger: {
                trigger: "#video",
                toggleActions: "restart none none none"
            },
            onComplete: () => {
                setVideo((pervVideo) => ({
                    ...pervVideo,
                    startPlay: true,
                    isPlaying: true
                }))
            }
        })
    }, [isEnd, videoId])

    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData])

    const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e])

    useEffect(() => {
        const currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            // animate the progress bar below the video

            // playing video
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {

                },

                onComplete: () => {

                }
            })
        }
    }, [videoId, startPlay])

    const handleProcess = (type, i) => {
        switch (type) {
            case "video-end":
                setVideo((pervVideo) => ({ ...pervVideo, isEnd: true, videoId: i + 1 }))
                break;
            case "video-last":
                setVideo((pervVideo) => ({ ...pervVideo, isLastVideo: true }))
                break;
            case "video-reset":
                setVideo((pervVideo) => ({ ...pervVideo, isLastVideo: false, videoId: 0 }))
                break;
            case "play":
                setVideo((pervVideo) => ({ ...pervVideo, isPlaying: !pervVideo.isPlaying }))
                break;
            default:
                return video;
        }
    }

    return (
        <>
            <div className='flex items-center'>
                {highlightsSlides.map((list, i) => (
                    <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                        <div className='video-carousel_container'>
                            <div className="bg-black w-full h-full flex-center rounded-3xl overflow-hidden">
                                <video
                                    id='video'
                                    playsInline={true}
                                    preload='auto'
                                    muted
                                    ref={(el) => (videoRef.current[i] = el)}
                                    onPlay={() => {
                                        setVideo((pervVideo) => ({
                                            ...pervVideo, isPlaying: true
                                        }))
                                    }}
                                    onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className='absolute top-12 left-[5%] z-10'>
                                {list.textLists.map((text) => (
                                    <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='relative flex-center mt-10'>
                <div className="bg-gray-300 flex-center py-5 px-7 backdrop-blur rounded-full">
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            ref={(el) => (videoDivRef.current[i] = el)}
                            className='mx-2 w-3 h-3 bg-gray-200 rounded-full cursor-pointer relative'
                        >
                            <span
                                className='absolute h-full w-full rounded-full'
                                ref={(el) => (videoSpanRef.current[i] = el)}
                            />
                        </span>
                    ))}
                </div>
                <button className='control-btn'>
                    <img
                        src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
                        onClick={isLastVideo
                            ? () => handleProcess("video-reset")
                            : !isPlaying
                                ? () => handleProcess("play")
                                : () => handleProcess("pause")
                        }
                    />
                </button>
            </div>
        </>
    )
}

export default VideoCarousel
