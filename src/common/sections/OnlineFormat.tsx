import React from "react";
import Image from "next/image";

interface OnlineFormatDetail {
  program: string;
}

export const OnlineFormat = ({ program }: OnlineFormatDetail) => {
  return (
    <section className="online-format">
      <div className="wrapper centered cols space-between">
        <div className="col-5">
          <figure>
            <Image
              src="/images/etown-our-online-format.jpg"
              alt="placeholder"
              width="800"
              height="800"
            />
          </figure>
        </div>
        <div className="col-6-5">
          <h2 className="display-heading">
            <span>Our Online Format</span>
          </h2>
          <p>
            Our online master&rsquo;s {program} is offered in an asynchronous
            format.{" "}
            <strong>
              Our flexible, accelerated eight-week courses are designed for
              working adults like you.
            </strong>{" "}
            The program&rsquo;s unique format enables you to engage with highly
            experienced executives through the Executives-in-Residence program,
            enhancing learning and professional connections.
          </p>
          <h3 className="text-highlighted">
            We have <strong>two tracks to completion:</strong>
          </h3>
          <p>
            <strong>The full-time, one-year track.</strong> Candidates who choose
            this track benefit from a discounted tuition rate for committing to
            this full-time program.
          </p>
          <p>
            <strong>The accelerated, part-time track.</strong> Candidates in
            this track usually complete the program in two years but have the{" "}
            <strong>flexibility to extend the time frame</strong> and step in and
            out of the program as life requires.
          </p>
        </div>
      </div>
    </section>
  );
};
