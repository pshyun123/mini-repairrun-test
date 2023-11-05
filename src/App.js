import "./App.css";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NewOrder from "./pages/NewOrder";
// import BasicRepair from "./pages/BasicRepair";
import FastRepair from "./pages/FastRepair";
// import GeneralStep from "./pages/GeneralStep";
import images from "./images/수도권지도.jpg";
const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --DARKBLUE : #4682A9;
    --MIDBLUE : #749BC2;
    --LIGHTBLUE : #91C8E4;
    --IVORY : #F6F4EB;
    --GREY : #E0E4E9;
  }

  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{
    font-family: 'Noto Sans KR', sans-serif;
  }
  h2 {
    font-size: 2.4em;
  }
  h3 {
    font-size: 1.6em;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
   
  }
  @media only screen and (max-width:768px) {
    body {
      font-size: 14px;
    }
    h2 {
      font-size: 2em;
    }
    .container {
      width: 90vw;
    }
  }
`;
function App() {
  return (
    <>
      {/* path 경로, element는 컴포넌트를 부름 */}
      <GlobalStyle />
      <Router>
        <Routes>
          {/* <Route path="/" element={<NewOrder />} /> */}
          {/* <Route path="/" element={<BasicRepair />} /> */}
          <Route path="/" element={<FastRepair />} />
          {/* <Route path="/" element={<GeneralStep />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
