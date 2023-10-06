import FlexContent from './components/FlexContent';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sales from './components/Sales';
import Cars from './components/Cars';
import Footer from './components/Footer';

import { footerAPI, mainapi, highlight, popularsales, features, story, toprateslaes } from './data/data.js';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col gap-16 relative'>
        <Main mainapi={mainapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={features} />
        <Cars story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
