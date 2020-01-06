import React from 'react';
import RotatePlane from './components/RotatePlane/Spinner';
import ChaseDot from './components/ChaseDot/Spinner';
import Bounce from './components/Bounce/Spinner';
import StretchDelay from './components/StretchDelay/Spinner';
import CubeMove from './components/CubeMove/Spinner';
import Scaleout from './components/Scaleout/Spinner';
import SkBounce from './components/SkBounce/Spinner';
import BounceDelay from './components/BounceDelay/Spinner';
import CircleBounceDelay from './components/CircleBounceDelay/Spinner';
import CubeGridScaleDelay from './components/CubeGridScaleDelay/Spinner';
import CircleFadeDelay from './components/CircleFadeDelay/Spinner';
import FoldCubeAngle from './components/FoldCubeAngle/Spinner';

function App() {
  return (
    <div className="container">

      <header className="header">
        <h2><u>Demos</u></h2>
      </header>

      <div className="row">
        <div className="one-third column">
          <RotatePlane />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/RotatePlane" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <ChaseDot />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/ChaseDot" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <Bounce />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/Bounce" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
      </div>

      <div className="row">
        <div className="one-third column">
          <StretchDelay />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/StretchDelay" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <CubeMove />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/CubeMove" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <Scaleout />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/Scaleout" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
      </div>

      <div className="row">
        <div className="one-third column">
          <SkBounce />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/SkBounce" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <BounceDelay />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/BounceDelay" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <CircleBounceDelay />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/CircleBounceDelay" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
      </div>             

      <div className="row">
        <div className="one-third column">
          <CubeGridScaleDelay />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/CubeGridScaleDelay" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <CircleFadeDelay />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/CircleFadeDelay" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
        <div className="one-third column">
          <FoldCubeAngle />
          <a className="button button-primary u-full-width" href="https://github.com/zeroidentidad/react-spinnerkit/tree/master/codebase/FoldCubeAngle" target="_blank" rel="noopener noreferrer">Código</a>
        </div>
      </div>

    </div>
  );
}

export default App;
