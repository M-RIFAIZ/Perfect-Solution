import React from "react";
import "./styles.css";
import Sectionone from "../components/Home/Sec-one/Sectionone";
import Sectiontwo from "../components/Home/Sec-two/Sectiontwo";
import Sectionthree from "../components/Home/sec-three/Sectionthree";
import Sectionfour from "../components/Home/sec-four/Sectionfour";
import Sectionfive from "../components/Home/sec-five/Sectionfive";
import Sectionsix from "../components/Home/sec-six/Sectionsix";
import Sectionseven from "../components/Home/sec-seven/Sectionseven";
import Sectioneight from "../components/Home/sec-eight/Sectioneight";
import Sectionnine from "../components/Home/sec-nine/Sectionnine";
import Sectionten from "../components/Home/sec-ten/Sectionten";

function Home() {
  return (
    <div>
      
      {/* section1 */}

      <Sectionone />

      {/* section2 */}

      <Sectiontwo />

      {/* section3 */}

      <Sectionfour />

      {/* section4 */}

      <Sectionthree />

      {/* section5 */}

      <Sectionfive />

      {/* section6 */}

      <Sectionsix />

      {/* section7 */}

      <Sectionseven />

      {/* section8 */}

      <Sectioneight />

      {/* section9 */}

      <Sectionnine />

      {/* section10 */}

      <Sectionten />

    </div>
  );
}

export default Home;
