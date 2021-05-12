(this['webpackJsonpsole-composer'] =
  this['webpackJsonpsole-composer'] || []).push([
  [0],
  {
    152: function (e, t, a) {},
    188: function (e, t, a) {},
    194: function (e, t, a) {},
    196: function (e, t, a) {},
    197: function (e, t, a) {},
    198: function (e, t, a) {},
    199: function (e, t, a) {},
    201: function (e, t, a) {},
    202: function (e, t, a) {},
    203: function (e, t, a) {},
    204: function (e, t, a) {},
    205: function (e, t, a) {},
    206: function (e, t, a) {},
    207: function (e, t, a) {},
    304: function (e, t, a) {},
    339: function (e, t, a) {},
    340: function (e, t, a) {},
    341: function (e, t, a) {},
    342: function (e, t, a) {},
    343: function (e, t, a) {},
    344: function (e, t, a) {},
    345: function (e, t, a) {},
    346: function (e, t, a) {},
    347: function (e, t, a) {},
    348: function (e, t, a) {},
    349: function (e, t, a) {},
    350: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        s = a(136),
        i = a.n(s),
        c = (a(152), a(23)),
        o = a(21),
        l = a(13),
        u = a(1),
        d = Object(n.createContext)(null),
        b = function (e) {
          var t = e.children,
            a = Object(n.useState)(),
            r = Object(l.a)(a, 2),
            s = r[0],
            i = r[1];
          return (
            Object(n.useEffect)(function () {
              fetch('/auth/getsession', {
                method: 'GET',
                credentials: 'include',
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  e.err || i(e);
                });
            }, []),
            Object(u.jsx)(d.Provider, { value: s, children: t })
          );
        };
      b.context = d;
      var v,
        h,
        j,
        p,
        g,
        f,
        x,
        O,
        m,
        y,
        C,
        w = b,
        N = a(97),
        k = a.n(N),
        D =
          (a(187),
          a(188),
          function (e, t) {
            return fetch(e, { method: t });
          }),
        S = function (e, t, a) {
          return fetch(e, {
            method: t,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(a),
          });
        },
        V = a(15),
        L = a(16),
        I = L.a.div(
          v ||
            (v = Object(V.a)([
              '\n  background-color: #f9f9f9;\n  height: 100%;\n',
            ]))
        ),
        P = L.a.div(
          h ||
            (h = Object(V.a)([
              '\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 22px;\n  color: #f9f9f9;\n  background-color: #000000;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  a {\n    color: #ffffff;\n    text-decoration: none;\n  }\n',
            ]))
        ),
        T = L.a.p(j || (j = Object(V.a)(['\n  margin: 0;\n']))),
        R = L.a.div(
          p ||
            (p = Object(V.a)([
              '\n  width: 100%;\n  max-width: 700px;\n  margin: auto;\n  margin-top: 50px;\n',
            ]))
        ),
        M = L.a.div(
          g ||
            (g = Object(V.a)([
              '\n  margin-top: 8px;\n  margin-bottom: 32px;\n  width: 100%;\n',
            ]))
        ),
        E = L.a.p(
          f ||
            (f = Object(V.a)([
              "\n  font-family: 'Poppins', 'Roboto', 'Ariel';\n  margin: 0px;\n  margin-left: 16px;\n  margin-bottom: 8px;\n  font-size: 24px;\n  font-weight: bold;\n",
            ]))
        ),
        z = L.a.div(
          x ||
            (x = Object(V.a)([
              '\n  margin-bottom: 60px;\n  text-align: center;\n',
            ]))
        ),
        A = '#000000',
        B =
          ('0.1rem solid '.concat('#000000'),
          L.a.button(
            O ||
              (O = Object(V.a)([
                '\n  box-shadow: none;\n  margin: 0;\n  color: ',
                ';\n  background-color: ',
                ';\n  border: none;\n  border-radius: 5px;\n  width: 100%;\n\n  &:active {\n    box-shadow: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus {\n    outline: none;\n  }\n',
              ])),
            '#ffffff',
            A
          )),
        U = Object(L.a)(B)(
          m ||
            (m = Object(V.a)([
              '\n  height: 40px;\n  background-color: ',
              ';\n  padding: 8px;\n  font-size: 13px;\n  text-transform: capitalize;\n  margin-top: 15px;\n',
            ])),
          function (e) {
            return e.google ? '#4285f4' : A;
          }
        ),
        G = Object(L.a)(B)(
          y ||
            (y = Object(V.a)([
              '\n  height: 40px;\n  padding: 8px;\n  font-size: 13px;\n  text-transform: capitalize;\n  padding-left: 23px;\n  padding-right: 23px;\n  width: unset;\n',
            ]))
        ),
        _ = Object(L.a)(B)(
          C ||
            (C = Object(V.a)([
              '\n  width: calc(100% - 32px);\n  background-color: #000000;\n  height: 50px;\n  font-size: 16px;\n  margin-bottom: 40px;\n  padding: 0;\n  margin-left: 16px;\n  margin-right: 16px;\n',
            ]))
        );
      var F,
        W,
        X,
        Y,
        H,
        J = function () {
          var e = Object(o.f)();
          return Object(u.jsx)(_, {
            onClick: function () {
              e.push('/designer');
            },
            children: 'N E W \xa0 D E S I G N',
          });
        },
        q = L.a.div(
          F ||
            (F = Object(V.a)([
              '\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-top: 0px;\n  flex: 0 0 auto;\n',
            ]))
        ),
        Z = L.a.div(
          W ||
            (W = Object(V.a)([
              '\n  width: 100%;\n  background-color: #f0f0f0;\n  border-radius: 8px;\n\n  img {\n    width: 100%;\n  }\n',
            ]))
        ),
        $ = L.a.p(
          X ||
            (X = Object(V.a)([
              '\n  color: #000000;\n  font-size: 22px;\n  margin-top: 9px;\n  margin-bottom: 0px;\n  margin-left: 5px;\n',
            ]))
        ),
        K = L.a.p(
          Y ||
            (Y = Object(V.a)([
              '\n  color: #000000;\n  font-size: 14px;\n  margin-top: 6px;\n  margin-bottom: 0px;\n  margin-left: 5px;\n',
            ]))
        ),
        Q = L.a.p(
          H ||
            (H = Object(V.a)([
              '\n  color: #777;\n  font-size: 14px;\n  margin-top: 6px;\n  margin-bottom: 0px;\n  margin-left: 5px;\n',
            ]))
        );
      var ee = function (e) {
        var t = e.props,
          a = t._id,
          n = t.title,
          r = t.configId,
          s = t.author,
          i = t.screenshot,
          c = Object(o.f)();
        return Object(u.jsxs)(q, {
          onClick: function () {
            c.push('/designer/'.concat(a));
          },
          children: [
            Object(u.jsx)(Z, {
              children: Object(u.jsx)('img', {
                src: 'api/assets/images/'.concat(i),
                alt: 'feature-design',
              }),
            }),
            Object(u.jsx)($, { children: n }),
            Object(u.jsx)(K, { children: r.modelName }),
            Object(u.jsx)(Q, { children: s.firstName }),
          ],
        });
      };
      a(194);
      var te,
        ae,
        ne,
        re,
        se,
        ie,
        ce = function () {
          var e = Object(o.f)();
          return Object(u.jsx)('div', {
            className: 'splash-design-button standard-button',
            onClick: function () {
              e.push('/designer');
            },
            children: Object(u.jsx)('button', {
              children: 'S T A R T \xa0 D E S I G N I N G',
            }),
          });
        },
        oe = 320,
        le = 370,
        ue = 395,
        de = 600,
        be = 768,
        ve = 835,
        he = 992,
        je = 1100,
        pe = 1200,
        ge = 1440,
        fe = '@media',
        xe = {
          mobileXXS: ''.concat(fe, ' (max-width: ').concat(oe, 'px)'),
          mobileXS: ''.concat(fe, ' (max-width: ').concat(le, 'px)'),
          mobileS: ''.concat(fe, ' (max-width: ').concat(ue, 'px)'),
          mobile: ''.concat(fe, ' (max-width: ').concat(de, 'px)'),
          tablet: ''.concat(fe, ' (max-width: ').concat(be, 'px)'),
          laptopS: ''.concat(fe, ' (max-width: ').concat(ve, 'px)'),
          laptop: ''.concat(fe, ' (max-width: ').concat(he, 'px)'),
          desktopS: ''.concat(fe, ' (min-width: ').concat(je, 'px)'),
          desktop: ''.concat(fe, ' (min-width: ').concat(pe, 'px)'),
          desktopL: ''.concat(fe, ' (min-width: ').concat(ge, 'px)'),
        },
        Oe = xe.mobile,
        me = L.a.div(
          te ||
            (te = Object(V.a)([
              '\n  height: 65vh;\n  margin-top: 15vh;\n  display: flex;\n  max-width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n\n  ',
              ' {\n    flex-direction: column-reverse;\n    height: unset;\n    margin-top: 0px;\n  }\n',
            ])),
          Oe
        ),
        ye = L.a.div(
          ae ||
            (ae = Object(V.a)([
              '\n  height: 100%;\n  width: 100%;\n  margin-left: 5%;\n  margin-right: 5%;\n  width: 90%;\n\n  ',
              ' {\n    margin-top: 0px;\n    margin-bottom: 20px;\n    padding-right: 0px;\n    text-align: center;\n  }\n',
            ])),
          Oe
        ),
        Ce = L.a.p(
          ne ||
            (ne = Object(V.a)([
              '\n  font-size: 40px;\n  font-weight: bold;\n  margin: 0;\n  margin-top: 70px;\n  margin-bottom: 25px;\n\n  ',
              ' {\n    font-size: 30px;\n    margin-top: 30px;\n  }\n',
            ])),
          Oe
        ),
        we = L.a.p(
          re ||
            (re = Object(V.a)([
              '\n  font-size: 17px;\n  line-height: 150%;\n  margin: 0;\n  margin-bottom: 30px;\n',
            ]))
        ),
        Ne = L.a.div(
          se ||
            (se = Object(V.a)([
              '\n  height: 100%;\n  width: 100%;\n  margin-right: 5%;\n\n  ',
              ' {\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    padding-left: 1px;\n    margin-top: 90px;\n  }\n',
            ])),
          Oe
        ),
        ke = L.a.img(
          ie ||
            (ie = Object(V.a)(['\n  max-width: 100%;\n  max-height: 100%;\n']))
        );
      var De,
        Se,
        Ve,
        Le = function () {
          return Object(u.jsxs)(me, {
            children: [
              Object(u.jsxs)(ye, {
                children: [
                  Object(u.jsx)(Ce, { children: 'Create Something New' }),
                  Object(u.jsx)(we, {
                    children:
                      'Sole Composer gives you the ability to design and visualize one\u2011of\u2011a\u2011kind sneakers.',
                  }),
                  Object(u.jsx)(ce, {}),
                ],
              }),
              Object(u.jsx)(Ne, {
                children: Object(u.jsx)(ke, { src: '/sole-cover.png' }),
              }),
            ],
          });
        },
        Ie = xe.mobile,
        Pe = L.a.div(
          De ||
            (De = Object(V.a)(['\n  width: 100%;\n  margin-bottom: 16px;\n']))
        ),
        Te = L.a.div(
          Se ||
            (Se = Object(V.a)([
              '\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 3px;\n  margin: 16px;\n\n  ',
              ' {\n    grid-template-columns: 1fr 1fr;\n    margin: 3px;\n  }\n',
            ])),
          Ie
        ),
        Re = L.a.div(
          Ve ||
            (Ve = Object(V.a)([
              '\n  width: 100%;\n  background-color: #f0f0f0;\n\n  img {\n    width: 100%;\n  }\n',
            ]))
        );
      var Me = function (e) {
        var t = e.myDesigns;
        return Object(u.jsx)(Pe, {
          children: Object(u.jsx)(Te, {
            children: t.map(function (e, t) {
              return Object(u.jsx)(
                c.b,
                {
                  to: '/designer/'.concat(e._id),
                  className: 'link-to-designer',
                  children: Object(u.jsx)(Re, {
                    children: Object(u.jsx)('img', {
                      src: '/api/assets/images/'.concat(e.screenshot),
                      alt: 'my-design-preview',
                    }),
                  }),
                },
                t
              );
            }),
          }),
        });
      };
      var Ee = function () {
          var e = Object(n.useContext)(w.context),
            t = Object(n.useState)(),
            a = Object(l.a)(t, 2),
            r = a[0],
            s = a[1],
            i = Object(n.useState)(),
            o = Object(l.a)(i, 2),
            d = o[0],
            b = o[1];
          Object(n.useEffect)(
            function () {
              D('/api/featured', 'GET')
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return s(e);
                }),
                e &&
                  D('/api/outlines/mydesigns', 'GET')
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      return b(e);
                    });
            },
            [e]
          );
          var v = r
            ? r.featured.map(function (t, a) {
                return Object(u.jsx)(ee, { props: t, userData: e }, a);
              })
            : null;
          return Object(u.jsxs)(I, {
            children: [
              Object(u.jsxs)(P, {
                children: [
                  Object(u.jsxs)(T, {
                    children: [
                      Object(u.jsx)('strong', { children: 'Sole' }),
                      ' Composer',
                    ],
                  }),
                  e
                    ? Object(u.jsx)(c.b, {
                        to: '/profile',
                        children: e.firstName,
                      })
                    : Object(u.jsx)(c.b, { to: '/login', children: 'Login' }),
                ],
              }),
              !e && Object(u.jsx)(Le, {}),
              Object(u.jsxs)(R, {
                children: [
                  r &&
                    Object(u.jsxs)(M, {
                      children: [
                        Object(u.jsx)(E, { children: 'FEATURED' }),
                        Object(u.jsx)(k.a, {
                          responsive: { 0: { items: 1.7 }, 700: { items: 3 } },
                          items: v,
                        }),
                      ],
                    }),
                  e && Object(u.jsx)(J, {}),
                  !e &&
                    Object(u.jsx)(z, {
                      children: Object(u.jsx)(c.b, {
                        to: '/login',
                        children: Object(u.jsx)(G, { children: 'sign up' }),
                      }),
                    }),
                  d && Object(u.jsx)(E, { children: 'MY DESIGNS' }),
                  d && Object(u.jsx)(Me, { myDesigns: d }),
                ],
              }),
            ],
          });
        },
        ze = a(14),
        Ae = a.n(ze),
        Be = a(19),
        Ue = (a(196), a(197), a(27)),
        Ge = a(353),
        _e = a(354),
        Fe = a(3);
      a(198);
      var We = function () {
        return Object(u.jsx)('div', {
          id: 'loading-screen',
          children: Object(u.jsx)('div', { id: 'loader' }),
        });
      };
      a(199);
      function Xe(e) {
        var t,
          a,
          r = e.design,
          s = e.texture,
          i = e.right,
          c = e.setCurrentPart,
          o = e.setCurrentShoe,
          l = e.alone,
          d = e.setLayersView,
          b = e.setCurrentLayer,
          v = e.setView,
          h = e.redMapCanvas,
          j = Object(n.useRef)(),
          p = Object(Ge.a)(
            '/api/assets/models/'.concat(r.configData.source.model)
          ).nodes,
          g = Object(Ue.c)(
            Fe.TextureLoader,
            '/api/assets/designimages/'.concat(
              r.configData.source[i ? 'aoMapRight' : 'aoMapLeft']
            )
          );
        g.flipY = !1;
        var f = function (e) {
          if (e.delta < 10) {
            var t = Math.floor(1e3 * e.uv.x),
              a = Math.floor(1e3 * e.uv.y),
              n = (function (e) {
                switch (e) {
                  case 255:
                    return 4;
                  case 220:
                    return 2;
                  case 210:
                    return 0;
                  case 200:
                    return 5;
                  case 190:
                    return 3;
                  case 180:
                    return 1;
                  case 170:
                    return 16;
                  case 160:
                    return 15;
                  case 150:
                    return 14;
                  case 140:
                    return 9;
                  case 130:
                    return 13;
                  case 120:
                    return 11;
                  case 110:
                    return 12;
                  case 100:
                    return 8;
                  case 90:
                    return 10;
                  case 80:
                    return 7;
                  case 70:
                    return 6;
                  case 60:
                    return 17;
                }
              })(h.getContext('2d').getImageData(t, a, 1, 1).data[0]);
            (n || 0 === n) &&
              (d('LayersMain'),
              b(-1),
              v('Layers'),
              c(n),
              o(i ? 'right' : 'left'));
          }
        };
        return Object(u.jsx)('group', {
          ref: j,
          dispose: null,
          onPointerDown: function (e) {
            return (function (e) {
              e.stopPropagation(), (t = e.clientX), (a = e.clientY);
            })(e);
          },
          onPointerUp: function (e) {
            return (function (e) {
              e.stopPropagation(),
                e.clientX > t - 5 &&
                  e.clientX < t + 5 &&
                  e.clientY > a - 5 &&
                  e.clientY < a + 5 &&
                  f(e);
            })(e);
          },
          children: Object(u.jsx)('mesh', {
            geometry: p.af1.geometry,
            rotation: [Math.PI / 2, 0, Math.PI / 2],
            position: [0, -1, l ? 0 : i ? 1.3 : -1.3],
            scale: [i ? 0.35 : -0.35, 0.35, 0.35],
            children: Object(u.jsx)('meshStandardMaterial', {
              aoMap: g,
              map: s,
            }),
          }),
        });
      }
      var Ye = function (e) {
          var t = e.design,
            a = e.rightTexture,
            r = e.leftTexture,
            s = e.texturesLoaded,
            i = e.setCurrentPart,
            c = e.setCurrentShoe,
            o = e.shoeVisibility,
            l = e.setLayersView,
            d = e.setCurrentLayer,
            b = e.setView,
            v = e.redMapCanvas,
            h = e.cameraReset,
            j = e.setCameraReset;
          function p(e) {
            e.reset &&
              (Object(Ue.d)().camera.position.set(5.5, 1.5, 5.5), j(!1));
            return null;
          }
          return Object(u.jsxs)('div', {
            className: 'scene-container',
            id: 'scene-container-id',
            children: [
              Object(u.jsxs)(Ue.a, {
                camera: { fov: 45 },
                linear: !0,
                dpr: 3,
                gl: { preserveDrawingBuffer: !0 },
                children: [
                  Object(u.jsx)(p, { reset: h }),
                  Object(u.jsx)('ambientLight', {}),
                  Object(u.jsxs)(n.Suspense, {
                    fallback: null,
                    children: [
                      o.right &&
                        Object(u.jsx)(Xe, {
                          right: !0,
                          design: t,
                          texture: a,
                          setCurrentPart: i,
                          setCurrentShoe: c,
                          alone: !o.left,
                          setLayersView: l,
                          setCurrentLayer: d,
                          setView: b,
                          redMapCanvas: v,
                        }),
                      o.left &&
                        Object(u.jsx)(Xe, {
                          design: t,
                          texture: r,
                          setCurrentPart: i,
                          setCurrentShoe: c,
                          alone: !o.right,
                          setLayersView: l,
                          setCurrentLayer: d,
                          setView: b,
                          redMapCanvas: v,
                        }),
                    ],
                  }),
                  Object(u.jsx)(_e.a, {
                    minPolarAngle: Math.PI / 4,
                    maxPolarAngle: (3 * Math.PI) / 4,
                    minDistance: 4,
                    maxDistance: 12,
                    enablePan: !1,
                    enableDamping: !0,
                  }),
                ],
              }),
              !s && Object(u.jsx)(We, {}),
            ],
          });
        },
        He =
          (a(201),
          a(202),
          function (e, t) {
            var a = new FormData();
            return (
              t ? a.append('image', e, 'newImage') : a.append('image', e),
              fetch('/api/assets/uploadimage', {
                method: 'POST',
                body: a,
              }).then(function (e) {
                return e.json();
              })
            );
          }),
        Je = function (e) {
          return new Promise(function (t) {
            setTimeout(function () {
              var a =
                  document.getElementById('scene-container-id')
                    .firstElementChild.firstElementChild,
                n = document.createElement('canvas');
              (n.width = 1024),
                (n.height = 1024),
                n.getContext('2d').drawImage(a, 0, 0, 1024, 1024);
              for (
                var r = n.toDataURL('image/png'),
                  s = atob(r.split(',')[1]),
                  i = [],
                  c = 0;
                c < s.length;
                c++
              )
                i.push(s.charCodeAt(c));
              var o = new Blob([new Uint8Array(i)], { type: 'image/png' });
              (o.name = 'theBlob'), (o.lastModifiedDate = new Date());
              var l = new File([o], e, { type: 'image/png' });
              t(l);
            }, 500);
          });
        },
        qe = function (e) {
          var t = e.split('/');
          return (t = t[t.length - 1]);
        },
        Ze = a(18),
        $e = a(11);
      a(203);
      var Ke = function (e) {
        var t = e.currentShoe,
          a = e.setCurrentShoe,
          n = e.visibility,
          r = e.setVisibility,
          s = function (e) {
            if ('right' === e && e !== t)
              if (n.right) a(e);
              else {
                var s = Object($e.a)({}, n);
                (s.right = !0), (s.left = !1), r(s), a(e);
              }
            else if ('left' === e && e !== t)
              if (n.left) a(e);
              else {
                var i = Object($e.a)({}, n);
                (i.right = !1), (i.left = !0), r(i), a(e);
              }
          },
          i = function (e) {
            if (1 === e) {
              if ('left' === t) {
                n.right;
                var s = Object($e.a)({}, n);
                (s.right = !s.right), r(s);
              } else if ('right' === t)
                if (n.left) {
                  var i = Object($e.a)({}, n);
                  (i.right = !1), r(i), a('left');
                } else {
                  var c = Object($e.a)({}, n);
                  (c.right = !c.right), (c.left = !c.left), r(c), a('left');
                }
            } else if (2 === e)
              if ('right' === t) {
                n.left;
                var o = Object($e.a)({}, n);
                (o.left = !o.left), r(o);
              } else if ('left' === t)
                if (n.right) {
                  var l = Object($e.a)({}, n);
                  (l.left = !1), r(l), a('right');
                } else {
                  var u = Object($e.a)({}, n);
                  (u.right = !u.right), (u.left = !u.left), r(u), a('right');
                }
          };
        return Object(u.jsxs)('div', {
          className: 'design-preview-toggle-container',
          children: [
            Object(u.jsxs)('div', {
              className: 'design-preview-toggle-left',
              children: [
                Object(u.jsx)('div', {
                  className: 'design-preview-toggle-shoe '.concat(
                    'right' === t ? null : 'disabled-shoe'
                  ),
                  onClick: function () {
                    s('right');
                  },
                  children: Object(u.jsx)('p', { children: 'Right' }),
                }),
                Object(u.jsx)('div', {
                  className: 'design-preview-toggle-shoe '.concat(
                    'left' === t ? null : 'disabled-shoe'
                  ),
                  onClick: function () {
                    s('left');
                  },
                  children: Object(u.jsx)('p', { children: 'Left' }),
                }),
              ],
            }),
            Object(u.jsxs)('div', {
              className: 'design-preview-toggle-right',
              children: [
                Object(u.jsx)('div', {
                  className: 'design-preview-toggle-visible '.concat(
                    n.right ? null : 'disabled-visibility'
                  ),
                  onClick: function () {
                    i(1);
                  },
                  children: Object(u.jsx)(Ze.l, {}),
                }),
                Object(u.jsx)('div', {
                  className: 'design-preview-toggle-visible '.concat(
                    n.left ? null : 'disabled-visibility'
                  ),
                  onClick: function () {
                    i(2);
                  },
                  children: Object(u.jsx)(Ze.l, {}),
                }),
              ],
            }),
          ],
        });
      };
      var Qe = function (e) {
        var t,
          a = e.handleViewChange,
          r = e.design,
          s = e.canSave,
          i = e.setCanSave,
          o = e.userData,
          d = e.currentShoe,
          b = e.setCurrentShoe,
          v = e.shoeVisibility,
          h = e.setShoeVisibility,
          j = e.setCameraReset,
          p = Object(n.useState)(!1),
          g = Object(l.a)(p, 2),
          f = g[0],
          x = g[1];
        'object' === typeof o && '_id' in o && (t = o._id);
        var O = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e() {
              var t, a, n;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!o) {
                        e.next = 26;
                        break;
                      }
                      if ((i(!1), r.author)) {
                        e.next = 11;
                        break;
                      }
                      return x(!0), j(!0), (e.next = 7), Je('newImage');
                    case 7:
                      (t = e.sent),
                        He(t, !0).then(function (e) {
                          var t = qe(e.image),
                            a = {
                              author: o._id,
                              title: r.title,
                              screenshot: t,
                              configId: '5f925589cc6d6c16e44d5dfd',
                              outlineData: r.outlineData,
                            };
                          S('/api/outlines', 'POST', a)
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              window.location.href = '/designer/'.concat(e._id);
                            });
                        }),
                        (e.next = 26);
                      break;
                    case 11:
                      if (r.author !== o._id) {
                        e.next = 20;
                        break;
                      }
                      return x(!0), j(!0), (e.next = 16), Je(r.screenshot);
                    case 16:
                      (a = e.sent),
                        He(a, !1).then(function (e) {
                          var t = qe(e.image),
                            a = {
                              author: r.author,
                              title: r.title,
                              screenshot: t,
                              configId: '5f925589cc6d6c16e44d5dfd',
                              outlineData: r.outlineData,
                            };
                          S('/api/outlines/'.concat(r._id), 'PUT', a), x(!1);
                        }),
                        (e.next = 26);
                      break;
                    case 20:
                      return x(!0), j(!0), (e.next = 24), Je(r.screenshot);
                    case 24:
                      (n = e.sent),
                        He(n, !0).then(function (e) {
                          var t = qe(e.image),
                            a = {
                              author: o._id,
                              title: r.title,
                              screenshot: t,
                              configId: '5f925589cc6d6c16e44d5dfd',
                              outlineData: r.outlineData,
                            };
                          S('/api/outlines/', 'POST', a)
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              window.location.href = '/designer/'.concat(e._id);
                            });
                        });
                    case 26:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return f
          ? Object(u.jsx)('div', {
              className: 'design-preview-container',
              children: Object(u.jsx)('div', {
                id: 'loading-small',
                children: Object(u.jsx)('div', { id: 'loader' }),
              }),
            })
          : Object(u.jsxs)('div', {
              className: 'design-preview-container',
              children: [
                Object(u.jsx)('div', {
                  className: 'design-preview-info',
                  children: Object(u.jsxs)('div', {
                    className: 'design-title-container',
                    children: [
                      Object(u.jsx)('p', {
                        className: 'design-title',
                        children: r.title,
                      }),
                      Object(u.jsx)('button', {
                        className: 'edit-design-title-button',
                        onClick: function () {
                          return a('ChangeDesignName');
                        },
                        children: Object(u.jsx)(Ze.n, {}),
                      }),
                    ],
                  }),
                }),
                Object(u.jsxs)('div', {
                  className: 'design-preview-buttons',
                  children: [
                    Object(u.jsx)(Ke, {
                      currentShoe: d,
                      setCurrentShoe: b,
                      visibility: v,
                      setVisibility: h,
                    }),
                    Object(u.jsxs)('div', {
                      className: 'design-preview-button',
                      onClick: function () {
                        return a('ChangeBaseColor');
                      },
                      children: [
                        Object(u.jsx)('div', {
                          className: 'design-preview-button-icon',
                          style: { color: r.outlineData.baseColors[d] },
                          children: Object(u.jsx)(Ze.q, {}),
                        }),
                        Object(u.jsx)('button', { children: 'Base Color' }),
                      ],
                    }),
                    Object(u.jsxs)('div', {
                      className: 'design-preview-button',
                      onClick: function () {
                        return a('Layers');
                      },
                      children: [
                        Object(u.jsx)('div', {
                          className: 'design-preview-button-icon',
                          children: Object(u.jsx)(Ze.m, {}),
                        }),
                        Object(u.jsx)('button', { children: 'Layers' }),
                      ],
                    }),
                    Object(u.jsxs)('div', {
                      className: 'design-preview-button',
                      onClick: function () {
                        return j(!0);
                      },
                      children: [
                        Object(u.jsx)('div', {
                          className: 'design-preview-button-icon',
                          children: Object(u.jsx)(Ze.f, {}),
                        }),
                        Object(u.jsx)('button', { children: 'Reset Camera' }),
                      ],
                    }),
                    s && o
                      ? Object(u.jsxs)('div', {
                          className: 'design-preview-button',
                          onClick: function () {
                            O();
                          },
                          children: [
                            Object(u.jsx)('div', {
                              className: 'design-preview-button-icon',
                              children: Object(u.jsx)(Ze.p, {}),
                            }),
                            Object(u.jsx)('button', { children: 'Save' }),
                          ],
                        })
                      : Object(u.jsxs)('div', {
                          className: 'design-preview-button save-deactivated',
                          children: [
                            Object(u.jsx)('div', {
                              className: 'design-preview-button-icon',
                              children: Object(u.jsx)(Ze.p, {}),
                            }),
                            Object(u.jsx)('button', { children: 'Save' }),
                          ],
                        }),
                    o && r.author === t
                      ? Object(u.jsxs)('div', {
                          className: 'design-preview-button',
                          onClick: function () {
                            o &&
                              o._id === r.author &&
                              (fetch('/api/outlines/'.concat(r._id), {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (window.location.href = '/'));
                          },
                          children: [
                            Object(u.jsx)('div', {
                              className: 'design-preview-button-icon',
                              children: Object(u.jsx)(Ze.s, {}),
                            }),
                            Object(u.jsx)('button', { children: 'Delete' }),
                          ],
                        })
                      : Object(u.jsxs)('div', {
                          className: 'design-preview-button save-deactivated',
                          children: [
                            Object(u.jsx)('div', {
                              className: 'design-preview-button-icon',
                              children: Object(u.jsx)(Ze.s, {}),
                            }),
                            Object(u.jsx)('button', { children: 'Delete' }),
                          ],
                        }),
                    Object(u.jsx)(c.b, {
                      to: '/',
                      children: Object(u.jsxs)('div', {
                        className: 'design-preview-button',
                        children: [
                          Object(u.jsx)('div', {
                            className: 'design-preview-button-icon',
                            children: Object(u.jsx)(Ze.r, {}),
                          }),
                          Object(u.jsx)('button', { children: 'Exit' }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
      a(204);
      var et = function (e) {
          var t = e.props,
            a = t.design,
            n = t.currentPartName,
            r = t.handleAddLayer,
            s = t.setLayersView;
          return Object(u.jsxs)('div', {
            className: 'design-preview-container',
            children: [
              Object(u.jsx)('div', {
                className: 'view-title',
                children: Object(u.jsx)('p', { children: 'Select Layer Type' }),
              }),
              a.configData.layerTypes[n].types.map(function (e, t) {
                return Object(u.jsx)(
                  'div',
                  {
                    className: 'standard-button',
                    children:
                      'Mask' === e
                        ? Object(u.jsx)('button', {
                            onClick: function () {
                              s('MaskTypes');
                            },
                            children: e,
                          })
                        : 'Graphic' === e
                        ? Object(u.jsx)('button', {
                            onClick: function () {
                              s('GraphicPicker');
                            },
                            children: e,
                          })
                        : Object(u.jsx)('button', {
                            onClick: function () {
                              r(e), s('LayersMain');
                            },
                            children: e,
                          }),
                  },
                  t
                );
              }),
              Object(u.jsx)('div', {
                className: 'standard-button',
                children: Object(u.jsx)('button', {
                  onClick: function () {
                    return s('LayersMain');
                  },
                  children: 'Cancel',
                }),
              }),
            ],
          });
        },
        tt =
          (a(205),
          function (e) {
            var t = e.split(/(?=[A-Z])/).join(' ');
            return t.charAt(0).toUpperCase() + t.substr(1);
          });
      a(206);
      var at = function (e) {
          var t = e.colorsArray,
            a = e.handleColorChange;
          return Object(u.jsx)('div', {
            className: 'current-colors-container',
            children: Object(u.jsx)('div', {
              className: 'current-colors-scroll',
              children: t.map(function (e, t) {
                return Object(u.jsx)(
                  'button',
                  {
                    style: { backgroundColor: e },
                    onClick: function () {
                      return a(e);
                    },
                  },
                  t
                );
              }),
            }),
          });
        },
        nt = (a(207), a(147)),
        rt =
          (a(304),
          function () {
            return Object(u.jsx)('div', { className: 'custom-pointer' });
          }),
        st = a(77),
        it = Object(nt.a)(function (e) {
          var t = e.hex,
            a = e.hsl,
            n = e.hsv,
            r = e.onChange,
            s = {
              hue: {
                height: 18,
                position: 'relative',
                marginBottom: 9,
                overflow: 'hidden',
              },
              saturation: {
                width: '100%',
                height: 120,
                position: 'relative',
                marginBottom: 9,
                overflow: 'hidden',
              },
              input: {
                width: '47%',
                height: '30px',
                border: 'none',
                borderRadius: 'none',
                fontSize: '.7rem',
                WebkitAppearance: 'none',
                WebkitBorderRadius: 0,
                boxShadow: 'none',
                display: 'block',
                paddingLeft: '3%',
                paddingRight: '0px',
              },
              swatch: { width: '100%', height: '100%', background: t },
              inputContainer: { background: t },
            };
          return Object(u.jsxs)('div', {
            className: 'custom-color',
            children: [
              Object(u.jsx)('div', {
                style: s.hue,
                children: Object(u.jsx)(st.Hue, {
                  hsl: a,
                  onChange: r,
                  pointer: rt,
                }),
              }),
              Object(u.jsx)('div', {
                style: s.saturation,
                children: Object(u.jsx)(st.Saturation, {
                  hsl: a,
                  hsv: n,
                  onChange: r,
                  pointer: rt,
                }),
              }),
              Object(u.jsx)('div', {
                className: 'color-input',
                style: s.inputContainer,
                children: Object(u.jsx)(st.EditableInput, {
                  style: { input: s.input },
                  className: 'custom-color-input',
                  value: t,
                  onChange: r,
                }),
              }),
            ],
          });
        });
      var ct = function (e) {
        var t = e.props,
          a = t.currentLayer,
          r = t.currentPartName,
          s = t.design,
          i = t.handleChangeManager,
          c = t.setLayersView,
          o = t.setCanSave,
          d = t.currentShoe,
          b = Object(n.useState)('#ffffaa'),
          v = Object(l.a)(b, 2),
          h = v[0],
          j = v[1],
          p = Object(n.useState)([]),
          g = Object(l.a)(p, 2),
          f = g[0],
          x = g[1];
        Object(n.useEffect)(
          function () {
            x(
              (function () {
                var e = [];
                for (var t in s.outlineData.parts) {
                  for (var a in s.outlineData.parts[t].right) {
                    var n = s.outlineData.parts[t].right[a].type;
                    if ('color' === n || 'mask' === n) {
                      var r = s.outlineData.parts[t].right[a].color;
                      e.includes(r) || e.push(r);
                    }
                  }
                  for (var i in s.outlineData.parts[t].left) {
                    var c = s.outlineData.parts[t].left[i].type;
                    if ('color' === c || 'mask' === c) {
                      var o = s.outlineData.parts[t].left[i].color;
                      e.includes(o) || e.push(o);
                    }
                  }
                }
                for (var l in s.outlineData.overlays) {
                  for (var u in s.outlineData.overlays[l].right)
                    if ('color' === s.outlineData.overlays[l].right[u].type) {
                      var d = s.outlineData.overlays[l].right[u].color;
                      e.includes(d) || e.push(d);
                    }
                  for (var b in s.outlineData.overlays[l].left)
                    if ('color' === s.outlineData.overlays[l].left[b].type) {
                      var v = s.outlineData.overlays[l].left[b].color;
                      e.includes(v) || e.push(v);
                    }
                }
                var h = s.outlineData.baseColors.right;
                e.includes(h) || e.push(h);
                var j = s.outlineData.baseColors.left;
                return e.includes(j) || e.push(j), e;
              })()
            ),
              j(
                'outerOverlay' === r || 'innerOverlay' === r
                  ? s.outlineData.overlays[r][d][a].color
                  : s.outlineData.parts[r][d][a].color
              );
          },
          [s, r, a, x, d]
        );
        var O = function (e) {
          o(!0);
          var t = e.hex || e;
          j(e),
            i({
              type: 'color-changed',
              partName: r,
              layerIndex: a,
              newColor: t,
            });
        };
        return Object(u.jsxs)('div', {
          className: 'color-picker-container',
          children: [
            Object(u.jsx)('div', {
              className: 'view-title',
              children: Object(u.jsx)('p', { children: tt(r) }),
            }),
            Object(u.jsx)('div', {
              className: 'standard-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  return O(
                    '#' +
                      (
                        '00000' + ((Math.random() * (1 << 24)) | 0).toString(16)
                      ).slice(-6)
                  );
                },
                children: 'Random Color',
              }),
            }),
            Object(u.jsx)('div', {
              children: Object(u.jsx)(at, {
                colorsArray: f,
                handleColorChange: O,
              }),
            }),
            Object(u.jsx)('div', {
              children: Object(u.jsx)(it, { color: h, onChangeComplete: O }),
            }),
            Object(u.jsx)('div', {
              className: 'standard-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  return c('LayersMain');
                },
                children: 'Back',
              }),
            }),
          ],
        });
      };
      a(339);
      var ot = function (e) {
        var t = e.props,
          a = t.currentLayer,
          r = t.currentPartName,
          s = t.graphicVisualCanvas,
          i = t.handleChangeManager,
          c = t.handleUpdateGraphicVisualCanvas,
          o = t.setLayersView,
          l = t.setCanSave,
          d = t.currentShoe,
          b = function (e, t) {
            l(!0),
              i({
                type: 'graphic-moved',
                partName: r,
                layerIndex: a,
                direction: e,
                distance: t,
              });
          };
        return (
          Object(n.useEffect)(function () {
            !(function () {
              var e = document.getElementById('graphic-visual-container');
              (e.innerHTML = ''), e.appendChild(s);
            })(),
              c(r);
          }, []),
          Object(u.jsxs)('div', {
            className: 'graphic-editor-container',
            children: [
              Object(u.jsxs)('div', {
                className: 'graphic-editor-upper',
                children: [
                  Object(u.jsxs)('div', {
                    className: 'graphic-editor-buttons',
                    id: 'edit-buttons-div',
                    children: [
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'up-button',
                        onClick: function () {
                          return b('vert', -30);
                        },
                        children: Object(u.jsx)(Ze.d, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'down-button',
                        onClick: function () {
                          return b('vert', 30);
                        },
                        children: Object(u.jsx)(Ze.a, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'left-button',
                        onClick: function () {
                          return b('hor', -30);
                        },
                        children: Object(u.jsx)(Ze.b, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'right-button',
                        onClick: function () {
                          return b('hor', 30);
                        },
                        children: Object(u.jsx)(Ze.c, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'scale-up-button',
                        onClick: function () {
                          return b('scale', 1.1);
                        },
                        children: Object(u.jsx)(Ze.e, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'scale-down-button',
                        onClick: function () {
                          return b('scale', 0.9);
                        },
                        children: Object(u.jsx)(Ze.k, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'clockwise-button',
                        onClick: function () {
                          return b('rotate', 5);
                        },
                        children: Object(u.jsx)(Ze.o, {}),
                      }),
                      Object(u.jsx)('button', {
                        className: 'graphic-edit-button',
                        id: 'counterclockwise-button',
                        onClick: function () {
                          return b('rotate', -5);
                        },
                        children: Object(u.jsx)(Ze.t, {}),
                      }),
                    ],
                  }),
                  Object(u.jsx)('div', {
                    id: 'graphic-visual-container',
                    className: 'left' === d ? 'mirror-graphic-visual' : null,
                  }),
                ],
              }),
              Object(u.jsxs)('div', {
                className: 'graphic-editor-lower',
                children: [
                  Object(u.jsx)('div', {
                    className: 'standard-button graphic-editor-lower-button',
                    children: Object(u.jsx)('button', {
                      onClick: function () {
                        return b('reset', 0);
                      },
                      children: 'Reset',
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'standard-button graphic-editor-lower-button',
                    children: Object(u.jsx)('button', {
                      onClick: function () {
                        return o('LayersMain');
                      },
                      children: 'Back',
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      a(340), a(341);
      var lt = function (e) {
        var t = e.design,
          a = e.currentPart,
          n = e.setCurrentPart,
          r = e.setCurrentLayer,
          s = e.setLayersView,
          i = t.configData.partsArray.length,
          c = t.configData.partsArray,
          o = function (e) {
            n(0 === a && e < 0 ? i - 1 : a === i - 1 && e > 0 ? 0 : a + e);
          };
        return Object(u.jsx)('div', {
          className: 'part-selector-container',
          children: Object(u.jsxs)('div', {
            children: [
              Object(u.jsx)('button', {
                className: 'change-part-button',
                onClick: function () {
                  o(-1), r(-1);
                },
                children: Object(u.jsx)(Ze.h, {}),
              }),
              Object(u.jsx)('button', {
                className: 'partname-button',
                onClick: function () {
                  s('PartList');
                },
                children: tt(c[a]),
              }),
              Object(u.jsx)('button', {
                className: 'change-part-button',
                onClick: function () {
                  o(1), r(-1);
                },
                children: Object(u.jsx)(Ze.i, {}),
              }),
            ],
          }),
        });
      };
      var ut = function (e) {
        var t = e.props,
          a = t.allLayers,
          n = t.currentPart,
          r = t.design,
          s = t.currentLayer,
          i = t.handleViewChange,
          c = t.numberOfLayers,
          o = t.setCurrentLayer,
          l = t.setCurrentPart,
          d = t.setLayersView,
          b = t.handleDeleteLayer,
          v = t.handleEditLayer,
          h = t.handleMoveLayer;
        return Object(u.jsxs)('div', {
          className: 'layers-view-container',
          onClick: function (e) {
            'layers-view-container' === e.target.className && o(-1);
          },
          children: [
            Object(u.jsx)(lt, {
              design: r,
              currentPart: n,
              setCurrentPart: l,
              setCurrentLayer: o,
              setLayersView: d,
            }),
            Object(u.jsx)('div', {
              className: 'add-layer-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  return d('AddLayerType');
                },
                children: 'Add Layer',
              }),
            }),
            Object(u.jsx)('div', {
              className: 'layers-box-container',
              children: a.map(function (e, t) {
                return Object(u.jsxs)(
                  'div',
                  {
                    className: 'layer-list-items',
                    children: [
                      Object(u.jsxs)('div', {
                        className: 'layer-list-item-end '.concat(
                          s !== t ? 'hide-edit-buttons' : ''
                        ),
                        children: [
                          Object(u.jsx)('div', {
                            className: 'edit-layer-button '.concat(
                              t === c - 1 ? 'edit-layer-button-dead' : ''
                            ),
                            children: Object(u.jsx)('button', {
                              onClick:
                                t === c - 1
                                  ? null
                                  : function () {
                                      return h(t, 1);
                                    },
                              children: Object(u.jsx)(Ze.j, {}),
                            }),
                          }),
                          Object(u.jsx)('div', {
                            className: 'edit-layer-button '.concat(
                              0 === t ? 'edit-layer-button-dead' : ''
                            ),
                            children: Object(u.jsx)('button', {
                              onClick:
                                0 === t
                                  ? null
                                  : function () {
                                      return h(t, -1);
                                    },
                              children: Object(u.jsx)(Ze.g, {}),
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsxs)('div', {
                        className: 'layer-list-item-middle',
                        onClick: function () {
                          t === s ? v(t, e) : o(t);
                        },
                        children: [
                          Object(u.jsx)('div', {
                            className: 'layer-list-item-left '.concat(
                              s === t ? 'focus-layer-highlight' : ''
                            ),
                            children: Object(u.jsx)('div', {
                              className: 'layer-list-item-type',
                              children:
                                'overlay' === e.type
                                  ? tt(e.source).toLowerCase()
                                  : e.type,
                            }),
                          }),
                          'color' === e.type
                            ? Object(u.jsx)('div', {
                                className: 'layer-list-item-right',
                                style: { backgroundColor: e.color },
                              })
                            : 'graphic' === e.type
                            ? Object(u.jsx)('div', {
                                className: 'layer-list-item-right',
                                children: Object(u.jsx)('img', {
                                  src: '/api/assets/images/'.concat(e.link),
                                  style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                  },
                                  alt: 'design-graphic',
                                }),
                              })
                            : 'mask' === e.type
                            ? Object(u.jsx)('div', {
                                className: 'layer-list-item-right',
                                children: Object(u.jsx)('img', {
                                  src: '/api/assets/designimages/'.concat(
                                    e.link
                                  ),
                                  style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                  },
                                  alt: 'design-graphic',
                                }),
                              })
                            : Object(u.jsx)('div', {
                                className: 'layer-list-item-right',
                                children: Object(u.jsx)('img', {
                                  src: '/api/assets/designimages/'.concat(
                                    e.source,
                                    'Mask.png'
                                  ),
                                  style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                  },
                                  alt: 'design-graphic',
                                }),
                              }),
                        ],
                      }),
                      Object(u.jsxs)('div', {
                        className: 'layer-list-item-end '.concat(
                          s !== t ? 'hide-edit-buttons' : ''
                        ),
                        children: [
                          Object(u.jsx)('div', {
                            className: 'edit-layer-button',
                            children: Object(u.jsx)('button', {
                              onClick: function () {
                                v(t, e);
                              },
                              children: Object(u.jsx)(Ze.n, {}),
                            }),
                          }),
                          'overlay' === e.type
                            ? Object(u.jsx)('div', {
                                className:
                                  'edit-layer-button edit-layer-button-dead',
                                children: Object(u.jsx)('button', {
                                  children: Object(u.jsx)(Ze.r, {}),
                                }),
                              })
                            : Object(u.jsx)('div', {
                                className: 'edit-layer-button',
                                children: Object(u.jsx)('button', {
                                  onClick: function () {
                                    return b(t);
                                  },
                                  children: Object(u.jsx)(Ze.r, {}),
                                }),
                              }),
                        ],
                      }),
                    ],
                  },
                  t
                );
              }),
            }),
            Object(u.jsx)('div', {
              className: 'standard-button layer-back-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  o(-1), i('DesignPreview');
                },
                children: 'Back',
              }),
            }),
          ],
        });
      };
      a(342);
      var dt = function (e) {
        var t = e.props,
          a = t.design,
          n = t.currentPartName,
          r = t.handleAddMaskLayer,
          s = t.setLayersView;
        return Object(u.jsxs)('div', {
          className: 'design-preview-container',
          children: [
            Object(u.jsx)('div', {
              className: 'view-title',
              children: Object(u.jsx)('p', { children: 'Select Mask Type' }),
            }),
            a.configData.maskTypes[n].map(function (e, t) {
              return Object(u.jsx)(
                'div',
                {
                  className: 'standard-button',
                  children: Object(u.jsx)('button', {
                    onClick: function () {
                      r(e[0], e[1]), s('LayersMain');
                    },
                    children: e[0],
                  }),
                },
                t
              );
            }),
            Object(u.jsx)('div', {
              className: 'standard-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  return s('LayersMain');
                },
                children: 'Cancel',
              }),
            }),
          ],
        });
      };
      a(343);
      var bt = function (e) {
        var t = e.props,
          a = t.design,
          n = t.setCurrentPart,
          r = t.setLayersView,
          s = t.setCurrentLayer;
        return Object(u.jsxs)('div', {
          className: 'partlist-container',
          children: [
            Object(u.jsx)('div', {
              className: 'partlist-title',
              children: Object(u.jsx)('p', { children: 'Parts' }),
            }),
            Object(u.jsx)('div', {
              className: 'partlist-buttons',
              children: a.configData.partsArray.map(function (e, t) {
                return Object(u.jsx)(
                  'div',
                  {
                    className: 'standard-button part-list-button',
                    children: Object(u.jsx)('button', {
                      onClick: function () {
                        s(-1), n(t), r('LayersMain');
                      },
                      children: e,
                    }),
                  },
                  t
                );
              }),
            }),
            Object(u.jsx)('div', {
              className: 'standard-button bottom-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  return r('LayersMain');
                },
                children: 'Back',
              }),
            }),
          ],
        });
      };
      a(344), a(345);
      var vt = function (e) {
        var t = e.graphicsArray,
          a = e.handleAddGraphicLayer;
        return Object(u.jsx)('div', {
          className: 'current-graphics-container',
          children: t.map(function (e, t) {
            return Object(u.jsx)(
              'div',
              {
                className: 'current-graphics-item',
                onClick: function () {
                  return a(e);
                },
                children: Object(u.jsx)('img', {
                  src: '/api/assets/images/'.concat(e),
                  alt: 'used-already',
                }),
              },
              t
            );
          }),
        });
      };
      var ht = {
        AddLayerType: et,
        ColorPicker: ct,
        GraphicEditor: ot,
        LayersMain: ut,
        MaskTypes: dt,
        PartList: bt,
        GraphicPicker: function (e) {
          var t = e.props,
            a = t.setLayersView,
            r = t.handleAddLayer,
            s = t.design,
            i = Object(n.useState)(!1),
            c = Object(l.a)(i, 2),
            o = c[0],
            d = c[1],
            b = Object(n.useState)(!1),
            v = Object(l.a)(b, 2),
            h = v[0],
            j = v[1],
            p = Object(n.useState)(),
            g = Object(l.a)(p, 2),
            f = g[0],
            x = g[1];
          Object(n.useEffect)(
            function () {
              x(
                (function () {
                  var e = ['red-apple.png'];
                  for (var t in s.outlineData.parts) {
                    for (var a in s.outlineData.parts[t].right)
                      if ('graphic' === s.outlineData.parts[t].right[a].type) {
                        var n = s.outlineData.parts[t].right[a].link;
                        e.includes(n) || e.push(n);
                      }
                    for (var r in s.outlineData.parts[t].left)
                      if ('graphic' === s.outlineData.parts[t].left[r].type) {
                        var i = s.outlineData.parts[t].left[r].link;
                        e.includes(i) || e.push(i);
                      }
                  }
                  for (var c in s.outlineData.overlays) {
                    for (var o in s.outlineData.overlays[c].right)
                      if (
                        'graphic' === s.outlineData.overlays[c].right[o].type
                      ) {
                        var l = s.outlineData.overlays[c].right[o].link;
                        e.includes(l) || e.push(l);
                      }
                    for (var u in s.outlineData.overlays[c].left)
                      if (
                        'graphic' === s.outlineData.overlays[c].left[u].type
                      ) {
                        var d = s.outlineData.overlays[c].left[u].link;
                        e.includes(d) || e.push(d);
                      }
                  }
                  return e[0] ? e : null;
                })()
              );
            },
            [s]
          );
          var O = (function () {
              var e = Object(Be.a)(
                Ae.a.mark(function e(t) {
                  var a;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !(
                              (t.target.files[0].size / 1024 / 1024).toFixed(
                                4
                              ) < 2
                            )
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (
                            j(!0),
                            (a = t.target.files[0]),
                            (e.next = 6),
                            He(a, !0).then(function (e) {
                              var t = qe(e.image);
                              m(t);
                            })
                          );
                        case 6:
                          e.next = 9;
                          break;
                        case 8:
                          d(!0);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            m = function (e) {
              r('Graphic', e), a('LayersMain');
            };
          return h
            ? Object(u.jsx)('div', {
                className: 'upload-image-container',
                children: Object(u.jsx)('div', {
                  id: 'loading-small',
                  children: Object(u.jsx)('div', { id: 'loader' }),
                }),
              })
            : Object(u.jsxs)('div', {
                className: 'upload-image-container',
                children: [
                  f &&
                    Object(u.jsx)('div', {
                      className: 'used-graphics',
                      children: Object(u.jsx)(vt, {
                        graphicsArray: f,
                        handleAddGraphicLayer: m,
                      }),
                    }),
                  Object(u.jsx)('div', {
                    className: 'upload-image-input',
                    children: Object(u.jsxs)('label', {
                      htmlFor: 'image-input-id',
                      className: 'upload-image-label',
                      children: [
                        Object(u.jsx)('input', {
                          onChange: function (e) {
                            return O(e);
                          },
                          id: 'image-input-id',
                          type: 'file',
                          name: 'myImage',
                          accept: 'image/png, image/jpeg, .png, .jpg',
                        }),
                        'Upload',
                      ],
                    }),
                  }),
                  o &&
                    Object(u.jsx)('div', {
                      className: 'file-size-warning',
                      children: Object(u.jsx)('p', {
                        children: 'file must be less that 2MB.',
                      }),
                    }),
                  Object(u.jsx)('div', {
                    className: 'standard-button',
                    children: Object(u.jsx)('button', {
                      onClick: function () {
                        return a('LayersMain');
                      },
                      children: 'Cancel',
                    }),
                  }),
                ],
              });
        },
      };
      a(346);
      var jt = function (e) {
          var t = e.layersView,
            a = e.setLayersView,
            n = e.currentLayer,
            r = e.currentPart,
            s = e.design,
            i = e.graphicVisualCanvas,
            c = e.handleChangeManager,
            o = e.handleUpdateGraphicVisualCanvas,
            l = e.handleViewChange,
            d = e.setCurrentLayer,
            b = e.setCurrentPart,
            v = e.setCanSave,
            h = e.currentShoe,
            j = Object.keys(s.configData.partsObject)[r],
            p = 'parts';
          ('outerOverlay' !== j && 'innerOverlay' !== j) || (p = 'overlays');
          var g = s.outlineData[p][j][h].length,
            f = s.outlineData[p][j][h],
            x = ht[t],
            O = {
              allLayers: f,
              currentPart: r,
              currentLayer: n,
              currentPartName: j,
              design: s,
              graphicVisualCanvas: i,
              handleAddLayer: function (e, t) {
                v(!0),
                  c(
                    Object($e.a)(
                      { type: 'layer-added', partName: j, layerType: e },
                      t && { fileName: t }
                    )
                  ),
                  d(g);
              },
              handleAddMaskLayer: function (e, t) {
                v(!0),
                  c({
                    type: 'layer-added',
                    partName: j,
                    layerType: 'Mask',
                    maskType: e,
                    maskLink: t,
                  }),
                  d(g);
              },
              handleMoveLayer: function (e, t) {
                v(!0),
                  c({
                    type: 'layer-moved',
                    partName: j,
                    layerIndex: e,
                    direction: t,
                  }),
                  d(n + t);
              },
              handleEditLayer: function (e, t) {
                'color' === t.type
                  ? (d(e), a('ColorPicker'))
                  : 'graphic' === t.type
                  ? (d(e), a('GraphicEditor'))
                  : 'mask' === t.type
                  ? (d(e), a('ColorPicker'))
                  : 'overlay' === t.type &&
                    (b(s.configData.partsArray.indexOf(t.source)), d(-1));
              },
              handleDeleteLayer: function (e) {
                v(!0),
                  c({ type: 'layer-deleted', partName: j, layerIndex: e }),
                  d(-1);
              },
              handleChangeManager: c,
              handleUpdateGraphicVisualCanvas: o,
              handleViewChange: l,
              setCurrentLayer: d,
              setCurrentPart: b,
              setLayersView: a,
              numberOfLayers: g,
              setCanSave: v,
              currentShoe: h,
              layersView: t,
            };
          return Object(u.jsx)(x, { props: O });
        },
        pt = (a(347), a(35));
      var gt = function (e) {
        var t = e.handleViewChange,
          a = e.design,
          n = e.setDesign,
          r = e.setCanSave;
        return Object(u.jsxs)('div', {
          className: 'changedesignname-container',
          children: [
            Object(u.jsx)('div', {
              className: 'view-title',
              children: Object(u.jsx)('p', { children: 'Change Design Name' }),
            }),
            Object(u.jsx)('div', {
              className: 'designer-input-div',
              children: Object(u.jsx)('input', {
                type: 'text',
                id: 'design-name-input',
                className: 'designer-input',
                defaultValue: a.title,
              }),
            }),
            Object(u.jsx)('div', {
              className: 'standard-button',
              children: Object(u.jsx)('button', {
                onClick: function () {
                  return (function () {
                    var e = Object(pt.cloneDeep)(a),
                      s = Object(pt.startCase)(
                        document.getElementById('design-name-input').value
                      );
                    (e.title = s), r(!0), n(e), t('DesignPreview');
                  })();
                },
                children: 'Done',
              }),
            }),
          ],
        });
      };
      a(348);
      var ft = function (e) {
        var t = e.handleViewChange,
          a = e.design,
          r = e.setDesign,
          s = e.setCanSave,
          i = e.handleUpdateBaseColor,
          c = e.currentShoe,
          o = e.setCurrentShoe,
          d = Object(n.useState)(
            a.outlineData.baseColors.left === a.outlineData.baseColors.right
              ? 'both'
              : c
          ),
          b = Object(l.a)(d, 2),
          v = b[0],
          h = b[1],
          j = Object(n.useState)(a.outlineData.baseColors[c]),
          p = Object(l.a)(j, 2),
          g = p[0],
          f = p[1],
          x = function (e) {
            var t = e.hex || e;
            f(t);
          },
          O = function (e) {
            h(e),
              ('right' !== e && 'left' !== e) ||
                (o(e), f(a.outlineData.baseColors[e]));
          };
        return Object(u.jsxs)('div', {
          className: 'change-base-color-container',
          children: [
            Object(u.jsx)('div', {
              className: 'base-color-selector',
              children: Object(u.jsx)(it, { color: g, onChangeComplete: x }),
            }),
            Object(u.jsxs)('div', {
              className: 'base-color-buttons',
              children: [
                Object(u.jsx)('div', {
                  className: 'base-color-radio',
                  children: Object(u.jsxs)('div', {
                    className: 'radio-container',
                    children: [
                      Object(u.jsx)('div', {
                        className: 'radio-option '.concat(
                          'left' === v ? 'radio-active' : null
                        ),
                        onClick: function () {
                          O('left');
                        },
                        children: Object(u.jsx)('p', { children: 'Left' }),
                      }),
                      Object(u.jsx)('div', {
                        className: 'radio-option '.concat(
                          'both' === v ? 'radio-active' : null
                        ),
                        onClick: function () {
                          O('both');
                        },
                        children: Object(u.jsx)('p', { children: 'Both' }),
                      }),
                      Object(u.jsx)('div', {
                        className: 'radio-option '.concat(
                          'right' === v ? 'radio-active' : null
                        ),
                        onClick: function () {
                          O('right');
                        },
                        children: Object(u.jsx)('p', { children: 'Right' }),
                      }),
                    ],
                  }),
                }),
                Object(u.jsx)('div', {
                  className: 'base-color-button',
                  children: Object(u.jsx)('button', {
                    onClick: function () {
                      return x(
                        '#' +
                          (
                            '00000' +
                            ((Math.random() * (1 << 24)) | 0).toString(16)
                          ).slice(-6)
                      );
                    },
                    children: 'Random',
                  }),
                }),
                Object(u.jsx)('div', {
                  className: 'base-color-button',
                  children: Object(u.jsx)('button', {
                    onClick: function () {
                      return (function () {
                        var e = Object(pt.cloneDeep)(a);
                        'left' === v
                          ? (e.outlineData.baseColors.left = g)
                          : 'right' === v
                          ? (e.outlineData.baseColors.right = g)
                          : 'both' === v &&
                            ((e.outlineData.baseColors.left = g),
                            (e.outlineData.baseColors.right = g)),
                          s(!0),
                          r(e),
                          i(e);
                      })();
                    },
                    children: 'Apply',
                  }),
                }),
                Object(u.jsx)('div', {
                  className: 'base-color-button',
                  children: Object(u.jsx)('button', {
                    onClick: function () {
                      return t('DesignPreview');
                    },
                    children: 'Done',
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var xt = function (e) {
          var t = e.design,
            a = e.setDesign,
            r = e.graphicVisualCanvas,
            s = e.handleUpdateGraphicVisualCanvas,
            i = e.handleChangeManager,
            c = e.handleUpdateBaseColor,
            o = e.userData,
            d = e.currentPart,
            b = e.setCurrentPart,
            v = e.currentShoe,
            h = e.setCurrentShoe,
            j = e.shoeVisibility,
            p = e.setShoeVisibility,
            g = e.view,
            f = e.setView,
            x = e.layersView,
            O = e.setLayersView,
            m = e.currentLayer,
            y = e.setCurrentLayer,
            C = e.setCameraReset,
            w = Object(n.useState)(!1),
            N = Object(l.a)(w, 2),
            k = N[0],
            D = N[1],
            S = function (e) {
              f(e);
            };
          return 'DesignPreview' === g
            ? Object(u.jsx)('div', {
                className: 'interface-container',
                children: Object(u.jsx)(Qe, {
                  handleViewChange: S,
                  design: t,
                  setDesign: a,
                  canSave: k,
                  setCanSave: D,
                  userData: o,
                  currentShoe: v,
                  setCurrentShoe: h,
                  shoeVisibility: j,
                  setShoeVisibility: p,
                  setCameraReset: C,
                }),
              })
            : 'Layers' === g
            ? Object(u.jsx)('div', {
                className: 'interface-container',
                children: Object(u.jsx)(jt, {
                  layersView: x,
                  setLayersView: O,
                  handleViewChange: S,
                  design: t,
                  setDesign: a,
                  currentShoe: v,
                  currentPart: d,
                  setCurrentPart: b,
                  currentLayer: m,
                  setCurrentLayer: y,
                  graphicVisualCanvas: r,
                  handleUpdateGraphicVisualCanvas: s,
                  handleChangeManager: i,
                  setCanSave: D,
                }),
              })
            : 'ChangeDesignName' === g
            ? Object(u.jsx)('div', {
                className: 'interface-container',
                children: Object(u.jsx)(gt, {
                  handleViewChange: S,
                  design: t,
                  setDesign: a,
                  setCanSave: D,
                }),
              })
            : 'ChangeBaseColor' === g
            ? Object(u.jsx)('div', {
                className: 'interface-container',
                children: Object(u.jsx)(ft, {
                  handleViewChange: S,
                  design: t,
                  setDesign: a,
                  setCanSave: D,
                  handleUpdateBaseColor: c,
                  currentShoe: v,
                  setCurrentShoe: h,
                }),
              })
            : void 0;
        },
        Ot = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b, v, h, j, p, g, f, x, O;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.setTexturesLoaded),
                        (n = t.design),
                        (r = t.graphicVisualCanvas),
                        (s = t.rightInnerOverlayCanvas),
                        (i = t.rightOuterOverlayCanvas),
                        (c = t.rightTexture),
                        (o = t.rightTextureCanvas),
                        (l = t.leftInnerOverlayCanvas),
                        (u = t.leftOuterOverlayCanvas),
                        (d = t.leftTexture),
                        (b = t.leftTextureCanvas),
                        (v = t.rightCanvasObjectRef),
                        (h = t.rightOverlaysCanvasObjectRef),
                        (j = t.rightBaseColorCanvasObjectRef),
                        (p = t.leftBaseColorCanvasObjectRef),
                        (g = t.leftCanvasObjectRef),
                        (f = t.leftOverlaysCanvasObjectRef),
                        (e.next = 3),
                        It({
                          design: n,
                          type: 'overlaysCanvasObject',
                          currentShoe: 'right',
                        })
                      );
                    case 3:
                      return (
                        (h.current = e.sent),
                        (e.next = 6),
                        It({
                          design: n,
                          type: 'overlaysCanvasObject',
                          currentShoe: 'left',
                        })
                      );
                    case 6:
                      return (
                        (f.current = e.sent),
                        Pt({
                          design: n,
                          overlayCanvasObject: h.current,
                          overlayCanvas: i,
                          partName: 'outerOverlay',
                          graphicVisualCanvas: r,
                          currentShoe: 'right',
                        }),
                        Pt({
                          design: n,
                          overlayCanvasObject: f.current,
                          overlayCanvas: u,
                          partName: 'outerOverlay',
                          graphicVisualCanvas: r,
                          currentShoe: 'left',
                        }),
                        Pt({
                          design: n,
                          overlayCanvasObject: h.current,
                          overlayCanvas: s,
                          partName: 'innerOverlay',
                          graphicVisualCanvas: r,
                          currentShoe: 'right',
                        }),
                        Pt({
                          design: n,
                          overlayCanvasObject: f.current,
                          overlayCanvas: l,
                          partName: 'innerOverlay',
                          graphicVisualCanvas: r,
                          currentShoe: 'left',
                        }),
                        (e.next = 13),
                        It({
                          design: n,
                          type: 'partsCanvasObject',
                          overlays: [i, s],
                          currentShoe: 'right',
                        })
                      );
                    case 13:
                      return (
                        (v.current = e.sent),
                        (e.next = 16),
                        It({
                          design: n,
                          type: 'partsCanvasObject',
                          overlays: [u, l],
                          currentShoe: 'left',
                        })
                      );
                    case 16:
                      return (
                        (g.current = e.sent),
                        (e.next = 19),
                        It({
                          design: n,
                          type: 'baseColorCanvasObject',
                          currentShoe: 'right',
                        })
                      );
                    case 19:
                      return (
                        (j.current = e.sent),
                        (e.next = 22),
                        It({
                          design: n,
                          type: 'baseColorCanvasObject',
                          currentShoe: 'left',
                        })
                      );
                    case 22:
                      return (
                        (p.current = e.sent),
                        (e.next = 25),
                        Xt({
                          design: n,
                          canvasObject: v.current,
                          baseColorCanvasObject: j.current,
                        })
                      );
                    case 25:
                      return (
                        (x = e.sent),
                        (e.next = 28),
                        Xt({
                          design: n,
                          canvasObject: g.current,
                          baseColorCanvasObject: p.current,
                        })
                      );
                    case 28:
                      (O = e.sent),
                        o.getContext('2d').drawImage(x, 0, 0),
                        (c.needsUpdate = !0),
                        b.getContext('2d').drawImage(O, 0, 0),
                        (d.needsUpdate = !0),
                        a(!0);
                    case 34:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        mt = function (e) {
          var t = new Fe.CanvasTexture(e);
          return (t.flipY = !1), t;
        },
        yt = function (e) {
          var t = e.design;
          return new Promise(function (e) {
            var a = t.configData.canvasSize,
              n = document.createElement('canvas');
            (n.width = a), (n.height = a);
            var r = n.getContext('2d');
            !(function t() {
              null !== r && 'object' === typeof n
                ? ((r.fillStyle = '#ffffff'), r.fillRect(0, 0, a, a), e(n))
                : setTimeout(t, 100);
            })();
          });
        },
        Ct = function (e) {
          var t = e.design;
          return new Promise(function (e) {
            var a = t.configData.canvasSize,
              n = document.createElement('canvas');
            (n.width = a), (n.height = a);
            var r = n.getContext('2d'),
              s = new Image();
            (s.src = '/api/assets/designimages/'.concat(
              t.configData.source.redMap
            )),
              (s.onload = function () {
                !(function t() {
                  null !== r && 'object' === typeof n
                    ? (r.drawImage(s, 0, 0, 1e3, 1e3), e(n))
                    : setTimeout(t, 100);
                })();
              });
          });
        },
        wt = function (e) {
          var t = e.design.configData.canvasSize,
            a = document.createElement('canvas');
          return (
            (a.id = 'graphic-visual-canvas'), (a.width = t), (a.height = t), a
          );
        },
        Nt = function (e) {
          var t = e.design,
            a = e.layer,
            n = e.partName;
          return new Promise(function (e) {
            var r = t.configData.partsObject[n].mask,
              s = a.color,
              i = t.configData.canvasSize,
              c = document.createElement('canvas');
            (c.width = i), (c.height = i);
            var o = c.getContext('2d'),
              l = new Image();
            (l.src = '/api/assets/designimages/'.concat(r)),
              (l.onload = function () {
                !(function t() {
                  null !== o && 'object' === typeof c
                    ? (o.drawImage(l, 0, 0, i, i),
                      (o.globalCompositeOperation = 'source-in'),
                      (o.fillStyle = s),
                      o.fillRect(0, 0, i, i),
                      e(c))
                    : setTimeout(t, 100);
                })();
              });
          });
        },
        kt = function (e) {
          var t = e.design,
            a = e.layer,
            n = e.partName,
            r = e.currentShoe;
          return new Promise(function (e) {
            var s = t.configData.partsObject[n].mask,
              i = a.link,
              c = a.x,
              o = a.y,
              l = a.scale,
              u = a.rotation,
              d = t.configData.canvasSize,
              b = document.createElement('canvas');
            (b.width = d), (b.height = d);
            var v = b.getContext('2d'),
              h = new Image();
            (h.src = '/api/assets/images/'.concat(i)),
              (h.onload = function () {
                var t = h.width,
                  a = h.height,
                  n = Math.round(Math.sqrt(t * t + a * a)),
                  i = document.createElement('canvas');
                (i.id = 'pythagorean-canvas'), (i.width = n), (i.height = n);
                var j = i.getContext('2d');
                !(function t() {
                  if (
                    null !== j &&
                    'object' === typeof i &&
                    null !== v &&
                    'object' === typeof b
                  ) {
                    j.translate(i.width / 2, i.height / 2),
                      j.rotate((u * Math.PI) / 180),
                      j.drawImage(
                        h,
                        h.width / -2,
                        h.height / -2,
                        h.width,
                        h.height
                      );
                    var a = new Image();
                    (a.src = '/api/assets/designimages/'.concat(s)),
                      (a.onload = function () {
                        v.drawImage(a, 0, 0, d, d),
                          (v.globalCompositeOperation = 'source-in');
                        var t = c + (d - d * l) / 2,
                          n = o + (d - d * l) / 2,
                          s = d * l;
                        'left' === r && (v.scale(-1, 1), v.translate(-d, 0)),
                          v.drawImage(i, t, n, s, s),
                          e(b);
                      });
                  } else setTimeout(t, 100);
                })();
              });
          });
        },
        Dt = function (e) {
          var t = e.design,
            a = e.layer,
            n = e.currentShoe;
          return new Promise(function (e) {
            var r = a.link,
              s = a.color,
              i = t.configData.canvasSize,
              c = document.createElement('canvas');
            (c.width = i), (c.height = i);
            var o = c.getContext('2d'),
              l = new Image();
            (l.src = '/api/assets/designimages/'.concat(r)),
              (l.onload = function () {
                !(function t() {
                  null !== o && 'object' === typeof c
                    ? ('left' === n &&
                        'heelWingLogoMask.png' === r &&
                        (o.scale(-1, 1), o.translate(-i, 0)),
                      o.drawImage(l, 0, 0, i, i),
                      (o.globalCompositeOperation = 'source-in'),
                      (o.fillStyle = s),
                      o.fillRect(0, 0, i, i),
                      e(c))
                    : setTimeout(t, 100);
                })();
              });
          });
        },
        St = function (e) {
          var t = e.design,
            a = e.layer,
            n = e.partName,
            r = e.overlayCanvas;
          return new Promise(function (e) {
            var s = t.configData.partsObject[n].mask,
              i = a.source,
              c = t.configData.translations[i][n],
              o = c.x,
              l = c.y,
              u = c.scale,
              d = c.rotation,
              b = t.configData.canvasSize,
              v = document.createElement('canvas');
            (v.width = b), (v.height = b);
            var h = v.getContext('2d'),
              j = new Image();
            (j.src = '/api/assets/designimages/'.concat(s)),
              (j.onload = function () {
                !(function t() {
                  null !== h && 'object' === typeof v
                    ? (h.drawImage(j, 0, 0, b, b),
                      (h.globalCompositeOperation = 'source-in'),
                      h.translate(b * o, b * l),
                      h.rotate(d),
                      h.drawImage(r, 0, 0, b * u, b * u),
                      e(v))
                    : setTimeout(t, 100);
                })();
              });
          });
        },
        Vt = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.design),
                        (n = t.designLayers),
                        (r = t.partName),
                        (s = t.overlays),
                        (i = t.currentShoe),
                        (c = []),
                        (e.t0 = Ae.a.keys(n));
                    case 3:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 44;
                        break;
                      }
                      if (((o = e.t1.value), 'color' !== n[o].type)) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.next = 8),
                        Nt({ design: a, layer: n[o], partName: r })
                      );
                    case 8:
                      (l = e.sent), c.push(l), (e.next = 42);
                      break;
                    case 12:
                      if ('graphic' !== n[o].type) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (e.t2 = c),
                        (e.next = 16),
                        kt({
                          design: a,
                          layer: n[o],
                          partName: r,
                          currentShoe: i,
                        })
                      );
                    case 16:
                      (e.t3 = e.sent),
                        e.t2.push.call(e.t2, e.t3),
                        (e.next = 42);
                      break;
                    case 20:
                      if ('mask' !== n[o].type) {
                        e.next = 28;
                        break;
                      }
                      return (
                        (e.t4 = c),
                        (e.next = 24),
                        Dt({ design: a, layer: n[o], currentShoe: i })
                      );
                    case 24:
                      (e.t5 = e.sent),
                        e.t4.push.call(e.t4, e.t5),
                        (e.next = 42);
                      break;
                    case 28:
                      if ('overlay' !== n[o].type) {
                        e.next = 42;
                        break;
                      }
                      if ('outerOverlay' !== n[o].source) {
                        e.next = 37;
                        break;
                      }
                      return (
                        (e.t6 = c),
                        (e.next = 33),
                        St({
                          design: a,
                          layer: n[o],
                          partName: r,
                          overlayCanvas: s[0],
                        })
                      );
                    case 33:
                      (e.t7 = e.sent),
                        e.t6.push.call(e.t6, e.t7),
                        (e.next = 42);
                      break;
                    case 37:
                      return (
                        (e.t8 = c),
                        (e.next = 40),
                        St({
                          design: a,
                          layer: n[o],
                          partName: r,
                          overlayCanvas: s[1],
                        })
                      );
                    case 40:
                      (e.t9 = e.sent), e.t8.push.call(e.t8, e.t9);
                    case 42:
                      e.next = 3;
                      break;
                    case 44:
                      return e.abrupt('return', { layers: c });
                    case 45:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Lt = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.design),
                        (n = t.partName),
                        (r = t.currentShoe),
                        (e.next = 3),
                        Nt({
                          design: a,
                          layer: { color: a.outlineData.baseColors[r] },
                          partName: n,
                        })
                      );
                    case 3:
                      return (s = e.sent), e.abrupt('return', s);
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        It = function (e) {
          var t = e.design,
            a = e.type,
            n = e.overlays,
            r = e.currentShoe;
          return new Promise(function (e, s) {
            var i = {};
            (function () {
              var s = Object(Be.a)(
                Ae.a.mark(function s() {
                  var c, o, l;
                  return Ae.a.wrap(function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          if ('partsCanvasObject' !== a) {
                            s.next = 11;
                            break;
                          }
                          s.t0 = Ae.a.keys(t.outlineData.parts);
                        case 2:
                          if ((s.t1 = s.t0()).done) {
                            s.next = 9;
                            break;
                          }
                          return (
                            (c = s.t1.value),
                            (s.next = 6),
                            Vt({
                              design: t,
                              designLayers: t.outlineData.parts[c][r],
                              partName: c,
                              overlays: n,
                              currentShoe: r,
                            })
                          );
                        case 6:
                          (i[c] = s.sent), (s.next = 2);
                          break;
                        case 9:
                          s.next = 31;
                          break;
                        case 11:
                          if ('overlaysCanvasObject' !== a) {
                            s.next = 22;
                            break;
                          }
                          s.t2 = Ae.a.keys(t.outlineData.overlays);
                        case 13:
                          if ((s.t3 = s.t2()).done) {
                            s.next = 20;
                            break;
                          }
                          return (
                            (o = s.t3.value),
                            (s.next = 17),
                            Vt({
                              design: t,
                              designLayers: t.outlineData.overlays[o][r],
                              partName: o,
                              currentShoe: r,
                            })
                          );
                        case 17:
                          (i[o] = s.sent), (s.next = 13);
                          break;
                        case 20:
                          s.next = 31;
                          break;
                        case 22:
                          if ('baseColorCanvasObject' !== a) {
                            s.next = 31;
                            break;
                          }
                          s.t4 = Ae.a.keys(t.outlineData.parts);
                        case 24:
                          if ((s.t5 = s.t4()).done) {
                            s.next = 31;
                            break;
                          }
                          return (
                            (l = s.t5.value),
                            (s.next = 28),
                            Lt({ design: t, partName: l, currentShoe: r })
                          );
                        case 28:
                          (i[l] = s.sent), (s.next = 24);
                          break;
                        case 31:
                          e(i);
                        case 32:
                        case 'end':
                          return s.stop();
                      }
                  }, s);
                })
              );
              return function () {
                return s.apply(this, arguments);
              };
            })()();
          });
        },
        Pt = function (e) {
          var t = e.design,
            a = e.overlayCanvasObject,
            n = e.overlayCanvas,
            r = e.partName,
            s = e.graphicVisualCanvas,
            i = t.configData.canvasSize,
            c = n.getContext('2d'),
            o = s.getContext('2d');
          for (var l in (o.clearRect(0, 0, i, i),
          c.clearRect(0, 0, i, i),
          a[r].layers)) {
            var u = a[r].layers[l];
            c.drawImage(u, 0, 0, i, i), o.drawImage(u, 0, 0, i, i);
          }
        },
        Tt = function (e) {
          var t = e.design,
            a = e.graphicVisualCanvas,
            n = e.partName,
            r = e.canvasObject,
            s = e.baseColorCanvasObject,
            i = t.configData.canvasSize,
            c = a.getContext('2d');
          if ((c.clearRect(0, 0, i, i), s[n])) {
            var o = s[n];
            c.drawImage(o, 0, 0, i, i);
          }
          for (var l in r[n].layers) {
            var u = r[n].layers[l];
            c.drawImage(u, 0, 0, i, i);
          }
        },
        Rt = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.partName),
                        (n = t.layerIndex),
                        (r = t.layerObject),
                        (s = t.canvasObject),
                        (i = t.textureCanvas),
                        (c = t.texture),
                        (o = t.graphicVisualCanvas),
                        (l = t.design),
                        (u = t.baseColorCanvasObject),
                        (d = t.currentShoe),
                        'color' !== r.type)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (e.next = 4), Nt({ design: l, layer: r, partName: a })
                      );
                    case 4:
                      (b = e.sent), (e.next = 16);
                      break;
                    case 7:
                      if ('graphic' !== r.type) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 10),
                        kt({ design: l, layer: r, partName: a, currentShoe: d })
                      );
                    case 10:
                      (b = e.sent), (e.next = 16);
                      break;
                    case 13:
                      return (
                        (e.next = 15),
                        Dt({ design: l, layer: r, currentShoe: d })
                      );
                    case 15:
                      b = e.sent;
                    case 16:
                      (s[a].layers[n] = b),
                        At({
                          textureCanvas: i,
                          canvasObjectPart: s[a],
                          partName: a,
                          texture: c,
                          graphicVisualCanvas: o,
                          design: l,
                          baseColorCanvasObject: u,
                        });
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Mt = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b, v;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.canvasObject),
                        (n = t.graphicVisualCanvas),
                        (r = t.layerObject),
                        (s = t.partName),
                        (i = t.texture),
                        (c = t.textureCanvas),
                        (o = t.design),
                        (l = t.baseColorCanvasObject),
                        (u = t.currentShoe),
                        'color' !== r.type)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.next = 4), Nt({ design: o, layer: r, partName: s })
                      );
                    case 4:
                      (d = e.sent), a[s].layers.push(d), (e.next = 19);
                      break;
                    case 8:
                      if ('graphic' !== r.type) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (e.next = 11),
                        kt({ design: o, layer: r, partName: s, currentShoe: u })
                      );
                    case 11:
                      (b = e.sent), a[s].layers.push(b), (e.next = 19);
                      break;
                    case 15:
                      return (
                        (e.next = 17),
                        Dt({ design: o, layer: r, currentShoe: u })
                      );
                    case 17:
                      (v = e.sent), a[s].layers.push(v);
                    case 19:
                      At({
                        textureCanvas: c,
                        canvasObjectPart: a[s],
                        partName: s,
                        texture: i,
                        graphicVisualCanvas: n,
                        design: o,
                        baseColorCanvasObject: l,
                      });
                    case 20:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Et = function (e) {
          var t = e.canvasObject,
            a = e.partName,
            n = e.layerIndex,
            r = e.textureCanvas,
            s = e.texture,
            i = e.graphicVisualCanvas,
            c = e.design,
            o = e.baseColorCanvasObject;
          t[a].layers.splice(n, 1),
            At({
              textureCanvas: r,
              canvasObjectPart: t[a],
              partName: a,
              texture: s,
              graphicVisualCanvas: i,
              design: c,
              baseColorCanvasObject: o,
            });
        },
        zt = function (e) {
          var t = e.canvasObject,
            a = e.partName,
            n = e.layerIndex,
            r = e.direction,
            s = e.textureCanvas,
            i = e.texture,
            c = e.graphicVisualCanvas,
            o = e.design,
            l = e.baseColorCanvasObject,
            u = t[a].layers,
            d = u[n];
          (u[n] = u[n + r]),
            (u[n + r] = d),
            (t[a].layers = u),
            At({
              textureCanvas: s,
              canvasObjectPart: t[a],
              partName: a,
              texture: i,
              graphicVisualCanvas: c,
              design: o,
              baseColorCanvasObject: l,
            });
        },
        At = function (e) {
          var t = e.textureCanvas,
            a = e.canvasObjectPart,
            n = e.partName,
            r = e.texture,
            s = e.graphicVisualCanvas,
            i = e.design,
            c = e.baseColorCanvasObject,
            o = t.getContext('2d'),
            l = s.getContext('2d');
          l.clearRect(0, 0, i.configData.canvasSize, i.configData.canvasSize);
          var u = i.configData.partsObject[n],
            d = u.x,
            b = u.y,
            v = u.width,
            h = u.height,
            j = i.configData.divider;
          for (var p in (o.drawImage(c[n], d / j, b / j, v / j, h / j),
          l.drawImage(
            c[n],
            0,
            0,
            i.configData.canvasSize,
            i.configData.canvasSize
          ),
          a.layers)) {
            var g = a.layers[p];
            o.drawImage(g, d / j, b / j, v / j, h / j),
              l.drawImage(
                g,
                0,
                0,
                i.configData.canvasSize,
                i.configData.canvasSize
              );
          }
          r.needsUpdate = !0;
        },
        Bt = function (e) {
          var t = e.changeObject,
            a = e.design,
            n = e.setDesign,
            r = e.texture,
            s = e.textureCanvas,
            i = e.graphicVisualCanvas,
            c = e.canvasObject,
            o = e.overlayCanvas,
            l = e.overlayCanvasObject,
            u = e.baseColorCanvasObject,
            d = e.currentShoe,
            b = t.type,
            v = t.fileName,
            h = Object(pt.cloneDeep)(a);
          if ('graphic-moved' === b) {
            var j = t.partName,
              p = t.layerIndex,
              g = t.direction,
              f = t.distance,
              x = h.outlineData.overlays[j][d][p];
            'vert' === g
              ? (x.y += f)
              : 'hor' === g
              ? (x.x += f)
              : 'scale' === g
              ? (x.scale *= f)
              : 'rotate' === g
              ? (x.rotation += f)
              : 'reset' === g &&
                ((x.y = 0), (x.x = 0), (x.scale = 1), (x.rotation = 0)),
              n(h),
              Ut({
                partName: j,
                layerIndex: p,
                layerObject: x,
                overlayCanvasObject: l,
                overlayCanvas: o,
                texture: r,
                graphicVisualCanvas: i,
                design: a,
                canvasObject: c,
                textureCanvas: s,
                baseColorCanvasObject: u,
                currentShoe: d,
              });
          } else if ('color-changed' === b) {
            var O = t.partName,
              m = t.layerIndex,
              y = t.newColor,
              C = h.outlineData.overlays[O][d][m];
            (C.color = y),
              n(h),
              Ut({
                partName: O,
                layerIndex: m,
                layerObject: C,
                overlayCanvasObject: l,
                overlayCanvas: o,
                texture: r,
                graphicVisualCanvas: i,
                design: a,
                canvasObject: c,
                textureCanvas: s,
                baseColorCanvasObject: u,
                currentShoe: d,
              });
          } else if ('layer-added' === b) {
            var w = t.partName,
              N = t.layerType;
            if (0 === a.outlineData.overlays[w][d].length) {
              var k = a.configData.overlayParts[w];
              for (var D in k) {
                var S = k[D];
                h.outlineData.parts[S][d].push({ type: 'overlay', source: w });
              }
            }
            'Color' === N
              ? h.outlineData.overlays[w][d].push({
                  type: 'color',
                  color: '#777777',
                })
              : h.outlineData.overlays[w][d].push({
                  type: 'graphic',
                  link: v,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotation: 0,
                }),
              n(h),
              Gt({
                overlayCanvasObject: l,
                partName: w,
                layerObject: h.outlineData.overlays[w][d].slice(-1)[0],
                overlayCanvas: o,
                texture: r,
                graphicVisualCanvas: i,
                design: a,
                textureCanvas: s,
                canvasObject: c,
                tempDesign: h,
                baseColorCanvasObject: u,
                currentShoe: d,
              });
          } else if ('layer-moved' === b) {
            var V = t.partName,
              L = t.layerIndex,
              I = t.direction,
              P = h.outlineData.overlays[V][d],
              T = P[L];
            (P[L] = P[L + I]),
              (P[L + I] = T),
              (h.outlineData.overlays[V][d] = P),
              n(h),
              _t({
                overlayCanvasObject: l,
                partName: V,
                layerIndex: L,
                direction: I,
                overlayCanvas: o,
                texture: r,
                graphicVisualCanvas: i,
                design: a,
                textureCanvas: s,
                canvasObject: c,
                baseColorCanvasObject: u,
                currentShoe: d,
              });
          } else if ('layer-deleted' === b) {
            var R = t.partName,
              M = t.layerIndex;
            if (
              (h.outlineData.overlays[R][d].splice(M, 1),
              0 === h.outlineData.overlays[R][d].length)
            ) {
              var E = a.configData.overlayParts[R];
              for (var z in E)
                for (
                  var A = E[z], B = 0;
                  B < h.outlineData.parts[A][d].length;
                  B++
                ) {
                  var U = B;
                  'overlay' === h.outlineData.parts[A][d][B].type &&
                    h.outlineData.parts[A][d][B].source === R &&
                    (h.outlineData.parts[A][d].splice(U, 1),
                    c[A].layers.splice(U, 1));
                }
            }
            n(h),
              Ft({
                overlayCanvasObject: l,
                partName: R,
                layerIndex: M,
                overlayCanvas: o,
                texture: r,
                graphicVisualCanvas: i,
                design: a,
                textureCanvas: s,
                canvasObject: c,
                tempDesign: h,
                baseColorCanvasObject: u,
                currentShoe: d,
              });
          }
        },
        Ut = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b, v, h, j, p, g, f, x, O;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.partName),
                        (n = t.layerIndex),
                        (r = t.layerObject),
                        (s = t.overlayCanvasObject),
                        (i = t.overlayCanvas),
                        (c = t.texture),
                        (o = t.graphicVisualCanvas),
                        (l = t.design),
                        (u = t.canvasObject),
                        (d = t.textureCanvas),
                        (b = t.baseColorCanvasObject),
                        (v = t.currentShoe),
                        (h = l.configData.overlayParts[a]),
                        'color' !== r.type)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.next = 5), Nt({ design: l, layer: r, partName: a })
                      );
                    case 5:
                      (j = e.sent), (e.next = 11);
                      break;
                    case 8:
                      return (
                        (e.next = 10),
                        kt({ design: l, layer: r, partName: a, currentShoe: v })
                      );
                    case 10:
                      j = e.sent;
                    case 11:
                      (s[a].layers[n] = j),
                        Pt({
                          design: l,
                          overlayCanvasObject: s,
                          overlayCanvas: i,
                          partName: a,
                          graphicVisualCanvas: o,
                          currentShoe: v,
                        }),
                        (e.t0 = Ae.a.keys(h));
                    case 14:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 32;
                        break;
                      }
                      (p = e.t1.value), (g = h[p]), (f = 0);
                    case 18:
                      if (!(f < l.outlineData.parts[g][v].length)) {
                        e.next = 30;
                        break;
                      }
                      if (
                        ((x = f),
                        'overlay' !== l.outlineData.parts[g][v][f].type)
                      ) {
                        e.next = 27;
                        break;
                      }
                      if (l.outlineData.parts[g][v][f].source !== a) {
                        e.next = 27;
                        break;
                      }
                      return (
                        (e.next = 24),
                        St({
                          design: l,
                          layer: l.outlineData.parts[g][v][f],
                          partName: g,
                          overlayCanvas: i,
                        })
                      );
                    case 24:
                      (O = e.sent),
                        (u[g].layers[x] = O),
                        Wt({
                          textureCanvas: d,
                          canvasObjectPart: u[g],
                          partName: g,
                          design: l,
                          baseColorCanvasObject: b,
                        });
                    case 27:
                      f++, (e.next = 18);
                      break;
                    case 30:
                      e.next = 14;
                      break;
                    case 32:
                      c.needsUpdate = !0;
                    case 33:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Gt = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b, v, h, j, p, g, f, x, O, m;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = t.overlayCanvasObject),
                        (n = t.partName),
                        (r = t.layerObject),
                        (s = t.overlayCanvas),
                        (i = t.texture),
                        (c = t.graphicVisualCanvas),
                        (o = t.design),
                        (l = t.textureCanvas),
                        (u = t.canvasObject),
                        (d = t.tempDesign),
                        (b = t.baseColorCanvasObject),
                        (v = t.currentShoe),
                        'color' !== r.type)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.next = 4), Nt({ design: o, layer: r, partName: n })
                      );
                    case 4:
                      (h = e.sent), a[n].layers.push(h), (e.next = 13);
                      break;
                    case 8:
                      if ('graphic' !== r.type) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (e.next = 11),
                        kt({ design: o, layer: r, partName: n, currentShoe: v })
                      );
                    case 11:
                      (j = e.sent), a[n].layers.push(j);
                    case 13:
                      Pt({
                        design: o,
                        overlayCanvasObject: a,
                        overlayCanvas: s,
                        partName: n,
                        graphicVisualCanvas: c,
                        currentShoe: v,
                      }),
                        (p = o.configData.overlayParts[n]),
                        (e.t0 = Ae.a.keys(p));
                    case 16:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 34;
                        break;
                      }
                      (g = e.t1.value), (f = p[g]), (x = 0);
                    case 20:
                      if (!(x < d.outlineData.parts[f][v].length)) {
                        e.next = 32;
                        break;
                      }
                      if (
                        ((O = x),
                        'overlay' !== d.outlineData.parts[f][v][x].type)
                      ) {
                        e.next = 29;
                        break;
                      }
                      if (d.outlineData.parts[f][v][x].source !== n) {
                        e.next = 29;
                        break;
                      }
                      return (
                        (e.next = 26),
                        St({
                          design: o,
                          layer: d.outlineData.parts[f][v][x],
                          partName: f,
                          overlayCanvas: s,
                        })
                      );
                    case 26:
                      (m = e.sent),
                        (u[f].layers[O] = m),
                        Wt({
                          textureCanvas: l,
                          canvasObjectPart: u[f],
                          partName: f,
                          design: o,
                          baseColorCanvasObject: b,
                        });
                    case 29:
                      x++, (e.next = 20);
                      break;
                    case 32:
                      e.next = 16;
                      break;
                    case 34:
                      i.needsUpdate = !0;
                    case 35:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        _t = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b, v, h, j, p, g, f, x, O, m;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.overlayCanvasObject),
                        (n = t.partName),
                        (r = t.layerIndex),
                        (s = t.direction),
                        (i = t.overlayCanvas),
                        (c = t.texture),
                        (o = t.graphicVisualCanvas),
                        (l = t.design),
                        (u = t.textureCanvas),
                        (d = t.canvasObject),
                        (b = t.baseColorCanvasObject),
                        (v = t.currentShoe),
                        (h = a[n].layers),
                        (j = h[r]),
                        (h[r] = h[r + s]),
                        (h[r + s] = j),
                        (a[n].layers = h),
                        Pt({
                          design: l,
                          overlayCanvasObject: a,
                          overlayCanvas: i,
                          partName: n,
                          graphicVisualCanvas: o,
                          currentShoe: v,
                        }),
                        (p = l.configData.overlayParts[n]),
                        (e.t0 = Ae.a.keys(p));
                    case 9:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 27;
                        break;
                      }
                      (g = e.t1.value), (f = p[g]), (x = 0);
                    case 13:
                      if (!(x < l.outlineData.parts[f][v].length)) {
                        e.next = 25;
                        break;
                      }
                      if (
                        ((O = x),
                        'overlay' !== l.outlineData.parts[f][v][x].type)
                      ) {
                        e.next = 22;
                        break;
                      }
                      if (l.outlineData.parts[f][v][x].source !== n) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (e.next = 19),
                        St({
                          design: l,
                          layer: l.outlineData.parts[f][v][x],
                          partName: f,
                          overlayCanvas: i,
                        })
                      );
                    case 19:
                      (m = e.sent),
                        (d[f].layers[O] = m),
                        Wt({
                          textureCanvas: u,
                          canvasObjectPart: d[f],
                          partName: f,
                          design: l,
                          baseColorCanvasObject: b,
                        });
                    case 22:
                      x++, (e.next = 13);
                      break;
                    case 25:
                      e.next = 9;
                      break;
                    case 27:
                      c.needsUpdate = !0;
                    case 28:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ft = (function () {
          var e = Object(Be.a)(
            Ae.a.mark(function e(t) {
              var a, n, r, s, i, c, o, l, u, d, b, v, h, j, p, g, f, x;
              return Ae.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a = t.overlayCanvasObject),
                        (n = t.partName),
                        (r = t.layerIndex),
                        (s = t.overlayCanvas),
                        (i = t.texture),
                        (c = t.graphicVisualCanvas),
                        (o = t.design),
                        (l = t.textureCanvas),
                        (u = t.canvasObject),
                        (d = t.tempDesign),
                        (b = t.baseColorCanvasObject),
                        (v = t.currentShoe),
                        a[n].layers.splice(r, 1),
                        Pt({
                          design: o,
                          overlayCanvasObject: a,
                          overlayCanvas: s,
                          partName: n,
                          graphicVisualCanvas: c,
                          currentShoe: v,
                        }),
                        (h = o.configData.overlayParts[n]),
                        (e.t0 = Ae.a.keys(h));
                    case 5:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 22;
                        break;
                      }
                      (j = e.t1.value), (p = h[j]), (g = 0);
                    case 9:
                      if (!(g < d.outlineData.parts[p][v].length)) {
                        e.next = 19;
                        break;
                      }
                      if (
                        ((f = g),
                        'overlay' !== d.outlineData.parts[p][v][g].type ||
                          d.outlineData.parts[p][v][g].source !== n)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.next = 14),
                        St({
                          design: o,
                          layer: o.outlineData.parts[p][v][g],
                          partName: p,
                          overlayCanvas: s,
                        })
                      );
                    case 14:
                      (x = e.sent), (u[p].layers[f] = x);
                    case 16:
                      g++, (e.next = 9);
                      break;
                    case 19:
                      Wt({
                        textureCanvas: l,
                        canvasObjectPart: u[p],
                        partName: p,
                        design: o,
                        baseColorCanvasObject: b,
                      }),
                        (e.next = 5);
                      break;
                    case 22:
                      i.needsUpdate = !0;
                    case 23:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Wt = function (e) {
          var t = e.textureCanvas,
            a = e.canvasObjectPart,
            n = e.partName,
            r = e.design,
            s = e.baseColorCanvasObject,
            i = t.getContext('2d'),
            c = r.configData.partsObject[n],
            o = c.x,
            l = c.y,
            u = c.width,
            d = c.height,
            b = r.configData.divider;
          for (var v in (i.drawImage(s[n], o / b, l / b, u / b, d / b),
          a.layers)) {
            var h = a.layers[v];
            i.drawImage(h, o / b, l / b, u / b, d / b);
          }
        },
        Xt = function (e) {
          var t = e.design,
            a = e.canvasObject,
            n = e.baseColorCanvasObject;
          return new Promise(function (e, r) {
            var s = document.createElement('canvas');
            (s.width = t.configData.canvasSize),
              (s.height = t.configData.canvasSize);
            var i = s.getContext('2d');
            !(function r() {
              if ('undefined' !== typeof i) {
                for (var c in a) {
                  var o = t.configData.partsObject[c],
                    l = o.x,
                    u = o.y,
                    d = o.width,
                    b = o.height,
                    v = t.configData.divider;
                  for (var h in (i.drawImage(n[c], l / v, u / v, d / v, b / v),
                  a[c].layers)) {
                    var j = a[c].layers[h];
                    i.drawImage(j, l / v, u / v, d / v, b / v);
                  }
                }
                e(s);
              } else setTimeout(r, 100);
            })();
          });
        };
      var Yt = function (e) {
        var t = e.userData,
          a = e.designSpec,
          r = e.graphicVisualCanvas,
          s = e.rightInnerOverlayCanvas,
          i = e.rightOuterOverlayCanvas,
          c = e.rightTexture,
          o = e.rightTextureCanvas,
          d = e.leftInnerOverlayCanvas,
          b = e.leftOuterOverlayCanvas,
          v = e.leftTexture,
          h = e.leftTextureCanvas,
          j = e.redMapCanvas,
          p = Object(n.useState)(a),
          g = Object(l.a)(p, 2),
          f = g[0],
          x = g[1],
          O = Object(n.useState)(!1),
          m = Object(l.a)(O, 2),
          y = m[0],
          C = m[1],
          w = Object(n.useState)(0),
          N = Object(l.a)(w, 2),
          k = N[0],
          D = N[1],
          S = Object(n.useState)('right'),
          V = Object(l.a)(S, 2),
          L = V[0],
          I = V[1],
          P = Object(n.useState)(-1),
          T = Object(l.a)(P, 2),
          R = T[0],
          M = T[1],
          E = Object(n.useState)({ right: !0, left: !0 }),
          z = Object(l.a)(E, 2),
          A = z[0],
          B = z[1],
          U = Object(n.useState)('DesignPreview'),
          G = Object(l.a)(U, 2),
          _ = G[0],
          F = G[1],
          W = Object(n.useState)('LayersMain'),
          X = Object(l.a)(W, 2),
          Y = X[0],
          H = X[1],
          J = Object(n.useRef)(),
          q = Object(n.useRef)(),
          Z = Object(n.useRef)(),
          $ = Object(n.useRef)(),
          K = Object(n.useRef)(),
          Q = Object(n.useRef)(),
          ee = Object(n.useState)(!0),
          te = Object(l.a)(ee, 2),
          ae = te[0],
          ne = te[1],
          re = (function () {
            var e = Object(Be.a)(
              Ae.a.mark(function e(t) {
                var a, n;
                return Ae.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          It({
                            design: t,
                            type: 'baseColorCanvasObject',
                            currentShoe: 'right',
                          })
                        );
                      case 2:
                        return (
                          (J.current = e.sent),
                          (e.next = 5),
                          It({
                            design: t,
                            type: 'baseColorCanvasObject',
                            currentShoe: 'left',
                          })
                        );
                      case 5:
                        return (
                          ($.current = e.sent),
                          (e.next = 8),
                          Xt({
                            design: f,
                            canvasObject: q.current,
                            baseColorCanvasObject: J.current,
                          })
                        );
                      case 8:
                        return (
                          (a = e.sent),
                          (e.next = 11),
                          Xt({
                            design: f,
                            canvasObject: K.current,
                            baseColorCanvasObject: $.current,
                          })
                        );
                      case 11:
                        (n = e.sent),
                          o.getContext('2d').drawImage(a, 0, 0),
                          (c.needsUpdate = !0),
                          h.getContext('2d').drawImage(n, 0, 0),
                          (v.needsUpdate = !0);
                      case 16:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (
          Object(n.useEffect)(
            function () {
              (q.current && K.current) ||
                Ot({
                  setTexturesLoaded: C,
                  design: f,
                  graphicVisualCanvas: r,
                  rightBaseColorCanvasObjectRef: J,
                  rightInnerOverlayCanvas: s,
                  rightOuterOverlayCanvas: i,
                  rightTexture: c,
                  rightTextureCanvas: o,
                  rightCanvasObjectRef: q,
                  rightOverlaysCanvasObjectRef: Z,
                  leftBaseColorCanvasObjectRef: $,
                  leftInnerOverlayCanvas: d,
                  leftOuterOverlayCanvas: b,
                  leftTexture: v,
                  leftTextureCanvas: h,
                  leftCanvasObjectRef: K,
                  leftOverlaysCanvasObjectRef: Q,
                });
            },
            [f, r, s, i, c, o, d, b, v, h]
          ),
          f
            ? Object(u.jsxs)('div', {
                className: 'designer-container',
                children: [
                  Object(u.jsx)(Ye, {
                    design: f,
                    setView: F,
                    setLayersView: H,
                    rightTexture: c,
                    leftTexture: v,
                    texturesLoaded: y,
                    setCurrentPart: D,
                    setCurrentShoe: I,
                    setCurrentLayer: M,
                    shoeVisibility: A,
                    redMapCanvas: j,
                    cameraReset: ae,
                    setCameraReset: ne,
                  }),
                  Object(u.jsx)(xt, {
                    design: f,
                    setDesign: x,
                    view: _,
                    setView: F,
                    currentLayer: R,
                    setCurrentLayer: M,
                    layersView: Y,
                    setLayersView: H,
                    graphicVisualCanvas: r,
                    handleUpdateGraphicVisualCanvas: function (e) {
                      Tt(
                        'outerOverlay' === e || 'innerOverlay' === e
                          ? 'right' === L
                            ? {
                                design: f,
                                graphicVisualCanvas: r,
                                partName: e,
                                canvasObject: Z.current,
                                baseColorCanvasObject: J.current,
                                currentShoe: L,
                              }
                            : {
                                design: f,
                                graphicVisualCanvas: r,
                                partName: e,
                                canvasObject: Q.current,
                                baseColorCanvasObject: $.current,
                                currentShoe: L,
                              }
                          : 'right' === L
                          ? {
                              design: f,
                              graphicVisualCanvas: r,
                              partName: e,
                              canvasObject: q.current,
                              baseColorCanvasObject: J.current,
                              currentShoe: L,
                            }
                          : {
                              design: f,
                              graphicVisualCanvas: r,
                              partName: e,
                              canvasObject: K.current,
                              baseColorCanvasObject: $.current,
                              currentShoe: L,
                            }
                      );
                    },
                    handleChangeManager: function (e) {
                      var t = e.partName;
                      'outerOverlay' === t
                        ? Bt({
                            changeObject: e,
                            design: f,
                            setDesign: x,
                            texture: 'right' === L ? c : v,
                            textureCanvas: 'right' === L ? o : h,
                            graphicVisualCanvas: r,
                            canvasObject: 'right' === L ? q.current : K.current,
                            overlayCanvas: 'right' === L ? i : b,
                            overlayCanvasObject:
                              'right' === L ? Z.current : Q.current,
                            baseColorCanvasObject:
                              'right' === L ? J.current : $.current,
                            currentShoe: L,
                          })
                        : 'innerOverlay' === t
                        ? Bt({
                            changeObject: e,
                            design: f,
                            setDesign: x,
                            texture: 'right' === L ? c : v,
                            textureCanvas: 'right' === L ? o : h,
                            graphicVisualCanvas: r,
                            canvasObject: 'right' === L ? q.current : K.current,
                            overlayCanvas: 'right' === L ? s : d,
                            overlayCanvasObject:
                              'right' === L ? Z.current : Q.current,
                            baseColorCanvasObject:
                              'right' === L ? J.current : $.current,
                            currentShoe: L,
                          })
                        : (function (e) {
                            var t = e.changeObject,
                              a = e.design,
                              n = e.setDesign,
                              r = e.texture,
                              s = e.textureCanvas,
                              i = e.graphicVisualCanvas,
                              c = e.canvasObject,
                              o = e.baseColorCanvasObject,
                              l = e.currentShoe,
                              u = t.type,
                              d = t.fileName,
                              b = Object(pt.cloneDeep)(a);
                            if ('graphic-moved' === u) {
                              var v = t.partName,
                                h = t.layerIndex,
                                j = t.direction,
                                p = t.distance,
                                g = b.outlineData.parts[v][l][h];
                              'vert' === j
                                ? (g.y += p)
                                : 'hor' === j
                                ? (g.x += p)
                                : 'scale' === j
                                ? (g.scale *= p)
                                : 'rotate' === j
                                ? (g.rotation += p)
                                : 'reset' === j &&
                                  ((g.y = 0),
                                  (g.x = 0),
                                  (g.scale = 1),
                                  (g.rotation = 0)),
                                n(b),
                                Rt({
                                  partName: v,
                                  layerIndex: h,
                                  layerObject: g,
                                  canvasObject: c,
                                  textureCanvas: s,
                                  texture: r,
                                  graphicVisualCanvas: i,
                                  design: a,
                                  baseColorCanvasObject: o,
                                  currentShoe: l,
                                });
                            } else if ('color-changed' === u) {
                              var f,
                                x = t.partName,
                                O = t.layerIndex,
                                m = t.newColor;
                              ((f =
                                'outerOverlay' === x || 'innerOverlay' === x
                                  ? b.outlineData.overlays[x].layers[O]
                                  : b.outlineData.parts[x][l][O]).color = m),
                                n(b),
                                Rt({
                                  partName: x,
                                  layerIndex: O,
                                  layerObject: f,
                                  canvasObject: c,
                                  textureCanvas: s,
                                  texture: r,
                                  graphicVisualCanvas: i,
                                  design: a,
                                  baseColorCanvasObject: o,
                                  currentShoe: l,
                                });
                            } else if ('layer-added' === u) {
                              var y = t.partName,
                                C = t.layerType;
                              if ('Color' === C)
                                b.outlineData.parts[y][l].push({
                                  type: 'color',
                                  color: '#777777',
                                });
                              else if ('Graphic' === C)
                                b.outlineData.parts[y][l].push({
                                  type: 'graphic',
                                  link: d,
                                  x: 0,
                                  y: 0,
                                  scale: 1,
                                  rotation: 0,
                                });
                              else {
                                var w = t.maskLink;
                                b.outlineData.parts[y][l].push({
                                  type: 'mask',
                                  link: w,
                                  color: '#000000',
                                });
                              }
                              n(b);
                              var N = b.outlineData.parts[y][l].slice(-1)[0];
                              Mt({
                                canvasObject: c,
                                graphicVisualCanvas: i,
                                layerObject: N,
                                partName: y,
                                texture: r,
                                textureCanvas: s,
                                design: a,
                                baseColorCanvasObject: o,
                                currentShoe: l,
                              });
                            } else if ('layer-moved' === u) {
                              var k = t.partName,
                                D = t.layerIndex,
                                S = t.direction,
                                V = b.outlineData.parts[k][l],
                                L = V[D];
                              (V[D] = V[D + S]),
                                (V[D + S] = L),
                                (b.outlineData.parts[k].layers = V),
                                n(b),
                                zt({
                                  canvasObject: c,
                                  partName: k,
                                  layerIndex: D,
                                  direction: S,
                                  textureCanvas: s,
                                  texture: r,
                                  graphicVisualCanvas: i,
                                  design: a,
                                  baseColorCanvasObject: o,
                                  currentShoe: l,
                                });
                            } else if ('layer-deleted' === u) {
                              var I = t.partName,
                                P = t.layerIndex;
                              b.outlineData.parts[I][l].splice(P, 1),
                                n(b),
                                Et({
                                  canvasObject: c,
                                  partName: I,
                                  layerIndex: P,
                                  textureCanvas: s,
                                  texture: r,
                                  graphicVisualCanvas: i,
                                  design: a,
                                  baseColorCanvasObject: o,
                                  currentShoe: l,
                                });
                            }
                          })({
                            changeObject: e,
                            design: f,
                            setDesign: x,
                            texture: 'right' === L ? c : v,
                            textureCanvas: 'right' === L ? o : h,
                            graphicVisualCanvas: r,
                            canvasObject: 'right' === L ? q.current : K.current,
                            baseColorCanvasObject:
                              'right' === L ? J.current : $.current,
                            currentShoe: L,
                          });
                    },
                    handleUpdateBaseColor: re,
                    userData: t,
                    currentPart: k,
                    setCurrentPart: D,
                    currentShoe: L,
                    setCurrentShoe: I,
                    shoeVisibility: A,
                    setShoeVisibility: B,
                    setCameraReset: ne,
                  }),
                ],
              })
            : Object(u.jsx)('div', { children: 'hi' })
        );
      };
      var Ht,
        Jt = function () {
          var e = Object(o.g)().id,
            t = Object(n.useContext)(w.context),
            a = Object(n.useState)(null),
            r = Object(l.a)(a, 2),
            s = r[0],
            i = r[1],
            c = Object(n.useState)(null),
            d = Object(l.a)(c, 2),
            b = d[0],
            v = d[1],
            h = Object(n.useState)(null),
            j = Object(l.a)(h, 2),
            p = j[0],
            g = j[1],
            f = Object(n.useState)(null),
            x = Object(l.a)(f, 2),
            O = x[0],
            m = x[1],
            y = Object(n.useState)(null),
            C = Object(l.a)(y, 2),
            N = C[0],
            k = C[1],
            S = Object(n.useState)(null),
            V = Object(l.a)(S, 2),
            L = V[0],
            I = V[1],
            P = Object(n.useState)(null),
            T = Object(l.a)(P, 2),
            R = T[0],
            M = T[1],
            E = Object(n.useState)(null),
            z = Object(l.a)(E, 2),
            A = z[0],
            B = z[1],
            U = Object(n.useState)(null),
            G = Object(l.a)(U, 2),
            _ = G[0],
            F = G[1],
            W = Object(n.useState)(null),
            X = Object(l.a)(W, 2),
            Y = X[0],
            H = X[1],
            J = Object(n.useState)(null),
            q = Object(l.a)(J, 2),
            Z = q[0],
            $ = q[1],
            K = (function () {
              var e = Object(Be.a)(
                Ae.a.mark(function e(t) {
                  var a, n, r, s, c, o, l;
                  return Ae.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            i(t),
                            v(wt({ design: t })),
                            (e.next = 4),
                            yt({ design: t })
                          );
                        case 4:
                          return (
                            (a = e.sent), g(a), (e.next = 8), yt({ design: t })
                          );
                        case 8:
                          return (
                            (n = e.sent), m(n), (e.next = 12), yt({ design: t })
                          );
                        case 12:
                          return (
                            (r = e.sent), k(r), (e.next = 16), yt({ design: t })
                          );
                        case 16:
                          return (
                            (s = e.sent), M(s), (e.next = 20), yt({ design: t })
                          );
                        case 20:
                          return (
                            (c = e.sent), B(c), (e.next = 24), yt({ design: t })
                          );
                        case 24:
                          return (
                            (o = e.sent), F(o), (e.next = 28), Ct({ design: t })
                          );
                        case 28:
                          (l = e.sent), $(l);
                        case 30:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(n.useEffect)(
              function () {
                e
                  ? D('/api/outlines/'.concat(e), 'GET')
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        K(e);
                      })
                  : D('/api/outlines/newdesign', 'GET')
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        K(e);
                      });
              },
              [e]
            ),
            Object(n.useEffect)(
              function () {
                N && _ && (I(mt(N)), H(mt(_)));
              },
              [N, _]
            ),
            s && b && p && O && N && L && R && A && _ && Y && Z
              ? Object(u.jsx)('div', {
                  className: 'designer-root-container',
                  children: Object(u.jsx)(Yt, {
                    userData: t,
                    designSpec: s,
                    graphicVisualCanvas: b,
                    rightInnerOverlayCanvas: p,
                    rightOuterOverlayCanvas: O,
                    rightTexture: L,
                    rightTextureCanvas: N,
                    leftInnerOverlayCanvas: R,
                    leftOuterOverlayCanvas: A,
                    leftTexture: Y,
                    leftTextureCanvas: _,
                    redMapCanvas: Z,
                  }),
                })
              : Object(u.jsx)('div', {})
          );
        },
        qt = L.a.div(
          Ht ||
            (Ht = Object(V.a)([
              '\n  max-width: 400px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  padding: 16px;\n',
            ]))
        );
      var Zt,
        $t,
        Kt = function () {
          return Object(u.jsxs)(qt, {
            children: [
              Object(u.jsx)(U, {
                google: !0,
                onClick: function () {
                  window.open('http://solecomposer.com/auth/google', '_self');
                },
                children: 'Login With Google',
              }),
              Object(u.jsx)(c.b, {
                to: '/',
                children: Object(u.jsx)(U, { children: 'Back' }),
              }),
            ],
          });
        },
        Qt = L.a.div(
          Zt ||
            (Zt = Object(V.a)([
              '\n  max-width: 400px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n',
            ]))
        ),
        ea = L.a.p(
          $t ||
            ($t = Object(V.a)([
              '\n  padding: 0;\n  text-align: center;\n  margin: 0;\n  margin-top: 15px;\n',
            ]))
        );
      var ta = function () {
        var e = Object(n.useContext)(w.context);
        return Object(u.jsxs)(Qt, {
          children: [
            Object(u.jsx)(ea, { children: e.firstName }),
            Object(u.jsx)(ea, { children: e.email }),
            Object(u.jsx)(U, {
              onClick: function () {
                window.open('http://solecomposer.com/auth/logout', '_self');
              },
              children: 'Log Out',
            }),
            Object(u.jsx)(c.b, {
              to: '/',
              children: Object(u.jsx)(U, { children: 'Back' }),
            }),
          ],
        });
      };
      a(349);
      var aa,
        na = function () {
          return Object(u.jsxs)('div', {
            className: 'no-page-container',
            children: [
              Object(u.jsx)('p', {
                className: 'basic-paragraph',
                children: '404 - PAGE NOT FOUND',
              }),
              Object(u.jsx)(c.b, {
                to: '/',
                children: Object(u.jsx)('div', {
                  className: 'basic-button',
                  children: Object(u.jsx)('button', { children: 'Home' }),
                }),
              }),
            ],
          });
        },
        ra = L.a.div(aa || (aa = Object(V.a)([''])));
      var sa = function () {
        return Object(u.jsx)(ra, {
          children: Object(u.jsx)(c.a, {
            children: Object(u.jsx)(w, {
              children: Object(u.jsxs)(o.c, {
                children: [
                  Object(u.jsx)(o.a, { exact: !0, path: '/', component: Ee }),
                  Object(u.jsx)(o.a, {
                    exact: !0,
                    path: '/login',
                    component: Kt,
                  }),
                  Object(u.jsx)(o.a, {
                    exact: !0,
                    path: '/profile',
                    component: ta,
                  }),
                  Object(u.jsx)(o.a, {
                    exact: !0,
                    path: '/designer',
                    component: Jt,
                  }),
                  Object(u.jsx)(o.a, {
                    exact: !0,
                    path: '/designer/:id',
                    component: Jt,
                  }),
                  Object(u.jsx)(o.a, { path: '*', component: na }),
                ],
              }),
            }),
          }),
        });
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(
        Object(u.jsx)(r.a.StrictMode, { children: Object(u.jsx)(sa, {}) }),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[350, 1, 2]],
]);
//# sourceMappingURL=main.94aadd93.chunk.js.map
