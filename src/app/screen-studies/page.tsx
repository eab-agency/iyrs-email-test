import { 
  Container, 
  StatCard, 
  BlockQuote, 
  ModalButton,
  StickyCta,
  PageHeader,
  PageFooter,
  Hero,
} from "skeletix";
import VideoModal from "@/common/components/VideoModal";
import HelpModal from '@/common/components/HelpModal';
import PrivacyModal from "@/common/components/PrivacyModal";
import { FormModal } from "@/common/components/FormModal";

import data from "@/data/globalData.json";

import heroImage from "@/assets/roanoke-hero.jpg";
import testimonialImage from "@/assets/omari-chancellor.jpg";
import VideoThumbnail from "@/assets/roanoke-video-thumbnail.jpg";
import screenStudiesImage from "@/assets/screen-studies.jpg";
import roanokeCampusImage from "@/assets/roanoke-campus.jpg";

import Image from "next/image";


interface GlobalData {
  partner: {
      branding: {
          logoHeader: string;
          logoAlt: string;
          logoFooter: string;
      };   
  };
}

const {
  branding: {
      logoHeader,
      logoAlt,
      logoFooter,
  },
} = (data as GlobalData).partner;

export default function Home() {
  
  return (
    <main className="bg-gray-200">

      <PageHeader logoUrl={logoHeader} logoAlt={logoAlt} className="bg-white" logoWidth="w-fluid-6xl" logoHeight="h-fluid-2xl" />

      <Hero
        imageUrl={heroImage}
        className="bg-primary-red py-fluid-2xl"
      >
        <h1 className="font-normal text-fluid-3xl">ROANOKE COLLEGE IS WHERE YOUR POTENTIAL MEETS YOUR PATH TO <span className="text-primary-yellow">SUCCESS</span></h1>
        </Hero>

      <Container htmlTag="section" className="intro"
      >
        <Container width="wide" className="mx-auto flex flex-col items-center gap-fluid-xl mq-900:flex-row wrapper">
          <div className="w-full mq-900:w-3/5">
            <h2 className="text-fluid-lg font-normal">Develop Your Creative Voice in Screen Studies at Roanoke</h2>

            <p>Make your vision a reality. Our screen studies major will prepare you for a variety of career paths in the film and content creation industries, including cinema, arts, education, and marketing.</p>
            
            <p>What will you learn as a screen studies major? Our screen studies program is focused not only on filmmaking but also on digital production and broad media foundations. You’ll be equipped with the skill set to succeed across various storytelling mediums, and you’ll learn from knowledgeable industry professionals who will mentor you throughout your studies.</p>

            <p>With a screen studies degree from Roanoke, you’ll gain incomparable professional experience and graduate ready to show the world your distinct, creative vision.</p>
            
          </div>
          <div id="lead-form" className="w-full mq-900:w-2/5 bg-primary-red p-fluid-lg">
            <h3 className="text-primary-yellow text-fluid-lg font-normal mt-0 mb-8">Ready to Learn More? We&apos;d Love to Answer Your Questions as You Prepare for College</h3>
            <FormModal url="https://roanoke-college-e360.contact-server.com/form/generate.js?id=12" id="12" />
          </div>
        </Container>

      </Container>

      <Container htmlTag="section" className="p-0 bg-[#EEEFF1]">
          <BlockQuote
            quote="I felt super supported by my professors and by the community at Roanoke, and I felt very confident and able to try and fail at things, which I think is a comfort I haven’t had in anything I’ve done since."
            author="Omari Chancellor"
            image={testimonialImage}
            imageAlt="Omari Chancellor Portrait"
            gradYear={17}
            // authorTitle="B.A. in Political Science"
          />
        </Container>

        <Container htmlTag="section" className="bg-primary-red text-white scholarships">
          <Container width="narrow" className="mx-auto scholarchips-wrapper">
          <h2 className="text-3xl text-primary-yellow uppercase font-normal text-center">Through scholarships and grants, we are committed to helping you make your bachelor&apos;s degree a reality at Roanoke.</h2>
          <p className="text-center">Our Financial Aid Office can help you tap into opportunities such as:</p>
          <ul>
            <li><strong>The Virginia Tuition Assistance Grant Program</strong> for Virginia residents who attend accredited private, nonprofit colleges in Virginia.</li>
            <li><strong>Competitive Scholarships</strong> in areas such as art, music, and theater and our <strong>Fellows Program</strong> focused on research, IT, sustainability, leadership, and more.</li>
            <li><strong>Merit-Based Aid</strong> awarded on academic performance at the time of admission—with no separate application needed!</li>
          </ul>
          </Container>
        </Container>
        
      <Container htmlTag="section" width="full" className="bg-secondary-beige stats">
        <h2 className="title"><span>REASONS TO CHOOSE ROANOKE</span></h2>
        <Container width="wide" className="mx-auto w-full gap-4 z-10 stats-list">
          <StatCard statData={{line2:'228'}} statDescriptor="Members in the Roanoke College Film Club"  />
          <StatCard statData={{line2:'95%'}} statDescriptor="of faculty hold the highest degree possible in their field" />
          <StatCard statData={{line2:'Top 9%'}} statDescriptor="The Princeton Review&apos;s Best Colleges"  />
        </Container>
      </Container>

      <Container htmlTag="section" justifyContent="justify-around" className="mx-auto bg-white edu-info">
        <Container width="wide" className="mx-auto wrapper">
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Break Into the Film Industry with Hands-On Experience</h3>
            <figure>
              <Image 
                src={screenStudiesImage} 
                alt="Academics"
                width="600"
                height="250"
              />
            </figure>
            <p>Our screen studies graduates have gone on to find success across  media formats, such as working a popular TV show or starring in a movie alongside Zac Efron. The secret to these students’ success isn’t much a secret at all—at Roanoke College, <strong>hands-on learning is guaranteed.</strong></p>

            <p>Screen studies majors will learn from experienced professors who understand the film industry, and they will gain access to a range of opportunities to write, act, direct, edit, and produce in collaborative, real-world settings. These experiences will lay the foundation for a promising career no matter where their creative endeavors lead.</p>
          </Container>
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Study In the Beautiful Roanoke Valley</h3>
            <figure>
              <Image 
                src={roanokeCampusImage} 
                alt="Student Life"
                width="600"
                height="250"
              />
            </figure>
            <p>Roanoke College students don&apos;t have to travel the world to access world-class adventures or meaningful connections. Our region is ecologically unique and rich with outdoor activities that are second to none. The Roanoke Valley community is diverse and welcoming.</p>

            <p>Plus, you won&apos;t find a view that compares to this. Situated along the scenic Blue Ridge Mountains, Roanoke College is <strong>just 10 miles from the Blue Ridge Parkway and the Appalachian Trail,</strong> and we were ranked among the <strong>Top 20 Most Beautiful Campuses</strong> in 2012.</p>
          </Container>
          </Container>
      </Container>

      <Container htmlTag="section" className="bg-primary-red text-white dates">
        <Container width="wide" className="wrapper mx-auto">
          <h2>Important upcoming dates and deadlines</h2>
          <p>Regular Decision (Fall 2025): <strong>March 15</strong></p>
        </Container>
      </Container>

      <Container htmlTag="section" className="bg-white lets-go">
        <Container width="wide" className="mx-auto wrapper w-full">
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
                />
            </figure>
          </ModalButton>
        </Container>
      </Container>

      
      <StickyCta formId='lead-form'>
          Take the First Step! Connect with <strong>Roanoke College</strong>
      </StickyCta>
        
      <PageFooter 
        branding={{
          logoFooter: logoFooter,
          logoAlt: logoAlt,
        }}
        helpContent={<HelpModal />} 
        privacyContent={<PrivacyModal/>} 
        className="page-footer"
      />
        
    </main>
  );
}
