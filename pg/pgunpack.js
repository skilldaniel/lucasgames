!(function () {
  'use strict'
  !(function () {
    var V = (function () {
      var K = true
      return function (U, f) {
        var y = K
          ? function () {
              if (f) {
                var g = f.apply(U, arguments)
                f = null
                return g
              }
            }
          : function () {}
        K = false
        return y
      }
    })()
    var r
    !(function (K) {
      var U = V(this, function () {
        return U.toString()
          .search('(((.+)+)+)+$')
          .toString()
          .constructor(U)
          .search('(((.+)+)+)+$')
      })
      U()
      K.u = 'window'
      K.l = 'self'
    })(r || (r = {}))
    var b = (0, eval)('this'),
      u = b[r.l],
      E = b[r.u]
    !(function () {
      'use strict'
      var V0 = function (gp, gQ) {
        return (
          (V0 =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (gW, gZ) {
                gW['__proto__'] = gZ
              }) ||
            function (gW, gZ) {
              for (var gY in gZ)
                Object.prototype.hasOwnProperty.call(gZ, gY) &&
                  (gW[gY] = gZ[gY])
            }),
          V0(gp, gQ)
        )
      }
      function V1(gp, gQ) {
        if ('function' != typeof gQ && null !== gQ) {
          throw new TypeError(
            'Class extends value ' + gQ + ' is not a constructor or null'
          )
        }
        function gW() {
          this.constructor = gp
        }
        V0(gp, gQ)
        gp.prototype =
          null === gQ
            ? Object.create(gQ)
            : ((gW.prototype = gQ.prototype), new gW())
      }
      var V2 = function () {
        return (
          (V2 =
            Object.assign ||
            function (gp) {
              for (var gQ, gW = 1, gZ = arguments.length; gW < gZ; gW++) {
                for (var gY in (gQ = arguments[gW]))
                  Object.prototype.hasOwnProperty.call(gQ, gY) &&
                    (gp[gY] = gQ[gY])
              }
              return gp
            }),
          V2.apply(this, arguments)
        )
      }
      function V3(gp, gQ, gW, gZ) {
        return new (gW || (gW = Promise))(function (gY, gI) {
          function gC(gP) {
            try {
              gB(gZ.next(gP))
            } catch (h0) {
              gI(h0)
            }
          }
          function gD(gP) {
            try {
              gB(gZ.throw(gP))
            } catch (h0) {
              gI(h0)
            }
          }
          function gB(gP) {
            var h0
            gP.done
              ? gY(gP.value)
              : ((h0 = gP.value),
                h0 instanceof gW
                  ? h0
                  : new gW(function (h1) {
                      h1(h0)
                    })).then(gC, gD)
          }
          gB((gZ = gZ.apply(gp, gQ || [])).next())
        })
      }
      function V4(gp, gQ) {
        var gW,
          gZ,
          gY,
          gI,
          gC = {
            label: 0,
            sent: function () {
              if (1 & gY[0]) {
                throw gY[1]
              }
              return gY[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (gI = {
            next: gD(0),
            throw: gD(1),
            return: gD(2),
          }),
          'function' == typeof Symbol &&
            (gI[Symbol.iterator] = function () {
              return this
            }),
          gI
        )
        function gD(gB) {
          return function (gP) {
            return (function (h0) {
              if (gW) {
                throw new TypeError('Generator is already executing.')
              }
              for (; gI && ((gI = 0), h0[0] && (gC = 0)), gC; ) {
                try {
                  if (
                    ((gW = 1),
                    gZ &&
                      (gY =
                        2 & h0[0]
                          ? gZ.return
                          : h0[0]
                          ? gZ.throw || ((gY = gZ.return) && gY.call(gZ), 0)
                          : gZ.next) &&
                      !(gY = gY.call(gZ, h0[1])).done)
                  ) {
                    return gY
                  }
                  switch (
                    ((gZ = 0), gY && (h0 = [2 & h0[0], gY.value]), h0[0])
                  ) {
                    case 0:
                    case 1:
                      gY = h0
                      break
                    case 4:
                      return (
                        gC.label++,
                        {
                          value: h0[1],
                          done: false,
                        }
                      )
                    case 5:
                      gC.label++, (gZ = h0[1]), (h0 = [0])
                      continue
                    case 7:
                      ;(h0 = gC.ops.pop()), gC.trys.pop()
                      continue
                    default:
                      if (
                        !(
                          (gY =
                            (gY = gC.trys).length > 0 && gY[gY.length - 1]) ||
                          (6 !== h0[0] && 2 !== h0[0])
                        )
                      ) {
                        gC = 0
                        continue
                      }
                      if (
                        3 === h0[0] &&
                        (!gY || (h0[1] > gY[0] && h0[1] < gY[3]))
                      ) {
                        break
                      }
                      if (6 === h0[0] && gC.label < gY[1]) {
                        gY = h0
                        break
                      }
                      if (gY && gC.label < gY[2]) {
                        gC.ops.push(h0)
                        break
                      }
                      gY[2] && gC.ops.pop(), gC.trys.pop()
                      continue
                  }
                  h0 = gQ.call(gp, gC)
                } catch (h1) {
                  h0 = [6, h1]
                  gZ = 0
                } finally {
                  gW = gY = 0
                }
              }
              if (5 & h0[0]) {
                throw h0[1]
              }
              return {
                value: h0[0] ? h0[1] : void 0,
                done: true,
              }
            })([gB, gP])
          }
        }
      }
      var V5 = Object.create
        ? function (gp, gQ, gW, gZ) {
            void 0 === gZ && (gZ = gW)
            var gY = Object.getOwnPropertyDescriptor(gQ, gW)
            ;(gY &&
              !('get' in gY
                ? !gQ['__esModule']
                : gY.writable || gY.configurable)) ||
              (gY = {
                enumerable: true,
                get: function () {
                  return gQ[gW]
                },
              })
            Object.defineProperty(gp, gZ, gY)
          }
        : function (gp, gQ, gW, gZ) {
            void 0 === gZ && (gZ = gW)
            gp[gZ] = gQ[gW]
          }
      function V6(gp) {
        var gQ = 'function' == typeof Symbol && Symbol.iterator,
          gW = gQ && gp[gQ],
          gZ = 0
        if (gW) {
          return gW.call(gp)
        }
        if (gp && 'number' == typeof gp.length) {
          return {
            next: function () {
              return (
                gp && gZ >= gp.length && (gp = void 0),
                {
                  value: gp && gp[gZ++],
                  done: !gp,
                }
              )
            },
          }
        }
        throw new TypeError(
          gQ ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        )
      }
      function V7(gp, gQ) {
        var gW = 'function' == typeof Symbol && gp[Symbol.iterator]
        if (!gW) {
          return gp
        }
        var gZ,
          gY,
          gI = gW.call(gp),
          gC = []
        try {
          for (; (void 0 === gQ || gQ-- > 0) && !(gZ = gI.next()).done; ) {
            gC.push(gZ.value)
          }
        } catch (gD) {
          gY = { error: gD }
        } finally {
          try {
            gZ && !gZ.done && (gW = gI.return) && gW.call(gI)
          } finally {
            if (gY) {
              throw gY.error
            }
          }
        }
        return gC
      }
      function V8(gp, gQ, gW) {
        if (gW || 2 === arguments.length) {
          for (var gZ, gY = 0, gI = gQ.length; gY < gI; gY++) {
            ;(!gZ && gY in gQ) ||
              (gZ || (gZ = Array.prototype.slice.call(gQ, 0, gY)),
              (gZ[gY] = gQ[gY]))
          }
        }
        return gp.concat(gZ || Array.prototype.slice.call(gQ))
      }
      function V9(gp) {
        return this instanceof V9 ? ((this.v = gp), this) : new V9(gp)
      }
      var VV = Object.create
        ? function (gp, gQ) {
            Object.defineProperty(gp, 'default', {
              enumerable: true,
              value: gQ,
            })
          }
        : function (gp, gQ) {
            gp.default = gQ
          }
      u['__assign'] = V2
      u['__asyncDelegator'] = function (gp) {
        var gQ, gW
        return (
          (gQ = {}),
          gZ('next'),
          gZ('throw', function (gY) {
            throw gY
          }),
          gZ('return'),
          (gQ[Symbol.iterator] = function () {
            return this
          }),
          gQ
        )
        function gZ(gY, gI) {}
      }
      u['__asyncGenerator'] = function (gp, gQ, gW) {
        if (!Symbol.asyncIterator) {
          throw new TypeError('Symbol.asyncIterator is not defined.')
        }
        var gZ,
          gY = gW.apply(gp, gQ || []),
          gI = []
        return (
          (gZ = {}),
          gC('next'),
          gC('throw'),
          gC('return'),
          (gZ[Symbol.asyncIterator] = function () {
            return this
          }),
          gZ
        )
        function gC(h1) {
          gY[h1] &&
            (gZ[h1] = function (h2) {
              return new Promise(function (h3, h4) {
                gI.push([h1, h2, h3, h4]) > 1 || gD(h1, h2)
              })
            })
        }
        function gD(h1, h2) {
          try {
            !(function (h3) {
              h3.value instanceof V9
                ? Promise.resolve(h3.value.v).then(gB, gP)
                : h0(gI[0][2], h3)
            })(gY[h1](h2))
          } catch (h3) {
            h0(gI[0][3], h3)
          }
        }
        function gB(h1) {
          gD('next', h1)
        }
        function gP(h1) {
          gD('throw', h1)
        }
        function h0(h1, h2) {
          h1(h2)
          gI.shift()
          gI.length && gD(gI[0][0], gI[0][1])
        }
      }
      u['__asyncValues'] = function (gp) {
        if (!Symbol.asyncIterator) {
          throw new TypeError('Symbol.asyncIterator is not defined.')
        }
        var gQ,
          gW = gp[Symbol.asyncIterator]
        return gW
          ? gW.call(gp)
          : ((gp = V6(gp)),
            (gQ = {}),
            gZ('next'),
            gZ('throw'),
            gZ('return'),
            (gQ[Symbol.asyncIterator] = function () {
              return this
            }),
            gQ)
        function gZ(gY) {}
      }
      u['__await'] = V9
      u['__awaiter'] = V3
      u['__createBinding'] = V5
      u['__decorate'] = function (gp, gQ, gW, gZ) {
        var gY,
          gI = arguments.length,
          gC =
            gI < 3
              ? gQ
              : null === gZ
              ? (gZ = Object.getOwnPropertyDescriptor(gQ, gW))
              : gZ
        if (
          'object' == typeof Reflect &&
          'function' == typeof Reflect.decorate
        ) {
          gC = Reflect.decorate(gp, gQ, gW, gZ)
        } else {
          for (var gD = gp.length - 1; gD >= 0; gD--) {
            ;(gY = gp[gD]) &&
              (gC =
                (gI < 3 ? gY(gC) : gI > 3 ? gY(gQ, gW, gC) : gY(gQ, gW)) || gC)
          }
        }
        return gI > 3 && gC && Object.defineProperty(gQ, gW, gC), gC
      }
      u['__exportStar'] = function (gp, gQ) {
        for (var gW in gp)
          'default' === gW ||
            Object.prototype.hasOwnProperty.call(gQ, gW) ||
            V5(gQ, gp, gW)
      }
      u['__extends'] = V1
      u['__generator'] = V4
      u['__importDefault'] = function (gp) {
        return gp && gp['__esModule'] ? gp : { default: gp }
      }
      u['__importStar'] = function (gp) {
        if (gp && gp['__esModule']) {
          return gp
        }
        var gQ = {
          gY: gp[gY]
            ? function (gC) {
                return (gW = !gW)
                  ? {
                      value: V9(gp[gY](gC)),
                      done: false,
                    }
                  : gI
                  ? gI(gC)
                  : gC
              }
            : gI,
          gY:
            gp[gY] &&
            function (gI) {
              return new Promise(function (gC, gD) {
                !(function (gB, gP, h0, h1) {
                  Promise.resolve(h1).then(function (h2) {
                    gB({
                      value: h2,
                      done: h0,
                    })
                  }, gP)
                })(gC, gD, (gI = gp[gY](gI)).done, gI.value)
              })
            },
          gW: gp.charCodeAt(gW),
          top: 30,
          gW: arguments[gW],
          className: 'btn_content',
          response: gZ,
          response: gZ,
          response: gY,
          retry: gW + 1,
          innerHTML: VU,
          innerHTML: gp,
          onComplete: function () {
            gY()
          },
          fe: gZ,
        }
        if (null != gp) {
          for (var gW in gp)
            'default' !== gW &&
              Object.prototype.hasOwnProperty.call(gp, gW) &&
              V5(gQ, gp, gW)
        }
        return VV(gQ, gp), gQ
      }
      u['__makeTemplateObject'] = function (gp, gQ) {
        return (
          Object.defineProperty
            ? Object.defineProperty(gp, 'raw', { value: gQ })
            : (gp.raw = gQ),
          gp
        )
      }
      u['__metadata'] = function (gp, gQ) {
        if (
          'object' == typeof Reflect &&
          'function' == typeof Reflect.metadata
        ) {
          return Reflect.metadata(gp, gQ)
        }
      }
      u['__param'] = function (gp, gQ) {
        return function (gW, gZ) {
          gQ(gW, gZ, gp)
        }
      }
      u['__read'] = V7
      u['__rest'] = function (gp, gQ) {
        var gW = {
          gZ: gQ.charCodeAt(gZ),
          onended: null,
          buffer: gQ.ScratchAudioBuffer || null,
          error: V5,
          Mn: true,
          errCode: gI,
          err: gQ,
          errCode: gI,
          err: 'load resource fail',
          retry: gC + 1,
          error: gC,
          onComplete: function () {
            var gY = gQ.wi()
            gQ.yi(gY, gQ['_i']).then(function () {
              var gI = gQ.Hi()
              gQ.yi(gI, gQ.bi).then(function () {
                var gC = (function () {
                    var gP = UV.getRawEntries(),
                      h0 = { h5: f7(h2, h6) },
                      h1 = { h5: f8(h2, h6, h4) }
                    for (var h2 in gP) {
                      var h3 = gP[h2]
                      if (h3 && h3.n) {
                        var h4 = h3.n
                        if (h4['_$meta']) {
                          var h5 = h4['_$meta'].name
                          if (!f4[h5]) {
                            var h6 =
                              eZ.getPluginRegistry(h5) || Object.create(null)
                          }
                        }
                      }
                    }
                    return {
                      scripts: h0,
                      plugins: h1,
                    }
                  })(),
                  gD = gC.plugins
                for (var gB in gD)
                  gD[gB].config =
                    gQ.mi[gB] && gQ.mi[gB].config ? gQ.mi[gB].config : void 0
                gQ.onComplete && gQ.onComplete(gC)
              })
            })
          },
          response: eA.getMeta(),
          pe: void 0,
          pe: void 0,
          nr: Date.now(),
          onload: function () {
            gW.revokeObjectURL(Vm)
            gW instanceof VD && gW.parentElement.removeChild(gW)
            V4(gW)
          },
          onerror: function () {
            var gZ
            gW.revokeObjectURL(Vm)
            VD(V4)
            null === (gZ = gW.parentElement) ||
              void 0 === gZ ||
              gZ.removeChild(gW)
            VW('onerror')
          },
          gZ: gW[gY],
          gY: gI,
          className:
            'port' === Ey.getOrientationMode()
              ? 'screen_safe_area'
              : 'screen_safe_area_land',
          response: gI,
          error: gI,
          className: 'custom_button',
          className: 'ui_block_page',
          tabIndex: 0,
          se: -1,
          onload: function () {
            var gZ
            gW && (gZ = { 'content-type': VL })
            var gY = {
                status: 200,
                headers: gZ,
              },
              gI = new Response(gW.response, gY)
            VP(gI)
          },
          onerror: function () {
            gW(VL('Local request failed'))
          },
          responseType: 'blob',
          Zs: gW.resource.resolveUrl('shell-res/locale.json'),
          Qs: gW.qs('shell-res/main_res.png'),
          Ns: gW.qs('shell-game-res/splash/launch.jpg', true),
          Ds: gW.Ys(),
          Os: gW.qs('shell-res/footer.png'),
          ia: g8.concat(gI.slice(0, 1 + ~gY)),
          id: 'shell-css',
          innerHTML: gZ,
          gC: gD,
          rel: 'shortcut icon',
          id: 'favicon',
          href: this.resource.resolveUrl('shell-res/favicon.ico'),
        }
        for (var gZ in gp)
          Object.prototype.hasOwnProperty.call(gp, gZ) &&
            gQ.indexOf(gZ) < 0 &&
            (gW[gZ] = gp[gZ])
        if (null != gp && 'function' == typeof Object.getOwnPropertySymbols) {
          var gY = 0
          for (gZ = Object.getOwnPropertySymbols(gp); gY < gZ.length; gY++) {
            gQ.indexOf(gZ[gY]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(gp, gZ[gY]) &&
              (gW[gZ[gY]] = gp[gZ[gY]])
          }
        }
        return gW
      }
      u['__spread'] = function () {
        for (var gp = [], gQ = 0; gQ < arguments.length; gQ++) {
          gp = gp.concat(V7(arguments[gQ]))
        }
        return gp
      }
      u['__spreadArray'] = V8
      u['__spreadArrays'] = function () {
        for (var gp = 0, gQ = 0, gW = arguments.length; gQ < gW; gQ++) {
          gp += arguments[gQ].length
        }
        var gZ = Array(gp),
          gY = 0
        for (gQ = 0; gQ < gW; gQ++) {
          for (
            var gI = arguments[gQ], gC = 0, gD = gI.length;
            gC < gD;
            gC++, gY++
          ) {
            gZ[gY] = gI[gC]
          }
        }
        return gZ
      }
      u['__values'] = V6
      u['__classPrivateFieldGet'] = function (gp, gQ, gW, gZ) {
        if ('a' === gW && !gZ) {
          throw new TypeError('Private accessor was defined without a getter')
        }
        if ('function' == typeof gQ ? gp !== gQ || !gZ : !gQ.has(gp)) {
          throw new TypeError(
            'Cannot read private member from an object whose class did not declare it'
          )
        }
        return 'm' === gW
          ? gZ
          : 'a' === gW
          ? gZ.call(gp)
          : gZ
          ? gZ.value
          : gQ.get(gp)
      }
      u['__classPrivateFieldSet'] = function (gp, gQ, gW, gZ, gY) {
        if ('m' === gZ) {
          throw new TypeError('Private method is not writable')
        }
        if ('a' === gZ && !gY) {
          throw new TypeError('Private accessor was defined without a setter')
        }
        if ('function' == typeof gQ ? gp !== gQ || !gY : !gQ.has(gp)) {
          throw new TypeError(
            'Cannot write private member to an object whose class did not declare it'
          )
        }
        return (
          'a' === gZ ? gY.call(gp, gW) : gY ? (gY.value = gW) : gQ.set(gp, gW),
          gW
        )
      }
      var Vz =
          void 0 !== b
            ? b
            : void 0 !== E
            ? E
            : 'undefined' != typeof global
            ? global
            : void 0 !== u
            ? u
            : {},
        VH = function (gp) {
          return gp && gp.Math == Math && gp
        },
        Vb =
          VH('object' == typeof b && b) ||
          VH('object' == typeof E && E) ||
          VH('object' == typeof u && u) ||
          VH('object' == typeof Vz && Vz) ||
          (function () {
            return this
          })() ||
          Function('', 'return this')(),
        VE = {
          Error: V7,
          f: Hw
            ? Hk
            : function (gp, gQ) {
                if (((gp = Hm(gp)), (gQ = Hd(gQ)), HS)) {
                  try {
                    return Hk(gp, gQ)
                  } catch (gW) {}
                }
                if (HL(gp, gQ)) {
                  return HT(!HR(HG.f, gp, gQ), gp[gQ])
                }
              },
        },
        VK = function (gp) {
          try {
            return !!gp()
          } catch (gQ) {
            return true
          }
        },
        VU = !VK(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7
              },
            })[1]
          )
        }),
        Vy = !VK(function () {
          var gp = function () {}.bind()
          return 'function' != typeof gp || gp.hasOwnProperty('prototype')
        }),
        Vg = Vy,
        Vv = Function.prototype.call,
        Vj = Vg
          ? Vv.bind(Vv)
          : function () {
              return Vv.apply(Vv, arguments)
            },
        VF = {
          f: VX
            ? function (gp) {
                var gQ = VO(this, gp)
                return !!gQ && gQ.enumerable
              }
            : Vx,
        },
        Vx = {}.propertyIsEnumerable,
        VO = Object.getOwnPropertyDescriptor,
        VX = VO && !Vx.call({ 1: 2 }, 1)
      var VM,
        VN,
        VA = function (gp, gQ) {
          return {
            enumerable: !(1 & gp),
            configurable: !(2 & gp),
            writable: !(4 & gp),
            value: gQ,
          }
        },
        Vw = Vy,
        VR = Function.prototype,
        VG = VR.call,
        VT = Vw && VR.bind.bind(VG, VG),
        Vm = Vw
          ? VT
          : function (gp) {
              return function () {
                return VG.apply(gp, arguments)
              }
            },
        Vd = Vm,
        VL = Vd({}.toString),
        VS = Vd(''.slice),
        Vk = function (gp) {
          return VS(VL(gp), 8, -1)
        },
        VJ = VK,
        Vq = Vk,
        Vp = Object,
        VQ = Vm(''.split),
        VW = VJ(function () {
          return !Vp('z').propertyIsEnumerable(0)
        })
          ? function (gp) {
              return 'String' == Vq(gp) ? VQ(gp, '') : Vp(gp)
            }
          : Vp,
        VZ = function (gp) {
          return null == gp
        },
        VY = VZ,
        VI = TypeError,
        VC = function (gp) {
          if (VY(gp)) {
            throw VI("Can't call method on " + gp)
          }
          return gp
        },
        VD = VW,
        VB = VC,
        VP = function (gp) {
          return VD(VB(gp))
        },
        z0 = 'object' == typeof document && document.all,
        z1 = {
          all: z0,
          IS_HTMLDDA: void 0 === z0 && void 0 !== z0,
        },
        z2 = z1.all,
        z3 = z1.IS_HTMLDDA
          ? function (gp) {
              return 'function' == typeof gp || gp === z2
            }
          : function (gp) {
              return 'function' == typeof gp
            },
        z4 = z3,
        z5 = z1.all,
        z6 = z1.IS_HTMLDDA
          ? function (gp) {
              return 'object' == typeof gp ? null !== gp : z4(gp) || gp === z5
            }
          : function (gp) {
              return 'object' == typeof gp ? null !== gp : z4(gp)
            },
        z7 = Vb,
        z8 = z3,
        z9 = function (gp) {
          return z8(gp) ? gp : void 0
        },
        zV = function (gp, gQ) {
          return arguments.length < 2 ? z9(z7[gp]) : z7[gp] && z7[gp][gQ]
        },
        zz = Vm({}.isPrototypeOf),
        zH =
          ('undefined' != typeof navigator && navigator.userAgent + '') || '',
        zb = Vb,
        zE = zH,
        zK = zb.process,
        zU = zb.Deno,
        zf = (zK && zK.versions) || (zU && zU.version),
        zy = zf && zf.v8
      zy &&
        (VN = (VM = zy.split('.'))[0] > 0 && VM[0] < 4 ? 1 : +(VM[0] + VM[1]))
      !VN &&
        zE &&
        (!(VM = zE.match(/Edge\/(\d+)/)) || VM[1] >= 74) &&
        (VM = zE.match(/Chrome\/(\d+)/)) &&
        (VN = +VM[1])
      var zg = VN,
        zv =
          !!Object.getOwnPropertySymbols &&
          !VK(function () {
            var gp = Symbol()
            return (
              !(gp + '') ||
              !(Object(gp) instanceof Symbol) ||
              (!Symbol.sham && zg && zg < 41)
            )
          }),
        zj = zv && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
        zF = zV,
        zx = z3,
        zO = zz,
        zX = Object,
        zM = zj
          ? function (gp) {
              return 'symbol' == typeof gp
            }
          : function (gp) {
              var gQ = zF('Symbol')
              return zx(gQ) && zO(gQ.prototype, zX(gp))
            },
        zN = String,
        zA = z3,
        zw = TypeError,
        zR = function (gp) {
          if (zA(gp)) {
            return gp
          }
          throw zw(
            (function (gQ) {
              try {
                return zN(gQ)
              } catch (gW) {
                return 'Object'
              }
            })(gp) + ' is not a function'
          )
        },
        zG = VZ,
        zT = Vj,
        zm = z3,
        zd = z6,
        zL = TypeError,
        zS = {},
        zk = {
          get exports() {
            return zS
          },
          set exports(gp) {
            zS = gp
          },
        },
        zJ = Vb,
        zq = Object.defineProperty,
        zp = function (gp, gQ) {
          try {
            zq(zJ, gp, {
              value: gQ,
              configurable: true,
              writable: true,
            })
          } catch (gW) {
            zJ[gp] = gQ
          }
          return gQ
        },
        zQ = zp,
        zW = '__core-js_shared__',
        zZ = Vb[zW] || zQ(zW, {}),
        zY = zZ
      ;(zk.exports = function (gp, gQ) {
        return zY[gp] || (zY[gp] = void 0 !== gQ ? gQ : {})
      })('versions', []).push({
        version: '3.29.1',
        mode: 'global',
        copyright: '\xA9 2014-2023 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE',
        source: 'https://github.com/zloirock/core-js',
      })
      var zI = VC,
        zC = Object,
        zD = Vm({}.hasOwnProperty),
        zB =
          Object.hasOwn ||
          function (gp, gQ) {
            return zD(zC(zI(gp)), gQ)
          },
        zP = Vm,
        H0 = 0,
        H1 = Math.random(),
        H2 = zP((1).toString),
        H3 = function (gp) {
          return (
            'Symbol(' + (void 0 === gp ? '' : gp) + ')_' + H2(++H0 + H1, 36)
          )
        },
        H4 = zS,
        H5 = zB,
        H6 = H3,
        H7 = zv,
        H8 = zj,
        H9 = Vb.Symbol,
        HV = H4('wks'),
        HH = H8 ? H9.for || H9 : (H9 && H9.withoutSetter) || H6,
        Hb = function (gp) {
          return (
            H5(HV, gp) ||
              (HV[gp] = H7 && H5(H9, gp) ? H9[gp] : HH('Symbol.' + gp)),
            HV[gp]
          )
        },
        HE = Vj,
        HK = z6,
        HU = zM,
        Hy = TypeError,
        Hg = Hb('toPrimitive'),
        Hv = function (gp, gQ) {
          if (!HK(gp) || HU(gp)) {
            return gp
          }
          var gW,
            gZ = (function (gY, gI) {
              var gC = gY[gI]
              return zG(gC) ? void 0 : zR(gC)
            })(gp, Hg)
          if (gZ) {
            if (
              (void 0 === gQ && (gQ = 'default'),
              (gW = HE(gZ, gp, gQ)),
              !HK(gW) || HU(gW))
            ) {
              return gW
            }
            throw Hy("Can't convert object to primitive value")
          }
          return (
            void 0 === gQ && (gQ = 'number'),
            (function (gY, gI) {
              var gC, gD
              if (
                'string' === gI &&
                zm((gC = gY.toString)) &&
                !zd((gD = zT(gC, gY)))
              ) {
                return gD
              }
              if (zm((gC = gY.valueOf)) && !zd((gD = zT(gC, gY)))) {
                return gD
              }
              if (
                'string' !== gI &&
                zm((gC = gY.toString)) &&
                !zd((gD = zT(gC, gY)))
              ) {
                return gD
              }
              throw zL("Can't convert object to primitive value")
            })(gp, gQ)
          )
        },
        Hj = zM,
        HF = function (gp) {
          var gQ = Hv(gp, 'string')
          return Hj(gQ) ? gQ : gQ + ''
        },
        Hx = z6,
        HO = Vb.document,
        HX = Hx(HO) && Hx(HO.createElement),
        HM = function (gp) {
          return HX ? HO.createElement(gp) : {}
        },
        HN = HM,
        HA =
          !VU &&
          !VK(function () {
            return (
              7 !=
              Object.defineProperty(HN('div'), 'a', {
                get: function () {
                  return 7
                },
              }).a
            )
          }),
        Hw = VU,
        HR = Vj,
        HG = VF,
        HT = VA,
        Hm = VP,
        Hd = HF,
        HL = zB,
        HS = HA,
        Hk = Object.getOwnPropertyDescriptor
      var HJ = {
          f: HY
            ? HC
              ? function (gp, gQ, gW) {
                  if (
                    (HD(gp),
                    (gQ = HB(gQ)),
                    HD(gW),
                    'function' == typeof gp &&
                      'prototype' === gQ &&
                      'value' in gW &&
                      c4 in gW &&
                      !gW[c4])
                  ) {
                    var gZ = c1(gp, gQ)
                    gZ &&
                      gZ[c4] &&
                      ((gp[gQ] = gW.value),
                      (gW = {
                        configurable: c3 in gW ? gW[c3] : gZ[c3],
                        enumerable: c2 in gW ? gW[c2] : gZ[c2],
                        writable: false,
                      }))
                  }
                  return c0(gp, gQ, gW)
                }
              : c0
            : function (gp, gQ, gW) {
                if ((HD(gp), (gQ = HB(gQ)), HD(gW), HI)) {
                  try {
                    return c0(gp, gQ, gW)
                  } catch (gZ) {}
                }
                if ('get' in gW || 'set' in gW) {
                  throw HP('Accessors not supported')
                }
                return 'value' in gW && (gp[gQ] = gW.value), gp
              },
        },
        Hq =
          VU &&
          VK(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: false,
              }).prototype
            )
          }),
        Hp = z6,
        HQ = String,
        HW = TypeError,
        HZ = function (gp) {
          if (Hp(gp)) {
            return gp
          }
          throw HW(HQ(gp) + ' is not an object')
        },
        HY = VU,
        HI = HA,
        HC = Hq,
        HD = HZ,
        HB = HF,
        HP = TypeError,
        c0 = Object.defineProperty,
        c1 = Object.getOwnPropertyDescriptor,
        c2 = 'enumerable',
        c3 = 'configurable',
        c4 = 'writable'
      var c5 = HJ,
        c6 = VA,
        c7 = VU
          ? function (gp, gQ, gW) {
              return c5.f(gp, gQ, c6(1, gW))
            }
          : function (gp, gQ, gW) {
              return (gp[gQ] = gW), gp
            },
        c8 = {},
        c9 = {
          get exports() {
            return c8
          },
          set exports(gp) {
            c8 = gp
          },
        },
        cV = VU,
        cz = Function.prototype,
        cH = cV && Object.getOwnPropertyDescriptor,
        cb = zB(cz, 'name'),
        cE = {
          EXISTS: cb,
          PROPER: cb && false,
          CONFIGURABLE: cb && (!cV || (cV && cH(cz, 'name').configurable)),
        },
        cK = z3,
        cU = zZ,
        cy = Vm(Function.toString)
      cK(cU.inspectSource) ||
        (cU.inspectSource = function (gp) {
          return cy(gp)
        })
      var cg,
        cv,
        cj,
        cF = cU.inspectSource,
        cx = z3,
        cO = Vb.WeakMap,
        cX = cx(cO) && /native code/.test(cO + ''),
        cM = H3,
        cN = zS('keys'),
        cA = function (gp) {
          return cN[gp] || (cN[gp] = cM(gp))
        },
        cw = {},
        cR = cX,
        cG = Vb,
        cT = z6,
        cm = c7,
        cd = zB,
        cL = zZ,
        cS = cA,
        ck = cw,
        cJ = 'Object already initialized',
        cq = cG.TypeError,
        cp = cG.WeakMap
      if (cR || cL.state) {
        var cQ = cL.state || (cL.state = new cp())
        cQ.get = cQ.get
        cQ.has = cQ.has
        cQ.set = cQ.set
        cg = function (gp, gQ) {
          if (cQ.has(gp)) {
            throw cq(cJ)
          }
          return (gQ.facade = gp), cQ.set(gp, gQ), gQ
        }
        cv = function (gp) {
          return cQ.get(gp) || {}
        }
        cj = function (gp) {
          return cQ.has(gp)
        }
      } else {
        var cW = cS('state')
        ck[cW] = true
        cg = function (gp, gQ) {
          if (cd(gp, cW)) {
            throw cq(cJ)
          }
          return (gQ.facade = gp), cm(gp, cW, gQ), gQ
        }
        cv = function (gp) {
          return cd(gp, cW) ? gp[cW] : {}
        }
        cj = function (gp) {
          return cd(gp, cW)
        }
      }
      var cZ = {
          set: cg,
          get: cv,
          has: cj,
          enforce: function (gp) {
            return cj(gp) ? cv(gp) : cg(gp, {})
          },
          getterFor: function (gp) {
            return function (gQ) {
              var gW
              if (!cT(gQ) || (gW = cv(gQ)).type !== gp) {
                throw cq('Incompatible receiver, ' + gp + ' required')
              }
              return gW
            }
          },
        },
        cY = Vm,
        cI = VK,
        cC = z3,
        cD = zB,
        cB = VU,
        cP = cE.CONFIGURABLE,
        r0 = cF,
        r1 = cZ.enforce,
        r2 = cZ.get,
        r3 = String,
        r4 = Object.defineProperty,
        r5 = cY(''.slice),
        r6 = cY(''.replace),
        r7 = cY([].join),
        r8 =
          cB &&
          !cI(function () {
            return 8 !== r4(function () {}, 'length', { value: 8 }).length
          }),
        r9 = (String + '').split('String'),
        rV = (c9.exports = function (gp, gQ, gW) {
          'Symbol(' === r5(r3(gQ), 0, 7) &&
            (gQ = '[' + r6(r3(gQ), /^Symbol\(([^)]*)\)/, '$1') + ']')
          gW && gW.getter && (gQ = 'get ' + gQ)
          gW && gW.setter && (gQ = 'set ' + gQ)
          ;(!cD(gp, 'name') || (cP && gp.name !== gQ)) &&
            (cB
              ? r4(gp, 'name', {
                  value: gQ,
                  configurable: true,
                })
              : (gp.name = gQ))
          r8 &&
            gW &&
            cD(gW, 'arity') &&
            gp.length !== gW.arity &&
            r4(gp, 'length', { value: gW.arity })
          try {
            gW && cD(gW, 'constructor') && gW.constructor
              ? cB && r4(gp, 'prototype', { writable: false })
              : gp.prototype && (gp.prototype = void 0)
          } catch (gY) {}
          var gZ = r1(gp)
          return (
            cD(gZ, 'source') ||
              (gZ.source = r7(r9, 'string' == typeof gQ ? gQ : '')),
            gp
          )
        })
      Function.prototype.toString = rV(function () {
        return (cC(this) && r2(this).source) || r0(this)
      }, 'toString')
      var rz = z3,
        rH = HJ,
        rb = c8,
        rE = zp,
        rK = {
          f:
            Object.getOwnPropertyNames ||
            function (gp) {
              return rq(gp, rp)
            },
        },
        rU = Math.ceil,
        ry = Math.floor,
        rg =
          Math.trunc ||
          function (gp) {
            var gQ = +gp
            return (gQ > 0 ? ry : rU)(gQ)
          },
        rv = rg,
        rj = function (gp) {
          var gQ = +gp
          return gQ != gQ || 0 === gQ ? 0 : rv(gQ)
        },
        rF = rj,
        rx = Math.max,
        rO = Math.min,
        rX = rj,
        rM = Math.min,
        rN = function (gp) {
          return gp > 0 ? rM(rX(gp), 9007199254740991) : 0
        },
        rA = rN,
        rw = VP,
        rR = function (gp) {
          return function (gQ, gW, gZ) {
            var gY,
              gI = rw(gQ),
              gC = rA(gI.length),
              gD = (function (gB, gP) {
                var h0 = rF(gB)
                return h0 < 0 ? rx(h0 + gP, 0) : rO(h0, gP)
              })(gZ, gC)
            if (gp && gW != gW) {
              for (; gC > gD; ) {
                if ((gY = gI[gD++]) != gY) {
                  return true
                }
              }
            } else {
              for (; gC > gD; gD++) {
                if ((gp || gD in gI) && gI[gD] === gW) {
                  return gp || gD || 0
                }
              }
            }
            return !gp && -1
          }
        },
        rG = {
          includes: rR(true),
          indexOf: rR(false),
        },
        rT = zB,
        rm = VP,
        rd = rG.indexOf,
        rL = cw,
        rS = Vm([].push),
        rk = function (gp, gQ) {
          var gW,
            gZ = rm(gp),
            gY = 0,
            gI = []
          for (gW in gZ) !rT(rL, gW) && rT(gZ, gW) && rS(gI, gW)
          for (; gQ.length > gY; ) {
            rT(gZ, (gW = gQ[gY++])) && (~rd(gI, gW) || rS(gI, gW))
          }
          return gI
        },
        rJ = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ],
        rq = rk,
        rp = rJ.concat('length', 'prototype')
      var rQ = { f: Object.getOwnPropertySymbols }
      var rW = zV,
        rZ = rK,
        rY = rQ,
        rI = HZ,
        rC = Vm([].concat),
        rD =
          rW('Reflect', 'ownKeys') ||
          function (gp) {
            var gQ = rZ.f(rI(gp)),
              gW = rY.f
            return gW ? rC(gQ, gW(gp)) : gQ
          },
        rB = zB,
        rP = rD,
        b0 = VE,
        b1 = HJ,
        b2 = VK,
        b3 = z3,
        b5 = function (gp, gQ) {
          var gW = b7[b6(gp)]
          return gW == b9 || (gW != b8 && (b3(gQ) ? b2(gQ) : !!gQ))
        },
        b6 = (b5.normalize = function (gp) {
          return (gp + '').replace(/#|\.prototype\./, '.').toLowerCase()
        }),
        b7 = (b5.data = {}),
        b8 = (b5.NATIVE = 'N'),
        b9 = (b5.POLYFILL = 'P'),
        bV = b5,
        bz = Vb,
        bH = VE.f,
        bb = c7,
        bE = function (gp, gQ, gW, gZ) {
          gZ || (gZ = {})
          var gY = gZ.enumerable,
            gI = void 0 !== gZ.name ? gZ.name : gQ
          if ((rz(gW) && rb(gW, gI, gZ), gZ.global)) {
            gY ? (gp[gQ] = gW) : rE(gQ, gW)
          } else {
            try {
              gZ.unsafe ? gp[gQ] && (gY = true) : delete gp[gQ]
            } catch (gC) {}
            gY
              ? (gp[gQ] = gW)
              : rH.f(gp, gQ, {
                  value: gW,
                  enumerable: false,
                  configurable: !gZ.nonConfigurable,
                  writable: !gZ.nonWritable,
                })
          }
          return gp
        },
        bK = zp,
        bU = function (gp, gQ, gW) {
          for (
            var gZ = rP(gQ), gY = b1.f, gI = b0.f, gC = 0;
            gC < gZ.length;
            gC++
          ) {
            var gD = gZ[gC]
            rB(gp, gD) || (gW && rB(gW, gD)) || gY(gp, gD, gI(gQ, gD))
          }
        },
        by = bV,
        bg = function (gp, gQ) {
          var gW,
            gZ,
            gY,
            gI,
            gC,
            gD = gp.target,
            gB = gp.global,
            gP = gp.stat
          if (
            (gW = gB
              ? bz
              : gP
              ? bz[gD] || bK(gD, {})
              : (bz[gD] || {}).prototype)
          ) {
            for (gZ in gQ) {
              if (
                ((gI = gQ[gZ]),
                (gY = gp.dontCallGetSet
                  ? (gC = bH(gW, gZ)) && gC.value
                  : gW[gZ]),
                !by(gB ? gZ : gD + (gP ? '.' : '#') + gZ, gp.forced) &&
                  void 0 !== gY)
              ) {
                if (typeof gI == typeof gY) {
                  continue
                }
                bU(gI, gY)
              }
              ;(gp.sham || (gY && gY.sham)) && bb(gI, 'sham', true)
              bE(gW, gZ, gI, gp)
            }
          }
        },
        bv = {
          f:
            bO && !bX
              ? Object.defineProperties
              : function (gp, gQ) {
                  bN(gp)
                  for (
                    var gW, gZ = bA(gQ), gY = bw(gQ), gI = gY.length, gC = 0;
                    gI > gC;

                  ) {
                    bM.f(gp, (gW = gY[gC++]), gZ[gW])
                  }
                  return gp
                },
        },
        bj = rk,
        bF = rJ,
        bx =
          Object.keys ||
          function (gp) {
            return bj(gp, bF)
          },
        bO = VU,
        bX = Hq,
        bM = HJ,
        bN = HZ,
        bA = VP,
        bw = bx
      var bR,
        bG = zV('document', 'documentElement'),
        bT = HZ,
        bm = bv,
        bd = rJ,
        bL = cw,
        bS = bG,
        bk = HM,
        bJ = 'prototype',
        bq = 'script',
        bp = cA('IE_PROTO'),
        bQ = function () {},
        bW = function (gp) {
          return '<' + bq + '>' + gp + '</' + bq + '>'
        },
        bZ = function (gp) {
          gp.write(bW(''))
          gp.close()
          var gQ = gp.parentWindow.Object
          return (gp = null), gQ
        },
        bY = function () {
          try {
            bR = new ActiveXObject('htmlfile')
          } catch (gY) {}
          var gp, gQ, gW
          bY =
            'undefined' != typeof document
              ? document.domain && bR
                ? bZ(bR)
                : ((gQ = bk('iframe')),
                  (gW = 'java' + bq + ':'),
                  (gQ.style.display = 'none'),
                  bS.appendChild(gQ),
                  (gQ.src = gW + ''),
                  (gp = gQ.contentWindow.document).open(),
                  gp.write(bW('document.F=Object')),
                  gp.close(),
                  gp.F)
              : bZ(bR)
          for (var gZ = bd.length; gZ--; ) {
            delete bY[bJ][bd[gZ]]
          }
          return bY()
        }
      bL[bp] = true
      var bI = Hb,
        bC =
          Object.create ||
          function (gp, gQ) {
            var gW
            return (
              null !== gp
                ? ((bQ[bJ] = bT(gp)),
                  (gW = new bQ()),
                  (bQ[bJ] = null),
                  (gW[bp] = gp))
                : (gW = bY()),
              void 0 === gQ ? gW : bm.f(gW, gQ)
            )
          },
        bD = HJ.f,
        bB = bI('unscopables'),
        bP = Array.prototype
      null == bP[bB] &&
        bD(bP, bB, {
          configurable: true,
          value: bC(null),
        })
      var n0,
        n1 = rG.includes
      bg(
        {
          target: 'Array',
          proto: true,
          forced: VK(function () {
            return ![,].includes()
          }),
        },
        {
          includes: function (gp) {
            return n1(this, gp, arguments.length > 1 ? arguments[1] : void 0)
          },
        }
      )
      n0 = 'includes'
      bP[bB][n0] = true
      var n2 = Vb,
        n3 = Vm,
        n4 = function (gp, gQ) {
          return n3(n2[gp].prototype[gQ])
        }
      n4('Array', 'includes')
      var n5 = {}
      n5[Hb('toStringTag')] = 'z'
      var n6 = n5 + '' == '[object z]',
        n7 = z3,
        n8 = Vk,
        n9 = Hb('toStringTag'),
        nV = Object,
        nz =
          'Arguments' ==
          n8(
            (function () {
              return arguments
            })()
          ),
        nH = n6
          ? n8
          : function (gp) {
              var gQ, gW, gZ
              return void 0 === gp
                ? 'Undefined'
                : null === gp
                ? 'Null'
                : 'string' ==
                  typeof (gW = (function (gY, gI) {
                    try {
                      return gY[gI]
                    } catch (gC) {}
                  })((gQ = nV(gp)), n9))
                ? gW
                : nz
                ? n8(gQ)
                : 'Object' == (gZ = n8(gQ)) && n7(gQ.callee)
                ? 'Arguments'
                : gZ
            },
        nb = String,
        nE = function (gp) {
          if ('Symbol' === nH(gp)) {
            throw TypeError('Cannot convert a Symbol value to a string')
          }
          return nb(gp)
        },
        nK = rj,
        nU = nE,
        ny = VC,
        ng = RangeError,
        nv = Vm,
        nj = rN,
        nF = nE,
        nx = VC,
        nO = nv(function (gp) {
          var gQ = nU(ny(this)),
            gW = '',
            gZ = nK(gp)
          if (gZ < 0 || gZ == 1e400) {
            throw ng('Wrong number of repetitions')
          }
          for (; gZ > 0; (gZ >>>= 1) && (gQ += gQ)) {
            1 & gZ && (gW += gQ)
          }
          return gW
        }),
        nX = nv(''.slice),
        nM = Math.ceil,
        nN = function (gp) {
          return function (gQ, gW, gZ) {
            var gY,
              gI,
              gC = nF(nx(gQ)),
              gD = nj(gW),
              gB = gC.length,
              gP = void 0 === gZ ? ' ' : nF(gZ)
            return gD <= gB || '' == gP
              ? gC
              : ((gI = nO(gP, nM((gY = gD - gB) / gP.length))).length > gY &&
                  (gI = nX(gI, 0, gY)),
                gp ? gC + gI : gI + gC)
          }
        },
        nA = {
          start: nN(false),
          end: nN(true),
        },
        io =
          /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
            zH
          ),
        nw = nA.start
      bg(
        {
          target: 'String',
          proto: true,
          forced: io,
        },
        {
          padStart: function (gp) {
            return nw(this, gp, arguments.length > 1 ? arguments[1] : void 0)
          },
        }
      )
      n4('String', 'padStart')
      var nR = nA.end
      bg(
        {
          target: 'String',
          proto: true,
          forced: io,
        },
        {
          padEnd: function (gp) {
            return nR(this, gp, arguments.length > 1 ? arguments[1] : void 0)
          },
        }
      )
      n4('String', 'padEnd')
      var nG = VU,
        nT = Vm,
        nm = bx,
        nd = VP,
        nL = nT(VF.f),
        nS = nT([].push),
        nk = function (gp) {
          return function (gQ) {
            for (
              var gW, gZ = nd(gQ), gY = nm(gZ), gI = gY.length, gC = 0, gD = [];
              gI > gC;

            ) {
              gW = gY[gC++]
              ;(nG && !nL(gZ, gW)) || nS(gD, gp ? [gW, gZ[gW]] : gZ[gW])
            }
            return gD
          }
        },
        nJ = {
          entries: nk(true),
          values: nk(false),
        },
        nq = nJ.values
      bg(
        {
          target: 'Object',
          stat: true,
        },
        {
          values: function (gp) {
            return nq(gp)
          },
        }
      )
      var np = Vb
      np.Object.values
      var nQ = nJ.entries
      bg(
        {
          target: 'Object',
          stat: true,
        },
        {
          entries: function (gp) {
            return nQ(gp)
          },
        }
      )
      np.Object.entries
      var nW = HF,
        nZ = HJ,
        nY = VA,
        nI = rD,
        nC = VP,
        nD = VE,
        nB = function (gp, gQ, gW) {
          var gZ = nW(gQ)
          gZ in gp ? nZ.f(gp, gZ, nY(0, gW)) : (gp[gZ] = gW)
        }
      bg(
        {
          target: 'Object',
          stat: true,
          sham: !VU,
        },
        {
          getOwnPropertyDescriptors: function (gp) {
            for (
              var gQ,
                gW,
                gZ = nC(gp),
                gY = nD.f,
                gI = nI(gZ),
                gC = {
                  label: h0[1],
                  label: gY[1],
                  label: gY[2],
                  className: 'top-highlight',
                  l: 'self',
                  responseCb: gY,
                  className: 'custom-progress-bar-background',
                  src: V5,
                  type: 'video/'.concat(VM),
                },
                gD = 0;
              gI.length > gD;

            ) {
              void 0 !== (gW = gY(gZ, (gQ = gI[gD++]))) && nB(gC, gQ, gW)
            }
            return gC
          },
        }
      )
      np.Object.getOwnPropertyDescriptors
      var nP,
        u0,
        u1 = {},
        u2 = {
          get exports() {
            return u1
          },
          set exports(gp) {
            u1 = gp
          },
        }
      nP = u2
      u0 = u1
      ;(function (gp, gQ) {
        var gW = 'function',
          gZ = 'object',
          gY = 'string',
          gI = 'model',
          gC = 'name',
          gD = 'type',
          gB = 'vendor',
          gP = 'version',
          h0 = 'architecture',
          h1 = 'console',
          h2 = 'mobile',
          h3 = 'tablet',
          h4 = 'smarttv',
          h5 = 'wearable',
          h6 = 'embedded',
          h7 = {
            extend: function (hE, hK) {
              var hU = {}
              for (var hy in hE)
                hK[hy] && hK[hy].length % 2 == 0
                  ? (hU[hy] = hK[hy].concat(hE[hy]))
                  : (hU[hy] = hE[hy])
              return hU
            },
            has: function (hE, hK) {
              return (
                typeof hE === gY &&
                -1 !== hK.toLowerCase().indexOf(hE.toLowerCase())
              )
            },
            lowerize: function (hE) {
              return hE.toLowerCase()
            },
            major: function (hE) {
              return typeof hE === gY
                ? hE.replace(/[^\d\.]/g, '').split('.')[0]
                : gQ
            },
            trim: function (hE, hK) {
              return (
                (hE = hE.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
                void 0 === hK ? hE : hE.substring(0, 255)
              )
            },
          },
          h8 = {
            rgx: function (hE, hK) {
              for (
                var hU, hy, hg, hv, hj, hF, hx = 0;
                hx < hK.length && !hj;

              ) {
                var hO = hK[hx],
                  hX = hK[hx + 1]
                for (hU = hy = 0; hU < hO.length && !hj; ) {
                  if ((hj = hO[hU++].exec(hE))) {
                    for (hg = 0; hg < hX.length; hg++) {
                      hF = hj[++hy]
                      typeof (hv = hX[hg]) === gZ && hv.length > 0
                        ? 2 == hv.length
                          ? typeof hv[1] == gW
                            ? (this[hv[0]] = hv[1].call(this, hF))
                            : (this[hv[0]] = hv[1])
                          : 3 == hv.length
                          ? typeof hv[1] !== gW || (hv[1].exec && hv[1].test)
                            ? (this[hv[0]] = hF ? hF.replace(hv[1], hv[2]) : gQ)
                            : (this[hv[0]] = hF
                                ? hv[1].call(this, hF, hv[2])
                                : gQ)
                          : 4 == hv.length &&
                            (this[hv[0]] = hF
                              ? hv[3].call(this, hF.replace(hv[1], hv[2]))
                              : gQ)
                        : (this[hv] = hF || gQ)
                    }
                  }
                }
                hx += 2
              }
            },
            str: function (hE, hK) {
              for (var hU in hK)
                if (typeof hK[hU] === gZ && hK[hU].length > 0) {
                  for (var hy = 0; hy < hK[hU].length; hy++) {
                    if (h7.has(hK[hU][hy], hE)) {
                      return '?' === hU ? gQ : hU
                    }
                  }
                } else {
                  if (h7.has(hK[hU], hE)) {
                    return '?' === hU ? gQ : hU
                  }
                }
              return hE
            },
          },
          h9 = {
            browser: {
              oldSafari: {
                version: {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/',
                },
              },
              oldEdge: {
                version: {
                  0.1: '12.',
                  21: '13.',
                  31: '14.',
                  39: '15.',
                  41: '16.',
                  42: '17.',
                  44: '18.',
                },
              },
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2000: 'NT 5.0',
                  XP: ['NT 5.1', 'NT 5.2'],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: ['NT 6.4', 'NT 10.0'],
                  RT: 'ARM',
                },
              },
            },
          },
          hV = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [gP, [gC, 'Chrome']],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [gP, [gC, 'Edge']],
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,
                /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,
              ],
              [gC, gP],
              [/opios[\/\s]+([\w\.]+)/i],
              [gP, [gC, 'Opera Mini']],
              [/\sopr\/([\w\.]+)/i],
              [gP, [gC, 'Opera']],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [gC, gP],
              [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [gP, [gC, 'UCBrowser']],
              [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
              [gP, [gC, 'WeChat(Win) Desktop']],
              [/micromessenger\/([\w\.]+)/i],
              [gP, [gC, 'WeChat']],
              [/konqueror\/([\w\.]+)/i],
              [gP, [gC, 'Konqueror']],
              [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
              [gP, [gC, 'IE']],
              [/yabrowser\/([\w\.]+)/i],
              [gP, [gC, 'Yandex']],
              [/(avast|avg)\/([\w\.]+)/i],
              [[gC, /(.+)/, '$1 Secure Browser'], gP],
              [/focus\/([\w\.]+)/i],
              [gP, [gC, 'Firefox Focus']],
              [/opt\/([\w\.]+)/i],
              [gP, [gC, 'Opera Touch']],
              [/coc_coc_browser\/([\w\.]+)/i],
              [gP, [gC, 'Coc Coc']],
              [/dolfin\/([\w\.]+)/i],
              [gP, [gC, 'Dolphin']],
              [/coast\/([\w\.]+)/i],
              [gP, [gC, 'Opera Coast']],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [gP, [gC, 'MIUI Browser']],
              [/fxios\/([\w\.-]+)/i],
              [gP, [gC, 'Firefox']],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[gC, '360 Browser']],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [[gC, /(.+)/, '$1 Browser'], gP],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[gC, /_/g, ' '], gP],
              [
                /\s(electron)\/([\w\.]+)\ssafari/i,
                /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i,
              ],
              [gC, gP],
              [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
              [gC],
              [/;fbav\/([\w\.]+);/i],
              [gP, [gC, 'Facebook']],
              [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
              [[gC, 'Facebook']],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/\s]([\w\.-]+)/i,
              ],
              [gC, gP],
              [/\bgsa\/([\w\.]+)\s.*safari\//i],
              [gP, [gC, 'GSA']],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [gP, [gC, 'Chrome Headless']],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[gC, 'Chrome WebView'], gP],
              [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
              [gP, [gC, 'Android Browser']],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [gC, gP],
              [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
              [gP, [gC, 'Mobile Safari']],
              [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
              [gP, gC],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [gC, [gP, h8.str, h9.browser.oldSafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [gC, gP],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[gC, 'Netscape'], gP],
              [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
              [gP, [gC, 'Firefox Reality']],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [gC, gP],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [[h0, 'amd64']],
              [/(ia32(?=;))/i],
              [[h0, h7.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[h0, 'ia32']],
              [/\b(aarch64|armv?8e?l?)\b/i],
              [[h0, 'arm64']],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[h0, 'armhf']],
              [/windows\s(ce|mobile);\sppc;/i],
              [[h0, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [[h0, /ower/, '', h7.lowerize]],
              [/(sun4\w)[;\)]/i],
              [[h0, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[h0, h7.lowerize]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i,
              ],
              [gI, [gB, 'Samsung'], [gD, h3]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
                /\ssamsung[\s-]([\w-]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [gI, [gB, 'Samsung'], [gD, h2]],
              [/\((ip(?:hone|od)[\s\w]*);/i],
              [gI, [gB, 'Apple'], [gD, h2]],
              [
                /\((ipad);[\w\s\),;-]+apple/i,
                /applecoremedia\/[\w\.]+\s\((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [gI, [gB, 'Apple'], [gD, h3]],
              [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
              [gI, [gB, 'Huawei'], [gD, h3]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
                /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i,
              ],
              [gI, [gB, 'Huawei'], [gD, h2]],
              [
                /\b(poco[\s\w]+)(?:\sbuild|\))/i,
                /\b;\s(\w+)\sbuild\/hm\1/i,
                /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
                /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
              ],
              [
                [gI, /_/g, ' '],
                [gB, 'Xiaomi'],
                [gD, h2],
              ],
              [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
              [
                [gI, /_/g, ' '],
                [gB, 'Xiaomi'],
                [gD, h3],
              ],
              [
                /;\s(\w+)\sbuild.+\soppo/i,
                /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
              ],
              [gI, [gB, 'OPPO'], [gD, h2]],
              [
                /\svivo\s(\w+)(?:\sbuild|\))/i,
                /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i,
              ],
              [gI, [gB, 'Vivo'], [gD, h2]],
              [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
              [gI, [gB, 'Realme'], [gD, h2]],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
                /\smot(?:orola)?[\s-](\w*)/i,
                /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i,
              ],
              [gI, [gB, 'Motorola'], [gD, h2]],
              [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [gI, [gB, 'Motorola'], [gD, h3]],
              [
                /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i,
              ],
              [gI, [gB, 'LG'], [gD, h3]],
              [
                /(lm-?f100[nv]?|nexus\s[45])/i,
                /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
                /\blg(\-?[\d\w]+)\sbuild/i,
              ],
              [gI, [gB, 'LG'], [gD, h2]],
              [
                /(ideatab[\w\-\s]+)/i,
                /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i,
              ],
              [gI, [gB, 'Lenovo'], [gD, h3]],
              [
                /(?:maemo|nokia).*(n900|lumia\s\d+)/i,
                /nokia[\s_-]?([\w\.-]*)/i,
              ],
              [
                [gI, /_/g, ' '],
                [gB, 'Nokia'],
                [gD, h2],
              ],
              [/droid.+;\s(pixel\sc)[\s)]/i],
              [gI, [gB, 'Google'], [gD, h3]],
              [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
              [gI, [gB, 'Google'], [gD, h2]],
              [
                /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [gI, [gB, 'Sony'], [gD, h2]],
              [
                /sony\stablet\s[ps]\sbuild\//i,
                /(?:sony)?sgp\w+(?:\sbuild\/|\))/i,
              ],
              [
                [gI, 'Xperia Tablet'],
                [gB, 'Sony'],
                [gD, h3],
              ],
              [
                /\s(kb2005|in20[12]5|be20[12][59])\b/i,
                /\ba000(1)\sbuild/i,
                /\boneplus\s(a\d{4})[\s)]/i,
              ],
              [gI, [gB, 'OnePlus'], [gD, h2]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)(\sbuild\/|\))/i,
                /(kf[a-z]+)(\sbuild\/|\)).+silk\//i,
              ],
              [gI, [gB, 'Amazon'], [gD, h3]],
              [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
              [
                [gI, 'Fire Phone'],
                [gB, 'Amazon'],
                [gD, h2],
              ],
              [/\((playbook);[\w\s\),;-]+(rim)/i],
              [gI, gB, [gD, h3]],
              [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
              [gI, [gB, 'BlackBerry'], [gD, h2]],
              [
                /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i,
              ],
              [gI, [gB, 'ASUS'], [gD, h3]],
              [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
              [gI, [gB, 'ASUS'], [gD, h2]],
              [/(nexus\s9)/i],
              [gI, [gB, 'HTC'], [gD, h3]],
              [
                /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [gB, [gI, /_/g, ' '], [gD, h2]],
              [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [gI, [gB, 'Acer'], [gD, h3]],
              [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
              [gI, [gB, 'Meizu'], [gD, h2]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft);\s(lumia[\s\w]+)/i,
                /(lenovo)[_\s-]?([\w-]+)/i,
                /linux;.+(jolla);/i,
                /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
              ],
              [gB, gI, [gD, h2]],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
                /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
                /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
                /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
              ],
              [gB, gI, [gD, h3]],
              [/\s(surface\sduo)\s/i],
              [gI, [gB, 'Microsoft'], [gD, h3]],
              [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
              [gI, [gB, 'Fairphone'], [gD, h2]],
              [/\s(u304aa)\sbuild/i],
              [gI, [gB, 'AT&T'], [gD, h2]],
              [/sie-(\w*)/i],
              [gI, [gB, 'Siemens'], [gD, h2]],
              [/[;\/]\s?(rct\w+)\sbuild/i],
              [gI, [gB, 'RCA'], [gD, h3]],
              [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
              [gI, [gB, 'Dell'], [gD, h3]],
              [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
              [gI, [gB, 'Verizon'], [gD, h3]],
              [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
              [gI, [gB, 'Barnes & Noble'], [gD, h3]],
              [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
              [gI, [gB, 'NuVision'], [gD, h3]],
              [/;\s(k88)\sbuild/i],
              [gI, [gB, 'ZTE'], [gD, h3]],
              [/;\s(nx\d{3}j)\sbuild/i],
              [gI, [gB, 'ZTE'], [gD, h2]],
              [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
              [gI, [gB, 'Swiss'], [gD, h2]],
              [/[;\/]\s?(zur\d{3})\sbuild/i],
              [gI, [gB, 'Swiss'], [gD, h3]],
              [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
              [gI, [gB, 'Zeki'], [gD, h3]],
              [
                /[;\/]\s([yr]\d{2})\sbuild/i,
                /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i,
              ],
              [[gB, 'Dragon Touch'], gI, [gD, h3]],
              [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
              [gI, [gB, 'Insignia'], [gD, h3]],
              [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
              [gI, [gB, 'NextBook'], [gD, h3]],
              [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
              [[gB, 'Voice'], gI, [gD, h2]],
              [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
              [[gB, 'LvTel'], gI, [gD, h2]],
              [/;\s(ph-1)\s/i],
              [gI, [gB, 'Essential'], [gD, h2]],
              [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
              [gI, [gB, 'Envizen'], [gD, h3]],
              [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
              [gI, [gB, 'MachSpeed'], [gD, h3]],
              [/[;\/]\s?tu_(1491)\sbuild/i],
              [gI, [gB, 'Rotor'], [gD, h3]],
              [/(shield[\w\s]+)\sbuild/i],
              [gI, [gB, 'Nvidia'], [gD, h3]],
              [/(sprint)\s(\w+)/i],
              [gB, gI, [gD, h2]],
              [/(kin\.[onetw]{3})/i],
              [
                [gI, /\./g, ' '],
                [gB, 'Microsoft'],
                [gD, h2],
              ],
              [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [gI, [gB, 'Zebra'], [gD, h3]],
              [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
              [gI, [gB, 'Zebra'], [gD, h2]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
              [gB, gI, [gD, h1]],
              [/droid.+;\s(shield)\sbuild/i],
              [gI, [gB, 'Nvidia'], [gD, h1]],
              [/(playstation\s[345portablevi]+)/i],
              [gI, [gB, 'Sony'], [gD, h1]],
              [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
              [gI, [gB, 'Microsoft'], [gD, h1]],
              [/smart-tv.+(samsung)/i],
              [gB, [gD, h4]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [gI, /^/, 'SmartTV'],
                [gB, 'Samsung'],
                [gD, h4],
              ],
              [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
              [
                [gB, 'LG'],
                [gD, h4],
              ],
              [/(apple)\s?tv/i],
              [gB, [gI, 'Apple TV'], [gD, h4]],
              [/crkey/i],
              [
                [gI, 'Chromecast'],
                [gB, 'Google'],
                [gD, h4],
              ],
              [/droid.+aft([\w])(\sbuild\/|\))/i],
              [gI, [gB, 'Amazon'], [gD, h4]],
              [/\(dtv[\);].+(aquos)/i],
              [gI, [gB, 'Sharp'], [gD, h4]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [gB, h7.trim],
                [gI, h7.trim],
                [gD, h4],
              ],
              [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
              [[gD, h4]],
              [/((pebble))app\/[\d\.]+\s/i],
              [gB, gI, [gD, h5]],
              [/droid.+;\s(glass)\s\d/i],
              [gI, [gB, 'Google'], [gD, h5]],
              [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
              [gI, [gB, 'Zebra'], [gD, h5]],
              [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
              [gB, [gD, h6]],
              [
                /droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i,
              ],
              [gI, [gD, h2]],
              [
                /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i,
              ],
              [gI, [gD, h3]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[gD, h7.lowerize]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [gI, [gB, 'Generic']],
              [/(phone)/i],
              [[gD, h2]],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [gP, [gC, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [gP, [gC, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [gC, gP],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [gP, gC],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [gC, gP],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i,
              ],
              [gC, [gP, h8.str, h9.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [gC, 'Windows'],
                [gP, h8.str, h9.os.windows.version],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [gP, /_/g, '.'],
                [gC, 'iOS'],
              ],
              [
                /(mac\sos\sx)\s?([\w\s\.]*)/i,
                /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i,
              ],
              [
                [gC, 'Mac OS'],
                [gP, /_/g, '.'],
              ],
              [
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [gC, gP],
              [/\(bb(10);/i],
              [gP, [gC, 'BlackBerry']],
              [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
              [gP, [gC, 'Symbian']],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[gC, 'Firefox OS']],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [gP, [gC, 'webOS']],
              [/crkey\/([\d\.]+)/i],
              [gP, [gC, 'Chromecast']],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[gC, 'Chromium OS'], gP],
              [
                /(nintendo|playstation)\s([wids345portablevuch]+)/i,
                /(xbox);\s+xbox\s([^\);]+)/i,
                /(mint)[\/\s\(\)]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
                /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku)\s(\w+)/i,
              ],
              [gC, gP],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[gC, 'Solaris'], gP],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [gC, gP],
            ],
          },
          hz = function (hE, hK) {
            if (
              ('object' == typeof hE && ((hK = hE), (hE = gQ)),
              !(this instanceof hz))
            ) {
              return new hz(hE, hK).getResult()
            }
            var hU =
                hE ||
                (void 0 !== gp && gp.navigator && gp.navigator.userAgent
                  ? gp.navigator.userAgent
                  : ''),
              hy = hK ? h7.extend(hV, hK) : hV
            return (
              (this.getBrowser = function () {
                var hg = {
                  name: gQ,
                  version: gQ,
                }
                return (
                  h8.rgx.call(hg, hU, hy.browser),
                  (hg.major = h7.major(hg.version)),
                  hg
                )
              }),
              (this.getCPU = function () {
                var hg = { architecture: gQ }
                return h8.rgx.call(hg, hU, hy.cpu), hg
              }),
              (this.getDevice = function () {
                var hg = {
                  vendor: gQ,
                  model: gQ,
                  type: gQ,
                }
                return h8.rgx.call(hg, hU, hy.device), hg
              }),
              (this.getEngine = function () {
                var hg = {
                  name: gQ,
                  version: gQ,
                }
                return h8.rgx.call(hg, hU, hy.engine), hg
              }),
              (this.getOS = function () {
                var hg = {
                  name: gQ,
                  version: gQ,
                }
                return h8.rgx.call(hg, hU, hy.os), hg
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                }
              }),
              (this.getUA = function () {
                return hU
              }),
              (this.setUA = function (hg) {
                return (
                  (hU =
                    typeof hg === gY && hg.length > 255
                      ? h7.trim(hg, 255)
                      : hg),
                  this
                )
              }),
              this.setUA(hU),
              this
            )
          }
        nP.exports && (u0 = nP.exports = hz)
        u0.UAParser = hz
        var hH = void 0 !== gp && (gp.jQuery || gp.Zepto)
        if (hH && !hH.ua) {
          var hb = new hz()
          hH.ua = hb.getResult()
          hH.ua.get = function () {
            return hb.getUA()
          }
          hH.ua.set = function (hE) {
            hb.setUA(hE)
            var hK = hb.getResult()
            for (var hU in hK) hH.ua[hU] = hK[hU]
          }
        }
      })('object' == typeof E ? E : Vz)
      var u3 = 'safari',
        u4 = 'safari webview',
        u5 = 'Android',
        u6 = 'iOS',
        u7 = 'OS X',
        u8 = 'Windows',
        u9 = 'app'
      var uV = u1.UAParser.DEVICE.VENDOR,
        uz = u1.UAParser.DEVICE.MODEL,
        uH = u1.UAParser.DEVICE.TYPE,
        ub = u1.UAParser.DEVICE.MOBILE,
        uE = u1.UAParser.BROWSER.NAME,
        uK = u1.UAParser.BROWSER.VERSION,
        uU = {
          device: [
            [/android.+;\s(vivo)\s?([\w\s]+)\sbuild/i],
            [uV, uz, [uH, ub]],
            [/d\/honor([\w\s-]+)[;\)]/i],
            [uz, [uV, 'Huawei'], [uH, ub]],
          ],
          browser: [
            [/(trident)\/([\w\.]+)/i],
            [[uE, 'ie'], uK],
            [/(?:ms|\()(ie)\s([\w\.]+)/i],
            [uE, uK],
            [/(edge|edgios|edga)\/([\w\.]+)/i],
            [[uE, 'edge'], uK],
            [/(ucbrowser)\/([\w\.]+)/i, /(ucmini)\/([\w\.]+)/i],
            [[uE, 'ucbrowser'], uK],
            [/(qihoobrowser|qhbrowser)\/([\w\.]+)/i],
            [[uE, '360browser'], uK],
            [/(lite baiduboxapp)\/([\w\.]+)/i],
            [[uE, 'lite baidu'], uK],
            [/(baiduboxapp|baidubrowser|bidubrowser|bdbrowser)\/([\w\.]+)/i],
            [[uE, 'baidubrowser'], uK],
            [/(maxthon|mxbrowser|mxios)\/([\w\.]+)/i],
            [[uE, 'maxthon'], uK],
            [/(fxios|firefox)\/([\w\.]+)/i],
            [[uE, 'firefox'], uK],
            [/(opera|oupeng|opr\/?)\/([\w\.]+)/i],
            [[uE, 'opera'], uK],
            [/(alohabrowser)\/([\w\.]+)/i],
            [[uE, 'alohabrowser'], uK],
            [/(sogoumobilebrowser|sogou)\/([\w\.]+)/i],
            [[uE, 'sogou'], uK],
            [/(liebaofast|liebao)\/([\w\.]+)/i],
            [[uE, 'liebao'], uK],
            [/(miuibrowser)\/([\w\.]+)/i],
            [[uE, 'MIUI Browser'], uK],
            [/(qzone)\/([\w\.]+)/i],
            [uE, uK],
          ],
        },
        uy = {
          browser: [
            [/(edge|edgios|edga)\/([\w\.]+)/i],
            [[uE, 'edge'], uK],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [uK, [uE, 'Chrome Headless']],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [[uE, /(.+)/, '$1 WebView'], uK],
            [/(chrome|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [uE, uK],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [[uE, 'Chrome'], uK],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [uK, [uE, 'Mobile Safari']],
            [/version\/([\w\.]+).+?(safari)/i],
            [uK, uE],
            [/(fxios|firefox)\/([\w\.]+)/i],
            [[uE, 'firefox'], uK],
            [/(trident)\/([\w\.]+)/i],
            [[uE, 'ie'], uK],
            [/(?:ms|\()(ie)\s([\w\.]+)/i],
            [uE, uK],
            [/iphone os/i],
            [
              [uE, 'Safari WebView'],
              [uK, '0'],
            ],
          ],
        }
      E.UAParser = u1.UAParser
      var ug = (function () {
        function gp() {
          this['_ua'] = new u1.UAParser(E.navigator.userAgent, uU)
          var gQ = this['_ua'].getBrowser()
          this.A = gQ.version
          this.p = gQ.name
          var gW = new u1.UAParser(E.navigator.userAgent, uy).getBrowser()
          this.g = gW.version
          this.m = gW.name
          var gZ,
            gY = this['_ua'].getOS().name
          !gY && (gY = '')
          gY = /Android/i.test(gY)
            ? u5
            : /ios/i.test(gY)
            ? u6
            : /Mac OS/i.test(gY)
            ? u7
            : /Windows (Phone|Mobile)/i.test(gY)
            ? 'WP8'
            : /Windows/i.test(gY)
            ? u8
            : 'Unknown'
          this.H = gY
          gZ =
            /pgapp/.test(this['_ua'].getUA()) ||
            /pgmobileshell/.test(this['_ua'].getUA())
              ? u9
              : /pgshell/.test(this['_ua'].getUA())
              ? 'pc'
              : 'browser'
          this.V = gZ
          gZ === u9 &&
            gY === u6 &&
            ((this.p = u3), (this.A = this['_ua'].getOS().version))
        }
        return (
          (gp.prototype.getUA = function () {
            return this['_ua']
          }),
          (gp.prototype.isMobile = function () {
            return (
              void 0 === this.S &&
                (this.S = /mobile|android|iphone|ipad/i.test(
                  this['_ua'].getUA()
                )),
              this.S
            )
          }),
          (gp.prototype.getOSName = function () {
            return this.H
          }),
          (gp.prototype.getPlatform = function () {
            return this.V
          }),
          (gp.prototype.getOSMajorVersion = function () {
            if (!this.k) {
              this.k = -1
              var gQ = this['_ua'].getOS().version
              if (void 0 === gQ) {
                return -1
              }
              if (!(gQ = gQ.match(/[^.]+/g))) {
                return -1
              }
              this.k = +gQ[0]
            }
            return this.k
          }),
          (gp.prototype.getOSVersion = function () {
            return this['_ua'].getOS().version || '-1'
          }),
          (gp.prototype.getBrowserType = function () {
            return this.p ? this.p : ''
          }),
          (gp.prototype.getBrowserBaseType = function () {
            return this.m ? this.m : ''
          }),
          (gp.prototype.getBrowserVersion = function () {
            return this.A ? this.A : '-1'
          }),
          (gp.prototype.getBrowserBaseVersion = function () {
            return this.g ? this.g : '-1'
          }),
          (gp.prototype.getDeviceInfo = function () {
            return this.M || (this.M = this['_ua'].getDevice()), this.M
          }),
          gp
        )
      })()
      function uv(gp, gQ) {
        var gW = []
        if (gp) {
          var gZ = gQ.split('-')[1]
          gW = gQ.split('-')[0].split('.')
          var gY = gZ.split('.')
          gW = gW.concat(gY)
        } else {
          gW = gQ.split('.')
        }
        return gW
      }
      function uj(gp) {
        return gp.map(function (gQ) {
          return isNaN(gQ) ? gQ : parseInt(gQ, 10)
        })
      }
      function uF(gp, gQ) {
        for (
          var gW = gp.indexOf('-') > -1,
            gZ = gQ.indexOf('-') > -1,
            gY = uj(uv(gW, gp)),
            gI = uj(uv(gZ, gQ)),
            gC = Math.max(gY.length, gI.length),
            gD = 0;
          gD < gC;
          gD++
        ) {
          if (
            ((gY[gD] = void 0 === gY[gD] ? 0 : gY[gD]),
            (gI[gD] = void 0 === gI[gD] ? 0 : gI[gD]),
            gY[gD] > gI[gD])
          ) {
            return 1
          }
          if (gY[gD] < gI[gD]) {
            return -1
          }
        }
        return 0
      }
      location.port
      var ux,
        uO,
        uX,
        uM,
        uN,
        uA = 'shell:compatible_failure_reason',
        uw = 'game_shell',
        uR = 'Cache Install',
        uG = 'Cache Update'
      function uL(gp) {
        return function () {
          var gQ = gp
            .reduce(function (gW, gZ) {
              return gW.then(function (gY) {
                return gY ? gZ() : gY
              })
            }, E.Promise.resolve(1))
            .catch(function () {
              return 0
            })
          return gQ
        }
      }
      function uS(gp, gQ) {
        return gp < 0
          ? gQ.substring(E.Number('0x0'), gQ.length + gp)
          : gQ.substring(gp)
      }
      function uk(gp) {
        return uS(1, gp)
      }
      function uJ(gp) {
        return uS(2, gp)
      }
      function uq(gp) {
        return new E.Uint8Array(gp).reduce(function (gQ, gW) {
          return gQ + E.Number(gW).toString(16).padStart(2, '0')
        }, '')
      }
      function up(gp, gQ, gW) {
        return (
          !(!gp || !gQ) &&
          (gW ? gp.substring(E.Number('0x0'), gQ.length) === gQ : gp === gQ)
        )
      }
      function uQ() {
        var gp = 'subtle',
          gQ = uI(E, 'crypto')
        return !(!gQ || uZ(gQ, gp) || !uC(gQ, gp))
      }
      function uW(gp) {
        return -1 !== (gp + '').indexOf('[native code]')
      }
      function uZ(gp, gQ) {
        return E.Object.prototype.hasOwnProperty.call(gp, gQ)
      }
      function uY(gp, gQ) {
        return gp
          ? gp.get
            ? uW(gp.get)
              ? gp.get.apply(gQ)
              : void 0
            : gp.value
          : gp
      }
      function uI(gp, gQ) {
        try {
          return uY(E.Object.getOwnPropertyDescriptor(gp, gQ), gp)
        } catch (gW) {}
      }
      function uC(gp, gQ) {
        try {
          var gW = E.Object.getPrototypeOf(gp)
          return uY(E.Object.getOwnPropertyDescriptor(gW, gQ), gp)
        } catch (gZ) {}
      }
      function uD(gp, gQ) {
        return (
          void 0 === gQ && (gQ = E),
          E2(gp)
            .split('.')
            .reduce(function (gW, gZ) {
              return null != gW ? uI(gW, gZ) : gW
            }, gQ)
        )
      }
      function uB() {
        return (
          null ==
          [
            ' Math.random',
            ' parseInt',
            ' setTimeout ',
            ' Date ',
            ' Date.now',
          ].find(function (gp) {
            return !uW(uD(gp))
          })
        )
      }
      function uP(gp) {
        for (
          var gQ = [
              ' SamsungBrowser',
              'UCBrowser',
              ' Quark',
              'QQBrowser',
              ' OppoBrowser',
              ' VivoBrowser',
              ' 360(SE|EE) ',
              ' b(?:ai)?d(?:u)?browser ',
            ],
            gW = [],
            gZ = 0;
          gp;

        ) {
          1 & gp && gZ < gQ.length && gW.push(E2(gQ[gZ]))
          gp >>= 1
          gZ++
        }
        if (gW.length) {
          var gY = new E.RegExp(gW.join(E2(' | ')), E2(' i '))
          return function () {
            return gY.test(E.navigator.userAgent)
          }
        }
        return function () {
          return false
        }
      }
      function E0(gp) {
        var gQ = [
          'deDate',
          'elocation',
          'dohost',
          'ehostname',
          'deMath',
          'eparseInt',
          'dneval',
        ][gp]
        return gQ.substring(E.Number('0xf') - E.Number('0x0' + gQ[0]))
      }
      function E1() {
        return E3(1, 20 * E[E0(4)].random())
      }
      function E2(gp) {
        return gp.replace(/ /g, '')
      }
      function E3(gp, gQ) {
        return gp === E[E0(4)].max(gp, gQ)
      }
      function E4(gp) {
        for (var gQ = '', gW = 0, gZ = gp.length; gW < gZ; gW++) {
          gQ += gp[gW] || ''
        }
        return gQ
      }
      function E5(gp) {
        for (
          var gQ = E.atob(gp), gW = new E.Uint8Array(gQ.length), gZ = 0;
          gZ < gQ.length;
          gZ++
        ) {}
        return gW
      }
      function E6() {
        var gp = [95, 95]
            .map(function (h3) {
              return E.String.fromCharCode(h3)
            })
            .join(''),
          gQ = gp + 'refer or ' + gp + uk('ahv'),
          gW = E0(1),
          gZ = uk('esplit')
        function gY(h3) {
          var h4 = new E.URLSearchParams(E[gW].search),
            h5 = gQ[gZ](' ')[h3]
          return h5 ? h4.get(h5) : null
        }
        var gI = E0(3),
          gC = E[gW][gI],
          gD = gY(0),
          gB = gY(1),
          gP = gY(2),
          h0 =
            null == gP
              ? void 0
              : gP.substring(E.Number('0x0'), E.Number('0x2')),
          h1 = null == gP ? void 0 : gP.substring(E.Number('0x2')),
          h2 = Object.create(null)
        return (
          (h2.B = h0),
          (h2.j = gC),
          (h2.G = gD),
          (h2.P = gB),
          (h2.Z = gP),
          (h2.R = h1),
          h2
        )
      }
      !(function (gp) {
        gp[(gp.WebWindow = 1)] = 'WebWindow'
        gp[(gp.WebMacOS = 2)] = 'WebMacOS'
        gp[(gp.WebAndroid = 3)] = 'WebAndroid'
        gp[(gp.WebIOS = 4)] = 'WebIOS'
        gp[(gp.WebOthers = 5)] = 'WebOthers'
        gp[(gp.CordovaAndroid = 6)] = 'CordovaAndroid'
        gp[(gp.CordovaIOS = 7)] = 'CordovaIOS'
        gp[(gp.ElectronWindow = 8)] = 'ElectronWindow'
        gp[(gp.ElectronMac = 9)] = 'ElectronMac'
        gp[(gp.NativeWindow = 10)] = 'NativeWindow'
        gp[(gp.NativeMac = 11)] = 'NativeMac'
        gp[(gp.NativeAndroid = 12)] = 'NativeAndroid'
        gp[(gp.NativeIOS = 13)] = 'NativeIOS'
        gp[(gp.Robot = 99)] = 'Robot'
      })(ux || (ux = {}))
      ;(function (gp) {
        gp[(gp.All = 0)] = 'All'
        gp[(gp.Portrait = 1)] = 'Portrait'
        gp[(gp.Landscape = 2)] = 'Landscape'
      })(uO || (uO = {}))
      ;(function (gp) {
        gp[(gp.None = 0)] = 'None'
        gp[(gp.All = 1)] = 'All'
        gp[(gp.Portrait = 2)] = 'Portrait'
        gp[(gp.Landscape = 3)] = 'Landscape'
      })(uX || (uX = {}))
      ;(function (gp) {
        gp[(gp.Image = 1)] = 'Image'
      })(uM || (uM = {}))
      var E7,
        E8 = void 0
      function E9(gp) {
        E8 = gp
      }
      function EV() {
        return E8 || E.location
      }
      E7 = {
        language: ['l', 'language'],
        token: ['ot', 'operator_token'],
        session: ['ops', 'operator_player_session'],
        type: ['btt', 'bet_type'],
        from: ['f', 'from'],
        definition: ['definition'],
        tourid: ['tournament_id'],
        real: ['rurl', 'real_url'],
        no_audio: ['no_audio'],
        plugin: ['pg_plugin'],
        time_elapsed: ['te', 'time_elapsed'],
        reminder_interval: ['ri', 'reminder_interval'],
        operator_param: ['op', 'operator_param'],
        cached_t: ['ct', 'cached_t'],
        or_cover: ['oc', 'or_cover'],
        origin: ['or'],
        api_origin: ['ao'],
        login_method: ['lgm'],
      }
      var Ez = (function () {
        function gp(gQ) {
          this.O = new URLSearchParams(gQ)
        }
        return (
          (gp.prototype.entries = function () {
            return this.O.entries()
          }),
          (gp.prototype.keys = function () {
            return this.O.keys()
          }),
          (gp.prototype.values = function () {
            return this.O.values()
          }),
          (gp.prototype[Symbol.iterator] = function () {
            return this.O[Symbol.iterator]()
          }),
          (gp.prototype.append = function (gQ, gW) {
            this.O.append(gQ, gW)
          }),
          (gp.prototype.delete = function (gQ) {
            var gW = (E7 && E7[gQ]) || gQ
            if (Array.isArray(gW)) {
              for (var gZ = 0; gZ < gW.length; gZ++) {
                if (this.O.has(gW[gZ])) {
                  return this.O.delete(gW[gZ])
                }
              }
            }
            this.O.delete(gW)
          }),
          (gp.prototype.get = function (gQ) {
            var gW = (E7 && E7[gQ]) || gQ
            if (Array.isArray(gW)) {
              for (var gZ = 0; gZ < gW.length; gZ++) {
                if (this.O.has(gW[gZ])) {
                  return this.O.get(gW[gZ])
                }
              }
            }
            return this.O.has(gW) ? this.O.get(gW) : this.O.get(gQ)
          }),
          (gp.prototype.getAll = function (gQ) {
            return this.O.getAll(gQ)
          }),
          (gp.prototype.has = function (gQ) {
            var gW = (E7 && E7[gQ]) || gQ
            if (Array.isArray(gW)) {
              for (var gZ = 0; gZ < gW.length; gZ++) {
                if (this.O.has(gW[gZ])) {
                  return this.O.has(gW[gZ])
                }
              }
            }
            return this.O.has(gW)
          }),
          (gp.prototype.set = function (gQ, gW) {
            this.O.set(gQ, gW)
          }),
          (gp.prototype.sort = function () {
            this.O.sort()
          }),
          (gp.prototype.toString = function () {
            return this.O.toString()
          }),
          (gp.prototype.forEach = function (gQ, gW) {
            return this.O.forEach(gQ, gW)
          }),
          gp
        )
      })()
      function EH(gp, gQ) {
        if (!gQ || 0 == gQ.length) {
          throw Error('Invalid key!')
        }
        for (var gW = '', gZ = 0; gZ < gp.length; gZ++) {
          var gY = gp.charCodeAt(gZ),
            gI = gQ.charCodeAt(gZ % gQ.length)
          gW += String.fromCharCode(gY ^ gI)
        }
        return gW
      }
      function Eb(gp) {
        if (!EE(gp)) {
          return gp
        }
        var gQ = (function (gY) {
            return gY.replace(/^CAkQ(xzA|C3z|2Q5)/, '')
          })(gp),
          gW = gQ.length % 4 > 0 ? 4 - (gQ.length % 4) : 0
        if (gW > 0) {
          for (var gZ = 0; gZ < gW; gZ++) {
            gQ += '='
          }
        }
        return gQ
      }
      function EE(gp) {
        return /^CAkQ(xzA|C3z|2Q5)/.test(gp)
      }
      function EK(gp) {
        var gQ
        !(function (h0) {})(gQ || (gQ = {}))
        var gW = 'object' == typeof E ? E : global,
          gZ = gW.parseInt,
          gY = gW.isNaN,
          gI = gW.String,
          gC = gW.RegExp,
          gD = gW.Number,
          gB = gC(gQ.kReplacer, 'g'),
          gP = gZ(
            null == gp ? void 0 : gp.substring(gD('0x0'), gD('0x2')),
            gD('0xa')
          )
        return gY(gP) && (null == gp ? void 0 : gp.includes('.'))
          ? gp
          : null == gp
          ? void 0
          : gp.substring(gD('0x2')).replace(gB, function (h0) {
              if ('=' === h0) {
                return '.'
              }
              var h1 = h0.charCodeAt(0),
                h2 = h1 >= gD('0x61') ? gD('0x61') : gD('0x41'),
                h3 = ((h1 - h2 - gP + gD('0x1a')) % gD('0x1a')) + h2
              return gI.fromCharCode(h3)
            })
      }
      var EU = (function () {
          function gp() {
            this.D = new Ez(E.location.search)
            this.N = new ug()
            var gQ = E.location
            this.D.get('origin') &&
              ((gQ = (function (gY) {
                if (
                  (0 === gY.indexOf('//')
                    ? (gY = E.location.protocol + gY)
                    : /^https?:/.test(gY) ||
                      (gY = E.location.protocol + '//' + gY),
                  E.URL)
                ) {
                  var gI = new URL(gY)
                  return {
                    href: gY,
                    host: gI.host,
                    origin: gI.origin,
                    protocol: gI.protocol,
                    pathname: gI.pathname,
                  }
                }
                var gC =
                  /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?/.exec(
                    gY
                  )
                if (!gC) {
                  throw Error('Unable to create location')
                }
                return {
                  href: gC[0],
                  host: gC[2],
                  origin: gC[1] + '://' + gC[2],
                  protocol: gC[1] + ':',
                  pathname: gC[3],
                }
              })(EK(this.D.get('origin')) + E.location.pathname)),
              E9(gQ))
            var gW = E.location.host
            if (
              (this.D.get('api_origin') && (gW = EK(this.D.get('api_origin'))),
              (function (gY) {
                E.ApiDomain ||
                  (E.ApiDomain = (function (gI) {
                    var gC = gI
                    return (
                      gC.split('.').length > 2 &&
                        (gC = gC.substr(gC.indexOf('.') + 1)),
                      'https://api.pgf-asqd7a.com/'
                    )
                  })(gY))
              })(gW),
              this.D.get('orientation'))
            ) {
              var gZ = this.D.get('orientation')
              ;('port' !== gZ && 'land' !== gZ) || (this.T = gZ)
            }
            void 0 !== this.D.get('resize') && (this.W = this.D.get('resize'))
          }
          return (
            (gp.prototype.getGPU = function () {
              for (
                var gQ = document.createElement('canvas'),
                  gW = void 0,
                  gZ = '',
                  gY = 0,
                  gI = [
                    'webgl',
                    'experimental-webgl',
                    'moz-webgl',
                    'webkit-3d',
                  ];
                gY < gI.length;
                gY++
              ) {
                var gC = gI[gY]
                if ((gW = gQ.getContext(gC))) {
                  break
                }
              }
              if (gW) {
                var gD = gW.getExtension('WEBGL_debug_renderer_info')
                gZ = gD ? gW.getParameter(gD.UNMASKED_RENDERER_WEBGL) : ''
              }
              return gZ
            }),
            (gp.prototype.getBrowserType = function () {
              return this.N.getBrowserType()
            }),
            (gp.prototype.getBrowserBaseType = function () {
              return this.N.getBrowserBaseType()
            }),
            (gp.prototype.getBrowserVersion = function () {
              return this.N.getBrowserVersion()
            }),
            (gp.prototype.getBrowserBaseVersion = function () {
              return this.N.getBrowserBaseVersion()
            }),
            (gp.prototype.getRequestType = function () {
              return this.D.get('req_api') || uN.RequestType || 'fetch'
            }),
            (gp.prototype.getDeviceMemory = function () {
              return E.navigator.deviceMemory
            }),
            (gp.prototype.isWkWebview = function () {
              return void 0 === this.U && (this.U = !!E.webkit), this.U
            }),
            (gp.prototype.isCacheStorageSupported = function () {
              var gQ
              if (void 0 !== this.q) {
                return this.q
              }
              try {
                this.q =
                  (null === (gQ = E.caches) || void 0 === gQ
                    ? void 0
                    : gQ.open('__test')) instanceof Promise
              } catch (gW) {
                this.q = false
              }
              return this.q
            }),
            (gp.prototype.isIOSStandalone = function () {
              return (
                void 0 === this.Y &&
                  (this.Y =
                    (this.getOSName() === u6 && navigator.standalone) || false),
                this.Y
              )
            }),
            (gp.prototype.isChromeStandalone = function () {
              if (void 0 === this.J) {
                var gQ = false
                this.getOSName() === u5 &&
                  matchMedia &&
                  (gQ = matchMedia('(display-mode: standalone)').matches)
                this.J = gQ
              }
              return this.J
            }),
            (gp.prototype.isMobile = function () {
              return this.N.isMobile()
            }),
            (gp.prototype.isIOS = function () {
              return (
                void 0 === this.X && (this.X = u6 === this.getOSName()), this.X
              )
            }),
            (gp.prototype.isAndroid = function () {
              return (
                void 0 === this.K && (this.K = u5 === this.getOSName()), this.K
              )
            }),
            (gp.prototype.isMac = function () {
              return (
                void 0 === this['$'] && (this['$'] = u7 === this.getOSName()),
                this['$']
              )
            }),
            (gp.prototype.isWindows = function () {
              return (
                void 0 === this.tt && (this.tt = u8 === this.getOSName()),
                this.tt
              )
            }),
            (gp.prototype.isApp = function () {
              return (
                void 0 === this.nt && (this.nt = u9 === this.N.getPlatform()),
                this.nt
              )
            }),
            (gp.prototype.isPc = function () {
              return (
                void 0 === this.it && (this.it = 'pc' === this.N.getPlatform()),
                this.it
              )
            }),
            (gp.prototype.isSafari = function () {
              var gQ = Ey.getBrowserBaseType().toLowerCase(),
                gW = Ey.getBrowserType()
              return gQ === u4 || 'mobile safari' === gQ || gW === u3
            }),
            (gp.prototype.getResizeMode = function () {
              return this.W || void 0
            }),
            (gp.prototype.getOSName = function () {
              return this.N.getOSName()
            }),
            (gp.prototype.getOSMajorVersion = function () {
              return this.N.getOSMajorVersion()
            }),
            (gp.prototype.getOSVersion = function () {
              return this.N.getOSVersion()
            }),
            (gp.prototype.getDeviceCompatibleTerms = function () {
              return this.et || (this.et = uN.Requirements), this.et
            }),
            (gp.prototype.getURLSearchParam = function () {
              return this.D
            }),
            (gp.prototype.getPlatform = function () {
              return this.N.getPlatform()
            }),
            (gp.prototype.isIPad = function () {
              return (
                void 0 === this.rt &&
                  (this.rt =
                    /iPad/.test(this.N.getUA().getUA()) ||
                    (this.isMac() && navigator.maxTouchPoints > 1)),
                this.rt
              )
            }),
            (gp.prototype.getDeviceInfo = function () {
              return this.N.getDeviceInfo()
            }),
            (gp.prototype.getRunPlatform = function () {
              if (void 0 === this.ot) {
                var gQ
                gQ = this.isAndroid()
                  ? ux.WebAndroid
                  : this.isIOS()
                  ? ux.WebIOS
                  : this.isWindows()
                  ? ux.WebWindow
                  : this.isMac()
                  ? ux.WebMacOS
                  : ux.WebOthers
                this.ot = gQ
              }
              return this.ot
            }),
            (gp.prototype.getSupportedBrowsers = function () {
              if (!this.st && this.getDeviceCompatibleTerms().whiteList) {
                this.st = []
                for (
                  var gQ = 0,
                    gW = this.getDeviceCompatibleTerms().whiteList.split(',');
                  gQ < gW.length;
                  gQ++
                ) {
                  var gZ = gW[gQ].split('-')[0]
                  this.st.push(gZ.toLowerCase())
                }
              }
              return this.st
            }),
            (gp.prototype.isBrowserTypeSupported = function () {
              for (
                var gQ = 0, gW = this.getSupportedBrowsers();
                gQ < gW.length;
                gQ++
              ) {
                var gZ = gW[gQ]
                if (this.getBrowserBaseType().toLowerCase() === gZ) {
                  return true
                }
              }
              return false
            }),
            (gp.prototype.isSecureContext = function () {
              return void 0 !== E.isSecureContext
                ? E.isSecureContext
                : 'https:' === E.location.protocol
            }),
            (gp.prototype.getWhiteListCompatibleCheckInfo = function () {
              if (void 0 === this.ut) {
                var gQ = false,
                  gW = false,
                  gZ = false
                if (this.getDeviceCompatibleTerms().whiteList) {
                  gQ = true
                  for (
                    var gY = 0,
                      gI = this.getDeviceCompatibleTerms().whiteList.split(',');
                    gY < gI.length;
                    gY++
                  ) {
                    var gC = gI[gY].split('-'),
                      gD = gC[0],
                      gB = gC.length > 1 ? gC[1] : '0.0.0',
                      gP = false
                    if (
                      ((gW = RegExp(gD, 'i').test(this.getBrowserType())) ||
                        ((gW = RegExp(gD, 'i').test(
                          this.getBrowserBaseType()
                        )) &&
                          (gP = true)),
                      gW &&
                        'webkit' === gD.toLowerCase() &&
                        !this.isWkWebview() &&
                        this.isIOS() &&
                        (gW = false),
                      gW)
                    ) {
                      gZ =
                        '-1' === this.getBrowserVersion() ||
                        uF(
                          gP
                            ? this.getBrowserBaseVersion()
                            : this.getBrowserVersion(),
                          gB
                        ) >= 0
                      break
                    }
                  }
                }
                this.ut = {
                  hasWhiteList: gQ,
                  foundBrowser: gW,
                  isMinBrowserVersion: gZ,
                }
              }
              return this.ut
            }),
            (gp.prototype.getMinOSVersionInfo = function () {
              if (void 0 === this.ct) {
                var gQ = false,
                  gW = false,
                  gZ = false
                if (this.getDeviceCompatibleTerms().minOSVersion) {
                  gQ = true
                  for (
                    var gY = 0,
                      gI =
                        this.getDeviceCompatibleTerms().minOSVersion.split(',');
                    gY < gI.length;
                    gY++
                  ) {
                    var gC = gI[gY].split('-'),
                      gD = /MacOS/i.test(gC[0]) ? u7 : gC[0],
                      gB = gC.length > 1 ? gC[1] : '0.0.0'
                    if ((gW = RegExp(gD, 'i').test(this.getOSName()))) {
                      gZ =
                        '-1' === this.getOSVersion() ||
                        uF(this.getOSVersion(), gB) >= 0
                      break
                    }
                  }
                }
                this.ct = {
                  hasMinOSVersion: gQ,
                  foundOS: gW,
                  isMinOSVersion: gZ,
                }
              }
              return this.ct
            }),
            (gp.prototype.getOrientation = function () {
              var gQ = E.orientation
              if (void 0 !== gQ) {
                return +gQ
              }
              var gW = screen.orientation,
                gZ = 0
              return (
                gW
                  ? 'landscape-primary' === gW.type && (gZ = gW.angle)
                  : this.getHeight() < this.getWidth() && (gZ = 90),
                gZ
              )
            }),
            (gp.prototype.getOrientationMode = function () {
              if (this.T) {
                return this.T
              }
              switch (uN.Orientation) {
                case uO.All:
                  this.T =
                    this.getWidth() > this.getHeight() && !this.isMobile()
                      ? 'land'
                      : 'port'
                  break
                case uO.Landscape:
                  this.T = 'land'
                  break
                case uO.Portrait:
                default:
                  this.T = 'port'
              }
              return this.T
            }),
            (gp.prototype.getIs1959Supported = function () {
              return (
                void 0 !== this.ht ||
                  ('land' === this.getOrientationMode()
                    ? (this.ht =
                        uN.SupportXSMaxRatio === uX.All ||
                        uN.SupportXSMaxRatio === uX.Landscape)
                    : (this.ht =
                        uN.SupportXSMaxRatio === uX.All ||
                        uN.SupportXSMaxRatio === uX.Portrait)),
                this.ht
              )
            }),
            (gp.prototype.getAscpectRatioSupport = function () {
              var gQ, gW
              if (this.lt) {
                return this.lt
              }
              var gZ =
                  'land' === this.getOrientationMode()
                    ? 'Landscape'
                    : 'Portrait',
                gY = this.isMobile() ? 'Mobile' : 'Desktop',
                gI =
                  (null ===
                    (gW =
                      null === (gQ = uN.AspectRatio) || void 0 === gQ
                        ? void 0
                        : gQ[gY]) || void 0 === gW
                    ? void 0
                    : gW[gZ]) || void 0
              return gI
                ? ((this.lt = gI), this.lt)
                : (this.getIs1959Supported()
                    ? (this.lt = {
                        MinRatio: 1.7777777777777777,
                        MaxRatio: 2.1666666666666665,
                      })
                    : this.getIs1959Supported() ||
                      (this.lt = {
                        MinRatio: 1.7777777777777777,
                        MaxRatio: 1.7777777777777777,
                      }),
                  this.lt)
            }),
            (gp.prototype.isPortrait = function () {
              var gQ = this.getOrientation()
              return 0 === gQ || 180 === gQ
            }),
            Object.defineProperty(gp.prototype, 'audioSupported', {
              get: function () {
                return (
                  void 0 !== this.ft ||
                    ('1' === this.D.get('no_audio')
                      ? (this.ft = false)
                      : (this.ft = this.dt())),
                  this.ft
                )
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'audioContext', {
              get: function () {
                return this.At, this.At
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'webpSupported', {
              get: function () {
                return this.vt
              },
              set: function (gQ) {
                this.vt = gQ
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.dt = function () {
              if (this.isAndroid() && E.navigator && E.navigator.userAgent) {
                var gQ = E.navigator.userAgent,
                  gW = gQ.match(/OPR\/([0-6].)/gi)
                if (gW && gW.length > 0) {
                  if (gW && parseInt(gW[0].split('/')[1], 10) < 46) {
                    return false
                  }
                } else {
                  if (gQ.match(/(edge|edga)\/((\d+)?[\w\.]+)/i)) {
                    return false
                  }
                  if (gQ.match(/vivobrowser/gi)) {
                    return false
                  }
                  if (gQ.match(/bdbrowser/gi)) {
                    return false
                  }
                  if (gQ.match(/baiduboxapp/gi)) {
                    return false
                  }
                }
                if (
                  'firefox' === this.getBrowserType() &&
                  0 === this.getBrowserVersion().indexOf('68.0')
                ) {
                  return false
                }
              }
              if (this.isMac() && this.isSafari()) {
                var gZ = this.getOSMajorVersion(),
                  gY = this.getBrowserVersion().split('.')[0]
                if (10 === gZ && '15' === gY) {
                  return false
                }
              }
              try {
                this.At = new (E.AudioContext ||
                  E.webkitAudioContext ||
                  E.mozAudioContext ||
                  E.oAudioContext)()
              } catch (gB) {
                return false
              }
              if (E.Audio) {
                var gI = new Audio(),
                  gC = '' !== gI.canPlayType('audio/mp3;').replace(/^no$/, ''),
                  gD = '' !== gI.canPlayType('audio/mpeg;').replace(/^no$/, '')
                return gC || gD
              }
              return false
            }),
            (gp.prototype.isSwipeUpSupported = function () {
              return !this.isMobile() || this.isApp(), false
            }),
            (gp.prototype.shouldShowExceptionAlert = function () {
              return '1' !== this.D.get('disable_exception_alert')
            }),
            (gp.prototype.getWidth = function () {
              return E.innerWidth
            }),
            (gp.prototype.getHeight = function () {
              return E.innerHeight
            }),
            (gp.prototype.getDevicePixelRatio = function () {
              return E.devicePixelRatio || 1
            }),
            (gp.prototype.getScreenWidth = function () {
              return E.screen.width
            }),
            (gp.prototype.getScreenHeight = function () {
              return E.screen.height
            }),
            (gp.prototype.getScreenRatio = function () {
              return this.getScreenWidth() > this.getScreenHeight()
                ? this.getScreenWidth() / this.getScreenHeight()
                : this.getScreenHeight() / this.getScreenWidth()
            }),
            (gp.prototype.hasNotch = function () {
              return (
                this.isIOS() &&
                'port' === this.getOrientationMode() &&
                ((375 === this.getWidth() && 812 === this.getHeight()) ||
                  (414 === this.getWidth() && 896 === this.getHeight())) &&
                this.getIs1959Supported()
              )
            }),
            (gp.prototype.getSafeAreaPadding = function () {
              if (!this.isIOS() || !this.getIs1959Supported()) {
                return gQ
              }
              switch (true) {
                case this.isIOSStandalone():
                  break
                case this.isApp():
                case this.hasNotch():
                  ;(gQ.top = 30), (gQ.bottom = 15)
              }
              return gQ
            }),
            (gp.prototype.gt = function () {
              try {
                return E.self !== E.top
              } catch (gQ) {
                return true
              }
            }),
            gp
          )
        })(),
        Ey = new EU(),
        Eg = ['language', 'definition', 'orientation', 'browser', 'os'],
        Ev = {
          os: ['ios', 'android', 'windows', 'osx'],
          browser: ['safari', 'chrome', 'edge', 'ie', 'firefox'],
          definition: ['sd', 'hd'],
          language: [
            'az',
            'ar',
            'bg',
            'bn',
            'cs',
            'el',
            'en',
            'zh',
            'da',
            'de',
            'es',
            'et',
            'fa',
            'fi',
            'fr',
            'hi',
            'hu',
            'hy',
            'id',
            'it',
            'ja',
            'ko',
            'lo',
            'lt',
            'mn',
            'my',
            'nl',
            'no',
            'pl',
            'pt',
            'ro',
            'ru',
            'sh',
            'si',
            'sk',
            'sq',
            'sv',
            'th',
            'tr',
            'uk',
            'ur',
            'uz',
            'vi',
            'en-stkus',
          ],
          orientation: ['port', 'land'],
        }
      function Ej(gp) {
        var gQ = { gW: null !== gZ && 'object' == typeof gZ ? Ej(gZ) : gZ }
        for (var gW in gp)
          if (Object.prototype.hasOwnProperty.call(gp, gW)) {
            var gZ = gp[gW]
          }
        return gQ
      }
      function Ex(gp) {
        var gQ = gp.lastIndexOf('/')
        return (
          -1 === gQ
            ? ((EF.dirname = ''), (EF.basename = gp))
            : ((EF.dirname = gp.substring(0, gQ)),
              (EF.basename = gp.substring(gQ + 1))),
          EF
        )
      }
      var EO = {
        qualifier: '',
        subqualifier: void 0,
      }
      function EX(gp) {
        var gQ = gp.indexOf('_')
        return (
          -1 !== gQ
            ? ((EO.subqualifier = gp.substring(gQ + 1)),
              (EO.qualifier = gp.substring(0, gQ)))
            : ((EO.subqualifier = void 0), (EO.qualifier = gp)),
          EO
        )
      }
      var EM = {
        qualifier: '',
        index: -1,
      }
      function EN(gp, gQ) {
        void 0 === gQ && (gQ = 0)
        var gW = gp.indexOf('-', gQ)
        return (
          gW > 0
            ? ((EM.qualifier = gp.substring(gQ, gW)), (EM.index = gW))
            : ((EM.qualifier = gp.substring(gQ)), (EM.index = -1)),
          EM
        )
      }
      var EA = (function () {
          function gp(gQ, gW) {
            this.bt = false
            this.wt = []
            ;(function (gZ, gY) {
              for (var gI in gZ)
                if (Object.prototype.hasOwnProperty.call(gZ, gI)) {
                  var gC = gZ[gI],
                    gD = Ev[gI]
                  if (null == gD || null == gC || -1 === gD.indexOf(gC)) {
                    throw Error(
                      'ResourceQualifier: "'.concat(
                        gI,
                        '" is not a valid qualifier definition'
                      )
                    )
                  }
                }
              if (null != gY) {
                for (var gI in gY)
                  if (
                    Object.prototype.hasOwnProperty.call(gY, gI) &&
                    -1 === Eg.indexOf(gI)
                  ) {
                    throw Error(
                      'ResourceQualifier: "'.concat(
                        gI,
                        '" is not a valid subqualifier definition'
                      )
                    )
                  }
              }
            })(gQ, gW)
            this.xt = Ej(gQ)
            this.yt = gW && Ej(gW)
            this.Ht = Eg.filter(function (gZ) {
              return Object.prototype.hasOwnProperty.call(gQ, gZ)
            })
          }
          return (
            Object.defineProperty(gp.prototype, 'urlValidator', {
              get: function () {
                return this.Vt
              },
              set: function (gQ) {
                this.Vt = gQ
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.setAssetTable = function (gQ, gW) {
              void 0 === gW && (gW = false)
              this.assetTable = gQ
              this.bt = gW
            }),
            Object.defineProperty(gp.prototype, 'assetTable', {
              get: function () {
                return this.St
              },
              set: function (gQ) {
                this.St !== gQ &&
                  (null != gQ
                    ? ((this.St = gQ.slice()), (this.kt = Object.create(null)))
                    : ((this.St = void 0), (this.kt = void 0)),
                  (this.bt = false))
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.getResourceURL = function (gQ, gW) {
              var gZ = this.St,
                gY = this.kt
              if (!gZ) {
                throw Error(
                  'ResourceQualifier: assetTable is not setup properly!'
                )
              }
              var gI = gY[gQ]
              if (void 0 !== gI) {
                return gI
              }
              var gC = this.Ht,
                gD = this.bt ? this.wt : void 0,
                gB = Ex(gQ),
                gP = gB.dirname,
                h0 = gB.basename,
                h1 = RegExp('^' + (gP ? gP + '/' : '') + '[^/]+/' + h0 + '$'),
                h2 = gZ.filter(function (hw) {
                  return h1.test(hw)
                }),
                h3 = gQ
              if (h2.length) {
                for (
                  var h4 = this.xt,
                    h5 = this.yt,
                    h6 = 0,
                    h7 = 0,
                    h8 = null,
                    h9 = 0,
                    hV = h2.length;
                  h9 < hV;
                  h9++
                ) {
                  var hz = h2[h9],
                    hH = Ex(Ex(hz).dirname).basename,
                    hb = 0,
                    hE = 0,
                    hK = 0
                  do {
                    for (
                      var hU = EN(hH, hK),
                        hy = hU.qualifier,
                        hg = hU.index,
                        hv = EX(hy),
                        hj = hv.qualifier,
                        hF = hv.subqualifier,
                        hx = 0,
                        hO = 0,
                        hX = 0,
                        hM = gC.length;
                      hX < hM;
                      hX++
                    ) {
                      var hN = gC[hX]
                      if (hj === h4[hN]) {
                        if (void 0 !== hF) {
                          var hA = h5 && h5[hN]
                          hA && (hO = hA(hF))
                          hO > 0 && (hx = 1 << hX)
                        } else {
                          hx = 1 << hX
                        }
                        break
                      }
                    }
                    if (!(hx > 0)) {
                      hb = 0
                      hE = 0
                      break
                    }
                    hb += hx
                    hE += hO
                    hK = hg + 1
                  } while (hK > 0)
                  hb > h6
                    ? ((h6 = hb), (h7 = hE), (h8 = hz))
                    : hb === h6 && hE > h7
                    ? ((h7 = hE), (h8 = hz))
                    : 0 === hb && gD && gD.push(hz)
                }
                h8 && (h3 = h8)
              }
              return (
                gD &&
                  gD.length &&
                  ((this.St = gZ.filter(function (hw) {
                    return -1 === gD.indexOf(hw)
                  })),
                  (gD.length = 0)),
                -1 === gZ.indexOf(h3) || (null != this.Vt && !this.Vt(h3, gW))
                  ? (gY[gQ] = h3 = null)
                  : (gY[gQ] = h3),
                h3
              )
            }),
            gp
          )
        })(),
        Ew = (function () {
          function gp() {
            for (var gQ = [], gW = 0; gW < arguments.length; gW++) {}
            gQ.length ? (this.Et = gQ.slice()) : (this.Et = [])
          }
          return (
            (gp.prototype.Ct = function () {
              this.Et.forEach(function (gQ) {
                return gQ()
              })
              this.Et.length = 0
            }),
            Object.defineProperty(gp.prototype, 'Mt', {
              get: function () {
                return 0 === this.Et.length
              },
              enumerable: false,
              configurable: true,
            }),
            gp
          )
        })()
      function ER(gp, gQ, gW) {
        return (gp += 't. ').substring(gQ, gW)
      }
      function EG(gp, gQ) {
        return function (gW) {
          if (void 0 === gW) {
            var gZ = E['M1at0h'.replace(/[0-9]/g, '')]
            gW = (gZ.random() * E.Number('0x01f4') * E.Number('0xa')) | 0
          }
          var gY = ' on'.split('').reverse(),
            gI = ER('eve' + gY[0], 0, 5)
          E['she'.padEnd(E.Number('0x5'), 'l')].context[gI][
            gY[1].concat(gY[0])
          ](gQ, function () {
            !(function (gC, gD) {})(gW, gp)
          })
        }
      }
      var ET = EG(function () {
          var gp,
            gQ,
            gW =
              null ===
                (gQ =
                  null === (gp = E[E.eval('"cc"')]) || void 0 === gp
                    ? void 0
                    : gp.Node) || void 0 === gQ
                ? void 0
                : gQ.prototype
          gW &&
            (gW.setScale = function () {
              this.destroy && this.destroy()
            })
        }, 'Game.ViewLoading'),
        Em = EG(function () {
          var gp, gQ, gW, gZ
          !(function (gY) {})(gZ || (gZ = {}))
          null ===
            (gW =
              null ===
                (gQ =
                  null === (gp = E.shell) || void 0 === gp
                    ? void 0
                    : gp.context) || void 0 === gQ
                ? void 0
                : gQ.event) ||
            void 0 === gW ||
            gW.on(gZ.i, function (gY) {
              gY[gZ.o]()
            })
        }, 'Game.ViewSuccess'),
        Ed = EG(function () {
          var gp, gQ, gW, gZ
          !(function (gY) {})(gZ || (gZ = {}))
          null ===
            (gW =
              null ===
                (gQ =
                  null === (gp = E.shell) || void 0 === gp
                    ? void 0
                    : gp.context) || void 0 === gQ
                ? void 0
                : gQ.event) ||
            void 0 === gW ||
            gW.on(gZ.i, function (gY) {
              gY[gZ.o]()
            })
        }, 'Game.ViewPopulated')
      function EL() {}
      var ES = EL
      function Ek(gp, gQ, gW) {
        if (
          ('object' == typeof gp || 'string' == typeof gp || void 0 === gp) &&
          void 0 === gQ &&
          void 0 === gW
        ) {
          return function (gY, gI, gC) {
            return gC ? EJ(gY, gI, gC, gp) : Eq(gY, gI, gp)
          }
        }
        if (
          ('object' == typeof gp || 'function' == typeof gp) &&
          'string' == typeof gQ
        ) {
          var gZ = gp
          gW ? EJ(gZ, gQ, gW) : Eq(gZ, gQ)
        }
      }
      function EJ(gp, gQ, gW, gZ) {
        var gY = void 0,
          gI =
            'Class [ ' +
            gp.constructor.name +
            ' ] " ' +
            gQ +
            '(...) " has been deprecated but still in use'
        'string' == typeof gZ && (gY = gp[gZ])
        var gC = gY || gW.value
        return (
          gZ && gY
            ? (gI =
                'Class [ ' +
                gp.constructor.name +
                ' ] Please use "' +
                gZ +
                '(...)" instead of "' +
                gQ +
                '(...)"')
            : gZ &&
              (gI =
                'Class [ ' +
                gp.constructor.name +
                ' ] Unable replace from "' +
                gQ +
                '(...)" to "' +
                gZ +
                '(...)"'),
          (gW.value = function () {
            return ES(gI), gC.apply(this, arguments)
          }),
          gW
        )
      }
      function Eq(gp, gQ, gW) {
        var gZ,
          gY =
            'Class [ ' +
            gp.constructor.name +
            ' ] "' +
            gQ +
            '" has been deprecated but still in use'
        switch (typeof gW) {
          case 'object':
            if (gW) {
              var gI = gW
              gI.newReference &&
                (gY =
                  'Class [ ' +
                  gp.constructor.name +
                  ' ] Please use "' +
                  gI.newReference +
                  '" instead of "' +
                  gQ +
                  '"')
              gZ = gI.defaultValue
            } else {
              gZ = gp[gQ]
            }
            break
          case 'string':
            gW &&
              (gY =
                'Class [ ' +
                gp.constructor.name +
                ' ] Please use "' +
                gW +
                '" instead of "' +
                gQ +
                '"'),
              (gZ = gp[gQ])
            break
          default:
            gZ = gp[gQ]
        }
        delete gp[gQ] &&
          Object.defineProperty(gp, gQ, {
            get: function () {
              return ES(gY), gZ
            },
            set: function (gC) {
              ES(gY)
              gZ = gC
            },
            enumerable: true,
            configurable: true,
          })
      }
      function Ep(gp, gQ) {
        var gW = gp.length
        gQ < 0 || gQ >= gW || ((gp[gQ] = gp[gW - 1]), (gp.length = gW - 1))
      }
      var EQ,
        EW = (function () {
          function gp(gQ, gW) {
            this.count = 0
            this.Bt = Array(gW)
            this.jt = gQ
          }
          return (
            (gp.prototype.get = function () {
              if (this.count > 0) {
                --this.count
                var gQ = this.Bt[this.count]
                return (this.Bt[this.count] = null), gQ
              }
              return null
            }),
            (gp.prototype.put = function (gQ) {
              var gW = this.Bt
              if (this.count < gW.length) {
                if (this.jt && false === this.jt(gQ)) {
                  return
                }
                gW[this.count] = gQ
                ++this.count
              }
            }),
            (gp.prototype.resize = function (gQ) {
              gQ >= 0 &&
                ((this.Bt.length = gQ), this.count > gQ && (this.count = gQ))
            }),
            gp
          )
        })(),
        EZ = new EW(function (gp) {
          return (
            (gp.callback = function () {}),
            (gp.target = void 0),
            (gp.once = false),
            true
          )
        }, 32),
        EY = (function () {
          function gp() {
            this.callback = function () {}
            this.target = void 0
            this.once = false
          }
          return (
            (gp.prototype.set = function (gQ, gW, gZ) {
              this.callback = gQ
              this.target = gW
              this.once = !!gZ
            }),
            gp
          )
        })(),
        EI = (function () {
          function gp() {
            this.callbackInfos = []
            this.isInvoking = false
            this.containCancelled = false
          }
          return (
            (gp.prototype.removeByCallback = function (gQ) {
              for (var gW = 0; gW < this.callbackInfos.length; ++gW) {
                var gZ = this.callbackInfos[gW]
                gZ &&
                  gZ.callback === gQ &&
                  (EZ.put(gZ), Ep(this.callbackInfos, gW), --gW)
              }
            }),
            (gp.prototype.removeByTarget = function (gQ) {
              for (var gW = 0; gW < this.callbackInfos.length; ++gW) {
                var gZ = this.callbackInfos[gW]
                gZ &&
                  gZ.target === gQ &&
                  (EZ.put(gZ), Ep(this.callbackInfos, gW), --gW)
              }
            }),
            (gp.prototype.cancel = function (gQ) {
              var gW = this.callbackInfos[gQ]
              gW && (EZ.put(gW), (this.callbackInfos[gQ] = null))
              this.containCancelled = true
            }),
            (gp.prototype.cancelAll = function () {
              for (var gQ = 0; gQ < this.callbackInfos.length; gQ++) {
                var gW = this.callbackInfos[gQ]
                gW && (EZ.put(gW), (this.callbackInfos[gQ] = null))
              }
              this.containCancelled = true
            }),
            (gp.prototype.purgeCancelled = function () {
              for (var gQ = this.callbackInfos.length - 1; gQ >= 0; --gQ) {
                this.callbackInfos[gQ] || Ep(this.callbackInfos, gQ)
              }
              this.containCancelled = false
            }),
            (gp.prototype.clear = function () {
              this.cancelAll()
              this.callbackInfos.length = 0
              this.isInvoking = false
              this.containCancelled = false
            }),
            gp
          )
        })(),
        EC = new EW(function (gp) {
          return (
            (gp.callbackInfos.length = 0),
            (gp.isInvoking = false),
            (gp.containCanceled = false),
            true
          )
        }, 16),
        ED = (function () {
          function gp() {
            var gQ
            this.callbackTable =
              (((gQ = Object.create(null))['.'] = true),
              (gQ['/'] = true),
              delete gQ['.'],
              delete gQ['/'],
              gQ)
          }
          return (
            (gp.prototype.on = function (gQ, gW, gZ, gY) {
              var gI = this.callbackTable[gQ]
              gI || (gI = this.callbackTable[gQ] = EC.get() || new EI())
              var gC = EZ.get() || new EY()
              gC.set(gW, gZ, gY)
              gI.callbackInfos.push(gC)
            }),
            (gp.prototype.hasEventListener = function (gQ, gW, gZ) {
              var gY = this.callbackTable[gQ]
              if (!gY) {
                return false
              }
              var gI = gY.callbackInfos
              if (!gW) {
                if (gY.isInvoking) {
                  for (var gC = 0; gC < gI.length; ++gC) {
                    if (gI[gC]) {
                      return true
                    }
                  }
                  return false
                }
                return gI.length > 0
              }
              for (gC = 0; gC < gI.length; ++gC) {
                var gD = gI[gC]
                if (gD && gD.callback === gW && gD.target === gZ) {
                  return true
                }
              }
              return false
            }),
            (gp.prototype.removeAll = function (gQ) {
              if ('string' != typeof gQ) {
                if (void 0 === gQ) {
                  for (var gW in this.callbackTable)
                    void 0 !== gW &&
                      (gZ = this.callbackTable[gW]) &&
                      (gZ.isInvoking
                        ? gZ.cancelAll()
                        : (gZ.clear(),
                          EC.put(gZ),
                          delete this.callbackTable[gW]))
                } else {
                  for (var gW in this.callbackTable) {
                    var gZ
                    if (void 0 !== gW) {
                      if ((gZ = this.callbackTable[gW]).isInvoking) {
                        for (
                          var gY = gZ.callbackInfos, gI = 0;
                          gI < gY.length;
                          ++gI
                        ) {
                          var gC = gY[gI]
                          gC && gC.target === gQ && gZ.cancel(gI)
                        }
                      } else {
                        gZ.removeByTarget(gQ)
                      }
                    }
                  }
                }
              } else {
                ;(gZ = this.callbackTable[gQ]) &&
                  (gZ.isInvoking
                    ? gZ.cancelAll()
                    : (gZ.clear(), EC.put(gZ), delete this.callbackTable[gQ]))
              }
            }),
            (gp.prototype.off = function (gQ, gW, gZ) {
              var gY = this.callbackTable[gQ]
              if (gY) {
                for (var gI = gY.callbackInfos, gC = 0; gC < gI.length; ++gC) {
                  var gD = gI[gC]
                  if (gD && gD.callback === gW && gD.target === gZ) {
                    return (
                      gY.isInvoking ? gY.cancel(gC) : (Ep(gI, gC), EZ.put(gD)),
                      true
                    )
                  }
                }
              }
              return false
            }),
            (gp.prototype.emit = function (gQ, gW, gZ, gY, gI, gC) {
              var gD = this.callbackTable[gQ]
              if (gD) {
                var gB = !gD.isInvoking
                gD.isInvoking = true
                for (
                  var gP = gD.callbackInfos, h0 = 0, h1 = gP.length;
                  h0 < h1;
                  ++h0
                ) {
                  var h2 = gP[h0]
                  if (h2) {
                    var h3 = h2.target,
                      h4 = h2.callback
                    h2.once && this.off(gQ, h4, h3)
                    h3
                      ? h4.call(h3, gW, gZ, gY, gI, gC)
                      : h4(gW, gZ, gY, gI, gC)
                  }
                }
                gB &&
                  ((gD.isInvoking = false),
                  gD.containCancelled && gD.purgeCancelled())
              }
            }),
            (gp.prototype.add = function (gQ, gW, gZ, gY) {
              this.on(gQ, gW, gZ, gY)
            }),
            (gp.prototype.remove = function (gQ, gW, gZ) {
              return this.off(gQ, gW, gZ)
            }),
            (gp.prototype.invoke = function (gQ, gW, gZ, gY, gI, gC) {
              this.emit(gQ, gW, gZ, gY, gI, gC)
            }),
            gp
          )
        })()
      function EB(gp, gQ) {
        var gW = gp.indexOf(gQ)
        gW >= 0 && ((gp[gW] = gp[gp.length - 1]), --gp.length)
      }
      !(function (gp) {
        gp['__eventTargets'] = '__eventTargets'
      })(EQ || (EQ = {}))
      var EP,
        K0,
        K1,
        ga = (function (gp) {
          function gQ() {
            return gp.call(this) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.on = function (gW, gZ, gY, gI) {
              if (!gZ) {
                throw Error('Callback of event must be non-nil')
              }
              return (
                this.hasEventListener(gW, gZ, gY) ||
                  (gp.prototype.on.call(this, gW, gZ, gY, gI),
                  gY &&
                    gY[EQ['__eventTargets']] &&
                    gY[EQ['__eventTargets']].push(this)),
                gZ
              )
            }),
            (gQ.prototype.off = function (gW, gZ, gY) {
              if (!gZ) {
                var gI = this.callbackTable[gW]
                if (!gI) {
                  return false
                }
                for (
                  var gC = gI.callbackInfos, gD = gC.length, gB = 0;
                  gB < gD;
                  ++gB
                ) {
                  var gP = gC[gB],
                    h0 = gP && gP.target
                  h0 &&
                    h0[EQ['__eventTargets']] &&
                    EB(h0[EQ['__eventTargets']], this)
                }
                return this.removeAll(gW), gD > 0
              }
              var h1 = gp.prototype.off.call(this, gW, gZ, gY)
              return (
                h1 &&
                  gY &&
                  gY[EQ['__eventTargets']] &&
                  EB(gY[EQ['__eventTargets']], this),
                h1
              )
            }),
            (gQ.prototype.targetOff = function (gW) {
              this.removeAll(gW)
              gW &&
                gW[EQ['__eventTargets']] &&
                (function (gZ, gY) {
                  for (var gI; -1 !== (gI = gZ.indexOf(gY, gI)); ) {
                    gZ[gI] = gZ[gZ.length - 1]
                    --gZ.length
                  }
                })(gW[EQ['__eventTargets']], this)
            }),
            (gQ.prototype.once = function (gW, gZ, gY) {
              this.on(gW, gZ, gY, true)
            }),
            (gQ.prototype.dispatchEvent = function (gW) {
              this.emit(gW.type, gW)
            }),
            gQ
          )
        })(ED)
      !(function (gp) {
        gp[(gp.STOPPED = 0)] = 'STOPPED'
        gp[(gp.PAUSED = 1)] = 'PAUSED'
        gp[(gp.PLAYING = 2)] = 'PLAYING'
      })(EP || (EP = {}))
      ;(function (gp) {
        gp.PLAY = 'play'
        gp.STOP = 'stop'
        gp.ENDED = 'ended'
        gp.PAUSE = 'pause'
        gp.RESUME = 'resume'
        gp.FADED = 'faded'
        gp.VOLUME = 'volume'
        gp.MUTE = 'mute'
        gp.RATE = 'rate'
        gp.LOOP = 'loop'
        gp.SEEK = 'seek'
      })(K0 || (K0 = {}))
      var K2,
        K3,
        K4,
        K5 = (function (gp) {
          function gQ(gW, gZ) {
            var gY = gp.call(this) || this
            var gI = gQ.context,
              gC = (gY.Qt = gI.createGain()),
              gD = (gY.Tt = gW)
            return (
              (gY.Lt = EP.STOPPED),
              gC.connect(gI.destination),
              gZ ? gY.reset(gZ) : (gY.Zt = gD.duration),
              gY
            )
          }
          return (
            V1(gQ, gp),
            Object.defineProperty(gQ, 'context', {
              get: function () {
                if (('function' == typeof K1 && (K1 = K1()), K1)) {
                  return K1
                }
                try {
                  K1 = new (E.AudioContext ||
                    E.webkitAudioContext ||
                    E.mozAudioContext ||
                    E.oAudioContext ||
                    E.msAudioContext)()
                } catch (gW) {
                  throw Error(
                    "WebAudio :: context : Audio context not supported in your browser! Error: '".concat(
                      gW instanceof Error ? gW.message : gW,
                      "'"
                    )
                  )
                }
                return K1
              },
              enumerable: false,
              configurable: true,
            }),
            (gQ.setContext = function (gW) {
              K1 = gW
            }),
            (gQ.prototype.reset = function (gW) {
              if (
                (this.Ft(),
                this.It(false),
                (this.Wt = void 0),
                (this.Gt = false),
                (this.Rt = 1),
                (this.Ot = false),
                (this.Dt = -1),
                (this.Nt = 0),
                (this.Pt = 0),
                (this.Zt = this.Tt.duration),
                void 0 !== gW)
              ) {
                var gZ = gW.loop,
                  gY = gW.volume,
                  gI = gW.muted,
                  gC = gW.rate
                'boolean' == typeof gZ && (this.Gt = gZ)
                'number' == typeof gY && gY >= 0 && gY <= 1 && (this.Rt = gY)
                'boolean' == typeof gI && (this.Ot = gI)
                'number' == typeof gC &&
                  gC > 0 &&
                  (this.Wt = {
                    applyTime: void 0,
                    rate: gC,
                    offset: 0,
                  })
              }
              this.zt()
              this.Lt = EP.STOPPED
            }),
            (gQ.prototype.destroy = function () {
              this.reset()
              this.removeAll()
              this.Qt = void 0
            }),
            (gQ.prototype.Ft = function () {
              var gW = this.Ut
              if (gW) {
                this.Ut = void 0
                gW.stop(0)
                try {
                } catch (gZ) {}
              }
            }),
            (gQ.prototype.play = function (gW, gZ) {
              this.paused || (this.qt(gW, gZ), this.emit(K0.PLAY, this))
            }),
            (gQ.prototype.stop = function () {
              if (!this.stopped) {
                void 0 !== this.Wt &&
                  (1 === this.Wt.rate
                    ? (this.Wt = void 0)
                    : ((this.Wt.applyTime = void 0), (this.Wt.offset = 0)))
                this.Yt()
                this.Lt = EP.STOPPED
                try {
                  this.Jt(0)
                } catch (gW) {
                  throw Error(
                    'WebAudio :: stop : '.concat(
                      gW instanceof Error ? gW.message : gW
                    )
                  )
                }
                this.emit(K0.STOP, this)
              }
            }),
            (gQ.prototype.resume = function () {
              if (this.paused) {
                return this.qt(), void this.emit(K0.RESUME, this)
              }
            }),
            (gQ.prototype.pause = function () {
              this.Lt === EP.PLAYING &&
                (this.Yt(), (this.Lt = EP.PAUSED), this.emit(K0.PAUSE, this))
            }),
            (gQ.prototype.qt = function (gW, gZ, gY) {
              void 0 === gY && (gY = false)
              this.playing && (this.Ft(), gY || (this.Nt = 0), this.It(true))
              var gI = this.Nt,
                gC = this.Tt.duration,
                gD = 'number' == typeof gW && gW >= 0 && gW < gC,
                gB =
                  'number' == typeof gZ &&
                  gZ > 0 &&
                  (gD ? gZ + gW <= gC : gZ <= gC)
              gD || gB
                ? ((gW = this.Pt = gD ? gW : 0),
                  (gZ = this.Zt = gB ? gZ : gC - gW))
                : ((gW = this.Pt + gI), (gZ = this.Zt - gI))
              var gP = gQ.context,
                h0 = gP.createBufferSource()
              h0.connect(this.Qt)
              this.Dt = gP.currentTime - gI
              this.Gt
                ? ((h0.loop = true),
                  (h0.loopStart = this.Pt),
                  (h0.loopEnd = this.Pt + this.Zt),
                  h0.start(0, gW))
                : h0.start(0, gW, gZ)
              this.Lt = EP.PLAYING
              this.Wt &&
                void 0 === this.Wt.applyTime &&
                (1 === this.Wt.rate
                  ? (this.Wt = void 0)
                  : ((h0.playbackRate.value = this.Wt.rate),
                    (this.Wt.applyTime = gP.currentTime)))
              this.Xt()
              this.Ut = h0
            }),
            (gQ.prototype.Yt = function () {
              var gW = gQ.context.currentTime - this.Dt
              this.Dt = -1
              this.Ut &&
                (this.Ft(),
                this.Wt &&
                  void 0 !== this.Wt.applyTime &&
                  ((gW += this['$t']()),
                  (this.Wt.applyTime = void 0),
                  (this.Wt.offset = 0)))
              this.Nt = gW % this.Zt
              this.tn()
            }),
            Object.defineProperty(gQ.prototype, 'paused', {
              get: function () {
                return this.Lt === EP.PAUSED
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gQ.prototype, 'playing', {
              get: function () {
                return this.Lt === EP.PLAYING
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gQ.prototype, 'stopped', {
              get: function () {
                return this.Lt === EP.STOPPED
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gQ.prototype, 'volume', {
              get: function () {
                return this.Rt
              },
              set: function (gW) {
                this.Rt = gW
                this.It(false)
                this.zt()
                this.emit(K0.VOLUME, this)
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gQ.prototype, 'instantVolume', {
              get: function () {
                return this.Qt.gain.value
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gQ.prototype, 'muted', {
              get: function () {
                return this.Ot
              },
              set: function (gW) {
                gW !== this.Ot &&
                  ((this.Ot = gW),
                  this.It(false),
                  this.zt(),
                  this.emit(K0.MUTE, this))
              },
              enumerable: false,
              configurable: true,
            }),
            (gQ.prototype.zt = function () {
              var gW = this.Ot ? 0 : this.Rt
              this.Qt.gain.setValueAtTime(gW, gQ.context.currentTime)
            }),
            Object.defineProperty(gQ.prototype, 'rate', {
              get: function () {
                return this.Wt ? this.Wt.rate : 1
              },
              set: function (gW) {
                if (!(gW <= 0)) {
                  if (void 0 === this.Wt) {
                    this.Wt = {
                      applyTime: this.playing ? gQ.context.currentTime : void 0,
                      rate: gW,
                      offset: 0,
                    }
                  } else {
                    if (this.Wt.rate === gW) {
                      return
                    }
                    void 0 !== this.Wt.applyTime &&
                      this.playing &&
                      ((this.Wt.offset = this['$t']()),
                      (this.Wt.applyTime = gQ.context.currentTime))
                    this.Wt.rate = gW
                  }
                  void 0 !== this.Wt.applyTime &&
                    this.Ut &&
                    ((this.Ut.playbackRate.value = gW), this.tn(), this.Xt())
                  this.emit(K0.RATE, this)
                }
              },
              enumerable: false,
              configurable: true,
            }),
            (gQ.prototype['$t'] = function () {
              if (this.Wt && void 0 !== this.Wt.applyTime) {
                var gW =
                  (gQ.context.currentTime - this.Wt.applyTime) *
                  (this.Wt.rate - 1)
                return this.Wt.offset + gW
              }
              return 0
            }),
            (gQ.prototype.fade = function (gW, gZ, gY) {
              var gI = this.Ot,
                gC = gI ? 0 : gW,
                gD = gI ? 0 : gZ
              if (this.Lt !== EP.PLAYING || this.Ot || gW === gZ || 0 === gY) {
                this.volume = gZ
              } else {
                var gB = gY
                this.Wt && (gY /= this.Wt.rate)
                this.volume = gW
                this.Qt.gain.linearRampToValueAtTime(
                  gZ,
                  gQ.context.currentTime + gY
                )
                this.Rt = gZ
                this.nn = {
                  from: gC,
                  to: gD,
                  duration: gB,
                  cancel: setTimeout(this.rn.bind(this), 1000 * gY),
                }
              }
            }),
            (gQ.prototype.It = function (gW) {
              void 0 !== this.nn &&
                (void 0 !== this.nn.cancel && clearTimeout(this.nn.cancel),
                this.Qt.gain.cancelScheduledValues(gQ.context.currentTime),
                gW && ((this.Rt = this.nn.to), this.zt()),
                (this.nn = void 0))
            }),
            (gQ.prototype.tn = function () {
              void 0 !== this.nn &&
                this.nn.cancel &&
                (clearTimeout(this.nn.cancel),
                (this.nn.cancel = void 0),
                this.Qt.gain.cancelScheduledValues(gQ.context.currentTime))
            }),
            (gQ.prototype.Xt = function () {
              if (void 0 !== this.nn && !this.nn.cancel) {
                var gW = this.nn.to,
                  gZ = this.nn.from,
                  gY = this.nn.duration,
                  gI = gW - gZ,
                  gC = (this.Qt.gain.value - gZ) / gI
                ;(gC < 0 || gC > 1) &&
                  ((gC = 0),
                  this.Qt.gain.setValueAtTime(gZ, gQ.context.currentTime))
                var gD = gY * (1 - gC)
                this.Wt && void 0 !== this.Wt.applyTime && (gD /= this.Wt.rate)
                this.Rt = gW
                this.Qt.gain.linearRampToValueAtTime(
                  gW,
                  gQ.context.currentTime + gD
                )
                this.nn.cancel = setTimeout(this.rn.bind(this), 1000 * gD)
              }
            }),
            Object.defineProperty(gQ.prototype, 'loop', {
              get: function () {
                return this.Gt
              },
              set: function (gW) {
                this.Gt !== gW &&
                  (this.playing
                    ? (this.Yt(), (this.Gt = gW), this.qt())
                    : (this.Gt = gW),
                  this.emit(K0.LOOP, this))
              },
              enumerable: false,
              configurable: true,
            }),
            (gQ.prototype.seek = function (gW) {
              if (!this.stopped) {
                if (gW >= this.Zt) {
                  if (!this.loop) {
                    return this.nn && this.It(true), void this.Kt()
                  }
                  gW %= this.duration
                }
                try {
                  this.Jt(gW)
                } catch (gZ) {
                  throw Error(
                    'WebAudio :: seek : '.concat(
                      gZ instanceof Error ? gZ.message : gZ
                    )
                  )
                }
                this.paused && this.resume()
                this.emit(K0.SEEK, this)
              }
            }),
            (gQ.prototype.Jt = function (gW) {
              if (gW < 0) {
                throw Error('Time value cannot be smaller than 0.')
              }
              this.It(true)
              this.playing
                ? (this.Wt &&
                    void 0 !== this.Wt.applyTime &&
                    ((this.Wt.applyTime = void 0), (this.Wt.offset = 0)),
                  this.Yt(),
                  (this.Nt = gW),
                  this.qt(void 0, void 0, true))
                : (this.Nt = gW)
            }),
            Object.defineProperty(gQ.prototype, 'currentTime', {
              get: function () {
                if (this.Lt !== EP.PLAYING) {
                  return this.Nt
                }
                var gW = gQ.context.currentTime - this.Dt
                return (gW += this['$t']()) % this.Zt
              },
              enumerable: false,
              configurable: true,
            }),
            (gQ.prototype.Kt = function () {
              this.Lt = EP.STOPPED
              this.Nt = 0
              this.Ft()
              void 0 !== this.Wt &&
                (1 === this.Wt.rate
                  ? (this.Wt = void 0)
                  : ((this.Wt.applyTime = void 0), (this.Wt.offset = 0)))
              this.nn && (this.It(true), this.emit(K0.FADED, this))
              this.emit(K0.ENDED, this)
            }),
            (gQ.prototype.rn = function () {
              this.nn && ((this.nn = void 0), this.emit(K0.FADED, this))
            }),
            Object.defineProperty(gQ.prototype, 'duration', {
              get: function () {
                return this.Zt
              },
              enumerable: false,
              configurable: true,
            }),
            gQ
          )
        })(ga),
        K6 = 'FCGame',
        K7 = 'FCShared',
        Kz = [K6, K7]
      function Kb(gp, gQ, gW, gZ) {
        return (
          void 0 === gZ && (gZ = true),
          V3(this, void 0, void 0, function () {
            var gY, gI, gC
            return V4(this, function (gD) {
              switch (gD.label) {
                case 0:
                  return null == gW || 200 !== gW.status
                    ? [2, false]
                    : [
                        4,
                        (0,
                        new Promise(function (gB) {
                          setTimeout(gB, 0)
                        })),
                      ]
                case 1:
                  gD.sent(),
                    (gY = gZ ? Kz.slice() : void 0),
                    (gI = function () {
                      var gB, gP
                      return V4(this, function (h0) {
                        switch (h0.label) {
                          case 0:
                            return (
                              h0.trys.push([0, 2, , 4]),
                              [
                                4,
                                caches.open(gp).then(function (h1) {
                                  return h1.put(gQ, gW)
                                }),
                              ]
                            )
                          case 1:
                            return h0.sent(), [2, { value: true }]
                          case 2:
                            if (
                              !((gB = h0.sent()) instanceof Error) ||
                              'QuotaExceededError' !== gB.name
                            ) {
                              throw gB
                            }
                            return (gP = null == gY ? void 0 : gY[0])
                              ? [
                                  4,
                                  caches.keys().then(function (h1) {
                                    return Promise.all(
                                      h1.map(function (h2) {
                                        return h2 !== gp && h2.startsWith(gP)
                                          ? caches.delete(h2)
                                          : void 0
                                      })
                                    )
                                  }),
                                ]
                              : [2, 'continue']
                          case 3:
                            return h0.sent(), [3, 4]
                          case 4:
                            return [2]
                        }
                      })
                    }),
                    (gD.label = 2)
                case 2:
                  return [5, gI()]
                case 3:
                  if ('object' == typeof (gC = gD.sent())) {
                    return [2, gC.value]
                  }
                  gD.label = 4
                case 4:
                  if (void 0 !== (null == gY ? void 0 : gY.shift())) {
                    return [3, 2]
                  }
                  gD.label = 5
                case 5:
                  return [2, false]
              }
            })
          })
        )
      }
      var KE = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        json: 'application/json',
        jsonc: 'application/json',
        txt: 'text/plain',
        plist: 'text/plain',
        atlas: 'text/plain',
        tiff: 'image/jpeg',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        mp3: 'audio/mpeg',
        wav: 'audio/wav',
      }
      function KK(gp, gQ) {
        return (function () {
          var gW
          if (K3) {
            return K3
          }
          var gZ,
            gY =
              'serviceWorker' in navigator &&
              void 0 !== navigator.serviceWorker &&
              null != navigator.serviceWorker.controller,
            gI =
              'caches' in u &&
              void 0 !== u.caches &&
              caches.open('__test').catch(function () {}),
            gC = {
              sn: gY,
              an: false,
              un: (gZ = RegExp(
                'blob:'
                  .concat(location.origin, '/')
                  .concat(
                    '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}',
                    ':'
                  ),
                'g'
              )),
              cn:
                (null === (gW = null == K4 ? void 0 : K4.cacheOrigins) ||
                void 0 === gW
                  ? void 0
                  : gW.slice()) || [],
            },
            gD = null == K4 ? void 0 : K4.blobRegistry
          return (
            gD && gZ && Object.assign(Ky, gD),
            (K3 = Promise.resolve(gI).then(function (gB) {
              return (
                (gC.an = !!gB),
                gC.sn && gC.an
                  ? caches
                      .keys()
                      .then(function (gP) {
                        return Promise.all(
                          gP.map(function (h0) {
                            return /^FCGame\/|^FCShared|^FCEntry/.test(h0)
                              ? caches.delete(h0)
                              : void 0
                          })
                        )
                      })
                      .then(function () {
                        return (K2 = gC)
                      })
                  : (K2 = gC)
              )
            })),
            K3
          )
        })().then(function (gW) {
          var gZ = function () {
            return u.sign
              ? (function (h0, h1) {
                  return V3(this, void 0, void 0, function () {
                    var h2, h3
                    return V4(this, function (h4) {
                      switch (h4.label) {
                        case 0:
                          return 'string' != typeof h0
                            ? [3, 2]
                            : [4, E.sign.getSignedUrl(h0)]
                        case 1:
                          return (h2 = h4.sent()), [2, new Request(h2, h1)]
                        case 2:
                          return [4, E.sign.getSignedUrl(h0.url)]
                        case 3:
                          return (h3 = h4.sent()), [2, new Request(h3, h0)]
                      }
                    })
                  })
                })(gp, gQ).then(function (h0) {
                  return u.fetch(h0)
                })
              : u.fetch(gp, gQ)
          }
          if (gW.sn || !gW.an) {
            return gZ()
          }
          var gY = new URL('string' == typeof gp ? gp : gp.url, location.href),
            gI = gY.origin === location.origin,
            gC = gI || gW.cn.includes(gY.origin),
            gD = gY.pathname
          if ('file:' === gY.protocol) {
            return (function (h0, h1) {
              return new Promise(function (h2, h3) {
                var h4 = new XMLHttpRequest()
                h4.open('GET', h0, true)
                h4.onload = function () {
                  var h5
                  h1 && (h5 = { 'content-type': h1 })
                  var h6 = {
                      status: 200,
                      headers: h5,
                    },
                    h7 = new Response(h4.response, h6)
                  h2(h7)
                }
                h4.onerror = function () {
                  h3(Error('Local request failed'))
                }
                h4.responseType = 'blob'
                h1 && h4.overrideMimeType(h1)
                h4.send()
              })
            })(
              gY,
              (function (h0) {
                var h1 = h0.lastIndexOf('.'),
                  h2 = h1 > 0 ? h0.substring(h1 + 1) : void 0
                return h2 ? KE[h2] : void 0
              })(gD)
            )
          }
          if (!gI && !gC) {
            return gZ()
          }
          var gB = gY.origin + gD
          if (/\/index(?:\.[a-z0-9]{3})?\.(?:html|json|js|jsonc)$/.test(gD)) {
            return gZ()
              .then(function (h0) {
                return (
                  Kb('FCEntry', gB, h0.clone(), false).catch(function () {}), h0
                )
              })
              .catch(function (h0) {
                return caches.match(gB).then(function (h1) {
                  if (h1) {
                    return h1
                  }
                  throw h0
                })
              })
          }
          if (!/\/[A-Za-z0-9._~@-]+\.[a-f0-9]{5}\.[a-z0-9]{2,6}$/.test(gD)) {
            return gZ()
          }
          var gP = gD.startsWith('/shared/')
            ? K7
            : ''.concat(K6, '/').concat(gD.substring(1, gD.indexOf('/', 1)))
          return caches.open(gP).then(function (h0) {
            return h0.match(gB).then(function (h1) {
              return (
                h1 ||
                gZ().then(function (h2) {
                  return Kb(gP, gB, h2.clone()).catch(function () {}), h2
                })
              )
            })
          })
        })
      }
      function KU(gp) {
        return KK(gp).then(function (gQ) {
          if (!gQ.ok) {
            throw gQ.status
          }
          return gQ.blob().then(function (gW) {
            var gZ = gQ.headers.get('content-type') || '',
              gY = /^(text|application)\/javascript(;|$)/.test(gZ),
              gI = gY ? gQ.url || new URL(gp, location.href).href : void 0
            gY &&
              void 0 === K2.un &&
              (gW = new Blob([gW, '\n//# sourceURL='.concat(gI)], { type: gZ }))
            var gC = URL.createObjectURL(gW)
            return gY && void 0 !== K2.un && Kg(gC, gI), gC
          })
        })
      }
      var Kf,
        Ky = Object.create(null)
      function Kg(gp, gQ) {
        void 0 !== (null == K2 ? void 0 : K2.un) && (Ky[gp] = gQ)
      }
      function Kv(gp) {
        return delete Ky[gp]
      }
      function Kj(gp) {
        return Ky[gp]
      }
      function KF(gp) {
        var gQ = null == K2 ? void 0 : K2.un
        return gp && void 0 !== gQ
          ? gp.replace(gQ, function (gW) {
              var gZ = Ky[gW.slice(0, -1)]
              return void 0 !== gZ ? gZ + ':' : gW
            })
          : gp
      }
      function Kx(gp) {
        return EE(gp)
      }
      function KO(gp) {
        return JSON.parse(
          ((gW = Eb((gQ = gp))),
          gQ !== gW && (gW = EH((gW = atob(gW)), 'kA7xqJZa')),
          gW)
        )
        var gQ, gW
      }
      var KX = Object.prototype.hasOwnProperty,
        KM = function (gp, gQ) {
          return KX.call(gp, gQ)
        },
        KN = String.prototype.trim,
        KA = function () {},
        Kw = String.prototype.replace,
        KR = String.prototype.split,
        KG = '||||',
        KT = function (gp) {
          var gQ = gp % 10
          return 11 !== gp && 1 === gQ
            ? 0
            : 2 <= gQ && gQ <= 4 && !(gp >= 12 && gp <= 14)
            ? 1
            : 2
        },
        Km = {
          arabic: function (gp) {
            if (gp < 3) {
              return gp
            }
            var gQ = gp % 100
            return gQ >= 3 && gQ <= 10 ? 3 : gQ >= 11 ? 4 : 5
          },
          bosnian_serbian: KT,
          chinese: function () {
            return 0
          },
          croatian: KT,
          french: function (gp) {
            return gp > 1 ? 1 : 0
          },
          german: function (gp) {
            return 1 !== gp ? 1 : 0
          },
          russian: KT,
          lithuanian: function (gp) {
            return gp % 10 == 1 && gp % 100 != 11
              ? 0
              : gp % 10 >= 2 && gp % 10 <= 9 && (gp % 100 < 11 || gp % 100 > 19)
              ? 1
              : 2
          },
          czech: function (gp) {
            return 1 === gp ? 0 : gp >= 2 && gp <= 4 ? 1 : 2
          },
          polish: function (gp) {
            if (1 === gp) {
              return 0
            }
            var gQ = gp % 10
            return 2 <= gQ && gQ <= 4 && (gp % 100 < 10 || gp % 100 >= 20)
              ? 1
              : 2
          },
          icelandic: function (gp) {
            return gp % 10 != 1 || gp % 100 == 11 ? 1 : 0
          },
          slovenian: function (gp) {
            var gQ = gp % 100
            return 1 === gQ ? 0 : 2 === gQ ? 1 : 3 === gQ || 4 === gQ ? 2 : 3
          },
        },
        Kd = (function (gp) {
          var gQ = {}
          for (var gW in gp)
            if (KM(gp, gW)) {
              for (var gZ = gp[gW], gY = 0; gY < gZ.length; ++gY) {
                gQ[gZ[gY]] = gW
              }
            }
          return gQ
        })({
          arabic: ['ar'],
          bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
          chinese: [
            'id',
            'id-ID',
            'ja',
            'ko',
            'ko-KR',
            'lo',
            'ms',
            'th',
            'th-TH',
            'zh',
          ],
          croatian: ['hr', 'hr-HR'],
          german: [
            'fa',
            'da',
            'de',
            'en',
            'es',
            'fi',
            'el',
            'he',
            'hi-IN',
            'hu',
            'hu-HU',
            'it',
            'nl',
            'no',
            'pt',
            'sv',
            'tr',
          ],
          french: ['fr', 'tl', 'pt-br'],
          russian: ['ru', 'ru-RU'],
          lithuanian: ['lt'],
          czech: ['cs', 'cs-CZ', 'sk'],
          polish: ['pl'],
          icelandic: ['is'],
          slovenian: ['sl-SL'],
        })
      function KL(gp) {
        return gp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      }
      function KJ(gp, gQ, gW, gZ) {
        if ('string' != typeof gp) {
          throw new TypeError(
            'Polyglot.transformPhrase expects argument #1 to be string'
          )
        }
        if (null == gQ) {
          return gp
        }
        var gY = gp,
          gI = gZ || /%\{(.*?)\}/g,
          gC = 'number' == typeof gQ ? { smart_count: gQ } : gQ
        if (null != gC.smart_count && gY) {
          var gD = KR.call(gY, KG)
          gY = KN.call(
            gD[
              (function (gB, gP) {
                return Km[
                  (function (h0) {
                    return Kd[h0] || Kd[KR.call(h0, /-/, 1)[0]] || Kd.en
                  })(gB)
                ](gP)
              })(gW || 'en', gC.smart_count)
            ] || gD[0]
          )
        }
        return (
          (gY = Kw.call(gY, gI, function (gB, gP) {
            if (!KM(gC, gP) || null == gC[gP]) {
              return gB
            }
            var h0 = gC[gP]
            if ('object' == typeof h0) {
              if (KM(h0, 'ordinal')) {
                h0 = (function (h2, h3) {
                  switch (h3) {
                    case 'en':
                      return (
                        h2 +
                        ((h4 = ['th', 'st', 'nd', 'rd'])[
                          ((h5 = h2 % 100) - 20) % 10
                        ] ||
                          h4[h5] ||
                          h4[0])
                      )
                    case 'da':
                    case 'de':
                    case 'fi':
                    case 'no':
                    case 'tr':
                      return h2 + '.'
                    case 'es':
                    case 'it':
                      return h2 + 'ª'
                    case 'fr':
                      return h2 + (1 === h2 ? 're' : 'e')
                    case 'id':
                      return 'Ke-' + h2
                    case 'nl':
                      return h2 + 'e'
                    case 'pt':
                      return h2 + '.ª'
                    case 'ro':
                      return 1 === h2 ? h2 + '-a' : 'A ' + h2 + '-a'
                    case 'ru':
                      return h2 + '-й'
                    case 'sv':
                      var h4, h5
                      return (
                        h2 +
                        ((h4 = ['e', 'a', 'a'])[((h5 = h2 % 100) - 20) % 10] ||
                          h4[h5] ||
                          h4[0])
                      )
                    case 'th':
                      return 'ที่ ' + h2
                    case 'vi':
                      return 'thứ ' + h2
                    case 'zh':
                      return '第' + h2
                    default:
                      return h2
                  }
                })(h0.ordinal, gW)
              } else {
                for (var h1 in h0)
                  if (KM(h0, h1)) {
                    h0 = h0[h1]
                    break
                  }
              }
            }
            return Kw.call(h0, /\$/g, '$$')
          })),
          gY
        )
      }
      function Kq(gp) {
        var gQ = gp || {}
        this.phrases = {}
        this.extend(gQ.phrases || {})
        this.currentLocale = gQ.locale || 'en'
        var gW = gQ.allowMissing ? KJ : null
        this.onMissingKey =
          'function' == typeof gQ.onMissingKey ? gQ.onMissingKey : gW
        this.warn = gQ.warn || KA
        this.tokenRegex = (function (gZ) {
          var gY = (gZ && gZ.prefix) || '%{',
            gI = (gZ && gZ.suffix) || '}'
          if (gY === KG || gI === KG) {
            throw new RangeError('"||||" token is reserved for pluralization')
          }
          return RegExp(KL(gY) + '(.*?)' + KL(gI), 'g')
        })(gQ.interpolation)
      }
      Kq.prototype.locale = function (gp) {
        return gp && (this.currentLocale = gp), this.currentLocale
      }
      Kq.prototype.extend = function (gp, gQ) {
        for (var gW in gp)
          if (KM(gp, gW)) {
            var gZ = gp[gW],
              gY = gQ ? gQ + '.' + gW : gW
            'object' == typeof gZ
              ? this.extend(gZ, gY)
              : (this.phrases[gY] = gZ)
          }
      }
      Kq.prototype.unset = function (gp, gQ) {
        if ('string' == typeof gp) {
          delete this.phrases[gp]
        } else {
          for (var gW in gp)
            if (KM(gp, gW)) {
              var gZ = gp[gW],
                gY = gQ ? gQ + '.' + gW : gW
              'object' == typeof gZ
                ? this.unset(gZ, gY)
                : delete this.phrases[gY]
            }
        }
      }
      Kq.prototype.clear = function () {
        this.phrases = {}
      }
      Kq.prototype.replace = function (gp) {
        this.clear()
        this.extend(gp)
      }
      Kq.prototype.t = function (gp, gQ) {
        var gW,
          gZ,
          gY = null == gQ ? {} : gQ
        return (
          'string' == typeof this.phrases[gp]
            ? (gW = this.phrases[gp])
            : 'string' == typeof gY['_']
            ? (gW = gY['_'])
            : this.onMissingKey
            ? (gZ = (0, this.onMissingKey)(
                gp,
                gY,
                this.currentLocale,
                this.tokenRegex
              ))
            : (this.warn('Missing translation for key: "' + gp + '"'),
              (gZ = gp)),
          'string' == typeof gW &&
            (gZ = KJ(gW, gY, this.currentLocale, this.tokenRegex)),
          gZ
        )
      }
      Kq.prototype.has = function (gp) {
        return KM(this.phrases, gp)
      }
      Kq.transformPhrase = function (gp, gQ, gW) {
        return KJ(gp, gQ, gW)
      }
      var Kp = new Kq({
          warn: function () {},
        }),
        KQ = function (gp) {
          return Kp.t(gp)
        },
        KW = function () {
          return Kp.locale()
        },
        KZ = function () {
          var gp = Kp.locale()
          return ['ar', 'fa', 'ur'].includes(gp)
        }
      function KY(gp) {
        var gQ = {}
        for (var gW in gp)
          null !== gp[gW] && 'object' == typeof gp[gW] && gp.hasOwnProperty(gW)
            ? (gQ[gW] = KY(gp[gW]))
            : (gQ[gW] = gp[gW])
        return gQ
      }
      var KI,
        KC = (function () {
          function gp(gQ, gW, gZ, gY, gI) {
            void 0 === gZ && (gZ = void 0)
            void 0 === gY && (gY = null)
            void 0 === gI && (gI = null)
            this.key = gQ
            this.value = gW
            this.bufferInfo = gZ
            this.next = gY
            this.prev = gI
          }
          return (
            Object.defineProperty(gp.prototype, 'memorySize', {
              get: function () {
                return this.bufferInfo && this.bufferInfo.memorySize
              },
              enumerable: false,
              configurable: true,
            }),
            gp
          )
        })(),
        KD = (function () {
          function gp(gQ) {
            void 0 === gQ && (gQ = { arraySize: 10 })
            this.hn = void 0
            this.ln = void 0
            this.fn = void 0
            this.dn = void 0
            this.An = null
            this.vn = null
            this.pn = Object.create(null)
            var gW = gQ.arraySize,
              gZ = gQ.memorySize
            this.An = null
            this.vn = null
            this.pn = Object.create(null)
            this.hn = void 0 !== gW ? 0 : void 0
            this.ln = void 0 !== gW && gW ? gW : void 0
            this.fn = void 0 !== gZ ? 0 : void 0
            this.dn = void 0 !== gZ && gZ ? gZ : void 0
          }
          return (
            Object.defineProperty(gp.prototype, 'size', {
              get: function () {
                return Object.keys(this.pn).length
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'memory', {
              get: function () {
                return this.fn
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'maxSize', {
              get: function () {
                return this.ln
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'maxMemory', {
              get: function () {
                return this.dn
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.oldest = function () {
              return this.vn ? [this.vn.key, this.vn.value] : void 0
            }),
            (gp.prototype.newest = function () {
              return this.An ? [this.An.key, this.An.value] : void 0
            }),
            (gp.prototype.set = function (gQ, gW, gZ) {
              var gY = gZ && gZ.memorySize ? gZ.memorySize : void 0
              if ((this.gn(), void 0 !== gY && this.mn(gY), this.An)) {
                var gI = new KC(gQ, gW, gZ, this.An)
                this.An.prev = gI
                this.An = gI
              } else {
                this.An = this.vn = new KC(gQ, gW, gZ)
              }
              var gC = (this.pn[gQ] = this.An)
              this.bn(1)
              void 0 !== gY && this['_n'](gC.memorySize)
            }),
            (gp.prototype.pop = function () {
              if (this.vn) {
                var gQ = this.vn,
                  gW = gQ.key,
                  gZ = gQ.value
                return this.wn(gW), [gW, gZ]
              }
            }),
            (gp.prototype.get = function (gQ) {
              if (this.pn[gQ]) {
                var gW = this.pn[gQ],
                  gZ = gW.value,
                  gY = gW.bufferInfo
                return this.wn(gQ), this.set(gQ, gZ, gY), gZ
              }
            }),
            (gp.prototype.has = function (gQ) {
              return !!this.pn[gQ]
            }),
            (gp.prototype.find = function (gQ) {
              return this.pn[gQ] && this.pn[gQ].value
            }),
            (gp.prototype.delete = function (gQ) {
              var gW = this.pn[gQ]
              if (gW) {
                return this.wn(gQ), gW.value
              }
            }),
            (gp.prototype.clear = function () {
              this.An = null
              this.vn = null
              this.hn = this.hn && 0
              this.fn = this.fn && 0
              this.pn = Object.create(null)
            }),
            (gp.prototype.keys = function () {
              var gQ = []
              return (
                this.forEach(function (gW) {
                  return gQ.push(gW.key)
                }),
                gQ
              )
            }),
            (gp.prototype.values = function () {
              var gQ = []
              return (
                this.forEach(function (gW) {
                  return gQ.push(gW.value)
                }),
                gQ
              )
            }),
            (gp.prototype.forEach = function (gQ) {
              for (var gW = this.An, gZ = 0; gW; ) {
                gQ(
                  {
                    key: gW.key,
                    value: gW.value,
                  },
                  gZ
                )
                gW = gW.next
                gZ++
              }
            }),
            (gp.prototype.toJSON = function () {
              return KY(this.pn)
            }),
            (gp.prototype.toString = function () {
              return JSON.stringify(this.pn)
            }),
            (gp.prototype.wn = function (gQ) {
              var gW = this.pn[gQ],
                gZ = gW.memorySize
              null !== gW.prev ? (gW.prev.next = gW.next) : (this.An = gW.next)
              null !== gW.next ? (gW.next.prev = gW.prev) : (this.vn = gW.prev)
              delete this.pn[gQ]
              this.bn(-1)
              void 0 !== gZ && this['_n'](-gZ)
            }),
            (gp.prototype['_n'] = function (gQ) {
              void 0 !== this.fn && void 0 !== gQ && (this.fn += gQ)
            }),
            (gp.prototype.bn = function (gQ) {
              void 0 !== this.hn && void 0 !== gQ && (this.hn += gQ)
            }),
            (gp.prototype.gn = function () {
              void 0 !== this.hn &&
                this.hn === this.ln &&
                this.vn &&
                this.wn(this.vn.key)
            }),
            (gp.prototype.mn = function (gQ) {
              void 0 !== this.fn &&
                void 0 !== this.dn &&
                this.fn + gQ > this.dn &&
                (this.vn && this.wn(this.vn.key), this.mn(gQ))
            }),
            gp
          )
        })(),
        KB = function (gp, gQ) {
          for (var gW in gQ)
            'object' != typeof gp[gW]
              ? (gp[gW] = gQ[gW])
              : 'object' == typeof gQ[gW] && (gp[gW] = KB(gp[gW], gQ[gW]))
          return gp
        },
        KP = (function () {
          function gp(gQ, gW, gZ) {
            this.xn = Object.create(null)
            this.yn = Object.create(null)
            this.Hn = void 0
            this.xn = (gQ && KB(Object.create(null), gQ)) || Object.create(null)
            this.Hn = gW ? new KD({ arraySize: gZ || 5 }) : void 0
          }
          return (
            (gp.prototype.v = function (gQ) {
              var gW = this.Hn,
                gZ = gW && gW.get(gQ)
              if (void 0 !== gZ) {
                return gZ
              }
              for (
                var gY, gI = gQ.split('.'), gC = 0, gD = gI.length;
                gC < gD;
                gC++
              ) {
                var gB = gI[gC]
                if (void 0 === (gY = (gY && gY[gB]) || this.xn[gB])) {
                  return gW && gW.set(gQ, null), null
                }
              }
              var gP,
                h0 = 'string' != typeof gY ? gY[0] : gY
              if (RegExp(/^\$\{.*\}/).test(h0)) {
                return this.v(
                  h0.substring(h0.indexOf('{') + 1, h0.lastIndexOf('}'))
                )
              }
              if (!Array.isArray(gY)) {
                throw Error(
                  'The key : '.concat(
                    gQ,
                    ' does not refer to a final value in this domain!'
                  )
                )
              }
              var h1 = gY.slice(1),
                h2 = this.yn[h0]
              if (void 0 === h2) {
                throw Error(
                  'UIAppearance :: v : unable to locate interpreter for <'.concat(
                    h0,
                    '>'
                  )
                )
              }
              return (gP = h2.interpret(h1)), gW && gW.set(gQ, gP), gP
            }),
            (gp.prototype.extend = function (gQ) {
              this.Hn && this.Hn.clear()
              this.xn = KB(this.xn, gQ)
            }),
            (gp.prototype.registerInterpreter = function (gQ, gW) {
              void 0 === this.yn[gQ] && (this.yn[gQ] = gW)
            }),
            (gp.prototype.unregisterInterpreter = function (gQ) {
              var gW = this.yn[gQ]
              return (this.yn[gQ] = void 0), gW || null
            }),
            Object.defineProperty(gp.prototype, 'dataSource', {
              get: function () {
                return KB(Object.create(null), this.xn)
              },
              enumerable: false,
              configurable: true,
            }),
            gp
          )
        })(),
        e0 = new KP(void 0, true),
        e2 =
          (((KI = {})[u8] = {
            browser: 1,
            pc: 8,
            app: -1,
          }),
          (KI[u7] = {
            browser: 2,
            pc: 9,
            app: -1,
          }),
          (KI[u5] = {
            browser: 3,
            pc: -1,
            app: 6,
          }),
          (KI[u6] = {
            browser: 4,
            pc: -1,
            app: 7,
          }),
          KI)
      K5.setContext(function () {
        if (Ey.audioSupported) {
          return Ey.audioContext
        }
      })
      var e3,
        e4 = (function () {
          function gp() {
            this.StatusBarStyle = e1
            this.I18n = Kp
            this.uiAppearance = e0
            this.environment = Ey
            this.ResourceQualifier = EA
            this.deprecated = Ek
            this.WebAudio = K5
            this.WebAudioEvent = K0
            this.WebAudioState = EP
            this.CustomEventTarget = ga
            this.fetch = KK
            this.fetchBlobURL = KU
            this.registerBlobURL = Kg
            this.unregisterBlobURL = Kv
            this.translateLocation = KF
            this.revealBlobURL = Kj
            this.isValidAssets = Kx
            this.parseAssets = KO
          }
          return (
            (gp.prototype.getEnvironment = function () {
              return Ey.getPlatform()
            }),
            (gp.prototype.getOSName = function () {
              return Ey.getOSName()
            }),
            (gp.prototype.getGameContext = function () {
              return Kf
            }),
            (gp.prototype.getBrowserBaseType = function () {
              return Ey.getBrowserBaseType()
            }),
            (gp.prototype.getBrowserBaseVersion = function () {
              return Ey.getBrowserBaseVersion()
            }),
            (gp.prototype.isRTLLanguage = function () {
              return KZ()
            }),
            (gp.prototype.getVersionName = function () {
              return this.getVersionNameHander
                ? this.getVersionNameHander()
                : void 0
            }),
            (gp.prototype.setStatusBarStyle = function (gQ) {
              this.setStatusBarStyleHandler && this.setStatusBarStyleHandler(gQ)
            }),
            (gp.prototype.setStatusBarHidden = function (gQ) {
              this.setStatusBarHiddenHandler &&
                this.setStatusBarHiddenHandler(gQ)
            }),
            (gp.prototype.requestGameStart = function (gQ, gW) {
              this.requestGameStartHandler &&
                this.requestGameStartHandler(gQ, gW)
            }),
            (gp.prototype.setProgressMessage = function (gQ) {
              this.setProgressMessageHandler &&
                this.setProgressMessageHandler(gQ)
            }),
            (gp.prototype.setProgress = function (gQ, gW) {
              this.setProgressHandler && this.setProgressHandler(gQ, gW)
            }),
            (gp.prototype.setProgressVisible = function (gQ) {
              this.setProgressVisibleHandler &&
                this.setProgressVisibleHandler(gQ)
            }),
            (gp.prototype.showAlert = function (gQ) {
              this.showAlertHandler && this.showAlertHandler(gQ)
            }),
            Object.defineProperty(gp.prototype, 'location', {
              get: function () {
                return EV()
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.enablePromBeforeUnload = function (gQ) {
              this.context.event.emit('Shell.EnableUnloadAlert', gQ)
            }),
            Object.defineProperty(gp.prototype, 'urlSearch', {
              get: function () {
                return Ey.getURLSearchParam()
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.enableCanvasTouchPropagation = function (gQ) {
              this.enableCanvasTouchPropagationHandler &&
                this.enableCanvasTouchPropagationHandler(gQ)
            }),
            (gp.prototype.addPreloadPlugin = function (gQ, gW, gZ) {
              this.addPreloadPluginHandler &&
                this.addPreloadPluginHandler(gQ, gW, gZ)
            }),
            (gp.prototype.loadPlugin = function (gQ, gW) {
              this.loadPluginHandler && this.loadPluginHandler(gQ, gW)
            }),
            (gp.prototype.getPlatform = function () {
              var gQ = Ey.getOSName(),
                gW = this.getEnvironment(),
                gZ = 'browser' === gW ? 5 : -1
              return e2[gQ] && e2[gQ][gW] ? e2[gQ][gW] : gZ
            }),
            (gp.prototype.getGameInfo = function () {
              var gQ,
                gW = uN.Identifier
              return (
                gW && (gQ = gW.split('.').slice(0, 2).join('.')),
                {
                  name: uN.Name,
                  version: uN.Version.split('/')[0],
                  index: uN.Index,
                  identifier: gW,
                  organizationIdentifier: gQ,
                }
              )
            }),
            (gp.prototype.wasmTest = function () {
              return Promise.resolve([0, 0, 0])
            }),
            gp
          )
        })(),
        e5 = (E.shell = new e4())
      function e6() {
        return E.eval('"cc"')
      }
      var e7 = function (gp, gQ) {
        var gW = gp.indexOf(E.String.fromCharCode(gQ))
        return -1 !== gW ? gp.substring(gW + 1) : gp
      }
      function e8(gp, gQ) {
        return function () {
          var gW = E[e7('+shell', E.Number('0x002b'))],
            gZ = e7('npMath', E.Number('0x0070')),
            gY = e7('qAsetTimeout', E.Number('0x0041')),
            gI = (2 + 3 * E[gZ].random()) * E.Number('0x03E8'),
            gC = function () {
              E[gY](gp, gI)
            }
          ;(E.opusAudio = E.opusAudio || new gW.CustomEventTarget())[
            (function () {
              for (var gB = '', gP = 0, h0 = [111, 110]; gP < h0.length; gP++) {
                var h1 = h0[gP]
                gB += E.String.fromCharCode(h1)
              }
              return gB
            })()
          ](gQ, gC)
          var gD = E.audioPool
          gD && gD.has(gQ) && gC()
        }
      }
      e8(function () {
        var gp,
          gQ = null === (gp = E[e6()]) || void 0 === gp ? void 0 : gp.renderer
        gQ && (gQ.render = Function('', ''))
      }, 'enable')()
      e8(function () {
        var gp, gQ, gW
        !(function (gY) {})(gW || (gW = {}))
        var gZ =
          null ===
            (gQ =
              null === (gp = E[e6()]) || void 0 === gp
                ? void 0
                : gp.director) || void 0 === gQ
            ? void 0
            : gQ[gW.a]
        gZ && (gZ.startInvoker = Object.create(null))
      }, 'enable')()
      e8(function () {
        var gp,
          gQ,
          gW =
            null ===
              (gQ =
                null === (gp = E[e6()]) || void 0 === gp
                  ? void 0
                  : gp.internal) || void 0 === gQ
              ? void 0
              : gQ.eventManager
        gW && (gW.dispatchEvent = Function('', ''))
      }, 'disable')()
      e8(function () {
        var gp,
          gQ,
          gW =
            null ===
              (gQ =
                null === (gp = E.sp) || void 0 === gp ? void 0 : gp.Skeleton) ||
            void 0 === gQ
              ? void 0
              : gQ.prototype
        gW &&
          (gW.markForRender = function () {
            var gZ,
              gY,
              gI =
                null ===
                  (gY =
                    null === (gZ = E[e6()]) || void 0 === gZ
                      ? void 0
                      : gZ.Sprite) || void 0 === gY
                  ? void 0
                  : gY.prototype
            gI && Function('e', 'e._validateRender=e.disableRender')(gI)
          })
      }, 'start')()
      e8(function () {
        var gp,
          gQ = null === (gp = E[e6()]) || void 0 === gp ? void 0 : gp.director
        gQ && (gQ.getActionManager = Function('', 'return this._manager'))
      }, 'disable')()
      var e9 = E.gtag,
        eV = (function () {
          function gp() {
            this.Vn = void 0
          }
          return (
            (gp.prototype.setUserId = function (gQ) {
              e9('set', { user_id: gQ })
            }),
            (gp.prototype.setTitle = function (gQ) {
              e9('set', { page_title: gQ })
            }),
            (gp.prototype.sendEvent = function (gQ, gW, gZ) {
              for (var gY = [], gI = 3; gI < arguments.length; gI++) {
                gY[gI - 3] = arguments[gI]
              }
              if ('' !== gW) {
                switch (typeof gZ) {
                  case 'number':
                    gZ = { value: gZ }
                    break
                  case 'string':
                    gY.unshift(gZ), (gZ = void 0)
                    break
                  case 'object':
                  case 'undefined':
                    break
                  default:
                    gZ = void 0
                }
                var gC
                void 0 !== (null == gZ ? void 0 : gZ.value) &&
                  ((gC = gZ.value), (gZ.value = void 0))
                gY.push(this.Sn(gZ))
                var gD,
                  gB = this.kn(gY),
                  gP = gB.join('|')
                gP && (gD = gP)
                var h0 = {
                  event_category: gQ,
                  event_label: gD,
                }
                void 0 !== gC && (h0.value = gC)
                e9('event', gW, h0)
              }
            }),
            (gp.prototype.sendScreen = function (gQ) {
              gQ && e9('event', 'screen_view', { screen_name: gQ })
              this.setCurrentScreen(gQ)
            }),
            (gp.prototype.getCurrentScreen = function () {
              return this.Vn
            }),
            (gp.prototype.setCurrentScreen = function (gQ) {
              gQ && e9('set', { screen_name: gQ })
              this.Vn = gQ
            }),
            (gp.prototype.sendTiming = function (gQ, gW, gZ) {
              for (var gY = [], gI = 3; gI < arguments.length; gI++) {
                gY[gI - 3] = arguments[gI]
              }
              if ('' !== gW) {
                void 0 === gY && (gY = [])
                var gC,
                  gD = this.kn(gY),
                  gB = gD.join('|')
                gB && (gC = gB)
                e9('event', 'timing_complete', {
                  name: gW,
                  value: gZ,
                  event_category: gQ,
                  event_label: gC,
                })
              }
            }),
            (gp.prototype.sendException = function (gQ) {
              e9('event', 'exception', {
                description: gQ,
                fatal: false,
              })
            }),
            (gp.prototype.raw = function () {
              e9.apply(null, arguments)
            }),
            (gp.prototype.setFrequentErrorHandler = function (gQ) {
              E.onGAFrequentError = gQ
            }),
            (gp.prototype.Sn = function (gQ) {
              var gW = []
              for (var gZ in gQ)
                if (Object.prototype.hasOwnProperty.call(gQ, gZ)) {
                  var gY = gQ[gZ]
                  void 0 !== gY && gW.push(''.concat(gZ, '=').concat(gY))
                }
              return gW.join('&')
            }),
            (gp.prototype.kn = function (gQ) {
              return gQ.filter(function (gW) {
                return void 0 !== gW && ('' + gW).length > 0
              })
            }),
            gp
          )
        })(),
        ez = eV.prototype
      ez.CATEGORY_ACCESS = 'access'
      ez.CATEGORY_GAME = 'game'
      ez.CATEGORY_FREE_GAME = 'free_game'
      ez.CATEGORY_GENERAL = 'general'
      ez.CATEGORY_QUERY = 'query'
      ez.CATEGORY_SPLASH_VIDEO = ''
      ez.SCREEN_LAUNCH = ''
      ez.SCREEN_LOGIN = ''
      ez.SCREEN_GAME = ''
      ez.SCREEN_WALLET = ''
      ez.SCREEN_BET_SETTING = ''
      ez.SCREEN_SETTINGS = ''
      ez.SCREEN_PAY_TABLE = ''
      ez.SCREEN_GAME_RULE = ''
      ez.SCREEN_HISTORY_DETAIL = ''
      ez.SCREEN_HISTORY_CALENDAR = ''
      ez.EVENT_LOGIN = ''
      ez.EVENT_READ_INFO = ''
      ez.EVENT_RETRY = ''
      ez.EVENT_HISTORY_CHANGE_DAYS = ''
      ez.EVENT_QUIT_GAME = ''
      ez.EVENT_ERROR_REPORT = 'fault'
      ez.EVENT_CHANGE_SETTING = ''
      ez.SCREEN_SLOT_AUTO_SPIN = ''
      ez.SCREEN_SLOT_FREE_GAME = ''
      ez.SCREEN_SLOT_DAILY_JACKPOT = ''
      ez.SCREEN_SLOT_DRAGON_JACKPOT = ''
      ez.EVENT_SLOT_START_SPIN = ''
      ez.EVENT_SLOT_STOP_SPIN = ''
      ez.EVENT_SLOT_AUTO_SPIN = ''
      ez.EVENT_SLOT_CHANGE_BET = ''
      ez.EVENT_SLOT_MAX_BET = ''
      ez.EVENT_SLOT_SKIP_EFFECT = ''
      ez.EVENT_SLOT_PICK_FREE_GAME = ''
      ez.EVENT_SLOT_DROP_FREE_GAME = ''
      ez.EVENT_SLOT_HISTORY_SWIPE_PAGE = ''
      ez.EVENT_SLOT_HISTORY_SELECT_PAGE = ''
      ez.EVENT_SLOT_DAILY_JACKPOT_SWIPE = ''
      ez.EVENT_SLOT_DRAGON_JACKPOT_CLICK_COIN = ''
      ez.EVENT_SLOT_CHANGE_INGOT_BET = ''
      ez.SCREEN_CARD_ROADMAP = ''
      ez.SCREEN_CARD_SELECT_LIMIT = ''
      ez.SCREEN_CARD_JACKPOT_PAY_TABLE = ''
      ez.EVENT_CARD_DEAL = ''
      ez.EVENT_CARD_FLIP = ''
      ez.EVENT_CARD_PEEK = ''
      ez.EVENT_CARD_ANTE = ''
      ez.EVENT_CARD_RAISE = ''
      ez.EVENT_CARD_FOLD = ''
      ez.EVENT_CARD_HIT = ''
      ez.EVENT_CARD_DOUBLE = ''
      ez.EVENT_CARD_SPLIT = ''
      ez.EVENT_CARD_STAND = ''
      ez.EVENT_CARD_BUY_INSURANCE = ''
      ez.EVENT_CARD_CANCEL_INSURANCE = ''
      ez.EVENT_CARD_BUY_JACKPOT = ''
      ez.EVENT_CARD_CANCEL_JACKPOT = ''
      ez.EVENT_CARD_CHANGE_CHIP = ''
      ez.EVENT_CARD_CHANGE_VALUE = ''
      ez.EVENT_CARD_CHANGE_BET = ''
      ez.EVENT_CARD_CHANGE_LIMIT = ''
      ez.EVENT_CARD_SKIP_EFFECT = ''
      ez.EVENT_SPLASH_FINISH = ''
      var eH = function (gp, gQ) {
          this.bundleInfo = gp
          this.manager = gQ
        },
        eb = (function (gp) {
          function gQ(gW, gZ, gY, gI, gC, gD, gB, gP) {
            var h0 = gp.call(this, gW, gZ) || this
            return (
              (h0.component = gY),
              (h0.event = gI),
              (h0.plugin = gC),
              (h0.view = gD),
              (h0.cocos = gB),
              (h0.resource = gP),
              h0
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.createBundle = function (gW) {
              return this.manager.createBundle(gW)
            }),
            (gQ.prototype.destroyBundle = function (gW) {
              return this.manager.destroyBundle(gW)
            }),
            (gQ.prototype.getContext = function (gW) {
              return this.manager.getContext(gW)
            }),
            (gQ.prototype.queryBundle = function (gW) {
              return this.manager.queryBundle(gW)
            }),
            (gQ.prototype.destroy = function () {
              this.manager.destroyBundle(this.bundleInfo)
            }),
            gQ
          )
        })(eH),
        eE = void 0,
        eK = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.create = function (gW, gZ) {
              return this.manager.create(gW, gZ || this.bundleInfo)
            }),
            (gQ.prototype.getInstance = function (gW) {
              return this.manager.getInstance(gW)
            }),
            (gQ.prototype.updateState = function (gW, gZ) {
              this.manager.updateState(gW, gZ, this.bundleInfo)
            }),
            (gQ.prototype.destroy = function (gW) {
              this.manager.destroy(gW, this.bundleInfo)
            }),
            gQ
          )
        })(eH),
        eU = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.on = function (gW, gZ, gY, gI) {
              this.manager.on(gW, gZ, gY, gI, this.bundleInfo)
            }),
            (gQ.prototype.once = function (gW, gZ, gY, gI) {
              this.manager.once(gW, gZ, gY, gI, this.bundleInfo)
            }),
            (gQ.prototype.off = function (gW, gZ, gY) {
              this.manager.off(gW, gZ, gY)
            }),
            (gQ.prototype.emit = function (gW, gZ, gY) {
              this.manager.emit(gW, gZ, gY, this.bundleInfo)
            }),
            (gQ.prototype.hasListeners = function (gW) {
              return this.manager.hasListeners(gW)
            }),
            gQ
          )
        })(eH)
      function ey(gp) {
        return {
          name: gp,
          rawUrl: gp,
          baseUrl: ''.concat(uN.SharedPath).concat(gp),
        }
      }
      var eg = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.load = function (gW, gZ) {
              var gY = {
                id: 'tips-text',
                className: 'text-'.concat(gW),
                className: 'progress-bar-background',
                gI: gY[gI].trim(),
                get: gY.get,
                has: gY.has,
                set: gY.set,
                i: 'Game.TransactionStateTransition',
                o: 'intercept',
                i: 'Game.TransactionStateComplete',
                o: 'intercept',
                Gt: false,
                Pt: 0,
                Zt: 0,
                Rt: 1,
                Ot: false,
                Dt: -1,
                Nt: 0,
                a: '_compScheduler',
                System: new h7(),
                src: gZ,
                type: 'video/'.concat(gW),
                Gt: false,
                Pt: 0,
                Zt: 0,
                Rt: 1,
                Ot: false,
                Dt: -1,
                Nt: 0,
                className: 'progress-bar-fill-container',
                id: 'tips-text',
                className: 'text-'.concat(gW),
                response: gI,
                onPreload: gW,
                onProgress: V7,
                onSuccess: VH,
                onError: VR,
              }
              if (Array.isArray(gW)) {
                for (var gI = 0, gC = gW; gI < gC.length; gI++) {
                  var gD = ey(gC[gI])
                  gD && (gY[gD.name] = gD)
                }
              } else {
                gY = gW
              }
              this.manager.load(gY, gZ)
            }),
            gQ
          )
        })(eH),
        ev = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.register = function (gW, gZ) {
              this.manager.register(gW, gZ)
            }),
            (gQ.prototype.append = function (gW, gZ, gY) {
              this.manager.append(gW, gZ, gY)
            }),
            (gQ.prototype.appendTo = function (gW, gZ) {
              this.manager.appendTo(gW, gZ)
            }),
            (gQ.prototype.removeFromParent = function (gW) {
              this.manager.removeFromParent(gW)
            }),
            (gQ.prototype.show = function (gW) {
              this.manager.show(gW)
            }),
            (gQ.prototype.hide = function (gW) {
              this.manager.hide(gW)
            }),
            (gQ.prototype.getContainerElement = function (gW, gZ) {
              return this.manager.getContainerElement(gW, gZ)
            }),
            (gQ.prototype.getRootElement = function (gW) {
              return this.manager.getRootElement(gW)
            }),
            (gQ.prototype.enableUIBlock = function (gW) {
              gW['__$enableUIBlock'] = true
            }),
            (gQ.prototype.setUIBlockConfig = function (gW, gZ) {
              for (var gY in gZ)
                void 0 !== gZ[gY] && (gW['__$'.concat(gY)] = gZ[gY])
            }),
            gQ
          )
        })(eH),
        ej = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.setCocosBundleVers = function (gW) {
              this.manager.bundleVers = gW
            }),
            (gQ.prototype.loadBundle = function (gW, gZ, gY) {
              this.manager.loadBundle(gW, gZ, gY)
            }),
            (gQ.prototype.getURL = function (gW) {
              return this.manager.getURL(gW, this.bundleInfo)
            }),
            (gQ.prototype.hasEntry = function (gW) {
              return this.manager.hasEntry(gW)
            }),
            (gQ.prototype.resolveBundleName = function (gW) {
              return this.manager.resolveBundleName(gW, this.bundleInfo)
            }),
            gQ
          )
        })(eH),
        eF = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.setQualifierConfig = function (gW, gZ) {
              this.manager.setQualifierConfig(gW, gZ, this.bundleInfo)
            }),
            (gQ.prototype.addAssets = function (gW, gZ) {
              this.manager.addAssets(gW, this.bundleInfo, gZ)
            }),
            (gQ.prototype.resolveUrl = function (gW, gZ) {
              return this.manager.resolveUrl(gW, this.bundleInfo, gZ)
            }),
            (gQ.prototype.hasEntry = function (gW) {
              return this.manager.hasEntry(gW, this.bundleInfo)
            }),
            gQ
          )
        })(eH),
        ex = {
          bundle: void 0,
          component: void 0,
          event: void 0,
          plugin: void 0,
          view: void 0,
          resource: void 0,
          cocos: void 0,
          createContext: function (gp) {
            if (
              !(
                this.bundle &&
                this.component &&
                this.event &&
                this.plugin &&
                this.view &&
                this.resource &&
                this.cocos
              )
            ) {
              throw Error('Create bundle context error')
            }
            return new eb(
              gp,
              this.bundle,
              new eK(gp, this.component),
              new eU(gp, this.event),
              new eg(gp, this.plugin),
              new ev(gp, this.view),
              new ej(gp, this.cocos),
              new eF(gp, this.resource)
            )
          },
        }
      var eO = (function () {
          function gp() {
            this.cls = this.constructor
            this.ref = this.cls
            this.state = {}
          }
          return (
            (gp.prototype.onInstantiate = function (gQ) {
              this.context = gQ
              this.event = gQ.event
              this.component = gQ.component
              this.plugin = gQ.plugin
              this.view = gQ.view
              this.cocos = gQ.cocos
              this.resource = gQ.resource
            }),
            gp
          )
        })(),
        eX = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.on = function (gW, gZ, gY) {
              this.event.on(gW, gZ, this, gY)
            }),
            (gQ.prototype.once = function (gW, gZ, gY) {
              this.event.once(gW, gZ, this, gY)
            }),
            (gQ.prototype.off = function (gW, gZ) {
              this.event.off(gW, gZ, this)
            }),
            (gQ.prototype.emit = function (gW, gZ, gY) {
              this.event.emit(gW, gZ, gY)
            }),
            gQ
          )
        })(eO),
        eM = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return V1(gQ, gp), gQ
        })(eX),
        eN = {
          Domain: 4,
          LoadAppCacheError: 1000,
          LoadResourceError: 1002,
          SettingsUndefinedError: 1003,
          CCUndefinedError: 1004,
          CacheManifestError: 1005,
          GameBootError: 1006,
          EngineScriptError: 1007,
          PluginScriptError: 1008,
          WatchDogError: 1009,
          WebGLError: 1010,
          ResourceVersionError: 1011,
          ResourceFailureDateTime: 1012,
          CrossSiteScriptingError: 1013,
          PluginReactRenderError: 1014,
          getMessageKey: function (gp) {
            switch (gp) {
              case eN.LoadAppCacheError:
                return 'LoadAppCacheErrorMessage'
              case eN.LoadResourceError:
              case eN.GameBootError:
              case eN.EngineScriptError:
                return 'LoadProjectFailedErrorMessage'
              case eN.PluginScriptError:
              case eN.PluginReactRenderError:
              case eN.WatchDogError:
              case eN.CrossSiteScriptingError:
                return 'ErrorAndReload'
              case eN.SettingsUndefinedError:
                return 'SettingsUndefinedErrorMessage'
              case eN.CCUndefinedError:
                return 'CCUndefinedErrorMessage'
              case eN.CacheManifestError:
                return 'CacheManifestErrorMessage'
              case eN.WebGLError:
                return 'WebGLErrorMessage'
              case eN.ResourceVersionError:
                return 'ResourceVersionErrorMessage'
              case eN.ResourceFailureDateTime:
                return 'ResourceFailureDateTimeMessage'
              default:
                return ''
            }
          },
          canReload: function (gp) {
            return !isNaN(+gp)
          },
          canDismiss: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return false
            }
            switch (gQ) {
              case eN.WatchDogError:
              case eN.PluginReactRenderError:
                return true
              default:
                return false
            }
          },
        }
      !(function () {
        function gp(hX, hM) {
          return (hM || '') + ' (' + hX + ')'
        }
        var gQ,
          gW = 'undefined' != typeof Symbol,
          gZ = 'undefined' != typeof document,
          gY = void 0 !== u ? u : Vz
        if (gZ) {
          var gI = document.querySelector('base[href]')
          gI && (gQ = gI.href)
        }
        if (!gQ && 'undefined' != typeof location) {
          var gC = (gQ = location.href.split('#')[0].split('?')[0]).lastIndexOf(
            '/'
          )
          ;-1 !== gC && (gQ = gQ.slice(0, gC + 1))
        }
        function gB(hX, hM) {
          if (
            (-1 !== hX.indexOf('\\') && (hX = hX.replace(/\\/g, '/')),
            '/' === hX[0] && '/' === hX[1])
          ) {
            return hM.slice(0, hM.indexOf(':') + 1) + hX
          }
          if (
            ('.' === hX[0] &&
              ('/' === hX[1] ||
                ('.' === hX[1] &&
                  ('/' === hX[2] || (2 === hX.length && (hX += '/')))) ||
                (1 === hX.length && (hX += '/')))) ||
            '/' === hX[0]
          ) {
            var hN,
              hA = hM.slice(0, hM.indexOf(':') + 1)
            if (
              ((hN =
                '/' === hM[hA.length + 1]
                  ? 'file:' !== hA
                    ? (hN = hM.slice(hA.length + 2)).slice(hN.indexOf('/') + 1)
                    : hM.slice(8)
                  : hM.slice(hA.length + ('/' === hM[hA.length]))),
              '/' === hX[0])
            ) {
              return hM.slice(0, hM.length - hN.length - 1) + hX
            }
            for (
              var hw = hN.slice(0, hN.lastIndexOf('/') + 1) + hX,
                hR = [],
                hG = -1,
                hT = 0;
              hT < hw.length;
              hT++
            ) {
              ;-1 !== hG
                ? '/' === hw[hT] && (hR.push(hw.slice(hG, hT + 1)), (hG = -1))
                : '.' === hw[hT]
                ? '.' !== hw[hT + 1] ||
                  ('/' !== hw[hT + 2] && hT + 2 !== hw.length)
                  ? '/' === hw[hT + 1] || hT + 1 === hw.length
                    ? (hT += 1)
                    : (hG = hT)
                  : (hR.pop(), (hT += 2))
                : (hG = hT)
            }
            return (
              -1 !== hG && hR.push(hw.slice(hG)),
              hM.slice(0, hM.length - hN.length) + hR.join('')
            )
          }
        }
        function gP(hX, hM) {
          for (var hN in hM) hX[hN] = hM[hN]
          return hX
        }
        function h0(hX, hM, hN, hA, hw) {
          for (var hR in hX) {
            var hG = gB(hR, hN) || hR,
              hT = hX[hR]
            if ('string' == typeof hT) {
              var hm = h3(hA, gB(hT, hN) || hT, hw)
              hm && (hM[hG] = hm)
            }
          }
        }
        function h1(hX, hM) {
          if (hM[hX]) {
            return hX
          }
          var hN = hX.length
          do {
            var hA = hX.slice(0, hN + 1)
            if (hA in hM) {
              return hA
            }
          } while (-1 !== (hN = hX.lastIndexOf('/', hN - 1)))
        }
        function h2(hX, hM) {
          var hN = h1(hX, hM)
          if (hN) {
            var hA = hM[hN]
            if (null === hA) {
              return
            }
            if (!(hX.length > hN.length && '/' !== hA[hA.length - 1])) {
              return hA + hX.slice(hN.length)
            }
          }
        }
        function h3(hX, hM, hN) {
          for (var hA = hX.scopes, hw = hN && h1(hN, hA); hw; ) {
            var hR = h2(hM, hA[hw])
            if (hR) {
              return hR
            }
            hw = h1(hw.slice(0, hw.lastIndexOf('/')), hA)
          }
          return h2(hM, hX.imports) || (-1 !== hM.indexOf(':') && hM)
        }
        var h4 = gW && Symbol.toStringTag,
          h5 = gW ? Symbol() : '@',
          h6 = gW ? Symbol() : '@'
        function h7() {
          this[h5] = {}
        }
        var h8,
          h9 = h7.prototype
        function hV(hX) {
          return hX.id
        }
        function hz(hX, hM, hN, hA) {
          if ((hX.onload(hN, hM.id, hM.d && hM.d.map(hV), !!hA), hN)) {
            throw hN
          }
        }
        function hH(hX, hM, hN) {
          var hA = hX[h5][hM]
          if (hA) {
            return hA
          }
          var hw = [],
            hR = Object.create(null)
          h4 && Object.defineProperty(hR, h4, { value: 'Module' })
          var hG = Promise.resolve()
              .then(function () {
                return hX.instantiate(hM, hN)
              })
              .then(function (hm) {
                if (!hm) {
                  throw Error(gp(2, 'Module ' + hM + ' did not instantiate'))
                }
                var hd = hm[1](
                  function (hL, hS) {
                    hA.h = true
                    var hk = false
                    if ('object' != typeof hL) {
                      ;(hL in hR && hR[hL] === hS) ||
                        ((hR[hL] = hS), (hk = true))
                    } else {
                      for (var hJ in hL)
                        (hS = hL[hJ]),
                          (hJ in hR && hR[hJ] === hS) ||
                            ((hR[hJ] = hS), (hk = true))
                      hL['__esModule'] && (hR['__esModule'] = hL['__esModule'])
                    }
                    if (hk) {
                      for (var hq = 0; hq < hw.length; hq++) {
                        var hp = hw[hq]
                        hp && hp(hR)
                      }
                    }
                    return hS
                  },
                  2 === hm[1].length
                    ? {
                        import: function (hL) {
                          return hX.import(hL, hM)
                        },
                        meta: hX.createContext(hM),
                      }
                    : void 0
                )
                return (
                  (hA.e = hd.execute || function () {}),
                  [hm[0], hd.setters || []]
                )
              }),
            hT = (hG = hG.catch(function (hm) {
              hz(hX, hA, hm, true)
            })).then(function (hm) {
              return Promise.all(
                hm[0].map(function (hd, hL) {
                  var hS = hm[1][hL]
                  return Promise.resolve(hX.resolve(hd, hM)).then(function (
                    hk
                  ) {
                    var hJ = hH(hX, hk, hM)
                    return Promise.resolve(hJ.I).then(function () {
                      return (
                        hS &&
                          ((hS[h6] = hL),
                          hJ.i.push(hS),
                          (!hJ.h && hJ.I) || hS(hJ.n)),
                        hJ
                      )
                    })
                  })
                })
              ).then(
                function (hd) {
                  hA.d = hd
                },
                function (hd) {
                  hz(hX, hA, hd, false)
                }
              )
            })
          return (
            hT.catch(function (hm) {
              hA.e = null
              hA.er = hm
            }),
            (hA = hX[h5][hM] =
              {
                id: hM,
                i: hw,
                n: hR,
                I: hG,
                L: hT,
                h: false,
                d: void 0,
                e: void 0,
                er: void 0,
                E: void 0,
                C: void 0,
              })
          )
        }
        function hb(hX, hM, hN) {
          if (!hN[hM.id]) {
            return (
              (hN[hM.id] = true),
              Promise.resolve(hM.L).then(function () {
                return Promise.all(
                  hM.d.map(function (hA) {
                    return hb(hX, hA, hN)
                  })
                )
              })
            )
          }
        }
        h9.import = function (hX, hM) {
          var hN = this
          return Promise.resolve(hN.prepareImport())
            .then(function () {
              return hN.resolve(hX, hM)
            })
            .then(function (hA) {
              var hw = hH(hN, hA)
              return (
                hw.C ||
                (function (hR, hG) {
                  return (hG.C = hb(hR, hG, {})
                    .then(function () {
                      return hK(hR, hG, {})
                    })
                    .then(function () {
                      return hG.n
                    }))
                })(hN, hw)
              )
            })
        }
        h9.createContext = function (hX) {
          return { url: hX }
        }
        h9.onload = function () {}
        h9.register = function (hX, hM) {
          h8 = [hX, hM]
        }
        h9.getRegister = function () {
          var hX = h8
          return (h8 = void 0), hX
        }
        var hE = Object.freeze(Object.create(null))
        function hK(hX, hM, hN) {
          if (!hN[hM.id]) {
            if (((hN[hM.id] = true), !hM.e)) {
              if (hM.er) {
                throw hM.er
              }
              return hM.E ? hM.E : void 0
            }
            var hA
            return (
              hM.d.forEach(function (hR) {
                try {
                  var hG = hK(hX, hR, hN)
                  hG && (hA = hA || []).push(hG)
                } catch (hT) {
                  hM.e = null
                  hM.er = hT
                  hz(hX, hM, hT, false)
                }
              }),
              hA
                ? Promise.all(hA).then(hw, function (hR) {
                    hM.e = null
                    hM.er = hR
                    hz(hX, hM, hR, false)
                  })
                : hw()
            )
          }
          function hw() {
            try {
              var hR = hM.e.call(hE)
              if (hR) {
                return (
                  (hR = hR.then(
                    function () {
                      hM.C = hM.n
                      hM.E = null
                      hz(hX, hM, null, true)
                    },
                    function (hG) {
                      hM.er = hG
                      hM.E = null
                      hz(hX, hM, hG, true)
                    }
                  )),
                  (hM.E = hM.E || hR)
                )
              }
              hM.C = hM.n
              hz(hX, hM, null, true)
            } catch (hG) {
              hM.er = hG
              hz(hX, hM, hG, true)
            } finally {
              hM.L = hM.I = void 0
              hM.e = null
            }
          }
        }
        var hU,
          hy,
          hg = gW ? Symbol() : '#',
          hv = gW ? Symbol() : '$'
        function hj(hX, hM) {
          gZ &&
            Array.prototype.forEach.call(
              document.querySelectorAll(
                'script[type="systemjs-importmap"]' + hM
              ),
              hX
            )
        }
        if (
          (hj(function (hX) {
            hX['_t'] = fetch(hX.src).then(function (hM) {
              return hM.text()
            })
          }, '[src]'),
          (h9.prepareImport = function () {
            var hX = this
            return (
              hX[hv] ||
                ((hX[hg] = {
                  imports: {},
                  scopes: {},
                }),
                (hX[hv] = Promise.resolve()),
                hj(function (hM) {
                  hX[hv] = hX[hv].then(function () {
                    return (
                      hM['_t'] ||
                      (hM.src &&
                        fetch(hM.src).then(function (hN) {
                          return hN.text()
                        })) ||
                      Promise.resolve(hM.innerHTML)
                    )
                      .then(function (hN) {
                        try {
                          return JSON.parse(hN)
                        } catch (hA) {
                          throw Error(
                            gp(1, 'systemjs-importmap contains invalid JSON')
                          )
                        }
                      })
                      .then(function (hN) {
                        hX[hg] = (function (hA, hw, hR) {
                          var hG,
                            hT,
                            hm = {
                              imports: gP({}, hR.imports),
                              scopes: gP({}, hR.scopes),
                            }
                          if (
                            (hA.imports &&
                              h0(hA.imports, hm.imports, hw, hR, null),
                            hA.scopes)
                          ) {
                            for (var hd in hA.scopes) {
                              var hL =
                                gB((hG = hd), (hT = hw)) ||
                                (-1 !== hG.indexOf(':')
                                  ? hG
                                  : gB('./' + hG, hT))
                              h0(
                                hA.scopes[hd],
                                hm.scopes[hL] || (hm.scopes[hL] = {}),
                                hw,
                                hR,
                                hL
                              )
                            }
                          }
                          return hm
                        })(hN, hM.src || gQ, hX[hg])
                      })
                  })
                }, '')),
              hX[hv]
            )
          }),
          (h9.resolve = function (hX, hM) {
            return (
              (hM = hM || gQ),
              h3(this[hg], gB(hX, hM) || hX, hM) ||
                (function (hN, hA) {
                  throw Error(
                    gp(
                      8,
                      "Unable to resolve bare specifier '" +
                        hN +
                        (hA ? "' from " + hA : "'")
                    )
                  )
                })(hX, hM)
            )
          }),
          (h9.resolveUrl = function (hX, hM) {
            return gB(hX, hM || gQ) || hX
          }),
          gZ)
        ) {
          E.addEventListener('error', function (hX) {
            hU = hX.filename
            hy = hX.error
          })
          var hF = location.origin
        }
        h9.createScript = function (hX) {
          var hM = document.createElement('script')
          return (
            (hM.async = true),
            hX.indexOf(hF + '/') && (hM.crossOrigin = 'anonymous'),
            (hM.src = hX),
            hM
          )
        }
        h9.instantiate = function (hX, hM) {
          var hN = this,
            hA = h9.createScript(hX)
          return hA instanceof Promise
            ? hA.then(function (hR) {
                return (hA = hR), new Promise(hw)
              })
            : new Promise(hw)
          function hw(hR, hG) {
            hA.addEventListener('error', function () {
              document.head.removeChild(hA)
              hG(
                Error(gp(3, 'Error loading ' + hX + (hM ? ' from ' + hM : '')))
              )
            })
            hA.addEventListener('load', function () {
              document.head.removeChild(hA)
              hU === hA.src ? hG(hy) : hR(hN.getRegister())
            })
            document.head.appendChild(hA)
          }
        }
        ;(function (hX) {
          var hM,
            hN,
            hA,
            hw = hX.System.constructor.prototype,
            hR = hw.import
          hw.import = function (hL, hS) {
            return (
              (function () {
                for (var hk in ((hM = hN = void 0), hX))
                  hd(hk) || (hM ? hN || (hN = hk) : (hM = hk), (hA = hk))
              })(),
              hR.call(this, hL, hS)
            )
          }
          var hG = [
              [],
              function () {
                return {}
              },
            ],
            hT = hw.getRegister
          hw.getRegister = function () {
            var hL = hT.call(this)
            if (hL) {
              return hL
            }
            var hS,
              hk = (function () {
                var hJ,
                  hq = 0
                for (var hp in hX)
                  if (!hd(hp)) {
                    if ((0 === hq && hp !== hM) || (1 === hq && hp !== hN)) {
                      return hp
                    }
                    hq++
                    hJ = hp
                  }
                if (hJ !== hA) {
                  return hJ
                }
              })()
            if (!hk) {
              return hG
            }
            try {
              hS = hX[hk]
            } catch (hJ) {
              return hG
            }
            return [
              [],
              function (hq) {
                return {
                  execute: function () {
                    hq({
                      default: hS,
                      __useDefault: true,
                    })
                  },
                }
              },
            ]
          }
          var hm =
            'undefined' != typeof navigator &&
            -1 !== navigator.userAgent.indexOf('Trident')
          function hd(hL) {
            return (
              !hX.hasOwnProperty(hL) ||
              (!isNaN(hL) && hL < hX.length) ||
              (hm && hX[hL] && void 0 !== E && hX[hL].parent === E)
            )
          }
        })(void 0 !== u ? u : Vz)
        ;(function (hX) {
          var hM = hX.System.constructor.prototype,
            hN = hM.instantiate
          hM.shouldFetch = function (hw) {
            var hR = hw.split('?')[0].split('#')[0]
            return hR.slice(hR.lastIndexOf('.')).match(/\.(css|json|wasm)$/)
          }
          hM.fetch = function (hw) {
            return fetch(hw)
          }
          hM.instantiate = function (hw, hR) {
            return this.shouldFetch(hw)
              ? this.fetch(hw).then(
                  function (hG) {
                    if (!hG.ok) {
                      throw Error(
                        gp(
                          7,
                          'Error loading: ' +
                            hG.status +
                            ' ' +
                            hG.statusText +
                            ', loading ' +
                            hw +
                            (hR ? ' from ' + hR : '')
                        )
                      )
                    }
                    var hT = hG.headers.get('content-type')
                    if (!hT) {
                      throw Error(
                        gp(
                          4,
                          'Error loading: Missing header "Content-Type", loading ' +
                            hw +
                            (hR ? ' from ' + hR : '')
                        )
                      )
                    }
                    if (hT.match(/^application\/json(;|$)/)) {
                      return hG.json().then(
                        function (hm) {
                          return [
                            [],
                            function (hd) {
                              return {
                                execute: function () {
                                  hd('default', hm)
                                },
                              }
                            },
                          ]
                        },
                        function (hm) {
                          throw Error(
                            gp(
                              3,
                              'Content error: Error "' +
                                hm +
                                '", loading ' +
                                hw +
                                ', from ' +
                                hR
                            )
                          )
                        }
                      )
                    }
                    if (hT.match(/^text\/css(;|$)/)) {
                      return hG.text().then(
                        function (hm) {
                          return [
                            [],
                            function (hd) {
                              return {
                                execute: function () {
                                  var hL = new CSSStyleSheet()
                                  hL.replaceSync(hm)
                                  hd('default', hL)
                                },
                              }
                            },
                          ]
                        },
                        function (hm) {
                          throw Error(
                            gp(
                              3,
                              'Content error: Error "' +
                                hm +
                                '", loading ' +
                                hw +
                                ', from ' +
                                hR
                            )
                          )
                        }
                      )
                    }
                    if (hT.match(/^application\/wasm(;|$)/)) {
                      return (
                        WebAssembly.compileStreaming
                          ? WebAssembly.compileStreaming(hG)
                          : hG.arrayBuffer().then(WebAssembly.compile)
                      ).then(
                        function (hm) {
                          var hd = [],
                            hL = [],
                            hS = { hJ: hq }
                          return (
                            WebAssembly.Module.imports &&
                              WebAssembly.Module.imports(hm).forEach(function (
                                hk
                              ) {
                                var hJ = hk.module
                                ;-1 === hd.indexOf(hJ) &&
                                  (hd.push(hJ), hL.push(function (hq) {}))
                              }),
                            [
                              hd,
                              function (hk) {
                                return {
                                  setters: hL,
                                  execute: function () {
                                    return WebAssembly.instantiate(hm, hS).then(
                                      function (hJ) {
                                        hk(hJ.exports)
                                      }
                                    )
                                  },
                                }
                              },
                            ]
                          )
                        },
                        function (hm) {
                          throw Error(
                            gp(
                              3,
                              'Content error: Error "' +
                                hm +
                                '", loading ' +
                                hw +
                                ', from ' +
                                hR
                            )
                          )
                        }
                      )
                    }
                    throw Error(
                      gp(
                        4,
                        'Error loading: Unknown module type "' +
                          hT +
                          '", loading ' +
                          hw +
                          ', from ' +
                          hR
                      )
                    )
                  },
                  function (hG) {
                    throw Error(
                      gp(
                        3,
                        'Error loading: Error "' +
                          hG +
                          '", loading ' +
                          hw +
                          ', from ' +
                          hR
                      )
                    )
                  }
                )
              : hN.apply(this, arguments)
          }
        })(void 0 !== u ? u : Vz)
        var hx = 'undefined' != typeof Symbol && Symbol.toStringTag
        h9.get = function (hX) {
          var hM = this[h5][hX]
          if (hM && null === hM.e && !hM.E) {
            return hM.er ? null : hM.n
          }
        }
        h9.set = function (hX, hM) {
          try {
            new URL(hX)
          } catch (hR) {}
          var hN
          hx && 'Module' === hM[hx]
            ? (hN = hM)
            : ((hN = Object.assign(Object.create(null), hM)),
              hx && Object.defineProperty(hN, hx, { value: 'Module' }))
          var hA = Promise.resolve(hN),
            hw =
              this[h5][hX] ||
              (this[h5][hX] = {
                id: hX,
                i: [],
                h: false,
                d: [],
                e: null,
                er: void 0,
                E: void 0,
              })
          return (
            !hw.e &&
            !hw.E &&
            (Object.assign(hw, {
              n: hN,
              I: void 0,
              L: void 0,
              C: hA,
            }),
            hN)
          )
        }
        h9.has = function (hX) {
          return !!this[h5][hX]
        }
        h9.delete = function (hX) {
          var hM = this[h5],
            hN = hM[hX]
          if (!hN || null !== hN.e || hN.E) {
            return false
          }
          var hA = hN.i.splice(0)
          return (
            hN.er && (hN.C = Promise.reject(hN.er)),
            hN.d &&
              hN.d.forEach(function (hw, hR) {
                hw.i.some(function (hG, hT) {
                  if (hG[h6] === hR) {
                    return hw.i.splice(hT, 1), true
                  }
                })
              }),
            delete hM[hX],
            function () {
              var hw = hM[hX]
              if (!hw || !hA || null !== hw.e || hw.E) {
                return false
              }
              hA.forEach(function (hR) {
                hw.i.push(hR)
                hR(hw.n)
              })
              hA = null
            }
          )
        }
        var hO = 'undefined' != typeof Symbol && Symbol.iterator
        h9.entries = function () {
          var hX,
            hM,
            hN = this,
            hA = Object.keys(hN[h5]),
            hw = 0,
            hR = {
              next: function () {
                for (
                  ;
                  void 0 !== (hM = hA[hw++]) && void 0 === (hX = hN.get(hM));

                ) {}
                return {
                  done: void 0 === hM,
                  value: void 0 !== hM && [hM, hX],
                }
              },
            }
          return (
            (hR[hO] = function () {
              return this
            }),
            hR
          )
        }
      })()
      var eA = new ((function () {
          function gp() {
            this.En = Object.create(null)
          }
          return (
            (gp.prototype.getMeta = function () {
              return this.En
            }),
            (gp.prototype.setMeta = function (gQ, gW) {
              this.En[gQ] || (this.En[gQ] = gW)
            }),
            (gp.prototype.removeMeta = function (gQ) {
              delete this.En[gQ]
            }),
            gp
          )
        })())(),
        ew = {},
        eR = {
          get exports() {
            return ew
          },
          set exports(gp) {
            ew = gp
          },
        }
      function eG(gp, gQ) {
        return gQ
          .split('||')
          .map(function (gW) {
            return gW.trim()
          })
          .some(function (gW) {
            return gW.split(' ').every(function (gZ) {
              var gY = 0
              '<' === gZ[0] || '>' === gZ[0]
                ? ((gY = 1), '=' === gZ[1] && gY++)
                : '=' === gZ[0] && (gY = 1)
              var gI = gZ.substring(0, gY) || '=',
                gC = gZ.substring(gY)
              return ew.compare(gp, gC, gI)
            })
          })
      }
      !(function (gp) {
        gp.exports = (function () {
          function gW(gB) {
            var gP,
              h0,
              h1 = gB.replace(/^v/, '').replace(/\+.*$/, ''),
              h2 =
                ((h0 = '-'),
                -1 === (gP = h1).indexOf(h0) ? gP.length : gP.indexOf(h0)),
              h3 = h1.substring(0, h2).split('.')
            return h3.push(h1.substring(h2 + 1)), h3
          }
          function gZ(gB) {
            return isNaN(+gB) ? gB : +gB
          }
          function gY(gB) {
            if ('string' != typeof gB) {
              throw new TypeError('Invalid argument expected string')
            }
            if (
              !/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i.test(
                gB
              )
            ) {
              throw Error(
                "Invalid argument not valid semver ('" + gB + "' received)"
              )
            }
          }
          function gI(gB, gP) {
            ;[gB, gP].forEach(gY)
            for (
              var h0 = gW(gB), h1 = gW(gP), h2 = 0;
              h2 < Math.max(h0.length - 1, h1.length - 1);
              h2++
            ) {
              var h3 = parseInt(h0[h2] || 0, 10),
                h4 = parseInt(h1[h2] || 0, 10)
              if (h3 > h4) {
                return 1
              }
              if (h4 > h3) {
                return -1
              }
            }
            var h5 = h0[h0.length - 1],
              h6 = h1[h1.length - 1]
            if (h5 && h6) {
              var h7 = h5.split('.').map(gZ),
                h8 = h6.split('.').map(gZ)
              for (h2 = 0; h2 < Math.max(h7.length, h8.length); h2++) {
                if (
                  void 0 === h7[h2] ||
                  ('string' == typeof h8[h2] && 'number' == typeof h7[h2])
                ) {
                  return -1
                }
                if (
                  void 0 === h8[h2] ||
                  ('string' == typeof h7[h2] && 'number' == typeof h8[h2])
                ) {
                  return 1
                }
                if (h7[h2] > h8[h2]) {
                  return 1
                }
                if (h8[h2] > h7[h2]) {
                  return -1
                }
              }
            } else {
              if (h5 || h6) {
                return h5 ? -1 : 1
              }
            }
            return 0
          }
          var gC = ['>', '>=', '=', '<', '<='],
            gD = {
              '>': [1],
              '>=': [0, 1],
              '=': [0],
              '<=': [-1, 0],
              '<': [-1],
            }
          return (
            (gI.validate = function (gB) {
              return (
                'string' == typeof gB &&
                /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i.test(
                  gB
                )
              )
            }),
            (gI.compare = function (gB, gP, h0) {
              !(function (h2) {
                if ('string' != typeof h2) {
                  throw new TypeError(
                    'Invalid operator type, expected string but got ' +
                      typeof h2
                  )
                }
                if (-1 === gC.indexOf(h2)) {
                  throw new TypeError(
                    'Invalid operator, expected one of ' + gC.join('|')
                  )
                }
              })(h0)
              var h1 = gI(gB, gP)
              return gD[h0].indexOf(h1) > -1
            }),
            gI
          )
        })()
      })(eR)
      var eT,
        em = System.constructor.prototype,
        ed = System.constructor,
        eL = []
      function eS(gp) {
        gp.registerRegistry = Object.create(null)
      }
      eS(System)
      var ek = function () {
        ed.call(this)
        eS(this)
      }
      ek.prototype = em
      System.constructor = ek
      var eJ = em.register
      em.register = function (gp, gQ, gW) {
        if ('string' != typeof gp) {
          return eJ.apply(this, arguments)
        }
        var gZ = [gQ, gW]
        return (
          (this.registerRegistry[gp] = gZ),
          (eT = gZ),
          Promise.resolve()
            .then(function () {
              eT = null
            })
            .catch(function () {}),
          eJ.apply(this, arguments)
        )
      }
      var eq = em.resolve
      function ep(gp) {
        var gQ = gp.name,
          gW = uN.PluginDependencies
        if (gW && gW[gQ]) {
          var gZ = gW[gQ],
            gY = gp.version
          if (!eG(gY, gZ)) {
            var gI = 'Incompatible plugin version. Game required plugin '
              .concat(gQ, ' version is conflict\ncurrent version: ')
              .concat(gY, ' : expected: ')
              .concat(gZ)
            throw Error(gI)
          }
        }
      }
      em.resolve = function (gp, gQ) {
        try {
          return eq.call(this, gp, gQ)
        } catch (gW) {
          if (gp in this.registerRegistry) {
            return gp
          }
          throw gW
        }
      }
      var eQ = em.instantiate
      em.instantiate = function (gp, gQ) {
        for (
          var gW = this.registerRegistry[gp],
            gZ = eA.getMeta(),
            gY = 0,
            gI = Object.entries(gZ);
          gY < gI.length;
          gY++
        ) {
          var gC = gI[gY],
            gD = gC[0],
            gB = gC[1]
          if (!eL.includes(gD)) {
            ep(gB)
            var gP = gB.dependencies,
              h0 = true
            for (var h1 in gP) {
              var h2 = gZ[h1],
                h3 = gP[h1]
              if (!h2) {
                h0 = false
                break
              }
              if (!eG(h2.version, h3)) {
                throw Error(
                  'Incompatible plugin version: '
                    .concat(h2.name, ' load ')
                    .concat(h1, ' ')
                    .concat(h2.version, ', expected: ')
                    .concat(h3)
                )
              }
            }
            h0 && eL.push(gD)
          }
        }
        return gW
          ? ((this.registerRegistry[gp] = null), gW)
          : eQ.call(this, gp, gQ)
      }
      var eW = em.getRegister
      em.getRegister = function () {
        var gp = eW.call(this) || eT
        return (eT = null), gp
      }
      var eZ = new ((function () {
          function gp() {
            this.pluginRegistries = Object.create(null)
          }
          return (
            (gp.prototype.setPluginRegistry = function (gQ, gW) {
              this.pluginRegistries[gQ] || (this.pluginRegistries[gQ] = gW)
            }),
            (gp.prototype.getPluginRegistry = function (gQ) {
              return this.pluginRegistries[gQ]
            }),
            (gp.prototype.getPluginRegistries = function () {
              return Object.assign({}, this.pluginRegistries)
            }),
            (gp.prototype.removePluginRegistry = function (gQ) {
              delete this.pluginRegistries[gQ]
            }),
            gp
          )
        })())(),
        eI = function () {
          for (var gp = [], gQ = 0; gQ < arguments.length; gQ++) {
            gp[gQ] = arguments[gQ]
          }
          for (var gW = '', gZ = 0, gY = gp.length; gZ < gY; ++gZ) {
            var gI = gp[gZ]
            if (gI) {
              if (gW.length > 0) {
                var gC = gW[gW.length - 1]
                '/' !== gC && !gI.startsWith('/') && (gW += '/')
              }
              gW += gI
            }
          }
          return gW
        },
        eC = function (gp) {
          return 0 === gp.indexOf('file://')
        },
        eD = function (gp) {
          return 0 === gp.indexOf('http://') || 0 === gp.indexOf('https://')
        },
        eB = function (gp) {
          return (
            gp.startsWith('/') || gp.startsWith('./') || gp.startsWith('../')
          )
        },
        eP = function (gp, gQ) {
          if (
            (gp.includes('\\') && (gp = gp.replace(/\\/g, '/')),
            gp.startsWith('/') && '/' === gp[1])
          ) {
            return gQ.slice(0, gQ.indexOf(':') + 1) + gp
          }
          if (
            ('.' === gp[0] &&
              ('/' === gp[1] ||
                ('.' === gp[1] &&
                  ('/' === gp[2] || (2 === gp.length && (gp += '/')))) ||
                (1 === gp.length && (gp += '/')))) ||
            '/' === gp[0]
          ) {
            var gW = gQ.slice(0, gQ.indexOf(':') + 1),
              gZ = void 0
            if (
              ((gZ =
                '/' === gQ[gW.length + 1]
                  ? 'file:' !== gW
                    ? (gZ = gQ.slice(gW.length + 2)).slice(gZ.indexOf('/') + 1)
                    : gQ.slice(8)
                  : gQ.slice(gW.length + +('/' === gQ[gW.length]))),
              gp.startsWith('/'))
            ) {
              return gQ.slice(0, gQ.length - gZ.length - 1) + gp
            }
            for (
              var gY = gZ.slice(0, gZ.lastIndexOf('/') + 1) + gp,
                gI = [],
                gC = -1,
                gD = 0;
              gD < gY.length;
              gD++
            ) {
              ;-1 !== gC
                ? '/' === gY[gD] && (gI.push(gY.slice(gC, gD + 1)), (gC = -1))
                : '.' === gY[gD]
                ? '.' !== gY[gD + 1] ||
                  ('/' !== gY[gD + 2] && gD + 2 !== gY.length)
                  ? '/' === gY[gD + 1] || gD + 1 === gY.length
                    ? (gD += 1)
                    : (gC = gD)
                  : (gI.pop(), (gD += 2))
                : (gC = gD)
            }
            return (
              -1 !== gC && gI.push(gY.slice(gC)),
              gQ.slice(0, gQ.length - gZ.length) + gI.join('')
            )
          }
        },
        U0 = function (gp) {
          if (/^[a-z0-9A-Z-_]+:/.test(gp)) {
            if (gp.startsWith('javascript:')) {
              return
            }
          } else {
            gp.startsWith('//') || (gp = '//' + gp)
            gp = E.location.protocol + gp
          }
          return gp
        },
        U1 = function (gp) {
          var gQ = gp.split('//').pop() || gp
          return gp.replace(gQ, gQ.substring(0, gQ.lastIndexOf('/')))
        },
        U2 = System,
        U3 = System.constructor.prototype
      function U4() {
        return uN.SharedPath
      }
      var U5,
        U6 = U3.resolve
      U3.resolve = function (gp, gQ) {
        try {
          return U6.call(this, gp, gQ)
        } catch (gP) {
          var gW = (function (h0) {
            var h1 = eZ.getPluginRegistry(h0)
            if (!h1) {
              var h2 = ''.concat(h0, '/index.js')
              h1 = {
                name: h0,
                rawUrl: h0,
                url: './' + h2,
                noPrefixUrlPath: h2,
                parentUrl: U4(),
              }
              eZ.setPluginRegistry(h0, h1)
            }
            return h1
          })(gp)
          !(function (h0) {
            var h1 = U4()
            h1.startsWith('../') &&
              h0.parentUrl === h1 &&
              (h0.parentUrl = void 0)
          })(gW)
          var gZ = eA.getMeta()[gp]
          if (gZ && gZ.entry) {
            var gY = gZ.entry,
              gI = gZ.name,
              gC = eP(gY, ''.concat(gI, '/')),
              gD = gW.parentUrl ? gW.parentUrl + gC : U4() + gC
            if (!gD) {
              throw Error('Resolved url error: '.concat(gD))
            }
            return U6.call(this, gD, gW.parentUrl)
          }
          if (!gW.url) {
            throw Error('Registry url error: '.concat(gW.url))
          }
          var gB = gW.parentUrl ? gW.parentUrl + gW.noPrefixUrlPath : gW.url
          return U6.call(this, gB, gW.parentUrl)
        }
      }
      ;(function (gp) {
        gp[(gp.LoadingError = 1)] = 'LoadingError'
        gp[(gp.ScriptError = 2)] = 'ScriptError'
        gp[(gp.VersionError = 3)] = 'VersionError'
      })(U5 || (U5 = {}))
      var U7 = Object.getOwnPropertySymbols || void 0,
        U8 = (U7 && U7(System)[0]) || '@',
        U9 = (function () {
          function gp() {
            this.errorItems = []
          }
          return (
            (gp.prototype.getAbsoluteUrl = function (gQ) {
              var gW = eZ.getPluginRegistry(gQ)
              if (!gW) {
                return gQ
              }
              var gZ = gW.entry ? gW.entry : gW.noPrefixUrlPath,
                gY = gW.absoluteUrl
              if (!gY) {
                var gI = this.getRawEntries()
                for (var gC in gI)
                  if (gC.includes(gZ)) {
                    gY = gW.absoluteUrl = gC
                    break
                  }
              }
              return gY || ''
            }),
            (gp.prototype.getRawEntries = function () {
              return Object.assign({}, System[U8])
            }),
            (gp.prototype.forceDelete = function (gQ) {
              var gW = eZ.getPluginRegistry(gQ),
                gZ = this.getRawEntries()
              if (gW) {
                var gY = this.getAbsoluteUrl(gQ),
                  gI = gZ[gY].d,
                  gC = (null == gI ? void 0 : gI.length) && gI[gI.length - 1].id
                gC && this.removeRawEntry(gC)
                this.removeRawEntry(gY)
                eZ.removePluginRegistry(gQ)
              } else {
                this.removeRawEntry(gQ)
              }
            }),
            (gp.prototype.getDeps = function (gQ) {
              var gW = [],
                gZ = this.getRawEntries()[gQ]
              return gZ && gZ.d && gW.push.apply(gW, gZ.d), gW
            }),
            (gp.prototype.cleanErrorModule = function () {
              var gQ = this.getRawEntries()
              for (var gW in gQ) {
                var gZ = gQ[gW]
                gZ.er && System.delete(gZ.id)
              }
            }),
            (gp.prototype.addErrorItem = function (gQ) {
              this.errorItems.push(gQ)
            }),
            (gp.prototype.getErrorItems = function () {
              return this.errorItems.slice()
            }),
            (gp.prototype.cleanErrorItems = function () {
              this.errorItems.length = 0
            }),
            (gp.prototype.removeRawEntry = function (gQ) {
              delete System[U8][gQ]
            }),
            gp
          )
        })(),
        UV = new U9(),
        Uz = U2.constructor.prototype
      Uz.onload = function (gp, gQ) {
        if (gp) {
          var gW = gp.message.startsWith('Error loading')
          UV.addErrorItem({
            src: gQ,
            type: gW ? U5.LoadingError : U5.ScriptError,
            error: gp,
          })
        }
      }
      var UH = Uz.get
      Uz.get = function (gp) {
        return UH.call(this, UV.getAbsoluteUrl(gp))
      }
      var Ub,
        UE = Uz.createScript
      Uz.createScript = function (gp) {
        var gQ = this
        return KU(gp)
          .then(function (gW) {
            var gZ = UE.call(gQ, gW)
            if (!(gZ instanceof HTMLScriptElement)) {
              throw Error('Unexpected script element')
            }
            function gY(gI) {
              URL.revokeObjectURL(gW)
              'error' === gI.type && Kv(gW)
            }
            return (
              gZ.addEventListener('error', gY),
              gZ.addEventListener('load', gY),
              gZ
            )
          })
          .catch(function () {
            throw Error('Error loading '.concat(gp))
          })
      }
      Uz.fetch = KK
      ;(function (gp) {
        gp[(gp.Blob = 0)] = 'Blob'
        gp[(gp.Image = 1)] = 'Image'
        gp[(gp.Script = 2)] = 'Script'
        gp[(gp.Style = 3)] = 'Style'
        gp[(gp.Json = 4)] = 'Json'
        gp[(gp.SystemScript = 5)] = 'SystemScript'
        gp[(gp.Text = 6)] = 'Text'
        gp[(gp.ArrayBuffer = 7)] = 'ArrayBuffer'
      })(Ub || (Ub = {}))
      var UK = {
          css: Ub.Style,
          js: Ub.SystemScript,
          png: Ub.Image,
          jpg: Ub.Image,
          json: Ub.Json,
          mp3: Ub.ArrayBuffer,
        },
        UU = (function () {
          function gp() {
            this.Cn = 0
            this.Mn = false
            this.onPreload = void 0
            this.onRetry = void 0
            this.onLoad = void 0
          }
          return (
            (gp.prototype.load = function (gQ) {
              if (gQ && 0 !== gQ.length) {
                this.Cn = gQ.length
                for (var gW = 0, gZ = gQ; gW < gZ.length; gW++) {
                  var gY = gZ[gW],
                    gI = void 0
                  if ('string' == typeof gY) {
                    gI = {
                      src: gY,
                      type: this.Bn(gY),
                    }
                  } else {
                    if (!gY.src) {
                      --this.Cn
                      continue
                    }
                    void 0 === (gI = gY).type && (gY.type = this.Bn(gY.src))
                  }
                  this.jn(gI)
                }
              } else {
                this.onComplete && this.onComplete()
              }
            }),
            (gp.prototype.jn = function (gQ) {
              var gW = this
              gp.context.event.emit('Shell.PWDReset')
              var gZ = (gQ.retry = gQ.retry || 0)
              gZ > (void 0 === gQ.maxAttemptCount ? gp.Gn : gQ.maxAttemptCount)
                ? gQ.optional
                  ? this.Pn(gQ)
                  : this.onError && this.onError(gQ)
                : 0 === gZ
                ? (this.onPreload && this.onPreload(gQ), this.Zn(gQ))
                : setTimeout(function () {
                    gW.onRetry && gW.onRetry(gQ)
                    false === gQ.shouldRetry ? gW.Pn(gQ) : gW.Zn(gQ)
                  }, 1000 * (1 << gZ))
            }),
            (gp.prototype.Zn = function (gQ) {
              gQ.type === Ub.Script
                ? this.Rn(gQ)
                : gQ.type === Ub.SystemScript
                ? this.On(gQ)
                : gQ.type === Ub.Style
                ? this.Dn(gQ)
                : gQ.type === Ub.Image
                ? this.Nn(gQ)
                : this.Qn(gQ)
            }),
            (gp.prototype.Qn = function (gQ) {
              var gW = this
              KK(gQ.src)
                .then(function (gZ) {
                  if (!gZ.ok) {
                    throw gZ.status
                  }
                  switch (gQ.type) {
                    case Ub.Json:
                      return gZ.json()
                    case Ub.Blob:
                      return gZ.blob()
                    case Ub.ArrayBuffer:
                      return gZ.arrayBuffer()
                    default:
                      return gZ.text()
                  }
                })
                .then(function (gZ) {
                  gW.Pn(gQ)
                })
                .catch(function (gZ) {
                  'number' == typeof gZ && (gQ.errCode = gZ)
                  gW.Tn(gQ)
                })
            }),
            (gp.prototype.On = function (gQ) {
              var gW = this
              U2.import(gQ.src)
                .then(function (gZ) {
                  gW.Pn(gQ)
                })
                .catch(function (gZ) {
                  if (gZ.message.startsWith('Incompatible plugin version')) {
                    if (gW.Mn) {
                      return
                    }
                    gp.context.event.emit('Shell.PWDDisabled')
                    gp.context.event.emit(
                      'Error.Occurred',
                      {
                        context: 'Preload',
                        info: {
                          category: uw,
                          domain: eN.Domain,
                          code: eN.ResourceVersionError,
                          error: gZ,
                        },
                        report: true,
                      },
                      function () {
                        gp.context.event.emit('Window.Reload')
                      }
                    )
                  } else {
                    gW.Ln(gZ, gQ)
                  }
                })
            }),
            (gp.prototype.Ln = function (gQ, gW) {
              var gZ = UV.getErrorItems()
              if (
                (UV.cleanErrorItems(), UV.cleanErrorModule(), 0 !== gZ.length)
              ) {
                var gY =
                    gZ
                      .map(function (gD) {
                        return gD.src
                      })
                      .join(',') || gW.src,
                  gI =
                    gZ[0].type === U5.ScriptError
                      ? eN.PluginScriptError
                      : eN.LoadResourceError
                if (gI === eN.PluginScriptError) {
                  gp.context.event.emit('Shell.PWDDisabled')
                  gp.context.event.emit('Error.SendExceptionReport', gQ)
                  this.onError && this.onError(gW)
                  this.onComplete = void 0
                  this.onError = void 0
                  this.onRetry = void 0
                  this.onLoad = void 0
                } else {
                  var gC = gW.retry || 0
                  this.Fn(gY, gC, gI)
                  this.jn(gW)
                }
              }
            }),
            (gp.prototype.In = function (gQ) {
              return function (gW) {
                return new Promise(function (gZ, gY) {
                  var gI = document.createElement(gQ)
                  gI.onload = function () {
                    URL.revokeObjectURL(gW)
                    gI instanceof HTMLScriptElement &&
                      gI.parentElement.removeChild(gI)
                    gZ(gI)
                  }
                  gI.onerror = function () {
                    var gC
                    URL.revokeObjectURL(gW)
                    Kv(gW)
                    null === (gC = gI.parentElement) ||
                      void 0 === gC ||
                      gC.removeChild(gI)
                    gY('onerror')
                  }
                  gI instanceof HTMLScriptElement
                    ? ((gI.async = true),
                      (gI.src = gW),
                      document.head.appendChild(gI))
                    : gI instanceof HTMLImageElement
                    ? (gI.src = gW)
                    : gI instanceof HTMLLinkElement
                    ? ((gI.rel = 'stylesheet'),
                      (gI.type = 'text/css'),
                      (gI.href = gW),
                      document.head.appendChild(gI))
                    : gY('unknown')
                })
              }
            }),
            (gp.prototype.Wn = function (gQ, gW) {
              var gZ = this
              KU(gQ.src)
                .then(this.In(gW))
                .then(function (gY) {
                  gZ.Pn(gQ)
                })
                .catch(function (gY) {
                  'number' == typeof gY && (gQ.errCode = gY)
                  gZ.Tn(gQ)
                })
            }),
            (gp.prototype.Rn = function (gQ) {
              this.Wn(gQ, 'script')
            }),
            (gp.prototype.Nn = function (gQ) {
              this.Wn(gQ, 'img')
            }),
            (gp.prototype.Dn = function (gQ) {
              this.Wn(gQ, 'link')
            }),
            (gp.prototype.Pn = function (gQ) {
              this.onLoad && this.onLoad(gQ)
              --this.Cn
              0 === this.Cn && this.onComplete && this.onComplete()
            }),
            (gp.prototype.Tn = function (gQ) {
              var gW = gQ.retry || 0
              this.Fn(gQ.src, gW, eN.LoadResourceError)
              this.jn(gQ)
            }),
            (gp.prototype.Bn = function (gQ) {
              return (
                UK[gQ.split('?')[0].substring(gQ.lastIndexOf('.') + 1)] ||
                Ub.Blob
              )
            }),
            (gp.prototype.Fn = function (gQ, gW, gZ) {
              gp.context.event.emit('Shell.PWDDisabled')
              var gY = 'src: ' + gQ.split('?')[0]
              gp.context.event.emit('Error.Report', {
                category: uw,
                error: 'load resource fail',
                domain: eN.Domain,
                code: gZ,
                retry: gW,
                messages: gY,
              })
            }),
            (gp.Gn = 5),
            gp
          )
        })(),
        Uf = {},
        Uy = function (gp, gQ, gW) {
          var gZ = (gW && gW.delayComplete) || false,
            gY = {
              mainComponent: gQ,
              delayComplete: gZ,
            }
          if (((Uf[gp] = gY), gZ)) {
            return function (gI) {
              gY.completeCallback && gY.completeCallback(gI)
            }
          }
        }
      function Ug(gp) {
        return function (gQ) {
          gQ.prototype.complete = Uy(gp, gQ, { delayComplete: true })
        }
      }
      var Uv = (function (gp) {
        function gQ() {
          return (null !== gp && gp.apply(this, arguments)) || this
        }
        return (
          V1(gQ, gp),
          (gQ.prototype.onDestroy = function () {
            this.root &&
              cc.isValid(this.root) &&
              this.root.removeFromParent(true)
          }),
          gQ
        )
      })(eO)
      function Uj(gp) {
        return function (gQ) {
          gQ.prototype.complete = Uy(gp, gQ, { delayComplete: true })
        }
      }
      var UF,
        Ux,
        UO,
        UX,
        UM,
        UN,
        UA = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return V1(gQ, gp), gQ
        })(eO),
        Uw = (function () {
          function gp() {}
          return (
            (gp.prototype.getClassInfo = function (gQ) {
              var gW = gQ['_$cInfo']
              return (
                gW && gW.componentCls !== gQ && (gW = gQ['_$cInfo'] = void 0),
                gW
              )
            }),
            (gp.prototype.getProperty = function (gQ) {
              if (gQ && gQ['_$prop']) {
                return gQ['_$prop']
              }
            }),
            (gp.prototype.getComponentBundle = function (gQ) {
              var gW = this.getClassInfo(gQ)
              if (gW) {
                return gW.bundleInfo
              }
            }),
            (gp.prototype.injectClassInfo = function (gQ, gW) {
              var gZ = this.getClassInfo(gQ)
              return (
                (gZ && void 0 !== gZ) ||
                  (gZ = gQ['_$cInfo'] =
                    {
                      bundleInfo: gW,
                      componentCls: gQ,
                      componentID: void 0,
                    }),
                gZ
              )
            }),
            (gp.prototype.injectProperty = function (gQ) {
              var gW = this.getProperty(gQ)
              return gW || (gW = gQ['_$prop'] = {}), gW
            }),
            (gp.prototype.checkCrossBundleOperation = function (gQ, gW) {
              var gZ = this.getClassInfo(gQ)
              if (gZ && gZ.bundleInfo !== gW) {
                throw Error('Cross bundle operation not allowed')
              }
            }),
            gp
          )
        })(),
        UR = new Uw(),
        UG = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.zn = function (gW, gZ, gY, gI) {
              var gC = this
              void 0 === gI && (gI = true)
              var gD = V8([], gY, true)
              gW.stack && gD.push(gW.stack)
              var gB = {
                category: uw,
                domain: eN.Domain,
                code: eN.PluginScriptError,
                error: gW,
                messages: gD,
              }
              if (
                (this.event.emit('Error.SendExceptionReport', gW),
                gZ && gZ.optional)
              ) {
                var gP = this.context.getContext(gZ)
                gP && gP.destroy()
              } else {
                gI &&
                  this.event.emit(
                    'Error.Occurred',
                    {
                      context: 'Unknown',
                      info: gB,
                      report: false,
                    },
                    function () {
                      gC.event.emit('Window.Reload')
                    }
                  )
              }
            }),
            gQ
          )
        })(eO),
        UT = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.Un = []), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onInstantiate = function (gW) {
              gp.prototype.onInstantiate.call(this, gW)
              this.event.on('Core.BundleCreated', this.qn, this)
              this.event.on('Core.BundleDestroyed', this.Yn, this)
            }),
            (gQ.prototype.create = function (gW, gZ) {
              var gY = this.Un[gZ.id],
                gI = UR.injectClassInfo(gW, gZ)
              if (
                (void 0 === gI.componentID &&
                  (gY.push(void 0), (gI.componentID = gY.length - 1)),
                !gY[gI.componentID])
              ) {
                var gC = this.context.getContext(gZ)
                if (!gC) {
                  throw Error('Unable to get bundle context')
                }
                try {
                  var gD = new gW()
                  UR.injectProperty(gD)
                  gD.onInstantiate && gD.onInstantiate(gC)
                  gY[gI.componentID] = gD
                  gD.onCreate && gD.onCreate(gZ.config)
                  this.event.emit('Core.ComponentCreated', gW)
                } catch (gB) {
                  throw (
                    (void 0 !== gI.componentID && (gY[gI.componentID] = void 0),
                    this.zn(
                      gB,
                      gZ,
                      ['Component create'],
                      !gC.bundleInfo.optional
                    ),
                    gB)
                  )
                }
              }
            }),
            (gQ.prototype.getInstance = function (gW) {
              var gZ = UR.getClassInfo(gW)
              if (gZ) {
                var gY = this.Un[gZ.bundleInfo.id]
                if (gY) {
                  return gY[gZ.componentID]
                }
              }
            }),
            (gQ.prototype.destroy = function (gW, gZ) {
              var gY = UR.getClassInfo(gW)
              if (gY) {
                var gI = gY.componentID,
                  gC = this.Un[gY.bundleInfo.id],
                  gD = gC[gI]
                gD && ((gC[gI] = void 0), this['_destroy'](gD, gZ))
              }
            }),
            (gQ.prototype.updateState = function (gW, gZ) {
              var gY = UR.getClassInfo(gW)
              if (gY) {
                var gI = gY.bundleInfo.id
                  ? this.Un[gY.bundleInfo.id][gY.componentID]
                  : void 0
                if (gI) {
                  gI.state && Object.assign(gI.state, gZ)
                  try {
                    gI.onStateChange && gI.onStateChange(gZ)
                  } catch (gC) {
                    this.zn(gC, gY.bundleInfo, ['Component updateState'])
                  }
                }
              }
            }),
            (gQ.prototype.qn = function (gW) {
              var gZ = gW.payload
              if (!gZ.id) {
                throw Error('Unable to get bundle id')
              }
              this.Un[gZ.id] = []
            }),
            (gQ.prototype.Yn = function (gW) {
              var gZ = gW.payload
              if (!gZ.id) {
                throw Error('Unable to get bundle id')
              }
              var gY = this.Un[gZ.id]
              if (gY && gY.length > 0) {
                for (var gI = 0; gI < gY.length; ++gI) {
                  gY[gI] && this['_destroy'](gY[gI], gZ)
                }
              }
              this.Un[gZ.id] = void 0
            }),
            (gQ.prototype['_destroy'] = function (gW, gZ) {
              try {
                gW.onDestroy && gW.onDestroy()
              } catch (gY) {
                this.zn(gY, gZ, ['Component destroy'])
              }
              this.event.emit('Core.ComponentDestroyed', {
                componentCls: gW.cls,
                component: gW,
              })
            }),
            gQ
          )
        })(UG),
        Um = 'undefined' != typeof Symbol,
        Ud = Um ? Symbol() : '_type',
        UL = Um ? Symbol() : '_propagationStopped',
        US = Um ? Symbol() : '_intercepted',
        Uk = Um ? Symbol() : '_propagateCb',
        UJ = Um ? Symbol() : '_emittingBundle',
        Uq = Um ? Symbol() : '_subscribers',
        Up = (function () {
          function gp() {
            this.cleanUp()
          }
          return (
            Object.defineProperty(gp.prototype, 'type', {
              get: function () {
                return this[Ud]
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'emittingBundle', {
              get: function () {
                return this[UJ]
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'propagationCanceled', {
              get: function () {
                return this[UL]
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'intercepted', {
              get: function () {
                return this[US]
              },
              enumerable: false,
              configurable: true,
            }),
            Object.defineProperty(gp.prototype, 'subscribers', {
              get: function () {
                return this[Uq]
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.init = function (gQ, gW, gZ, gY, gI) {
              this[Ud] = gQ
              this[Uk] = gZ
              this[UJ] = gY
              this[Uq] = gI
              this.payload = gW
            }),
            (gp.prototype.intercept = function () {
              this[US] = true
            }),
            (gp.prototype.propagate = function () {
              console.log(this[US])
              if (this[US]) {
                this[Uk](this)
              }
              this[US] = false
            }),
            (gp.prototype.stopPropagation = function () {
              this[UL] = true
            }),
            (gp.prototype.cleanUp = function () {
              this[Ud] = void 0
              this[UL] = false
              this[US] = false
              this[Uk] = void 0
              this[UJ] = void 0
              this[Uq] = void 0
              this.payload = void 0
              this.response = void 0
              this.responseCb = void 0
              this.callbackRef = void 0
              this.error = void 0
            }),
            gp
          )
        })(),
        UQ = 'undefined' != typeof Symbol,
        UW = UQ ? Symbol('_subscriptionTable') : '_subscriptionTable',
        UZ = UQ ? Symbol('_pendingEmitOnceTable') : '_pendingEmitOnceTable',
        UY = UQ ? Symbol() : '_emitQueue',
        UI = UQ ? Symbol() : '_eventPool',
        UC = UQ ? Symbol() : '_currentEvent',
        UD = UQ ? Symbol() : '_processing',
        UB = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW[UF] = {}),
              (gW[Ux] = {}),
              (gW[UO] = []),
              (gW[UX] = []),
              (gW[UM] = void 0),
              (gW[UN] = false),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onInstantiate = function (gW) {
              gp.prototype.onInstantiate.call(this, gW)
              this.event.on('Core.ComponentDestroyed', this.Jn, this)
            }),
            (gQ.prototype.on = function (gW, gZ, gY, gI, gC) {
              this.Xn(gW, gZ, gY, false, this.Kn(gI), gC)
            }),
            (gQ.prototype.once = function (gW, gZ, gY, gI, gC) {
              this.Xn(gW, gZ, gY, true, this.Kn(gI), gC)
            }),
            (gQ.prototype.off = function (gW, gZ, gY) {
              this['$n'](gW, gZ, gY)
            }),
            (gQ.prototype.emit = function (gW, gZ, gY, gI) {
              var gC = this[UI].pop() || new Up(),
                gD = this[UW][gW] ? V8([], this[UW][gW], true) : []
              gC.init(gW, gZ, this.propagate.bind(this), gI, gD)
              this.propagate(gC)
            }),
            (gQ.prototype.propagate = function (gW) {
              this[UC] !== gW && (this[UY].push(gW), this.ti())
            }),
            (gQ.prototype.hasListeners = function (gW) {
              var gZ = this[UW][gW]
              return !(!gZ || 0 === gZ.length)
            }),
            (gQ.prototype.Jn = function (gW) {
              var gZ = UR.getProperty(gW.payload.component).subscriptions
              if (gZ) {
                for (; 0 !== gZ.length; ) {
                  var gY = gZ[gZ.length - 1]
                  this['$n'](gY.type, gY.callback, gW.payload.component)
                }
              }
            }),
            (gQ.prototype.Xn = function (gW, gZ, gY, gI, gC, gD) {
              var gB = this[UW][gW]
              void 0 === gB && (gB = this[UW][gW] = [])
              for (var gP = 0; gP < gB.length; ++gP) {
                var h0 = gB[gP]
                if (void 0 !== h0 && h0.callback === gZ && h0.target === gY) {
                  return
                }
              }
              this.ni(gW, gZ, gY)
              var h1 = {
                type: gW,
                callback: gZ,
                target: gY,
                once: gI,
                priority: gC,
                bundleInfo: gD,
              }
              if (gI) {
                var h2 = (this[UZ][gW] = this[UZ][gW] ? this[UZ][gW] : [])
                h2.includes(h1) || h2.push(h1)
              }
              if (gC === this.Kn('High')) {
                gB.unshift(h1)
              } else {
                var h3 = false
                for (gP = 0; gP < gB.length; ++gP) {
                  if (!(gB[gP].priority <= h1.priority)) {
                    gB.splice(gP, 0, h1)
                    h3 = true
                    break
                  }
                }
                h3 || gB.push(h1)
              }
            }),
            (gQ.prototype['$n'] = function (gW, gZ, gY) {
              var gI = this[UW][gW]
              if (void 0 !== gI) {
                for (var gC = 0; gC < gI.length; ++gC) {
                  var gD = gI[gC]
                  if (gD && gD.callback === gZ && gD.target === gY) {
                    return (
                      gI.splice(gC, 1),
                      this.ii(gD),
                      void this.ei(gW, gD.callback, gD.target)
                    )
                  }
                }
              }
            }),
            (gQ.prototype.ri = function (gW) {
              var gZ = gW.subscribers
              if (0 !== gZ.length) {
                for (
                  this.oi(gW);
                  gZ.length > 0 && !gW.propagationCanceled && !gW.intercepted;

                ) {
                  var gY = gZ.shift()
                  void 0 === gY ||
                    !this.si(gY) ||
                    (gY.once && this.ai(gY)) ||
                    this.ui(gW, gY)
                }
                this.ci(gW, 0, gZ)
              } else {
                this.hi(gW)
              }
            }),
            (gQ.prototype.oi = function (gW) {
              this[UC] = gW
            }),
            (gQ.prototype.ui = function (gW, gZ) {
              var gY = (gW.callbackRef = gZ.callback),
                gI = gZ.target
              try {
                gI ? gY.call(gI, gW) : gY(gW)
              } catch (gC) {
                this.zn(gC, gZ.bundleInfo, ['Event emit'])
              }
            }),
            (gQ.prototype.ci = function (gW, gZ, gY) {
              ;(gW.error ||
                (!gW.intercepted &&
                  (gZ === gY.length || gW.propagationCanceled))) &&
                this.hi(gW)
              this[UC] = void 0
            }),
            (gQ.prototype.hi = function (gW) {
              try {
                gW.responseCb && gW.responseCb(gW)
              } catch (gZ) {
                this.zn(gZ, gW.emittingBundle, ['Event emit callback'])
              }
              gW.cleanUp()
              this[UI].length < 40 && this[UI].push(gW)
            }),
            (gQ.prototype.ti = function () {
              if (!this[UD]) {
                this[UD] = true
                for (var gW = this[UY]; gW.length > 0; ) {
                  var gZ = gW.shift()
                  gZ && this.ri(gZ)
                }
                this[UD] = false
              }
            }),
            (gQ.prototype.ni = function (gW, gZ, gY) {
              var gI = gY,
                gC = UR.getProperty(gI)
              if (gC) {
                var gD = gC.subscriptions
                !gD && (gD = gC.subscriptions = [])
                gD.push({
                  type: gW,
                  callback: gZ,
                  target: gY,
                })
              }
            }),
            (gQ.prototype.ei = function (gW, gZ, gY) {
              var gI = gY,
                gC = UR.getProperty(gI)
              if (gC) {
                var gD = gC.subscriptions
                if (gD) {
                  for (var gB = 0; gB < gD.length; ++gB) {
                    var gP = gD[gB]
                    if (
                      gP.type === gW &&
                      gP.callback === gZ &&
                      gP.target === gY
                    ) {
                      gD.splice(gB, 1)
                      break
                    }
                  }
                }
              }
            }),
            (gQ.prototype.si = function (gW) {
              return !!this[UW][gW.type].includes(gW)
            }),
            (gQ.prototype.ai = function (gW) {
              return (
                -1 === this[UZ][gW.type].indexOf(gW) ||
                (this['$n'](gW.type, gW.callback, gW.target), false)
              )
            }),
            (gQ.prototype.ii = function (gW) {
              if (gW.once) {
                var gZ = this[UZ][gW.type],
                  gY = gZ.indexOf(gW)
                ;-1 !== gY && gZ.splice(gY, 1)
              }
            }),
            (gQ.prototype.Kn = function (gW) {
              switch (gW) {
                case 'High':
                  return 10
                case 'Normal':
                default:
                  return 20
                case 'Low':
                  return 30
              }
            }),
            gQ
          )
        })(UG)
      UF = UW
      Ux = UZ
      UO = UY
      UX = UI
      UM = UC
      UN = UD
      var UP = document.createElement('div'),
        f0 = function (gp) {
          var gQ = UP
          var gW = gQ.firstChild
          try {
            gW = gQ.removeChild(gW)
          } catch (gZ) {}
          return (gQ.innerHTML = ''), gW
        },
        f1 = (function (gp) {
          var gQ, gW
          gp || (gp = 1)
          var gZ =
            '1' ===
            (null ===
              (gW =
                null === (gQ = E.shell) || void 0 === gQ
                  ? void 0
                  : gQ.urlSearch) || void 0 === gW
              ? void 0
              : gW.get('nodbg'))
          return new Promise(function (gY) {
            gZ
              ? gY(gp)
              : Function(
                  'n,t',
                  'setInterval("(function(a){return function(a){return Function(\'Function(\\"debugger;\'+a+\'\\")()\')}(a)})(Math.random().toString())();"+n(t),1e3*t)'
                )(gY, gp)
          })
        })(1),
        f2 = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.li = {}), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onInstantiate = function (gW) {
              gp.prototype.onInstantiate.call(this, gW)
              this.event.on('Core.ComponentDestroyed', this.Jn, this)
            }),
            (gQ.prototype.register = function (gW, gZ) {
              this.li[gZ] = gW
            }),
            (gQ.prototype.append = function (gW, gZ, gY) {
              if (gW && gZ) {
                var gI = this.component.getInstance(gW)
                if (!gI) {
                  throw Error('Unable to get instance '.concat(gW.toString()))
                }
                var gC = this.component.getInstance(gZ),
                  gD = null == gI ? void 0 : gI.rootElement,
                  gB = (null == gC ? void 0 : gC.getContainerElement)
                    ? gC.getContainerElement(gY)
                    : null == gC
                    ? void 0
                    : gC.rootElement
                gD && gB && (this.fi(gD, gB), (gI.parent = gZ))
              }
            }),
            (gQ.prototype.appendTo = function (gW, gZ) {
              var gY = this.li[gZ]
              gY && this.append(gW, gY, void 0)
            }),
            (gQ.prototype.removeFromParent = function (gW) {
              var gZ = this.component.getInstance(gW)
              gZ &&
                ((function (gY) {
                  if (gY) {
                    var gI = gY.parentNode
                    gI && gI.removeChild(gY)
                  }
                })(gZ.rootElement),
                (gZ.parent = void 0))
            }),
            (gQ.prototype.show = function (gW) {
              var gZ = this.component.getInstance(gW)
              gZ && gZ.onShow && gZ.onShow()
            }),
            (gQ.prototype.hide = function (gW) {
              var gZ = this.component.getInstance(gW)
              gZ && gZ.onHide && gZ.onHide()
            }),
            (gQ.prototype.getContainerElement = function (gW, gZ) {
              var gY = this.component.getInstance(gW)
              if (gY && gY.getContainerElement) {
                return gY.getContainerElement(gZ)
              }
            }),
            (gQ.prototype.getRootElement = function (gW) {
              var gZ = this.component.getInstance(gW)
              if (gZ) {
                return gZ.rootElement
              }
            }),
            (gQ.prototype.Jn = function (gW) {
              var gZ = gW.payload.component
              if (gZ && gZ.rootElement && gZ.rootElement) {
                var gY = gZ.rootElement.parentNode
                gY && gY.removeChild(gZ.rootElement)
                gZ.rootElement = void 0
              }
            }),
            (gQ.prototype.fi = function (gW, gZ) {
              gW &&
                gZ &&
                gW.parentNode !== gZ &&
                (gW.parentNode && gW.parentNode.removeChild(gW),
                gZ.appendChild(gW))
            }),
            gQ
          )
        })(UG),
        f3 = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW['_resources'] = []), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.setQualifierConfig = function (gW, gZ, gY) {
              var gI = this.di(gY)
              gI.subConfig = gZ
              gI.resourceQualifier = void 0
              gW &&
                (gW.language
                  ? (gI.config = gW)
                  : (gI.config = Object.assign({}, gW, this.Ai())))
            }),
            (gQ.prototype.addAssets = function (gW, gZ, gY) {
              var gI = this.di(gZ)
              if (
                (Object.assign(gI.md5Map, gW),
                gI.resourceQualifier &&
                  (gI.resourceQualifier.assetTable = Object.keys(gI.md5Map)),
                gY)
              ) {
                for (var gC in gW) gI.baseMap[gC] = gY
              }
            }),
            (gQ.prototype.resolveUrl = function (gW, gZ, gY) {
              var gI
              void 0 === gY && (gY = false)
              var gC = this.vi(gZ),
                gD =
                  (null === (gI = gC.resourceQualifier) || void 0 === gI
                    ? void 0
                    : gI.getResourceURL(gW)) || gW,
                gB = gC.md5Map[gD],
                gP = gD
              if (gB) {
                var h0 = gP.lastIndexOf('.')
                gP = Array.isArray(gB)
                  ? gB[1] + '.' + gB[0] + gP.substring(h0)
                  : gP.substring(0, h0) + '.' + gB + gP.substring(h0)
              }
              if (!gY) {
                var h1 = this.pi(gD, gC, gZ)
                if (void 0 === h1) {
                  throw Error('Invalid input data')
                }
                if (((gP = eI(h1, gP)), !eD(gP) && !eC(gP))) {
                  var h2 = this.gi(gZ.baseUrl)
                  if (void 0 === h2) {
                    throw Error('Invalid url data')
                  }
                  gP = eB(gP) ? eP(gP, h2) || gP : eI(h2, gP)
                }
              }
              return gP
            }),
            (gQ.prototype.hasEntry = function (gW, gZ) {
              var gY, gI
              return (
                -1 !==
                (null ===
                  (gI =
                    null === (gY = this.vi(gZ).resourceQualifier) ||
                    void 0 === gY
                      ? void 0
                      : gY.assetTable) || void 0 === gI
                  ? void 0
                  : gI.indexOf(gW))
              )
            }),
            (gQ.prototype.vi = function (gW) {
              var gZ = this.di(gW)
              if (!gZ.resourceQualifier) {
                if (!gZ.subConfig || !gZ.subConfig.language) {
                  var gY = KW(),
                    gI = gY.indexOf('-')
                  if (-1 !== gI) {
                    gZ.subConfig = gZ.subConfig || Object.create(null)
                    var gC = gY.substring(gI + 1)
                    gZ.subConfig.language = function (gD) {
                      return gD === gC ? 1 : 0
                    }
                  }
                }
                gZ.resourceQualifier = new EA(gZ.config, gZ.subConfig)
                gZ.resourceQualifier.assetTable = Object.keys(gZ.md5Map)
              }
              return gZ
            }),
            (gQ.prototype.di = function (gW) {
              if (!gW.id) {
                throw Error('Unable to get bundle id')
              }
              var gZ = this['_resources'][gW.id]
              return (
                gZ ||
                  (gZ = this['_resources'][gW.id] =
                    {
                      resourceQualifier: void 0,
                      config: this.Ai(),
                      subConfig: void 0,
                      md5Map: {},
                      baseMap: {},
                    }),
                gZ
              )
            }),
            (gQ.prototype.Ai = function () {
              return {
                language: KW().split('-')[0],
                orientation: Ey.getOrientationMode(),
              }
            }),
            (gQ.prototype.pi = function (gW, gZ, gY) {
              return gZ.baseMap[gW] || this.gi(gY.baseUrl)
            }),
            (gQ.prototype.gi = function (gW) {
              var gZ = EV(),
                gY = gZ.origin,
                gI = gZ.pathname
              if (!gW) {
                return eI(gY, gI.substring(0, gI.lastIndexOf('/')), '/')
              }
              if (eB(gW)) {
                var gC = eI(gY, gI)
                return eP(gW, gC)
              }
              return U0(gW)
            }),
            gQ
          )
        })(UG),
        f4 = { h5: h4 },
        f5 = function (gp) {
          return gp.substring(gp.lastIndexOf('/') + 1)
        },
        f6 = function (gp, gQ) {
          return gp.substring(0, gp.indexOf(gQ)) + gQ
        },
        f7 = function (gp, gQ) {
          for (
            var gW,
              gZ = UV.getDeps(gp),
              gY = gQ.name,
              gI = {
                name: gY,
                version: gQ.version,
                optional: gQ.optional,
                baseUrl: f6(gp, gY),
                files: [],
              },
              gC = 0;
            gC < gZ.length;
            gC++
          ) {
            var gD = gZ[gC].id,
              gB = f5(gD)
            'index.js' !== gB &&
              (null === (gW = gI.files) || void 0 === gW || gW.push(gB))
          }
          return gI
        },
        f8 = function (gp, gQ, gW) {
          var gZ = gW['_$meta']
          return V2(V2(V2({}, gQ), gZ), {
            version: gZ.version,
            hasCCSettings: !!gW['_$ccSettings'],
            baseUrl: f6(gp, gQ.name),
          })
        }
      function f9(gp) {
        delete f4[gp]
      }
      var fV,
        fz = (function () {
          function gp(gQ) {
            this.mi = {}
            this.bi = []
            this['_i'] = []
            this.onComplete = void 0
            this.onRetry = void 0
            this.onError = void 0
            this.mi = gQ
          }
          return (
            (gp.prototype.load = function () {
              var gQ = this,
                gW = this.wi(),
                gZ = this.xi(this.mi)
              gW.load(gZ)
            }),
            (gp.prototype.Vi = function (gQ) {
              var gW = (function (gI) {
                var gC = gI && gI['_$meta']
                if (gC) {
                  var gD = gC.entry,
                    gB = gC.name,
                    gP = gC.alias,
                    h0 = gC.version
                  if (gB) {
                    if ((eA.setMeta(gB, gC), gD)) {
                      var h1 = eP(gD, ''.concat(gB, '/'))
                      eZ.getPluginRegistry(gB).entry = h1
                    }
                    if (gP) {
                      var h2 =
                        ((h6 = Eb((h5 = gP))),
                        h5 !== h6 && (h6 = EH((h6 = atob(h6)), 'xU8pa3cY')),
                        h6)
                      eA.setMeta(h2, gC)
                      var h3 = eZ.getPluginRegistry(h2)
                      if (h3) {
                        var h4 = h0.split('.')[0]
                        if (
                          eA.getMeta()[h3.name].version.split('.')[0] !== h4
                        ) {
                          throw Error(
                            'Unable to import '
                              .concat(h2, ' due to version conflict between ')
                              .concat(h0, ' and ')
                              .concat(h3.version)
                          )
                        }
                      } else {
                        eZ.setPluginRegistry(h2, eZ.getPluginRegistry(gB))
                      }
                    }
                    var h5, h6
                    return gC
                  }
                }
              })(gQ.response)
              if (gW) {
                var gZ = gW.name,
                  gY = gW.entry
                this.Si(gY, gZ)
                this.ki(gW)
              }
            }),
            (gp.prototype.Si = function (gQ, gW) {
              if (gQ) {
                var gZ = eZ.getPluginRegistry(gW),
                  gY = {
                    src: gZ.rawUrl,
                    type: Ub.SystemScript,
                    info: V2({ baseUrl: '' }, gZ),
                    optional: gZ.optional,
                  }
                this.bi.unshift(gY)
              }
            }),
            (gp.prototype.ki = function (gQ) {
              var gW = this,
                gZ = this.Ei(gQ)
              gZ &&
                this.xi(gZ).forEach(function (gY) {
                  gW['_i'].unshift(gY)
                })
            }),
            (gp.prototype.yi = function (gQ, gW) {
              var gZ = this
              return gW.length <= 0
                ? Promise.resolve()
                : new Promise(function (gY) {
                    gQ.load(gZ.Ci(gW))
                  })
            }),
            (gp.prototype.wi = function () {
              var gQ = this,
                gW = this.Hi()
              return (
                (gW.onLoad = function (gZ) {
                  gQ.Vi(gZ)
                }),
                gW
              )
            }),
            (gp.prototype.Hi = function () {
              var gQ = this,
                gW = new UU()
              return (
                (gW.onError = function (gZ) {
                  gQ.onError && gQ.onError(gZ)
                }),
                (gW.onRetry = function (gZ) {
                  gQ.onRetry && gQ.onRetry(gZ.retry || 0, gZ.info)
                }),
                gW
              )
            }),
            (gp.prototype.Ei = function (gQ) {
              var gW = { gI: V2({ baseUrl: '' }, gY[gI]) },
                gZ = gQ.dependencies,
                gY = eZ.getPluginRegistries()
              for (var gI in gZ);
              return 0 === Object.keys(gW).length ? void 0 : gW
            }),
            (gp.prototype.xi = function (gQ) {
              var gW = []
              for (var gZ in gQ) {
                var gY = gQ[gZ]
                gY.rawUrl &&
                  gW.push({
                    src: gY.rawUrl,
                    type: Ub.SystemScript,
                    info: gY,
                    optional: gY.optional,
                  })
              }
              return gW
            }),
            (gp.prototype.Ci = function (gQ) {
              var gW = gQ.map(function (gZ) {
                return gZ.src
              })
              return gQ.filter(function (gZ, gY) {
                var gI = gZ.src
                return !gW.includes(gI, gY + 1)
              })
            }),
            gp
          )
        })()
      !(function (gp) {
        gp[(gp.Shell = 0)] = 'Shell'
        gp[(gp.Splash = 1)] = 'Splash'
      })(fV || (fV = {}))
      var fH,
        fb = (function () {
          function gp() {}
          return (
            (gp.prototype.interpret = function (gQ) {
              return Kf.resource.resolveUrl(gQ[0])
            }),
            gp
          )
        })()
      !(function (gp) {
        gp[(gp.Value = 1)] = 'Value'
        gp[(gp.Color = 2)] = 'Color'
      })(fH || (fH = {}))
      var fE = (function () {
          function gp() {}
          return (
            (gp.prototype.interpret = function (gQ) {
              switch (gQ[0]) {
                case fH.Value:
                  return gQ[1]
                case fH.Color:
                  return (function (gW, gZ, gY, gI) {
                    return gI
                      ? 'rgba('
                          .concat(gW, ', ')
                          .concat(gZ, ', ')
                          .concat(gY, ', ')
                          .concat(gI, ')')
                      : 'rgb('.concat(gW, ', ').concat(gZ, ', ').concat(gY, ')')
                  })(gQ[1], gQ[2], gQ[3], gQ[4])
                default:
                  return gQ[0]
              }
            }),
            gp
          )
        })(),
        fK = (function () {
          function gp(gQ) {
            this.Mi = gQ
            this.Bi('shell', fV.Shell)
            this.Bi('splash', fV.Splash)
          }
          return (
            (gp.prototype.Bi = function (gQ, gW) {
              var gZ = this.Mi.unregisterInterpreter(gQ)
              if (!gZ) {
                switch (gW) {
                  case fV.Splash:
                    gZ = new fb()
                    break
                  case fV.Shell:
                  default:
                    gZ = new fE()
                }
              }
              this.Mi.registerInterpreter(gQ, gZ)
            }),
            (gp.prototype.v = function (gQ) {
              return this.Mi.v(gQ) || void 0
            }),
            (gp.prototype.extend = function (gQ) {
              this.Mi.extend(gQ)
            }),
            gp
          )
        })(),
        fU = new fK(e0),
        fy = (function () {
          function gp(gQ) {
            this.ji = gQ
          }
          return (
            (gp.prototype.load = function () {
              var gQ = this
              if (this.ji.bundleInfo) {
                this.Gi(function () {
                  gQ.yi()
                })
              } else {
                var gW = {
                  error: Error(
                    '[Plugin Loader]: Empty package info. Failed to load the plugin.'
                  ),
                  item: void 0,
                }
                this.onError && this.onError(this.ji.bundleInfo, gW)
              }
            }),
            (gp.prototype.Gi = function (gQ) {
              var gW = this,
                gZ = this.ji.bundleInfo
              if (gZ.assets) {
                if (Kx(gZ.assets)) {
                  var gY = KO(gZ.assets)
                  this.ji.resource.addAssets(gY.assets)
                  gQ()
                } else {
                  if ('string' == typeof gZ.assets) {
                    var gI = new UU()
                    gI.onLoad = function (gC) {
                      var gD = gC.response
                      if (
                        (Kx(gC.response) && (gD = KO(gC.response)),
                        2 !== gD.version)
                      ) {
                        throw Error(
                          'Unknown asset table format version: ' + gD.version
                        )
                      }
                      gW.ji.resource.addAssets(gD.assets)
                      gQ()
                    }
                    gI.onError = function (gC) {
                      var gD =
                          '[Plugin Loader]: Failed to download asset table of '.concat(
                            gZ.name
                          ),
                        gB = {
                          error: Error(gD),
                          item: gC,
                        }
                      gW.onError && gW.onError(gW.ji.bundleInfo, gB)
                    }
                    gI.load([this.ji.resource.resolveUrl(gZ.assets)])
                  } else {
                    this.ji.resource.addAssets(gZ.assets.assets)
                    gQ()
                  }
                }
              } else {
                gQ()
              }
            }),
            (gp.prototype.yi = function () {
              var gQ = this,
                gW = this.Pi(),
                gZ = new UU()
              gW.sources.length
                ? (this.onPreload &&
                    this.onPreload(this.ji.bundleInfo, gW.totalFiles),
                  (gZ.onLoad = function (gY) {
                    if (
                      ((gW.fileCount += 1),
                      gQ.onProgress &&
                        gQ.onProgress(gQ.ji.bundleInfo, {
                          currentItem: gY,
                          fileCount: gW.fileCount,
                          totalFiles: gW.totalFiles,
                        }),
                      gY.src === gQ.Zi)
                    ) {
                      var gI = gY.response
                      for (var gC in gI) gI[gC] && Kp.extend(gI[gC], gC)
                    }
                    gY.src === gQ.Ri && fU.extend(gY.response)
                    gW.success() &&
                      gQ.onSuccess &&
                      gQ.onSuccess(gQ.ji.bundleInfo)
                  }),
                  (gZ.onRetry = function (gY) {
                    var gI =
                      Kp.t('General.ResourceRetryMessage') +
                      Kp.t('RetryHandler.Times', {
                        times: { ordinal: gY.retry },
                      })
                    gQ.ji.event.emit('Shell.ChangeProgressText', gI)
                  }),
                  (gZ.onError = function (gY) {
                    var gI = '[Plugin Loader]: Failed to download file of '
                        .concat(gQ.ji.bundleInfo.name, '. Src: ')
                        .concat(gY.src),
                      gC = {
                        error: Error(gI),
                        item: gY,
                      }
                    gQ.onError && gQ.onError(gQ.ji.bundleInfo, gC)
                  }),
                  gZ.load(gW.sources))
                : this.onSuccess && this.onSuccess(this.ji.bundleInfo)
            }),
            (gp.prototype.Pi = function () {
              var gQ,
                gW,
                gZ,
                gY = this,
                gI = this.ji.bundleInfo,
                gC = [],
                gD = gI.preload,
                gB = gI.extraAssets
              gD &&
                (null === (gQ = gI.files) ||
                  void 0 === gQ ||
                  gQ.push.apply(
                    gQ,
                    gD.map(function (h4) {
                      return gY.ji.resource.resolveUrl(h4)
                    })
                  ))
              gB &&
                (null === (gW = gI.files) ||
                  void 0 === gW ||
                  gW.push.apply(gW, gB))
              var gP =
                null === (gZ = gI.files) || void 0 === gZ ? void 0 : gZ.length
              if (gP && gI.files) {
                for (var h0 = 0; h0 < gP; h0++) {
                  var h1 = gI.files[h0]
                  if (!h1.startsWith('shell-game-res')) {
                    var h2 = eD(h1) || eC(h1) ? h1 : eI(gI.baseUrl, h1)
                    gC.push(h2)
                  }
                }
              }
              this.ji.resource.hasEntry('shell-game-res/locale/locale.json') &&
                ((this.Zi = this.ji.resource.resolveUrl(
                  'shell-game-res/locale/locale.json'
                )),
                gC.push(this.Zi))
              this.ji.resource.hasEntry(
                'shell-game-res/appearance/appearance.json'
              ) &&
                ((this.Ri = this.ji.resource.resolveUrl(
                  'shell-game-res/appearance/appearance.json'
                )),
                gC.push(this.Ri))
              var h3 = {
                sources: gC,
                fileCount: 0,
                totalFiles: gC.length,
                success: function () {
                  return h3.fileCount === h3.totalFiles
                },
              }
              return h3
            }),
            gp
          )
        })(),
        fg = (function () {
          function gp() {
            this.Oi = 0
            this.Di = 0
            this.Ni = 0
            this.Qi = 0
            this.Ti = false
            this.Li = 0
            this.Fi = 0
          }
          return (
            (gp.prototype.addTotalFileCount = function (gQ) {
              this.Di += gQ
            }),
            (gp.prototype.fileLoaded = function () {
              this.Oi += 1
            }),
            (gp.prototype.filePercentage = function () {
              this.Ti || (this.Li = this.Oi)
              var gQ = this.Li / this.Di
              return isNaN(gQ) ? 0 : gQ
            }),
            (gp.prototype.addTotalPluginCount = function (gQ) {
              this.Qi += gQ
            }),
            (gp.prototype.pluginLoaded = function () {
              this.Ni += 1
            }),
            (gp.prototype.isComplete = function () {
              return this.Ti || (this.Fi = this.Ni), this.Fi === this.Qi
            }),
            (gp.prototype.stop = function () {
              this.Ti = true
            }),
            gp
          )
        })(),
        fv = true,
        fj = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onInstantiate = function (gW) {
              gp.prototype.onInstantiate.call(this, gW)
              this.event.on('Shell.GetPluginMeta', this.Ii, this)
            }),
            (gQ.prototype.load = function (gW, gZ) {
              var gY = this
              void 0 === gZ && (gZ = {})
              var gI = new fz(gW)
              gI.onError = function (gC) {
                gC.info.optional
                  ? gZ.onComplete && gZ.onComplete()
                  : gZ.onError && gZ.onError(gC)
              }
              gI.onRetry = function (gC) {
                var gD =
                  Kp.t('General.ResourceRetryMessage') +
                  Kp.t('RetryHandler.Times', { times: { ordinal: gC } })
                gY.event.emit('Shell.ChangeProgressText', gD)
              }
              gI.onComplete = function (gC) {
                var gD = function () {
                    gZ.onComplete && gZ.onComplete()
                  },
                  gB = gC.plugins
                0 !== Object.keys(gB).length
                  ? ('1' === Ey.getURLSearchParam().get('plog') &&
                      (function (gP, h0) {
                        var h1 = { h2: h3.version }
                        for (var h2 in (fv &&
                          ((fv = false), (h1[gP.name] = gP.version)),
                        h0)) {
                          var h3 = h0[h2]
                        }
                        0 !== Object.keys(h1).length &&
                          E.console.log(
                            'plugins: ' + JSON.stringify(h1, void 0, 4)
                          )
                      })(gY.context.bundleInfo, gB),
                    gZ.onDependencyResolved && gZ.onDependencyResolved(gB),
                    gY.Wi(gB, gZ, gD))
                  : gD()
              }
              gI.load()
            }),
            (gQ.prototype.unload = function (gW) {
              f9(gW.name)
              this.context.destroyBundle(gW)
            }),
            (gQ.prototype.Wi = function (gW, gZ, gY) {
              var gI = this,
                gC = new fg(),
                gD = gZ.onProgress,
                gB = gZ.onPreload,
                gP = gZ.onLoad,
                h0 = gZ.onError,
                h1 = function () {
                  gC.pluginLoaded()
                  gC.isComplete() && gY()
                },
                h2 = function (hH, hb) {
                  if (null == hb ? void 0 : hb.error) {
                    if (hH && hH.optional) {
                      return gI.unload(hH), void h1()
                    }
                    gC.stop()
                    hb.item && h0 && h0(hb.item)
                  } else {
                    h1()
                  }
                },
                h3 = function (hH, hb) {
                  gC.addTotalFileCount(hb)
                  gB && gB(hH)
                },
                h4 = function (hH, hb) {
                  gC.fileLoaded()
                  gD && gD(hH, gC.filePercentage())
                  gP && gP(hb.currentItem)
                },
                h5 = function (hH, hb) {
                  h2(hH, hb)
                },
                h6 = function (hH) {
                  gI.zi(hH, h2)
                }
              for (var h7 in (gC.addTotalPluginCount(Object.keys(gW).length),
              gW)) {
                var h8 = gW[h7]
                if (h8) {
                  var h9 = h8.files
                  !h9 && (h9 = h8.files = [])
                  var hV = this.context.createBundle(h8),
                    hz = new fy(hV)
                  hz.load()
                } else {
                  gC.addTotalPluginCount(-1)
                }
              }
            }),
            (gQ.prototype.zi = function (gW, gZ) {
              var gY,
                gI = function (h3) {
                  h3 ? gZ(gW, { error: h3 }) : gZ(gW)
                }
              try {
                var gC = ((gY = gW.name), Uf[gY])
                if (!gC) {
                  return void gI()
                }
                var gD = gC.delayComplete || false
                if ((gD && (gC.completeCallback = gI), gC.mainComponent)) {
                  var gB = this.context.getContext(gW)
                  if (!gB) {
                    throw Error('Unable to get context of '.concat(gW.name))
                  }
                  if (
                    gW.bundles &&
                    !(function (h3) {
                      for (var h4 in h3)
                        if (void 0 !== h3[h4] && null !== h3[h4]) {
                          return false
                        }
                      return true
                    })(gW.bundles)
                  ) {
                    var gP = gB.bundleInfo.bundles
                    if (gP) {
                      var h0 = Object.create(null)
                      for (var h1 in gP) {
                        var h2 = gP[h1]
                      }
                      gB.cocos.setCocosBundleVers(h0)
                      gB.bundleInfo.bundleBaseUrl = eI(
                        gB.bundleInfo.baseUrl,
                        'assets/'
                      )
                      try {
                        gB.component.create(gC.mainComponent)
                        !gD && gI()
                      } catch (h3) {
                        gI(h3)
                      }
                    } else {
                      gI(Error('Cocos bundle is undefined'))
                    }
                  } else {
                    gB.component.create(gC.mainComponent)
                    !gD && gI()
                  }
                } else {
                  !gD && gI()
                }
              } catch (h4) {
                gZ(gW, {
                  error: Error('Failed to create plugin: '.concat(gW.name)),
                })
              }
            }),
            (gQ.prototype.Ii = function (gW) {}),
            gQ
          )
        })(UG),
        fF = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.Ui = []), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.createBundle = function (gW) {
              for (var gZ = 0; gZ < this.Ui.length; ++gZ) {
                var gY = this.Ui[gZ]
                if (gY && gY.bundleInfo === gW) {
                  return gY
                }
              }
              var gI = eE && eE.createContext(gW)
              if (!gI) {
                throw Error('Bundle factory context not created')
              }
              return (
                this.Ui.push(gI),
                (gW.id = this.Ui.length - 1),
                gI.event.emit('Core.BundleCreated', gW),
                gI
              )
            }),
            (gQ.prototype.getContext = function (gW) {
              if (gW && void 0 !== gW.id) {
                return this.Ui[gW.id]
              }
            }),
            (gQ.prototype.queryBundle = function (gW) {
              for (var gZ = 0; gZ < this.Ui.length; ++gZ) {
                var gY = this.Ui[gZ]
                if (gY) {
                  var gI = gY.bundleInfo
                  if (gI.name === gW) {
                    return gI
                  }
                }
              }
            }),
            (gQ.prototype.destroyBundle = function (gW) {
              var gZ = gW.id
              if (void 0 !== gZ) {
                var gY = this.Ui[gZ]
                void 0 !== gY &&
                  (f9(gW.name),
                  UV.forceDelete(gY.bundleInfo.name),
                  (this.Ui[gZ] = void 0),
                  gY.event.emit('Core.BundleDestroyed', gY.bundleInfo))
              }
            }),
            gQ
          )
        })(UG),
        fx = [
          'icon_android_96.png',
          'icon_android_144.png',
          'icon_android_192.png',
        ],
        fO = ['icon_ios_60.png', 'icon_ios_120.png', 'icon_ios_180.png'],
        fX = [96, 144, 192],
        fM = [60, 120, 180]
      function fN(gp, gQ, gW) {
        gp.forEach(function (gZ, gY) {
          var gI = gQ[gY],
            gC = 'shell-game-res/splash/' + gZ,
            gD = Kf.resource.resolveUrl(gC)
          if (!gD.endsWith(gC)) {
            var gB = document.head.querySelector(
              "link[rel='"
                .concat(gW, "'][sizes='")
                .concat(gI, 'x')
                .concat(gI, "']")
            )
            gB ||
              ((gB = document.createElement('link')).setAttribute('rel', gW),
              gB.setAttribute('sizes', ''.concat(gI, 'x').concat(gI)),
              document.head.appendChild(gB))
            gB.href = gD
          }
        })
      }
      var fA = (function (gp) {
        function gQ() {
          return (null !== gp && gp.apply(this, arguments)) || this
        }
        return (
          V1(gQ, gp),
          (gQ.prototype.onCreate = function () {
            var gW = Ey.getOrientationMode()
            gW = Ey.isMobile() || 'port' === gW ? gW : gW + '-pc'
            this.rootElement = f0(
              '<div id="footer-container" class="footer-container">' +
                '<div class="footer-mask-container-'.concat(gW, '">') +
                ''.concat(this.qi()) +
                '</div>' +
                ''.concat(this.Yi()) +
                '</div>'
            )
          }),
          (gQ.prototype.onStateChange = function (gW) {
            this.rootElement &&
              (this.rootElement.style.height = ''.concat(gW.height, 'px'))
            var gZ = document.getElementById('footer-copyright-image')
            gZ && (gZ.style.bottom = ''.concat(27.5 - gW.excessBottom, 'px'))
          }),
          (gQ.prototype.Yi = function () {
            return 'port' === Ey.getOrientationMode()
              ? '<div class="footer-image-container"><div id="footer-copyright-image"></div></div>'
              : ''
          }),
          (gQ.prototype.qi = function () {
            if (fU.v('footer.enable')) {
              var gW = fU.v('footer.background_image')
              if (!gW) {
                throw Error(
                  'You have enable custom footer, but all custom config value not given!'
                )
              }
              return '<div class="footer-mask footer-mask-color" style="'.concat(
                'background-image: '.concat(gW),
                '"></div>'
              )
            }
            var gZ = uN.ThemeColor,
              gY = [gZ.substr(1, 2), gZ.substr(3, 2), gZ.substr(5, 2)].map(
                function (gC) {
                  return parseInt(gC, 16)
                }
              ),
              gI =
                'background-image: linear-gradient(180deg, \n            rgba('
                  .concat(gY[0], ', ')
                  .concat(gY[1], ', ')
                  .concat(gY[2], ', 0), ')
                  .concat(uN.ThemeColor, ')')
            return (
              '<div class="footer-mask footer-mask-color" style="'.concat(
                gI,
                '"></div>'
              ) + '<div class="footer-mask footer-mask-black"></div>'
            )
          }),
          gQ
        )
      })(eM)
      function fw(gp, gQ) {
        var gW = document.createElement(gQ)
        return gp.appendChild(gW), gW
      }
      function fR(gp, gQ) {
        var gW = document.createElementNS('http://www.w3.org/2000/svg', gQ)
        return gp.appendChild(gW), gW
      }
      function fG(gp, gQ) {
        return (gp.innerHTML += gQ), gp
      }
      function fT() {
        for (var gp = arguments, gQ = gp[0], gW = 1; gW < gp.length; gW += 2) {
          gQ.style[gp[gW]] = gp[gW + 1]
        }
        return gQ
      }
      function fm() {
        for (var gp = arguments, gQ = gp[0], gW = 1; gW < gp.length; gW += 2) {
          gQ.setAttribute(gp[gW], gp[gW + 1])
        }
        return gQ
      }
      var fd,
        fL,
        fS,
        fk = {
          'PG-Color-Top': 'PG-Color-Top',
          'PG-Color-Bottom': 'PG-Color-Bottom',
          PG1: 'PG1',
          PG2: 'PG2',
          PG3: 'PG3',
          PG4: 'PG4',
          PG5: 'PG5',
        },
        fJ = {
          yellow: ['G-Yelow', 5],
          green: ['G-Green', 10],
          darkRed: ['G-Dark-Red', 5],
          orange: ['P-Orange', 10],
          purple: ['P-Purple', 5],
        },
        fq = [
          [
            '0',
            '#d888f3',
            '#d888f3;#fee8a1;#a0f5b2;#30f4e1;#42b1ff;#78fbf0;#a3bdfa;#d888f3;',
          ],
          [
            '0.5',
            '#8aadff',
            '#8aadff;#78fbf0;#42b1ff;#8aadff;#a0f5b2;fee8a1;#d888f3;#8aadff;',
          ],
          [
            '1',
            '#30f4e1',
            '#30f4e1;#d888f3;#42b1ff;#8aadff;#a0f5b2;#78fbf0;#78fbf0;#30f4e1;',
          ],
        ]
      function fp(gp) {
        var gQ = gp.element,
          gW = gp.duration,
          gZ = gp.delay
        fm(
          fR(gQ, 'animate'),
          'attributeName',
          'opacity',
          'dur',
          gW + 's',
          'values',
          '0; 0; 1;',
          'keyTimes',
          '0; ' + (gZ || 0) + '; 1',
          'end',
          'indefinite'
        )
      }
      function fQ() {
        var gp = document.getElementById('gradient-color'),
          gQ = document.getElementById('svg-logo-container'),
          gW = document.getElementById('pg-svg-text')
        gQ && (fT(gp, 'opacity', 1), fT(gQ, 'opacity', 0), fT(gW, 'opacity', 0))
        fq.forEach(function (gZ) {
          var gY = document.getElementById('color-' + gZ[1])
          gY && gY.beginElement()
        })
      }
      function fW() {
        var gp = document.getElementById('gradient-color'),
          gQ = document.getElementById('svg-logo-container'),
          gW = document.getElementById('pg-svg-text')
        gQ && (fT(gp, 'opacity', 0), fT(gQ, 'opacity', 1), fT(gW, 'opacity', 1))
        fS = setTimeout(function () {
          fq.forEach(function (gZ) {
            var gY = document.getElementById('color-' + gZ[1])
            gY && gY.endElement()
          })
        }, 2000)
      }
      var fZ = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.rootElement = f0('<div class="logo-container"></div>')
            }),
            (gQ.prototype.onDestroy = function () {
              !(function () {
                var gW = document.getElementById('svg-logo')
                gW &&
                  (clearTimeout(fS),
                  clearInterval(fL),
                  gW.parentElement.removeChild(gW))
              })()
            }),
            (gQ.prototype.onStateChange = function (gW) {
              switch (gW.state) {
                case 'init':
                  var gZ = gW.certBlobUrl,
                    gY = (this.Ji = document.createElement('img'))
                  ;(gY.className = 'footer-text-img'),
                    (gY.src = gZ),
                    this.rootElement && this.rootElement.appendChild(gY),
                    (gY.onload = function () {
                      URL.revokeObjectURL(gZ)
                    })
                  break
                case 'scale':
                  if (!this.rootElement) {
                    return
                  }
                  'port' === Ey.getOrientationMode() &&
                  void 0 !== gW.excessBottom
                    ? (this.rootElement.style.bottom = ''.concat(
                        52 - gW.excessBottom,
                        'px'
                      ))
                    : (this.rootElement.style.bottom = '5px')
                  break
                case 'setup':
                  this.Ji.height /= 3
                  break
                case 'start':
                  var gI = 'port' === Ey.getOrientationMode(),
                    gC = (function (gD) {
                      void 0 === gD && (gD = { isPortrait: true })
                      var gB = gD.isPortrait
                      fd = gB
                      var gP = document.createElement('div'),
                        h0 = fd ? 'column' : 'row'
                      fm(gP, 'id', 'svg-logo')
                      fT(
                        gP,
                        'display',
                        'flex',
                        'flex-direction',
                        h0,
                        'backface-visibility',
                        'hidden',
                        'transform',
                        'translateZ(0)'
                      )
                      ;(function (h2) {
                        var h3 = fR(h2, 'svg'),
                          h4 = fR(h3, 'svg')
                        fm(
                          h3,
                          'id',
                          'gradient-color',
                          'xmlns',
                          'http://www.w3.org/2000/svg'
                        )
                        fT(
                          h3,
                          'position',
                          'absolute',
                          'z-index',
                          '-99',
                          'opacity',
                          '0'
                        )
                        fm(h4, 'id', 'logo-gradient')
                        fT(
                          h4,
                          'position',
                          'absolute',
                          'z-index',
                          '1',
                          'clip-path',
                          'url(#logo-clip-path)',
                          'width',
                          '200px',
                          'height',
                          '100px'
                        )
                        var h5 = fR(fw(h3, 'defs'), 'linearGradient')
                        fm(
                          h5,
                          'id',
                          'color-a',
                          'gradientUnits',
                          'objectBoundingBox',
                          'x1',
                          '0',
                          'y1',
                          '0',
                          'x2',
                          '1',
                          'y2',
                          '1'
                        )
                        fm(fR(h4, 'clipPath'), 'id', 'logo-clip-path')
                        fm(
                          fR(h4, 'rect'),
                          'fill',
                          'url(#color-a)',
                          'width',
                          '200px',
                          'height',
                          '100px'
                        )
                        var h6 = fR(h4, 'g'),
                          h7 = fR(h6, 'rect')
                        fm(
                          h7,
                          'fill',
                          'white',
                          'width',
                          '10px',
                          'height',
                          '70px'
                        )
                        fT(h7, 'transform', 'rotate(30deg)')
                        fm(h6, 'transform', 'translate(-80, -10)')
                        fm(
                          fw(h6, 'animateTransform'),
                          'id',
                          'shine-animate',
                          'attributeName',
                          'transform',
                          'type',
                          'translate',
                          'from',
                          '-80 -10',
                          'to',
                          '160 -10',
                          'dur',
                          '1s',
                          'begin',
                          '2s;shine-animate.end+2s',
                          'end',
                          'indefinite'
                        )
                        fq.forEach(function (h8) {
                          var h9 = fR(h5, 'stop')
                          fm(h9, 'offset', h8[0], 'stop-color', h8[1])
                          fm(
                            fw(h9, 'animate'),
                            'id',
                            'color-' + h8[1],
                            'attributeName',
                            'stop-color',
                            'values',
                            h8[2],
                            'dur',
                            '6s',
                            'repeatCount',
                            'indefinite'
                          )
                        })
                      })(gP)
                      var h1 = fw(gP, 'div')
                      return (
                        fm(h1, 'id', 'svg-logo-container'),
                        fT(h1, 'height', '31px', 'width', fd ? '62px' : '67px'),
                        fT(h1),
                        fG(
                          h1,
                          '<svg id="pg-svg-logo" width="62" height="28" viewBox="0 0 62 28" xmlns="http://www.w3.org/2000/svg" overflow="visible">\n<g id="PG-Logo">\n<g id="PG-Color-Top">\n<path id="G-Yelow" fill-rule="evenodd" clip-rule="evenodd" d="M41.75 0H39.25V2.49997H41.75V0Z" fill="#FFB919"/>\n<path id="G-Green" fill-rule="evenodd" clip-rule="evenodd" d="M61.5 11.2499H59V13.7498H61.5V11.2499Z" fill="#14E691"/>\n<path id="G-Dark-Red" fill-rule="evenodd" clip-rule="evenodd" d="M36 5.74994H33.5V8.24991H36V5.74994Z" fill="#E61973"/>\n<path id="P-Orange" fill-rule="evenodd" clip-rule="evenodd" d="M28 2.74997H25.5V5.24994H28V2.74997Z" fill="#FF6E00"/>\n<path id="P-Purple" fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2.74997H0V5.24994H2.5V2.74997Z" fill="#6414E6"/>\n</g>\n<g id="PG-Color-Bottom">\n<path id="Fill-18" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 27.8544H5.20367V25.4042H2.75V27.8544Z" fill="#19BEE6"/>\n<path id="Fill-19" fill-rule="evenodd" clip-rule="evenodd" d="M16.9104 22.2H19.3649V19.7498H16.9104V22.2Z" fill="#E619DC"/>\n<path id="Fill-24" fill-rule="evenodd" clip-rule="evenodd" d="M36.2829 25.0272H38.7374V22.577H36.2829V25.0272Z" fill="#1987E6"/>\n<path id="Fill-25" fill-rule="evenodd" clip-rule="evenodd" d="M53.2754 27.8544H55.7304V25.4042H53.2754V27.8544Z" fill="#FF4B00"/>\n<path id="Fill-27" fill-rule="evenodd" clip-rule="evenodd" d="M58.9402 22.2H61.3948V19.7502H58.9402V22.2Z" fill="#FF1928"/>\n</g>\n<g id="PG5">\n<path id="Fill-20" fill-rule="evenodd" clip-rule="evenodd" d="M16.993 2.45026H19.448V0H16.993V2.45026ZM8.4965 5.27791H10.9511V2.82764H8.4965V5.27791ZM19.8252 8.10465H22.2797V5.65439H19.8252V8.10465ZM25.4899 10.9323H27.9441V8.48158H25.4899V10.9323ZM0 13.7586H2.45457V11.3097H0V13.7586ZM25.4899 16.5862H27.9441V14.136H25.4899V16.5862ZM11.3287 22.2406H13.7832V19.7903H11.3287V22.2406ZM2.83217 25.0678H5.28674V22.6175H2.83217V25.0678ZM0 10.9323H2.45457V8.48203H0V10.9323ZM22.6573 5.27746H25.1119V2.82719H22.6573V5.27746Z" fill="white"/>\n<path id="Fill-21" fill-rule="evenodd" clip-rule="evenodd" d="M50.5263 2.45026H52.9809V0H50.5263V2.45026ZM53.3585 8.10465H55.8126V5.65439H53.3585V8.10465ZM39.1977 8.10465H41.6518V5.65439H39.1977V8.10465ZM53.3585 16.5862H55.8126V14.136H53.3585V16.5862ZM59.0228 19.4134H61.4774V16.9636H59.0228V19.4134ZM44.862 25.0683H47.3166V22.618H44.862V25.0683ZM50.5263 27.895H52.9809V25.4447H50.5263V27.895Z" fill="white"/>\n</g>\n<g id="PG4">\n<path id="Fill-20_2" fill-rule="evenodd" clip-rule="evenodd" d="M2.83217 2.45026H5.28583V0H2.83217V2.45026ZM14.1613 5.27791H16.6159V2.82764H14.1613V5.27791ZM2.83217 8.1051H5.28674V5.65484H2.83217V8.1051ZM22.6573 10.9323H25.1119V8.48158H22.6573V10.9323ZM2.83217 16.5867H5.28674V14.1364H2.83217V16.5867ZM14.1613 19.4134H16.6159V16.9636H14.1613V19.4134ZM0 22.2406H2.45457V19.7908H0V22.2406Z" fill="white"/>\n<path id="Fill-21_2" fill-rule="evenodd" clip-rule="evenodd" d="M42.0294 5.27744H44.4839V2.82718H42.0294V5.27744ZM56.1902 13.7595H58.6448V11.3097H56.1902V13.7595ZM47.6937 13.7595H50.1483V11.3097H47.6937V13.7595ZM33.5329 16.5867H35.9879V14.1364H33.5329V16.5867ZM56.1902 22.2406H58.6448V19.7903H56.1902V22.2406Z" fill="white"/>\n</g>\n<g id="PG3">\n<path id="Fill-20_3" fill-rule="evenodd" clip-rule="evenodd" d="M8.4965 2.45026H10.9511V0H8.4965V2.45026ZM19.8252 5.27791H22.2797V2.82764H19.8252V5.27791ZM16.993 5.27791H19.448V2.82764H16.993V5.27791ZM5.66388 5.27791H8.1189V2.82764H5.66388V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM2.83217 10.9323H5.28674V8.48158H2.83217V10.9323ZM22.6573 13.759H25.1119V11.3088H22.6573V13.759ZM22.6573 16.5862H25.1119V14.136H22.6573V16.5862ZM0 16.5858H2.45457V14.1364H0V16.5858ZM22.6573 19.4134H25.1119V16.9636H22.6573V19.4134ZM5.66388 19.4134H8.1189V16.9636H5.66388V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM5.66388 22.2406H8.1189V19.7903H5.66388V22.2406Z" fill="white"/>\n<path id="Fill-21_3" fill-rule="evenodd" clip-rule="evenodd" d="M42.0298 2.45026H44.4844V0H42.0298V2.45026ZM44.862 5.27746H47.3166V2.82719H44.862V5.27746ZM53.3585 5.27791H55.8126V2.82764H53.3585V5.27791ZM36.3655 10.9323H38.8201V8.48158H36.3655V10.9323ZM36.3655 13.759H38.8201V11.3088H36.3655V13.759ZM56.1902 19.4143H58.6448V16.9636H56.1902V19.4143ZM39.1977 22.2411H41.6518V19.7908H39.1977V22.2411ZM53.3585 25.0678H55.8126V22.6175H53.3585V25.0678ZM42.0298 27.895H44.4844V25.4447H42.0298V27.895Z" fill="white"/>\n</g>\n<g id="PG2">\n<path id="Fill-20_4" fill-rule="evenodd" clip-rule="evenodd" d="M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM11.3291 2.45026H13.7828V0H11.3291V2.45026ZM2.83217 5.27791H5.28674V2.82764H2.83217V5.27791ZM25.4899 8.10465H27.9441V5.65439H25.4899V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM2.83217 13.7595H5.28674V11.3097H2.83217V13.7595ZM19.8252 16.5862H22.2797V14.136H19.8252V16.5862ZM19.8252 19.4134H22.2797V16.9636H19.8252V19.4134ZM16.993 19.4134H19.448V16.9636H16.993V19.4134ZM2.83217 19.4134H5.28674V16.9636H2.83217V19.4134ZM8.4965 22.2406H10.9511V19.7903H8.4965V22.2406ZM2.83217 22.2406H5.28674V19.7903H2.83217V22.2406ZM0 27.895H2.45457V25.4447H0V27.895Z" fill="white"/>\n<path id="Fill-21_4" fill-rule="evenodd" clip-rule="evenodd" d="M47.6941 2.45026H50.1478V0H47.6941V2.45026ZM47.6937 5.27746H50.1483V2.82719H47.6937V5.27746ZM56.1902 5.27791H58.6448V2.82764H56.1902V5.27791ZM39.1977 5.27791H41.6518V2.82764H39.1977V5.27791ZM56.1902 8.10465H58.6448V5.65439H56.1902V8.10465ZM36.3655 8.1051H38.8201V5.65484H36.3655V8.1051ZM53.3585 13.7595H55.8126V11.3097H53.3585V13.7595ZM33.5329 13.7595H35.9879V11.3097H33.5329V13.7595ZM50.5259 16.5862H52.9804V14.136H50.5259V16.5862ZM47.6937 16.5862H50.1483V14.136H47.6937V16.5862ZM59.0228 16.5858H61.4774V14.1364H59.0228V16.5858ZM36.3655 19.4134H38.8201V16.9636H36.3655V19.4134ZM33.5329 19.4143H35.9879V16.9636H33.5329V19.4143ZM53.3585 22.2411H55.8126V19.7908H53.3585V22.2411ZM36.3655 22.2411H38.8201V19.7908H36.3655V22.2411ZM56.1902 25.0678H58.6448V22.6175H56.1902V25.0678ZM47.6937 25.0683H50.1483V22.618H47.6937V25.0683ZM39.1977 25.0683H41.6518V22.618H39.1977V25.0683ZM47.6941 27.895H50.1478V25.4447H47.6941V27.895ZM44.8615 27.895H47.3166V25.4447H44.8615V27.895Z" fill="white"/>\n</g>\n<g id="PG1">\n<path id="Fill-20_5" fill-rule="evenodd" clip-rule="evenodd" d="M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM14.1613 2.45026H16.6149V0H14.1613V2.45026ZM5.66478 2.45026H8.118V0H5.66478V2.45026ZM11.3287 5.27791H13.7832V2.82764H11.3287V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM25.4899 13.759H27.9441V11.3088H25.4899V13.759ZM11.3287 19.4134H13.7832V16.9636H11.3287V19.4134ZM8.4965 19.4134H10.9511V16.9636H8.4965V19.4134ZM0 19.4134H2.45457V16.9636H0V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM0 25.0669H2.45457V22.618H0V25.0669Z" fill="white"/>\n<path id="Fill-21_5" fill-rule="evenodd" clip-rule="evenodd" d="M44.8615 2.45026H47.3166V0H44.8615V2.45026ZM50.5259 5.27746H52.9804V2.82719H50.5259V5.27746ZM36.3655 5.27791H38.8201V2.82764H36.3655V5.27791ZM33.5329 10.9323H35.9879V8.48158H33.5329V10.9323ZM50.5259 13.7595H52.9804V11.3097H50.5259V13.7595ZM36.3655 16.5862H38.8201V14.136H36.3655V16.5862ZM56.1902 16.5867H58.6448V14.1364H56.1902V16.5867ZM33.5329 22.2406H35.9879V19.7903H33.5329V22.2406ZM50.5259 25.0683H52.9804V22.618H50.5259V25.0683ZM42.0294 25.0683H44.4839V22.618H42.0294V25.0683ZM39.1981 27.895H41.6513V25.4447H39.1981V27.895Z" fill="white"/>\n</g>\n</g>\n</svg>'
                        ),
                        fG(
                          gP,
                          fd
                            ? '<svg id="pg-svg-text" width="67" height="5" viewBox="0 0 67 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="PG-Title">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.00732803V4.5H1.12546V2.80277H2.82616V2.25366H3.4014V0.581392H2.82616V0.00732803H0ZM1.12546 1.70456H2.25093V1.1305H1.12546V1.70456Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.50187 0.00732803V0.581392H3.92664V3.9509H4.50187V4.5H6.7528V3.9509H7.32804V0.581392H6.7528V0.00732803H4.50187ZM5.07711 1.1305H6.20257V3.37683H5.07711V1.1305Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.45349 0.00732803V0.581392H7.90326V3.9509H8.45349V4.5H10.7294V3.9509H11.2796V2.82773H10.1542V3.37683H9.02872V1.1305H10.1542V1.70456H11.2796V0.581392H10.7294V0.00732803H8.45349Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1058 0.00732803V1.70456H12.9804V0.00732803H11.8549V4.5H12.9804V2.82773H14.1058V4.5H15.2313V2.82773H14.6811V1.70456H15.2313V0.00732803H14.1058Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8065 0.00732803V4.5H19.1829V3.37683H16.932V2.82773H18.6077V1.70456H16.932V1.1305H19.1829V0.00732803H15.8065Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7582 0.00732803V1.1305H20.8836V4.5H22.0091V1.1305H23.1346V0.00732803H19.7582Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3855 0.00732803V0.581392H24.8353V3.9509H25.3855V4.5H27.6364V3.9509H28.2117V1.70456H26.511V2.82773H27.0862V3.37683H25.9607V1.1305H27.6364V0.00732803H25.3855Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3371 0.00732803V0.556432H28.7618V4.5H29.8873V3.37683H31.0128V4.5H32.1382V0.556432H31.563V0.00732803H29.3371ZM29.9123 2.25366H31.0378V1.1305H29.9123V2.25366Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M36.1149 0.00732803V0.581392H35.5397V1.1305H34.9894V1.70456H34.4142V1.1305H33.864V0.581392H33.2887V0.00732803H32.7135L32.7385 4.5H33.864V2.82773H34.4142V3.37683H34.9894V2.82773H35.5397V4.5H36.6651V0.00732803H36.1149Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M37.2403 0.00732803V4.5H40.6167V3.37683H38.3658V2.82773H40.0665V1.70456H38.3658V1.1305H40.6167V0.00732803H37.2403Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M41.7422 0.00732803V0.581392H41.192V2.25366H41.7422V2.82773H43.4429V3.37683H41.192V4.5H44.0181V3.9509H44.5683V2.25366H44.0181V1.70456H42.3174V1.1305H44.5683V0.00732803H41.7422Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M46.8193 0.00732803V0.581392H46.269V2.25366H46.8193V2.82773H48.52V3.37683H46.269V4.5H49.0952V3.9509H49.6454V2.25366H49.0952V1.70456H47.3945V1.1305H49.6454V0.00732803H46.8193Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M50.7709 0.00732803V0.581392H50.1957V3.9509H50.7709V4.5H53.0218V3.9509H53.5971V0.581392H53.0218V0.00732803H50.7709ZM51.3462 3.37683H52.4716V1.1305H51.3462V3.37683Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M54.1723 0.00732803V4.5H55.2978V2.82773H56.9985V1.70456H55.2978V1.1305H57.5487V0.00732803H54.1723Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M58.124 0.00732803V1.1305H59.2494V4.5H60.3749V1.1305H61.5004V0.00732803H58.124Z" fill="white"/>\n<path d="M62.7488 1.92186V0.299511H62.2736V0H63.5241V0.299511H63.0239V1.92186H62.7488ZM63.7742 1.92186V0.0249608H64.0994L64.7246 1.24796L65.3249 0.0249608H65.65V1.92186H65.3499V0.623982L64.8997 1.54748H64.5746L64.0744 0.574064V1.89691H63.7742V1.92186Z" fill="white"/>\n</g>\n</svg>'
                            : '<svg id="pg-svg-text" width="48" height="29" viewBox="0 0 48 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="PG-Title">\n<path id="Fill" d="M4.76178 0H0V7.64272H1.90821V4.77452H4.76178V3.81262H5.70714V0.961899H4.76178V0ZM3.81643 2.86821H1.90821V1.90631H3.81643V2.86821ZM7.61535 7.64272H11.4318V6.68082H12.3771V0.961899H11.4318V0H7.61535V0.961899H6.67V6.69831H7.61535V7.64272ZM8.56071 1.90631H10.4689V5.73641H8.56071V1.90631ZM14.2853 7.64272H18.1018V6.68082H19.0471V4.77452H17.1389V5.73641H15.2307V1.90631H17.1389V2.86821H19.0471V0.961899H18.1018V0H14.2853V0.961899H13.34V6.69831H14.2853V7.64272ZM21.9007 4.77452H23.8089V7.64272H25.7171V4.77452H24.7718V2.86821H25.7171V0H23.8089V2.86821H21.9007V0H19.9925V7.64272H21.9007V4.77452ZM32.3696 5.73641H28.5532V4.77452H31.4068V2.86821H28.5532V1.90631H32.3696V0H26.6625V7.64272H32.3696V5.73641ZM33.3325 0V1.90631H35.2407V7.64272H37.1489V1.90631H39.0396V0H33.3325ZM2.85357 14.9532H3.79892V15.9151H1.90821V12.0849H4.76178V10.1611H0.945354V11.123H0V16.8595H0.945354V17.8214H4.76178V16.8595H5.70714V13.0294H2.85357V14.9532ZM11.4318 10.1611H7.61535V11.123H6.67V17.8214H8.57821V15.8976H10.4864V17.8039H12.3946V11.123H11.4493L11.4318 10.1611ZM10.4689 13.9913H8.56071V12.0849H10.4689V13.9913ZM18.0843 12.0849H17.1389V13.0468H16.1936V12.0849H15.2307V11.123H14.2853V10.1611H13.34V17.8039H15.2307V14.9532H16.1936V15.9151H17.1389V14.9532H18.0843V17.8214H19.9925V10.1611H19.0471V11.123H18.1018L18.0843 12.0849ZM20.9553 17.8214H26.6625V15.8976H22.8461V14.9357H25.6996V13.0294H22.8461V12.0675H26.6625V10.1611H20.9553V17.8214ZM28.5707 11.123H27.6253V13.9913H28.5707V14.9532H31.4243V15.9151H27.6078V17.8214H32.3696V16.8595H33.315V13.9913H32.3696V13.0294H29.5161V12.0675H33.3325V10.1611H28.5707V11.123ZM0.945354 21.2842H0V24.1524H0.945354V25.1143H3.79892V26.0762H0V27.9825H4.76178V27.0206H5.70714V24.1524H4.76178V23.1905H1.90821V22.2286H5.72464V20.3223H0.945354V21.2842ZM11.4318 20.3398H7.61535V21.3017H6.67V27.0381H7.61535V28H11.4318V27.0381H12.3771V21.3017H11.4318V20.3398ZM10.4689 26.0762H8.56071V22.2461H10.4689V26.0762ZM13.3225 27.9825H15.2307V25.1143H18.0843V23.208H15.2307V22.2461H19.0471V20.3398H13.3225V27.9825ZM19.9925 22.2461H21.9007V27.9825H23.8089V22.2461H25.7171V20.3398H20.01L19.9925 22.2461Z" fill="white"/>\n<path id="Vector" d="M41.8057 3.25297V0.489694H40.9828V0H43.1186V0.489694H42.3133V3.25297H41.8057ZM43.5563 3.25297V0H44.099L45.1669 2.0812L46.1823 0H46.725V3.25297H46.2173V1.03186L45.447 2.62336H44.8868L44.0465 0.979388V3.25297H43.5563Z" fill="white"/>\n</g>\n</svg>'
                        ),
                        gP
                      )
                    })({ isPortrait: gI })
                  ;(gC.style.transform = gI ? 'scale(1.0)' : 'scale(0.7)'),
                    this.rootElement && this.rootElement.appendChild(gC),
                    (function () {
                      var gD,
                        gB,
                        gP,
                        h0,
                        h1,
                        h2,
                        h3 = document.getElementById(fk['PG-Color-Bottom'])
                      fp({
                        element: document.getElementById(fk['PG-Color-Top']),
                        duration: 0.5,
                      })
                      fp({
                        element: h3,
                        duration: 0.5,
                      })
                      for (var h4 = 1; h4 <= 5; h4++) {
                        fp({
                          element: document.getElementById(fk['PG' + h4]),
                          duration: 0.5,
                          delay: 1 === h4 ? 0.3 : 0.1 * h4 + 0.3,
                        })
                      }
                      gD = document.getElementById('PG-Title')
                      gB = document.getElementById('pg-svg-text')
                      gP = fR(gD, 'animateTransform')
                      h0 = fR(gB, 'animate')
                      fm(
                        gP,
                        'attributeName',
                        'transform',
                        'type',
                        'translate',
                        'dur',
                        '1.5s',
                        'values',
                        '0 ' +
                          (h2 = (h1 = fd
                            ? {
                                initialPos: 50,
                                bouncePos: -5,
                                finalPos: 0,
                              }
                            : {
                                initialPos: 100,
                                bouncePos: -10,
                                finalPos: 0,
                              }).initialPos) +
                          '; 0 ' +
                          h2 +
                          '; 0 ' +
                          h1.bouncePos +
                          '; 0 0',
                        'keyTimes',
                        '0; 0.7; 0.9; 1',
                        'end',
                        'indefinite'
                      )
                      fm(
                        h0,
                        'attributeName',
                        'overflow',
                        'dur',
                        '1.5s',
                        'values',
                        'hidden; hidden; visible; visible',
                        'keyTimes',
                        '0; 0.7; ' + (fd ? 0.85 : 0.825) + '; 1',
                        'end',
                        'indefinite'
                      )
                      fT(gB, 'filter', 'blur(4px)')
                      fS = setTimeout(function () {
                        fT(
                          gB,
                          'transition',
                          'filter 1.4s 0.5s',
                          'filter',
                          'blur(0px)'
                        )
                      }, 0)
                      fm(
                        fR(
                          document.getElementById('PG-Logo'),
                          'animateTransform'
                        ),
                        'attributeName',
                        'transform',
                        'type',
                        'translate',
                        'dur',
                        '1.5s',
                        'values',
                        '0 0; 0 0; 0 -5; 0 0',
                        'keyTimes',
                        '0; 0.88; 0.91; 1',
                        'end',
                        'indefinite'
                      )
                      Object.values(fJ).forEach(function (h5) {
                        var h6, h7
                        h6 = document.getElementById(h5[0])
                        h7 = h5[1]
                        fm(
                          fR(h6, 'animateTransform'),
                          'attributeName',
                          'transform',
                          'type',
                          'translate',
                          'dur',
                          '1.6s',
                          'values',
                          '0 0; 0 0; 0 -' + h7 + '; 0 0',
                          'keyTimes',
                          '0; 0.83; 0.88; 1',
                          'end',
                          'indefinite'
                        )
                      })
                      ;(function () {
                        for (
                          var h5 = document.getElementById('logo-clip-path'),
                            h6 = document.getElementById('svg-logo-container'),
                            h7 = document.getElementById('PG-Title'),
                            h8 = Object.values(fk),
                            h9 = fd
                              ? 'translate(0px, ' + h6.clientHeight + 'px)'
                              : 'translate(' + h6.clientWidth + 'px, 0px)',
                            hV = 0;
                          hV < h7.childElementCount - 1;
                          hV++
                        ) {
                          var hz = fR(h5, 'path')
                          fm(
                            hz,
                            'd',
                            h7.children[hV].attributes.d.value,
                            'clip-rule',
                            'evenodd',
                            'fill-rules',
                            'evenodd'
                          )
                          fT(hz, 'transform', h9)
                        }
                        h8.forEach(function (hH) {
                          for (
                            var hb = document.getElementById(hH),
                              hE = hb.children,
                              hK = 0;
                            hK < hb.childElementCount - 1;
                            hK++
                          ) {
                            var hU = fR(h5, 'path')
                            hE[hK].attributes.d &&
                              fm(
                                hU,
                                'd',
                                hE[hK].attributes.d.value,
                                'clip-rule',
                                'evenodd',
                                'fill-rules',
                                'evenodd'
                              )
                          }
                        })
                        fS = setTimeout(function () {
                          var hH = document.getElementById('gradient-color'),
                            hb = document.getElementById('svg-logo-container'),
                            hE = document.getElementById('pg-svg-text')
                          fT(hH, 'transition', 'opacity 2s linear')
                          fT(hb, 'transition', 'opacity 2s linear')
                          fT(hE, 'transition', 'opacity 2s linear')
                          fQ()
                          fS = setTimeout(fW, 5500)
                          fL = setInterval(function () {
                            fQ()
                            fS = setTimeout(fW, 8000)
                          }, 12000)
                        }, 3500)
                      })()
                    })()
              }
            }),
            gQ
          )
        })(eM),
        fY = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.on('Shell.Scaled', this.Xi)
            }),
            (gQ.prototype.onDestroy = function () {}),
            (gQ.prototype.Xi = function (gW) {
              var gZ,
                gY = gW.payload,
                gI = this.view.getRootElement(fA)
              if (
                gI &&
                (null === (gZ = null == gI ? void 0 : gI.lastElementChild) ||
                void 0 === gZ
                  ? void 0
                  : gZ.lastElementChild)
              ) {
                var gD =
                    (gY.height / gY.width - 1.7777777777777777) /
                    0.38888888888888884,
                  gB =
                    'port' === Ey.getOrientationMode()
                      ? 229 - 229 * (1 - gD) * 0.12
                      : gQ.FOOTER_HEIGHT_LANDSCAPE
                this.component.updateState(fA, {
                  height: gB,
                  excessBottom: 229 - gB,
                })
                this.component.updateState(fZ, {
                  state: 'scale',
                  excessBottom: 229 - gB,
                })
              }
            }),
            (gQ.FOOTER_HEIGHT_LANDSCAPE = 131),
            gQ
          )
        })(eX),
        fI = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW,
                gZ = this
              this.T = Ey.getOrientationMode()
              this.T =
                Ey.isMobile() || 'port' === this.T ? this.T : this.T + '-pc'
              ;(gW = fU.v('start_button.enable')
                ? this.Ki()
                : this['$i']()).addEventListener('click', function (gY) {
                gZ.te && gZ.te(gY)
              })
              this.rootElement = gW
            }),
            (gQ.prototype.onStateChange = function (gW) {
              gW.hasOwnProperty('callback') && (this.te = gW.callback)
            }),
            (gQ.prototype.onShow = function () {
              this.rootElement.classList.remove('start-button-hide')
              this.rootElement.classList.add(
                'start-button-show-'.concat(this.T)
              )
            }),
            (gQ.prototype.onHide = function () {
              this.rootElement.classList.remove('start-button-show')
              this.rootElement.classList.add('start-button-hide')
            }),
            (gQ.prototype.Ki = function () {
              var gW = fU.v('start_button.image')
              if (!gW) {
                throw Error(
                  'You have enable custom loading bar, but custom loading bar background image path not found!'
                )
              }
              return f0(
                '<div id="__customStartedButton" class="start-button-container-'.concat(
                  this.T,
                  '">'
                ) +
                  '<div id="get-started-button" class="custom-start-button-inner" style="background-image: ' +
                  "url('"
                    .concat(Kf.resource.resolveUrl(gW), "'); width: ")
                    .concat('182px', '; height: ')
                    .concat('64px', ';') +
                  '"></div></div>'
              )
            }),
            (gQ.prototype['$i'] = function () {
              var gW = f0(
                '<div id="__startedButton" class="start-button-container-'.concat(
                  this.T,
                  ' start-button">'
                ) +
                  '<div class="start-button-inner"></div>' +
                  '<p id="get-started-text" class="text-'.concat(this.T, '">') +
                  ''.concat(KQ('GameShell.GetStarted')) +
                  '</p></div>'
              )
              return (
                (gW.style.backgroundColor = uN.ThemeColor),
                (gW.style.textShadow = '0 1px 2px '.concat(uN.ThemeColor)),
                gW
              )
            }),
            gQ
          )
        })(eM),
        fC = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.ne = function () {
                gW.rootElement.focus()
              }),
              (gW.ie = function (gZ) {
                gW.emit(
                  'Error.Occurred',
                  {
                    context: 'Unknown',
                    info: {
                      category: uw,
                      domain: eN.Domain,
                      code: eN.WebGLError,
                      error: gZ.statusMessage,
                    },
                    report: true,
                  },
                  function () {
                    gW.emit('Window.Reload')
                  }
                )
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = document.getElementById('GameCanvas')
              if (!gW) {
                throw Error('Game canvas root element is undefined')
              }
              this.rootElement = gW
              this.rootElement.style.width = '0px'
              this.rootElement.style.height = '0px'
              this.rootElement.addEventListener('webglcontextlost', this.ie)
              this.on('Shell.FocusCanvas', this.ne)
            }),
            (gQ.prototype.onShow = function () {
              this.rootElement.style.visibility = 'visible'
            }),
            (gQ.prototype.onHide = function () {
              this.rootElement.style.visibility = 'hidden'
            }),
            gQ
          )
        })(eM),
        fD = (function () {
          function gp(gQ, gW) {
            var gZ = this
            this.ee = 10
            this.re = 0
            this.oe = ''
            this.se = void 0
            this.ae = function () {
              gZ.re <= gZ.ee
                ? ((gZ.se = E.setTimeout(gZ.ae, 25 * Math.pow(gZ.re, 2))),
                  ++gZ.re)
                : (gZ.se = void 0)
              gZ.te && gZ.te()
            }
            this.te = gQ
            gW && ((this.ee = gW.repeat || 10), (this.oe = gW.name || this.oe))
          }
          return (
            (gp.prototype.restart = function () {
              this.re = 0
              this.ue()
              this.ae()
            }),
            (gp.prototype.ue = function () {
              void 0 !== this.se &&
                (E.clearTimeout(this.se), (this.se = void 0))
            }),
            gp
          )
        })()
      function fB() {
        var gp = E[E0(6)]('48*72*50*500'),
          gQ = 10 * E.Number('171132480000') + 7 * gp,
          gW = 10 * E.Number('120960000'),
          gZ = E.Number('0.5') / 10,
          gY =
            (function (gI, gC) {
              var gD = E[E0(0)].now(),
                gB = gD - gI
              E3(gI, gD) && (gB = 0)
              var gP = gB / gC
              return E[E0(4)].min(1, gP * gP)
            })(gQ, gW) * gZ
        return E3(gY, E[uJ('TEMath')].random())
      }
      function fP(gp, gQ) {
        var gW = E6(),
          gZ = gW.B,
          gY = gW.j,
          gI = gW.G,
          gC = gW.P,
          gD = gW.Z,
          gB = uk('e1f'),
          gP = uk('esplit'),
          h0 = uJ('ae-'),
          h1 = gp[gP](h0)
        return function () {
          return V3(this, void 0, void 0, function () {
            var h2, h3, h4, h5
            return V4(this, function () {
              return gD && gZ === gB
                ? ((h2 = E.Number('0xf') - E.Number('0x0' + gD[2])),
                  (h3 = h1[h2])
                    ? !(h4 = gD.substring(E.Number('0x3'))) ||
                      h4.length <= E.Number('0x4')
                      ? [2, 0]
                      : ((h5 = E4([gI, gY, gC, h3])),
                        [
                          2,
                          gQ(h5, h4).then(function (h6) {
                            return h6 ? 1 : 0
                          }),
                        ])
                    : [2, 0])
                : [2, 0]
            })
          })
        }
      }
      function y0() {
        var gp,
          gQ = uk('eSHA-1'),
          gW = null === (gp = E.crypto) || void 0 === gp ? void 0 : gp.subtle,
          gZ = new E.TextEncoder()
        function gY(gI) {
          return V3(this, void 0, void 0, function () {
            var gC
            return V4(this, function (gD) {
              switch (gD.label) {
                case 0:
                  return (gC = gZ.encode(gI).buffer), [4, gW.digest(gQ, gC)]
                case 1:
                  return [2, uq(gD.sent())]
              }
            })
          })
        }
        return function (gI, gC, gD) {
          return (
            void 0 === gD && (gD = true),
            V3(this, void 0, void 0, function () {
              return V4(this, function (gB) {
                switch (gB.label) {
                  case 0:
                    return gC && gI ? [4, gY(gI)] : [2, false]
                  case 1:
                    return [2, up(gB.sent(), gC, gD)]
                }
              })
            })
          )
        }
      }
      function y1(gp) {
        return V3(this, void 0, void 0, function () {
          var gQ,
            gW,
            gZ,
            gY,
            gI,
            gC,
            gD,
            gB = this
          return V4(this, function (gP) {
            switch (gP.label) {
              case 0:
                return [4, uL([uB].concat([uQ, fB]))()]
              case 1:
                return gP.sent()
                  ? (E0(1),
                    E0(3),
                    (gQ = E6()),
                    (gW = gQ.B),
                    (gZ = function () {
                      return V3(gB, void 0, void 0, function () {
                        return V4(this, function () {
                          return [2, 0]
                        })
                      })
                    }),
                    (gY = Object.create(null)),
                    'function' == typeof gp
                      ? ((gC = (gI = gp)(1)),
                        (gD = gI(2)),
                        (gY[uk('e1f')] = fP(gC, y0())),
                        (gY[uk('c2f')] = (function (h0) {
                          var h1 = E6(),
                            h2 = h1.B,
                            h3 = h1.j,
                            h4 = h1.P,
                            h5 = h1.R,
                            h6 = uk('c2f')
                          return function () {
                            return V3(this, void 0, void 0, function () {
                              var h7, h8, h9
                              return V4(this, function () {
                                return h5 && h4 && h2 === h6
                                  ? ((h7 = EK(h4)),
                                    (h8 = E.decodeURIComponent(h5)),
                                    (h9 = E4([h3, h7])),
                                    [
                                      2,
                                      h0(h9, h8).then(function (hV) {
                                        return hV ? 1 : 0
                                      }),
                                    ])
                                  : [2, 0]
                              })
                            })
                          }
                        })(
                          (function (h0, h1) {
                            var h2, h3
                            void 0 === h1 && (h1 = 'der')
                            ;(function (hH) {
                              hH.oe = 'name'
                              hH.ce = 'namedCurve'
                              hH.he = 'hash'
                              hH.le = '0x1'
                            })(h3 || (h3 = {}))
                            var h4 = uJ('efspki'),
                              h5 = uJ('ecSHA-256'),
                              h6 = uk('eECDSA'),
                              h7 = uk('eP-256'),
                              h8 = 'verify',
                              h9 =
                                null === (h2 = E.crypto) || void 0 === h2
                                  ? void 0
                                  : h2.subtle,
                              hV = new E.TextEncoder()
                            function hz() {
                              var hH,
                                hb,
                                hE,
                                hK,
                                hU,
                                hy,
                                hg,
                                hv =
                                  ((hb = E.atob(h0)),
                                  (hE = uk('esplit')),
                                  (hK = uJ('aejoin')),
                                  (hU = uk('eincludes')),
                                  (hy = uJ('ae-')),
                                  (hg = uk('r\n')),
                                  hb[hE](hg)
                                    .filter(function (hO) {
                                      return 0 != hO.length && !hO[hU](hy)
                                    })
                                    [hK](hg)),
                                hj = E5(hv),
                                hF =
                                  (((hH = {})[h3.oe] = h6),
                                  (hH[h3.ce] = h7),
                                  hH),
                                hx =
                                  null == h9
                                    ? void 0
                                    : h9.importKey(h4, hj.buffer, hF, false, [
                                        h8,
                                      ])
                              return E.Promise.resolve(hx)
                            }
                            return function (hH, hb) {
                              return V3(this, void 0, void 0, function () {
                                var hE, hK, hU, hy, hg, hv
                                return V4(this, function (hj) {
                                  switch (hj.label) {
                                    case 0:
                                      if (!hH || !hb) {
                                        return [2, false]
                                      }
                                      hj.label = 1
                                    case 1:
                                      return (
                                        hj.trys.push([1, 4, , 5]), [4, hz()]
                                      )
                                    case 2:
                                      return (hE = hj.sent())
                                        ? (((hg = {})[h3.oe] = h6),
                                          (hg[h3.he] =
                                            (((hv = {})[h3.oe] = h5), hv)),
                                          (hK = hg),
                                          (hU = E5(hb)),
                                          'der' === h1 &&
                                            (hU = (function (hF) {
                                              var hx,
                                                hO = E.Array.from(
                                                  hF,
                                                  function (hw) {
                                                    return (
                                                      '00' + hw.toString(16)
                                                    ).slice(-2)
                                                  }
                                                ).join(''),
                                                hX =
                                                  2 *
                                                  E.parseInt(
                                                    hO.substr(6, 2),
                                                    16
                                                  ),
                                                hM = hO.substr(8, hX),
                                                hN = hO.substr(12 + hX)
                                              hM =
                                                hM.length > 64
                                                  ? hM.substr(-64)
                                                  : hM.padStart(64, '0')
                                              hN =
                                                hN.length > 64
                                                  ? hN.substr(-64)
                                                  : hN.padStart(64, '0')
                                              var hA = ''.concat(hM).concat(hN)
                                              return new E.Uint8Array(
                                                (null ===
                                                  (hx =
                                                    hA.match(/[\da-f]{2}/gi)) ||
                                                void 0 === hx
                                                  ? void 0
                                                  : hx.map(function (hw) {
                                                      return E.parseInt(hw, 16)
                                                    })) || []
                                              )
                                            })(hU)),
                                          (hy = hV.encode(hH).buffer),
                                          [
                                            4,
                                            null == h9
                                              ? void 0
                                              : h9[h8](hK, hE, hU, hy),
                                          ])
                                        : [2, false]
                                    case 3:
                                      return [2, !!hj.sent()]
                                    case 4:
                                      return hj.sent(), [2, false]
                                    case 5:
                                      return [2]
                                  }
                                })
                              })
                            }
                          })(gD)
                        )))
                      : (gY[uk('e1f')] = fP(gp, y0())),
                    [4, (gY[gW] || gZ)()])
                  : [3, 3]
              case 2:
                return [2, 1 === gP.sent()]
              case 3:
                return [2, true]
            }
          })
        })
      }
      var y2,
        y3 =
          'undefined' != typeof navigator &&
          parseFloat(
            (
              '' +
              (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
                navigator.userAgent
              ) || [0, ''])[1]
            )
              .replace('undefined', '3_2')
              .replace('_', '.')
              .replace('_', '')
          ) < 10 &&
          !E.MSStream,
        y4 = 'wakeLock' in navigator,
        y5 = (function () {
          function gp() {
            var gQ = this
            y4
              ? (this.fe = null)
              : y3
              ? (this.noSleepTimer = null)
              : ((this.noSleepVideo = document.createElement('video')),
                this.noSleepVideo.setAttribute('title', 'No Sleep'),
                this.noSleepVideo.setAttribute('playsinline', ''),
                this.noSleepVideo.setAttribute('id', 'nosleep'),
                this.de(
                  this.noSleepVideo,
                  'mp4',
                  'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA='
                ),
                this.noSleepVideo.addEventListener(
                  'loadedmetadata',
                  function () {
                    gQ.noSleepVideo.duration <= 1
                      ? gQ.noSleepVideo.setAttribute('loop', '')
                      : gQ.noSleepVideo.addEventListener(
                          'timeupdate',
                          function () {
                            gQ.noSleepVideo.currentTime > 0.5 &&
                              (gQ.noSleepVideo.currentTime = Math.random())
                          }
                        )
                  }
                ))
          }
          return (
            (gp.prototype.de = function (gQ, gW, gZ) {
              var gY = document.createElement('source')
              gQ.appendChild(gY)
            }),
            (gp.Ae = function () {
              var gQ = [
                'data:video/mp4;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g',
                'data:video/mp4;base64,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==',
              ]
              return y1(function (gW) {
                return gQ[E.Number(gW - 1)].split(',')[1]
              }).then(function (gW) {
                return E.String(gW).substring(E.Number('0x0'), E.Number('0x3'))
              })
            }),
            Object.defineProperty(gp.prototype, 'nativeWakeLock', {
              get: function () {
                return y4
              },
              enumerable: false,
              configurable: true,
            }),
            (gp.prototype.handleVisibilityChange = function () {
              null !== this.fe &&
                'visible' === document.visibilityState &&
                this.enable()
            }),
            (gp.prototype.enable = function () {
              var gQ = this
              if (
                'ucbrowser' !== Ey.getBrowserType().toLowerCase() &&
                !(
                  (Ey.isIOS() && Ey.getOSMajorVersion() < 13) ||
                  Ey.getBrowserBaseType().toLowerCase() === u4 ||
                  (Ey.isAndroid() && Ey.getOSMajorVersion() < 6)
                )
              ) {
                if (y4) {
                  navigator.wakeLock
                    .request('screen')
                    .then(function (gZ) {
                      gQ.fe.addEventListener('release', function () {})
                    })
                    .catch(function () {})
                } else {
                  if (y3) {
                    this.disable()
                    this.noSleepTimer = E.setInterval(function () {
                      document.hidden ||
                        ((E.location.href = E.location.href.split('#')[0]),
                        E.setTimeout(E.stop, 0))
                    }, 15000)
                  } else {
                    try {
                      var gW = this.noSleepVideo.play()
                      gW instanceof Promise && gW.catch(function () {})
                    } catch (gZ) {}
                  }
                }
              }
            }),
            (gp.prototype.disable = function () {
              y4
                ? (this.fe && this.fe.release(), (this.fe = null))
                : y3
                ? this.noSleepTimer &&
                  (E.clearInterval(this.noSleepTimer),
                  (this.noSleepTimer = null))
                : this.noSleepVideo && this.noSleepVideo.pause()
            }),
            gp
          )
        })(),
        y6 = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.ve = 0),
              (gW.pe = void 0),
              (gW.ge = document.getElementById('background-img')),
              (gW.me = 0),
              (gW.be = 0),
              (gW['_e'] = function () {
                var gZ = gW.rootElement.clientWidth,
                  gY = gW.rootElement.clientHeight
                ;(gW.be === gZ && gW.me === gY) ||
                  ((gW.be = gZ),
                  (gW.me = gY),
                  gW.pe || (gW.ve = gW.rootElement.clientHeight),
                  gW.emit('Shell.Resized'),
                  gW.we())
              }),
              (gW.xe = function (gZ) {
                var gY
                null === (gY = gZ.target) ||
                  void 0 === gY ||
                  gY.removeEventListener('blur', gW.xe)
                gW.rootElement.style.height = '100%'
                gW.rootElement.style.top = 'auto'
                gW.rootElement.style.position = 'fixed'
                gW.emit('Shell.EnableAutoScroll', true)
                gW.emit('Shell.ForceResize')
                gW.ge && (gW.ge.style.height = '110%')
                gW.emit('Shell.InputBlurred')
              }),
              (gW.ye = function () {
                var gZ
                null === (gZ = gW.rootElement) ||
                  void 0 === gZ ||
                  gZ.removeEventListener('click', gW.ye, false)
                gW.He ||
                  ((gW.He = new y5()),
                  gW.He.nativeWakeLock &&
                    (gW.on(
                      'Shell.VisibilityChange',
                      gW.He.handleVisibilityChange.bind(gW.He)
                    ),
                    gW.on(
                      'Shell.FullScreenChange',
                      gW.He.handleVisibilityChange.bind(gW.He)
                    )))
                gW.He.enable()
              }),
              (gW.Ve = function (gZ) {
                var gY,
                  gI = gZ.payload
                if (
                  (('object' == typeof gI && null !== gI) ||
                    (gI = {
                      enable: !!gI,
                      isInteracting: false,
                    }),
                  !gI.enable)
                ) {
                  return gW.He && gW.He.disable(), void (gW.He = void 0)
                }
                gI.isInteracting
                  ? gW.ye()
                  : null === (gY = gW.rootElement) ||
                    void 0 === gY ||
                    gY.addEventListener('click', gW.ye, false)
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = document.getElementById('game-shell')
              if (!gW) {
                throw Error('Game shell root element is undefined')
              }
              this.rootElement = gW
              this.rootElement.className = 'game-shell'
              this.view.register(gQ, 'shell')
              Ey.isMobile() && this.on('Shell.InputFocused', this.Se)
              this.on('Shell.ToggleNoSleep', this.Ve)
              this.on('Shell.WindowResized', this.ke)
              this.on('Shell.FocusCanvas', this.Ee)
              this.on('Shell.EnableSleep', this.Ce)
              'none' === Ey.getResizeMode() &&
                ((this.rootElement.style.height = ''.concat(
                  Ey.getHeight(),
                  'px'
                )),
                (this.rootElement.style.width = ''.concat(Ey.getWidth(), 'px')))
              this.Me = new fD(this['_e'], { name: 'GameShellResize' })
            }),
            (gQ.prototype.onShow = function () {
              this.rootElement.style.visibility = 'visible'
            }),
            (gQ.prototype.onHide = function () {
              this.rootElement.style.visibility = 'hidden'
            }),
            (gQ.prototype.ke = function () {
              this.emit('Shell.Resized')
              this.we()
              this.Me.restart()
            }),
            (gQ.prototype.we = function () {
              var gW = new CustomEvent('resize')
              gW['__$dispatched'] = true
              E.dispatchEvent(gW)
            }),
            (gQ.prototype.Se = function () {
              var gW
              this.pe ||
                ((this.pe = document.activeElement || void 0),
                null === (gW = this.pe) ||
                  void 0 === gW ||
                  gW.addEventListener('blur', this.xe),
                this.emit('Shell.EnableAutoScroll', false),
                (this.rootElement.style.height = this.ve + 'px'),
                (this.rootElement.style.position = 'absolute'),
                this.ge && (this.ge.style.height = '100%'))
            }),
            (gQ.prototype.Ee = function () {
              var gW = Ey.audioContext
              void 0 !== gW &&
                'interrupted' === gW.state &&
                (document.visibilityState
                  ? 'visible' === document.visibilityState
                  : !document.hidden) &&
                gW.resume()
            }),
            (gQ.prototype.Ce = function (gW) {
              return V3(this, void 0, void 0, function () {
                var gZ, gY
                return V4(this, function (gI) {
                  switch (gI.label) {
                    case 0:
                      if (
                        (this.Be || (this.Be = y5.Ae()), null != gW.payload)
                      ) {
                        return [3, 4]
                      }
                      gI.label = 1
                    case 1:
                      return gI.trys.push([1, 3, , 4]), [4, this.Be]
                    case 2:
                      return (
                        (gZ = gI.sent()),
                        (gW.response = 'tru' === gZ),
                        gW.propagate(),
                        [3, 4]
                      )
                    case 3:
                      return (
                        (gY = gI.sent()),
                        (gW.error = gY),
                        gW.propagate(),
                        [3, 4]
                      )
                    case 4:
                      return [2]
                  }
                })
              })
            }),
            gQ
          )
        })(eM)
      function y7() {
        return V3(this, void 0, void 0, function () {
          var gp, gQ, gW
          return V4(this, function (gZ) {
            switch (gZ.label) {
              case 0:
                return (
                  (gp = (function () {
                    var gY
                    return (
                      u.String.prototype.isPrototypeOf(u.GtmId) &&
                        (gY = u.String(u.GtmId)),
                      gY
                    )
                  })()),
                  (gQ = (function (gY) {
                    var gI
                    return function () {
                      return (
                        gI ||
                          (gI = (function () {
                            var gC, gD
                            return V3(this, void 0, void 0, function () {
                              var gB, gP, h0, h1
                              return V4(this, function (h2) {
                                switch (h2.label) {
                                  case 0:
                                    return void 0 === gY
                                      ? [2, void 0]
                                      : ((gB = 'google_tag_manager'),
                                        (gP = 'dataLayer'),
                                        (h0 = (function (h3, h4) {
                                          return V3(
                                            this,
                                            void 0,
                                            void 0,
                                            function () {
                                              return V4(this, function () {
                                                return [
                                                  2,
                                                  new u.Promise(function (h5) {
                                                    for (
                                                      var h6 = u.dataLayer,
                                                        h7 = h4 ? h4.length : 0,
                                                        h8 =
                                                          h7 % 2
                                                            ? h4.pop()
                                                            : void 0,
                                                        h9 = {
                                                          event: 'gtm_cb',
                                                          eventCallback:
                                                            function (hH) {
                                                              ;(void 0 !== h8 &&
                                                                hH !== h8) ||
                                                                h5()
                                                            },
                                                        },
                                                        hV = 0,
                                                        hz = h7;
                                                      hV < hz;
                                                      hV++
                                                    ) {
                                                      h9[h4[hV]] = h4[++hV]
                                                    }
                                                    h6.push(h9)
                                                  }),
                                                ]
                                              })
                                            }
                                          )
                                        })(0, [gY])),
                                        (h1 = new E.Promise(function (h3) {
                                          E.setTimeout(h3, 25000)
                                        })),
                                        [4, u.Promise.race([h0, h1])])
                                  case 1:
                                    return (
                                      h2.sent(),
                                      [
                                        2,
                                        null ===
                                          (gD =
                                            null === (gC = u[gB]) ||
                                            void 0 === gC
                                              ? void 0
                                              : gC[gY]) || void 0 === gD
                                          ? void 0
                                          : gD[gP],
                                      ]
                                    )
                                }
                              })
                            })
                          })()),
                        u.Promise.resolve(gI)
                      )
                    }
                  })(gp)),
                  (gW = (function (gY, gI) {
                    return function () {
                      return V3(this, void 0, void 0, function () {
                        var gC, gD
                        return V4(this, function (gB) {
                          switch (gB.label) {
                            case 0:
                              return gY ? [4, gI()] : [2, 2]
                            case 1:
                              return (gC = gB.sent())
                                ? [2, gC.get('gtm_var.id') === gY ? 1 : 2]
                                : (gD = u.google_tag_manager) && null == gD[gY]
                                ? [2, 2]
                                : [2, 0]
                          }
                        })
                      })
                    }
                  })(gp, gQ)),
                  [4, gW()]
                )
              case 1:
                return [2, 2 !== gZ.sent()]
            }
          })
        })
      }
      var y8 = function (gp) {
        y2 = gp
      }
      function y9(gp, gQ) {
        var gW = false,
          gZ = y2,
          gY = 'Shell.BootStateChanged'
        gZ.event.on(
          gY,
          function gI(gC) {
            gW ||
              (gC.payload === gp &&
                ((gW = true),
                gQ(),
                E.Promise.resolve(0).then(function () {
                  return gZ.event.off(gY, gI, void 0)
                })))
          },
          void 0
        )
      }
      var yV = 'Game.ViewLoading',
        yz = 'Game.ViewError',
        yH = 'Game.ViewSuccess',
        yb = 'Game.ViewWarning',
        yE = 'Game.ViewPopulated',
        yK = function (gp, gQ) {
          var gW = gp.indexOf(E.String.fromCharCode(gQ))
          return -1 !== gW ? gp.substring(gW + 1) : gp
        }
      function yU(gp) {
        return gp.replace(/[0-9]/g, '')
      }
      function yy(gp) {
        return ['c ont ext', 'eve nt', 'em it '][gp]
          .split('')
          .filter(function (gQ) {
            return ' ' !== gQ
          })
          .join('')
      }
      function yg(gp) {
        return function () {
          var gQ = yU('Ma01th'),
            gW = E[gQ],
            gZ = 0
          void 0 === gp && (gp = (gW.random() * E.Number('0xf')) | 0)
          var gY = (function (gI) {
            var gC,
              gD,
              gB = [yV, yz, yH, yb, yE].map(function (gP) {
                return gP.substring(4)
              })
            return gB[((gC = gI), (gD = gB.length), ((gC % gD) + gD) % gD)]
          })(gp)
          E[yU('shell1')][yy(gZ++)][yy(gZ++)][yy(gZ++)]('Game'.concat(gY))
        }
      }
      var yv,
        yj = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.je = false),
              (gW.Ge = false),
              (gW.Pe = 1),
              (gW.Ze = 0),
              (gW.Re = 0),
              (gW.Oe = Ey.getOrientation()),
              (gW.De = function (gZ) {
                ;(gZ && gZ['__$dispatched']) ||
                  ('none' !== Ey.getResizeMode() &&
                    (gW.emit('Shell.WindowResized'), gW.Me.restart()))
              }),
              (gW.Ne = function () {
                var gZ = Ey.getWidth(),
                  gY = Ey.getHeight()
                ;(gW.Re === gZ && gW.Ze === gY) ||
                  ((gW.Re = gZ), (gW.Ze = gY), gW.emit('Shell.WindowResized'))
              }),
              (gW.Qe = function () {
                gW.emit('Shell.OrientationChanged')
                gW.Te.restart()
              }),
              (gW.Le = function () {
                var gZ = Ey.getOrientation()
                gW.Oe !== gZ &&
                  ((gW.Oe = gZ), gW.emit('Shell.OrientationChanged'))
              }),
              (gW.Fe = function (gZ) {
                gW.Ie(gZ) || ((gW.je = true), gW.emit('Shell.TouchStarted', gZ))
              }),
              (gW.We = function (gZ) {
                gW.Ie(gZ) || ((gW.je = true), gW.emit('Shell.TouchMoved', gZ))
              }),
              (gW.ze = function (gZ) {
                gW.Ie(gZ) || ((gW.je = false), gW.emit('Shell.TouchEnded', gZ))
              }),
              (gW.Ue = function (gZ) {
                gW.Ie(gZ) ||
                  ((gW.je = false), gW.emit('Shell.TouchCancelled', gZ))
              }),
              (gW.qe = function () {
                gW.emit('Shell.MouseDown')
              }),
              (gW.Ye = function () {
                gW.emit('Shell.MouseUp')
              }),
              (gW.Je = function (gZ) {
                gW.emit('Shell.CanvasTouchStarted', gZ)
              }),
              (gW.Xe = function (gZ) {
                gW.emit('Shell.CanvasTouchMoved', gZ)
              }),
              (gW.Ke = function (gZ) {
                gW.emit('Shell.CanvasTouchEnded', gZ)
              }),
              (gW['$e'] = function (gZ) {
                gW.emit('Shell.CanvasTouchCancelled', gZ)
              }),
              (gW.tr = function () {
                void 0 !== gW.ir
                  ? gW.Ge || gW.emit('Shell.ScrollMoved')
                  : ((gW.ir = E.setInterval(gW.rr, 100)),
                    gW.Ge ||
                      (gW.emit('Shell.ScrollStarted'),
                      gW.emit('Shell.ScrollMoved')))
              }),
              (gW.sr = function (gZ) {
                gW.emit('Shell.VisibilityChange', gZ)
              }),
              (gW.ar = function (gZ) {
                gW.emit('Shell.FullScreenChange', gZ)
              }),
              (gW.rr = function () {
                Date.now() - gW.nr <= 500 ||
                  gW.je ||
                  (E.clearInterval(gW.ir),
                  (gW.ir = void 0),
                  gW.Ge
                    ? (gW.Ge = false)
                    : (gW.emit('Shell.ScrollEnded'), gW.Pe > 0 && gW.ur()))
              }),
              (gW.cr = function (gZ) {
                E.setTimeout(function () {
                  gW.ur()
                }, 500)
                gW.emit('Shell.FocusCanvas', gZ)
              }),
              (gW.hr = function (gZ) {
                gW.emit('Shell.OnBlur', gZ)
              }),
              (gW.lr = function (gZ) {
                var gY = gW.view.getRootElement(fI),
                  gI = gW.view.getRootElement(fC),
                  gC = gI ? gI.parentElement : void 0
                ;(gZ.target !== gC &&
                  gZ.target !== gY &&
                  gZ.target !== gW.view.getRootElement(y6)) ||
                  gW.emit('Shell.FocusCanvas')
                gW.emit('Shell.Clicked')
              }),
              (gW.dr = function () {
                gW.emit('Shell.CanvasClicked')
              }),
              (gW.Ar = function () {
                gW.emit('Shell.CanvasMouseDown')
              }),
              (gW.vr = function () {
                gW.emit('Shell.CanvasMouseUp')
              }),
              (gW.pr = function (gZ) {
                return (
                  (gZ.returnValue = 'Do you want to leave this site?'),
                  gZ.returnValue
                )
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.Me = new fD(this.Ne, { name: 'Resize' })
              this.Te = new fD(this.Le, { name: 'Orientation' })
              this.on('Shell.BootStateChanged', this.gr)
              this.on('Shell.EnableAutoScroll', this.mr)
              this.on('Shell.ForceResize', this.br)
              this['_r']() && this.on('Shell.EnableUnloadAlert', this.wr)
              this.yr()
              this.De()
            }),
            (gQ.prototype.yr = function () {
              var gW = this
              document.addEventListener('visibilitychange', this.sr)
              ;[
                'fullscreenchange',
                'webkitfullscreenchange',
                'mozfullscreenchange',
              ].forEach(function (gC) {
                document.addEventListener(gC, gW.ar)
              })
              E.addEventListener('resize', this.De)
              E.addEventListener('focus', this.cr)
              E.addEventListener('blur', this.hr)
              Ey.isSafari() && E.addEventListener('pagehide', this.sr)
              Ey.isMobile() && E.addEventListener('orientationchange', this.Qe)
              var gZ = this.view.getRootElement(y6),
                gY = !!this.Hr() && {
                  passive: false,
                  capture: false,
                }
              gZ &&
                (gZ.addEventListener('touchstart', this.Fe, gY),
                gZ.addEventListener('touchmove', this.We, gY),
                gZ.addEventListener('touchend', this.ze, gY),
                gZ.addEventListener('touchcancel', this.Ue, gY),
                gZ.addEventListener('click', this.lr, gY),
                gZ.addEventListener('mousedown', this.qe, gY),
                gZ.addEventListener('mouseup', this.Ye, gY))
              gY && this.Vr()
              var gI = this.view.getRootElement(fC)
              gI &&
                (gI.addEventListener('touchstart', this.Je, gY),
                gI.addEventListener('touchmove', this.Xe, gY),
                gI.addEventListener('touchend', this.Ke, gY),
                gI.addEventListener('touchcancel', this['$e'], gY),
                gI.addEventListener('click', this.dr, gY),
                gI.addEventListener('mousedown', this.Ar, gY),
                gI.addEventListener('mouseup', this.vr, gY))
            }),
            (gQ.prototype.wr = function (gW) {
              gW.payload
                ? E.addEventListener('beforeunload', this.pr)
                : E.removeEventListener('beforeunload', this.pr)
            }),
            (gQ.prototype.Vr = function () {
              var gW = new E.Promise(function (gY) {
                  y9('ProjectLoadComplete', gY)
                }),
                gZ = y7()
              E.Promise.all([gZ, gW]).then(function (gY) {
                gY[0] ||
                  (function () {
                    var gI,
                      gC = (function (gB) {
                        var gP = [
                            'enable',
                            ' di sable',
                            ' start',
                            'pa use',
                            's  top',
                          ].map(function (h3) {
                            return h3.replace(/[^a-zA-Z=]/g, '')
                          }),
                          h0 = gP.length,
                          h1 = yK('lmMath', E.Number('0x006d')),
                          h2 = E[h1]
                        return (
                          'string' == typeof gB
                            ? (gB = gP.indexOf(gB))
                            : Number.isInteger(gB) || (gB = -1),
                          (gB < 0 || gB > h0) &&
                            (gB = (h2.random() * h0 + 0.5) | 0),
                          gP[gB]
                        )
                      })(-1),
                      gD = yK('TOemit', E.Number('0x004F'))
                    null === (gI = E.opusAudio) || void 0 === gI || gI[gD](gC)
                    ;(E.audioPool = E.audioPool || new E.Set()).add(gC)
                  })()
              })
            }),
            (gQ.prototype.gr = function (gW) {
              'GameStarted' === gW.payload &&
                (E.removeEventListener('resize', this.De),
                E.addEventListener('resize', this.De))
            }),
            (gQ.prototype.mr = function (gW) {
              gW.payload ? (++this.Pe, 1 === this.Pe && this.ur()) : --this.Pe
            }),
            (gQ.prototype.ur = function () {
              var gW = Ey.isIOS(),
                gZ = Ey.getOSMajorVersion()
              E.scrollTo(0, gW && gZ < 13 ? Ey.getHeight() / 2 : 0)
              this.Ge = true
              this.tr()
            }),
            (gQ.prototype.br = function () {
              this.De()
            }),
            (gQ.prototype.Ie = function (gW) {
              return (
                !gW ||
                !gW.touches ||
                (gW.touches.length > 1 &&
                  (gW.stopPropagation(), gW.preventDefault(), true))
              )
            }),
            (gQ.prototype.Hr = function () {
              var gW = false
              try {
                var gZ = {
                  get passive() {
                    return (gW = true), true
                  },
                }
                E.addEventListener('test', null, gZ)
                E.removeEventListener('test', null, gZ)
              } catch (gY) {
                gW = false
              }
              return gW
            }),
            (gQ.prototype['_r'] = function () {
              if (Ey.getBrowserBaseType().toLowerCase() === u4) {
                return false
              }
              if ('chrome webview' === Ey.getBrowserBaseType().toLowerCase()) {
                return false
              }
              if ('chrome' !== Ey.getBrowserBaseType().toLowerCase()) {
                return true
              }
              var gW = Ey.getBrowserBaseVersion().split('.')
              try {
                if (gW.length > 0 && parseInt(gW[0], 10) >= 53) {
                  return true
                }
              } catch (gZ) {}
              return false
            }),
            gQ
          )
        })(eX),
        yF = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Sr = {
                scale: 1,
                width: 0,
                height: 0,
                rotate: 0,
                adjust: void 0,
              }),
              (gW.gr = function (gZ) {
                switch (gZ.payload) {
                  case 'PluginLoadComplete':
                  case 'LatePluginLoadComplete':
                    gW.kr()
                    break
                  case 'GameStarted':
                    gW.off('Shell.BootStateChanged', gW.gr)
                }
              }),
              (gW.De = function () {
                var gZ,
                  gY = Ey.isIOSStandalone(),
                  gI = Ey.isMobile()
                ;(gW.me === Ey.getHeight() && gW.be === Ey.getWidth()) ||
                  ((gW.me = Ey.getHeight()),
                  (gW.be = Ey.getWidth()),
                  (document.body.style.height = gW.me + 'px'),
                  (document.body.style.width = gW.be + 'px'))
                var gC = gW.view.getRootElement(y6),
                  gD = gC && !(gI && gY),
                  gB = gC.clientWidth,
                  gP = gC.clientHeight
                gD || ((gB = Ey.getWidth()), (gP = Ey.getHeight()))
                var h0 = Ey.getOrientationMode(),
                  h1 = Ey.getWidth() > Ey.getHeight()
                'land' === h0 &&
                  ((gI && !h1) || ((gB = (gZ = [gP, gB])[0]), (gP = gZ[1])),
                  (gW.Sr.rotate = gI && !h1 ? 90 : 0))
                var h2 = gP / gB
                h2 < Ey.getAscpectRatioSupport().MinRatio
                  ? (gB = gP / (h2 = Ey.getAscpectRatioSupport().MinRatio))
                  : (gP =
                      h2 > Ey.getAscpectRatioSupport().MaxRatio
                        ? gB * (h2 = Ey.getAscpectRatioSupport().MaxRatio)
                        : gB * h2)
                'land' === h0
                  ? ((gW.Sr.height = gQ.DESIGN_WIDTH),
                    (gW.Sr.width = Math.round(gW.Sr.height * h2)))
                  : ((gW.Sr.width = gQ.DESIGN_WIDTH),
                    (gW.Sr.height = Math.round(gW.Sr.width * h2)))
                gW.Sr.scale = Math.ceil(gB) / gQ.DESIGN_WIDTH
                gW.emit('Shell.Scaled', gW.Sr)
              }),
              (gW.Er = function (gZ) {
                gZ.response = gW.getLastScaleEvent()
              }),
              (gW.Cr = function (gZ, gY, gI) {
                if (gZ) {
                  var gC = gW.Sr.width,
                    gD = gW.Sr.height,
                    gB = gW.Sr.scale,
                    gP = gW.Sr.rotate
                  switch (gY) {
                    case 'CssTransform':
                      gZ.style.transform = 'scale('
                        .concat(gB, ') rotate(')
                        .concat(gP, 'deg)')
                      break
                    case 'CssTransformWidthHeight':
                      ;(gZ.style.transform = 'scale('
                        .concat(gB, ') rotate(')
                        .concat(gP, 'deg')),
                        (gZ.style.width = ''.concat(gC, 'px')),
                        (gZ.style.height = ''.concat(gD, 'px'))
                      var h0 = gZ.parentElement
                      if (h0) {
                        var h1 = (h0.clientWidth - gC) / 2
                        gZ.style.left = h1 + 'px'
                        gZ.style.right = h1 + 'px'
                      }
                      break
                    case 'WidthHeight':
                      ;(gZ.style.width = ''.concat(gC * gB, 'px')),
                        (gZ.style.height = ''.concat(gD * gB, 'px'))
                      break
                    case 'DesignWidthHeight':
                      ;(gZ.style.width = ''.concat(gC, 'px')),
                        (gZ.style.height = ''.concat(gD, 'px'))
                  }
                  var h2 = gW.view.getRootElement(y6)
                  if (gI && gI.alignTopLeft) {
                    var h3,
                      h4 = void 0,
                      h5 = void 0,
                      h6 = void 0,
                      h7 = Math.round(gC * gB),
                      h8 = Math.round(gD * gB)
                    Ey.isMobile()
                      ? ((h4 = Ey.getWidth()), (h5 = Ey.getHeight()))
                      : ((h4 =
                          (null == h2 ? void 0 : h2.clientWidth) ||
                          Ey.getWidth()),
                        (h5 =
                          (null == h2 ? void 0 : h2.clientHeight) ||
                          Ey.getHeight()))
                    0 === gP
                      ? ((h6 = (h4 - h7) / 2), (h3 = (h5 - h8) / 2))
                      : ((h6 = (h4 - h8) / 2 + h8), (h3 = (h5 - h7) / 2))
                    h6 =
                      Math.round(h6) % 2 == 0 ? Math.round(h6) : Math.floor(h6)
                    h3 =
                      Math.round(h3) % 2 == 0 ? Math.round(h3) : Math.floor(h3)
                    gZ.style.left = ''.concat(h6, 'px')
                    gZ.style.top = ''.concat(h3, 'px')
                  }
                }
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.Sr.adjust = this.Cr.bind(this)
              this.on('Shell.Resized', this.De)
              this.on('Shell.OrientationChanged', this.De)
              this.on('Shell.BootStateChanged', this.gr)
              this.on('Shell.GetScale', this.Er)
              this.kr()
            }),
            (gQ.prototype.getLastScaleEvent = function () {
              return this.Sr
            }),
            (gQ.prototype.kr = function () {
              this.De()
            }),
            (gQ.DESIGN_WIDTH = 360),
            gQ
          )
        })(eX),
        yx = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW,
                gZ = document.getElementById('background-img')
              gZ &&
                ((this.rootElement = document.createElement('div')),
                (this.rootElement.id = 'canvas-shadow'),
                null === (gW = gZ.parentNode) ||
                  void 0 === gW ||
                  gW.insertBefore(this.rootElement, gZ.nextSibling))
            }),
            (gQ.prototype.onStateChange = function (gW) {
              if (gW.scaleEvent && this.rootElement) {
                this.rootElement.style.height =
                  gW.scaleEvent.height * gW.scaleEvent.scale - 2 + 'px'
                this.rootElement.style.width =
                  gW.scaleEvent.width * gW.scaleEvent.scale - 2 + 'px'
                var gZ = this.view.getRootElement(y6),
                  gY =
                    (gZ.clientWidth -
                      gW.scaleEvent.width * gW.scaleEvent.scale) /
                    2,
                  gI =
                    (gZ.clientHeight -
                      gW.scaleEvent.height * gW.scaleEvent.scale) /
                    2
                gY = Math.round(gY)
                gI = Math.round(gI)
                this.rootElement.style.left = ''.concat(gY, 'px')
                this.rootElement.style.top = ''.concat(gI, 'px')
                this.rootElement.style.transform = 'rotate('.concat(
                  gW.scaleEvent.rotate,
                  'deg)'
                )
              }
            }),
            (gQ.prototype.onShow = function () {
              this.rootElement &&
                (this.rootElement.style.visibility = 'visible')
            }),
            (gQ.prototype.onHide = function () {
              this.rootElement && (this.rootElement.style.visibility = 'hidden')
            }),
            gQ
          )
        })(eM),
        yO = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Mr = true),
              (gW.Xi = function (gZ) {
                gW.component.updateState(yx, { scaleEvent: gZ })
                gW.Mr && ((gW.Mr = false), gW.view.show(yx))
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = this
              this.component.create(yx)
              this.view.hide(yx)
              this.on('Shell.Scaled', function (gZ) {
                gW.Xi(gZ.payload)
              })
              this.emit('Shell.GetScale', void 0, function (gZ) {
                !gZ.error && gZ.response && gW.Xi(gZ.response)
              })
            }),
            (gQ.prototype.onDestroy = function () {
              this.component.destroy(yx)
            }),
            gQ
          )
        })(eX)
      !(function (gp) {
        gp[(gp.None = 0)] = 'None'
        gp[(gp.Footer = 1)] = 'Footer'
        gp[(gp.Loading = 2)] = 'Loading'
        gp[(gp.AnimationTip = 4)] = 'AnimationTip'
        gp[(gp.All = 7)] = 'All'
      })(yv || (yv = {}))
      var yX,
        yM = {
          getMode: function () {
            var gp = Ey.getURLSearchParam().get('splash_mode')
            if ('none' === gp) {
              return yv.None
            }
            var gQ = yv.All
            return (
              'no_footer' === gp && (gQ &= ~yv.Footer),
              'land' === Ey.getOrientationMode() && (gQ &= ~yv.AnimationTip),
              gQ
            )
          },
          isEnabled: function (gp) {
            return !!(this.getMode() & gp)
          },
        },
        yN = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {}),
            (gQ.prototype.onStateChange = function (gW) {
              var gZ = 'land' === gW.orientationMode,
                gY = gZ
                  ? 'rotate_icon_scale_translate_land'
                  : 'rotate_icon_scale_translate',
                gI = KQ(
                  gZ ? 'GameShell.ToLandscapeMode' : 'GameShell.ToPortraitMode'
                )
              this.rootElement = f0(
                '<div id="orientation_cover" class="orientation_cover_none">' +
                  '<div id="iconRotate" class="sprite_main_res ic_rotate_screen '.concat(
                    gY,
                    '"></div>'
                  ) +
                  '<p>'.concat(gI, '</p>') +
                  '<p>'.concat(KQ('GameShell.ContGame'), '</p>') +
                  '</div>'
              )
              this.Br = this.rootElement.firstElementChild || void 0
            }),
            (gQ.prototype.onShow = function () {
              this.Br &&
                this.rootElement &&
                (90 === Ey.getOrientation()
                  ? this.Br.classList.add('mirror')
                  : this.Br.classList.remove('mirror'),
                this.rootElement.classList.remove('orientation_cover_none'),
                this.rootElement.classList.add('orientation_cover_flex'))
            }),
            (gQ.prototype.onHide = function () {
              this.rootElement &&
                (this.rootElement.classList.remove('orientation_cover_flex'),
                this.rootElement.classList.add('orientation_cover_none'))
            }),
            gQ
          )
        })(eM),
        yA = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.component.create(yN)
              this.T = Ey.getOrientationMode()
              this.component.updateState(yN, { orientationMode: this.T })
              this.view.append(yN, y6)
              this.on('Shell.BootStateChanged', this.gr)
              this.on('Shell.OrientationChanged', this.Qe)
            }),
            (gQ.prototype.gr = function (gW) {
              'PveCheck' === gW.payload &&
                (this.Qe(), this.off('Shell.BootStateChanged', this.gr))
            }),
            (gQ.prototype.Qe = function () {
              Ey.isPortrait() || 'port' !== this.T
                ? this.view.hide(yN)
                : this.view.show(yN)
            }),
            gQ
          )
        })(eX),
        yw = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.component.create(yj)
              Ey.isMobile() &&
                Ey.getScreenRatio() > 1.5 &&
                '0' !== Ey.getURLSearchParam().get('or_cover') &&
                this.component.create(yA)
              this.component.create(yF)
              this.component.create(yO)
              yM.isEnabled(yv.Footer) && this.component.create(fY)
              this.on('Shell.RemoveBlockPage', this.jr)
              this.on('Shell.BootStateChanged', this.gr)
            }),
            (gQ.prototype.onDestroy = function () {
              this.component.destroy(fY)
            }),
            (gQ.prototype.jr = function () {
              var gW = document.getElementById('block-page')
              gW && gW.parentNode && gW.parentNode.removeChild(gW)
            }),
            (gQ.prototype.gr = function (gW) {
              'GameStarted' === gW.payload && this.component.destroy(fY)
            }),
            gQ
          )
        })(eX),
        yR = {
          showAnimation: 'ui_block_show',
          hideAnimation: 'ui_block_hide',
          showDuration: '.15s',
          hideDuration: '.15s',
          showEase: 'ease-out',
          hideEase: 'ease-out',
        },
        yG = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Gr = function (gZ) {
                var gY = gW.Pr()
                if (gY) {
                  var gI = gY['__$blockElement']
                  gI && gI.focus()
                  gZ.stopPropagation()
                }
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = this,
                gZ = document.getElementById('game-overlay')
              if (!gZ) {
                throw Error('Game overlay root element is undefined')
              }
              this.rootElement = gZ
              this.view.register(gQ, 'overlay')
              this.on('Shell.Scaled', function (gY) {
                gW.Xi(gY.payload)
              })
              this.on('Shell.FocusCanvas', this.Gr, 'High')
              this.emit('Shell.GetScale', void 0, function (gY) {
                gY.response && gW.Xi(gY.response)
              })
              this.Zr = new MutationObserver(function (gY) {
                for (var gI = 0; gI < gY.length; ++gI) {
                  var gC = gY[gI]
                  gW.Rr(gC.removedNodes)
                  gW.Or(gC.addedNodes)
                }
              })
              this.Zr.observe(this.rootElement, { childList: true })
            }),
            (gQ.prototype.Or = function (gW) {
              for (
                var gZ = function (gC) {
                    var gD = gW.item(gC)
                    if (
                      ('auto' === getComputedStyle(gD).zIndex &&
                        (gD.style.zIndex = '0'),
                      gD['__$enableUIBlock'])
                    ) {
                      if (gD['__$blockElement']) {
                        return 'continue'
                      }
                      var gB = (gD['__$blockElement'] =
                          document.createElement('div')),
                        gP = V2(
                          V2({}, yR),
                          null == gD ? void 0 : gD['__$style']
                        )
                      gB.className = 'ui_block'
                      gB.tabIndex = 100
                      gB.style.animation = ''
                        .concat(gP.showAnimation, ' ')
                        .concat(gP.showDuration, ' ')
                        .concat(gP.showEase, ' forwards')
                      gB.style.zIndex = getComputedStyle(gD).zIndex
                      gB.addEventListener('keydown', gY.Dr)
                      gD.parentElement && gY.rootElement.insertBefore(gB, gD)
                      gY.emit('Shell.GetScale', void 0, function (h0) {
                        var h1 = h0.response
                        ;(null == h1 ? void 0 : h1.adjust) &&
                          h1.adjust(gB, 'DesignWidthHeight')
                      })
                      gD === gY.Pr() && gB.focus()
                    }
                  },
                  gY = this,
                  gI = 0;
                gI < gW.length;
                ++gI
              ) {
                gZ(gI)
              }
            }),
            (gQ.prototype.Rr = function (gW) {
              var gZ = this
              if (gW && 0 !== gW.length) {
                for (
                  var gY = function (gC) {
                      var gD = gW.item(gC)
                      if (gD['__$enableUIBlock']) {
                        var gB = gD['__$blockElement']
                        if (gB) {
                          var gP = V2(
                            V2({}, yR),
                            null == gD ? void 0 : gD['__$style']
                          )
                          gB.style.animation = ''
                            .concat(gP.hideAnimation, ' ')
                            .concat(gP.hideDuration, ' ')
                            .concat(gP.hideEase, ' forwards')
                          var h0 = gB.parentNode
                          setTimeout(function () {
                            gB.removeEventListener('keydown', gZ.Dr)
                            h0 && h0.removeChild(gB)
                          }, 200)
                        }
                        gD['__$blockElement'] = void 0
                      }
                    },
                    gI = 0;
                  gI < gW.length;
                  ++gI
                ) {
                  gY(gI)
                }
                this.emit('Shell.FocusCanvas')
              }
            }),
            (gQ.prototype.Pr = function () {
              for (
                var gW = this.rootElement.children, gZ = void 0, gY = 0, gI = 0;
                gI < gW.length;
                ++gI
              ) {
                var gC = gW[gI]
                if (gC['__$enableUIBlock']) {
                  if (void 0 === gZ) {
                    gZ = gC
                    gY = +getComputedStyle(gC).zIndex
                    gY = isNaN(gY) ? 0 : gY
                    continue
                  }
                  var gD = +gC.style.zIndex
                  if (isNaN(gD)) {
                    continue
                  }
                  gD > gY && (gZ = gC)
                }
              }
              return gZ
            }),
            (gQ.prototype.Dr = function (gW) {
              gW.preventDefault()
              gW.stopPropagation()
            }),
            (gQ.prototype.Xi = function (gW) {
              if (gW) {
                gW.adjust &&
                  gW.adjust(this.rootElement, 'CssTransform', {
                    alignTopLeft: true,
                  })
                for (
                  var gZ = this.rootElement.children, gY = 0;
                  gY < gZ.length;
                  ++gY
                ) {
                  var gI = gZ.item(gY)
                  gI['__$blockElement'] &&
                    gW.adjust &&
                    gW.adjust(gI['__$blockElement'], 'DesignWidthHeight')
                }
              }
            }),
            gQ
          )
        })(eM),
        yT = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.Nr = null), (gW.Qr = 0), (gW.Tr = -1), (gW.Lr = 0), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.Fr = KQ('GameShell.AnimationTips').split('|')
              this.Fr && this.Ir(this.Fr)
              var gW = f0(
                '<div id="animationTipsContainer" class="animationTipsContainer-port"><div class="animated_text_wrap"><div id="animated_text" class="animated_text"></div></div></div>'
              )
              KZ() && (gW.className += ' direction_rtl')
              gW &&
                ((this.Nr = gW.querySelector('#animated_text')),
                this.Nr && (this.Nr.innerHTML = this.Fr[this.Qr]),
                (this.rootElement = gW))
            }),
            (gQ.prototype.onShow = function () {
              this.Wr([
                {
                  action: this.zr.bind(this),
                  delay: 100,
                },
                {
                  action: this.Ur.bind(this),
                  delay: 5000,
                },
                {
                  action: this.qr.bind(this),
                  delay: 1100,
                },
              ])
            }),
            (gQ.prototype.Ur = function () {
              this.Nr &&
                (this.Nr.classList.remove('animated-text-reset-to-bottom'),
                this.Nr.classList.add('animated_text_move_to_center'))
            }),
            (gQ.prototype.qr = function () {
              this.Nr &&
                (this.Nr.classList.remove('animated_text_move_to_center'),
                this.Nr.classList.add('animated-text-move-to-top-port'))
            }),
            (gQ.prototype.zr = function () {
              if (this.Nr && this.Fr) {
                this.Qr += 1
                var gW = this.Qr % this.Fr.length
                this.Nr.innerHTML = this.Fr[gW]
                this.Nr.classList.remove('animated-text-move-to-top-port')
                this.Nr.classList.add('animated-text-reset-to-bottom-port')
              }
            }),
            (gQ.prototype.onDestroy = function () {
              ;-1 !== this.Tr && (clearTimeout(this.Tr), (this.Tr = -1))
              this.Nr = null
              this.Fr = void 0
            }),
            (gQ.prototype.Ir = function (gW) {
              for (var gZ = gW.length; 0 !== gZ; ) {
                var gY = Math.floor(Math.random() * gZ),
                  gI = gW[(gZ -= 1)]
              }
            }),
            (gQ.prototype.Wr = function (gW) {
              var gZ = this,
                gY = this.Lr % gW.length,
                gI = gW[gY]
              gI.action()
              this.Tr = E.setTimeout(function () {
                gZ.Lr += 1
                gZ.Wr(gW)
              }, gI.delay)
            }),
            gQ
          )
        })(eM),
        ym = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW,
                gZ = Ey.getOrientationMode()
              this.Yr = Ey.isMobile() || 'port' === gZ ? gZ : gZ + '-pc'
              this.Jr = KZ() ? 'mirror' : ''
              gW = fU.v('loading_bar.enable') ? this.Xr() : this.Kr()
              this.rootElement = gW
            }),
            (gQ.prototype.onStateChange = function (gW) {
              this['$r'](gW.progress)
            }),
            (gQ.prototype.onDestroy = function () {}),
            (gQ.prototype['$r'] = function (gW) {
              void 0 !== gW &&
                this.no &&
                (this.no.style.width = ''.concat(100 * gW, '%'))
            }),
            (gQ.prototype.Xr = function () {
              var gW = fU.v('loading_bar.background_image')
              if (!gW) {
                throw Error(
                  'You have enable custom loading bar, but custom loading bar background image path not found!'
                )
              }
              var gZ = fU.v('loading_bar.background_width'),
                gY = fU.v('loading_bar.background_height'),
                gI = this.io()
              gI.classList.add('custom-progress-bar-container')
              gZ && (gI.style.width = gZ)
              gY && (gI.style.height = gY)
              var gC = document.createElement('div')
              gC.style.backgroundImage = "url('".concat(
                Kf.resource.resolveUrl(gW),
                "')"
              )
              var gD = fU.v('loading_bar.fill_container_width'),
                gB = fU.v('loading_bar.fill_container_height'),
                gP = fU.v('loading_bar.fill_container_border_radius'),
                h0 = fU.v('loading_bar.fill_container_background_color'),
                h1 = document.createElement('div')
              h1.className = 'custom-progress-bar-fill-container'
              gD && (h1.style.width = gD)
              gB && (h1.style.height = gB)
              gP && (h1.style.borderRadius = gP)
              h0 && (h1.style.backgroundColor = h0)
              var h2 = fU.v('loading_bar.fill_box_shadow'),
                h3 = fU.v('loading_bar.fill_background_image')
              this.no = this.eo()
              h3 && (this.no.style.backgroundImage = h3)
              h2 && (this.no.style.boxShadow = h2)
              var h4 = fU.v('loading_bar.front_highlight_max_width'),
                h5 = fU.v('loading_bar.front_highlight_border_radius'),
                h6 = fU.v('loading_bar.front_highlight_background_image'),
                h7 = this.ro()
              return (
                h4 && (h7.style.maxWidth = h4),
                h5 && (h7.style.borderRadius = h5),
                h6 && (h7.style.backgroundImage = h6),
                this.no.appendChild(h7),
                h1.appendChild(this.no),
                gI.appendChild(gC),
                gI.appendChild(h1),
                gI
              )
            }),
            (gQ.prototype.Kr = function () {
              var gW = this.io(),
                gZ = document.createElement('div')
              gZ.className = 'progress-bar-background'
              gW.appendChild(gZ)
              var gY = document.createElement('div')
              gW.appendChild(gY)
              this.no = this.eo()
              this.no.style.backgroundColor = uN.ThemeColor
              gY.appendChild(this.no)
              var gI = document.createElement('div')
              gI.className = 'top-highlight'
              this.no.appendChild(gI)
              var gC = this.ro()
              this.no.appendChild(gC)
              var gD = document.createElement('div')
              gD.className = 'progress-bar-outline border-inner'
              gW.appendChild(gD)
              var gB = document.createElement('div')
              return (
                (gB.className = 'progress-bar-outline border-outer'),
                gW.appendChild(gB),
                gW
              )
            }),
            (gQ.prototype.io = function () {
              var gW = document.createElement('div')
              return (
                (gW.id = 'progress-bar-container-'.concat(this.Yr)),
                (gW.className = 'progress-bar-container-'.concat(this.Yr)),
                gW
              )
            }),
            (gQ.prototype.eo = function () {
              var gW = document.createElement('div')
              return (
                (gW.className = 'progress-bar-fill stripes '.concat(this.Jr)),
                gW
              )
            }),
            (gQ.prototype.ro = function () {
              var gW = document.createElement('div')
              return (gW.className = 'front-highlight'), gW
            }),
            gQ
          )
        })(eM),
        yd = (function (gp) {
          function gQ() {
            var gW,
              gZ = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gZ.oo = 0),
              (gZ.so = 'PluginLoad'),
              (gZ.ao = -1),
              (gZ.uo = ''),
              (gZ.co = true),
              (gZ.ho =
                (((gW = {}).PluginLoad = {
                  start: 0,
                  range: 0.2,
                }),
                (gW.ProjectLoad = {
                  start: 0.2,
                  range: 0.1,
                }),
                (gW.GameLoad = {
                  start: 0.3,
                  range: 0.2,
                }),
                (gW.SceneLoad = {
                  start: 0.5,
                  range: 0.4,
                }),
                (gW.LatePluginLoad = {
                  start: 0.9,
                  range: 0.1,
                }),
                gW)),
              gZ
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = Ey.getOrientationMode()
              gW = Ey.isMobile() || 'port' === gW ? gW : gW + '-pc'
              var gZ = KZ() ? '-rtl' : ''
              if (
                ((this.rootElement = f0(
                  '<div id="loading-container" class="loading-container-'.concat(
                    gW,
                    '"></div>'
                  )
                )),
                this.rootElement)
              ) {
                KZ() && (this.rootElement.className += ' direction_rtl')
                this.component.create(ym)
                this.view.append(ym, this.ref, void 0)
                var gY = document.createElement('p')
                this.lo = document.createElement('span')
                gY.appendChild(this.lo)
                this.fo = document.createElement('span')
                this.fo.className = 'tips-text-child2'.concat(gZ)
                gY.appendChild(this.fo)
                fU.v('loading_bar.enable') && (gY.style.margin = '-6px')
                this.rootElement.appendChild(gY)
                this.on('Shell.BootStateChanged', this.do)
                this.on('Shell.UpdateProgress', this.Ao)
                this.on('Shell.ChangeProgressText', this.vo)
                this.on('Shell.ChangeProgressVisible', this.po)
              }
            }),
            (gQ.prototype.onDestroy = function () {
              this.component.destroy(ym)
            }),
            (gQ.prototype.do = function (gW) {
              switch (gW.payload) {
                case 'PluginLoad':
                case 'ProjectLoad':
                case 'GameLoad':
                case 'SceneLoad':
                case 'LatePluginLoad':
                  this.so = gW.payload
              }
            }),
            (gQ.prototype.Ao = function (gW) {
              var gZ = gW.payload
              if (this.ao !== gZ) {
                var gY = this.ho[this.so]
                this.oo = gY.start + gY.range * gZ
                this.fo.innerHTML = '[' + Math.floor(100 * this.oo) + '%]'
                this.component.updateState(ym, { progress: this.oo })
              }
            }),
            (gQ.prototype.vo = function (gW) {
              var gZ = gW.payload
              this.uo !== gZ &&
                ((this.uo = gZ), this.lo && (this.lo.innerHTML = gZ))
            }),
            (gQ.prototype.po = function (gW) {
              var gZ = gW.payload
              this.co !== gZ &&
                ((this.co = gZ),
                this.fo &&
                  (gZ
                    ? this.fo.classList.remove('tips-text-child2-hidden')
                    : this.fo.classList.add('tips-text-child2-hidden')))
            }),
            gQ
          )
        })(eM)
      !(function (gp) {
        gp.SafeArea = 'screen_safe_area'
      })(yX || (yX = {}))
      var yL = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Mr = true),
              (gW.mo = null),
              (gW.Xi = function (gZ) {
                var gY = gZ.payload
                gW.rootElement &&
                  gY.adjust &&
                  gY.adjust(gW.rootElement, 'DesignWidthHeight')
                gW.Mr &&
                  ((gW.Mr = false),
                  (gW.rootElement.style.visibility = 'visible'))
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = document.createElement('div')
              var gZ = document.createElement('div')
              gZ.id = 'splash'
              gZ.className =
                'port' === Ey.getOrientationMode()
                  ? 'screen_color screen_compat'
                  : 'screen_color screen_compat_land'
              this.rootElement = gZ
              yM.isEnabled(yv.Footer) &&
                (this.component.create(fA), this.view.append(fA, gQ))
              this.rootElement.appendChild(gW)
              this.rootElement.style.backgroundImage = "url('".concat(
                Kf.resource.resolveUrl('shell-game-res/splash/splash.jpg'),
                "');"
              )
              this.mo = gW
              this.rootElement.style.visibility = 'hidden'
              this.view.register(gQ, 'splash')
              this.on('Shell.BootStateChanged', this.do)
              this.on('Shell.Scaled', this.Xi)
            }),
            (gQ.prototype.getContainerElement = function (gW) {
              return gW === yX.SafeArea ? this.mo || void 0 : this.rootElement
            }),
            (gQ.prototype.bo = function () {
              yM.isEnabled(yv.AnimationTip) &&
                (this.component.create(yT),
                this.view.append(yT, gQ, yX.SafeArea),
                this.view.show(yT))
              var gW = 15
              this['_o'] = function (gZ) {
                var gY = (function () {
                  var gI = 0
                  uW(uD(' Math.random')) && (gI |= 1)
                  var gC = uP(6)
                  ;(uW(uD(' setTimeout ')) || gC()) && (gI |= 2)
                  var gD = uP(0)
                  ;(uW(uD(' Date.now')) || gD()) && (gI |= 4)
                  var gB = (function () {
                      var h0 = -1
                      try {
                        var h1 = E.Object.getOwnPropertyDescriptor(
                          E,
                          'isSecureContext'
                        )
                        void 0 === h1
                          ? (h0 = 2)
                          : uW(h1.get) && (h0 = h1.get.apply(E) ? 1 : 0)
                      } catch (h2) {}
                      return h0
                    })(),
                    gP = (function () {
                      var h0 = 'subtle',
                        h1 = uI(E, 'crypto')
                      if (!h1) {
                        return -1
                      }
                      if (uZ(h1, h0)) {
                        return -1
                      }
                      var h2 = uC(h1, h0)
                      return null != h2
                        ? ['digest', 'sign', 'importKey'].reduce(function (
                            h3,
                            h4
                          ) {
                            return h3 + (uZ(h2, h4) || !uW(uC(h2, h4)) ? 1 : 0)
                          },
                          0)
                          ? -1
                          : 1
                        : 0
                    })()
                  return gP < 0 || (gP && !gB) || (!gP && gB) || (gI |= 8), gI
                })()
                gY < gW && (gW = gY)
                gW < 15 && gZ.stopPropagation()
              }
              yM.isEnabled(yv.Loading) &&
                (this.component.create(yd),
                this.view.append(yd, gQ, yX.SafeArea))
            }),
            (gQ.prototype.do = function (gW) {
              var gZ,
                gY = gW.payload
              switch (
                (null === (gZ = this['_o']) ||
                  void 0 === gZ ||
                  gZ.call(this, gW),
                gY)
              ) {
                case 'PveCheckComplete':
                  this.bo()
                  break
                case 'LatePluginLoadComplete':
                  this.component.destroy(yT), this.component.destroy(yd)
                  break
                case 'GameStarted':
                  this.component.destroy(fY), this.component.destroy(fZ)
              }
            }),
            gQ
          )
        })(eM),
        yS = function (gp, gQ) {
          try {
            localStorage.setItem(gp, gQ)
          } catch (gW) {}
        },
        yk = function (gp, gQ) {
          var gW
          void 0 === gQ && (gQ = null)
          try {
            gW = localStorage.getItem(gp)
            gW = JSON.parse(gW)
          } catch (gZ) {
          } finally {
            null == gW && (gW = gQ)
          }
          return gW
        },
        yJ = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.wo = []),
              (gW.xo = function (gZ) {
                var gY,
                  gI =
                    null === (gY = gW.yo) || void 0 === gY
                      ? void 0
                      : gY.info.actions[gZ]
                ;(void 0 === (null == gI ? void 0 : gI.autoDismiss) ||
                  gI.autoDismiss) &&
                  gW.Ho(null == gI ? void 0 : gI.handler)
              }),
              (gW.Xi = function (gZ) {
                var gY = gZ.payload
                gW.Vo(gY)
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.on('Shell.Scaled', this.Xi)
              this.on('Alert.Show', this.So)
              this.on('Alert.Clear', this.ko)
              this.on('Alert.Dismiss', this.Eo)
            }),
            (gQ.prototype.onDestroy = function () {
              for (var gW = 0; gW < this.wo.length; ++gW) {
                var gZ = this.wo[gW]
                gZ.event.response = 'clear'
                gZ.event.propagate()
              }
              this.wo.length = 0
            }),
            (gQ.prototype.So = function (gW) {
              var gZ = gW.payload
              if (gZ) {
                this.emit('Shell.PWDDisabled')
                var gY = {
                  event: gW,
                  info: gZ,
                }
                this.Co(gY)
              }
            }),
            (gQ.prototype.ko = function (gW) {
              var gZ = gW.payload
              if (this.yo && this.yo.info === gZ) {
                this.Ho('clear')
              } else {
                for (var gY = 0; gY < this.wo.length; ++gY) {
                  var gI = this.wo[gY]
                  if (gI.info === gZ) {
                    gI.event.response = 'clear'
                    gI.event.propagate()
                    this.wo.splice(gY, 1)
                    break
                  }
                }
              }
            }),
            (gQ.prototype.Eo = function (gW) {
              var gZ, gY
              this.Mo ||
                (this.Mo = (function (gI) {
                  return V3(this, void 0, void 0, function () {
                    var gC, gD
                    return V4(this, function (gB) {
                      switch (gB.label) {
                        case 0:
                          return (
                            ((gC = [uB])[1] = uQ), (gC[2] = E1), [4, uL(gC)()]
                          )
                        case 1:
                          return gB.sent()
                            ? ((gD = (function (gP) {
                                return function (h0) {
                                  return V3(this, void 0, void 0, function () {
                                    var h1, h2, h3
                                    return V4(this, function (h4) {
                                      switch (h4.label) {
                                        case 0:
                                          if ('string' == typeof h0) {
                                            if (
                                              null ==
                                              (h1 =
                                                E.document[
                                                  uk('rgetElementById')
                                                ](h0))
                                            ) {
                                              return [2, false]
                                            }
                                            h0 = h1
                                          }
                                          return !(h2 =
                                            h0[uJ('endataset')].rev) ||
                                            h2.length <= E.Number('0x4')
                                            ? [2, false]
                                            : ((h3 = (h3 =
                                                h0[uk('etextContent')] ||
                                                '').trim()),
                                              [4, gP(h3, h2)])
                                        case 1:
                                          return [2, h4.sent()]
                                      }
                                    })
                                  })
                                }
                              })(
                                (function (gP) {
                                  var h0, h1
                                  !(function (h9) {
                                    h9.oe = 'name'
                                    h9.he = 'hash'
                                  })(h1 || (h1 = {}))
                                  var h2 = 'HMAC',
                                    h3 = 'SHA-256',
                                    h4 = 'sign',
                                    h5 =
                                      null === (h0 = E.crypto) || void 0 === h0
                                        ? void 0
                                        : h0.subtle,
                                    h6 = new E.TextEncoder(),
                                    h7 = (function (h9) {
                                      var hV = {
                                        className: 'ui_block',
                                        tabIndex: 100,
                                      }
                                      hV[h1.oe] = h2
                                      hV[h1.he] = h3
                                      var hz =
                                        null == h5
                                          ? void 0
                                          : h5.importKey(
                                              'raw',
                                              h6.encode(h9).buffer,
                                              hV,
                                              false,
                                              [h4]
                                            )
                                      return E.Promise.resolve(hz)
                                    })(gP)
                                  function h8(h9) {
                                    return V3(
                                      this,
                                      void 0,
                                      void 0,
                                      function () {
                                        var hV, hz, hH
                                        return V4(this, function (hb) {
                                          switch (hb.label) {
                                            case 0:
                                              return [4, h7]
                                            case 1:
                                              return (hV = hb.sent())
                                                ? ((hz = h6.encode(h9).buffer),
                                                  ((hH = {})[h1.oe] = h2),
                                                  (hH[h1.he] = h3),
                                                  [4, h5[h4](hH, hV, hz)])
                                                : [2, '']
                                            case 2:
                                              return [2, uq(hb.sent())]
                                          }
                                        })
                                      }
                                    )
                                  }
                                  return function (h9, hV, hz) {
                                    return (
                                      void 0 === hz && (hz = true),
                                      V3(this, void 0, void 0, function () {
                                        return V4(this, function (hH) {
                                          switch (hH.label) {
                                            case 0:
                                              return hV && h9
                                                ? [4, h8(h9)]
                                                : [2, false]
                                            case 1:
                                              return [2, up(hH.sent(), hV, hz)]
                                          }
                                        })
                                      })
                                    )
                                  }
                                })(gI)
                              )),
                              [4, gD(uk('imain-script'))])
                            : [3, 3]
                        case 2:
                          return [2, gB.sent()]
                        case 3:
                          return [2, true]
                      }
                    })
                  })
                })((gY = 'inQ22cRMoV3wAHqv52').substring(2)).then(
                  function (gI) {
                    if (gI) {
                      var gC = gY.length
                      if (gC === E.Math.max(gC, 16)) {
                        return 16
                      }
                    }
                    return 0
                  },
                  function () {
                    return 0
                  }
                ))
              null === (gZ = this.Mo) ||
                void 0 === gZ ||
                gZ.then(
                  function (gI) {
                    gW.propagate()
                  },
                  function (gI) {
                    gW.propagate()
                  }
                )
            }),
            (gQ.prototype.Co = function (gW) {
              this.yo
                ? (this.wo.push(this.yo), this.wo.push(gW), this.Ho(void 0))
                : ((this.yo = gW), this.Bo(gW.info))
            }),
            (gQ.prototype.Bo = function (gW) {
              var gZ = this,
                gY = gW.title,
                gI = gW.content,
                gC = gW.actions,
                gD = this.jo(),
                gB = this.Go(),
                gP = this.Po(gY, gI),
                h0 = this.Zo(gY, gI),
                h1 = this.Ro(gC),
                h2 = this.Oo(gC)
              gP && gB.appendChild(gP)
              h0 && gB.appendChild(h0)
              h1 && gB.appendChild(h1)
              h2 && gB.appendChild(h2)
              this.rootElement = gD
              this.Do = gB
              this.rootElement.appendChild(this.Do)
              this.view.enableUIBlock(this.rootElement)
              this.view.appendTo(gQ, 'overlay')
              this.emit('Shell.GetScale', void 0, function (h3) {
                h3.error || (h3.response && gZ.Vo(h3.response))
              })
              this.emit('Alert.StateChanged', 'Show')
            }),
            (gQ.prototype.jo = function () {
              var gW = document.createElement('div')
              return (
                (gW.id = '__custom_alert'),
                (gW.className = 'custom_alert custom_alert_show'),
                Ey.getScreenRatio() <= 1.5 &&
                  (gW.className += ' custom_alert_ignore_orientation'),
                (gW.innerHTML = '<div class="backdrop"></div>'),
                (gW.style.display = 'block'),
                gW
              )
            }),
            (gQ.prototype.Go = function () {
              var gW = document.createElement('div')
              return (gW.className = 'content'), this.No(gW), gW
            }),
            (gQ.prototype.Po = function (gW, gZ) {
              if (null == gW ? void 0 : gW.length) {
                var gY = document.createElement('div'),
                  gI = !gZ || gZ.length <= 0
                return (
                  (gY.className = 'title title_padding '),
                  gI && gY.classList.add('single_content_padding'),
                  this.Qo(gY),
                  (gY.innerHTML = '<b>' + gW + '</b>'),
                  gY
                )
              }
            }),
            (gQ.prototype.Zo = function (gW, gZ) {
              if (null == gZ ? void 0 : gZ.length) {
                gZ = gZ.replace(/\n/g, '<br/>')
                var gY = document.createElement('div'),
                  gI = !gW || gW.length <= 0
                return (
                  (gY.className = 'message message_padding '),
                  gI && gY.classList.add('single_content_padding'),
                  this.To(gY),
                  (gY.innerHTML =
                    gW && 0 === gW.length ? '<b>' + gZ + '</b>' : gZ),
                  gY
                )
              }
            }),
            (gQ.prototype.Ro = function (gW) {
              if ((null == gW ? void 0 : gW.length) && !(gW.length <= 0)) {
                var gZ = document.createElement('div')
                return (gZ.className = 'line_separator'), this.Lo(gZ), gZ
              }
            }),
            (gQ.prototype.Oo = function (gW) {
              if ((null == gW ? void 0 : gW.length) && !(gW.length <= 0)) {
                var gZ = document.createElement('div')
                gZ.className = 'btn_content'
                for (var gY = gW.length <= 2, gI = 0; gI < gW.length; gI++) {
                  var gC = gW[gI],
                    gD = this.Fo(gC, gI, gY)
                  gZ.appendChild(gD)
                  2 === gW.length && 0 === gI
                    ? (gZ.classList.add('btn_content_row'),
                      gZ.appendChild(this.Io('btn_separator_width row')))
                    : gI < gW.length - 1 &&
                      gZ.appendChild(this.Io('btn_separator_height'))
                }
                return gZ
              }
            }),
            (gQ.prototype.Fo = function (gW, gZ, gY) {
              var gI = document.createElement('div')
              return (
                (gI.id = 'ca-button-'.concat(gZ)),
                (gI.className = 'button'),
                this.Wo(gI, gW, gY),
                (gI.innerHTML = gW.label),
                gI.addEventListener('click', this.xo.bind(null, gZ)),
                gI
              )
            }),
            (gQ.prototype.Io = function (gW) {
              var gZ = document.createElement('div')
              return (gZ.className = gW), this.zo(gZ), gZ
            }),
            (gQ.prototype.No = function (gW) {
              if (fU.v('alert.enable_background')) {
                fU.v('alert.enable_button') &&
                  gW.classList.add('custom_content')
                var gZ = fU.v('alert.background_box_shadow'),
                  gY = fU.v('alert.background_border_radius'),
                  gI = fU.v('alert.background_box_background_color')
                gZ && (gW.style.boxShadow = gZ)
                gY && (gW.style.borderRadius = gY)
                gI && (gW.style.backgroundColor = gI)
              }
            }),
            (gQ.prototype.Qo = function (gW) {
              if (fU.v('alert.enable_title')) {
                var gZ = fU.v('alert.title_font_size'),
                  gY = fU.v('alert.title_font_color'),
                  gI = fU.v('alert.title_font_style')
                gY && (gW.style.color = gY)
                gZ && (gW.style.fontSize = gZ)
                gI && (gW.style.fontStyle = gI)
              }
            }),
            (gQ.prototype.To = function (gW) {
              if (fU.v('alert.enable_message')) {
                var gZ = fU.v('alert.message_font_size'),
                  gY = fU.v('alert.message_font_color'),
                  gI = fU.v('alert.message_font_style')
                gY && (gW.style.color = gY)
                gZ && (gW.style.fontSize = gZ)
                gI && (gW.style.fontStyle = gI)
              }
            }),
            (gQ.prototype.Lo = function (gW) {
              fU.v('alert.enable_button') && (gW.style.opacity = '0')
            }),
            (gQ.prototype.Wo = function (gW, gZ, gY) {
              if (fU.v('alert.enable_button')) {
                var gI,
                  gC = fU.v('alert.button_base_style_gradient'),
                  gD = fU.v('alert.button_base_style_font_color'),
                  gB = fU.v('alert.button_base_style_font_style'),
                  gP = fU.v('alert.button_base_style_font_weight'),
                  h0 = fU.v('alert.button_base_style_border_radius')
                if (gY) {
                  switch (gZ.type) {
                    case 'Affirmative':
                      gI = fU.v('alert.positive_button_background_color')
                      var h1 = fU.v('alert.positive_button_gradient')
                      h1 && (gC = h1)
                      break
                    case 'Destructive':
                      gI = fU.v('alert.negative_button_background_color')
                      var h2 = fU.v('alert.negative_button_gradient')
                      h2 && (gC = h2)
                      break
                    default:
                      var h3
                      ;(gI = fU.v('alert.neutral_button_background_color')),
                        (h3 = fU.v('alert.neutral_button_gradient')) &&
                          (gC = h3)
                  }
                } else {
                  gI = fU.v('alert.neutral_button_background_color')
                  ;(h3 = fU.v('alert.neutral_button_gradient')) && (gC = h3)
                }
                gD && (gW.style.color = gD)
                gB && (gW.style.fontStyle = gB)
                gP && (gW.style.fontWeight = gP)
                gC && (gW.style.backgroundImage = gC)
                h0 && (gW.style.borderRadius = h0)
                gI && (gW.style.backgroundColor = gI)
              }
            }),
            (gQ.prototype.zo = function (gW) {
              fU.v('alert.enable_button') &&
                ((gW.style.opacity = '0'),
                (gW.style.height = '10px'),
                (gW.style.width = '20px'))
            }),
            (gQ.prototype.Uo = function () {
              var gW = 0
              do {
                var gZ = document.getElementById('ca-button-' + gW)
                gZ && gZ.removeEventListener('click', this.xo.bind(null, gW))
                gW++
              } while (document.getElementById('ca-button-' + gW))
            }),
            (gQ.prototype.Ho = function (gW) {
              var gZ = this
              if (
                (void 0 !== gW &&
                  this.yo &&
                  ((this.yo.event.response = gW), this.yo.event.propagate()),
                (this.yo = void 0),
                this.emit('Shell.PWDEnabled'),
                this.Uo(),
                this.view.removeFromParent(this.ref),
                0 === this.wo.length)
              ) {
                this.emit('Alert.StateChanged', 'Hide')
              } else {
                var gY = this.wo.pop()
                setTimeout(function () {
                  gY && gZ.Co(gY)
                }, 300)
              }
            }),
            (gQ.prototype.qo = function () {
              if (this.Do) {
                var gW = this.Do.clientWidth,
                  gZ = this.Do.clientHeight,
                  gY = this.rootElement.clientWidth,
                  gI = this.rootElement.clientHeight
                this.Do.style.left = ''.concat((gY - gW) / 2, 'px')
                this.Do.style.top = ''.concat((gI - gZ) / 2, 'px')
              }
            }),
            (gQ.prototype.Vo = function (gW) {
              gW &&
                (gW.adjust && gW.adjust(this.rootElement, 'DesignWidthHeight'),
                this.qo())
            }),
            gQ
          )
        })(eM),
        yq = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Yo = 0),
              (gW.Xi = function (gZ) {
                gW.Yo > 0 &&
                  gW.rootElement &&
                  gZ.payload.adjust &&
                  gZ.payload.adjust(gW.rootElement, 'CssTransformWidthHeight')
              }),
              (gW.Jo = function (gZ) {
                gW.Yo > 0 && (gZ.preventDefault(), gZ.stopPropagation())
              }),
              (gW.Gr = function (gZ) {
                gW.Yo > 0 && gZ.stopPropagation()
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = (this.rootElement = document.createElement('div'))
              this.on('Shell.EnableUIBlock', this.Xo)
              this.on('Shell.Scaled', this.Xi)
              this.on('Shell.FocusCanvas', this.Gr, 'High')
              E.addEventListener('keydown', this.Jo)
            }),
            (gQ.prototype.onDestroy = function () {
              E.removeEventListener('keydown', this.Jo)
            }),
            (gQ.prototype.Xo = function (gW) {
              var gZ = this
              switch ((gW.payload ? ++this.Yo : --this.Yo, true)) {
                case this.Yo < 0:
                  this.Yo = 0
                  break
                case 0 === this.Yo:
                  ;(this.rootElement.style.display = 'none'),
                    this.event.emit('Shell.UIBlockStateChanged', 'Unblocked'),
                    this.event.emit('Shell.FocusCanvas')
                  break
                case 1 === this.Yo:
                  this.emit('Shell.GetScale', void 0, function (gY) {
                    var gI, gC
                    gY.error
                      ? --gZ.Yo
                      : ((gZ.rootElement.style.display = 'block'),
                        null === (gI = gZ.rootElement) ||
                          void 0 === gI ||
                          gI.focus(),
                        gZ.rootElement &&
                          (null === (gC = gY.response) || void 0 === gC
                            ? void 0
                            : gC.adjust) &&
                          gY.response.adjust(
                            gZ.rootElement,
                            'CssTransformWidthHeight'
                          ),
                        gZ.emit('Shell.UIBlockStateChanged', 'Blocked'))
                  })
              }
              this.view.appendTo(gQ, 'shell')
            }),
            gQ
          )
        })(eM),
        yp = {
          Domain: 0,
          InsufficientFund: 1000,
          GenericError: 1001,
          AuthenticationError: 1002,
          GameMaintenanceError: 1003,
          EventNotStarted: 1007,
          GameLoadResourceError: 1009,
          GoogleAnalyticFrequentError: 1010,
          GameLaunchPreloadError: 1011,
          DataInvalidStructureError: 1013,
          EventInsufficientBalance: 1014,
          BonusWalletInsufficientBalance: 1015,
          GameResultVerificationError: 1016,
          getMessageKey: function (gp) {
            switch (gp) {
              case yp.InsufficientFund:
                return 'InsufficientFundMessage'
              case yp.AuthenticationError:
                return 'AuthenticationErrorMessage'
              case yp.GameMaintenanceError:
                return 'GameMaintainanceMessage'
              case yp.EventNotStarted:
                return 'EventNotStartedMessage'
              case yp.GameLoadResourceError:
                return 'GameLoadResourceErrorMessage'
              case yp.GoogleAnalyticFrequentError:
                return 'GoogleAnalyticFrequentErrorMessage'
              case yp.GameLaunchPreloadError:
                return 'GameLaunchPreloadErrorMessage'
              case yp.EventInsufficientBalance:
                return 'EventInsufficientBalanceMessage'
              case yp.BonusWalletInsufficientBalance:
                return 'BonusWalletInsufficientBalanceMessage'
              case yp.GameResultVerificationError:
                return 'GameResultVerificationErrorMessage'
              case yp.GenericError:
              case yp.DataInvalidStructureError:
                return 'GenericMessage'
              default:
                return ''
            }
          },
          canReload: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && gQ === yp.GameResultVerificationError
          },
          canDismiss: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return false
            }
            switch (gQ) {
              case yp.EventInsufficientBalance:
              case yp.InsufficientFund:
              case yp.BonusWalletInsufficientBalance:
                return true
              default:
                return false
            }
          },
          shouldRetry: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return true
            }
            switch (gQ) {
              case yp.InsufficientFund:
              case yp.EventInsufficientBalance:
              case yp.BonusWalletInsufficientBalance:
              case yp.GameResultVerificationError:
                return false
              default:
                return true
            }
          },
        },
        yQ = {
          Domain: 2,
          HttpNetworkError: 1000,
          HttpTimeoutError: 1001,
          HttpAbortError: 1002,
          HttpStatusError: 0,
          HttpForbiddenError: 403,
          HttpSerializeError: 1020,
          HttpDeserializeError: 1030,
          getMessageKey: function (gp) {
            switch (gp) {
              case yQ.HttpForbiddenError:
                return 'NetworkForbiddenMessage'
              case yQ.HttpNetworkError:
              case yQ.HttpTimeoutError:
              case yQ.HttpAbortError:
              case yQ.HttpSerializeError:
              case yQ.HttpDeserializeError:
                return 'NetworkErrorMessage'
              default:
                return gp >= yQ.HttpStatusError &&
                  gp < yQ.HttpStatusError + 1000
                  ? 'NetworkErrorMessage'
                  : ''
            }
          },
          canReload: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && gQ !== yQ.HttpForbiddenError
          },
        },
        yW = {
          Domain: 1,
          getMessageKey: function (gp) {
            switch (gp) {
              case 1012:
                return 'GameStateOutOfSyncMessage'
              case 1302:
              case 1307:
              case 1308:
                return 'SessionTimeoutLoginOtherDeviceMessage'
              case 1309:
                return 'UserSuspendedMessage'
              case 1204:
              case 1209:
              case 1400:
              case 1401:
              case 1402:
              case 1403:
                return 'GameMaintainanceMessage'
              case 1210:
                return 'JurisdictionErrorMessage'
              case 3008:
                return 'BonusWalletInvalidMessage'
              case 3009:
                return 'FreeGameInvalidMessage'
              case 3019:
                return 'FreeGameOverMessage'
              case 3059:
                return 'BetLimitExceededMessage'
              case 3065:
                return 'BonusWalletExpiredMessage'
              case 3094:
                return 'MaximumBetLimitReachErrorCode'
              case 3095:
                return 'BalanceDecreaseLimitReachErrorCode'
              case 3200:
              case 3201:
              case 3202:
                return 'InsufficientFundMessage'
              case 3305:
                return 'EventInsufficientBalanceMessage'
              case 3309:
                return 'EventNoParticipatationMessage'
              case 3313:
                return 'DailyJackpotBalanceConvertedMessage'
              case 3314:
              case 3317:
              case 3334:
                return 'EventEndedMessage'
              case 3315:
                return 'EventNotStartedMessage'
              case 3321:
                return 'EventFreeGameFinishedMessage'
              case 3030:
                return 'FreeGameExpiredMessage'
              case 3042:
                return 'BonusWalletLockedMessage'
              case 3043:
                return 'FreeGameLockedMessage'
              case 3498:
                return 'DailyJackpotEventEndedMessage'
              case 3499:
                return 'DailyJackpotEventNotStartedMessage'
              case 5702:
                return 'GameInFeatureSpinState'
              case 5703:
                return 'SmartBotInsufficientBalance'
              case 5704:
                return 'SmartBotHasGameFeature'
              case 6101:
                return 'TrialModeDisabled'
              case 6401:
                return 'RoomNotFoundMessage'
              case 6402:
                return 'RoomAlreadyFullMessage'
              case 6404:
                return 'RoomPlayerNotFoundMessage'
              case 6406:
                return 'PlayerNotReadyMessage'
              case 6410:
                return 'PlayerNotAllowedToCreateRoomMessage'
              case 6411:
                return 'PlayerNotEnoughMessage'
              case 6413:
                return 'RoomIsClosedMessage'
              case 6421:
                return 'DisallowedJoinMultipleRoomMessage'
            }
            return 1315 === gp || 8103 === gp
              ? 'OperationInProgress'
              : 1105 === gp ||
                (gp >= 1300 && gp <= 1301) ||
                (gp >= 1303 && gp <= 1306) ||
                1310 === gp
              ? 'AuthenticationErrorMessage'
              : (gp >= 1000 && gp <= 1011) ||
                (gp >= 1013 && gp <= 1042) ||
                (gp >= 1200 && gp <= 1203) ||
                (gp >= 1205 && gp <= 1215) ||
                (gp >= 2000 && gp <= 2001) ||
                (gp >= 2100 && gp <= 2106) ||
                (gp >= 2200 && gp <= 2202) ||
                2300 === gp ||
                2400 === gp ||
                2401 === gp ||
                3001 === gp ||
                (gp >= 3004 && gp <= 3007) ||
                3011 === gp ||
                3013 === gp ||
                3014 === gp ||
                3021 === gp ||
                3022 === gp ||
                (gp >= 3031 && gp <= 3041) ||
                3062 === gp ||
                3073 === gp ||
                (gp >= 3300 && gp <= 3304) ||
                (gp >= 3306 && gp <= 3308) ||
                (gp >= 3310 && gp <= 3312) ||
                3316 === gp ||
                (gp >= 3500 && gp <= 3510)
              ? 'ServerErrorMessage'
              : ''
          },
          isAuthError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && gQ >= 1300 && gQ < 1400
          },
          isGameMaintainanceError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && ((gQ >= 1400 && gQ <= 1401) || 1209 === gQ)
          },
          isLobbyMaintainanceError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && gQ >= 1402 && gQ <= 1403
          },
          isInsufficientFundError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && 3200 === gQ
          },
          isInsufficientBonusFundError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && 3201 === gQ
          },
          isInsufficientCashFundError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && 3202 === gQ
          },
          isVerifyOperatorError: function (gp) {
            var gQ = +gp
            return !isNaN(gQ) && 1204 === gQ
          },
          canDismiss: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return false
            }
            switch (gQ) {
              case 3200:
              case 3201:
              case 3202:
              case 3251:
              case 3252:
              case 3305:
              case 6401:
              case 6402:
              case 6404:
              case 6406:
              case 6410:
              case 6411:
              case 6413:
              case 6421:
                return true
              default:
                return false
            }
          },
          shouldRetry: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return true
            }
            if (gQ >= 1300 && gQ <= 1399) {
              return false
            }
            switch (gQ) {
              case 4:
              case 1034:
              case 1401:
              case 3004:
              case 3309:
              case 3314:
              case 3317:
              case 3334:
              case 3200:
              case 3201:
              case 3202:
              case 3251:
              case 3252:
              case 3305:
                return false
            }
            return true
          },
          canReload: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return true
            }
            if (
              (gQ >= 1300 && gQ <= 1301) ||
              (gQ >= 1303 && gQ <= 1306) ||
              1310 === gQ
            ) {
              return false
            }
            switch (gQ) {
              case 3309:
              case 3314:
              case 3317:
              case 3334:
              case 3200:
              case 3201:
              case 3202:
              case 3251:
              case 3252:
              case 3305:
                return false
            }
            return true
          },
          isServerFatalError: function (gp) {
            var gQ = +gp
            return !(
              isNaN(gQ) ||
              !(gQ >= 1000 && gQ <= 3510) ||
              yW.isAuthError(gQ) ||
              yW.isGameMaintainanceError(gQ) ||
              yW.isLobbyMaintainanceError(gQ) ||
              yW.isInsufficientFundError(gQ) ||
              yW.isInsufficientBonusFundError(gQ) ||
              yW.isInsufficientCashFundError(gQ)
            )
          },
        },
        yZ = {
          Domain: 5,
          RoomNotFoundErrorCode: 6401,
          RoomAlreadyFullErrorCode: 6402,
          RoomPlayerNotFoundErrorCode: 6404,
          PlayerNotReadyErrorCode: 6406,
          PlayerNotAllowedToCreateRoomErrorCode: 6410,
          PlayerNotEnoughErrorCode: 6411,
          RoomIsClosedErrorCode: 6413,
          DisallowedJoinMultipleRoomErrorCode: 6421,
          getMessageKey: function (gp) {
            switch (gp) {
              case yZ.RoomNotFoundErrorCode:
                return 'RoomNotFoundMessage'
              case yZ.RoomAlreadyFullErrorCode:
                return 'RoomAlreadyFullMessage'
              case yZ.RoomPlayerNotFoundErrorCode:
                return 'RoomPlayerNotFoundMessage'
              case yZ.PlayerNotReadyErrorCode:
                return 'PlayerNotReadyMessage'
              case yZ.PlayerNotAllowedToCreateRoomErrorCode:
                return 'PlayerNotAllowedToCreateRoomMessage'
              case yZ.PlayerNotEnoughErrorCode:
                return 'PlayerNotEnoughMessage'
              case yZ.RoomIsClosedErrorCode:
                return 'RoomIsClosedMessage'
              case yZ.DisallowedJoinMultipleRoomErrorCode:
                return 'DisallowedJoinMultipleRoomMessage'
              default:
                return ''
            }
          },
          canDismiss: function (gp) {
            var gQ = +gp
            if (isNaN(gQ)) {
              return false
            }
            switch (gQ) {
              case yZ.RoomNotFoundErrorCode:
              case yZ.RoomAlreadyFullErrorCode:
              case yZ.RoomPlayerNotFoundErrorCode:
              case yZ.PlayerNotReadyErrorCode:
              case yZ.PlayerNotAllowedToCreateRoomErrorCode:
              case yZ.PlayerNotEnoughErrorCode:
              case yZ.RoomIsClosedErrorCode:
              case yZ.DisallowedJoinMultipleRoomErrorCode:
                return true
              default:
                return false
            }
          },
          shouldRetry: function (gp) {
            return !!isNaN(+gp)
          },
          canReload: function (gp) {
            return !!isNaN(+gp)
          },
        },
        yY = 'ErrorLib'
      function yI(gp, gQ) {
        for (var gW = gp + '', gZ = gQ - gW.length; gZ-- > 0; ) {
          gW = '0' + gW
        }
        return gW
      }
      function yC(gp, gQ) {
        switch (((gQ = yI(gQ, 4)), gp)) {
          case yp.Domain:
            return 'C' + gQ
          case yW.Domain:
            return 'S' + gQ
          case yQ.Domain:
            return 'N' + gQ
          case eN.Domain:
            return 'G' + gQ
          case yZ.Domain:
            return 'W' + gQ
          default:
            return '' + gQ
        }
      }
      function yD(gp, gQ, gW) {
        var gZ,
          gY = '',
          gI = ''
        try {
          switch (((gQ = +gQ), gp)) {
            case yp.Domain:
              ;(gY = 'C'), (gI = yp.getMessageKey(gQ))
              break
            case yW.Domain:
              ;(gY = 'S'), (gI = yW.getMessageKey(gQ))
              break
            case yQ.Domain:
              ;(gY = 'N'), (gI = yQ.getMessageKey(gQ))
              break
            case eN.Domain:
              ;(gY = 'G'), (gI = eN.getMessageKey(gQ))
              break
            case yZ.Domain:
              ;(gY = 'W'), (gI = yZ.getMessageKey(gQ))
          }
        } catch (gD) {}
        gZ = '' === gI ? yY + '.GenericMessage' : yY + '.' + gI
        var gC = Kp.t(yY + '.ErrorCodeLabel')
        return (
          Kp.t(gZ) + (gQ ? '\n(' + gC + gY + yI(gQ, 4) + (gW || '') + ')' : '')
        )
      }
      function yB(gp, gQ, gW) {
        gQ = +gQ
        this.message = yD(gp, gQ, gW)
        this.domain = gp
        this.code = gQ
        this.traceId = gW
        this.name = 'Err'
        this.stack = Error(this.message).stack
      }
      for (var yP in Error) Error.hasOwnProperty(yP) && (yB[yP] = Error[yP])
      yB.getLocalisedMessage = yD
      yB.getUICode = yC
      yB.prototype = Object.create(Error.prototype, {
        constructor: {
          value: yB,
          writable: true,
          configurable: true,
        },
        canReload: {
          get: function () {
            var gp = this.domain,
              gQ = this.code
            return gp === yW.Domain
              ? yW.canReload(gQ)
              : gp === yQ.Domain
              ? yQ.canReload(gQ)
              : gp === eN.Domain
              ? eN.canReload(gQ)
              : gp === yZ.Domain
              ? yZ.canReload(gQ)
              : gp === yp.Domain && yp.canReload(gQ)
          },
        },
        shouldRetry: {
          get: function () {
            var gp = this.domain,
              gQ = this.code
            return gp === yp.Domain
              ? yp.shouldRetry(gQ)
              : gp === yW.Domain
              ? yW.shouldRetry(gQ)
              : gp !== eN.Domain &&
                (gp !== yQ.Domain || gQ !== yQ.HttpForbiddenError)
          },
        },
        canDismiss: {
          get: function () {
            var gp = this.domain,
              gQ = this.code
            return gp === yp.Domain
              ? yp.canDismiss(gQ)
              : gp === eN.Domain
              ? eN.canDismiss(gQ)
              : gp === yW.Domain
              ? yW.canDismiss(gQ)
              : gp === yZ.Domain && yZ.canDismiss(gQ)
          },
        },
        uicode: {
          get: function () {
            return yC(this.domain, this.code)
          },
        },
      })
      var g0,
        g1 = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.on('Error.Occurred', this.Ko)
              this.on('Error.Report', this['$o'])
              this.on('Error.Log', this.ts)
              this.on('Error.SendExceptionReport', this.ns)
            }),
            (gQ.prototype.Ko = function (gW) {
              var gZ = this,
                gY = gW.payload
              if (gY && gY.info) {
                var gI = gY.info,
                  gC = new yB(gI.domain, gI.code, gI.trace),
                  gD = []
                this.es(gC, gD)
                this.rs(gC, gD)
                this.ss(gC, gD)
                var gB = {
                  title: this.us(gY),
                  content: this.cs(gC.message),
                  actions: gD,
                }
                this.emit('Alert.Show', gB, function (gP) {
                  if (!gP.error) {
                    var h0 = gD.length > 0 ? gD[0].handler : ''
                    gZ.hs(gP.response, h0, gW)
                  }
                })
                false !== gY.report &&
                  this.ls(
                    gI.category,
                    gI.domain,
                    gI.code,
                    gI.error,
                    gI.retry,
                    gI.messages
                  )
              }
            }),
            (gQ.prototype.ns = function (gW) {
              var gZ = gW.payload
              if (gZ) {
                var gY = E.onerror
                gY && gY.report && gY.report(gZ)
              }
            }),
            (gQ.prototype.es = function (gW, gZ) {
              if (gW.shouldRetry) {
                var gY = KQ('General.DialogRetry')
                gZ.push({
                  label: gY,
                  handler: 'retry',
                  type: 'Affirmative',
                })
              }
            }),
            (gQ.prototype.rs = function (gW, gZ) {
              if (gW.canReload && !gW.shouldRetry) {
                var gY = ''
                gY =
                  gW.domain === eN.Domain
                    ? KQ('GameShell.Confirm')
                    : KQ('General.DialogReload')
                gZ.push({
                  label: gY,
                  handler: 'reload',
                  type: 'Affirmative',
                })
              }
            }),
            (gQ.prototype.ss = function (gW, gZ) {
              if (gW.canDismiss) {
                var gY = ''
                gY =
                  gW.domain === eN.Domain
                    ? KQ('GameShell.BtnCancel')
                    : KQ('General.DialogOk')
                gZ.push({
                  label: gY,
                  handler: 'dismiss',
                  type: 'Neutral',
                })
              } else {
                gY = ''
                gW.domain === eN.Domain ||
                  ((gY = KQ('General.DialogQuit')),
                  gZ.push({
                    label: gY,
                    handler: 'quit',
                    type: 'Neutral',
                  }))
              }
            }),
            (gQ.prototype.cs = function (gW) {
              if (gW.endsWith(')')) {
                var gZ = gW.lastIndexOf('(')
                gW =
                  gW.substring(0, gZ) +
                  '<span class="errorlabel">' +
                  gW.substring(gZ) +
                  '<span/>'
              }
              return gW
            }),
            (gQ.prototype['$o'] = function (gW) {
              var gZ = gW.payload
              gZ &&
                this.ls(
                  gZ.category,
                  gZ.domain,
                  gZ.code,
                  gZ.error,
                  gZ.retry,
                  gZ.messages
                )
            }),
            (gQ.prototype.ts = function (gW) {
              var gZ = gW.payload
              gZ && e5.ga.sendEvent(gZ.tag, 'log', gZ.message)
            }),
            (gQ.prototype.ls = function (gW, gZ, gY, gI, gC, gD) {
              var gB,
                gP = []
              gP.push(yB.getUICode(gZ, gY))
              gI &&
                ('string' == typeof gI
                  ? gP.push(gI)
                  : gI instanceof Error
                  ? gP.push(gI.message)
                  : gP.push(gI + ''))
              gD &&
                gD.length > 0 &&
                (gP =
                  'string' == typeof gD
                    ? V8(V8([], gP, true), [gD], false)
                    : V8(V8([], gP, true), gD, true))
              var h0 = gP.map(function (h1) {
                return h1.replace(/https?:\/\/[^/]+/g, '')
              })
              ;(gB = e5.ga).sendEvent.apply(gB, V8([gW, 'fault'], h0, false))
            }),
            (gQ.prototype.us = function (gW) {
              switch (gW.context) {
                case 'Preload':
                  return KQ('General.ErrorPreloadError')
                case 'Launch':
                  return KQ('General.ErrorLaunchFailed')
                case 'Login':
                  return KQ('General.ErrorLoginFailed')
                case 'Change':
                  return KQ('General.ErrorChangeFailed')
                case 'Unknown':
                  return ''
                default:
                  return KQ('General.ErrorTransactionFailed')
              }
            }),
            (gQ.prototype.hs = function (gW, gZ, gY) {
              var gI = this.fs(gW)
              'Default' === gI && (gI = this.fs(gZ))
              gY.propagate()
            }),
            (gQ.prototype.fs = function (gW) {
              switch (gW) {
                case 'retry':
                  return 'Retry'
                case 'reload':
                  return 'Reload'
                case 'dismiss':
                case 'clear':
                  return 'Dismiss'
                case 'quit':
                  return 'Quit'
                default:
                  return 'Default'
              }
            }),
            gQ
          )
        })(eX),
        g2 = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.se = -1),
              (gW.ds = true),
              (gW.As = 0),
              (gW.vs = false),
              (gW.ps = []),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.event.on('Shell.PWDReset', this.gs, this)
              this.event.on('Shell.PWDEnabled', this.bs, this)
              this.event.on('Shell.PWDDisabled', this['_s'], this)
              this.event.on('Shell.PWDUseCustomAlert', this.ws, this)
              this.xs()
            }),
            (gQ.prototype.onDestroy = function () {
              var gW = this
              ;-1 !== this.se && (E.clearTimeout(this.se), (this.se = -1))
              this.ps.forEach(function (gZ) {
                gW.event.off(gZ, gW.gs, gW)
              })
            }),
            (gQ.prototype.registerEvent = function (gW) {
              this.ps.includes(gW) ||
                (this.ps.push(gW), this.event.on(gW, this.gs, this))
            }),
            (gQ.prototype.unregisterEvent = function (gW) {
              if (this.ps.includes(gW)) {
                var gZ = this.ps.filter(function () {})
                this.ps = gZ
                this.event.off(gW, this.gs, this)
              }
            }),
            (gQ.prototype.gs = function () {
              this.As = 0
            }),
            (gQ.prototype.bs = function () {
              this.ds || ((this.ds = true), this.gs(), this.xs())
            }),
            (gQ.prototype['_s'] = function () {
              this.ds &&
                ((this.ds = false), clearTimeout(this.se), (this.se = -1))
            }),
            (gQ.prototype.ws = function (gW) {
              var gZ = gW.payload
              this.vs = gZ
            }),
            (gQ.prototype.ys = function () {
              this.As += 5000
              this.As >= 60000 ? (this['_s'](), this.Hs()) : this.xs()
            }),
            (gQ.prototype.xs = function () {
              var gW = this
              ;-1 !== this.se && E.clearTimeout(this.se)
              this.se = E.setTimeout(function () {
                gW.ys()
              }, 5000)
            }),
            (gQ.prototype.Hs = function () {
              var gW = this,
                gZ = {
                  category: uw,
                  domain: eN.Domain,
                  code: eN.WatchDogError,
                }
              if ((this.emit('Error.Report', gZ), this.vs)) {
                var gY = {
                  title: '',
                  content: KQ('GameShell.MaxLoadTimeoutMsg'),
                  actions: [
                    {
                      label: KQ('GameShell.BtnRefresh'),
                      handler: 'refresh',
                      type: 'Affirmative',
                    },
                    {
                      label: KQ('GameShell.BtnWait'),
                      handler: 'wait',
                      type: 'Neutral',
                    },
                  ],
                }
                this.emit('Alert.Show', gY, function (gI) {
                  var gC = gI.response
                  gI.error || 'refresh' !== gC || gW.emit('Window.Reload')
                })
              } else {
                E.confirm('An error occurred, please reload.') &&
                  setTimeout(function () {
                    gW.emit('Window.Reload')
                  }, 500)
              }
            }),
            gQ
          )
        })(eX),
        g3 = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              var gW = this
              this.rootElement = document.createElement('div')
              this.rootElement.className = 'screen_safe_area'
              var gZ = document.createElement('div')
              gZ.appendChild(this.rootElement)
              this.rootElement = gZ
              this.rootElement.className = 'qpage'
              this.rootElement.innerHTML =
                '<div class="qpage_container"><div class="qpage_content"><div class="sprite_main_res ic_iconic qpage_boy"></div><div class="qpage_title">' +
                '<b>'.concat(KQ('GameShell.QuitPageTitle'), '</b><br/>') +
                '</div><div class="qpage_desc">' +
                '<b>'.concat(KQ('GameShell.QuitPageDesc'), '</b><br/>') +
                '</div><div id="reload_button" class=qpage_button>' +
                ''.concat(KQ('GameShell.ReturnToGame')) +
                ' </div></div></div>'
              var gY = this.rootElement.querySelector('#reload_button')
              null == gY ||
                gY.addEventListener('click', function () {
                  gW.emit('Window.Reload')
                })
              this.on('Shell.Scaled', function (gI) {
                var gC = gI.payload
                gC &&
                  gC.adjust &&
                  gC.adjust(gW.rootElement, 'DesignWidthHeight')
              })
              this.emit('Shell.GetScale', void 0, function (gI) {
                if (!gI.error) {
                  var gC = gI.response
                  gC &&
                    gC.adjust &&
                    gC.adjust(gW.rootElement, 'DesignWidthHeight')
                }
              })
            }),
            gQ
          )
        })(eM),
        g4 = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.on('Window.Redirect', this.Vs)
              this.on('Window.Reload', this.Ss)
              this.on('Window.Quit', this.ks)
            }),
            (gQ.prototype.Vs = function (gW) {
              var gZ = this,
                gY = EV(),
                gI = gY.origin,
                gC = gY.pathname,
                gD = gW.payload
              if (eB(gD)) {
                var gB = eI(gI, gC)
                gD = eP(gD, gB)
              } else {
                gD = U0(gD)
              }
              try {
                var gP = new URL(gD)
                this.emit('Shell.EnableUnloadAlert', false, function () {
                  E.self !== E.top &&
                    E.parent.postMessage(
                      {
                        type: 'Window.Redirect',
                        url: gP.href,
                      },
                      '*'
                    )
                  E.location.replace(gP)
                })
              } catch (h0) {
                this.emit(
                  'Error.Occurred',
                  {
                    context: 'Unknown',
                    info: {
                      category: uw,
                      domain: eN.Domain,
                      code: eN.CrossSiteScriptingError,
                    },
                    report: true,
                  },
                  function () {
                    gZ.emit('Window.Reload')
                  }
                )
              }
            }),
            (gQ.prototype.Ss = function () {
              this.emit('Shell.EnableUnloadAlert', false, function () {
                E.location.reload()
              })
            }),
            (gQ.prototype.ks = function () {
              var gW = this
              E.cc && cc.game && cc.game.pause()
              this.component.create(g3)
              E.close && E.close()
              setTimeout(function () {
                gW.view.appendTo(g3, 'overlay')
              }, 500)
            }),
            gQ
          )
        })(eX),
        g5 = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onStateChange = function (gW) {
              gp.prototype.onStateChange &&
                gp.prototype.onStateChange.call(this, gW)
              this.onRun()
            }),
            (gQ.prototype.emitState = function (gW) {
              var gZ = this
              gW.endsWith('Complete') && this.Es
                ? this.emit(this.Es, void 0, function (gY) {
                    var gI = function () {
                      return gZ.emit('Shell.BootStateChanged', gW)
                    }
                    !gY.response || gY.error ? gZ.Cs(gI) : gI()
                  })
                : this.emit('Shell.BootStateChanged', gW)
            }),
            (gQ.prototype.Cs = function (gW) {
              Promise.resolve(this.Ms || 0)
                .then(function (gZ) {
                  yg(gZ)()
                })
                .then(gW, function () {})
            }),
            gQ
          )
        })(eX),
        g6 = function (gp) {
          var gQ = Ey.isIOS(),
            gW = Ey.getOSMajorVersion()
          if (!(gQ && gW > 12) || ('en' !== KW() && 'ru' !== KW())) {
            return gp
          }
          var gZ = gp && gp.game,
            gY = gZ && gZ.theme_font_family
          if (gY && Array.isArray(gY)) {
            var gI = gY[1] && gY[1].split(',')
            !gI.includes('Helvetica Neue') && gI.push('Helvetica Neue')
            gY[1] = gI.join()
          }
          return gp
        },
        g7 = (function () {
          function gp() {
            return [200, 10, 300].reduce(function (gW, gZ) {
              return gW * gZ
            }, 144)
          }
          function gQ(gW, gZ, gY) {
            if (
              (function (gC) {
                return E3(E[E0(0)].now(), gC)
              })(gW)
            ) {
              if ((gZ || (gZ = 100 * E.Number('0.0005')), gY)) {
                var gI = (function (gC, gD) {
                  var gB = (E[E0(0)].now() - gC) / (gD * gp())
                  return E[E0(4)].min(1, gB * gB)
                })(gW, gY)
                gZ *= gI
              }
              return E3(E[('Mathew', uS(-2, 'Mathew'))].random(), gZ)
            }
            return true
          }
          return [
            function () {
              return gQ(
                ['0x4c72'].reduce(function (gW, gZ) {
                  return gW + E.Number(gZ)
                }, 406) * gp(),
                100 * E.Number('0.0005'),
                28
              )
            },
            gQ,
          ]
        })()[0],
        g8 = 'ShellLoad',
        g9 = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Bs = new UU()),
              (gW.Gs = ''),
              (gW.Ps = ''),
              (gW.Zs = ''),
              (gW.Rs = ''),
              (gW.Os = ''),
              (gW.Ds = ''),
              (gW.Ns = ''),
              (gW.Qs = ''),
              (gW.Mi = ''),
              (gW.Ts = ''),
              (gW.Ls = ''),
              (gW.Fs = Object.create(null)),
              (gW.Is = function (gZ) {
                switch (gZ.src) {
                  case gW.Gs:
                  case gW.Ps:
                    var gY = gZ.response
                    Kx(gZ.response) && (gY = KO(gZ.response))
                    var gI = gY.version,
                      gC = gZ.src === gW.Gs ? gW.resource : Kf.resource
                    if (2 !== gI) {
                      throw Error('Unknown asset table format: '.concat(gI))
                    }
                    gC.addAssets(gY.assets)
                    break
                  case gW.Zs:
                    gW.Ws(gZ.response)
                    break
                  case gW.Mi:
                    var gD = g6(gZ.response)
                    fU.extend(gD)
                    break
                  case gW.Ts:
                    var gB = gZ.response
                    if (
                      (Kx(gZ.response) && (gB = KO(gZ.response)),
                      (gI = gB.version),
                      (gC = Kf.resource),
                      2 !== gI)
                    ) {
                      throw Error(
                        'Unknown custom asset table format: '.concat(gI)
                      )
                    }
                    gC.addAssets(gB.assets, gW.Ls)
                    break
                  case gW.Ds:
                  case gW.Os:
                  case gW.Ns:
                  case gW.Qs:
                  case gW.Rs:
                    if (gZ.response) {
                      var gP = URL.createObjectURL(gZ.response)
                      gW.Fs[gZ.src] = gP
                    }
                }
              }),
              (gW.Tn = function () {
                E.confirm(
                  'Error loading game. Press [OK] to refresh or [Cancel] to ignore.'
                ) &&
                  setTimeout(function () {
                    gW.emit('Window.Reload')
                  }, 500)
              }),
              (gW.zs = function () {
                gW.Bs.onComplete = gW.Us
                gW.Bs.onLoad = gW.Is
                gW.Bs.onError = gW.Tn
                var gZ = [
                  {
                    src: gW.Qs,
                    type: Ub.Blob,
                  },
                  {
                    src: gW.Ns,
                    type: Ub.Blob,
                    optional: true,
                    maxAttemptCount: 0,
                  },
                  {
                    src: gW.Ds,
                    type: Ub.Blob,
                    optional: true,
                    maxAttemptCount: 0,
                  },
                  {
                    src: gW.Zs,
                    type: Ub.Json,
                  },
                ]
                var gY = [gW.Os]
                'port' === Ey.getOrientationMode() &&
                  ((gW.Rs = gW.qs('shell-res/copyright.png')), gY.push(gW.Rs))
                for (var gI = 0; gI < gY.length; gI++) {
                  gZ.push({
                    src: gY[gI],
                    type: Ub.Blob,
                    maxAttemptCount: 2,
                  })
                }
                Kf.resource.hasEntry(
                  'shell-game-res/appearance/appearance.json'
                ) &&
                  ((gW.Mi = gW.qs(
                    'shell-game-res/appearance/appearance.json',
                    true
                  )),
                  gZ.push({
                    src: gW.Mi,
                    type: Ub.Json,
                  }),
                  (gW.Bs.onComplete = gW.Js))
                gW.Bs.load(gZ)
                gW.Xs()
              }),
              (gW.Js = function () {
                gW.Bs.onComplete = gW.Us
                gW.Bs.onLoad = gW.Is
                gW.Bs.onError = gW.Tn
                var gZ = [],
                  gY = gW.Ks()
                gY && gZ.push(gY)
                var gI = gW['$s']()
                gI && gZ.push(gI)
                gW.Ts &&
                  gZ.push({
                    src: gW.Ts,
                    type: Ub.Json,
                  })
                gW.Bs.load(gZ)
              }),
              (gW.Us = function () {
                gW.emit('Shell.PWDEnabled')
                gW.ta()
                var gZ = gW.na(g7),
                  gY = gZ[0],
                  gI = gZ[1]
                setTimeout(function () {
                  gW.emitState(gW.ia)
                  var gC = gW.Fs
                  for (var gD in gC) URL.revokeObjectURL(gC[gD])
                }, 200)
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState(g8)
              var gW,
                gZ,
                gY,
                gI = [],
                gC = Ey.getURLSearchParam().get('shell_custom_asset'),
                gD = Ey.getURLSearchParam().get('shell_asset_path')
              this.Ts =
                gC &&
                ((gZ = (gW = gC).startsWith(uN.SharedPath)),
                (gY = gW.endsWith('.json')),
                gZ && gY ? gW : '')
              this.Ls =
                gD &&
                (function (h0) {
                  var h1 = h0.startsWith(uN.SharedPath),
                    h2 = h0.includes('/game-res/')
                  return h1 && h2 ? h0 : ''
                })(gD)
              this.Ts &&
                (this.Ts.endsWith('.json')
                  ? (this.Ls = this.Ls
                      ? this.Ls
                      : this.Ts.substring(0, this.Ts.lastIndexOf('/') + 1))
                  : ((this.Ts = ''), (this.Ls = '')))
              var gB = this.context.bundleInfo
              if (Kx(gB.assets)) {
                var gP = KO(gB.assets)
                gB.assets && this.resource.addAssets(gP.assets)
              } else {
                'string' == typeof gB.assets
                  ? ((this.Gs = eI(gB.baseUrl, gB.assets)),
                    gI.push({
                      src: this.Gs,
                      type: Ub.Json,
                    }))
                  : gB.assets && this.resource.addAssets(gB.assets.assets)
              }
              'string' == typeof uN.AssetTable
                ? ((this.Ps = eI(Kf.bundleInfo.baseUrl, uN.AssetTable)),
                  gI.push({
                    src: this.Ps,
                    type: Ub.Json,
                  }))
                : Kf.resource.addAssets(uN.AssetTable.assets)
              gI.length > 0
                ? ((this.Bs.onComplete = this.zs),
                  (this.Bs.onLoad = this.Is),
                  (this.Bs.onError = this.Tn),
                  this.Bs.load(gI))
                : this.zs()
            }),
            (gQ.prototype.Xs = function () {
              E.dataLayer.push({ event: 'wasm_support_ready' })
            }),
            (gQ.prototype.na = function (gW) {
              return [+!!gW(), 'Completed']
            }),
            (gQ.prototype.Ws = function (gW) {
              for (var gZ in gW) gW[gZ] && Kp.extend(gW[gZ], gZ)
            }),
            (gQ.prototype.Ys = function () {
              var gW = fU.v('shell.splash')
              return (
                gW || (gW = this.qs('shell-game-res/splash/splash.jpg', true)),
                gW
              )
            }),
            (gQ.prototype.ta = function () {
              var gW = document.createElement('style')
              var gZ = ''
              gZ =
                'body,canvas,div{-webkit-tap-highlight-color:rgba(0,0,0,0);display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}video{height:100%;width:100%}body{-ms-scroll-chaining:none;height:100vh;margin:0;overscroll-behavior:contain;width:100vw}canvas{background-color:transparent}a:active,a:hover,a:link,a:visited{color:#666}p.header{font-size:small}p.footer{font-size:x-small}.game-shell{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;touch-action:none}.screen_compat{height:auto;margin:auto;max-height:780px;min-height:640px;position:absolute;width:360px}.screen_compat_land{height:360px;margin:auto;max-width:780px;min-width:640px;position:absolute;width:auto}.screen_safe_area{height:640px;width:360px;z-index:0}.screen_safe_area,.screen_safe_area_land{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.screen_safe_area_land{height:360px;width:640px}.background_ios11{height:100vmax;position:absolute}.screen_color{background-color:#000}#splash{background-image:url(splash/splash.jpg);background-position:50%;background-size:cover;position:absolute}#background-img{background-image:url(splash/launch.jpg);background-position:50%}#landscape_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#landscape_cover img{margin-bottom:20px;width:10%}#landscape_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}#orientation_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#orientation_cover img{margin-bottom:20px;width:10%}#orientation_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}.orientation_cover_flex{display:flex}.orientation_cover_none{display:none}.landscape_cover_flex{display:flex}.landscape_cover_none{display:none}.mirror{transform:scaleX(-1)}.direction_rtl{direction:rtl}.rotate_icon_scale_translate{transform:scale(1.8) translateY(-50%)}.rotate_icon_scale_translate_land{transform:scale(1.8) translateY(-50%) rotate(270deg)}.rotate_icon_scale_translate.mirror{transform:scale(-1.8,1.8) translateY(-50%)}#tips-text{margin-top:4px;text-align:center;text-overflow:ellipsis;width:90%}.tips-text-child2-hidden{display:none}.tips-text-child2{margin-left:5px}.tips-text-child2-rtl{margin-right:5px}@media only screen and (orientation:landscape){.background_ios11{height:100vmin}.landscape_cover_show{display:flex}}.splash_hidden{visibility:hidden}.start-button-container-land,.start-button-container-land-pc,.start-button-container-port{align-items:center;display:flex;justify-content:center;left:0;margin:auto;position:absolute;right:0}.start-button-container-port{height:32px;top:481px;width:151.7px}.start-button-container-land,.start-button-container-land-pc{font-size:12px;height:22px;top:271px;width:106px}.start-button{background-color:#30a2d0;border:2px solid rgba(0,0,0,.15);border-radius:8px;text-shadow:0 2px 3px #30a2d0}.start-button-show-land,.start-button-show-land-pc,.start-button-show-port{animation-name:show-bounce}.start-button-show-land,.start-button-show-land-pc{animation-name:show-bounce-land}.start-button-inner{background-image:linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0));background-origin:border-box;border:.87px solid hsla(0,0%,100%,.4);border-radius:6px;bottom:0;left:0;position:absolute;right:0;top:0}.custom-start-button-inner{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}@keyframes show-bounce{0%{transform:scale(0)}20%{transform:scale(1.2)}50%{transform:scale(.98)}to{transform:scale(1)}}@keyframes show-bounce-land{0%{transform:scale(0)}20%{transform:scale(.84)}50%{transform:scale(.68)}to{transform:scale(.7)}}.text-land,.text-land-pc,.text-port{color:#fff;font-size:10.3px;margin:0;padding:0}.text-land,.text-land-pc{transform:scale(.8)}.start-button .text-land,.start-button .text-land-pc,.start-button .text-port{font-size:12px;font-weight:900}.version{bottom:86px;font-size:12px;position:absolute;text-align:center;width:100%}.dark .text-port{color:#000}.animationTipsContainer-land,.animationTipsContainer-land-pc,.animationTipsContainer-port{align-items:center;display:flex;flex-direction:column;height:35px;margin:515px auto 0;position:relative;width:100%}.animationTipsContainer-port{margin-top:515px;z-index:1}.animationTipsContainer-land,.animationTipsContainer-land-pc{margin-top:288px;transform:scale(.8)}.ui_block_page{margin:auto;z-index:1100}.ui_block,.ui_block_page{background-color:#000;bottom:0;left:0;opacity:.6;position:absolute;right:0;top:0}.ui_block{transform:translateZ(0)}@keyframes ui_block_show{0%{opacity:0}to{opacity:.6}}@keyframes ui_block_hide{0%{opacity:.6}to{opacity:0}}.custom_alert .content .btn_content .button,.custom_alert .content .btn_content .custom_button{color:inherit;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom_alert{display:block;display:none;height:100%;height:640px;margin:auto;position:absolute;width:inherit;width:360px;z-index:1000}.custom_alert .content{background-color:#fff;border-radius:6px;box-shadow:1px 1px 8.7px #444;position:absolute;text-align:center;width:243px}.custom_alert .content .message,.custom_alert .content .title{font-size:14px;margin-left:5%;margin-right:5%;width:90%}.custom_alert .content .message{white-space:normal}.custom_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.custom_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.custom_alert .content .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.custom_alert .content .line_separator{border-bottom:1px solid #000;opacity:.1;padding-top:8.7px}.custom_alert .content .btn_content_row{display:table;table-layout:fixed;width:100%}.custom_alert .content .btn_content .button{animation:btn_release .1s linear forwards;padding:9.7px 10px 11.3px}.custom_alert .content .btn_content .button:active{animation:btn_press .1s linear forwards}.custom_alert .content .btn_content .custom_button{align-items:center;display:flex;height:32px;justify-content:center}.custom_alert .content .btn_content .row{display:table-cell}.custom_alert .content .btn_content .btn_separator_height{background-color:#000;height:1px;opacity:.1;width:inherit}.custom_alert .content .btn_content .btn_separator_width{background-color:#000;height:inherit;opacity:.1;width:1px}.custom_alert .custom_content{padding:20px}@media screen and (orientation:portrait){.custom_alert{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}@media screen and (orientation:landscape){.custom_alert{display:none;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}.custom_alert_ignore_orientation{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}@keyframes custom_alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes custom_alert_anim_hide{0%{opacity:1}to{opacity:0}}.custom_alert_show{animation:custom_alert_anim_show .3s linear forwards}@keyframes btn_press{0%{opacity:1}to{opacity:.5}}@keyframes btn_release{0%{opacity:.5}to{opacity:1}}.errorlabel{font-size:10px}.animated_text_wrap{color:#fff;font-size:10px;height:26px;line-height:26px;position:relative;text-align:center;width:100%}.dark .animated_text_wrap{color:#000}.animated_text_wrap_hide{display:none}.animated_text{align-items:center;display:flex;height:26px;justify-content:center;line-height:13px;margin:0;opacity:0;position:absolute;top:100%;width:100%}.animated-text-move-to-top-port,.animated-text-reset-to-bottom-port{opacity:0}.animated-text-reset-to-bottom-port{top:26px}.animated-text-move-to-top-port,.animated_text_move_to_center{transition:top 1s,opacity 1s;transition-timing-function:linear}.animated_text_move_to_center{opacity:1;top:0}.animated-text-move-to-top-port{top:-30px}.sprite_main_res{background-image:url(shell-res/main_res.png);background-repeat:no-repeat;background-size:222px 248px;display:inline-block}.ic_360{background-position:-162px -217px;height:21px;width:20px}.ic_arrow_back{background-position:-110px -181px;height:22px;width:22px}.ic_arrow_right{background-position:-211px -95px;height:12px;width:8px}.ic_chrome{background-position:-182px -193px;height:20px;width:20px}.ic_close_white{background-position:-187px -95px;height:22px;width:22px}.ic_dialog_close{background-position:-134px -181px;height:22px;width:22px}.ic_iconic{background-position:-1px -1px;height:178px;width:158px}.ic_ios_share_button{background-position:-184px -215px;height:23px;width:16px}.ic_operator_logo_details{background-position:-68px -223px;height:24px;width:92px}.ic_operator_select{background-position:-187px -119px;height:22px;width:22px}.ic_pg_logo{background-position:-68px -181px;height:40px;width:40px}.ic_pg_logo_small{background-position:-110px -205px;height:12px;width:27px}.ic_qq{background-position:-187px -143px}.ic_qq,.ic_quark{height:22px;width:22px}.ic_quark{background-position:-187px -167px}.ic_rotate_screen{background-position:-161px -1px;height:60px;width:60px}.ic_step_1{background-position:-204px -191px;height:14px;width:14px}.ic_step_2{background-position:-139px -205px;height:14px;width:15px}.ic_step_arrow{background-position:-211px -109px;height:12px;width:7px}.ic_swipeup_arrow{background-position:-161px -63px;height:128px;width:24px}.ic_swipeup_hand{background-position:-1px -181px;height:55px;width:65px}.ic_swipeup_round{background-position:-187px -63px;height:30px;width:30px}.ic_uc{background-position:-158px -193px;height:22px;width:22px}.loading-container-land,.loading-container-land-pc,.loading-container-port{align-items:center;display:flex;flex-direction:column;left:0;position:absolute;right:0}.loading-container-port{top:477px}.loading-container-land,.loading-container-land-pc{top:265px}.progress-bar-container-land,.progress-bar-container-land-pc,.progress-bar-container-port{background-color:initial;height:13px;position:relative;width:212px}.progress-bar-container-land,.progress-bar-container-land-pc{transform:scale(.7)}.progress-bar-background{background-color:#111;border-radius:3.5px;height:100%;position:absolute;width:100%}.progress-bar-outline{border-radius:3.5px;bottom:0;left:0;position:absolute;right:0;top:0;transform:translateZ(0)}.border-inner{border:1.7px solid #272727}.border-outer{border:.85px solid #111}.progress-bar-fill-container{bottom:.87px;left:.87px;position:absolute;right:.87px;top:.87px}.progress-bar-fill{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#30a2d0;background-size:8.7px 100%;border-radius:3.5px;height:100%;position:absolute;width:0}.stripes{animation-duration:1s;animation-iteration-count:infinite;animation-name:animate-stripes;animation-timing-function:linear;background-image:linear-gradient(-75deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,.1) 75%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0))}.front-highlight{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);border-radius:0 3.5px 3.5px 0;height:100%;max-width:20px;right:0;width:50%}.front-highlight,.top-highlight{position:absolute;transform:translateZ(0)}.top-highlight{background-color:hsla(0,0%,100%,.2);border-radius:3.5px 3.5px 0 0;height:50%;width:100%}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:34.7px 0}}.custom-progress-bar-container{align-items:center;display:flex;height:40px;justify-content:center;width:240px}.custom-progress-bar-background{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;position:absolute;top:0;width:100%;z-index:3}.custom-progress-bar-fill-container{border-radius:3px;height:24px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:221px;z-index:2}#npveSplash{z-index:975}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_bottom_land,.npve_container .npve_bottom_content .npve_bottom_port,.npve_container .npve_bottom_content .npve_grid_1,.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc,.npve_container .npve_bottom_content .npve_text_bold_port,.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port,.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port,.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{transform:scale(.87)}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{transform:scale(.75)}.npve_screen_compact{background-color:#fff;height:640px;margin:auto;position:absolute;transform:translateZ(0);width:360px}.npve_visible{visibility:visible}.npve_container{background-color:#fff;display:flex;flex-direction:column;font-size:12px;height:100%;position:relative;width:100%}.npve_container .npve_top_content{display:flex;justify-content:space-between;margin:26px}.npve_container .npve_top_content .title{color:#000;font-size:16px;line-height:16px;max-width:216.7px;text-align:right}.npve_container .npve_middle_content_port{margin:0 43.3px}.npve_container .npve_middle_content{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_middle_content .npve_iconic_port{display:table;transform:scale(.87)}.npve_container .npve_middle_content .npve_iconic_land{display:table;margin-top:-90px;transform:scale(.62)}.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{color:#000;display:flex;line-height:20px}.npve_container .npve_middle_content .npve_main_desc_port{line-height:26px;margin-top:-16px;min-height:150px;text-align:justify;width:312px}.npve_container .npve_middle_content .npve_main_desc_land{justify-content:center;margin:-25px 0 10px;min-height:50px;text-align:center;width:700px}.npve_container .npve_middle_content .npve_continue_button:hover,.npve_container .npve_middle_content .npve_continue_button_land:hover,.npve_container .npve_middle_content .npve_continue_button_port:hover{cursor:pointer;opacity:.5}.npve_container .npve_middle_content .npve_continue_button,.npve_container .npve_middle_content .npve_continue_button_land,.npve_container .npve_middle_content .npve_continue_button_port{background-color:rgba(81,211,33,.2);border:1px solid #51d321;border-radius:4px;color:#50d221;text-align:center;width:100%}.npve_container .npve_middle_content .npve_continue_button_port{height:43.3px;line-height:43.3px}.npve_container .npve_middle_content .npve_continue_button_land{font-size:13px;height:32px;line-height:32px;width:314px}.npve_container .npve_middle_content .npve_continue_button_active{opacity:.5}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{color:#000;line-height:17.3px;opacity:.3;text-align:center}.npve_container .npve_middle_content .npve_continue_desc_port{margin-top:5px;width:364px}.npve_container .npve_middle_content .npve_continue_desc_land{height:34px;margin-top:8px;width:736px}.npve_container .npve_bottom_content_port{min-height:130px}.npve_container .npve_bottom_content_land{max-height:80px;min-height:60px}.npve_container .npve_bottom_content{bottom:0;display:flex;flex:1;flex-direction:column;left:0;position:absolute;right:0}.npve_container .npve_bottom_content .npve_separate_line_port{background-color:#000;height:1.3px;margin-left:43.3px;margin-right:43.3px;margin-top:10px;opacity:.1}.npve_container .npve_bottom_content .npve_separate_line_land{background-color:#000;height:1.3px;margin-left:20px;margin-right:20px;opacity:.1}.npve_container .npve_bottom_content .npve_bottom_port{display:block}.npve_container .npve_bottom_content .npve_bottom_land{align-items:center;display:flex;justify-content:center;min-height:60px}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port{color:#000;flex:1;line-height:14px}.npve_container .npve_bottom_content .npve_bottom_button_title_port{margin-bottom:10px;margin-top:10px;text-align:justify}.npve_container .npve_bottom_content .npve_bottom_button_title_land{display:block;margin-right:30px;max-width:260px;min-width:260px;text-align:center}.npve_container .npve_bottom_content .npve_text_wrapper_port{text-align:justify}.npve_container .npve_bottom_content .npve_text_wrapper_land{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port{align-items:center;display:flex}.npve_container .npve_bottom_content .npve_text_content_port{justify-content:left}.npve_container .npve_bottom_content .npve_text_content_land{justify-content:center;width:736px}.npve_container .npve_bottom_content .npve_text_bold_port{font-weight:700;margin:10px 0}.npve_container .npve_bottom_content .npve_text_bold_land{font-weight:700;margin-right:16px;max-width:200px;text-align:center}.npve_container .npve_bottom_content .npve_line_text_port{max-width:130px;text-align:justify}.npve_container .npve_bottom_content .npve_line_text_land{max-width:250px;text-align:justify}.npve_container .npve_bottom_content .npve_line_num{margin-right:12px;min-width:14px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_land,.npve_container .npve_bottom_content .npve_line_arrow_port{min-width:7px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_port{margin:0 20px}.npve_container .npve_bottom_content .npve_line_arrow_land{margin:0 16px}.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port{line-height:16px;opacity:.3}.npve_container .npve_bottom_content .npve_text_note_port{margin-top:15px;text-align:justify}.npve_container .npve_bottom_content .npve_text_note_land{margin-top:11px;text-align:center;width:736px}.npve_container .npve_bottom_content .npve_grid_1{align-items:center;display:flex;flex:2;justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content:hover{color:#0f55cc;cursor:pointer}.npve_container .npve_bottom_content .npve_grid_1 .grid_content{align-items:center;color:#000;display:flex;flex:1;flex-direction:column}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row{align-items:center;display:flex;flex-direction:row}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_icon{min-width:20px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc{display:block;line-height:12px;margin-left:5px;max-width:150px;text-align:left}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_title{text-decoration:underline}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_seperator{height:5px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_content{opacity:.3}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc_active_color{color:#0f55cc}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text{color:#000;display:flex;flex:1;line-height:10px;opacity:.3;text-align:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_center{justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_left{justify-content:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_right{justify-content:flex-end}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_center{align-items:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_left{align-items:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_right{align-items:flex-end}.qpage{background-color:#fff;height:640px;margin:auto;position:absolute;width:360px;z-index:975}.qpage_container{background-color:#fff;display:flex;flex-direction:column;height:100%;text-align:center;width:100%;z-index:950}.qpage_container .qpage_content{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.qpage_container .qpage_content .qpage_boy{transform:scale(.82)}.qpage_container .qpage_content .qpage_title{color:#000;font-size:20px;line-height:20px;position:relative;text-align:center;top:0;width:80%}.qpage_container .qpage_content .qpage_desc{color:#000;font-size:11.3px;line-height:14px;opacity:.3;position:relative;text-align:center;top:8.7px;width:80%}.qpage_container .qpage_content .qpage_button{background-color:rgba(24,17,84,.075);border-radius:2px;color:#000;font-size:10.3px;height:36.3px;line-height:36.3px;margin-top:20px;max-width:303.3px;min-width:156px}.footer-container{display:flex;height:77px}.footer-container,.footer-mask-container-land,.footer-mask-container-port{bottom:0;position:absolute;width:100%}.footer-mask-container-port{display:flex;flex-direction:column;height:229px}.footer-mask-container-land{height:131px}.footer-mask{height:100%;position:absolute;width:100%}.footer-mask-black{background-image:linear-gradient(180deg,rgba(0,0,0,.03),#000)}.footer-mask-color{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.footer-container img{height:117px;width:100%}.footer-image-container{display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:0}#footer-copyright-image{background-image:url(shell-res/copyright.png);background-position:50%;background-size:cover;height:12px;position:absolute;transform:scale(.6);width:480px}.footer-text-img{transition:.2s}.logo-container{align-items:center;display:flex;flex-direction:row-reverse;position:absolute;right:0}.swipeup_text{bottom:40px;font-size:12px}.swipeup_container,.swipeup_text{color:#fff;left:0;position:absolute;right:0}.swipeup_container{bottom:0;height:270px;margin:auto;top:0;width:224px}.swipeup_slide_container{left:50%;position:absolute;top:29px;transform:scale(1);transform-origin:center top}.swipeup_background{animation:swipeup_background_anim .75s forwards;background-color:#000;border-radius:7px;height:100%;opacity:.8;width:100%}.swipeup_arrow{animation:swipeup_arrow_fade_anim,swipeup_arrow_clip_anim;animation-duration:2.4s,2.4s;animation-iteration-count:infinite,infinite;animation-timing-function:ease,cubic-bezier(.84,0,.16,1);left:-12px;opacity:0;position:absolute}.swipeup_slide{animation:swipeup_slide_anim;animation-duration:2.4s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.84,0,.16,1);position:absolute;top:126px}.swipeup_round{animation:swipeup_round_anim 2.4s infinite;left:-16px;opacity:1;position:absolute;top:-20px}.swipeup_hand{animation:swipeup_hand_anim 2.4s infinite;left:-9px;opacity:1;position:absolute;top:-12px}@keyframes swipeup_background_anim{0%{opacity:0}to{opacity:.8}}@keyframes swipeup_arrow_clip_anim{0%,33%{height:129px}to{height:0}}@keyframes swipeup_arrow_fade_anim{0%,17%{opacity:0}50%,to{opacity:.6}}@keyframes swipeup_slide_anim{0%,33%{transform:translateY(0)}to{transform:translateY(-120px)}}@keyframes swipeup_round_anim{0%{opacity:0}33%,to{opacity:1}}@keyframes swipeup_hand_anim{0%{transform:scale(1)}33%,to{transform:scale(.9)}}#canvas-shadow{background-color:#000;display:block;-webkit-filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));height:736px;position:absolute;width:414px}'
              var gY = this.Fs
              gZ = gZ.replace('shell-res/main_res.png', gY[this.Qs])
              delete gY[this.Qs]
              'port' === Ey.getOrientationMode() &&
                (gZ = gZ.replace('shell-res/copyright.png', gY[this.Rs]))
              this.ea(gY[this.Os])
              delete gY[this.Os]
              gZ = (gZ = gZ.replace('splash/launch.jpg', gY[this.Ns])).replace(
                'splash/splash.jpg',
                gY[this.Ds]
              )
              document.head.appendChild(gW)
            }),
            (gQ.prototype.qs = function (gW, gZ) {
              return (
                void 0 === gZ && (gZ = false),
                gZ ? Kf.resource.resolveUrl(gW) : this.resource.resolveUrl(gW)
              )
            }),
            (gQ.prototype.Ks = function () {
              if (fU.v('start_button.enable')) {
                var gW = fU.v('start_button.mode'),
                  gZ = fU.v('start_button.image')
                if (gW && gZ && Kf.resource.hasEntry(gZ)) {
                  return {
                    src: Kf.resource.resolveUrl(gZ),
                    type: Ub.Image,
                  }
                }
              }
            }),
            (gQ.prototype['$s'] = function () {
              if (fU.v('loading_bar.enable')) {
                var gW = fU.v('loading_bar.mode'),
                  gZ = fU.v('loading_bar.background_image')
                if (gW && gZ && Kf.resource.hasEntry(gZ)) {
                  return {
                    src: Kf.resource.resolveUrl(gZ),
                    type: Ub.Image,
                  }
                }
              }
            }),
            (gQ.prototype.ea = function (gW) {
              this.component.updateState(fZ, {
                state: 'init',
                certBlobUrl: gW,
              })
            }),
            gQ
          )
        })(g5)
      !(function (gp) {
        gp[(gp.Disabled = 0)] = 'Disabled'
        gp[(gp.Enabled = 1)] = 'Enabled'
        gp[(gp.NotSupported = -1)] = 'NotSupported'
      })(g0 || (g0 = {}))
      var gV,
        gz,
        gH,
        gb,
        gE = {
          ra: void 0,
          getWebGLStatus: function () {
            return (
              void 0 === this.ra &&
                (this.ra = (function () {
                  if (E.WebGLRenderingContext) {
                    for (
                      var gp = E.document.createElement('canvas'),
                        gQ = 0,
                        gW = [
                          'webgl',
                          'experimental-webgl',
                          'moz-webgl',
                          'webkit-3d',
                        ];
                      gQ < gW.length;
                      gQ++
                    ) {
                      var gZ = gW[gQ]
                      try {
                        var gY = gp.getContext(gZ)
                        if (gY && 'function' == typeof gY.getParameter) {
                          return g0.Enabled
                        }
                      } catch (gI) {}
                    }
                    return g0.Disabled
                  }
                  return g0.NotSupported
                })()),
              this.ra
            )
          },
        }
      !(function (gp) {
        gp[(gp.WebGLNotSupported = 1)] = 'WebGLNotSupported'
        gp[(gp.WebGLSupportedButDisabled = 2)] = 'WebGLSupportedButDisabled'
        gp[(gp.BrowserVersionTooLow = 3)] = 'BrowserVersionTooLow'
        gp[(gp.BrowserNotInclude = 4)] = 'BrowserNotInclude'
        gp[(gp.LowSpec = 5)] = 'LowSpec'
        gp[(gp.NativeBrowserTooLow = 6)] = 'NativeBrowserTooLow'
        gp[(gp.OSVersionTooLow = 7)] = 'OSVersionTooLow'
        gp[(gp.NativeWebGLNotSupported = 8)] = 'NativeWebGLNotSupported'
        gp[(gp.AdblockDetected = 9)] = 'AdblockDetected'
        gp[(gp.APINotDetected = 10)] = 'APINotDetected'
        gp[(gp.ES6NotSupported = 11)] = 'ES6NotSupported'
        gp[(gp.InsecureContext = 12)] = 'InsecureContext'
      })(gV || (gV = {}))
      ;(function (gp) {
        gp[(gp.QuitPage = 0)] = 'QuitPage'
        gp[(gp.Continue = 1)] = 'Continue'
      })(gz || (gz = {}))
      ;(function (gp) {
        gp[(gp.Top = 1)] = 'Top'
        gp[(gp.Middle = 2)] = 'Middle'
      })(gH || (gH = {}))
      ;(function (gp) {
        gp[(gp.Auto = 0)] = 'Auto'
        gp[(gp.Chrome = 1)] = 'Chrome'
        gp[(gp.QQ = 2)] = 'QQ'
        gp[(gp.UC = 3)] = 'UC'
        gp[(gp.Quark = 4)] = 'Quark'
      })(gb || (gb = {}))
      var gK,
        gU,
        gy,
        gg = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.oa = void 0),
              (gW.sa = void 0),
              (gW.aa = void 0),
              (gW.ca = []),
              (gW.ha = function () {
                gW.oa && gW.oa()
              }),
              (gW.la = function (gZ) {
                var gY = gZ.currentTarget
                gY && gY.classList.add('npve_continue_button_active')
              }),
              (gW.fa = function (gZ) {
                var gY = gZ.currentTarget
                gY && gY.classList.remove('npve_continue_button_active')
              }),
              (gW.da = function (gZ) {
                var gY = gZ.currentTarget
                if (gY) {
                  var gI = gY.querySelector('.grid_row .grid_desc')
                  gI && gI.classList.add('grid_desc_active_color')
                }
              }),
              (gW.Aa = function (gZ) {
                var gY = gZ.currentTarget
                if (gY) {
                  var gI = gY.querySelector('.grid_row .grid_desc')
                  gI && gI.classList.remove('grid_desc_active_color')
                }
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {}),
            (gQ.prototype.onStateChange = function (gW) {
              var gZ = this
              if (this.rootElement) {
                this.rootElement.classList.remove('npve_dismiss')
                this.rootElement.classList.add('npve_visible')
              } else {
                var gY = this.va(gW.reason, gW.onContinue, gW.onDiscontinue)
                this.T = Ey.getOrientationMode()
                this.rootElement = this.pa(
                  'npve_visible npve_screen_compact',
                  void 0,
                  'npveSplash'
                )
                var gI = this.pa(
                    'port' === this.T
                      ? 'screen_safe_area'
                      : 'screen_safe_area_'.concat(this.T)
                  ),
                  gC = this.ma(),
                  gD = this.ba(),
                  gB = this['_a'](gY.descText),
                  gP = this.wa(gY, gW)
                gC.appendChild(gD)
                gC.appendChild(gB)
                gP && gC.appendChild(gP)
                this.rootElement.appendChild(gI)
                this.rootElement.appendChild(gC)
                this.aa && E.addEventListener('beforeunload', this.aa)
                this.on('Shell.Scaled', function (h0) {
                  var h1 = h0.payload
                  h1.adjust && h1.adjust(gZ.rootElement, 'DesignWidthHeight')
                })
              }
              this.emit('Shell.GetScale', void 0, function (h0) {
                if (!h0.error) {
                  var h1 = h0.response
                  ;(null == h1 ? void 0 : h1.adjust) &&
                    h1.adjust(gZ.rootElement, 'DesignWidthHeight')
                }
              })
            }),
            (gQ.prototype.onShow = function () {}),
            (gQ.prototype.onDestroy = function () {
              for (var gW = 0; gW < this.ca.length; gW++) {
                var gZ = document.getElementById('pveBtn_'.concat(gW))
                gZ && gZ.removeEventListener('click', this.ca[gW])
                gZ && gZ.removeEventListener('touchstart', this.da)
                gZ && gZ.removeEventListener('touchend', this.Aa)
              }
              this.sa && this.sa.removeEventListener('click', this.ha)
              this.sa && this.sa.removeEventListener('touchstart', this.la)
              this.sa && this.sa.removeEventListener('touchend', this.fa)
              this.aa && E.removeEventListener('beforeunload', this.aa)
              var gY = this.rootElement.parentNode
              gY && gY.removeChild(this.rootElement)
              this.oa = void 0
              this.sa = void 0
              this.aa = void 0
              this.ca = []
            }),
            (gQ.prototype.va = function (gW, gZ, gY) {
              Ey.getURLSearchParam().get('operator_token')
              var gI = Ey.getOSName(),
                gC = '',
                gD = '',
                gB = []
              return (
                (this.oa = function () {
                  gZ && gZ()
                }),
                (this.aa = function () {
                  gY && gY()
                }),
                gW === gV.LowSpec
                  ? (gC = KQ('GameShell.NpveDeviceNotSupportDesc'))
                  : gW === gV.OSVersionTooLow
                  ? ((gC = KQ('GameShell.NpveSystemVersionTooLowDesc')),
                    gI === u5
                      ? (gD = (gD = KQ(
                          'GameShell.AndroidUpdateTutorialStep'
                        )).replace('<<#1>>', KQ('GameShell.PveUpdateTutorial')))
                      : gI === u6 &&
                        (gD = (gD = KQ(
                          'GameShell.IosUpdateTutorialStep'
                        )).replace(
                          '<<#1>>',
                          KQ('GameShell.PveUpdateTutorial')
                        )))
                  : gW === gV.BrowserNotInclude ||
                    gW === gV.BrowserVersionTooLow ||
                    gW === gV.NativeBrowserTooLow ||
                    gW === gV.APINotDetected
                  ? ((gC = KQ('GameShell.NpveBrowserVersionTooLowDesc')),
                    (gB = this.xa()))
                  : gW === gV.NativeWebGLNotSupported ||
                    gW === gV.WebGLSupportedButDisabled ||
                    gW === gV.WebGLNotSupported
                  ? ((gC = KQ('GameShell.NpveWebGLNotSupportDesc')),
                    (gB = this.xa()),
                    (this.oa = void 0))
                  : gW === gV.AdblockDetected
                  ? (gC = KQ('GameShell.PveAdblockDetectedMessage'))
                  : gW === gV.ES6NotSupported
                  ? ((gC = KQ('GameShell.NpveBrowserVersionTooLowDesc')),
                    (gB = this.xa()),
                    (this.oa = void 0))
                  : gW === gV.InsecureContext &&
                    ((gC = KQ('GameShell.NpveInsecureContextDesc')),
                    (gB = this.xa())),
                {
                  descText: gC,
                  tutorialText: gD,
                  buttons: gB,
                }
              )
            }),
            (gQ.prototype.xa = function () {
              var gW = Ey.getURLSearchParam().get('pve_bb') || '0',
                gZ = [],
                gY = 'https://browser.qq.com/'
              switch (parseInt(gW, 10)) {
                case gb.Chrome:
                  break
                case gb.QQ:
                  gZ.push({
                    iconClass: 'ic_qq',
                    desc: KQ('GameShell.PveQQBrowser'),
                    desc1: KQ('GameShell.PveQQBrowserDesc'),
                    action: function () {
                      E.open(gY)
                    },
                  })
                  break
                case gb.UC:
                  gZ.push({
                    iconClass: 'ic_uc',
                    desc: KQ('GameShell.PveUCBrowser'),
                    desc1: KQ('GameShell.PveUCBrowserDesc'),
                    action: function () {
                      E.open('https://www.uc.cn/')
                    },
                  })
                  break
                case gb.Quark:
                  gZ.push({
                    iconClass: 'ic_quark',
                    desc: KQ('GameShell.PveQuarkBrowser'),
                    desc1: KQ('GameShell.PveQuarkBrowserDesc'),
                    action: function () {
                      E.open('https://myquark.cn/')
                    },
                  })
                  break
                case gb.Auto:
                default:
                  'zh' === Kp.locale() &&
                    gZ.push({
                      iconClass: 'ic_qq',
                      desc: KQ('GameShell.PveQQBrowser'),
                      desc1: KQ('GameShell.PveQQBrowserDesc'),
                      action: function () {
                        E.open(gY)
                      },
                    })
              }
              return (
                gZ.push({
                  iconClass: 'ic_chrome',
                  desc: KQ('GameShell.PveChromeBrowser'),
                  desc1: KQ('GameShell.PveChromeBrowserDesc'),
                  action: function () {
                    E.open('https://www.google.com/chrome/')
                  },
                }),
                gZ
              )
            }),
            (gQ.prototype.ma = function () {
              return this.pa('npve_container')
            }),
            (gQ.prototype.ba = function () {
              var gW = this.pa(
                  'npve_top_content npve_top_content_'.concat(this.T)
                ),
                gZ = this.pa('sprite_main_res ic_operator_logo_details')
              return (
                gW.appendChild(gZ),
                this.ya() === gH.Top && gW.appendChild(this.Ha()),
                gW
              )
            }),
            (gQ.prototype['_a'] = function (gW) {
              var gZ = this.T,
                gY = this.pa(
                  'npve_middle_content npve_middle_content_'.concat(gZ)
                ),
                gI = this.pa('npve_iconic_'.concat(gZ)),
                gC = this.pa('sprite_main_res ic_iconic'),
                gD = this.pa(
                  'npve_main_desc_'.concat(gZ),
                  ''.concat(KQ('GameShell.PveDearClient'), '<br />').concat(gW)
                )
              return (
                this.ya() === gH.Middle &&
                  (gY.appendChild(this.Ha()), gY.appendChild(this.Va())),
                gI.appendChild(gC),
                gY.appendChild(gI),
                gY.appendChild(gD),
                this.oa &&
                  ((this.sa = this.Sa()),
                  gY.appendChild(this.sa),
                  gY.appendChild(this.ka())),
                gY
              )
            }),
            (gQ.prototype.wa = function (gW, gZ) {
              var gY = this.Ea(gW.buttons),
                gI = this.Ca(gW.tutorialText)
              if (this.Ma(gY, gI)) {
                var gC = this.pa(
                    'npve_bottom_content npve_bottom_content_'.concat(this.T)
                  ),
                  gD = this.Ba(gW.buttons.length, gZ)
                return (
                  gD && gC.appendChild(gD),
                  gY && gC.appendChild(gY),
                  gI && gC.appendChild(gI),
                  gC
                )
              }
            }),
            (gQ.prototype.Ma = function () {
              return true
            }),
            (gQ.prototype.Sa = function () {
              var gW = this.pa(
                'npve_continue_button_'.concat(this.T),
                KQ('GameShell.PveContVisit')
              )
              return (
                gW.addEventListener('click', this.ha),
                gW.addEventListener('touchstart', this.la),
                gW.addEventListener('touchend', this.fa),
                gW
              )
            }),
            (gQ.prototype.ka = function () {
              return this.pa(
                'npve_continue_desc_'.concat(this.T),
                KQ('GameShell.PveContVisitWarn')
              )
            }),
            (gQ.prototype.Ba = function (gW, gZ) {
              if (gW > 0 || gZ.onContinue) {
                return this.pa('npve_separate_line_'.concat(this.T))
              }
            }),
            (gQ.prototype.Ea = function (gW) {
              var gZ = gW.length
              if (!(gZ <= 0)) {
                for (
                  var gY = this.T,
                    gI = this.pa('npve_bottom_'.concat(gY)),
                    gC = this.pa(
                      'npve_bottom_button_title_'.concat(gY),
                      KQ('GameShell.PveDownloadClientApp')
                    ),
                    gD = this.pa('npve_grid_1'),
                    gB = 0;
                  gB < gZ;
                  gB++
                ) {
                  var gP = gW[gB],
                    h0 = 'grid_item_center'
                  'port' === this.T &&
                    (0 === gB && gZ > 1
                      ? (h0 = 'grid_item_left')
                      : gB === gZ && gZ > 1 && (h0 = 'grid_item_right'))
                  var h1 = this.pa(
                      'grid_content '.concat(h0),
                      void 0,
                      'pveBtn_'.concat(gB)
                    ),
                    h2 = this.pa('grid_row'),
                    h3 = this.pa(
                      'sprite_main_res '.concat(gP.iconClass, ' grid_icon')
                    ),
                    h4 = this.pa('grid_desc', void 0, 'grid_desc_'.concat(gB)),
                    h5 = this.pa('grid_desc_title', gP.desc),
                    h6 = this.pa('grid_desc_seperator'),
                    h7 = this.pa('grid_desc_content', gP.desc1)
                  gP.action &&
                    (h1.addEventListener('click', gP.action),
                    h1.addEventListener('touchstart', this.da),
                    h1.addEventListener('touchend', this.Aa),
                    this.ca.push(gP.action))
                  h4.appendChild(h5)
                  h4.appendChild(h6)
                  h4.appendChild(h7)
                  h2.appendChild(h3)
                  h2.appendChild(h4)
                  h1.appendChild(h2)
                  gD.appendChild(h1)
                }
                return gI.appendChild(gC), gI.appendChild(gD), gI
              }
            }),
            (gQ.prototype.Ca = function (gW) {
              if (!(gW.length <= 0)) {
                var gZ = this.T,
                  gY = this.pa('npve_text_wrapper_'.concat(gZ)),
                  gI = this.pa('npve_text_content_'.concat(gZ)),
                  gC = gW.split('|'),
                  gD = gC.shift()
                if (gD) {
                  var gB = this.pa('npve_text_bold_'.concat(gZ), gD)
                  'port' === gZ ? gY.appendChild(gB) : gI.appendChild(gB)
                }
                for (var gP = '', h0 = 0; h0 < gC.length; h0++) {
                  var h1 = gC[h0].trim()
                  h1.startsWith('*')
                    ? (gP.length > 0 && (gP += '<br />'), (gP += h1))
                    : (0 !== h0 &&
                        gI.appendChild(
                          this.pa(
                            'sprite_main_res ic_step_arrow npve_line_arrow_'.concat(
                              gZ
                            )
                          )
                        ),
                      gI.appendChild(
                        this.pa(
                          'sprite_main_res ic_step_'.concat(
                            h0 + 1,
                            ' npve_line_num'
                          )
                        )
                      ),
                      gI.appendChild(this.pa('npve_line_text_'.concat(gZ), h1)))
                }
                return (
                  gY.appendChild(gI),
                  gP.length > 0 &&
                    gY.appendChild(this.pa('npve_text_note_'.concat(gZ), gP)),
                  gY
                )
              }
            }),
            (gQ.prototype.ya = function () {
              return gH.Top
            }),
            (gQ.prototype.Ha = function () {
              return this.pa('title', KQ('GameShell.PveCheck'))
            }),
            (gQ.prototype.Va = function () {
              return this.pa('npve_separate_line_'.concat(this.T))
            }),
            (gQ.prototype.pa = function (gW, gZ, gY) {
              var gI = document.createElement('div')
              return (
                gW && (gI.className = gW),
                gZ && (gI.innerHTML = gZ),
                gY && (gI.id = gY),
                gI
              )
            }),
            gQ
          )
        })(eM),
        gv = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              return V3(this, void 0, void 0, function () {
                var gW, gZ
                return V4(this, function (gY) {
                  switch (gY.label) {
                    case 0:
                      return (
                        this.emitState('PveCheck'), (gW = Ey), [4, this.ja()]
                      )
                    case 1:
                      return (
                        (gW.webpSupported = gY.sent()),
                        'false' === (gZ = Ey.getURLSearchParam().get('pve')) ||
                        '0' === gZ
                          ? (this.Ga(), [2])
                          : this.Pa()
                          ? Ey.isSecureContext()
                            ? uN.StorageKey &&
                              yk(uN.StorageKey.forcePlay, false)
                              ? ((this.state.param.reason = yk(uA)),
                                this.Ga(),
                                [2])
                              : this.Mo()
                              ? [2]
                              : Ey.isIOSStandalone()
                              ? (this.Ga(), [2])
                              : Ey.isApp()
                              ? [3, 3]
                              : [4, this.Za()]
                            : (this.Ra(gV.InsecureContext), [2])
                          : (this.Ra(gV.ES6NotSupported), [2])
                      )
                    case 2:
                      gY.sent(), (gY.label = 3)
                    case 3:
                      return (
                        Ey.isIOS()
                          ? this.Oa()
                          : Ey.isAndroid()
                          ? this.Da()
                          : Ey.isPc()
                          ? this.Na()
                          : Ey.isWindows() || Ey.isMac()
                          ? this.Qa()
                          : this.Ga(),
                        [2]
                      )
                  }
                })
              })
            }),
            (gQ.prototype.ja = function () {
              return new Promise(function (gW) {
                var gZ = false
                try {
                  var gY = document.createElement('canvas')
                  gZ = gY.toDataURL('image/webp').startsWith('data:image/webp')
                } catch (gC) {
                  gZ = false
                }
                if (gZ) {
                  gW(gZ)
                } else {
                  var gI = new Image()
                  gI.onload = function () {
                    gZ = gI.width > 0 && gI.height > 0
                    gW(gZ)
                  }
                  gI.onerror = function () {
                    gW(false)
                  }
                  gI.src =
                    'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
                }
              })
            }),
            (gQ.prototype.Za = function () {
              var gW = this,
                gZ = this.context.resource.resolveUrl(
                  'shell-res/ad/ad_adv_dfp_test.js'
                )
              return new Promise(function (gY) {
                fetch(gZ)
                  .then(function () {
                    gY()
                  })
                  .catch(function () {
                    gW.Ra(gV.AdblockDetected)
                  })
              })
            }),
            (gQ.prototype.Pa = function () {
              try {
                return Function('', ''), true
              } catch (gW) {
                return false
              }
            }),
            (gQ.prototype.Oa = function () {
              if (this.Ta()) {
                this.Ra(gV.LowSpec)
              } else {
                var gW = Ey.getMinOSVersionInfo()
                gW.hasMinOSVersion && gW.foundOS && !gW.isMinOSVersion
                  ? this.Ra(gV.OSVersionTooLow)
                  : 'webkit' === Ey.getBrowserType().toLowerCase()
                  ? Ey.isWkWebview() || Ey.isCacheStorageSupported()
                    ? this.Ga()
                    : this.Ra(gV.BrowserNotInclude)
                  : gE.getWebGLStatus() !== g0.Enabled
                  ? this.Ra(gV.WebGLNotSupported)
                  : this.Ga()
              }
            }),
            (gQ.prototype.Da = function () {
              if (this.Ta()) {
                this.Ra(gV.LowSpec)
              } else {
                var gW = Ey.getMinOSVersionInfo()
                if (gW.hasMinOSVersion && gW.foundOS && !gW.isMinOSVersion) {
                  this.Ra(gV.OSVersionTooLow)
                } else {
                  if (gE.getWebGLStatus() !== g0.Enabled) {
                    this.Ra(gV.WebGLNotSupported)
                  } else {
                    if (Ey.isApp()) {
                      this.Ga()
                    } else {
                      if (Ey.isBrowserTypeSupported()) {
                        var gZ = Ey.getWhiteListCompatibleCheckInfo()
                        gZ.hasWhiteList &&
                        gZ.foundBrowser &&
                        !gZ.isMinBrowserVersion
                          ? this.Ra(gV.BrowserVersionTooLow)
                          : this.Ga()
                      } else {
                        this.Ra(gV.BrowserNotInclude)
                      }
                    }
                  }
                }
              }
            }),
            (gQ.prototype.Na = function () {
              gE.getWebGLStatus() !== g0.Enabled
                ? this.Ra(gV.WebGLNotSupported)
                : this.Ga()
            }),
            (gQ.prototype.Qa = function () {
              if (gE.getWebGLStatus() !== g0.Enabled) {
                this.Ra(gV.WebGLNotSupported)
              } else {
                var gW = Ey.getWhiteListCompatibleCheckInfo()
                Ey.isBrowserTypeSupported()
                  ? gW.hasWhiteList &&
                    gW.foundBrowser &&
                    !gW.isMinBrowserVersion
                    ? this.Ra(gV.BrowserVersionTooLow)
                    : this.Ga()
                  : this.Ra(gV.BrowserNotInclude)
              }
            }),
            (gQ.prototype.Mo = function () {
              this.emit('Alert.Dismiss', void 0, function (gW) {
                ;(16 !== gW.response || gW.error) && y9('GameReady', yg(2))
              })
            }),
            (gQ.prototype.Ta = function () {
              var gW = Ey.getDeviceCompatibleTerms()
              if (!gW) {
                return false
              }
              if (!gW.minMemory) {
                return false
              }
              if (+gW.minMemory < 2048) {
                return false
              }
              if (Ey.isIOS()) {
                var gZ = E.devicePixelRatio || 1,
                  gY = Math.min(Ey.getScreenHeight(), Ey.getScreenWidth()) * gZ
                if (1242 === gY || 750 === gY) {
                  switch (Ey.getGPU()) {
                    case 'Apple A8 GPU':
                      return true
                    case 'Apple A9 GPU':
                      if (Ey.getOSMajorVersion() <= 10) {
                        return true
                      }
                  }
                }
              }
              return (
                !(
                  Math.min(Ey.getScreenWidth(), Ey.getScreenHeight()) *
                    devicePixelRatio >=
                  720
                ) && 'Apple A9 GPU' !== Ey.getGPU()
              )
            }),
            (gQ.prototype.Ga = function () {
              this.emitState('PveCheckComplete')
            }),
            (gQ.prototype.Ra = function (gW) {
              var gZ = this
              yS(uA, gW)
              this.state.param.reason = gW
              this.state.param.reasonString = this.La(gW)
              this.component.create(gg)
              this.component.updateState(gg, {
                reason: gW,
                onContinue: function () {
                  var gY
                  gZ.emit('Shell.PWDEnabled')
                  gZ.Fa(gz.Continue)
                  var gI =
                    null === (gY = uN.StorageKey) || void 0 === gY
                      ? void 0
                      : gY.forcePlay
                  gI && !yk(gI, false) && yS(gI, true)
                  gZ.component.destroy(gg)
                  gZ.emitState('PveCheckComplete')
                },
                onDiscontinue: function () {
                  gZ.Fa(gz.QuitPage)
                },
              })
              ;(gW !== gV.ES6NotSupported &&
                gW !== gV.NativeWebGLNotSupported &&
                gW !== gV.WebGLSupportedButDisabled &&
                gW !== gV.WebGLNotSupported &&
                gW !== gV.InsecureContext) ||
                this.Fa()
              this.view.appendTo(gg, 'overlay')
              this.view.show(gg)
              this.emit('Shell.PWDDisabled')
            }),
            (gQ.prototype.La = function (gW) {
              var gZ
              switch (gW) {
                case gV.BrowserNotInclude:
                  gZ = '(pve - browser not included)'
                  break
                case gV.BrowserVersionTooLow:
                  gZ = '(pve - browser version too low)'
                  break
                case gV.WebGLNotSupported:
                  gZ = '(pve - webgl not support)'
                  break
                case gV.WebGLSupportedButDisabled:
                  gZ = '(pve - webgl supported but disabled)'
                  break
                case gV.NativeBrowserTooLow:
                  gZ = '(pve - native browser version too low)'
                  break
                case gV.OSVersionTooLow:
                  gZ = '(pve - os version too low)'
                  break
                case gV.NativeWebGLNotSupported:
                  gZ = '(pve - native webgl not support)'
                  break
                case gV.AdblockDetected:
                  gZ = '(pve - adblock detected)'
                  break
                case gV.APINotDetected:
                case gV.ES6NotSupported:
                  gZ = '(pve - api not detected)'
                  break
                case gV.InsecureContext:
                  gZ = '(pve - insecure context)'
                  break
                default:
                  gZ = ''
              }
              return gZ
            }),
            (gQ.prototype.Fa = function (gW) {
              var gZ
              switch (this.state.param.reason) {
                case gV.BrowserNotInclude:
                case gV.BrowserVersionTooLow:
                  gZ = 'browser not compatible'
                  break
                case gV.WebGLNotSupported:
                  gZ = 'webgl not supported'
                  break
                case gV.WebGLSupportedButDisabled:
                  gZ = 'webgl supported but disabled'
                  break
                case gV.LowSpec:
                  gZ = '(pve - spec too low)'
                  break
                case gV.NativeBrowserTooLow:
                  gZ = 'native browser version too low'
                  break
                case gV.OSVersionTooLow:
                  gZ = 'os version too low'
                  break
                case gV.NativeWebGLNotSupported:
                  gZ = 'native webgl not support'
                  break
                case gV.AdblockDetected:
                  gZ = 'adblock detected'
                  break
                case gV.APINotDetected:
                  gZ = 'api not detected'
                  break
                case gV.ES6NotSupported:
                  gZ = 'es6 not supported'
                  break
                case gV.InsecureContext:
                  gZ = 'insecure context'
                  break
                default:
                  gZ = 'unknown'
              }
              e5.ga.sendEvent(uw, 'poor_visit_experience', {
                reason: gZ,
                action: gW,
              })
            }),
            gQ
          )
        })(g5),
        gj = {},
        gF = function (gp) {
          var gQ = gj[gp]
          gQ ? (gQ.t = Date.now()) : ((gQ = { t: Date.now() }), (gj[gp] = gQ))
        },
        gx = function (gp) {
          var gQ = gj[gp]
          if (gQ) {
            var gW = Date.now() - gQ.t
            return delete gj[gp], gW
          }
          return -1
        }
      !(function (gp) {
        gp.Es = ''
        gp.Ia = '_CCSettings'
        gp.Wa = '_builtins'
      })(gy || (gy = {}))
      var gO,
        gX = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.za = 0), (gW.Es = gy.Es), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('GameLoad')
              this.Ua()
            }),
            (gQ.prototype.qa = function () {
              var gW,
                gZ = this,
                gY = E[gy.Ia],
                gI = E.cc
              return !(
                (gY && gI) ||
                ((gW = gY ? eN.CCUndefinedError : eN.SettingsUndefinedError),
                gZ.emit(
                  'Error.Occurred',
                  {
                    context: 'Preload',
                    info: {
                      category: uw,
                      domain: eN.Domain,
                      code: gW,
                    },
                    report: true,
                  },
                  function () {
                    gZ.emit('Window.Reload')
                  }
                ),
                0)
              )
            }),
            (gQ.prototype.Ua = function () {
              var gW = this
              if (!this.qa()) {
                this.emit(
                  'Shell.ChangeProgressText',
                  KQ('GameShell.LoadingGame')
                )
                var gZ = E[gy.Ia]
                E[gy.Ia] = void 0
                var gY = cc[gy.Wa]
                cc[gy.Wa] = void 0
                var gI = Ey.getURLSearchParam().get('origin')
                  ? eI(
                      Ey.getURLSearchParam().get('origin'),
                      U1(location.pathname)
                    )
                  : ''
                cc.assetManager.init({
                  bundleVers: V2(
                    V2({}, gZ.bundleVers),
                    null == gY ? void 0 : gY.bundleVers
                  ),
                  server: gI,
                })
                var gC = cc.AssetManager.BuiltinBundleName,
                  gD = gC.RESOURCES,
                  gB = gC.INTERNAL,
                  gP = gC.MAIN,
                  h0 = gC.START_SCENE,
                  h1 = [gY ? eI(U1(gY.url), gY.folder, gB) : gB, gP]
                gZ.hasStartSceneBundle && h1.push(h0)
                gZ.hasResourcesBundle && h1.push(gD)
                var h2 = cc.debug.DebugMode.INFO,
                  h3 = cc.debug.DebugMode.NONE,
                  h4 = {
                    id: 'GameCanvas',
                    scenes: gZ.scenes,
                    debugMode: gZ.debug ? h2 : h3,
                    showFPS: gZ.debug,
                    frameRate: 60,
                    groupList: gZ.groupList,
                    collisionMatrix: gZ.collisionMatrix,
                    renderMode: 0,
                    localeHint: KW(),
                  }
                e5.ga.sendEvent(uw, '')
                gF('')
                cc.assetManager['_onProgress'] = function () {
                  gW.za < 25 && ++gW.za
                  gW.emit('Shell.UpdateProgress', gW.za / 25)
                }
                var h5 = function (h9) {
                    if (h9) {
                      return (
                        gW.emit('Shell.PWDDisabled'),
                        void gW.emit(
                          'Error.Occurred',
                          {
                            context: 'Preload',
                            info: {
                              category: uw,
                              error: h9,
                              domain: eN.Domain,
                              code: eN.GameBootError,
                            },
                            report: true,
                          },
                          function () {
                            gW.emit('Window.Reload')
                          }
                        )
                      )
                    }
                    cc.view.resizeWithBrowserSize(true)
                    cc.view.enableRetina(true)
                    'land' === Ey.getOrientationMode()
                      ? cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE)
                      : cc.view.setOrientation(cc.macro.ORIENTATION_AUTO)
                    var hV = gZ.launchScene,
                      hz = gx('')
                    e5.ga.sendTiming(uw, '', hz)
                    e5.ga.sendEvent(uw, '')
                    gF('')
                    cc.assetManager.bundles
                      .find(function (hH) {
                        return hH.getSceneInfo(hV)
                      })
                      .loadScene(hV, void 0, void 0, function (hH) {
                        if (hH) {
                          return (
                            gW.emit('Shell.PWDDisabled'),
                            void gW.emit(
                              'Error.Occurred',
                              {
                                context: 'Preload',
                                info: {
                                  category: uw,
                                  domain: eN.Domain,
                                  code: eN.GameBootError,
                                  error: hH,
                                },
                                report: true,
                              },
                              function () {
                                gW.emit('Window.Reload')
                              }
                            )
                          )
                        }
                        gW.Ya()
                        var hb = gx('')
                        e5.ga.sendTiming(uw, '', hb)
                        ;(function (hE) {
                          if (Ey.audioSupported) {
                            var hK = (gK = Ey.audioContext)
                            'running' !== hK.state && hK.resume()
                            gU = hK.createBuffer(1, 1, 22050)
                            Ey.isIOS() && (K5.ScratchAudioBuffer = gU)
                          }
                          hE && hE()
                        })(function () {
                          cc.assetManager['_onProgress'] = void 0
                        })
                        gW.state.param.scene = hV
                        gW.emitState('GameLoadComplete')
                      })
                  },
                  h6 = 0,
                  h7 = function (h9) {
                    if ((h9 && h5(h9), ++h6 === h1.length + 1)) {
                      try {
                        cc.game.run(h4, h5)
                      } catch (hV) {
                        h5(hV)
                      }
                    }
                  }
                cc.assetManager.loadScript(
                  gZ.jsList.map(function (h9) {
                    return eI(gI, 'src/', h9)
                  }),
                  h7
                )
                for (var h8 = 0; h8 < h1.length; h8++) {
                  cc.assetManager.loadBundle(h1[h8], h7)
                }
              }
            }),
            (gQ.prototype.Ya = function () {
              this.emit('Shell.EnableUnloadAlert', true)
            }),
            gQ
          )
        })(g5),
        gM =
          ((function (gp) {
            function gQ() {
              return (null !== gp && gp.apply(this, arguments)) || this
            }
            V1(gQ, gp)
            gQ.prototype.onRun = function () {
              this.emitState('GameLoad')
              this.Ja()
            }
            gQ.prototype.Ja = function () {
              var gW = this,
                gZ = document.getElementById('background-img')
              gZ && ((gZ.style.height = '100%'), (gZ.style.bottom = '0'))
              this.emit('Shell.ChangeProgressText', KQ('GameShell.LoadingGame'))
              var gY = E.Ia
              E.Ia = void 0
              cc.assetManager.init({
                importBase: 'assets/others/import',
                nativeBase: 'assets/others/native',
              })
              var gI = cc.AssetManager.BuiltinBundleName,
                gC = gI.RESOURCES,
                gD = gI.INTERNAL,
                gB = gI.MAIN,
                gP = gI.START_SCENE,
                h0 = [gD, gB]
              gY.hasStartSceneBundle && h0.push(gP)
              gY.hasResourcesBundle && h0.push(gC)
              var h1 = document.getElementById('GameCanvas'),
                h2 = document.getElementById('opts-debug-mode'),
                h3 = document.getElementById('btn-show-fps'),
                h4 = document.getElementById('input-set-fps'),
                h5 = {
                  id: h1,
                  renderMode: 0,
                  debugMode: parseInt(h2.value, 10),
                  showFPS:
                    -1 !==
                    Array.prototype.indexOf.call(
                      null == h3 ? void 0 : h3.classList,
                      'checked'
                    ),
                  frameRate: parseInt(h4.value, 10),
                  groupList: gY.groupList,
                  collisionMatrix: gY.collisionMatrix,
                  localeHint: KW(),
                }
              cc.assetManager['_onProgress'] = function (hV, hz) {
                gW.emit('Shell.UpdateProgress', hV / hz)
              }
              var h6 = function (hV) {
                  if (hV) {
                    throw hV
                  }
                  E.updateResolution && E.updateResolution()
                  ;(cc.sys.os === cc.sys.OS_ANDROID &&
                    cc.sys.browserType === cc.sys.BROWSER_TYPE_UC) ||
                    cc.view.enableRetina(true)
                  cc.debug.setDisplayStats(true)
                  cc.game.pause()
                  cc.assetManager.loadAny(
                    {
                      url: 'preview-scene.json',
                      __isNative__: false,
                    },
                    void 0,
                    void 0,
                    function (hz, hH) {
                      if (!hz) {
                        var hb = hH.scene
                        hb.oe = hH.oe
                        cc.director.runSceneImmediate(hb, function () {
                          cc.game.resume()
                        })
                        cc.assetManager['_onProgress'] = void 0
                        gW.emit('Shell.BootStateChanged', 'GameLoadComplete')
                      }
                    }
                  )
                },
                h7 = 0,
                h8 = function (hV) {
                  if ((hV && h6(hV), ++h7 === h0.length + 1)) {
                    try {
                      cc.game.run(h5, h6)
                    } catch (hz) {
                      h6(hz)
                    }
                  }
                }
              cc.assetManager.loadScript(
                gY.jsList.map(function (hV) {
                  return 'plugins/' + hV
                }),
                h8
              )
              for (var h9 = 0; h9 < h0.length; h9++) {
                cc.assetManager.loadBundle(h0[h9], h8)
              }
            }
          })(g5),
          'SceneLoad'),
        gN = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Es = gM),
              (gW.Ms = 2),
              (gW.Xa = function (gZ) {
                if (gZ) {
                  gW.Ka(gZ)
                } else {
                  var gY = gx('')
                  e5.ga.sendTiming(uw, '', gY)
                  e5.ga.sendEvent(uw, '')
                  gF('')
                }
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState(gM)
              this.Es = ''
              this.Ms--
              e5.ga.sendEvent(uw, '')
              gF('')
              cc.director.loadScene(this.state.param.scene, this.Xa) ||
                this.Ka(Error('Load Scene Fail'))
            }),
            (gQ.prototype.Ka = function (gW) {
              var gZ = this
              this.emit('Shell.PWDDisabled')
              this.emit(
                'Error.Occurred',
                {
                  context: 'Preload',
                  info: {
                    category: uw,
                    domain: eN.Domain,
                    code: eN.GameBootError,
                    error: gW,
                  },
                  report: true,
                },
                function () {
                  gZ.emit('Window.Reload')
                }
              )
            }),
            gQ
          )
        })(g5),
        gA = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              var gW = this
              this.emitState('ProjectLoad')
              e5.ga.sendEvent(
                uw,
                '',
                void 0,
                this.state.param.reasonString,
                this.state.param.firstTimeRunApp ? uR : uG
              )
              gF('')
              this.emit(
                'Shell.ChangeProgressText',
                KQ('GameShell.Initialization')
              )
              this.emit('Shell.UpdateProgress', 0)
              var gZ = new UU(),
                gY = '',
                gI = '',
                gC = []
              if (
                (Kf.resource.hasEntry('shell-game-res/locale/locale.json') &&
                  gC.push({
                    src: (gI = Kf.resource.resolveUrl(
                      'shell-game-res/locale/locale.json'
                    )),
                    type: Ub.Json,
                  }),
                Kf.resource.hasEntry('src/settings.js')
                  ? gC.push({
                      src: (gY = Kf.resource.resolveUrl('src/settings.js')),
                      type: Ub.Script,
                    })
                  : ((this.Es = 'Shell.EnableSleep'), (this.Ms = 4)),
                0 !== gC.length)
              ) {
                var gD = 0,
                  gB = gC.length,
                  gP = false
                gZ.onError = function (h0) {
                  gW.emit('Shell.PWDDisabled')
                  var h1 = h0.src.split('?')[0],
                    h2 = {
                      category: uw,
                      domain: eN.Domain,
                      code: eN.LoadResourceError,
                      messages: [h1],
                    }
                  gW.emit('Error.Report', h2)
                  gP ||
                    ((gP = true),
                    gW.emit(
                      'Error.Occurred',
                      {
                        context: 'Preload',
                        info: h2,
                        report: false,
                      },
                      function () {
                        gW.emit('Window.Reload')
                      }
                    ))
                }
                gZ.onLoad = function (h0) {
                  switch (h0.src) {
                    case gY:
                      var h1 = gx('')
                      e5.ga.sendTiming(uw, '', h1)
                      break
                    case gI:
                      var h2 = h0.response
                      for (var h3 in h2) h2[h3] && Kp.extend(h2[h3], h3)
                  }
                  gW.emit('Shell.UpdateProgress', ++gD / gB)
                }
                gZ.onComplete = function () {
                  gW.emitState('ProjectLoadComplete')
                }
                e5.ga.sendEvent(uw, '')
                gF('')
                gZ.load(gC)
              } else {
                this.emitState('ProjectLoadComplete')
              }
            }),
            gQ
          )
        })(g5),
        gw = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.Es = ''), gW
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              var gW = this
              this.emitState('GameReady')
              var gZ = gx('')
              e5.ga.sendTiming(
                uw,
                '',
                gZ,
                this.state.param.firstTimeRunApp ? uR : uG
              )
              e5.ga.sendEvent(uw, '')
              this.state.param.showStartButton
                ? (this.component.create(fI),
                  this.view.append(fI, yL, yX.SafeArea),
                  this.component.updateState(fI, {
                    callback: function () {
                      gW.component.destroy(fI)
                      gW['$a']()
                    },
                  }),
                  this.view.show(fI),
                  this.emitState('GameAwaitStart'))
                : this['$a']()
            }),
            (gQ.prototype['$a'] = function () {
              this.on('Shell.BootStateChanged', this.tu)
              this.emitState('GameStarted')
            }),
            (gQ.prototype.tu = function (gW) {
              'GameStarted' === gW.payload &&
                (this.off('Shell.BootStateChanged', this.tu),
                e5.ga.sendEvent(uw, ''),
                (function () {
                  if (gK && gU) {
                    var gZ = gK.createBufferSource()
                    gZ.buffer = gU
                    gZ.connect(gK.destination)
                    void 0 === gZ.start ? gZ.noteOn(0) : gZ.start(0)
                    'function' == typeof gK.resume && gK.resume()
                    gZ.onended = function () {
                      gZ.disconnect(0)
                      gZ.onended = null
                      try {
                        gZ.buffer = null
                      } catch (gY) {}
                      gK = void 0
                      gU = void 0
                    }
                  }
                })(),
                cc.game.resume(),
                e3 && (e3(), (e3 = null)))
            }),
            gQ
          )
        })(g5),
        gR = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.nu = []),
              (gW.iu = false),
              (gW.eu = function (gZ) {
                for (var gY in ((gW.ru = {}), gZ)) gW.ru[gY] = 0
              }),
              (gW.ou = function (gZ) {
                if ((gZ.files && gW.su(gZ.files), gZ.files)) {
                  for (var gY = 0; gY < gZ.files.length; gY++) {
                    gW.au(gZ.files[gY]) && (e5.ga.sendEvent(uw, ''), gF(''))
                  }
                }
              }),
              (gW.jn = function (gZ) {
                if (gW.au(gZ.src)) {
                  var gY = gx('')
                  e5.ga.sendTiming(uw, '', gY)
                }
                if (gW.uu(gZ.src)) {
                  var gI = gZ.response
                  for (var gC in gI) gI[gC] && Kp.extend(gI[gC], gC)
                }
              }),
              (gW.oo = function (gZ, gY) {
                var gI = gW.ru
                if (gI && void 0 !== gI[gZ.name]) {
                  gI[gZ.name] = gY
                  var gC = 0,
                    gD = 0
                  for (var gB in gI) ++gC, (gD += gI[gB])
                  gW.emit('Shell.UpdateProgress', gD / gC)
                }
              }),
              (gW.cu = function (gZ, gY) {
                if (!gY.optional) {
                  var gI = gZ.filename
                  gI = gI.substring(gI.lastIndexOf('/') + 1)
                  gW.au(gI)
                    ? gW.hu(gZ.message, gZ.filename, eN.EngineScriptError)
                    : gW.hu(gZ.message, gZ.filename, eN.PluginScriptError)
                }
              }),
              (gW.lu = function (gZ) {
                gW.hu(gZ.err, void 0, gZ.errCode)
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.fu = function (gW) {
              var gZ = {
                  onDependencyResolved: this.eu,
                  onPreload: this.ou,
                  onLoad: this.jn,
                  onProgress: this.oo,
                  onComplete: gW,
                  onError: this.lu,
                  onScriptError: this.cu,
                },
                gY = this.state.param.packages
              this.plugin.load(gY, gZ)
            }),
            (gQ.prototype.du = function (gW, gZ) {
              var gY = {
                onDependencyResolved: this.eu,
                onPreload: this.ou,
                onLoad: this.jn,
                onProgress: this.oo,
                onComplete: gZ,
                onError: this.lu,
                onScriptError: this.cu,
              }
              this.plugin.load(gW, gY)
            }),
            (gQ.prototype.su = function (gW) {
              for (var gZ = 0; gZ < gW.length; gZ++) {
                var gY = gW[gZ].substring(gW[gZ].lastIndexOf('/') + 1)
                '.js' === gY.substring(gY.lastIndexOf('.')) && this.nu.push(gY)
              }
            }),
            (gQ.prototype.au = function (gW) {
              return -1 !== gW.indexOf('cocos2d-js')
            }),
            (gQ.prototype.uu = function (gW) {
              return -1 !== gW.indexOf('/locale.')
            }),
            (gQ.prototype.hu = function (gW, gZ, gY) {
              var gI = this,
                gC = {
                  category: uw,
                  domain: eN.Domain,
                  code: gY,
                  error: gW,
                  messages: gZ ? ['src: ' + gZ] : void 0,
                }
              this.emit('Error.Report', gC)
              this.iu ||
                ((this.iu = true),
                this.emit(
                  'Error.Occurred',
                  {
                    context: 'Preload',
                    info: gC,
                    report: false,
                  },
                  function () {
                    gI.emit('Window.Reload')
                  }
                ))
            }),
            gQ
          )
        })(g5),
        gG = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.Au = function () {
                gW.emit('Shell.ChangeProgressText', KQ('GameShell.Complete'))
                gW.emit('Shell.UpdateProgress', 1)
                gW.emit('Shell.ChangeProgressVisible', false)
                setTimeout(function () {
                  gW.emitState('LatePluginLoadComplete')
                }, 500)
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('LatePluginLoad')
              this.fu(this.Au)
            }),
            gQ
          )
        })(gR),
        gT = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.vu = function () {
                gW.emitState('DynamicPluginLoadComplete')
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('DynamicPluginLoad')
              this.pu && this.load(this.pu)
            }),
            (gQ.prototype.load = function (gW) {
              this.du(gW, this.vu)
            }),
            gQ
          )
        })(gR),
        gm = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.vu = function () {
                gW.emitState('PluginLoadComplete')
              }),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('PluginLoad')
              this.emit('Shell.ChangeProgressText', KQ('GameShell.Loading'))
              this.emit('Shell.UpdateProgress', 0)
              this.gu()
              this.fu(this.vu)
            }),
            (gQ.prototype.gu = function () {
              var gW = this.state.param.packages,
                gZ = uN.Plugins,
                gY = Ey.getURLSearchParam().get('plugin')
              gY && (gZ = gZ.concat.apply(gZ, gY.split(',')))
              for (var gI = 0; gI < gZ.length; gI++) {
                var gC = gZ[gI],
                  gD = ey(gC)
              }
            }),
            gQ
          )
        })(gR),
        gd = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('NativeLoad')
              this.jn()
            }),
            (gQ.prototype.jn = function () {
              this.emitState('NativeLoadComplete')
            }),
            gQ
          )
        })(g5),
        gL = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('WebWorkerLoad')
              this.jn()
            }),
            (gQ.prototype.jn = function () {
              return V3(this, void 0, void 0, function () {
                return V4(this, function (gW) {
                  switch (gW.label) {
                    case 0:
                      return [3, 2]
                    case 1:
                      return (
                        gW.sent(), this.emitState('WebWorkerLoadComplete'), [2]
                      )
                    case 2:
                      return (
                        'serviceWorker' in navigator &&
                          navigator.serviceWorker
                            .register('/shared/service-worker/sw.js', {
                              scope: '/',
                            })
                            .then(function () {})
                            .catch(function () {}),
                        this.emitState('WebWorkerLoadComplete'),
                        [2]
                      )
                  }
                })
              })
            }),
            gQ
          )
        })(g5),
        gS = (function (gp) {
          function gQ() {
            return (null !== gp && gp.apply(this, arguments)) || this
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onRun = function () {
              this.emitState('Complete')
            }),
            (gQ.prototype.onDestroy = function () {
              this.component.create(gT)
            }),
            gQ
          )
        })(g5),
        gk = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (
              (gW.mu = gW.bu()),
              (gW['_u'] = {
                param: {
                  bootState: 'Init',
                  packages: {},
                },
              }),
              (gW.wu = false),
              gW
            )
          }
          return (
            V1(gQ, gp),
            (gQ.prototype.onCreate = function () {
              this.component.create(g4)
              this.component.create(g1)
              this.component.create(g2)
              var gW = this.component.getInstance(g2)
              gW &&
                (gW.registerEvent('Shell.UpdateProgress'),
                gW.registerEvent('Error.Occurred'),
                gW.registerEvent('Shell.BootStateChanged'))
              this.component.create(fZ)
              this.on('Shell.BootStateChanged', this.xu, 'High')
              this.on('Shell.BootStateChanged', this.yu, 'Low')
            }),
            (gQ.prototype.onStateChange = function (gW) {
              gp.prototype.onStateChange &&
                gp.prototype.onStateChange.call(this, gW)
              this.wu ||
                ((this.wu = true), this.emit('Shell.BootStateChanged', 'Init'))
            }),
            (gQ.prototype.onDestroy = function () {
              this.wu = false
            }),
            (gQ.prototype.xu = function (gW) {
              switch (gW.payload) {
                case 'ShellLoadComplete':
                  this.Hu(),
                    this.Vu(),
                    this.Su(),
                    this.ku(),
                    this.Eu(),
                    fN(fx, fX, 'icon'),
                    fN(fO, fM, 'apple-touch-icon'),
                    this.Cu(),
                    this.emit('Shell.PWDUseCustomAlert', true)
                  break
                case 'PveCheckComplete':
                  this.Mu()
                  break
                case 'ProjectLoadComplete':
                  this.Bu(), this.ju()
                  break
                case 'GameReady':
                  this.component.destroy(g2)
                  break
                case 'GameStarted':
                  this.view.show(fC),
                    this.emit('Shell.FocusCanvas'),
                    this.component.destroy(yJ),
                    this.component.destroy(yL)
              }
            }),
            (gQ.prototype.yu = function (gW) {
              var gZ = gW.payload
              this.Gu && (this.component.destroy(this.Gu), (this.Gu = void 0))
              var gY = this.mu[gZ]
              gY &&
                ((this['_u'].param.bootState = gZ),
                (this.Gu = gY),
                this.component.create(gY),
                this.component.updateState(gY, this['_u']))
              'Complete' === gZ && this.state.complete && this.state.complete()
            }),
            (gQ.prototype.Vu = function () {
              if (!document.head.querySelector('[rel="shortcut icon"]')) {
                var gW = document.createElement('link')
                document.head.appendChild(gW)
              }
            }),
            (gQ.prototype.Su = function () {
              var gW,
                gZ =
                  null === (gW = uN.StorageKey) || void 0 === gW
                    ? void 0
                    : gW.firstRunAPP,
                gY = gZ ? yk(gZ, true) : void 0
              gY && gZ && yS(gZ, false)
              this['_u'].param.firstTimeRunApp = gY
            }),
            (gQ.prototype.Eu = function () {
              this.component.create(yw)
            }),
            (gQ.prototype.ku = function () {
              this.component.create(y6)
              this.component.create(yG)
              this.component.create(fC)
              this.component.create(yL)
              this.component.create(yJ)
              this.component.create(yq)
              this.view.append(yL, yG)
              this.view.append(fZ, yL)
              this.component.updateState(fZ, { state: 'setup' })
            }),
            (gQ.prototype.Pu = function () {
              var gW = this
              this.component.updateState(fZ, { state: 'start' })
              this.emit('Shell.GetScale', void 0, function (gZ) {
                if (!gZ.error) {
                  var gY = gZ.response
                  gW.emit('Shell.Scaled', gY)
                }
              })
            }),
            (gQ.prototype.Zu = function () {
              var gW = this,
                gZ = document.getElementById('initial-loader')
              gZ &&
                (gZ.classList.add('hide-loading'),
                setTimeout(function () {
                  var gY, gI
                  null === (gY = gZ.parentElement) ||
                    void 0 === gY ||
                    gY.removeChild(gZ)
                  var gC = document.getElementById('loader-style')
                  null === (gI = null == gC ? void 0 : gC.parentElement) ||
                    void 0 === gI ||
                    gI.removeChild(gC)
                  gW.Pu()
                }, 350))
            }),
            (gQ.prototype.Hu = function () {
              var gW = this,
                gZ = Date.now() - uN.BootTime
              setTimeout(
                function () {
                  gW.Zu()
                },
                gZ < 1800 ? 1800 - gZ : 0
              )
            }),
            (gQ.prototype.Cu = function () {
              e5.setStatusBarStyleHandler = function (gW) {
                var gZ = E.app
                gZ && gZ.emit('SetStatusBar', gW)
              }
            }),
            (gQ.prototype.Bu = function () {
              var gW = this
              e5.is1959Supported = Ey.getIs1959Supported()
              e5.requestGameStartHandler = function (gZ, gY) {
                var gI = gx('')
                e5.ga.sendTiming(uw, '', gI)
                e3 = gY
                gW['_u'].param.showStartButton = gZ
                gW.emit(
                  'Shell.ChangeProgressText',
                  KQ('GameShell.LoadingResource')
                )
                gW.emit('Shell.ChangeProgressVisible', true)
                gW.emit('Shell.BootStateChanged', 'SceneLoadComplete')
              }
              e5.addPreloadPluginHandler = function (gZ, gY) {
                var gI = 'string' == typeof gZ ? gZ : gZ.name,
                  gC = 'object' == typeof gY ? gY : void 0,
                  gD = ey(gI)
                gD.config = gC
                gD.optional = true
                gW['_u'].param.packages[gI] = gD
              }
              e5.loadPluginHandler = function (gZ) {
                var gY,
                  gI = ey(gZ)
                gI.optional = true
                gW['_u'].param.packages[gZ] = gI
                var gC = { name: gI }
                null === (gY = gW.component.getInstance(gT)) ||
                  void 0 === gY ||
                  gY.load(gC)
              }
              e5.setProgressMessageHandler = function (gZ) {
                gW.emit('Shell.ChangeProgressText', gZ)
              }
              e5.setProgressHandler = function (gZ, gY) {
                var gI = (gZ / gY) * 1
                isNaN(gI) && (gI = 0)
                gW.emit('Shell.UpdateProgress', gI)
              }
              e5.setProgressVisibleHandler = function (gZ) {
                gW.emit('Shell.ChangeProgressVisible', gZ)
              }
              e5.enableCanvasTouchPropagation = function (gZ) {
                var gY = cc.internal.inputManager
                gY && gY.allowTouchPropagation && gY.allowTouchPropagation(gZ)
              }
            }),
            (gQ.prototype.ju = function () {
              document.title = Kp.t(uN.LocalizedTitleKey)
            }),
            (gQ.prototype.Mu = function () {
              this.component.create(gT)
            }),
            (gQ.prototype.bu = function () {
              return {
                Init: gL,
                WebWorkerLoadComplete: gd,
                NativeLoadComplete: g9,
                ShellLoadComplete: gv,
                PveCheckComplete: gm,
                PluginLoadComplete: gA,
                ProjectLoadComplete: gX,
                GameLoadComplete: gN,
                SceneLoadComplete: gG,
                LatePluginLoadComplete: gw,
                GameStarted: gS,
              }
            }),
            gQ
          )
        })(eX)
      !(function (gp) {
        gp.Ru = '_config'
        gp.Ou = '_map'
      })(gO || (gO = {}))
      var gJ = (function (gp) {
          function gQ() {
            var gW = (null !== gp && gp.apply(this, arguments)) || this
            return (gW.Du = Object.create(null)), gW
          }
          return (
            V1(gQ, gp),
            Object.defineProperty(gQ.prototype, 'bundleVers', {
              get: function () {
                return this.Du
              },
              set: function (gW) {
                this.Du = gW
              },
              enumerable: false,
              configurable: true,
            }),
            (gQ.prototype.loadBundle = function (gW, gZ, gY) {
              var gI = this,
                gC = function (h0, h1) {
                  gY &&
                    setTimeout(function () {
                      gY(h0, h1)
                    }, 0)
                }
              if (cc) {
                var gD = [],
                  gB = Array.isArray(gW),
                  gP = function (h0) {
                    var h1 = h0.shift()
                    if (h1) {
                      var h2 = cc.assetManager.getBundle(h1)
                      if (h2) {
                        gD.push(h2)
                        gP(h0)
                      } else {
                        var h3 = gZ.bundleInfo.bundleBaseUrl + h1,
                          h4 = { version: gI.Du[h1] }
                        cc.assetManager.loadBundle(h3, h4, function (h5, h6) {
                          h6
                            ? (gD.push(h6),
                              (function (h7, h8) {
                                var h9 = '@'.concat(h7.name, '/'),
                                  hV = h7[gO.Ru].paths[gO.Ou],
                                  hz = {
                                    VERSION: '0.7.28',
                                    BROWSER: {
                                      NAME: gC,
                                      MAJOR: 'major',
                                      VERSION: gP,
                                    },
                                    CPU: { ARCHITECTURE: h0 },
                                    DEVICE: {
                                      MODEL: gI,
                                      VENDOR: gB,
                                      TYPE: gD,
                                      CONSOLE: h1,
                                      MOBILE: h2,
                                      SMARTTV: h4,
                                      TABLET: h3,
                                      WEARABLE: h5,
                                      EMBEDDED: h6,
                                    },
                                    ENGINE: {
                                      NAME: gC,
                                      VERSION: gP,
                                    },
                                    OS: {
                                      NAME: gC,
                                      VERSION: gP,
                                    },
                                    onPreload: h3,
                                    onProgress: h4,
                                    onSuccess: h6,
                                    onError: h5,
                                  }
                                Object.keys(hV).map(function (hH) {
                                  hz[h9 + hH] = ''
                                })
                                h8.resource.addAssets(hz)
                              })(h6, gZ),
                              gP(h0))
                            : (h5 ||
                                (h5 = Error('Cannot find res after loading')),
                              gC(h5, void 0))
                        })
                      }
                    } else {
                      gC(void 0, gB ? gD : gD[0])
                    }
                  }
                gP(gB ? gW.slice() : [gW])
              } else {
                gC(Error('CocosManager loadBundle - cc not found'), void 0)
              }
            }),
            (gQ.prototype.getURL = function (gW, gZ) {
              var gY = this.context.getContext(gZ)
              if (!gY) {
                throw Error('Unable to get bundle context')
              }
              return gY.resource.resolveUrl(gW, true)
            }),
            (gQ.prototype.hasEntry = function (gW) {
              return this.context.resource.hasEntry(gW)
            }),
            (gQ.prototype.resolveBundleName = function (gW, gZ) {
              var gY = gZ.bundleBaseUrl,
                gI = this.Du[gW]
              if (gI && gY && gW) {
                if ('string' == typeof gI) {
                  return {
                    index: eI(gY, gW, 'index.'.concat(gI, '.js')),
                    config: eI(gY, gW, 'config.'.concat(gI, '.json')),
                  }
                }
                var gC = gI.config,
                  gD = gI.index
                if (gC && gD) {
                  return {
                    index: eI(gY, gW, 'index.'.concat(gD, '.js')),
                    config: eI(gY, gW, 'index.'.concat(gC, '.js')),
                  }
                }
              }
            }),
            gQ
          )
        })(UG),
        gq = (function () {
          function gp() {}
          return (
            (gp.prototype.load = function (gQ) {
              return V3(this, void 0, void 0, function () {
                return V4(this, function (gW) {
                  switch (gW.label) {
                    case 0:
                      return (
                        this.Nu(),
                        this.Qu(),
                        this.Tu(),
                        this.Lu(),
                        this.Fu(),
                        [4, f1]
                      )
                    case 1:
                      return 1 !== gW.sent()
                        ? [2]
                        : (this.Iu(gQ), [4, this.Wu.component.create(gk)])
                    case 2:
                      return gW.sent(), [4, this.zu()]
                    case 3:
                      return gW.sent(), [2]
                  }
                })
              })
            }),
            (gp.prototype.zu = function () {
              var gQ = this
              return new Promise(function (gW) {
                gQ.Wu.component.updateState(gk, {
                  complete: function () {
                    gQ.Wu.component.destroy(gk)
                    setTimeout(gW, 0)
                  },
                })
              })
            }),
            (gp.prototype.Fu = function () {
              var gQ,
                gW = EV()
              gW !== location && (gQ = [gW.origin])
              var gZ = uN.Blobs
              K4 = {
                cacheOrigins: gQ,
                blobRegistry: gZ,
              }
            }),
            (gp.prototype.Nu = function () {
              e5.ga = new eV()
              E.onGAReceiveError = KF
              E.onerror && (E.onerror.onFormat = KF)
            }),
            (gp.prototype.Qu = function () {
              var gQ = Ey.getURLSearchParam().get('language')
              gQ = gQ
                ? this.Uu(gQ)
                : navigator.language
                ? this.Uu(navigator.language)
                : 'en'
              Kp.locale(gQ)
            }),
            (gp.prototype.Lu = function () {
              e5.Error = yB
              e5.ClientError = yp
              e5.ServerError = yW
              e5.NetworkError = yQ
              e5.GameShellError = eN
              e5.WebSocketError = yZ
            }),
            (gp.prototype.Uu = function (gQ) {
              var gW = uN.SupportedLanguages,
                gZ = 'en'
              if (-1 !== gW.indexOf(gQ)) {
                gZ = gQ
              } else {
                for (var gY = 0, gI = gW; gY < gI.length; gY++) {
                  var gC = gI[gY]
                  if (0 === gQ.indexOf(gC)) {
                    gZ = gC
                    break
                  }
                }
              }
              return gZ
            }),
            (gp.prototype.Tu = function () {
              document.title = uN.Name
            }),
            (gp.prototype.Iu = function (gQ) {
              !gQ &&
                (gQ = {
                  name: void 0,
                  version: void 0,
                  baseUrl: void 0,
                })
              uN.ShellDir
                ? (gQ.baseUrl = uN.SharedPath + uN.ShellDir)
                : (gQ.baseUrl = uN.MainDir)
              var gW = new fF(),
                gZ = {
                  bundle: gW,
                  component: new UT(),
                  event: new UB(),
                  view: new f2(),
                  resource: new f3(),
                  plugin: new fj(),
                  cocos: new gJ(),
                }
              !(function (h3) {
                Object.assign(ex, h3)
                eE = ex
              })(gZ)
              var gY = Object.assign({}, gQ),
                gI = gW.createBundle(gY)
              for (var gC in gZ) {
                var gD = gZ[gC]
                gD && gD.onInstantiate(gI)
              }
              var gB = Object.assign({}, gQ)
              gB.name = 'Shell'
              var gP,
                h0 = (this.Wu = gW.createBundle(gB))
              UU.context = this.Wu
              e5.context = this.Wu
              y8(this.Wu)
              gP = function (h3) {
                h0.event.emit('Error.Log', {
                  tag: 'Deprecated',
                  message: h3,
                })
              }
              ;(function (h3) {
                try {
                  h3.Ct()
                  h3.Mt
                } catch (h4) {
                  return false
                }
              })(new Ew(ET, Em, Ed))
              ES = gP || EL
              var h1,
                h2 = Object.assign({}, gQ)
              h2.name = 'Game'
              h2.baseUrl = uN.GameDir
              ;(function (h3) {
                Kf = h3
              })(gW.createBundle(h2))
              h1 = {
                AbstractComponent: eO,
                AbstractEventComponent: eX,
                AbstractViewComponent: eM,
                AbstractCocosComponent: Uv,
                AbstractPluginComponent: UA,
                CocosComponent: Ug,
                PluginMainComponent: Uj,
                LoadType: Ub,
                Loader: UU,
              }
              E.plugin = h1
            }),
            gp
          )
        })()
      e5.start = function (gp, gQ, gW) {
        var gZ = function (gY) {
          if (gW) {
            gW(gY)
          } else {
            if (gY) {
              throw gY
            }
          }
        }
        try {
          ;(function (gY) {
            !gY && (gY = {})
            ;(uN = Object.assign({}, gY)).Name =
              uN.Name || uN.AppName || 'Unnamed'
            uN.Version = uN.Version || uN.AppVersion || '0.0.0'
            uN.AssetTable = uN.AssetTable || {
              version: 2,
              assets: {},
            }
            uN.AspectRatio = uN.AspectRatio || void 0
            uN.GameDir = uN.GameDir || ''
            uN.Identifier = uN.Identifier || void 0
            uN.Index = uN.Index || void 0
            uN.LocalizedTitleKey = uN.LocalizedTitleKey || 'Game.Title'
            uN.MainDir = uN.MainDir || ''
            uN.Orientation =
              void 0 !== uN.Orientation ? uN.Orientation : uO.Portrait
            uN.SupportXSMaxRatio = +uN.SupportXSMaxRatio
            uN.ThemeColor = uN.ThemeColor || '#FFFFFF'
            uN.BootTime = uN.BootTime || 0
            uN.SharedPath || (uN.SharedPath = '../shared/')
            ;(function () {
              if (void 0 === uN.Plugins) {
                uN.Plugins = []
              } else {
                var gI = uN.Plugins
                if (gI && 'string' == typeof gI) {
                  gI = gI.split(',')
                  for (var gC = 0; gC < gI.length; ++gC) {
                    gI[gC] = gI[gC].trim()
                  }
                }
                uN.Plugins = gI
              }
            })()
            ;(function () {
              if (
                (uN.CompatibleCondition &&
                  (uN.Requirements = uN.CompatibleCondition),
                void 0 === uN.Requirements)
              ) {
                uN.Requirements = {
                  minMemory: 1024,
                  whiteList:
                    'chrome-40,chrome webview-40,firefox-44,safari-10,edge-15.15063',
                  minOSVersion: 'iOS-10,Android-5,MacOS-10.10,Windows-7',
                }
              } else {
                var gI = uN.Requirements
                if (gI && 'string' == typeof gI) {
                  var gC = new URLSearchParams(gI)
                  gI = {
                    minMemory: +gC.get('minMemory'),
                    whiteList: gC.get('whiteList'),
                    minOSVersion: gC.get('minOSVersion'),
                  }
                }
                uN.Requirements = gI
              }
            })()
            ;(function () {
              if (void 0 === uN.SupportedLanguages) {
                uN.SupportedLanguages = ['en']
              } else {
                var gI = uN.SupportedLanguages
                if (gI && 'string' == typeof gI) {
                  gI = gI.split(',')
                  for (var gC = 0; gC < gI.length; ++gC) {
                    gI[gC] = gI[gC].trim()
                  }
                }
                uN.SupportedLanguages = gI
              }
            })()
            ;(function () {
              if (uN.StorageKey) {
                var gI = uN.StorageKey
                gI && 'string' == typeof gI && (gI = JSON.parse(gI))
                void 0 !== gI.forcePlay &&
                  (uN.StorageKey.forcePlay = gI.forcePlay)
                void 0 !== gI.firstRunAPP &&
                  (uN.StorageKey.firstRunAPP = gI.firstRunAPP)
              } else {
                uN.StorageKey = {
                  forcePlay: 'shell:'.concat(uN.Name, '_force_play'),
                  firstRunAPP: 'shell/'.concat(uN.Name, ':first_time_run_apps'),
                }
              }
            })()
            uN = Object.freeze(uN)
          })(gQ)
          new gq().load(gp).then(gZ, gZ)
        } catch (gY) {
          gZ(gY)
        }
      }
    })()
  })()
})()
