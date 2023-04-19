// import fetcher from '../../lib/request';
import styles from './index.module.scss'
function About() {
  // const { data } = props;

  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>about页面</h1>
      <p>这是一个模板页面</p>
    </div>
  );
}

export async function getStaticProps() {
  // const data = await fetcher('https://api.example.com/data');
  // console.log(data)
  return {
    props: {
      data: 1234,
    },
  };
}

export default About;
