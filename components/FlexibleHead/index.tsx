// import { APP_THRESHOLD, APP_ZOOM } from '@constants/app'
import Script from 'next/script'

// 页面大屏幕自适应缩放比例
export const APP_ZOOM = 1.3
// 大屏幕适配阈值
export const APP_THRESHOLD = 740

export interface IFlexibleHeadProps {
  zoom?: number | string
}

export default function FlexibleHead({ zoom = APP_ZOOM }: IFlexibleHeadProps) {
  return (
    <Script
      id='head'
      strategy='beforeInteractive'
      dangerouslySetInnerHTML={{
        __html: `
      ;(function (win, lib) {
        var doc = win.document
        var docEl = doc.documentElement
        var metaEl = doc.querySelector('meta[name="viewport"]')
        var flexibleEl = doc.querySelector('meta[name="flexible"]')
        var dpr = 0
        var scale = 0
        var tid
        var flexible = lib.flexible || (lib.flexible = {})
        if (metaEl) {
          var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
          if (match) {
            scale = parseFloat(match[1])
            dpr = parseInt(1 / scale)
          }
        } else if (flexibleEl) {
          var content = flexibleEl.getAttribute('content')
          if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/)
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/)
            if (initialDpr) {
              dpr = parseFloat(initialDpr[1])
              scale = parseFloat((1 / dpr).toFixed(2))
            }
            if (maximumDpr) {
              dpr = parseFloat(maximumDpr[1])
              scale = parseFloat((1 / dpr).toFixed(2))
            }
          }
        }
        if (!dpr && !scale) {
          var isAndroid = win.navigator.appVersion.match(/android/gi)
          var isIPhone = win.navigator.appVersion.match(/iphone/gi)
          var devicePixelRatio = win.devicePixelRatio
          if (isIPhone) {
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
              dpr = 3
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
              dpr = 2
            } else {
              dpr = 1
            }
          } else {
            dpr = 1
          }
          scale = 1 / dpr
        }
        docEl.setAttribute('data-dpr', dpr)
        if (!metaEl) {
          metaEl = doc.createElement('meta')
          metaEl.setAttribute('name', 'viewport')
          metaEl.setAttribute(
            'content',
            'initial-scale=' +
              scale +
              ', maximum-scale=' +
              scale +
              ', minimum-scale=' +
              scale +
              ', user-scalable=no'
          )
          if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl)
          } else {
            var wrap = doc.createElement('div')
            wrap.appendChild(metaEl)
            doc.write(wrap.innerHTML)
          }
        }
        function refreshRem() {
          var width = docEl.getBoundingClientRect().width
          var rem
          if(width <= 375) {
            rem = width/10
          } else if(width <= ${APP_THRESHOLD}) {
            rem = 37.5
          } else {
            rem = 37.5 * ${zoom}
          }
          docEl.style.fontSize = rem + 'px'
          flexible.rem = win.rem = rem
          docEl.style.fontSize = rem + 'px'
          flexible.rem = win.rem = rem
        }
        win.addEventListener(
          'resize',
          function () {
            clearTimeout(tid)
            tid = setTimeout(refreshRem, 300)
          },
          false
        )
        win.addEventListener(
          'pageshow',
          function (e) {
            if (e.persisted) {
              clearTimeout(tid)
              tid = setTimeout(refreshRem, 300)
            }
          },
          false
        )
        if (doc.readyState === 'complete') {
          doc.body.style.fontSize = 12 * dpr + 'px'
        } else {
          doc.addEventListener(
            'DOMContentLoaded',
            function (e) {
              doc.body.style.fontSize = 12 * dpr + 'px'
            },
            false
          )
        }
        refreshRem()
        flexible.dpr = win.dpr = dpr
        flexible.refreshRem = refreshRem
        flexible.rem2px = function (d) {
          var val = parseFloat(d) * this.rem
          if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px'
          }
          return val
        }
        flexible.px2rem = function (d) {
          var val = parseFloat(d) / this.rem
          if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem'
          }
          return val
        }
      })(window, window['lib'] || (window['lib'] = {}))
      `,
      }}
    />
  )
}
