import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Collapse } from 'antd-mobile'
// import { Inter } from 'next/font/google'
import styles from './home.module.scss'
import { apiList } from 'apis/test'


export default function Home() {

  const [listPack, setListPack] = useState<Array<{name: string, desc: string}>>([])
  const handleList = async() => {
    const res = await apiList()
    setListPack(res.data)
  }
  useEffect(() => {
  handleList()
    
  }, [])
  return (
    <>
      <Head>
        <title>Your Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>基于next搭建一个适用于移动端的h5模板</h3>
        <div className={styles.desc}>开发的库如下: </div>
        <Collapse>
          {
            listPack.map((item) => <Collapse.Panel key={item.name} title={item.name}>
            {item.desc}
          </Collapse.Panel>)
          }
        </Collapse>

        <div className={styles.desc}>依赖的库如下: </div>
        <ul className={styles.inter}>
          <li className={styles.liItem}>1.typescript</li>
          <li className={styles.liItem}>2.sass</li>
          <li className={styles.liItem}>3.antd-mobile</li>
          <li className={styles.liItem}>4.classnames</li>
        </ul>
      </main>
    </>
  )
}
