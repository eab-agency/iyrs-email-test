import { Container, ModalButton } from "skeletix";
import VideoModal from "@/common/components/VideoModal";
import Image from "next/image";
import VideoThumbnail from "@/assets/roanoke-video-thumbnail.jpg";

export default function LetsGoSection() {
  return (
    <Container htmlTag="section" className="bg-white lets-go">
      <Container width="wide" className="mx-auto wrapper w-full ">
        <div className="flex-col lets-go-content">
          <p>Roanoke is a nationally ranked, liberal arts college.</p>
          <p>Check out one of <strong>the best colleges in Virginia!</strong></p>
        </div>
        <ModalButton content={<VideoModal videoUrl="https://www.youtube.com/embed/QNKU2CZeDJQ?si=lLqWcwyzzBCg0nrJ" />} className="lets-go-video">
          <figure className="video-thumbnail">
            <Image  
              src={VideoThumbnail}
              alt="Play Video"
              fill
              sizes="(min-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </figure>
        </ModalButton>
      </Container>
    </Container>
  );
}
