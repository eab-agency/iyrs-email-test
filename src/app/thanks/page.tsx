import { Container, PageHeader, PageFooter, Hero, Button } from "skeletix";
import HelpModal from "@/common/components/HelpModal";
import PrivacyModal from "@/common/components/PrivacyModal";

import data from "@/data/globalData.json";

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
  branding: { logoHeader, logoAlt, logoFooter },
} = (data as GlobalData).partner;

export default function Home() {
  return (
    <main className="bg-gray-200">
      <PageHeader
        logoUrl={logoHeader}
        logoAlt={logoAlt}
        className="bg-white"
        logoWidth="w-fluid-6xl"
        logoHeight="h-fluid-2xl"
      />

      <h1 className="font-normal text-fluid-3xl uppercase">
        Thank you for your interest in{" "}
        <span className="text-primary-yellow">IYRS!</span>
      </h1>

      <Container htmlTag="section" className="intro">
        <Container
          width="wide"
          className="mx-auto flex flex-col items-center gap-fluid-xl mq-900:flex-row wrapper"
        >
          <div className="w-narrow mx-auto text-center mq-900:w-3/5">
            <p className="text-fluid-lg">
              <strong>Thank you for connecting with IRYS!</strong> We&apos;re
              excited to help you discover your path to success. Whether
              it&apos;s our innovative programs, supportive community, or
              exciting opportunities, we&apos;re here to guide you every step of
              the way. Your journey starts now—let&apos;s make it unforgettable!
            </p>

            <p className="text-fluid-lg">
              At IRYS, we believe in unlocking your full potential while
              providing a vibrant campus life and world-class education.
              Together, we&apos;ll prepare you for an inspiring future filled
              with growth, purpose, and success. Welcome to a place where your
              story truly begins!
            </p>
          </div>
        </Container>
      </Container>

      <Container
        htmlTag="section"
        justifyContent="justify-around"
        className="mx-auto bg-white edu-info"
      >
        <Container width="wide" className="mx-auto wrapper">
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>A World of Opportunities</h3>

            <p>
              Explore your interests with more than 100 areas of study{" "}
              <strong>
                including business, computer science, public policy,
                neuroscience, and screen studies.
              </strong>{" "}
              Our liberal arts focus means you&apos;ll be able to discover your
              path to success, even if you&apos;re undecided on your major right
              now.
            </p>

            <p>
              Internships, research, creative projects, service learning, and
              study abroad will{" "}
              <strong>
                help you build your personal resume with real-world experience
              </strong>{" "}
              that sets you apart.
            </p>
          </Container>
          <Container className="edu-info__content mq-900:w-1/2">
            <h3>Study On the Water</h3>

            <p>
              IRYS students don&apos;t have to travel the world to access
              world-class adventures or meaningful connections. Our region is
              ecologically unique and rich with outdoor activities that are
              second to none.
            </p>

            <p>
              Plus, you won&apos;t find a view that compares to this. Situated
              along the scenic waters.
            </p>
          </Container>
        </Container>
      </Container>

      <Container className="bg-white px-fluid-lg py-fluid-2xl">
        <h2 className="text-fluid-xl text-center uppercase font-normal">
          Discover all that IYRS has to offer!
        </h2>
      </Container>

      <Container htmlTag="section" className="bg-primary-red text-white dates">
        <h2>Important upcoming dates and deadlines</h2>
        <p>
          Regular Decision (Fall 2025): <strong>March 15</strong>
        </p>
      </Container>

      <PageFooter
        branding={{
          logoFooter: logoFooter,
          logoAlt: logoAlt,
        }}
        helpContent={<HelpModal />}
        privacyContent={<PrivacyModal />}
        className="page-footer"
      />
    </main>
  );
}
