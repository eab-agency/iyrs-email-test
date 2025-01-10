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
            <h2 className="text-fluid-lg font-normal">Lead Change in Your Community with a Public Policy Degree</h2>

            <p>A degree in public policy gives you the power to make a real difference in the world and improve how communities work. Whether you&apos;re interested in creating new solutions to address social and environmental challenges, driving change in the private sector, or conducting important research on Capitol Hill, the career possibilities are endless.</p>
            
            <p>At Roanoke, our public policy program offers a unique, hands-on approach. You&apos;ll learn from a strong curriculum that combines classroom learning with real-world experience, preparing you for a successful career path. You&apos;ll learn how to assess societal issues, analyze data, and propose powerful solutions.</p>

            <p>When you graduate, you&apos;ll understand the intricacies and impact of policymaking—and be ready to lead the way as a changemaker.</p>
            
          </div>
          <div id="lead-form" className="w-full mq-900:w-2/5 bg-primary-red p-fluid-lg">
            <h3 className="text-primary-yellow text-fluid-lg font-normal mt-0 mb-8">Ready to Learn More? We&apos;d Love to Answer Your Questions as You Prepare for College</h3>
            <FormModal url="https://roanoke-college-e360.contact-server.com/form/generate.js?id=12" id="12" />
          </div>
        </Container>

      </Container>

      <Container htmlTag="section" className="p-0 bg-[#EEEFF1]">
          <BlockQuote
            quote="Roanoke College overall is always able to prepare you for anything. I&apos;m very confident that I have a really good background going into grad school."
            author="Casey Wilson"
            image={AbbyMccusker}
            imageAlt="Abby McCusker Portrait"
            gradYear={21}
            authorTitle="B.A. in Political Science"
          />
        </Container>

        <Container htmlTag="section" className="bg-primary-red text-white scholarships">
          <Container width="narrow" className="mx-auto">
          <h2 className="text-3xl text-primary-yellow uppercase font-normal text-center scholarchips-wrapper">Through scholarships and grants, we are committed to helping you make your bachelor&apos;s degree a reality at Roanoke.</h2>
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
          <StatCard statData={{line2:'TOP 7%'}} statDescriptor="of colleges with academic credentials to offer a Phi Beta Kappa honor society chapter"  />
          <StatCard statData={{line2:'95%'}} statDescriptor="of faculty hold the highest degree possible in their field" />
          <StatCard statData={{line2:'Top 9%'}} statDescriptor="The Princeton Review&apos;s Best Colleges"  />
        </Container>
      </Container>

      <Container htmlTag="section" justifyContent="justify-around" className="mx-auto bg-white edu-info">
        <Container width="wide" className="mx-auto wrapper">
          <Container className="edu-info__content">
            <h3>Get Real-World Professional Experience</h3>
            <figure>
              <Image 
                src={AcademicsImage} 
                alt="Academics"
                width="600"
                height="250"
              />
            </figure>
            <p>As a public policy student, you can take advantage of Roanoke&apos;s Washington Semester program for a distinctive, hands-on learning opportunity. The program offers students a life-changing opportunity to live and work in the Washington D.C. Students get invaluable experience interning for Capitol Hill, national museums, think tanks, and nonprofits. Or partner with local government and organizations during your coursework—there are plenty of opportunities for professional learning and skill-building.</p>

            <p>At Roanoke, real-world learning experiences are guaranteed, including internships, research, or study abroad options at <strong>more than 300 schools on six continents.</strong></p>
          </Container>
          <Container className="edu-info__content">
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
