import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <>
      <div className={styles['lds-default']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.spinner__title}>Load more</div>
    </>
  );
};

export default Spinner;
