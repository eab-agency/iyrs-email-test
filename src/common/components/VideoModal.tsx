import React from "react";

interface VideoModalProps {
    videoUrl: string;
}

const VideoModal = ({ videoUrl }: VideoModalProps) => {
    return (
        <div className="video-container max-w-narrow">
            <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default VideoModal;
