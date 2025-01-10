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
import AbbyMccusker from "@/assets/abby-mccusker.jpg";
import AcademicsImage from "@/assets/academics.jpg";
import StudentLifeImage from "@/assets/student-life.jpg";
import VideoThumbnail from "@/assets/roanoke-video-thumbnail.jpg";

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
            <h2 className="text-fluid-lg font-normal">Looking At Colleges And Universities in Virginia? See What Roanoke Offers:</h2>
            
            <ul>
              <li>An innovative curriculum that sharpens your critical thinking, teaches scientific methods and broadens your worldview while <strong>preparing you to help tackle today&apos;s global challenges</strong></li>
              <li>Guaranteed real-world learning experiences, <strong>including internships, research, or study abroad options</strong> at more than 300 schools on six continents</li>
              <li>Consistent <strong>rankings as one of the top colleges and liberal arts programs in the nation</strong> by U.S. News & World Report, The Princeton Review and Forbes</li>
            </ul>

            <p>Roanoke College is much more than a place to start a career—it&apos;s a place to learn where you fit in the world and design a life with meaning and purpose. Join us!</p>
            
          </div>
          <div id="lead-form" className="w-full mq-900:w-2/5 bg-primary-red p-fluid-lg">
            <h3 className="text-primary-yellow text-fluid-lg font-normal mt-0 mb-8">Ready to Learn More? We&apos;d Love to Answer Your Questions as You Prepare for College</h3>
            <FormModal url="https://roanoke-college-e360.contact-server.com/form/generate.js?id=12" id="12" />
          </div>
        </Container>

      </Container>

      <Container htmlTag="section" className="p-0 bg-[#EEEFF1]">
          <BlockQuote
            quote="I wanted a small school where I could have personal relationships with and extra support from my professors. Here at Roanoke, it makes all of those connections effortless."
            author="Abby McCusker"
            image={AbbyMccusker}
            imageAlt="Abby McCusker Portrait"
          />
        </Container>

        <Container htmlTag="section" className="bg-primary-red text-white scholarships">
          <Container width="narrow" className="mx-auto scholarchips-wrapper">
          <h2 className="text-3xl text-primary-yellow uppercase font-normal text-center">Through scholarships and grants, we are committed to helping you make your bachelor’s degree a reality at Roanoke.</h2>
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
          <StatCard statData={{line2:'18'}} statDescriptor="average class size"  />
          <StatCard statData={{line2:'100+'}} statDescriptor="areas of study" />
          <StatCard statData={{line2:'140+'}} statDescriptor="student clubs, teams, and organizations"  />
        </Container>
      </Container>

      <Container htmlTag="section" justifyContent="justify-around" className="mx-auto bg-white edu-info">
        <Container width="wide" className="mx-auto wrapper">
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Academics</h3>
            <figure>
              <Image 
                src={AcademicsImage} 
                alt="Academics"
                width="600"
                height="250"
              />
            </figure>
            <p>Explore your interests with more than 100 areas of study <strong>including business, computer science, public policy, neuroscience, and screen studies.</strong> Our liberal arts focus means you&apos;ll be able to discover your path to success, even if you&apos;re undecided on your major right now.</p>

            <p>Internships, research, creative projects, service learning, and study abroad will <strong>help you build your personal resume with real-world experience</strong> that sets you apart.</p>
          </Container>
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Student Life</h3>
            <figure>
              <Image 
                src={StudentLifeImage} 
                alt="Student Life"
                width="600"
                height="250"
              />
            </figure>
            <p><strong>Getting involved at Roanoke is easy—there are so many things to do!</strong></p>

            <p>We offer a world-class fitness center and an Outdoor Adventures program to help you stay active. Plus, there are 23 NCAA Division III teams at Roanoke and <strong>the Blue Ridge Mountains are our backyard.</strong></p>

            <p>There are also more than 140 clubs and organizations in everything from anime to bass fishing to college entrepreneurs. Whatever you&apos;re passionate about, there&apos;s a community here for you!</p>
          </Container>
          </Container>
      </Container>

      <Container htmlTag="section" className="bg-primary-red text-white dates">
        <Container width="wide" className="wrapper mx-auto">
          <h2>Important upcoming dates and deadlines</h2>
          <p>Winter Priority Deadline: <strong>January 15</strong></p>
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
