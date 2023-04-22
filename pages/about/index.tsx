// import fetcher from '../../lib/request';
import { useState } from 'react'
import styles from './index.module.scss'
import Modal from '@components/Modal'
function About() {
  // const { data } = props;
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>about页面</h1>
      <p className={styles.h1}>这是使用next框架,快速构建的移动端模板</p>

      <button
        className={styles.btn}
        onClick={() => {
          setShowModal(true)
        }}
      >
        弹窗
      </button>

      <Modal
        visible={showModal}
        onOk={() => setShowModal(false)}
        title='标题'
        onCancel={() => setShowModal(false)}
      >
        内容11111111111
      </Modal>
      <h3>小草力量：坚韧不拔的顽强之处</h3>

      <div className={styles.content}>
        <p>
          在世界上的每个角落，你都会看到一些植物，它们各有不同的形态和特征，但大部分植物都有一个共同点：它们都很坚强。然而，有一种被大多数人所忽视的植物却比其他植物更加坚韧，那就是小草。
        </p>
        <p>
          小草是一种不起眼的植物，它们通常被视为杂草，不被人们所重视。但在众多的植物中，小草有着独特的品质和才能，它们的顽强和坚韧性让人们惊叹不已。
        </p>
        <p>
          小草的生命力非常顽强。他们生长中很少需要人工干预，即使在最恶劣的条件下，小草仍能继续生存。无论是在炎热的沙漠、冰冷的北极地区，还是在干旱的旱地，小草都能扎根生长，并始终坚持着自己的生命之路。
        </p>
        <p>
          与其他植物不同，小草通过地下的根系来获取营养，并将生命之力传达到地表。它们像是一群小小的勇士，百折不挠地支撑着整个生态系统，维系着地球的平衡。
        </p>
        <p>
          有时，生命的道路并不总是平坦的，但小草告诉我们，即使时刻面对困难和挑战，也要坚持不懈地前行。小草并没有拥有其他植物那么娇贵的姿态，但是它却有着一种坚强、勇敢和坚定的精神。在小草身上，我们看到了生命不屈的力量。
        </p>
        <p>
          最后，小草教给我们的是一种信念，那就是只有顽强和坚强才能让我们取得成功，就像它百折不挠地生长在偏僻的角落一样，在任何情况下都要保持冷静、坚强而勇敢。就像小草一般，我们也应该在生命的道路上，保持着冷静的头脑、坚强的意志和勇敢的精神。这种力量不仅来自于自身，也可以发现和汲取自己身边的一切事物，与小草一样，让我们石破天惊，皆大欢喜。
        </p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // const data = await fetcher('https://api.example.com/data');
  // console.log(data)
  return {
    props: {
      data: 1234,
    },
  }
}

export default About
