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
// import { PageHeader } from "@/common/sections/PageHeader";

import data from "@/data/globalData.json";

import AnnaGrace from "@/assets/anna-grace.png";
import PrivacyModal from "@/common/components/PrivacyModal";

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

      <PageHeader logoUrl={logoHeader} logoAlt={logoAlt} className="justify-between align-middle">
        <nav className="w-fit">
          <ul className="flex gap-fluid-2xl list-none">
            <li><Link href="#">Home</Link></li>
            <li>About</li>
            <li>Services</li>
            <li>Resources</li>
          </ul>
        </nav>
      </PageHeader>

      <Hero
        title="Roanoke College"
        content="Roanoke College is a community of passionate students, faculty, staff, and alumni dedicated to the pursuit of knowledge and the development of leadership skills."
        imageUrl={AnnaGrace}
        className="h-[50rem]"
        // cta={<Button type="link" href="#about-roanoke" label="Learn More" />}
        // imageUrl="https://source.unsplash.com/1600x900/?college"
      />

{/* classname?: string;
    title?: React.ReactNode;
    content?: string;
    imageUrl?: string;
    imageAlt?: string; */}

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
          <Button type="link" href="https://eab.com" newTab label="hello" className="bg-secondary-blue-500 w-fit primary-button text-fluid-xl my-4">Click me</Button>
        </Container>

        <StatCard
              statData={{line1: 'Around', line2: '180'}}
              statDescriptor="Quality academic options"
              className="bg-slate-800 text-white rounded-3xl"
            />

        <BlockQuote
          quote="Roanoke College is a community of passionate students, faculty, staff, and alumni dedicated to the pursuit of knowledge and the development of leadership skills."
          author="Roanoke College"
          gradYear="2021"
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
