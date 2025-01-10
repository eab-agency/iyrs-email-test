import { 
  Container, 
  PageHeader,
  PageFooter,
  Hero,
} from "skeletix";
import HelpModal from '@/common/components/HelpModal';
import PrivacyModal from "@/common/components/PrivacyModal";

import data from "@/data/globalData.json";

import heroImage from "@/assets/roanoke-hero.jpg";
import AcademicsImage from "@/assets/academics.jpg";
import StudentLifeImage from "@/assets/student-life.jpg";

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
        <h1 className="font-normal text-fluid-3xl uppercase">Thank You for Choosing <span className="text-primary-yellow">Roanoke College!</span></h1>
        </Hero>

      <Container htmlTag="section" className="intro"
      >
        <Container width="wide" className="mx-auto flex flex-col items-center gap-fluid-xl mq-900:flex-row wrapper">
          <div className="w-narrow mx-auto text-center mq-900:w-3/5">
            
            <p className="text-fluid-lg"><strong>Thank you for connecting with Roanoke College!</strong> We&apos;re excited to help you discover your path to success. Whether it&apos;s our innovative programs, supportive community, or exciting opportunities, we&apos;re here to guide you every step of the way. Your journey starts now—let&apos;s make it unforgettable!</p>
            
            <p className="text-fluid-lg">At Roanoke, we believe in unlocking your full potential while providing a vibrant campus life and world-class education. Together, we&apos;ll prepare you for an inspiring future filled with growth, purpose, and success. Welcome to a place where your story truly begins!</p>

            
          </div>
          
        </Container>

      </Container>

     
      <Container htmlTag="section" justifyContent="justify-around" className="mx-auto bg-white edu-info">
        <Container width="wide" className="mx-auto wrapper">
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Break Into the Film Industry with Hands-On Experience</h3>
            <figure>
              <Image 
                src={AcademicsImage} 
                alt="Academics"
                width="600"
                height="250"
              />
            </figure>
            <p>Our screen studies graduates have gone on to find success across  media formats, such as working a popular TV show or starring in a movie alongside Zac Efron. The secret to these students&apos; success isn&apos;t much a secret at all—at Roanoke College, <strong>hands-on learning is guaranteed.</strong></p>

            <p>Screen studies majors will learn from experienced professors who understand the film industry, and they will gain access to a range of opportunities to write, act, direct, edit, and produce in collaborative, real-world settings. These experiences will lay the foundation for a promising career no matter where their creative endeavors lead.</p>
          </Container>
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Study In the Beautiful Roanoke Valley</h3>
            <figure>
              <Image 
                src={StudentLifeImage} 
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
        <h2>Important upcoming dates and deadlines</h2>
        <p>Winter Priority Deadline: <strong>January 15</strong></p>
        <p>Regular Decision (Fall 2025): <strong>March 15</strong></p>
      </Container>      
    
        
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
