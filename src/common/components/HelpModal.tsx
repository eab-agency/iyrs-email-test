import React from "react";
import data from "@/data/globalData.json";
import { ModalContent } from "skeletix";

interface GlobalData {
  partner: {
    helpEmail: string;
  };
}
const { helpEmail } = (data as GlobalData).partner;


const HelpModal = () => {

  return (
    <ModalContent className="help-modal">
      <h2>Help</h2>
      <p>
        If you require assistance in using this site, please contact the
        Help Center at{" "}
        <a href={`mailto:${helpEmail}`}>{helpEmail}</a>.
      </p>
    </ModalContent>
  );
};

export default HelpModal;
