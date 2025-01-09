import Link from "next/link";
import { 
  Button, 
  Container, 
  StatCard, 
  BlockQuote, 
  ImageCard, 
  ModalButton,
  StickyCta,
  PageHeader,
  PageFooter,
  Hero,
} from "skeletix";
import VideoModal from "@/common/components/VideoModal";
import HelpModal from '@/common/components/HelpModal';
import PrivacyModal from "@/common/components/PrivacyModal";

import data from "@/data/globalData.json";

import heroImage from "@/assets/roanoke-hero.jpg";
import AnnaGrace from "@/assets/anna-grace.png";

interface GlobalData {
  partner: {
      branding: {
          logoHeader: string;
          logoAlt: string;
      };   
  };
}

const {
  branding: {
      logoHeader,
      logoAlt
  },
  // name,
  // phone,
  // address: {
  //     street,
  //     city,
  //     state,
  //     zip
  // },
} = (data as GlobalData).partner;

export default function Home() {
  return (
    <main className="bg-gray-200">

      <PageHeader logoUrl={logoHeader} logoAlt={logoAlt} className="bg-white" logoWidth="w-fluid-6xl" logoHeight="h-fluid-2xl" />

      <Hero
        title="Roanoke College"
        content="Roanoke College is a community of passionate students, faculty, staff, and alumni dedicated to the pursuit of knowledge and the development of leadership skills."
        imageUrl={heroImage}
        className="bg-primary-red py-fluid-5xl"
        // cta={<Button type="link" href="#about-roanoke" label="Learn More" />}
      />

      <div className="mx-auto my-fluid-2xl highlight">
        hello world
      </div>

      <Container 
      htmlTag="section" 
      width="full"
      alignItems="items-center"
      justifyContent="justify-center"
      className="flex mx-auto">
        
        <Container id="about-roanoke" className="card">
          <h2>About Roanoke</h2>
          <p>this is the form</p>
          <code>roanoke-college-e360.contact-server.com/form/generate.js?id=12</code>
          <Button type="link" href="https://eab.com" newTab className="bg-secondary-blue-500 w-fit primary-button text-fluid-xl my-4">Click me</Button>
        </Container>

        <StatCard
              statData={{line1: 'Around', line2: '180'}}
              statDescriptor="Quality academic options"
              className="bg-slate-800 text-white rounded-3xl"
            />

        <BlockQuote
          quote="Roanoke College is a community of passionate students, faculty, staff, and alumni dedicated to the pursuit of knowledge and the development of leadership skills."
          author="Roanoke College"
          gradYear={2021}
          authorTitle="President"
        />
      </Container>

      <Container htmlTag="section" layout="row" alignItems="items-center" justifyContent="justify-around" width="wide" className="mx-auto gap-4">
          <ImageCard image={AnnaGrace} title="The super title" content="this is the content for this image card." altText="the image">
          <ModalButton content={<VideoModal videoUrl="https://www.youtube.com/embed/2b_YGbfT4O4?si=Xq54a9qXREIm2CIE" />} className="video-button">Play me</ModalButton>
          </ImageCard>
          <ImageCard image={AnnaGrace} title="The super title" content="this is the content for this image card." altText="the image">asdf
          </ImageCard>
      </Container>

      
      <StickyCta formId='about-roanoke'>
          Take the First Step! Connect with <strong>Roanoke College</strong>
      </StickyCta>
        
      <PageFooter helpContent={<HelpModal />} privacyContent={<PrivacyModal/>} />
        
    </main>
  );
}
