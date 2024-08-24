!(function () {
    'use strict'
    var F1 = (function () {
      var F4 = true
      return function (F5, F6) {
        var F7 = F4
          ? function () {
              if (F6) {
                var F8 = F6.apply(F5, arguments)
                F6 = null
                return F8
              }
            }
          : function () {}
        F4 = false
        return F7
      }
    })()
    var F0 = F1(this, function () {
      return F0.toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(F0)
        .search('(((.+)+)+)+$')
    })
    F0()
    var t = window
    var oQ = {
      index: 'b994a',
      config: '18e21',
    }
    var oh = {
      index: 'ef3a9',
      config: '6cbda',
    }
    var oM = {
      resources: oQ,
      main: oh,
    }
    var oG = {
      platform: 'web-mobile',
      groupList: ['default'],
      collisionMatrix: [[true]],
      hasResourcesBundle: true,
      hasStartSceneBundle: false,
      remoteBundles: [],
      subpackages: [],
      launchScene: 'db://assets/default/scene/main.fire',
      orientation: '',
      jsList: [],
      bundleVers: oM,
    }
    t.DEBUG = false
    t.PREVIEW = false
    t.EDITOR = false
    t.GtmId = 'GTM-WV99ST2'
    t['_CCSettings'] = oG
    var oL = {
      f72f5b9e6e: '>=10.4.0-rc.1',
      d56091e6dc: '>=6.9.0-rc.1',
      b4f8165174: '>=5.9.0-rc.1',
    }
    oL['37fadb0591'] = '>=9.9.0-rc.1'
    oL['8e5f11ad96'] = '>=8.4.0-rc.1'
    oL['8217bb8ac8'] = '>=4.6.0-rc.1'
    oL['0bc343f586'] = '>=6.4.0-rc.1'
    var n = '8270b42ff8.ff879.json',
      e = '10.4.0-0',
      i = '/shared/',
      r = n,
      o = '3c4695a542/',
      a =
        'f72f5b9e6e,37fadb0591,d56091e6dc,8e5f11ad96,b4f8165174,8217bb8ac8,0bc343f586',
      h =
        'minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7',
      l = 'FT.Title',
      v =
        'da,de,en,en-stkus,es,fi,fr,id,it,ja,ko,my,nl,no,pl,pt,ro,ru,sv,th,tr,vi,zh',
      u = '#C320B6',
      d = 'Fortune Tiger',
      Z = '2.12.1.0/6.9.0-rc.2/6.4.0-rc.3',
      g = 'com.pgsoft.slot.fortunetiger',
      _ = oL
    console.log('Game/Boot/Engine', Z)
    var y = navigator.userAgent,
      M = 0
    function k(F4) {
      var F5 = F4 + '',
        F6 = (F4.stack || '') + '',
        F7 = F5
      F6 && (0 === F6.indexOf(F5) ? (F7 = F6) : (F7 += '\n' + F6))
      var F8 = this.onFormat || t.onGAReceiveError
      if (F8) {
        try {
          F7 = F8(F7)
        } catch (F9) {
          H(F9 + '')
        }
      }
      return F7.replace(
        /https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g,
        '$1$2'
      ).replace(/https?:\/\/[^/]+/g, '')
    }
    function H(F5, F6) {
      var F7 = {
        description: F5,
        fatal: !!F6,
      }
      gtag('event', 'exception', F7)
    }
    y.indexOf(' Chrome/') > 0
      ? (M = 2)
      : y.indexOf(' AppleWebKit/') > 0
      ? (M = 1)
      : y.indexOf(' Gecko/') > 0
      ? (M = 3)
      : y.indexOf(' Trident/') > 0
      ? (M = 4)
      : y.indexOf(' Presto/') > 0 && (M = 5)
    var b,
      w,
      x,
      E,
      S =
        ((b = H),
        (w = 0),
        (x = ''),
        (E = 0),
        function (F4) {
          var F5 = Date.now()
          if (
            (x !== F4 || F5 - E > 1000 ? ((E = F5), (x = F4), (w = 0)) : w++,
            0 === w)
          ) {
            b(F4)
          } else {
            if (5 === w) {
              b(F4, 1)
              var F6 = this.onFrequent || t.onGAFrequentError
              try {
                F6 && F6()
              } catch (F7) {
                b(F7 + '')
              }
            } else {
              w > 5 && (E = F5)
            }
          }
        }),
      V = 'Uncaught '
    function A(F4, F5, F6, F7, F8) {
      if (M > 3) {
        return false
      }
      if (!F6 || !F7 || !F8) {
        return false
      }
      var F9 = V + k.call(A, F8)
      return S.call(A, F9), false
    }
    A.report = function (F4, F5) {
      H(V + k.call(this, F4), F5)
    }
    var D,
      N,
      $ = 'Unhandled '
    function R(F4) {
      if (!(M > 3)) {
        var F5 = F4.reason
        if (null != F5) {
          var F6 = $ + k.call(R, F5)
          S.call(R, F6)
        }
      }
    }
    R.report = function (F4, F5) {
      H($ + k.call(this, F4), F5)
    }
    t.dataLayer = []
    t.gtag = function () {
      dataLayer.push(arguments)
    }
    dataLayer.push({
      event: 'gtm.js',
      'gtm.start': Date.now(),
      app_name: d,
      app_version: Z,
    })
    D = 'https://www.googletagmanager.com/gtm.js?id='.concat(GtmId)
    ;(N = document.createElement('script')).async = true
    N.src = D
    document.head.appendChild(N)
    t.onerror = A
    t.onunhandledrejection = R
    var I = location.search
    I.length > 0 && (I = I.substring(1))
    for (
      var T = {
          B: '',
          j: decodeURIComponent(F),
        },
        C = I.split('&'),
        L = 0;
      L < C.length;
      ++L
    ) {
      var B = C[L]
      if (B) {
        var P = B.indexOf('=')
        if (-1 === P) {
        } else {
          var j = B.substring(0, P),
            F = B.substring(P + 1)
        }
      }
    }
    function U() {
      var F4 =
        'string' == typeof arguments[0]
          ? (function (F5) {
              var F6 = F5[2],
                F7 = F5[3]
              var F8 = {
                S: F5[0],
                A: F5[1],
                N: F9,
              }
              F8['$'] = F9
              return F8
              function F9() {
                null != this.R
                  ? F6(this.R)
                  : void 0 === F7
                  ? F6(void 0, this.I)
                  : F7(this.I)
              }
            })(arguments)
          : arguments[0]
      2 === F4.A && void 0 === F4.T
        ? (function (F5) {
            F5.C = false
            var F6 = {
              S: F5.S,
              A: 2,
              N: function () {
                F5.R = this.R
                F5.N && F5.N()
              },
              $: function () {
                var F7 = this.I,
                  F8 = URL.createObjectURL(F7)
                function F9(Fo) {
                  Fo.filename === F8 && ((F5.R = Fo.error), delete O[F8])
                }
                t.addEventListener('error', F9)
                O[F8] = F5.S
                var FF = document.createElement('script')
                FF.src = F8
                FF.defer = true
                FF.onload = function () {
                  t.removeEventListener('error', F9)
                  document.head.removeChild(FF)
                  URL.revokeObjectURL(F8)
                  q(F5)
                }
                document.head.appendChild(FF)
              },
              T: F5,
            }
            U(F6)
          })(F4)
        : (function (F5) {
            var F6 = new XMLHttpRequest()
            F6.open('GET', F5.S, true)
            try {
              'timeout' in F6 && (F6.timeout = 60000)
            } catch (F7) {}
            switch (F5.A) {
              case 1:
                F6.responseType = 'json'
                break
              case 3:
              case 2:
                F6.responseType = 'blob'
            }
            F6.onload = function () {
              ;(F6.status >= 200 && F6.status < 300) ||
              (0 === F6.status && F6.response)
                ? (function (F8, F9) {
                    if (1 === F8.A && 'string' == typeof F9) {
                      try {
                        F9 = JSON.parse(F9)
                      } catch (FF) {
                        F8.R = FF
                        F9 = void 0
                      }
                    }
                    null == F8.R && null == F9
                      ? (F8.R = 'invaliddata')
                      : (F8.I = F9)
                  })(F5, F6.response)
                : (F5.R = ''.concat(F6.status, ': ').concat(F6.statusText))
              q(F5)
            }
            F6.onerror = function () {
              F5.R = 'onerror'
              q(F5)
            }
            F6.ontimeout = function () {
              F5.R = 'ontimeout'
              q(F5)
            }
            F6.send()
          })(F4)
    }
    var z,
      O = Object.create(null)
    function q(F4) {
      if (null != F4.R) {
        var F5 = void 0 === F4.C ? 0 : F4.C
        !(function (F6, F7, F8, F9) {
          F8 instanceof Error && (F8 = F8.message)
          var FF = F6.split('?')[0],
            Fo = 'load resource fail|G1002|src: '
              .concat(FF, '|reason: ')
              .concat(F8)
          F9 && (Fo += '|retryCount: '.concat(F9))
          gtag('event', 'error', {
            event_category: 'game_shell',
            event_label: Fo,
          })
        })(F4.S, 0, F4.R, F5)
        false !== F5 && ('onerror' === F4.R || 'ontimeout' === F4.R) && F5 < 5
          ? ((F4.C = ++F5), (F4.R = void 0), setTimeout(U, 1000 * (1 << F5), F4))
          : F4.N && F4.N()
      } else {
        F4['$'] && F4['$']()
      }
    }
    var W =
        (((z = {})[0] = 'const a=10;let b=10;'),
        (z[1] = 'var c=()=>{};'),
        (z[2] = 'function d(a=2){};'),
        (z[3] = '+function e(...c){}(...[2,3]);'),
        (z[4] = 'var f=1,g=`c${f}d`;'),
        (z[5] = 'var h=0b111,q=0o767;'),
        (z[6] = "var i='/\\u{20BB7}/u';"),
        (z[7] = 'var j=/s*/y;'),
        (z[8] = "var k=1,l={k,['x'+k]:2,c(){}};"),
        (z[9] = 'var [z,y=3]=[1];var {e,f=5}={a:1,f:5};'),
        (z[10] = 'class test{}; class test2 extends test{};'),
        (z[11] = "var o=Symbol('a');"),
        (z[12] = 'for(var t of [1]){};'),
        (z[13] = 'function*p(){ yield;}'),
        z),
      X = [
        [t, 'Map', 'WeakMap', 'Set', 'WeakSet', 'Promise', 'Proxy', 'Reflect'],
        [Object, 'assign'],
        [Array.prototype, 'findIndex', 'find'],
        [String.prototype, 'repeat', 'startsWith', 'endsWith', 'includes'],
        [Number, 'isFinite', 'isNaN', 'isSafeInteger', 'isInteger'],
        [Math, 'trunc', 'sign', 'cbrt', 'log2', 'log10'],
      ]
    function J() {
      return (
        (function (F4) {
          for (var F5 = Object.keys(F4), F6 = 0; F6 < F5.length; F6++) {
            var F7 = F4[F5[F6]]
            try {
              Function(F7)
            } catch (F8) {
              return false
            }
          }
          return true
        })(W) &&
        (function (F4) {
          for (var F5 = true, F6 = 0; F6 < F4.length; F6++) {
            var F7 = F4[F6],
              F8 = F7[0]
            if (void 0 === F8) {
              F5 = false
              break
            }
            for (var F9 = 1; F9 < F7.length; F9++) {
              if (void 0 === F8[F7[F9]]) {
                F5 = false
                break
              }
            }
            if (!F5) {
              break
            }
          }
          return F5
        })(X)
      )
    }
    var oz = {
      en: 'Unable to load game. Press [OK] to refresh or [Cancel] to ignore.',
      zh: '未能加载游戏\uFF0C点击"确定"进行重试或者"取消"\u3002',
      th: 'ไม่สามารถดาวน์โหลดเกมได้ ให้คลิกที่ \u201Dยืนยัน\u201D เพื่อลองใหม่ หรือที่ \u201Cยกเลิก\u201D เพื่อออก',
      id: 'Permainan tidak bisa diunduh. Klik \u2018Konfirmasi\u2019 untuk coba lagi atau \u2018Batalkan\u2019 untuk keluar.',
      vi: 'Không thể tải về trò chơi. Nhấp vào \u2018Xác nhận\u2019 để thử lại hoặc \u2018Hủy\u2019 để thoát.',
      ja: 'ゲームをダウンロードできません\u3002[確認] をクリックしてもう一度試すか\u3001[キャンセル] をクリックして終了してください\u3002',
      ko: '게임을 다운로드할 수 없습니다. \u2018확인\u2019을 클릭하여 다시 시도하거나 \u2018취소\u2019를 클릭하여 종료하세요.',
      sv: 'Spelet kan inte laddas ner. Klicka på Bekräfta för att försöka igen, eller på Avbryt för att lämna.',
    }
    var od = {
      en: 'Sorry, this game cannot be loaded as the existing resources are out of date. Please try again later.',
      zh: '对不起\uFF0C由于当前资源不是最新版本\uFF0C因此游戏无法加载\uFF0C请稍后再试\u3002',
      th: 'ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง',
      id: 'Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.',
      vi: 'Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.',
      ja: '申し訳ありません\u3002現在のリソースが古いため\u3001このゲームを読み込むことはできません\u3002後でもう一度お試しください\u3002',
      ko: '죄송합니다.이 게임은 기존 리소스가 구식이므로로드 할 수 없습니다. 나중에 다시 시도 해주십시오.',
      sv: 'Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare.',
    }
    var ol = {
      en: 'DIFFERENCE MAKES THE DIFFERENCE',
      zh: '不  凡   成   就   非   凡',
      de: 'DER UNTERSCHIED MACHT DEN UNTERSCHIED',
      es: 'LA DIFERENCIA QUE MARCA LA DIFERENCIA',
      th: 'ความแตกต่าง ที่เป็นตัวตัดสิน',
      id: 'PERBEDAAN YANG MEMBUAT PERBEDAAN',
      vi: 'SỰ KHÁC BIỆT TẠO NÊN SỰ KHÁC BIỆT',
      ja: '違 い が   違 い を 生 み だ す',
      ko: '차 이 를   만 드 는   차 이',
      ru: 'ИНДИВИДУАЛЬНОСТЬ ИМЕЕТ ЗНАЧЕНИЕ',
      sv: 'SKILLNADEN SOM GÖR SKILLNAD',
    }
    var ox = {}
    ox['0'] = oz
    ox['1'] = od
    ox['2'] = ol
    var Q = ox,
      Y = T.language || T.lang || T.l || navigator.language,
      tt = Y.indexOf('-')
    function nt(F4) {
      var F5 = Q[F4]
      return F5 ? F5[Y] || F5.en : ''.concat(F4)
    }
    ;-1 !== tt && (Y = Y.substring(0, tt))
    var et,
      it = '__sv',
      rt = void 0 !== T[it] && '' !== T[it],
      ot = false,
      at = []
    function ht() {
      for (
        var F4 = function () {
          var F5,
            F6,
            F7 = at.pop()
          null === et
            ? U.apply(void 0, F7)
            : ((F5 = F7[0]),
              (F6 = function (F8) {
                F8 && (F7[0] = F8)
                U.apply(void 0, F7)
              }),
              et.getSignedUrl(F5).then(F6, function () {
                return F6('')
              }))
        };
        at.length;
  
      ) {
        F4()
      }
    }
    var lt = rt
      ? function () {
          at.push(arguments)
          void 0 === et
            ? (function () {
                if (!ot) {
                  ot = true
                  var F4 = T[it].substring(2, 4) + '.js'
                  U(location.origin + '/loader/' + F4, 2, function (F5) {
                    F5 && (et = null)
                    null == (et = sign || null) || et.setQuery(T[it])
                    ht()
                  })
                }
              })()
            : setTimeout(ht, 0)
        }
      : U
    function vt(F4) {
      var F5 = parseInt(F4)
      return isNaN(F5) ? F4 : F5
    }
    function ut(F4, F5) {
      for (
        var F6 = F4.split('.'),
          F7 = F5.split('.'),
          F8 = Math.max(F6.length, F7.length),
          F9 = 0;
        F9 < F8;
        F9++
      ) {
        var FF = vt(F6[F9] || 0),
          Fo = vt(F7[F9] || 0)
        if (FF < Fo) {
          return -1
        }
        if (FF > Fo) {
          return 1
        }
      }
      return 0
    }
    function ft(F4, F5) {
      var F6 = document.createElementNS('http://www.w3.org/2000/svg', F5)
      return F4.appendChild(F6), F6
    }
    function st() {
      for (var F4 = arguments, F5 = F4[0], F6 = 1; F6 < F4.length; F6 += 2) {
        F5.style[F4[F6]] = F4[F6 + 1]
      }
      return F5
    }
    function ct() {
      for (var F4 = arguments, F5 = F4[0], F6 = 1; F6 < F4.length; F6 += 2) {
        F5.setAttribute(F4[F6], F4[F6 + 1])
      }
      return F5
    }
    var mt = function (F4, F5) {
        return F4 / F5 > 0.5625 ? 1920 / F5 : 1080 / F4
      },
      dt = function (F4, F5, F6, F7, F8) {
        var F9,
          FF =
            0 === F8
              ? '<svg xmlns="http://www.w3.org/2000/svg" width="112" height="112"><path d="M90.6 9.8h9.8V0h-9.8Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1"/><path d="M0 21.1h9.8v-9.8H0Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1"/><path d="M11.3 111.6h9.8v-9.8h-9.8Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1"/><path d="M68 89h9.7v-9.8H68Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1"/><path d="M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1"/></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" width="113" height="112"><path d="M.3 32.4h9.8v-9.8H.3Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1"/><path d="M22.8 9.8h9.7V0h-9.7Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1"/><path d="M11.6 100.3h9.7v-9.8h-9.7Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1"/><path d="M79 111.6h9.7v-9.8h-9.8Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1"/><path d="M101.4 55h9.7v-9.7h-9.7Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1"/><path d="M101.4 89h9.7v-9.8h-9.7Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1"/><path d="M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0" style="stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1"/></svg>',
          Fo = ft(F4, 'g')
        ct(Fo, 'id', 'digit-' + F7)
        st(Fo, 'filter', 'url(#motionFilter-' + F7 + ')')
        for (var FT = 0; FT < 11; FT++) {
          var Fq = ft(Fo, 'g')
          st(Fq, 'transform', 'translate(0px, ' + -FT * (F5 + 2 * F6) + 'px)')
          F9 = FF
          Fq.innerHTML = F9
        }
        return Fo
      },
      Zt = function (F4, F5) {
        var F6 = ft(F4, 'filter')
        ct(F6, 'id', 'motionFilter-' + F5, 'width', '300%', 'x', '-100%')
        var F7 = ft(F6, 'feGaussianBlur')
        return (
          ct(
            F6,
            'class',
            'blurValues',
            'in',
            'SourceGraphic',
            'stdDeviation',
            '0 0'
          ),
          F7
        )
      }
    function pt(F4) {
      var F5,
        F6,
        F7,
        F8 = F4.h,
        F9 = F4.t,
        FF = F4.v,
        Fo = F4.i,
        FT = F4.o,
        Fq = F4.l,
        Fg = F4.m,
        Fr = document.querySelector(Fq),
        Fp =
          ((F5 = Fr),
          (F6 = mt(1440, 1024)),
          (F7 = function () {
            var FE = mt(window.innerWidth, window.innerHeight)
            st(F5, 'transform', 'scale(' + (F6 / FE).toFixed(4) + ')')
          }),
          window.addEventListener('resize', F7),
          F7(),
          function () {
            window.removeEventListener('resize', F7)
          }),
        FI = F8,
        FD = 112 + 2 * F8,
        FH = Date.now(),
        Ff = ft(Fr, 'svg'),
        Fb = ft(Ff, 'svg')
      ct(Fb, 'mask', 'url(#mask-' + FH + ')')
      var FO = ft(Ff, 'defs')
      !(function (FE, Fz) {
        var Fd = ft(FE, 'linearGradient')
        ct(
          Fd,
          'id',
          'gradient-' + Fz,
          'x1',
          '0%',
          'y1',
          '0%',
          'x2',
          '0%',
          'y2',
          '100%'
        )
        ;(function () {
          for (var Fl = arguments, Fx = 0; Fx < Fl.length; Fx++) {
            var FN = ft(Fd, 'stop'),
              FV = Fl[Fx]
            ct(FN, 'offset', FV[0], 'stop-color', 'white', 'stop-opacity', FV[1])
          }
        })([0, 0], [0.2, 1], [0.8, 1], [1, 0])
      })(FO, FH)
      ;(function (FE, Fz) {
        var Fd = ft(FE, 'mask')
        ct(Fd, 'id', 'mask-' + Fz)
        ct(
          ft(Fd, 'rect'),
          'x',
          0,
          'y',
          0,
          'width',
          '100%',
          'height',
          '100%',
          'fill',
          'url(#gradient-' + Fz + ')'
        )
      })(FO, FH)
      ;(function (FE, Fz) {
        var Fd, Fl, Fx
        st(
          ((Fd = FE),
          (Fl = Fz),
          (Fx = document.createElement('pre')),
          Fd.appendChild(Fx),
          (Fx.textContent = Fl),
          Fx),
          'font',
          '20px Roboto, sans-serif',
          'color',
          '#ccc',
          'opacity',
          '0',
          'text-align',
          'center',
          'animation',
          '1.2s ease-in-out forwards fade-in'
        )
      })(Fr, Fg)
      var FQ = ['1', '1'].map(function (FE, Fz) {
        var Fd = Fz + '-' + FH
        return {
          Z: dt(Fb, 112, F8, Fd, Fz),
          u: Zt(FO, Fd),
          H: +FE,
          p: 0,
          M: {
            x: Fz * (112 + F9),
            y: FI,
          },
        }
      })
      !(function (FE, Fz, Fd) {
        ct(FE, 'viewBox', '0 0 ' + Fz + ' ' + Fd)
        st(FE, 'overflow', 'hidden', 'height', Fd)
      })(Ff, FQ.length * (112 + F9) - F9, FD)
      FQ.forEach(function (FE) {
        ct(FE.Z, 'transform', 'translate(' + FE.M.x + ', ' + FE.M.y + ')')
      })
      var Fh = []
      !(function FE() {
        Fh.length = 0
        FQ.forEach(function (Fz, Fd) {
          var Fl = Fz.p * FD,
            Fx = (77 + Fz.H) * FD,
            FN = (function (FV) {
              var FA = FV.g,
                Fe = FV['_to'],
                Fi = FV.o,
                Fy = FV.V,
                FW = FV['_'],
                Fw = FV.k,
                FS = FV.D,
                Fv = FA,
                Fm = void 0,
                FX = false
              return function (Ft) {
                if (!FX) {
                  void 0 === Fm && ((Fm = Ft), FW(Fv))
                  var Fj,
                    FJ = Math.min(Math.max(Ft - Fm - Fy, 0), Fi) / Fi
                  Fw(
                    (Fv =
                      ((Fj = FJ) <= 0.3
                        ? Fj * Fj
                        : 1 +
                          1.25 * Math.pow(Fj - 1, 3) +
                          0.25 * Math.pow(Fj - 1, 2)) *
                        (Fe - FA) +
                      FA)
                  )
                  1 === FJ && ((FX = true), FS(Fv))
                }
              }
            })({
              g: Fl,
              _to: Fx,
              o: FT,
              V: (FQ.length - 1 - Fd) * Fo + FF,
              _: function () {},
              k: function (FV) {
                Fz.M.y = FI + (FV % (11 * FD))
                ct(Fz.Z, 'transform', 'translate(' + Fz.M.x + ', ' + Fz.M.y + ')')
                var FA = (Fl + Fx) / 2,
                  Fe = (
                    +Math.abs(Math.abs(Math.abs(FV - FA) - FA) - Fl) / 100
                  ).toFixed(1)
                ct(Fz.u, 'stdDeviation', '0 ' + Fe)
              },
              D: function () {
                0 === Fd && (document.querySelector(Fq) ? FE() : (FL(), Fp()))
              },
            })
          Fh.push(FN)
        })
      })()
      var FM,
        FG,
        FL =
          ((FM = function (Fz) {
            Fh.forEach(function (Fd) {
              return Fd(Fz)
            })
          }),
          (function Fz(Fd) {
            FG = requestAnimationFrame(Fz)
            FM(Fd)
          })(0),
          function () {
            cancelAnimationFrame(FG)
          })
    }
    var oN = {
      h: 20,
      t: 25,
      v: 400,
      i: 200,
      o: 1200,
      l: '.svg-loading',
      m: '',
    }
    var gt,
      _t,
      yt = oN,
      Mt = i,
      kt = ''
    t.GtmId = new String(t.GtmId)
    var Ht = J() ? 2015 : 5,
      bt = M,
      wt = O,
      xt = Date.now(),
      Et = T.or
    Et &&
      (0 ===
      (Et = (function (F4) {
        var F5
        !(function (Fg) {
          Fg.kReplacer = '[a-zA-Z=]'
        })(F5 || (F5 = {}))
        var F6 = 'object' == typeof window ? window : global,
          F7 = F6.parseInt,
          F8 = F6.isNaN,
          F9 = F6.String,
          FF = F6.RegExp,
          Fo = F6.Number,
          FT = FF(F5.kReplacer, 'g'),
          Fq = F7(
            null == F4 ? void 0 : F4.substring(Fo('0x0'), Fo('0x2')),
            Fo('0xa')
          )
        return F8(Fq) && (null == F4 ? void 0 : F4.includes('.'))
          ? F4
          : null == F4
          ? void 0
          : F4.substring(Fo('0x2')).replace(FT, function (Fg) {
              if ('=' === Fg) {
                return '.'
              }
              var Fr = Fg.charCodeAt(0),
                Fp = Fr >= Fo('0x61') ? Fo('0x61') : Fo('0x41'),
                Fs = ((Fr - Fp - Fq + Fo('0x1a')) % Fo('0x1a')) + Fp
              return F9.fromCharCode(Fs)
            })
      })(Et)).indexOf('//')
        ? (Et = location.protocol + Et)
        : /^https?:/.test(Et) || (Et = location.protocol + '//' + Et),
      (kt = Et + location.pathname.replace('index.html', '')),
      (Mt = window.location.origin + Mt))
    var St,
      Vt = T.blockpage
    if (Vt) {
      var At = document.createElement('div')
      At.id = 'block-page'
      At.style.backgroundColor = '#' + Vt
      document.body.appendChild(At)
    }
    if (J()) {
      var Dt = document.querySelector('.circle-loading')
      null === (_t = null == Dt ? void 0 : Dt.parentElement) ||
        void 0 === _t ||
        _t.removeChild(Dt)
      var Nt = document.getElementById('initial-loader')
      Nt && (Nt.style.backgroundColor = 'black')
      ;(function (F4) {
        yt.m = F4
        pt(yt)
      })(nt(2))
    } else {
      var $t = document.querySelector('.svg-loading')
      null === (gt = null == $t ? void 0 : $t.parentElement) ||
        void 0 === gt ||
        gt.removeChild($t)
    }
    function Rt(F4) {
      void 0 === F4 && (F4 = 0)
      confirm(nt(F4)) &&
        setTimeout(function () {
          location.reload()
        }, 500)
    }
    function It(F4) {
      if (null != F4) {
        return Rt()
      }
      'undefined' == typeof shell
        ? Rt()
        : setTimeout(function () {
            var F5 = {
              SharedPath: Mt,
              GameDir: kt,
              AssetTable: r,
              ShellDir: o,
              Plugins: a,
              Requirements: h,
              LocalizedTitleKey: l,
              SupportedLanguages: v,
              ThemeColor: u,
              LobbyMode: false,
              SupportXSMaxRatio: 2,
              AspectRatio: '',
              Orientation: 1,
              Name: d,
              Version: Z,
              Index: 126,
              Identifier: g,
              PluginDependencies: _,
              Ecma: Ht,
              Platform: bt,
              Blobs: wt,
              BootTime: xt,
            }
            return shell.start(St, F5)
          }, 0)
    }
    lt(Mt + o + 'index.json', 1, function (F4, F5) {
      if (null != F4) {
        return Rt()
      }
      var F6, F7
      F6 = (St = F5).version
      F7 = e
      'string' == typeof F6 &&
      'string' == typeof F7 &&
      -1 !==
        (function (F8, F9) {
          var FF = F8.split('-'),
            Fo = F9.split('-'),
            FT = ut(FF[0], Fo[0])
          if (0 !== FT) {
            return FT
          }
          var Fq = FF[1],
            Fg = Fo[1]
          return Fq && !Fg ? -1 : !Fq && Fg ? 1 : Fq || Fg ? ut(Fq, Fg) : 0
        })(F6, F7)
        ? lt(Mt + o + St.main, 2, It)
        : Rt(1)
    })
  })()
  