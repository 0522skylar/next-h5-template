import caryImg from '@assets/modal/cary.png'
import guideImg from '@assets/modal/guide_box_award_bg.png'
import commonImg from '@assets/modal/order-empty.png'
import defaultImg from '@assets/modal/radish.png'
import classNames from 'classnames'
import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import ModalComponent from '../Mask'
import styles from './index.module.scss'
// logo img
const logoImages: Record<string, string> = {
  default: defaultImg.src,
  cary: caryImg.src,
  award: guideImg.src,
  common: commonImg.src,
}
interface IProps {
  visible: boolean // 是否显示弹窗
  showMask?: boolean // 是否显示遮罩层
  zIndex?: number // 弹窗显示层级
  maskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void // 弹窗遮罩层点击事件
  containerStyle?: CSSProperties // 弹窗容器样式
  overLayStyle?: CSSProperties // 弹窗蒙层样式
  title?: string
  showLogo?: boolean
  logoImg?: string
  logoType?: string
  isShowOkBtn?: boolean
  showCancelBtn?: boolean
  showBottomClose?: boolean
  showCover?: boolean
  sureText?: string
  cancelText?: string
  isShowAnimate?: boolean
  onOk?: () => void
  onCancel?: () => void
  children?: React.ReactNode
}
export default function Model(props: IProps) {
  const {
    title = '',
    visible = false,
    showLogo = true, // 是否显示logo
    logoImg = defaultImg.src,
    logoType = 'default', // logo类型
    isShowOkBtn = true, // 是否展示确认按钮
    showCancelBtn = true, // 是否展示取消按钮
    showBottomClose = false, // 是否展示底部的关闭按钮（兼容ui样式）
    sureText = '确定',
    cancelText = '再想想',
    isShowAnimate = false,
    maskClick,
    overLayStyle,
    children,
    zIndex,
    containerStyle,
    showMask = true,
    onCancel,
    onOk,
  } = props
  const [imgSrc, setImgSrc] = useState<string>(logoImg)
  useEffect(() => {
    setImgSrc(logoImg)
  }, [logoImg])

  useEffect(() => {
    setImgSrc(logoImages[logoType])
  }, [logoType])

  const handleOnOk = () => {
    onOk && onOk()
  }
  const handleOnCancel = () => {
    onCancel && onCancel()
  }

  return (
    <ModalComponent
      visible={visible}
      showMask={showMask}
      zIndex={zIndex}
      maskClick={maskClick}
      containerStyle={containerStyle}
      overLayStyle={overLayStyle}
    >
      <div className={styles.commonModal}>
        {showLogo && <img className={styles.modalLogo} src={imgSrc} />}
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.modalBody}>{children}</div>
        {isShowOkBtn || showCancelBtn ? (
          <div className={styles.modalFoot}>
            {showCancelBtn && (
              <button
                className={classNames(styles.modalButton, styles.cancel)}
                style={!isShowOkBtn ? { float: 'none' } : {}}
                onClick={handleOnCancel}
              >
                {cancelText}
              </button>
            )}
            {isShowOkBtn && (
              <button
                className={classNames(styles.modalButton, styles.ok, {
                  [styles.animated]: isShowAnimate,
                  [styles.tada]: isShowAnimate,
                })}
                style={!showCancelBtn ? { float: 'none', width: '180px' } : {}}
                onClick={handleOnOk}
              >
                {sureText}
              </button>
            )}
          </div>
        ) : (
          ''
        )}
        {showBottomClose && (
          <div className={styles.closeBtn} onClick={handleOnCancel} />
        )}
      </div>
    </ModalComponent>
  )
}
