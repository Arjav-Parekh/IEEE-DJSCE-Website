import React from 'react';
import cx from "classnames";
import styles from "./App.module.scss";
import ContextComponentHolder from './components/ContextComponentHolder';

function App() {

  document.body.style.backgroundColor = "black";
  
  return (
    <div className={cx(styles.App)}>
      {/* <p className={cx(styles.para)}>Hello this is just for example</p> */}
      <ContextComponentHolder />
    </div>
  );
}

export default App;
