import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import styles from './LoaderContainer.module.css';

export default function LoaderContainer() {
  return (
    <div className={styles.Container}>
      <Loader
        className={styles.Loader}
        type="Puff"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>
  );
}
