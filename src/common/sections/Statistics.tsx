import React from "react";
import { Container, Wrapper } from "@/common/components/Container";
import { StatCard } from "@/common/blocks/StatCard";

// interface StatisticsData {
//   preStatOne?: string;
//   statOne: string;
//   statOneDescriptor: string;
//   preStatTwo?: string;
//   statTwo: string;
//   statTwoDescriptor: string;
//   preStatThree?: string;
//   statThree: string;
//   statThreeDescriptor: string;
// }

export const Statistics = () => {
  return (
    <Container htmlTag="section" className="stats py-fluid-md" >
        <Wrapper layout="row" justifyContent="justify-center" width="wide" className="mx-auto md:flex-row text-white">
            <StatCard
              statData={{line1: '', line2: '180'}}
              statDescriptor="Quality academic options"
              className=""
            />
            <StatCard
              statData={{line1:'', line2: '15:1'}}
              statDescriptor="Student-to-Faculty Ratio"
              className=""
            />
            <StatCard
              statData={{line1:'', line2: '200+'}}
              statDescriptor="Student Organizations"
              className=""
            />
        </Wrapper>
      </Container>
  );
};
