import classNames from 'classnames'
import type { CSSProperties } from 'react'
import React, { useCallback } from 'react'
import styles from './index.module.scss'

export interface IModalProps {
  visible: boolean // 是否显示弹窗
  showMask?: boolean // 是否显示遮罩层
  zIndex?: number // 弹窗显示层级
  maskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void // 弹窗遮罩层点击事件
  children?: any
  containerStyle?: CSSProperties // 弹窗容器样式
  overLayStyle?: CSSProperties // 弹窗蒙层样式
}

export const ModalComponent = React.memo((props: IModalProps) => {
  const {
    maskClick,
    visible = false,
    overLayStyle,
    children,
    zIndex,
    containerStyle,
    showMask = true,
  } = props
  // 遮罩层点击
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      maskClick && maskClick(e)
      e.stopPropagation()
    },
    [maskClick]
  )

  return visible ? (
    <div
      className={classNames(showMask ? styles.mask : '')}
      onClick={onClick}
      style={{ zIndex, ...overLayStyle }}
    >
      <div style={{ zIndex, ...containerStyle }}>{children}</div>
    </div>
  ) : (
    <></>
  )
})

export default ModalComponent
