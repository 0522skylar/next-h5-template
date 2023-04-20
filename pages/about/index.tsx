// import fetcher from '../../lib/request';
import { useState } from 'react';
import styles from './index.module.scss'
import Modal from '@components/Modal'
function About() {
  // const { data } = props;
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>about页面</h1>
      <p>这是一个模板页面</p>

      <button onClick={()=> {setShowModal(true)}}>弹窗</button>

      <Modal
      visible={showModal}
      onOk={() => setShowModal(false)}
      title='标题'
      onCancel={() => setShowModal(false)}
      >
        内容1111111111
      </Modal>
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
