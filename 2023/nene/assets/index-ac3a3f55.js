var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { R as React, r as reactExports, a as reactDomExports, j as jsxRuntimeExports, u as useTranslation, b as useStore, m as motion, A as AnimatePresence, L as Logo, M as MessagesLogo, c as ArtLogo, C as CakeLogo, $ as $activeSection, d as randomChoice, _ as __webpack_exports__Actor, e as __webpack_exports__Color, f as __webpack_exports__CollisionType, g as __webpack_exports__Shape, n as neneSprite, h as __webpack_exports__Side, i as __webpack_exports__Keys, k as $parallaxX, l as $floor, o as $section, p as _t, q as $gameInit, s as $game, t as __webpack_exports__vec, v as __webpack_exports__EasingFunctions, w as $nene, x as __webpack_exports__Engine, y as __webpack_exports__DisplayMode, z as __webpack_exports__Physics, B as __webpack_exports__Vector, D as __webpack_exports__Axis, E as __webpack_exports__BoundingBox, F as updateCollisionActors } from "./index-3d73e81d.js";
const styles = "";
const Beam = "/2023/nene/assets/beam-d73d7cbe.png";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
function IoLanguage(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zm-66.99-19.08a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z" } }] })(props);
}
function IoLocationOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" } }, { "tag": "circle", "attr": { "cx": "256", "cy": "192", "r": "48", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32" } }] })(props);
}
function IoLogoTwitter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" } }] })(props);
}
function IoResize(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304" } }] })(props);
}
function ICompress() {
  return React.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": true, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function IEnlarge() {
  return React.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": true, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const testElType = (type, el) => {
  var _a, _b;
  return type === ((_b = (_a = el == null ? void 0 : el.tagName) == null ? void 0 : _a.toUpperCase) == null ? void 0 : _b.call(_a));
};
const testDiv = (el) => testElType("DIV", el) || testElType("SPAN", el);
const testImg = (el) => testElType("IMG", el);
const testImgLoaded = (el) => el.complete && el.naturalHeight !== 0;
const testSvg = (el) => testElType("SVG", el);
const getScaleToWindow = ({ height, offset, width }) => {
  return Math.min((window.innerWidth - offset * 2) / width, (window.innerHeight - offset * 2) / height);
};
const getScaleToWindowMax = ({ containerHeight, containerWidth, offset, targetHeight, targetWidth }) => {
  const scale = getScaleToWindow({
    height: targetHeight,
    offset,
    width: targetWidth
  });
  const ratio = targetWidth > targetHeight ? targetWidth / containerWidth : targetHeight / containerHeight;
  return scale > 1 ? ratio : scale * ratio;
};
const getScale = ({ containerHeight, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  if (!containerHeight || !containerWidth) {
    return 1;
  }
  return !hasScalableSrc && targetHeight && targetWidth ? getScaleToWindowMax({
    containerHeight,
    containerWidth,
    offset,
    targetHeight,
    targetWidth
  }) : getScaleToWindow({
    height: containerHeight,
    offset,
    width: containerWidth
  });
};
const URL_REGEX = /url(?:\(['"]?)(.*?)(?:['"]?\))/;
const getImgSrc = (imgEl) => {
  var _a;
  if (imgEl) {
    if (testImg(imgEl)) {
      return imgEl.currentSrc;
    } else if (testDiv(imgEl)) {
      const bgImg = window.getComputedStyle(imgEl).backgroundImage;
      if (bgImg) {
        return (_a = URL_REGEX.exec(bgImg)) == null ? void 0 : _a[1];
      }
    }
  }
};
const getImgAlt = (imgEl) => {
  if (imgEl) {
    if (testImg(imgEl)) {
      return imgEl.alt ?? void 0;
    } else {
      return imgEl.getAttribute("aria-label") ?? void 0;
    }
  }
};
const getImgRegularStyle = ({ containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  const scale = getScale({
    containerHeight,
    containerWidth,
    hasScalableSrc,
    offset,
    targetHeight,
    targetWidth
  });
  return {
    top: containerTop,
    left: containerLeft,
    width: containerWidth * scale,
    height: containerHeight * scale,
    transform: `translate(0,0) scale(${1 / scale})`
  };
};
const parsePosition = ({ position, relativeNum }) => {
  const positionNum = parseFloat(position);
  return position.endsWith("%") ? relativeNum * positionNum / 100 : positionNum;
};
const getImgObjectFitStyle = ({ containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, objectFit, objectPosition, offset, targetHeight, targetWidth }) => {
  if (objectFit === "scale-down") {
    if (targetWidth <= containerWidth && targetHeight <= containerHeight) {
      objectFit = "none";
    } else {
      objectFit = "contain";
    }
  }
  if (objectFit === "cover" || objectFit === "contain") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = objectFit === "cover" ? Math.max(widthRatio, heightRatio) : Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = objectPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (objectFit === "none") {
    const [posLeft = "50%", posTop = "50%"] = objectPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight });
    const scale = getScale({
      containerHeight: targetHeight,
      containerWidth: targetWidth,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * scale,
      height: targetHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (objectFit === "fill") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = Math.max(widthRatio, heightRatio);
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      width: containerWidth * scale,
      height: containerHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else {
    return {};
  }
};
const getDivImgStyle = ({ backgroundPosition, backgroundSize, containerHeight, containerLeft, containerTop, containerWidth, hasScalableSrc, offset, targetHeight, targetWidth }) => {
  if (backgroundSize === "cover" || backgroundSize === "contain") {
    const widthRatio = containerWidth / targetWidth;
    const heightRatio = containerHeight / targetHeight;
    const ratio = backgroundSize === "cover" ? Math.max(widthRatio, heightRatio) : Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else if (backgroundSize === "auto") {
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight });
    const scale = getScale({
      containerHeight: targetHeight,
      containerWidth: targetWidth,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * scale,
      height: targetHeight * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  } else {
    const [sizeW = "50%", sizeH = "50%"] = backgroundSize.split(" ");
    const sizeWidth = parsePosition({ position: sizeW, relativeNum: containerWidth });
    const sizeHeight = parsePosition({ position: sizeH, relativeNum: containerHeight });
    const widthRatio = sizeWidth / targetWidth;
    const heightRatio = sizeHeight / targetHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    const [posLeft = "50%", posTop = "50%"] = backgroundPosition.split(" ");
    const posX = parsePosition({ position: posLeft, relativeNum: containerWidth - targetWidth * ratio });
    const posY = parsePosition({ position: posTop, relativeNum: containerHeight - targetHeight * ratio });
    const scale = getScale({
      containerHeight: targetHeight * ratio,
      containerWidth: targetWidth * ratio,
      hasScalableSrc,
      offset,
      targetHeight,
      targetWidth
    });
    return {
      top: containerTop + posY,
      left: containerLeft + posX,
      width: targetWidth * ratio * scale,
      height: targetHeight * ratio * scale,
      transform: `translate(0,0) scale(${1 / scale})`
    };
  }
};
const SRC_SVG_REGEX = /\.svg$/i;
const getStyleModalImg = ({ hasZoomImg, imgSrc, isSvg, isZoomed, loadedImgEl, offset, shouldRefresh, targetEl }) => {
  var _a;
  const hasScalableSrc = isSvg || ((_a = imgSrc == null ? void 0 : imgSrc.slice) == null ? void 0 : _a.call(imgSrc, 0, 18)) === "data:image/svg+xml" || hasZoomImg || !!(imgSrc && SRC_SVG_REGEX.test(imgSrc));
  const imgRect = targetEl.getBoundingClientRect();
  const targetElComputedStyle = window.getComputedStyle(targetEl);
  const isDivImg = loadedImgEl != null && testDiv(targetEl);
  const isImgObjectFit = loadedImgEl != null && !isDivImg;
  const styleImgRegular = getImgRegularStyle({
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    offset,
    targetHeight: (loadedImgEl == null ? void 0 : loadedImgEl.naturalHeight) ?? imgRect.height,
    targetWidth: (loadedImgEl == null ? void 0 : loadedImgEl.naturalWidth) ?? imgRect.width
  });
  const styleImgObjectFit = isImgObjectFit ? getImgObjectFitStyle({
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    objectFit: targetElComputedStyle.objectFit,
    objectPosition: targetElComputedStyle.objectPosition,
    offset,
    targetHeight: loadedImgEl.naturalHeight,
    targetWidth: loadedImgEl.naturalWidth
  }) : void 0;
  const styleDivImg = isDivImg ? getDivImgStyle({
    backgroundPosition: targetElComputedStyle.backgroundPosition,
    backgroundSize: targetElComputedStyle.backgroundSize,
    containerHeight: imgRect.height,
    containerLeft: imgRect.left,
    containerTop: imgRect.top,
    containerWidth: imgRect.width,
    hasScalableSrc,
    offset,
    targetHeight: loadedImgEl.naturalHeight,
    targetWidth: loadedImgEl.naturalWidth
  }) : void 0;
  const style = Object.assign({}, styleImgRegular, styleImgObjectFit, styleDivImg);
  if (isZoomed) {
    const viewportX = window.innerWidth / 2;
    const viewportY = window.innerHeight / 2;
    const childCenterX = parseFloat(String(style.left || 0)) + parseFloat(String(style.width || 0)) / 2;
    const childCenterY = parseFloat(String(style.top || 0)) + parseFloat(String(style.height || 0)) / 2;
    const translateX = viewportX - childCenterX;
    const translateY = viewportY - childCenterY;
    if (shouldRefresh) {
      style.transitionDuration = "0.01ms";
    }
    style.transform = `translate(${translateX}px,${translateY}px) scale(1)`;
  }
  return style;
};
const getStyleGhost = (imgEl) => {
  if (!imgEl) {
    return {};
  }
  if (testSvg(imgEl)) {
    const parentEl = imgEl.parentElement;
    const rect = imgEl.getBoundingClientRect();
    if (parentEl) {
      const parentRect = parentEl.getBoundingClientRect();
      return {
        height: rect.height,
        left: parentRect.left - rect.left,
        top: parentRect.top - rect.top,
        width: rect.width
      };
    } else {
      return {
        height: rect.height,
        left: rect.left,
        width: rect.width,
        top: rect.top
      };
    }
  } else {
    return {
      height: imgEl.offsetHeight,
      left: imgEl.offsetLeft,
      width: imgEl.offsetWidth,
      top: imgEl.offsetTop
    };
  }
};
let elDialogContainer;
if (typeof document !== "undefined") {
  elDialogContainer = document.createElement("div");
  elDialogContainer.setAttribute("data-rmiz-portal", "");
  document.body.appendChild(elDialogContainer);
}
const IMAGE_QUERY = ["img", "svg", '[role="img"]', "[data-zoom]"].map((x) => `${x}:not([aria-hidden="true"])`).join(",");
const defaultBodyAttrs = {
  overflow: "",
  width: ""
};
function Controlled(props) {
  return React.createElement(ControlledBase, { ...props });
}
class ControlledBase extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = {
      id: "",
      isZoomImgLoaded: false,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: false
    };
    this.refContent = reactExports.createRef();
    this.refDialog = reactExports.createRef();
    this.refModalContent = reactExports.createRef();
    this.refModalImg = reactExports.createRef();
    this.refWrap = reactExports.createRef();
    this.imgEl = null;
    this.prevBodyAttrs = defaultBodyAttrs;
    this.styleModalImg = {};
    this.setId = () => {
      const gen4 = () => Math.random().toString(16).slice(-4);
      this.setState({ id: gen4() + gen4() + gen4() });
    };
    this.setAndTrackImg = () => {
      var _a, _b, _c, _d, _e, _f;
      const contentEl = this.refContent.current;
      if (!contentEl)
        return;
      this.imgEl = contentEl.querySelector(IMAGE_QUERY);
      if (this.imgEl) {
        (_b = (_a = this.changeObserver) == null ? void 0 : _a.disconnect) == null ? void 0 : _b.call(_a);
        (_d = (_c = this.imgEl) == null ? void 0 : _c.addEventListener) == null ? void 0 : _d.call(_c, "load", this.handleImgLoad);
        (_f = (_e = this.imgEl) == null ? void 0 : _e.addEventListener) == null ? void 0 : _f.call(_e, "click", this.handleZoom);
        if (!this.state.loadedImgEl) {
          this.handleImgLoad();
        }
        this.imgElObserver = new ResizeObserver((entries) => {
          const entry = entries[0];
          if (entry == null ? void 0 : entry.target) {
            this.imgEl = entry.target;
            this.setState({});
          }
        });
        this.imgElObserver.observe(this.imgEl);
      } else if (!this.changeObserver) {
        this.changeObserver = new MutationObserver(this.setAndTrackImg);
        this.changeObserver.observe(contentEl, { childList: true, subtree: true });
      }
    };
    this.handleIfZoomChanged = (prevIsZoomed) => {
      const { isZoomed } = this.props;
      if (!prevIsZoomed && isZoomed) {
        this.zoom();
      } else if (prevIsZoomed && !isZoomed) {
        this.unzoom();
      }
    };
    this.handleImgLoad = () => {
      const { imgEl } = this;
      const imgSrc = getImgSrc(imgEl);
      if (!imgSrc)
        return;
      const img = new Image();
      if (testImg(imgEl)) {
        img.sizes = imgEl.sizes;
        img.srcset = imgEl.srcset;
      }
      img.src = imgSrc;
      const setLoaded = () => {
        this.setState({ loadedImgEl: img });
      };
      img.decode().then(setLoaded).catch(() => {
        if (testImgLoaded(img)) {
          setLoaded();
          return;
        }
        img.onload = setLoaded;
      });
    };
    this.handleZoom = () => {
      var _a, _b;
      (_b = (_a = this.props).onZoomChange) == null ? void 0 : _b.call(_a, true);
    };
    this.handleUnzoom = () => {
      var _a, _b;
      (_b = (_a = this.props).onZoomChange) == null ? void 0 : _b.call(_a, false);
    };
    this.handleDialogCancel = (e) => {
      e.preventDefault();
    };
    this.handleDialogClick = (e) => {
      if (e.target === this.refModalContent.current || e.target === this.refModalImg.current) {
        this.handleUnzoom();
      }
    };
    this.handleKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.handleUnzoom();
      }
    };
    this.handleWheel = (e) => {
      if (e.ctrlKey)
        return;
      e.stopPropagation();
      queueMicrotask(() => {
        this.handleUnzoom();
      });
    };
    this.handleTouchStart = (e) => {
      if (e.changedTouches.length === 1 && e.changedTouches[0]) {
        this.touchYStart = e.changedTouches[0].screenY;
      }
    };
    this.handleTouchMove = (e) => {
      if (this.touchYStart != null && e.changedTouches[0]) {
        this.touchYEnd = e.changedTouches[0].screenY;
        const max = Math.max(this.touchYStart, this.touchYEnd);
        const min = Math.min(this.touchYStart, this.touchYEnd);
        const delta = Math.abs(max - min);
        const threshold = 10;
        if (delta > threshold) {
          this.touchYStart = void 0;
          this.touchYEnd = void 0;
          this.handleUnzoom();
        }
      }
    };
    this.handleTouchCancel = () => {
      this.touchYStart = void 0;
      this.touchYEnd = void 0;
    };
    this.handleResize = () => {
      this.setState({ shouldRefresh: true });
    };
    this.zoom = () => {
      var _a, _b, _c, _d;
      this.bodyScrollDisable();
      (_b = (_a = this.refDialog.current) == null ? void 0 : _a.showModal) == null ? void 0 : _b.call(_a);
      this.setState({ modalState: "LOADING" });
      this.loadZoomImg();
      window.addEventListener("wheel", this.handleWheel, { passive: true });
      window.addEventListener("touchstart", this.handleTouchStart, { passive: true });
      window.addEventListener("touchmove", this.handleTouchMove, { passive: true });
      window.addEventListener("touchcancel", this.handleTouchCancel, { passive: true });
      document.addEventListener("keydown", this.handleKeyDown, true);
      (_d = (_c = this.refModalImg.current) == null ? void 0 : _c.addEventListener) == null ? void 0 : _d.call(_c, "transitionend", this.handleZoomEnd, { once: true });
    };
    this.handleZoomEnd = () => {
      setTimeout(() => {
        this.setState({ modalState: "LOADED" });
        window.addEventListener("resize", this.handleResize, { passive: true });
      }, 0);
    };
    this.unzoom = () => {
      var _a, _b;
      this.setState({ modalState: "UNLOADING" });
      window.removeEventListener("wheel", this.handleWheel);
      window.removeEventListener("touchstart", this.handleTouchStart);
      window.removeEventListener("touchmove", this.handleTouchMove);
      window.removeEventListener("touchcancel", this.handleTouchCancel);
      document.removeEventListener("keydown", this.handleKeyDown, true);
      (_b = (_a = this.refModalImg.current) == null ? void 0 : _a.addEventListener) == null ? void 0 : _b.call(_a, "transitionend", this.handleUnzoomEnd, { once: true });
    };
    this.handleUnzoomEnd = () => {
      setTimeout(() => {
        var _a, _b;
        window.removeEventListener("resize", this.handleResize);
        this.setState({
          shouldRefresh: false,
          modalState: "UNLOADED"
        });
        (_b = (_a = this.refDialog.current) == null ? void 0 : _a.close) == null ? void 0 : _b.call(_a);
        this.bodyScrollEnable();
      }, 0);
    };
    this.bodyScrollDisable = () => {
      this.prevBodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width
      };
      const clientWidth = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `${clientWidth}px`;
    };
    this.bodyScrollEnable = () => {
      document.body.style.width = this.prevBodyAttrs.width;
      document.body.style.overflow = this.prevBodyAttrs.overflow;
      this.prevBodyAttrs = defaultBodyAttrs;
    };
    this.loadZoomImg = () => {
      const { props: { zoomImg } } = this;
      const zoomImgSrc = zoomImg == null ? void 0 : zoomImg.src;
      if (zoomImgSrc) {
        const img = new Image();
        img.sizes = (zoomImg == null ? void 0 : zoomImg.sizes) ?? "";
        img.srcset = (zoomImg == null ? void 0 : zoomImg.srcSet) ?? "";
        img.src = zoomImgSrc;
        const setLoaded = () => {
          this.setState({ isZoomImgLoaded: true });
        };
        img.decode().then(setLoaded).catch(() => {
          if (testImgLoaded(img)) {
            setLoaded();
            return;
          }
          img.onload = setLoaded;
        });
      }
    };
    this.UNSAFE_handleSvg = () => {
      var _a, _b, _c, _d, _e;
      const { imgEl, refModalImg, styleModalImg } = this;
      if (testSvg(imgEl)) {
        const tmp = document.createElement("div");
        tmp.innerHTML = imgEl.outerHTML;
        const svg = tmp.firstChild;
        svg.style.width = `${styleModalImg.width || 0}px`;
        svg.style.height = `${styleModalImg.height || 0}px`;
        svg.addEventListener("click", this.handleUnzoom);
        (_c = (_b = (_a = refModalImg.current) == null ? void 0 : _a.firstChild) == null ? void 0 : _b.remove) == null ? void 0 : _c.call(_b);
        (_e = (_d = refModalImg.current) == null ? void 0 : _d.appendChild) == null ? void 0 : _e.call(_d, svg);
      }
    };
  }
  render() {
    const { handleDialogCancel, handleDialogClick, handleUnzoom, handleZoom, imgEl, props: { a11yNameButtonUnzoom, a11yNameButtonZoom, children, classDialog, IconUnzoom, IconZoom, isZoomed, wrapElement: WrapElement, ZoomContent, zoomImg, zoomMargin }, refContent, refDialog, refModalContent, refModalImg, refWrap, state: { id, isZoomImgLoaded, loadedImgEl, modalState, shouldRefresh } } = this;
    const idModal = `rmiz-modal-${id}`;
    const idModalImg = `rmiz-modal-img-${id}`;
    const isDiv = testDiv(imgEl);
    const isImg = testImg(imgEl);
    const isSvg = testSvg(imgEl);
    const imgAlt = getImgAlt(imgEl);
    const imgSrc = getImgSrc(imgEl);
    const imgSizes = isImg ? imgEl.sizes : void 0;
    const imgSrcSet = isImg ? imgEl.srcset : void 0;
    const hasZoomImg = !!(zoomImg == null ? void 0 : zoomImg.src);
    const hasImage = imgEl && (loadedImgEl || isSvg) && window.getComputedStyle(imgEl).display !== "none";
    const labelBtnZoom = imgAlt ? `${a11yNameButtonZoom}: ${imgAlt}` : a11yNameButtonZoom;
    const isModalActive = modalState === "LOADING" || modalState === "LOADED";
    const dataContentState = hasImage ? "found" : "not-found";
    const dataOverlayState = modalState === "UNLOADED" || modalState === "UNLOADING" ? "hidden" : "visible";
    const styleContent = {
      visibility: modalState === "UNLOADED" ? "visible" : "hidden"
    };
    const styleGhost = getStyleGhost(imgEl);
    this.styleModalImg = hasImage ? getStyleModalImg({
      hasZoomImg,
      imgSrc,
      isSvg,
      isZoomed: isZoomed && isModalActive,
      loadedImgEl,
      offset: zoomMargin,
      shouldRefresh,
      targetEl: imgEl
    }) : {};
    let modalContent = null;
    if (hasImage) {
      const modalImg = isImg || isDiv ? React.createElement("img", { alt: imgAlt, sizes: imgSizes, src: imgSrc, srcSet: imgSrcSet, ...isZoomImgLoaded && modalState === "LOADED" ? zoomImg : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: idModalImg, ref: refModalImg, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : isSvg ? React.createElement("div", { "data-rmiz-modal-img": true, ref: refModalImg, style: this.styleModalImg }) : null;
      const modalBtnUnzoom = React.createElement(
        "button",
        { "aria-label": a11yNameButtonUnzoom, "data-rmiz-btn-unzoom": "", onClick: handleUnzoom, type: "button" },
        React.createElement(IconUnzoom, null)
      );
      modalContent = ZoomContent ? React.createElement(ZoomContent, { buttonUnzoom: modalBtnUnzoom, modalState, img: modalImg, onUnzoom: handleUnzoom }) : React.createElement(
        React.Fragment,
        null,
        modalImg,
        modalBtnUnzoom
      );
    }
    return React.createElement(
      WrapElement,
      { "aria-owns": idModal, "data-rmiz": "", ref: refWrap },
      React.createElement(WrapElement, { "data-rmiz-content": dataContentState, ref: refContent, style: styleContent }, children),
      hasImage && React.createElement(
        WrapElement,
        { "data-rmiz-ghost": "", style: styleGhost },
        React.createElement(
          "button",
          { "aria-label": labelBtnZoom, "data-rmiz-btn-zoom": "", onClick: handleZoom, type: "button" },
          React.createElement(IconZoom, null)
        )
      ),
      hasImage && elDialogContainer != null && reactDomExports.createPortal(React.createElement(
        "dialog",
        { "aria-labelledby": idModalImg, "aria-modal": "true", className: classDialog, "data-rmiz-modal": "", id: idModal, onClick: handleDialogClick, onClose: handleUnzoom, onCancel: handleDialogCancel, ref: refDialog, role: "dialog" },
        React.createElement("div", { "data-rmiz-modal-overlay": dataOverlayState }),
        React.createElement("div", { "data-rmiz-modal-content": "", ref: refModalContent }, modalContent)
      ), elDialogContainer)
    );
  }
  componentDidMount() {
    this.setId();
    this.setAndTrackImg();
    this.handleImgLoad();
    this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (this.state.modalState !== "UNLOADED") {
      this.bodyScrollEnable();
    }
    (_b = (_a = this.changeObserver) == null ? void 0 : _a.disconnect) == null ? void 0 : _b.call(_a);
    (_d = (_c = this.imgElObserver) == null ? void 0 : _c.disconnect) == null ? void 0 : _d.call(_c);
    (_f = (_e = this.imgEl) == null ? void 0 : _e.removeEventListener) == null ? void 0 : _f.call(_e, "load", this.handleImgLoad);
    (_h = (_g = this.imgEl) == null ? void 0 : _g.removeEventListener) == null ? void 0 : _h.call(_g, "click", this.handleZoom);
    (_j = (_i = this.refModalImg.current) == null ? void 0 : _i.removeEventListener) == null ? void 0 : _j.call(_i, "transitionend", this.handleZoomEnd);
    (_l = (_k = this.refModalImg.current) == null ? void 0 : _k.removeEventListener) == null ? void 0 : _l.call(_k, "transitionend", this.handleUnzoomEnd);
    window.removeEventListener("wheel", this.handleWheel);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchcancel", this.handleTouchCancel);
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.handleKeyDown, true);
  }
  componentDidUpdate(prevProps) {
    this.UNSAFE_handleSvg();
    this.handleIfZoomChanged(prevProps.isZoomed);
  }
}
ControlledBase.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: ICompress,
  IconZoom: IEnlarge,
  wrapElement: "div",
  zoomMargin: 0
};
function Uncontrolled(props) {
  const [isZoomed, setIsZoomed] = reactExports.useState(false);
  return React.createElement(Controlled, { ...props, isZoomed, onZoomChange: setIsZoomed });
}
const __vite_glob_0_0 = "/2023/nene/assets/0WVQsmj1-bd85c606.jpg";
const __vite_glob_0_1 = "/2023/nene/assets/0ZoGPI1o-b9855ee5.jpg";
const __vite_glob_0_2 = "/2023/nene/assets/2N3UQoPp-945c8def.jpg";
const __vite_glob_0_3 = "/2023/nene/assets/Aja-lQlf-466fabbb.jpg";
const __vite_glob_0_4 = "/2023/nene/assets/BTJs3KrQ-8deee88b.jpg";
const __vite_glob_0_5 = "/2023/nene/assets/GP-UVhTr-9bade65a.jpg";
const __vite_glob_0_6 = "/2023/nene/assets/HJWAzpph-fd8c2723.jpg";
const __vite_glob_0_7 = "/2023/nene/assets/OFWgsupp-f6e6e1ad.jpg";
const __vite_glob_0_8 = "/2023/nene/assets/UL8JWzOi-0f4a2709.jpg";
const __vite_glob_0_9 = "/2023/nene/assets/UWT4Y_cQ-87f38d91.jpg";
const __vite_glob_0_10 = "/2023/nene/assets/VDd9__va-5a665ae1.jpg";
const __vite_glob_0_11 = "/2023/nene/assets/VE9p-zl--51b89a9b.jpg";
const __vite_glob_0_12 = "/2023/nene/assets/VLhtbYRi-a933fb69.jpg";
const __vite_glob_0_13 = "/2023/nene/assets/Vadg1Gf9-c671975b.jpg";
const __vite_glob_0_14 = "/2023/nene/assets/Vjm0bdGL-909bf684.jpg";
const __vite_glob_0_15 = "/2023/nene/assets/a8Sk9hUC-cd197ce9.jpg";
const __vite_glob_0_16 = "/2023/nene/assets/JQyBevpD-dcb66946.jpg";
const __vite_glob_0_17 = "/2023/nene/assets/bLj66N_j-03e09a25.jpg";
const __vite_glob_0_18 = "/2023/nene/assets/dat8hbWx-c211c2c6.jpg";
const __vite_glob_0_19 = "/2023/nene/assets/e1GvREsq-a7a35d1e.jpg";
const __vite_glob_0_20 = "/2023/nene/assets/fD8UWYJf-67dbe391.jpg";
const __vite_glob_0_21 = "/2023/nene/assets/fgGaWGxO-60947f60.jpg";
const __vite_glob_0_22 = "/2023/nene/assets/hEAdEIpu-30379d46.jpg";
const __vite_glob_0_23 = "/2023/nene/assets/joxOhcA--c80dbf26.jpg";
const __vite_glob_0_24 = "/2023/nene/assets/nSqF8Apk-a786fbb9.jpg";
const __vite_glob_0_25 = "/2023/nene/assets/nbiGzlzM-d43c8852.jpg";
const __vite_glob_0_26 = "/2023/nene/assets/qERWh7L7-da228b91.jpg";
const __vite_glob_0_27 = "/2023/nene/assets/rwXiuqTP-1b7415da.jpg";
const __vite_glob_0_28 = "/2023/nene/assets/s85i9FpV-d781c72d.jpg";
const __vite_glob_0_29 = "/2023/nene/assets/xiTEfHoG-e7848265.jpg";
const __vite_glob_0_30 = "/2023/nene/assets/-lyPXk_J-ba076220.jpg";
const __vite_glob_0_31 = "/2023/nene/assets/19oHdsH4-37c78a70.jpg";
const __vite_glob_0_32 = "/2023/nene/assets/2oqqIEer-fa37fc23.jpg";
const __vite_glob_0_33 = "/2023/nene/assets/3r-yeIsq-25f1a915.jpg";
const __vite_glob_0_34 = "/2023/nene/assets/4yb-J2eD-0f2aa7b6.jpg";
const __vite_glob_0_35 = "/2023/nene/assets/6sIOAeJ--c6c33637.jpg";
const __vite_glob_0_36 = "/2023/nene/assets/9DJFN9qH-3b417b72.jpg";
const __vite_glob_0_37 = "/2023/nene/assets/AG7R5QhO-f285129c.jpg";
const __vite_glob_0_38 = "/2023/nene/assets/BIbK6ToQ-ca7c6db7.jpg";
const __vite_glob_0_39 = "/2023/nene/assets/CujFWEtf-c9d28bb3.jpg";
const __vite_glob_0_40 = "/2023/nene/assets/HpymxSji-fda6c22a.jpg";
const __vite_glob_0_41 = "/2023/nene/assets/JQyBevpD-dcb66946.jpg";
const __vite_glob_0_42 = "/2023/nene/assets/JWFxeBcJ-1e208fa0.jpg";
const __vite_glob_0_43 = "/2023/nene/assets/Ks--9q2H-6fe3127e.jpg";
const __vite_glob_0_44 = "/2023/nene/assets/L9FMcSKX-8fe3a155.jpg";
const __vite_glob_0_45 = "/2023/nene/assets/LwK8zMLL-4b6bf7c6.jpg";
const __vite_glob_0_46 = "/2023/nene/assets/NvrxYoH5-4f14b2c3.jpg";
const __vite_glob_0_47 = "/2023/nene/assets/Quevz_kE-ebc3845e.jpg";
const __vite_glob_0_48 = "/2023/nene/assets/Vf7ndDtv-8aea30dc.jpg";
const __vite_glob_0_49 = "/2023/nene/assets/XcxvMt88-28409799.jpg";
const __vite_glob_0_50 = "/2023/nene/assets/Y0ltGiB_-e619fcc3.jpg";
const __vite_glob_0_51 = "/2023/nene/assets/_FVcQesr-846a27d7.jpg";
const __vite_glob_0_52 = "/2023/nene/assets/_s8erMC3-28da79b8.jpg";
const __vite_glob_0_53 = "/2023/nene/assets/aNIlJ0OI-f4c9dee8.jpg";
const __vite_glob_0_54 = "/2023/nene/assets/dGhyfj_U-d97cf7bf.jpg";
const __vite_glob_0_55 = "/2023/nene/assets/dx-gZPr--39844d07.jpg";
const __vite_glob_0_56 = "/2023/nene/assets/iTMd1LxR-f6cc25b0.jpg";
const __vite_glob_0_57 = "/2023/nene/assets/jCZvFP7d-25059171.jpg";
const __vite_glob_0_58 = "/2023/nene/assets/jCs9LCNT-251bbd48.jpg";
const __vite_glob_0_59 = "/2023/nene/assets/my7dDUOT-95dde623.jpg";
const __vite_glob_0_60 = "/2023/nene/assets/qe64dB3C-8790aea4.jpg";
const __vite_glob_0_61 = "/2023/nene/assets/uKvgy2CB-b83c1cdb.jpg";
const __vite_glob_0_62 = "/2023/nene/assets/uk97VlSV-acdba972.jpg";
const __vite_glob_0_63 = "/2023/nene/assets/v6zHZL4I-2bdd2a53.jpg";
const __vite_glob_0_64 = "/2023/nene/assets/xOB-Yti5-e6b72295.jpg";
const __vite_glob_0_65 = "/2023/nene/assets/zGfk4SEC-9efbd336.jpg";
const __vite_glob_0_66 = "/2023/nene/assets/zTN28ye9-aede0a11.jpg";
const __vite_glob_0_67 = "/2023/nene/assets/zo-ZuT_A-1b5ee7d6.jpg";
const __vite_glob_0_68 = "data:image/jpeg;base64,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";
const __vite_glob_0_69 = "/2023/nene/assets/-j7lQ2Zm-52880b25.jpg";
const __vite_glob_0_70 = "/2023/nene/assets/0za__BgI-750e7403.jpg";
const __vite_glob_0_71 = "data:image/jpeg;base64,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";
const __vite_glob_0_72 = "/2023/nene/assets/1q79yacL-4ac01031.jpg";
const __vite_glob_0_73 = "/2023/nene/assets/1t45ebgQ-8d2d35f5.jpg";
const __vite_glob_0_74 = "/2023/nene/assets/3uQmHyWT-80189500.jpg";
const __vite_glob_0_75 = "/2023/nene/assets/4Fxp7WiS-7c8e1f27.jpg";
const __vite_glob_0_76 = "/2023/nene/assets/5UYwjAJN-dbe5a444.jpg";
const __vite_glob_0_77 = "/2023/nene/assets/5VwrP7UW-01249234.jpg";
const __vite_glob_0_78 = "/2023/nene/assets/6F_zUc40-98c4e714.jpg";
const __vite_glob_0_79 = "/2023/nene/assets/71ghyviq-76e7ca4a.jpg";
const __vite_glob_0_80 = "/2023/nene/assets/7f3iDZzE-efe4646d.jpg";
const __vite_glob_0_81 = "/2023/nene/assets/7wPPDi0n-6f4da90e.jpg";
const __vite_glob_0_82 = "/2023/nene/assets/82JR544f-a7cdf6e9.jpg";
const __vite_glob_0_83 = "/2023/nene/assets/9kxT32U7-9225c09a.jpg";
const __vite_glob_0_84 = "/2023/nene/assets/A-zIuew8-b50fd8e5.jpg";
const __vite_glob_0_85 = "data:image/jpeg;base64,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";
const __vite_glob_0_86 = "/2023/nene/assets/B5RWErZF-f016f94a.jpg";
const __vite_glob_0_87 = "/2023/nene/assets/Cyl39Qlw-6a02b1c1.jpg";
const __vite_glob_0_88 = "/2023/nene/assets/DEVCb0-k-e88b463a.jpg";
const __vite_glob_0_89 = "/2023/nene/assets/EZkmLoLw-0efdbf98.jpg";
const __vite_glob_0_90 = "/2023/nene/assets/F5gUcNFx-a226b266.jpg";
const __vite_glob_0_91 = "/2023/nene/assets/FTYnIwxg-500214d5.jpg";
const __vite_glob_0_92 = "/2023/nene/assets/HUDlUNH9-775f97ea.jpg";
const __vite_glob_0_93 = "/2023/nene/assets/KIArwdUd-43c4b6d2.jpg";
const __vite_glob_0_94 = "/2023/nene/assets/Kp5uzhGA-c9a0b4ac.jpg";
const __vite_glob_0_95 = "/2023/nene/assets/L7P75lC1-95289ae3.jpg";
const __vite_glob_0_96 = "/2023/nene/assets/Na2M6eGi-85eb70e5.jpg";
const __vite_glob_0_97 = "/2023/nene/assets/NjJO_Koi-d32317b7.jpg";
const __vite_glob_0_98 = "/2023/nene/assets/OkbMDX_C-bde7f695.jpg";
const __vite_glob_0_99 = "data:image/jpeg;base64,/9j/2wBDAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX3/2wBDAQUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX3/wgARCADwAPADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAIQMMadviE1S1FXlsC97wbQKGmgigVLhzY8i1KAOumEbOo7j3g8u7F4A0jmT3upt4qHo6KiZSnJu59srGLIMl+LHzViAJGYwVFLvlGaPlDfCY22broq7wac2PoRSq8ticmU07vVs5dMcvoc+o6CtWM3GlHpsGqxeREooLMwNXtNYimD6/KrOxGa6XDWkk6kPQ1Pis0bbaYujZyqJ2y1eMC7VMJTITyjDMzy9hngxWAHgiWRVXz3x19hoGwUwjCjyzieHd2nscPvHApktipobVG+bJMglS6vMjNAj2KwMkGPJbAvKCLHc1kdRMWJTzRm0WwPb03p8exE2c22OqGNMcAQtWpMEV5PFWUeCIzVbFOznThIQCH0exVsiZ+vHpy/CWtDTI+lXc/qZV3RV2MQyWJZjmgxDwfg0LBI9g+GEvZLfSnTF76XKJjLpw8nJdO/WlsQ+h6PNvToUwUQ5OiSRXRwBbp5TEwWh6PEs9M9oQ4lmedOY33hRQ7JQGvLs64ekk3T5HZsNnijBLAI65heaUJBwQrR2PNS2t97wJr0LQwcgpRknllaboNU+ryOwcvvfPd+ynB8m570DNRLNYzx2JVTPkkj9EtUtNaokjVGun55kKmplJPF47XI63K0zo8u9Yu98/wBxLPBoQ+E8hiIcQFXlnkAtyyKiZ0uzPUg4A1RVzmxXGSQnzdPbOX0OdKvpcy8i7XD60dDQ2iz2AociGGokLBAYryyehNIHmKEoeIoKEGr9tFbF4v5j5pQshaD0+N0I7OpKmeXgU5IHsmYGArg14pGUw1BpNCivQpgs1J6ZjMchtSCGc9GOeAaJlTIyWzJvU3AymEjw7FYMEPSMbP5K1o2DJXrKwT4crWUAuRogRHOzJRhGllOYkxxKMIPAbm+MwgMz2J72ZLuexNHwmjmZFqxkoyb0f//EACsQAAICAgECBQMFAQEAAAAAAAABAhEDIRIQMQQiQVFxEzJhICMzQoFyFP/aAAgBAQABPwBdhC2iW4SIvb+DC9sUuxuUuiI3/o5GNpplteopNslPVWKXYWQ+rerFLzr5MuZNKK7Ijk0Tmmo/gwY4zxyb9TKlHX5PFRk9v0VCXcmY07SMeJu2JOmIxpMmqhIx05UQ0i6RHS6LuR+4mqohKhyFInI5HI5VsjOpWPIfUs+o+xizOGItyn37s8Tik1/hPG4t6FhlkkiHhvpyimTqMIo9yzCm7JJ1JMx6yRbIbid3VDfWG2ia8qYkqY2ixsUh7JMg7kS1YtkcdmHFyil6ti8Moy7GXBj4q0ZfDLkxqGKmcuU7oySpSd6SEf2l8nhIqUcir2MuLUfhl7/0T8qQtIbtiehSMNyehtONEnSJNnPZei9lk3ohLzEmKlRCXY8IlzTbJu5KuxnyNKKvRlnvXdmfGuX4UdmJ8pSdmeDUIqu62TSjJpfKH3Z4CVTlfsZ5rlrsi/Pf5PD+ejikn09CtxMbUeRzonJFpiexPq3ZHbZd1RFXRdSR4WdVZaSR4ub8qRNpRTPEzbhN+54Zb4+5nxqt+qo52kXs8LKpOvYnLuP7pHhZbFk0yzGnJqyapq/clPdWKWybL6J9xMbG2Q+2Rq0QapWOm7MeTa2RmptIzbt+2iVvjEnSxq+9s8JG8yZlmpudeml8si7R6s8J/Jv2ZkXclpy+Tw8Vxkym9oRgSaM402yKqyXYdiZZZZJqhPRZyIyukRdUeHkqslK3sjpORnvWzFP6MO/mej6z4yd92Y2uMkPTPDvzoZm++Ve5ibUa/JF+RorZhtKkNW5fBBeW2N0yTGyyy7RZJieuxfp0g6ZHJbMORDknWzLKoJL1Mk05wszxk+MjHJWkzFtku5gdZIfJ9O0zLqc/+mYdpkEcEzHDiZfLteqotfTRMXYlIs/JY2ORFoWxbOwpUQyUz671sea4oTUm5M8T4hVGK9CWeUCEuEosl9xil5os+ouDZLzy+Wzwqu0zi42JtMhOySTRNuEmiTGx9G9DkW+iZF7oujmNsjIUjnoWX0bJz80pNmST49JPsyD2hZP2Xv0MVcomCVWc7QyMqo+poyyt2Pv8obo5F1sbGy2N2LRB7RbKGXs3EctC9qFh545y9LPp82kS1Job8omQk3FIUuM1+GeHeiOzho4UNGR6HPsWNnOxyssss5CnQpdhWxrdC1LY3SYm2zBBSlJv2HD9pxRxWOWyTuTP6sRiZl3lnXueHXlsh6EeysZOVGXJschyY2Wci76N0WyxPZGehy30bIqiGSiGV0ZG3P4H6kexZiezJrIzBqCMW5CaSHIyO0ZBssv9HuSZei6E9iZy2KV6JkexGVCypeg5qpFkV5bLpsxPzIzazP8AwwahGzG6FJDdk6J7TH3GtIUXY466MTon3EtDfYTEXqxSIuyh1Q5UOVeoh6xrfTDuSM/8z/wxfZD4INkZnIbsy9hrb6yeull6VD7itjXRD7M7Ii2JpouyaROTWrHpkpaSss8Mrmvg8TrPL/DBG8UPgj7C6WyW0T0+ncY0WJ6K2R9RJtkoCJsTtCZdRseSieRjlb7j0xsR4VfczO7zz+Tw6rFD4RSKH0ZlVNFEY0hoZvRTG2RuiPuOYyTtC7CbovRN7JyPUzLjOXSJ4dViQ3eWb/LMWoxX4Qixj6ZXtCXYo4kkcSh/dRHZaSHVktRYitFaO0e5kT2xitniYa5FkWY9Qj8DtSv8sxO4Rf4XSy+jZk7oh2XV9yumnP8A3pJl7Q5XEvsiMrK0SRllpocdFNUOpRafsS02iLpkclxQ3cn8swO8cP8AlFljLGzJ6Earoxx2NEj+5yG6sk3YpDlbRGexTTRa7sy+Zk15YoeG8cWXoy6nL5F3Mf2ok6yS+WeHf7WP4/S2TfYXZfoZIT8wtjVscNsaabLLIzHNschtN2Y3cEdrRm++RZhrgif8s/8Apnh94ofAmX1e0TtUR7LrZZkdQZDbKoSKJJUxx7nEvZJ9Oxhy1FJk9KzM/OIwS8lexk/lnv8Aszwcv2hfobMhB6RY2SZyM0vIzAtsfSTQ2Ni2SVMbtiV0ZFVCk1TG00ZtSEzw8vuRla+rP5PBP9uvyJl0cixsySIPyosbJFmaXlRgfcvsORJjeyzlS0PYkuRGKaRPzzJQ8qHkMruXTHPixu5NnhMvC02RlZZyOQ5oySIT0jnolJJDnZasyy0YZbo5bQ+xJ7JPYluJx2NKqHtiyVGjH95OXlRyL6NlEW0QztJbP/Q/c/8AQx537jyt+o8jfqLJ+R5fyPI36n1DmOVkZUfUs+ochvYvuXRnHU/wNdyHebHLX6UhISK2cTgzgymiiuu+tlllnIWQU99xT00Sa4fLMKjwyt+5ONSLQ/0REmJK+rpjRXShlDO3SuiY3bLG6OTPqP3FmaTSY8o3+ByExDkRYmyLbLaLOTGxMY+jZfSyzXRr9GrL2Wf/xAAdEQACAgMBAQEAAAAAAAAAAAAAEQEwECAhQEEx/9oACAECAQE/ANVqx2/MQcq/d4skd6PvkV7unyT5oy8ze6unTp3ZjGMicTWhHTp//8QAGxEAAgMAAwAAAAAAAAAAAAAAATAAEUAgIVD/2gAIAQMBAT8A90vLzuLzwCgk6Kw9Ss1Sp//Z";
const __vite_glob_0_100 = "/2023/nene/assets/PaYmF6Ad-c53f7a43.jpg";
const __vite_glob_0_101 = "/2023/nene/assets/Q0J30zuS-cc4144d2.jpg";
const __vite_glob_0_102 = "/2023/nene/assets/R3yfSj8--ba2621e1.jpg";
const __vite_glob_0_103 = "/2023/nene/assets/Rt0lFONe-433e6934.jpg";
const __vite_glob_0_104 = "/2023/nene/assets/SoZY2H6f-69ddbe2c.jpg";
const __vite_glob_0_105 = "/2023/nene/assets/T1ZJF7CJ-92f3dfc3.jpg";
const __vite_glob_0_106 = "/2023/nene/assets/T2VEyWzI-4ac095d6.jpg";
const __vite_glob_0_107 = "/2023/nene/assets/TbFSO2RL-6662c9e8.jpg";
const __vite_glob_0_108 = "/2023/nene/assets/U4GojgvQ-c0074c85.jpg";
const __vite_glob_0_109 = "/2023/nene/assets/UDbztc4N-1d242ced.jpg";
const __vite_glob_0_110 = "/2023/nene/assets/VUenmpFe-1ceba92d.jpg";
const __vite_glob_0_111 = "data:image/jpeg;base64,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";
const __vite_glob_0_112 = "/2023/nene/assets/Xi4BVu2b-764212d0.jpg";
const __vite_glob_0_113 = "data:image/jpeg;base64,/9j/2wBDAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX3/2wBDAQUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX3/wgARCADwAI0DASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAYIBAcDBQkCAf/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/2gAMAwEAAhADEAAAAKZAAAAAAAAAAAAAAAAAAAAAAAfsp31QirzKd1fuZFqGFWJrLekwRqTAAAAAW77aJRPg6G1Nf6ajG/P2PXG5YD0AAAAmf2jjhfySSAAAAAADt3lmqn3RpbPnBBpAAAAAANwafslJWkNTLT1Y+oAh0AAAAABnmBbVt+/zulqqehOgviSubn4Ke8AAAAB3d/ayXNtY2sczPxrmHw4fZ5r5hdGPTzz7r60GFHoQAAALhWT81r06fHY/B85t7B7SRdd3kubh0+tN51Z/S9SMnvAAAAM70RrrYnR5bFR5f5yWZsX2B463zZ9VqVUOkrkM/qAAAGx4b2v3Xmtm6C73tY9h8WR/Gjy+Dsv67H2rDaXSqumZ2Ox9cTGN1tnCHxYAAAc3CL1yypUW0uU9BojT+R+x6S4DM68AAAAACXYUee/PfdpDQHn0AAAAAAAAAAAB/8QAQRAAAQMDAgIFBwgIBwAAAAAAAQIDBAUGEQAhEjEHEzBBUQgUFSJhccIjMkBSU2KBghAWQ5GTorHRM0JQYJKjw//aAAgBAQABPwD/AGmASQAMnUK2a9UOEsUx7gJ2WtPVp/Aqxpjo0q605kTYzJPJI4lnR6LpJB4K0xxeBbUBq4aA5bsxuI7LZecUgLPV59UHx7W1bUn3TMLTHycdvBefIyEjwHio6pln0egkebRx1gQAt5w8SydOqKN0oKvqgaaZeWnif4So8gM7DVVqsKg09+bIW3hA9RvkpxXclOqlPeqk+XOe/wAR9wrIHIZ5Ae7tbHpsai21R2ykBT0ZElw95W8AvUuG/JyWkqPGrOQOQ0KcWUAOOJQEjJyf66uG/wCg0dLjMJz0hL5ANqwyk/eUOfuGqnVZ9YkqkzZCnFnkOSUjwSO4ds/dNu0Ol0lqoVEF5iEw2qOz8o7xIQBjHd+Op/TTwpKKZQ/YlyU6T/IjVcvG4rhKhOqC+pP7Bv5Nr/inn28Knt0Sjprk1sGQ/lNOZWP+5Q8B3aWtTi1LWoqUokknmSfoFg2ou7K8zGWk+ZsDrpah9QH5nvWdtX/VxVLiltM4TFhExmEJ+aA3sSPoNjUwWT0XVa4XEYmPw1zcn7w4I6dEkkknJP0CgUpdcrlJpaDgy5TTOfqhasFX4DXTa+il9HC4jICES6hFihA7kNAu/B9B6DKb6Q6QYLp5Qoz8gj3p6r49eUS+U0C1We52dKc/hpCfoPk3Q+OtXJO+xhtM/wAZRX/568ozel2EfFdS/q39B8m6NwUi7JX15DKP4Taz8evKIbKresF7uS9UUfv4O3ptMqFYmsQafEckSXlYQ22Mk/2A7zqzuhejUuKHriaRPmuDdoEhln2DGCo6olIotrRX4lGhIisPuFxxCSVZUQEk+sT3DVzWtQ7wpsGn1VpamIrq3WerWUFKljB1eXQW9GQuZa8hUhAGVQniOs/IvUmNIhvux5LC2Xm1FK23ElKkkdxB7S26HKuavUiixVBL06S2wlatwjjO6j7ANW10Y0WyEwqVSCFzJIHnc51I6xz+yRjZOqBflp3TdlStKC1UWZjBfSzLeCC08uPsvKRukaUt4kgqOxIOkKfWtCA6oFSgkb4G+rkva0bSuyl2nOZqj8qSGA7MaKQ20XzhOEncjXSV0WMXTFntslCa1A9eNI+3bIz1S9EEEgjBHZ+TfRvSfSO1MUPUpkF+T+dYDPx6qi31T3H0cSFNrwhXhw7Z07GYhVCZUYNMgRZ8wEPzWY4Q+vPPKvE6DHAAkdw11AVz11aJc2DNl0ynzJ0TAjS5EZLj7WNxhWmi4l8vPLK3Hchaj3lWukmiegL4uKClAQ150XmgOQbfHWAD3Z7PyVV0xAvHLo9InzY8B+wRnU95pppbjq0pHeTqfXWC4EMtFSQd1nb9w11sx1Q4CkA8sDUOlPOBKnnlHTMRtobJ06nicT7CNeUg1TkXlTTHeBlGnIElA7sLPAT2dk3bPsm4oVah7lvKHms4DrS9lIOoddg3NTIlUjrL8aQjiQocx4pI7iDsRqTCYcOWzj3jGoDC2QErGUj5p1FlKBCQCr2DTfEU5KcavG5YFnUCdWJmVJZGG2083HFbJRqu1qdcVYqFXnuccmW6XHCOQ8Ej2JGw7OmU6XV6hDp8NouSJLqW20+1Wk09i26VQaFFCAmn05hlxaEBPG4E5Uv3qO50vHzi4nB7zoT2WMgNhZ+6SNMVx1tADMVA9qiT/TGmKjUpSwkLAKjjCUjVzW/6ctyo0pxSSuZHdY43NwlbicJV+U6nwJdLnTIExktSYzy2Xm1c0rQcEdn0H2ZniuKaEtB3LUVbmwbazwuO/AnVamJEt9Y9ZxaicdydOrWtXGVHOkO/WGoy0nYHVEhBgBxwfKKH7hqc2gxJCieEJbKirwxvrprtcTER7vgBLmUNNTy3uFgjDMn3KGEnsrUtCIpIrV1OmBRGjkBzKHJahvwNDmR4kavDpXm1dESnUKOabSojzTraRgOOqY3b4gNghHcjVtVyHd1v0+qJSErebw4B/kcTspJ07HKCRpTeNU2nyJDiVIynfYjVOjuMNjrHVLPiTq/rqRaNq1aquqQS20UMtq/aOubIRqwulH9X4noWuQfSFIWlTY71tIc5owdlo9mrxs2NCT6ctqR6Qt6QSUuN5UuIfsnhzT7Cewok5FMqkOYtIUGVhYSQCCRyBznA8SNxq8bmlXTW5M11zLCVFuK3yCGgdvxPM/o6DrpTAq8i35TmGKh68cnkmQgfGNOtkE8SdMQ2n3Ug7pB3GokZpptPCANJTryhrz9LV9i24ruYtL3f8FyVj4B+iybsmWlVjJYUCy80tt5peeBex4CrHgrVRkNyp0l9sAIcWVJHAlGAfEIAAPu7KPIeiSGJLDhbeZcS42sc0qScgjVp3vBu6isyWHEpktobRNQQU9U6ochnuOmELYdC0HJ2yPEHUZ9agChRwddIXSQzYNEblORy/KllxqE2ORcQN1L+4nUqS/NkyJUh1Tj77inHVq5qWs5JPvPbdDlXbiVipUx1eET46Sj2uMHI/lJ1eVfqL18XJPjTX47gnONNraWW1Btg9UgZT4JTq2ukm9E1SjQ37hlPRFzWUuocVkrSs8BBXz10515E+p27R2l5RTIGXPY7KPGf5Ant7KjtquClyX6zFpzDD4cW++vHqo3UkJG5Khtq624zdx1lUWe1MjuynHmpDR9VaHTxDY7g77g6thmM9X6V53OaiRkSEOvPunZCGzxH3nwA1fLDf6x1aWxWolSYffLjb7DmfUXulJSrBBSNv9f/AP/EACwRAAIBAwMDAgQHAAAAAAAAAAECAwAEERIhMQUgQRMwFDJhcSIjQFFSocH/2gAIAQIBAT8A/T3XUYLZvT+aTGdI8fen6vM3yhV/s1YTXVwWaRvyxtxye/4TqV3cvLFC2Cxy7bA7+M1adGEeGuJNR/iuwoAKAAMAeO5wzFVGy8sf89mdQhRR4X2IhmRPvVwczP7ENpIGVzgfSp7eTW7DBHfbISWYcgbVAsw1eo2f2qZJ20+k2KvISmhzyQNR+vdYBWDjVhh4oJvjxWAvFdRlXSiee60jK4k80XajIRV2pkHqDkc9q6QNR3OdhVtO3rYY7PtWmjgCp5yJvwYGnb702g4ZdieV7heERozLluDUl4HiYquDxv7GdsVnbHvf/8QALBEAAQIFAgQGAgMAAAAAAAAAAQIDAAQFERIhMRMgIkEGFDBRYXEkkTJAYv/aAAgBAwEBPwD+ut1KNNzBfV2AENKWrU7c+DilKIT33hDFtVG55ysFzhjsLq9AkAEnYRTVF5Mw+rdx02+h6E4rGVfP+bfvSKUnGRZ+So/snnJABJMVCsSqm3WUBatR1AaaGKbUpYMMsrJSoDcjTnqr6U8NpZOBIyANriKi7IKLYlm8SL5aWiQmJBri+bbyuBibXEUKeRMCYZRfBCjwwdwm/N4k4rT0u5gS2b9XYK9oceChn39jDzjhvcx4Rlny4/MKFmh0g+55q3NNvEymhAIv9wJVsb3IgSTKr9MUR9DC/K2xSsdH2OV0PLUG0HBBBycG4+BFWprXkgplFlMXV8kHeA5YXMLdcWrQkCKVTEmn/khSlPEL3IKbfxtDIeQS24c0pAxc7n7Hvy7wuhBUy+025g3bJNxfftDFBLc4yl5YW3qohPsPQx6sr9rRj15X7W9b/9k=";
const __vite_glob_0_114 = "/2023/nene/assets/Z4knaQz_-2d50e20e.jpg";
const __vite_glob_0_115 = "/2023/nene/assets/ZCBcJYl--08a15a48.jpg";
const __vite_glob_0_116 = "/2023/nene/assets/ZNPTymSM-83edba9b.jpg";
const __vite_glob_0_117 = "/2023/nene/assets/__f3zxVq-77db29a4.jpg";
const __vite_glob_0_118 = "/2023/nene/assets/cD4anv_u-0d833614.jpg";
const __vite_glob_0_119 = "/2023/nene/assets/e8OBrzBF-10c6c1a2.jpg";
const __vite_glob_0_120 = "/2023/nene/assets/elh2UtNX-ad30d756.jpg";
const __vite_glob_0_121 = "/2023/nene/assets/exX3NDAV-bd2be428.jpg";
const __vite_glob_0_122 = "/2023/nene/assets/fHNEhOf9-105b811c.jpg";
const __vite_glob_0_123 = "/2023/nene/assets/g6XT5IjP-d85a6b1b.jpg";
const __vite_glob_0_124 = "/2023/nene/assets/hLhjQpuE-328e8e81.jpg";
const __vite_glob_0_125 = "/2023/nene/assets/iRzICORZ-24f1b76e.jpg";
const __vite_glob_0_126 = "/2023/nene/assets/ivehmnqe-ef5679d8.jpg";
const __vite_glob_0_127 = "/2023/nene/assets/jHpyYsq6-85f63f36.jpg";
const __vite_glob_0_128 = "/2023/nene/assets/n_mhFX1i-0a552963.jpg";
const __vite_glob_0_129 = "/2023/nene/assets/oIEcrWIO-2e9f178d.jpg";
const __vite_glob_0_130 = "/2023/nene/assets/oe3voXmN-e3ad31f6.jpg";
const __vite_glob_0_131 = "/2023/nene/assets/q5b_6FZl-4f1cd819.jpg";
const __vite_glob_0_132 = "/2023/nene/assets/qTnu4s__-21b3539f.jpg";
const __vite_glob_0_133 = "/2023/nene/assets/qvvO8a-l-478368b5.jpg";
const __vite_glob_0_134 = "/2023/nene/assets/rj_Q8HTJ-4930974c.jpg";
const __vite_glob_0_135 = "/2023/nene/assets/rzID5EN7-bb284918.jpg";
const __vite_glob_0_136 = "/2023/nene/assets/s3s4RsP9-184fa5ff.jpg";
const __vite_glob_0_137 = "/2023/nene/assets/tNcA1e7p-3524b62b.jpg";
const __vite_glob_0_138 = "/2023/nene/assets/u4EKtzVZ-4da3c195.jpg";
const __vite_glob_0_139 = "/2023/nene/assets/u4yYUxMz-c17ce0b6.jpg";
const __vite_glob_0_140 = "/2023/nene/assets/uGpQAzA2-d916c5bf.jpg";
const __vite_glob_0_141 = "/2023/nene/assets/uLzV0UcS-bf104e94.jpg";
const __vite_glob_0_142 = "/2023/nene/assets/ul1-0dgW-29830328.jpg";
const __vite_glob_0_143 = "/2023/nene/assets/vqU2BHxR-c3b52b09.jpg";
const __vite_glob_0_144 = "/2023/nene/assets/wRhVNXNZ-e2ea831f.jpg";
const __vite_glob_0_145 = "/2023/nene/assets/wTOR9OE6-346a736d.jpg";
const __vite_glob_0_146 = "/2023/nene/assets/weeUjU_b-efa7759a.jpg";
const __vite_glob_0_147 = "/2023/nene/assets/wpkbhIHw-e4ce2ce6.jpg";
const __vite_glob_0_148 = "/2023/nene/assets/wxDUPnEf-3f483e3f.jpg";
const __vite_glob_0_149 = "/2023/nene/assets/x0sv7MJb-3e934c77.jpg";
const __vite_glob_0_150 = "/2023/nene/assets/xE9mRrcf-0ddb4b19.jpg";
const __vite_glob_0_151 = "/2023/nene/assets/zVvHKIfq-63d02030.jpg";
const getImageUrl = (type, name) => new URL((/* @__PURE__ */ Object.assign({ "./assets/art/0WVQsmj1.jpg": __vite_glob_0_0, "./assets/art/0ZoGPI1o.jpg": __vite_glob_0_1, "./assets/art/2N3UQoPp.jpg": __vite_glob_0_2, "./assets/art/Aja-lQlf.jpg": __vite_glob_0_3, "./assets/art/BTJs3KrQ.jpg": __vite_glob_0_4, "./assets/art/GP-UVhTr.jpg": __vite_glob_0_5, "./assets/art/HJWAzpph.jpg": __vite_glob_0_6, "./assets/art/OFWgsupp.jpg": __vite_glob_0_7, "./assets/art/UL8JWzOi.jpg": __vite_glob_0_8, "./assets/art/UWT4Y_cQ.jpg": __vite_glob_0_9, "./assets/art/VDd9__va.jpg": __vite_glob_0_10, "./assets/art/VE9p-zl-.jpg": __vite_glob_0_11, "./assets/art/VLhtbYRi.jpg": __vite_glob_0_12, "./assets/art/Vadg1Gf9.jpg": __vite_glob_0_13, "./assets/art/Vjm0bdGL.jpg": __vite_glob_0_14, "./assets/art/a8Sk9hUC.jpg": __vite_glob_0_15, "./assets/art/amde9w1M.jpg": __vite_glob_0_16, "./assets/art/bLj66N_j.jpg": __vite_glob_0_17, "./assets/art/dat8hbWx.jpg": __vite_glob_0_18, "./assets/art/e1GvREsq.jpg": __vite_glob_0_19, "./assets/art/fD8UWYJf.jpg": __vite_glob_0_20, "./assets/art/fgGaWGxO.jpg": __vite_glob_0_21, "./assets/art/hEAdEIpu.jpg": __vite_glob_0_22, "./assets/art/joxOhcA-.jpg": __vite_glob_0_23, "./assets/art/nSqF8Apk.jpg": __vite_glob_0_24, "./assets/art/nbiGzlzM.jpg": __vite_glob_0_25, "./assets/art/qERWh7L7.jpg": __vite_glob_0_26, "./assets/art/rwXiuqTP.jpg": __vite_glob_0_27, "./assets/art/s85i9FpV.jpg": __vite_glob_0_28, "./assets/art/xiTEfHoG.jpg": __vite_glob_0_29, "./assets/cake/-lyPXk_J.jpg": __vite_glob_0_30, "./assets/cake/19oHdsH4.jpg": __vite_glob_0_31, "./assets/cake/2oqqIEer.jpg": __vite_glob_0_32, "./assets/cake/3r-yeIsq.jpg": __vite_glob_0_33, "./assets/cake/4yb-J2eD.jpg": __vite_glob_0_34, "./assets/cake/6sIOAeJ-.jpg": __vite_glob_0_35, "./assets/cake/9DJFN9qH.jpg": __vite_glob_0_36, "./assets/cake/AG7R5QhO.jpg": __vite_glob_0_37, "./assets/cake/BIbK6ToQ.jpg": __vite_glob_0_38, "./assets/cake/CujFWEtf.jpg": __vite_glob_0_39, "./assets/cake/HpymxSji.jpg": __vite_glob_0_40, "./assets/cake/JQyBevpD.jpg": __vite_glob_0_41, "./assets/cake/JWFxeBcJ.jpg": __vite_glob_0_42, "./assets/cake/Ks--9q2H.jpg": __vite_glob_0_43, "./assets/cake/L9FMcSKX.jpg": __vite_glob_0_44, "./assets/cake/LwK8zMLL.jpg": __vite_glob_0_45, "./assets/cake/NvrxYoH5.jpg": __vite_glob_0_46, "./assets/cake/Quevz_kE.jpg": __vite_glob_0_47, "./assets/cake/Vf7ndDtv.jpg": __vite_glob_0_48, "./assets/cake/XcxvMt88.jpg": __vite_glob_0_49, "./assets/cake/Y0ltGiB_.jpg": __vite_glob_0_50, "./assets/cake/_FVcQesr.jpg": __vite_glob_0_51, "./assets/cake/_s8erMC3.jpg": __vite_glob_0_52, "./assets/cake/aNIlJ0OI.jpg": __vite_glob_0_53, "./assets/cake/dGhyfj_U.jpg": __vite_glob_0_54, "./assets/cake/dx-gZPr-.jpg": __vite_glob_0_55, "./assets/cake/iTMd1LxR.jpg": __vite_glob_0_56, "./assets/cake/jCZvFP7d.jpg": __vite_glob_0_57, "./assets/cake/jCs9LCNT.jpg": __vite_glob_0_58, "./assets/cake/my7dDUOT.jpg": __vite_glob_0_59, "./assets/cake/qe64dB3C.jpg": __vite_glob_0_60, "./assets/cake/uKvgy2CB.jpg": __vite_glob_0_61, "./assets/cake/uk97VlSV.jpg": __vite_glob_0_62, "./assets/cake/v6zHZL4I.jpg": __vite_glob_0_63, "./assets/cake/xOB-Yti5.jpg": __vite_glob_0_64, "./assets/cake/zGfk4SEC.jpg": __vite_glob_0_65, "./assets/cake/zTN28ye9.jpg": __vite_glob_0_66, "./assets/cake/zo-ZuT_A.jpg": __vite_glob_0_67, "./assets/pfp/-XyL_nJl.jpg": __vite_glob_0_68, "./assets/pfp/-j7lQ2Zm.jpg": __vite_glob_0_69, "./assets/pfp/0za__BgI.jpg": __vite_glob_0_70, "./assets/pfp/19J_j22C.jpg": __vite_glob_0_71, "./assets/pfp/1q79yacL.jpg": __vite_glob_0_72, "./assets/pfp/1t45ebgQ.jpg": __vite_glob_0_73, "./assets/pfp/3uQmHyWT.jpg": __vite_glob_0_74, "./assets/pfp/4Fxp7WiS.jpg": __vite_glob_0_75, "./assets/pfp/5UYwjAJN.jpg": __vite_glob_0_76, "./assets/pfp/5VwrP7UW.jpg": __vite_glob_0_77, "./assets/pfp/6F_zUc40.jpg": __vite_glob_0_78, "./assets/pfp/71ghyviq.jpg": __vite_glob_0_79, "./assets/pfp/7f3iDZzE.jpg": __vite_glob_0_80, "./assets/pfp/7wPPDi0n.jpg": __vite_glob_0_81, "./assets/pfp/82JR544f.jpg": __vite_glob_0_82, "./assets/pfp/9kxT32U7.jpg": __vite_glob_0_83, "./assets/pfp/A-zIuew8.jpg": __vite_glob_0_84, "./assets/pfp/A3a2Hl_1.jpg": __vite_glob_0_85, "./assets/pfp/B5RWErZF.jpg": __vite_glob_0_86, "./assets/pfp/Cyl39Qlw.jpg": __vite_glob_0_87, "./assets/pfp/DEVCb0-k.jpg": __vite_glob_0_88, "./assets/pfp/EZkmLoLw.jpg": __vite_glob_0_89, "./assets/pfp/F5gUcNFx.jpg": __vite_glob_0_90, "./assets/pfp/FTYnIwxg.jpg": __vite_glob_0_91, "./assets/pfp/HUDlUNH9.jpg": __vite_glob_0_92, "./assets/pfp/KIArwdUd.jpg": __vite_glob_0_93, "./assets/pfp/Kp5uzhGA.jpg": __vite_glob_0_94, "./assets/pfp/L7P75lC1.jpg": __vite_glob_0_95, "./assets/pfp/Na2M6eGi.jpg": __vite_glob_0_96, "./assets/pfp/NjJO_Koi.jpg": __vite_glob_0_97, "./assets/pfp/OkbMDX_C.jpg": __vite_glob_0_98, "./assets/pfp/P-kmiygZ.jpg": __vite_glob_0_99, "./assets/pfp/PaYmF6Ad.jpg": __vite_glob_0_100, "./assets/pfp/Q0J30zuS.jpg": __vite_glob_0_101, "./assets/pfp/R3yfSj8-.jpg": __vite_glob_0_102, "./assets/pfp/Rt0lFONe.jpg": __vite_glob_0_103, "./assets/pfp/SoZY2H6f.jpg": __vite_glob_0_104, "./assets/pfp/T1ZJF7CJ.jpg": __vite_glob_0_105, "./assets/pfp/T2VEyWzI.jpg": __vite_glob_0_106, "./assets/pfp/TbFSO2RL.jpg": __vite_glob_0_107, "./assets/pfp/U4GojgvQ.jpg": __vite_glob_0_108, "./assets/pfp/UDbztc4N.jpg": __vite_glob_0_109, "./assets/pfp/VUenmpFe.jpg": __vite_glob_0_110, "./assets/pfp/VnQ8Hia3.jpg": __vite_glob_0_111, "./assets/pfp/Xi4BVu2b.jpg": __vite_glob_0_112, "./assets/pfp/YMn8Z0O5.jpg": __vite_glob_0_113, "./assets/pfp/Z4knaQz_.jpg": __vite_glob_0_114, "./assets/pfp/ZCBcJYl-.jpg": __vite_glob_0_115, "./assets/pfp/ZNPTymSM.jpg": __vite_glob_0_116, "./assets/pfp/__f3zxVq.jpg": __vite_glob_0_117, "./assets/pfp/cD4anv_u.jpg": __vite_glob_0_118, "./assets/pfp/e8OBrzBF.jpg": __vite_glob_0_119, "./assets/pfp/elh2UtNX.jpg": __vite_glob_0_120, "./assets/pfp/exX3NDAV.jpg": __vite_glob_0_121, "./assets/pfp/fHNEhOf9.jpg": __vite_glob_0_122, "./assets/pfp/g6XT5IjP.jpg": __vite_glob_0_123, "./assets/pfp/hLhjQpuE.jpg": __vite_glob_0_124, "./assets/pfp/iRzICORZ.jpg": __vite_glob_0_125, "./assets/pfp/ivehmnqe.jpg": __vite_glob_0_126, "./assets/pfp/jHpyYsq6.jpg": __vite_glob_0_127, "./assets/pfp/n_mhFX1i.jpg": __vite_glob_0_128, "./assets/pfp/oIEcrWIO.jpg": __vite_glob_0_129, "./assets/pfp/oe3voXmN.jpg": __vite_glob_0_130, "./assets/pfp/q5b_6FZl.jpg": __vite_glob_0_131, "./assets/pfp/qTnu4s__.jpg": __vite_glob_0_132, "./assets/pfp/qvvO8a-l.jpg": __vite_glob_0_133, "./assets/pfp/rj_Q8HTJ.jpg": __vite_glob_0_134, "./assets/pfp/rzID5EN7.jpg": __vite_glob_0_135, "./assets/pfp/s3s4RsP9.jpg": __vite_glob_0_136, "./assets/pfp/tNcA1e7p.jpg": __vite_glob_0_137, "./assets/pfp/u4EKtzVZ.jpg": __vite_glob_0_138, "./assets/pfp/u4yYUxMz.jpg": __vite_glob_0_139, "./assets/pfp/uGpQAzA2.jpg": __vite_glob_0_140, "./assets/pfp/uLzV0UcS.jpg": __vite_glob_0_141, "./assets/pfp/ul1-0dgW.jpg": __vite_glob_0_142, "./assets/pfp/vqU2BHxR.jpg": __vite_glob_0_143, "./assets/pfp/wRhVNXNZ.jpg": __vite_glob_0_144, "./assets/pfp/wTOR9OE6.jpg": __vite_glob_0_145, "./assets/pfp/weeUjU_b.jpg": __vite_glob_0_146, "./assets/pfp/wpkbhIHw.jpg": __vite_glob_0_147, "./assets/pfp/wxDUPnEf.jpg": __vite_glob_0_148, "./assets/pfp/x0sv7MJb.jpg": __vite_glob_0_149, "./assets/pfp/xE9mRrcf.jpg": __vite_glob_0_150, "./assets/pfp/zVvHKIfq.jpg": __vite_glob_0_151 }))[`./assets/${type}/${name}.jpg`], self.location).href;
function ArtCard({ artData }) {
  const { location, nickname, twitter, pfp, art: art2 } = artData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `artCard relative w-96 max-h-[calc(100%-4rem)] bg-whitex flex flex-col border-4 border-[#802c2f] rounded-2xl transition-all overflow-hidden`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 z-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IoResize,
            {
              size: "48",
              className: "text-[#802c2f] bg-white p-2 rounded-full border-2 border-[#802c2f]"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Uncontrolled, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getImageUrl("art", art2), className: "h-full w-full", alt: "" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 flex items-center gap-4", children: [
          pfp && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full border-2 border-gray-700 overflow-hidden pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "h-full w-full object-cover pointer-events-auto",
              src: getImageUrl("pfp", pfp),
              alt: ""
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
            twitter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://twitter.com/${twitter[0] === "@" ? twitter : `@${twitter}`}`,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e) => e.stopPropagation(),
                className: "flex items-center gap-1 text-blue-500 underline underline-offset-1 pointer-events-auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IoLogoTwitter, { size: "20" }),
                  twitter[0] === "@" ? twitter : `@${twitter}`
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nickname }),
            location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-red-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IoLocationOutline, { size: "20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: location })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function CakeCard({ cakeData }) {
  const { location, nickname, twitter, pfp, cake: cake2 } = cakeData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `cakeCard relative w-96 flex flex-col border-4 border-[#802c2f] rounded-2xl transition-all overflow-hidden`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 z-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IoResize,
            {
              size: "48",
              className: "text-[#802c2f] bg-white p-2 rounded-full border-2 border-[#802c2f]"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Uncontrolled, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: getImageUrl("cake", cake2),
              className: "h-full w-full",
              alt: ""
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4 flex items-center gap-4", children: [
          pfp && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full border-2 border-gray-700 overflow-hidden pointer-events-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "h-full w-full object-cover pointer-events-auto",
              src: getImageUrl("pfp", pfp),
              alt: ""
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
            twitter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://twitter.com/${twitter[0] === "@" ? twitter : `@${twitter}`}`,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e) => e.stopPropagation(),
                className: "flex items-center gap-1 text-blue-500 underline underline-offset-1 pointer-events-auto",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IoLogoTwitter, { size: "20" }),
                  twitter[0] === "@" ? twitter : `@${twitter}`
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nickname }),
            location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-red-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IoLocationOutline, { size: "20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: location })
            ] })
          ] })
        ] })
      ]
    }
  );
}
const credits = [
  {
    en: "Project Organizer & Translator",
    jp: "プロジェクト管理者",
    people: ["Vanilla Thunder"]
  },
  {
    en: "Website Developer",
    jp: "ウェブサイト制作",
    people: ["Matthew"]
  },
  {
    en: "Artist",
    jp: "アーティスト",
    people: ["Legzy"]
  },
  {
    en: "Special Thanks",
    jp: "スペシャルサンクス",
    people: [
      "Japanese Nene fan server ねっ子集会所",
      "Korean Nene fan server 한국 모모스즈 네네 팬클럽",
      "Taiwan Nene fan server 遜砲偶像株式會社",
      "TaoTao Planet Seal Conservatory",
      "And to every fan who participated!"
    ],
    peoplejp: [
      "日本ねっ子ディスコードサーバー 　ねっ子集会所",
      "韓国ねっ子ディスコードサーバー 　한국 모모스즈 네네 팬클럽",
      "台湾ねっ子ディスコードサーバー 　遜砲偶像株式會社",
      "英語圏ねっ子ディスコードサーバー　TaoTao Planet Seal Conservatory",
      "当企画を応援し、参加してくれた皆様！"
    ]
  }
];
function Credits() {
  const { t, i18n } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "credits",
        className: "relative bg-white w-fit h-full py-8 px-12 ml-40 bg-paper-real",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] mb-4", children: t("nav.credits") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: credits.map((credit) => {
            const title = i18n.language === "en" ? credit.en : credit.jp;
            const people = i18n.language === "en" ? credit.people : credit.peoplejp || credit.people;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 last-of-type:mb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold mb-2", children: title }),
              people.map((person) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: person });
              })
            ] });
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: "credits",
        className: "relative bg-paper-real bg-white w-fit h-full py-8 px-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] mb-4", children: t("credits.check") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "https://nepolabo.fans/2023",
                className: "underline text-lg w-full pointer-events-auto border border-gray-500 px-4 py-3 rounded-xl text-center shadow-md",
                children: t("credits.nepolabo")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                rel: "noopener noreferrer",
                target: "_blank",
                href: "https://nepolabo.fans/2023",
                className: "underline text-lg w-full bg-paper-real bg-blue-100 pointer-events-auto border border-gray-500 px-4 py-3 rounded-xl text-center shadow-md",
                children: t("credits.lamy")
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const StageLights = "/2023/nene/assets/stage-641c4c7a.png";
const Nekko = "/2023/nene/assets/nekko-88544d7b.webp";
const RoomBg = "/2023/nene/assets/room-5948d062.webp";
function Intro() {
  const section = useStore($activeSection);
  const images = {
    intro: Logo,
    messages: MessagesLogo,
    art: ArtLogo,
    cake: CakeLogo
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "z-0 h-full w-screen flex-shrink-0 flex flex-col items-center fixed top-0 left-0 right-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.img,
      {
        src: StageLights,
        alt: "",
        className: "w-[50%] h-auto mx-auto z-10 pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "w-full flex justify-center gap-8 h-full items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[12%] h-[60%] bg-pink-50 hidden lg:grid isolate bg-paper-real glow overflow-clip", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: RoomBg,
            className: "h-full w-full object-cover object-left",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: Nekko,
            alt: "",
            className: "absolute inset-0 w-full object-contain object-top translate-y-[-30%] rotate-[-200deg] translate-x-[-15%]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[80%] lg:w-[40%] aspect-video bg-pink-50 grid isolate bg-paper-real glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: RoomBg, className: "h-full w-full object-cover", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5 },
            src: images[section],
            alt: "",
            className: "absolute inset-0 h-full px-8 py-4  w-full object-contain"
          },
          section
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[12%] h-[60%] bg-pink-50 hidden lg:grid isolate bg-paper-real glow overflow-clip", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: RoomBg,
            className: "h-full w-full object-cover object-right",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: Nekko,
            alt: "",
            className: "absolute inset-0 w-full object-contain object-bottom mt-auto translate-y-[30%] rotate-[-15deg] translate-x-[15%]"
          }
        )
      ] })
    ] })
  ] });
}
const Peek1 = "/2023/nene/assets/peek1-bd6223e6.png";
const Peek2 = "/2023/nene/assets/peek2-d1cb9f9b.png";
const Peek3 = "/2023/nene/assets/peek3-3a76857a.png";
const PlaceholderImage = "/2023/nene/assets/nenepfp-e48f6d54.webp";
const art$1 = [Peek1, Peek2, Peek3];
function MessageCard({
  messageData
}) {
  const { location, message, nickname, twitter, message_jp, pfp, seed } = messageData;
  const { i18n } = useTranslation();
  const nekkoArt = art$1[seed.art];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `messageCard relative w-96 flex flex-col gap-6 border-4 border-[#802c2f] rounded-2xl px-4 py-6 transition-all ${seed.color}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: nekkoArt,
            alt: "",
            className: `absolute h-20 z-10 ${{
              top: "top-0 -translate-y-full",
              left: "left-0 -translate-x-full -rotate-90",
              right: "right-0 translate-x-full rotate-90",
              none: "hidden"
            }[seed.position]} ${nekkoArt !== Peek2 && {
              top: "-translate-y-[calc(100%-0.25rem)]",
              left: "-translate-x-[calc(100%-0.25rem)]",
              right: "translate-x-[calc(100%-0.25rem)]",
              none: ""
            }[seed.position]}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full border-2 border-gray-700 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: "h-full w-full object-cover",
                src: pfp ? getImageUrl("pfp", pfp) : PlaceholderImage,
                alt: ""
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: nickname })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap leading-relaxed", children: i18n.language === "en" ? message : message_jp || message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 items-center ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "leading-none", children: [
          twitter && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://twitter.com/${twitter[0] === "@" ? twitter : `@${twitter}`}`,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e) => e.stopPropagation(),
                className: "text-slate-600 underline underline-offset-1",
                children: twitter
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " · " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: location })
        ] }) })
      ]
    }
  );
}
const generatedAttribute = "generated";
const mouseDownEvent = "pointerdown";
const mouseUpEvent = "pointerup";
const mouseLeaveEvent = "pointerleave";
const mouseOutEvent = "pointerout";
const mouseMoveEvent = "pointermove";
const touchStartEvent = "touchstart";
const touchEndEvent = "touchend";
const touchMoveEvent = "touchmove";
const touchCancelEvent = "touchcancel";
const resizeEvent = "resize";
const visibilityChangeEvent = "visibilitychange";
const errorPrefix = "tsParticles - Error";
class Vector3d {
  constructor(xOrCoords, y, z) {
    this._updateFromAngle = (angle, length) => {
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    };
    if (!isNumber(xOrCoords) && xOrCoords) {
      this.x = xOrCoords.x;
      this.y = xOrCoords.y;
      const coords3d = xOrCoords;
      this.z = coords3d.z ? coords3d.z : 0;
    } else if (xOrCoords !== void 0 && y !== void 0) {
      this.x = xOrCoords;
      this.y = y;
      this.z = z ?? 0;
    } else {
      throw new Error(`${errorPrefix} Vector3d not initialized correctly`);
    }
  }
  static get origin() {
    return Vector3d.create(0, 0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(angle) {
    this._updateFromAngle(angle, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(length) {
    this._updateFromAngle(this.angle, length);
  }
  static clone(source) {
    return Vector3d.create(source.x, source.y, source.z);
  }
  static create(x, y, z) {
    return new Vector3d(x, y, z);
  }
  add(v) {
    return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  addTo(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  copy() {
    return Vector3d.clone(this);
  }
  distanceTo(v) {
    return this.sub(v).length;
  }
  distanceToSq(v) {
    return this.sub(v).getLengthSq();
  }
  div(n) {
    return Vector3d.create(this.x / n, this.y / n, this.z / n);
  }
  divTo(n) {
    this.x /= n;
    this.y /= n;
    this.z /= n;
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(n) {
    return Vector3d.create(this.x * n, this.y * n, this.z * n);
  }
  multTo(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }
  normalize() {
    const length = this.length;
    if (length != 0) {
      this.multTo(1 / length);
    }
  }
  rotate(angle) {
    return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), 0);
  }
  setTo(c) {
    this.x = c.x;
    this.y = c.y;
    const v3d = c;
    this.z = v3d.z ? v3d.z : 0;
  }
  sub(v) {
    return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
}
class Vector extends Vector3d {
  constructor(xOrCoords, y) {
    super(xOrCoords, y, 0);
  }
  static get origin() {
    return Vector.create(0, 0);
  }
  static clone(source) {
    return Vector.create(source.x, source.y);
  }
  static create(x, y) {
    return new Vector(x, y);
  }
}
let _random = Math.random;
const easings = /* @__PURE__ */ new Map();
function addEasing(name, easing) {
  if (easings.get(name)) {
    return;
  }
  easings.set(name, easing);
}
function getEasing(name) {
  return easings.get(name) || ((value) => value);
}
function getRandom() {
  return clamp(_random(), 0, 1 - 1e-16);
}
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
  return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
  const max = getRangeMax(r);
  let min = getRangeMin(r);
  if (max === min) {
    min = 0;
  }
  return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
  return isNumber(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
  return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
  return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
  if (source === value || value === void 0 && isNumber(source)) {
    return source;
  }
  const min = getRangeMin(source), max = getRangeMax(source);
  return value !== void 0 ? {
    min: Math.min(min, value),
    max: Math.max(max, value)
  } : setRangeValue(min, max);
}
function getValue(options) {
  const random = options.random, { enable, minimumValue } = isBoolean(random) ? {
    enable: random,
    minimumValue: 0
  } : random;
  return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
function getDistances(pointA, pointB) {
  const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
  return { dx, dy, distance: Math.sqrt(dx ** 2 + dy ** 2) };
}
function getDistance(pointA, pointB) {
  return getDistances(pointA, pointB).distance;
}
function getParticleDirectionAngle(direction, position, center) {
  if (isNumber(direction)) {
    return direction * Math.PI / 180;
  }
  switch (direction) {
    case "top":
      return -Math.PI / 2;
    case "top-right":
      return -Math.PI / 4;
    case "right":
      return 0;
    case "bottom-right":
      return Math.PI / 4;
    case "bottom":
      return Math.PI / 2;
    case "bottom-left":
      return 3 * Math.PI / 4;
    case "left":
      return Math.PI;
    case "top-left":
      return -3 * Math.PI / 4;
    case "inside":
      return Math.atan2(center.y - position.y, center.x - position.x);
    case "outside":
      return Math.atan2(position.y - center.y, position.x - center.x);
    default:
      return getRandom() * Math.PI * 2;
  }
}
function getParticleBaseVelocity(direction) {
  const baseVelocity = Vector.origin;
  baseVelocity.length = 1;
  baseVelocity.angle = direction;
  return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
  return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
}
function calcExactPositionOrRandomFromSize(data) {
  var _a, _b;
  return {
    x: ((_a = data.position) == null ? void 0 : _a.x) ?? getRandom() * data.size.width,
    y: ((_b = data.position) == null ? void 0 : _b.y) ?? getRandom() * data.size.height
  };
}
function parseAlpha(input) {
  return input ? input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input) : 1;
}
const _logger = {
  debug: console.debug,
  error: console.error,
  info: console.info,
  log: console.log,
  verbose: console.log,
  warning: console.warn
};
function getLogger() {
  return _logger;
}
function rectSideBounce(data) {
  const res = { bounced: false }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data;
  if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
    return res;
  }
  if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
    res.velocity = velocity * -factor;
    res.bounced = true;
  }
  return res;
}
function checkSelector(element, selectors) {
  const res = executeOnSingleOrMultiple(selectors, (selector) => {
    return element.matches(selector);
  });
  return isArray(res) ? res.some((t) => t) : res;
}
function isSsr() {
  return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
  return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
  if (!hasMatchMedia()) {
    return;
  }
  return matchMedia(query);
}
function safeMutationObserver(callback) {
  if (isSsr() || typeof MutationObserver === "undefined") {
    return;
  }
  return new MutationObserver(callback);
}
function isInArray(value, array) {
  return value === array || isArray(array) && array.indexOf(value) > -1;
}
async function loadFont(font, weight) {
  try {
    await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
  } catch {
  }
}
function arrayRandomIndex(array) {
  return Math.floor(getRandom() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
  return array[index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size, offset, radius, direction) {
  return areBoundsInside(calculateBounds(point, radius ?? 0), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
  let inside = true;
  if (!direction || direction === "bottom") {
    inside = bounds.top < size.height + offset.x;
  }
  if (inside && (!direction || direction === "left")) {
    inside = bounds.right > offset.x;
  }
  if (inside && (!direction || direction === "right")) {
    inside = bounds.left < size.width + offset.y;
  }
  if (inside && (!direction || direction === "top")) {
    inside = bounds.bottom > offset.y;
  }
  return inside;
}
function calculateBounds(point, radius) {
  return {
    bottom: point.y + radius,
    left: point.x - radius,
    right: point.x + radius,
    top: point.y - radius
  };
}
function deepExtend(destination, ...sources) {
  for (const source of sources) {
    if (source === void 0 || source === null) {
      continue;
    }
    if (!isObject$1(source)) {
      destination = source;
      continue;
    }
    const sourceIsArray = Array.isArray(source);
    if (sourceIsArray && (isObject$1(destination) || !destination || !Array.isArray(destination))) {
      destination = [];
    } else if (!sourceIsArray && (isObject$1(destination) || !destination || Array.isArray(destination))) {
      destination = {};
    }
    for (const key in source) {
      if (key === "__proto__") {
        continue;
      }
      const sourceDict = source, value = sourceDict[key], destDict = destination;
      destDict[key] = isObject$1(value) && Array.isArray(value) ? value.map((v) => deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
    }
  }
  return destination;
}
function isDivModeEnabled(mode, divs) {
  return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
  executeOnSingleOrMultiple(divs, (div) => {
    const divMode2 = div.mode, divEnabled = div.enable;
    if (divEnabled && isInArray(mode, divMode2)) {
      singleDivModeExecute(div, callback);
    }
  });
}
function singleDivModeExecute(div, callback) {
  const selectors = div.selectors;
  executeOnSingleOrMultiple(selectors, (selector) => {
    callback(selector, div);
  });
}
function divMode(divs, element) {
  if (!element || !divs) {
    return;
  }
  return findItemFromSingleOrMultiple(divs, (div) => {
    return checkSelector(element, div.selectors);
  });
}
function circleBounceDataFromParticle(p) {
  return {
    position: p.getPosition(),
    radius: p.getRadius(),
    mass: p.getMass(),
    velocity: p.velocity,
    factor: Vector.create(getValue(p.options.bounce.horizontal), getValue(p.options.bounce.vertical))
  };
}
function circleBounce(p1, p2) {
  const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = getDistances(pos2, pos1);
  if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) {
    return;
  }
  const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
  p1.velocity.x = vFinal1.x * p1.factor.x;
  p1.velocity.y = vFinal1.y * p1.factor.y;
  p2.velocity.x = vFinal2.x * p2.factor.x;
  p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
  const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), resH = rectSideBounce({
    pSide: {
      min: bounds.left,
      max: bounds.right
    },
    pOtherSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    rectSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    rectOtherSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    velocity: particle.velocity.x,
    factor: getValue(particle.options.bounce.horizontal)
  });
  if (resH.bounced) {
    if (resH.velocity !== void 0) {
      particle.velocity.x = resH.velocity;
    }
    if (resH.position !== void 0) {
      particle.position.x = resH.position;
    }
  }
  const resV = rectSideBounce({
    pSide: {
      min: bounds.top,
      max: bounds.bottom
    },
    pOtherSide: {
      min: bounds.left,
      max: bounds.right
    },
    rectSide: {
      min: divBounds.top,
      max: divBounds.bottom
    },
    rectOtherSide: {
      min: divBounds.left,
      max: divBounds.right
    },
    velocity: particle.velocity.y,
    factor: getValue(particle.options.bounce.vertical)
  });
  if (resV.bounced) {
    if (resV.velocity !== void 0) {
      particle.velocity.y = resV.velocity;
    }
    if (resV.position !== void 0) {
      particle.position.y = resV.position;
    }
  }
}
function executeOnSingleOrMultiple(obj, callback) {
  return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
  return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
  return isArray(obj) ? obj.find((t, index) => callback(t, index)) : callback(obj, 0) ? obj : void 0;
}
function initParticleNumericAnimationValue(options, pxRatio) {
  const valueRange = options.value, animationOptions = options.animation, res = {
    delayTime: getRangeValue(animationOptions.delay) * 1e3,
    enable: animationOptions.enable,
    value: getRangeValue(options.value) * pxRatio,
    max: getRangeMax(valueRange) * pxRatio,
    min: getRangeMin(valueRange) * pxRatio,
    loops: 0,
    maxLoops: getRangeValue(animationOptions.count),
    time: 0
  };
  if (animationOptions.enable) {
    res.decay = 1 - getRangeValue(animationOptions.decay);
    switch (animationOptions.mode) {
      case "increase":
        res.status = "increasing";
        break;
      case "decrease":
        res.status = "decreasing";
        break;
      case "random":
        res.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
        break;
    }
    const autoStatus = animationOptions.mode === "auto";
    switch (animationOptions.startValue) {
      case "min":
        res.value = res.min;
        if (autoStatus) {
          res.status = "increasing";
        }
        break;
      case "max":
        res.value = res.max;
        if (autoStatus) {
          res.status = "decreasing";
        }
        break;
      case "random":
      default:
        res.value = randomInRange(res);
        if (autoStatus) {
          res.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
        }
        break;
    }
  }
  res.initialValue = res.value;
  return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
  const isPercent = positionOrSize.mode === "percent";
  if (!isPercent) {
    const { mode: _, ...rest } = positionOrSize;
    return rest;
  }
  const isPosition = "x" in positionOrSize;
  if (isPosition) {
    return {
      x: positionOrSize.x / 100 * canvasSize.width,
      y: positionOrSize.y / 100 * canvasSize.height
    };
  } else {
    return {
      width: positionOrSize.width / 100 * canvasSize.width,
      height: positionOrSize.height / 100 * canvasSize.height
    };
  }
}
function getPosition(position, canvasSize) {
  return getPositionOrSize(position, canvasSize);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isString(arg) {
  return typeof arg === "string";
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isObject$1(arg) {
  return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
const randomColorValue = "random", midColorValue = "mid", colorManagers = /* @__PURE__ */ new Map();
function addColorManager(manager) {
  colorManagers.set(manager.key, manager);
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function stringToRgba(input) {
  for (const [, manager] of colorManagers) {
    if (input.startsWith(manager.stringPrefix)) {
      return manager.parseString(input);
    }
  }
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
    return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
  }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
  return result ? {
    a: result[4] !== void 0 ? parseInt(result[4], 16) / 255 : 1,
    b: parseInt(result[3], 16),
    g: parseInt(result[2], 16),
    r: parseInt(result[1], 16)
  } : void 0;
}
function rangeColorToRgb(input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? { value: input } : input;
  if (isString(color.value)) {
    return colorToRgb(color.value, index, useIndex);
  }
  if (isArray(color.value)) {
    return rangeColorToRgb({
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const [, manager] of colorManagers) {
    const res = manager.handleRangeColor(color);
    if (res) {
      return res;
    }
  }
}
function colorToRgb(input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? { value: input } : input;
  if (isString(color.value)) {
    return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
  }
  if (isArray(color.value)) {
    return colorToRgb({
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const [, manager] of colorManagers) {
    const res = manager.handleColor(color);
    if (res) {
      return res;
    }
  }
}
function rangeColorToHsl(color, index, useIndex = true) {
  const rgb = rangeColorToRgb(color, index, useIndex);
  return rgb ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
  const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
    h: 0,
    l: (max + min) / 2,
    s: 0
  };
  if (max !== min) {
    res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
  }
  res.l *= 100;
  res.s *= 100;
  res.h *= 60;
  if (res.h < 0) {
    res.h += 360;
  }
  if (res.h >= 360) {
    res.h -= 360;
  }
  return res;
}
function stringToRgb(input) {
  return stringToRgba(input);
}
function hslToRgb(hsl) {
  const result = { b: 0, g: 0, r: 0 }, hslPercent = {
    h: hsl.h / 360,
    l: hsl.l / 100,
    s: hsl.s / 100
  };
  if (!hslPercent.s) {
    result.r = result.g = result.b = hslPercent.l;
  } else {
    const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
    result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
    result.g = hue2rgb(p, q, hslPercent.h);
    result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
  }
  result.r = Math.floor(result.r * 255);
  result.g = Math.floor(result.g * 255);
  result.b = Math.floor(result.b * 255);
  return result;
}
function hslaToRgba(hsla) {
  const rgbResult = hslToRgb(hsla);
  return {
    a: hsla.a,
    b: rgbResult.b,
    g: rgbResult.g,
    r: rgbResult.r
  };
}
function getRandomRgbColor(min) {
  const fixedMin = min ?? 0;
  return {
    b: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    g: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    r: Math.floor(randomInRange(setRangeValue(fixedMin, 256)))
  };
}
function getStyleFromRgb(color, opacity) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? 1})`;
}
function getStyleFromHsl(color, opacity) {
  return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? 1})`;
}
function colorMix(color1, color2, size1, size2) {
  let rgb1 = color1, rgb2 = color2;
  if (rgb1.r === void 0) {
    rgb1 = hslToRgb(color1);
  }
  if (rgb2.r === void 0) {
    rgb2 = hslToRgb(color2);
  }
  return {
    b: mix(rgb1.b, rgb2.b, size1, size2),
    g: mix(rgb1.g, rgb2.g, size1, size2),
    r: mix(rgb1.r, rgb2.r, size1, size2)
  };
}
function getLinkColor(p1, p2, linkColor) {
  if (linkColor === randomColorValue) {
    return getRandomRgbColor();
  } else if (linkColor === midColorValue) {
    const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = (p2 == null ? void 0 : p2.getFillColor()) ?? (p2 == null ? void 0 : p2.getStrokeColor());
    if (sourceColor && destColor && p2) {
      return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
    } else {
      const hslColor = sourceColor ?? destColor;
      if (hslColor) {
        return hslToRgb(hslColor);
      }
    }
  } else {
    return linkColor;
  }
}
function getLinkRandomColor(optColor, blink, consent) {
  const color = isString(optColor) ? optColor : optColor.value;
  if (color === randomColorValue) {
    if (consent) {
      return rangeColorToRgb({
        value: color
      });
    }
    if (blink) {
      return randomColorValue;
    }
    return midColorValue;
  } else if (color === midColorValue) {
    return midColorValue;
  } else {
    return rangeColorToRgb({
      value: color
    });
  }
}
function getHslFromAnimation(animation) {
  return animation !== void 0 ? {
    h: animation.h.value,
    s: animation.s.value,
    l: animation.l.value
  } : void 0;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
  const resColor = {
    h: {
      enable: false,
      value: hsl.h
    },
    s: {
      enable: false,
      value: hsl.s
    },
    l: {
      enable: false,
      value: hsl.l
    }
  };
  if (animationOptions) {
    setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
    setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
    setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
  }
  return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
  colorValue.enable = colorAnimation.enable;
  if (colorValue.enable) {
    colorValue.velocity = getRangeValue(colorAnimation.speed) / 100 * reduceFactor;
    colorValue.decay = 1 - getRangeValue(colorAnimation.decay);
    colorValue.status = "increasing";
    colorValue.loops = 0;
    colorValue.maxLoops = getRangeValue(colorAnimation.count);
    colorValue.time = 0;
    colorValue.delayTime = getRangeValue(colorAnimation.delay) * 1e3;
    if (!colorAnimation.sync) {
      colorValue.velocity *= getRandom();
      colorValue.value *= getRandom();
    }
    colorValue.initialValue = colorValue.value;
  } else {
    colorValue.velocity = 0;
  }
}
function drawLine(context, begin, end) {
  context.beginPath();
  context.moveTo(begin.x, begin.y);
  context.lineTo(end.x, end.y);
  context.closePath();
}
function drawTriangle(context, p1, p2, p3) {
  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p3.x, p3.y);
  context.closePath();
}
function paintBase(context, dimension, baseColor) {
  context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
  context.fillRect(0, 0, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
  if (!image) {
    return;
  }
  context.globalAlpha = opacity;
  context.drawImage(image, 0, 0, dimension.width, dimension.height);
  context.globalAlpha = 1;
}
function clear(context, dimension) {
  context.clearRect(0, 0, dimension.width, dimension.height);
}
function drawParticle(data) {
  const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data;
  const pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : 0), rotateData = {
    sin: Math.sin(angle),
    cos: Math.cos(angle)
  }, transformData = {
    a: rotateData.cos * (transform.a ?? 1),
    b: rotateData.sin * (transform.b ?? 1),
    c: -rotateData.sin * (transform.c ?? 1),
    d: rotateData.cos * (transform.d ?? 1)
  };
  context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
  context.beginPath();
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  const shadowColor = particle.shadowColor;
  if (shadow.enable && shadowColor) {
    context.shadowBlur = shadow.blur;
    context.shadowColor = getStyleFromRgb(shadowColor);
    context.shadowOffsetX = shadow.offset.x;
    context.shadowOffsetY = shadow.offset.y;
  }
  if (colorStyles.fill) {
    context.fillStyle = colorStyles.fill;
  }
  const strokeWidth = particle.strokeWidth ?? 0;
  context.lineWidth = strokeWidth;
  if (colorStyles.stroke) {
    context.strokeStyle = colorStyles.stroke;
  }
  drawShape(container, context, particle, radius, opacity, delta);
  if (strokeWidth > 0) {
    context.stroke();
  }
  if (particle.close) {
    context.closePath();
  }
  if (particle.fill) {
    context.fill();
  }
  drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
  context.globalCompositeOperation = "source-over";
  context.setTransform(1, 0, 0, 1, 0, 0);
}
function drawShape(container, context, particle, radius, opacity, delta) {
  if (!particle.shape) {
    return;
  }
  const drawer = container.drawers.get(particle.shape);
  if (!drawer) {
    return;
  }
  drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
  if (!particle.shape) {
    return;
  }
  const drawer = container.drawers.get(particle.shape);
  if (!drawer || !drawer.afterEffect) {
    return;
  }
  drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawPlugin(context, plugin, delta) {
  if (!plugin.draw) {
    return;
  }
  plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
  if (!plugin.drawParticle) {
    return;
  }
  plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
  return {
    h: color.h,
    s: color.s,
    l: color.l + (type === "darken" ? -1 : 1) * value
  };
}
function setTransformValue(factor, newFactor, key) {
  const newValue = newFactor[key];
  if (newValue !== void 0) {
    factor[key] = (factor[key] ?? 1) * newValue;
  }
}
class Canvas {
  constructor(container) {
    this.container = container;
    this._applyPostDrawUpdaters = (particle) => {
      for (const updater of this._postDrawUpdaters) {
        updater.afterDraw && updater.afterDraw(particle);
      }
    };
    this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
      for (const updater of this._preDrawUpdaters) {
        if (updater.getColorStyles) {
          const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
          if (fill) {
            colorStyles.fill = fill;
          }
          if (stroke) {
            colorStyles.stroke = stroke;
          }
        }
        if (updater.getTransformValues) {
          const updaterTransform = updater.getTransformValues(particle);
          for (const key in updaterTransform) {
            setTransformValue(transform, updaterTransform, key);
          }
        }
        updater.beforeDraw && updater.beforeDraw(particle);
      }
    };
    this._applyResizePlugins = () => {
      for (const plugin of this._resizePlugins) {
        plugin.resize && plugin.resize();
      }
    };
    this._getPluginParticleColors = (particle) => {
      let fColor, sColor;
      for (const plugin of this._colorPlugins) {
        if (!fColor && plugin.particleFillColor) {
          fColor = rangeColorToHsl(plugin.particleFillColor(particle));
        }
        if (!sColor && plugin.particleStrokeColor) {
          sColor = rangeColorToHsl(plugin.particleStrokeColor(particle));
        }
        if (fColor && sColor) {
          break;
        }
      }
      return [fColor, sColor];
    };
    this._initCover = () => {
      const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = rangeColorToRgb(color);
      if (coverRgb) {
        const coverColor = {
          ...coverRgb,
          a: cover.opacity
        };
        this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
      }
    };
    this._initStyle = () => {
      const element = this.element, options = this.container.actualOptions;
      if (!element) {
        return;
      }
      if (this._fullScreen) {
        this._originalStyle = deepExtend({}, element.style);
        this._setFullScreenStyle();
      } else {
        this._resetOriginalStyle();
      }
      for (const key in options.style) {
        if (!key || !options.style) {
          continue;
        }
        const value = options.style[key];
        if (!value) {
          continue;
        }
        element.style.setProperty(key, value, "important");
      }
    };
    this._initTrail = async () => {
      const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
      if (!trail.enable) {
        return;
      }
      if (trailFill.color) {
        const fillColor = rangeColorToRgb(trailFill.color);
        if (!fillColor) {
          return;
        }
        const trail2 = options.particles.move.trail;
        this._trailFill = {
          color: {
            ...fillColor
          },
          opacity: 1 / trail2.length
        };
      } else {
        await new Promise((resolve, reject) => {
          if (!trailFill.image) {
            return;
          }
          const img = document.createElement("img");
          img.addEventListener("load", () => {
            this._trailFill = {
              image: img,
              opacity: 1 / trail.length
            };
            resolve();
          });
          img.addEventListener("error", (evt) => {
            reject(evt.error);
          });
          img.src = trailFill.image;
        });
      }
    };
    this._paintBase = (baseColor) => {
      this.draw((ctx) => paintBase(ctx, this.size, baseColor));
    };
    this._paintImage = (image, opacity) => {
      this.draw((ctx) => paintImage(ctx, this.size, image, opacity));
    };
    this._repairStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      this._safeMutationObserver((observer) => observer.disconnect());
      this._initStyle();
      this.initBackground();
      this._safeMutationObserver((observer) => observer.observe(element, { attributes: true }));
    };
    this._resetOriginalStyle = () => {
      const element = this.element, originalStyle = this._originalStyle;
      if (!(element && originalStyle)) {
        return;
      }
      const style = element.style;
      style.position = originalStyle.position;
      style.zIndex = originalStyle.zIndex;
      style.top = originalStyle.top;
      style.left = originalStyle.left;
      style.width = originalStyle.width;
      style.height = originalStyle.height;
    };
    this._safeMutationObserver = (callback) => {
      if (!this._mutationObserver) {
        return;
      }
      callback(this._mutationObserver);
    };
    this._setFullScreenStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      const priority = "important", style = element.style;
      style.setProperty("position", "fixed", priority);
      style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), priority);
      style.setProperty("top", "0", priority);
      style.setProperty("left", "0", priority);
      style.setProperty("width", "100%", priority);
      style.setProperty("height", "100%", priority);
    };
    this.size = {
      height: 0,
      width: 0
    };
    this._context = null;
    this._generated = false;
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > 0 && trailFill) {
      if (trailFill.color) {
        this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
      } else if (trailFill.image) {
        this._paintImage(trailFill.image, trailFill.opacity);
      }
    } else {
      this.draw((ctx) => {
        clear(ctx, this.size);
      });
    }
  }
  destroy() {
    this.stop();
    if (this._generated) {
      const element = this.element;
      element && element.remove();
    } else {
      this._resetOriginalStyle();
    }
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  draw(cb) {
    const ctx = this._context;
    if (!ctx) {
      return;
    }
    return cb(ctx);
  }
  drawParticle(particle, delta) {
    if (particle.spawning || particle.destroyed) {
      return;
    }
    const radius = particle.getRadius();
    if (radius <= 0) {
      return;
    }
    const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
    let [fColor, sColor] = this._getPluginParticleColors(particle);
    if (!fColor) {
      fColor = pfColor;
    }
    if (!sColor) {
      sColor = psColor;
    }
    if (!fColor && !sColor) {
      return;
    }
    this.draw((ctx) => {
      var _a;
      const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = particle.bubble.opacity ?? ((_a = particle.opacity) == null ? void 0 : _a.value) ?? 1, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
        fill: fColor ? getStyleFromHsl(fColor, zOpacity) : void 0
      };
      colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
      this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
      drawParticle({
        container,
        context: ctx,
        particle,
        delta,
        colorStyles,
        backgroundMask: options.backgroundMask.enable,
        composite: options.backgroundMask.composite,
        radius: radius * (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate,
        opacity: zOpacity,
        shadow: particle.options.shadow,
        transform
      });
      this._applyPostDrawUpdaters(particle);
    });
  }
  drawParticlePlugin(plugin, particle, delta) {
    this.draw((ctx) => drawParticlePlugin(ctx, plugin, particle, delta));
  }
  drawPlugin(plugin, delta) {
    this.draw((ctx) => drawPlugin(ctx, plugin, delta));
  }
  async init() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = safeMutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes" && record.attributeName === "style") {
          this._repairStyle();
        }
      }
    });
    this.resize();
    this._initStyle();
    this._initCover();
    try {
      await this._initTrail();
    } catch (e) {
      getLogger().error(e);
    }
    this.initBackground();
    this._safeMutationObserver((obs) => {
      if (!this.element) {
        return;
      }
      obs.observe(this.element, { attributes: true });
    });
    this.initUpdaters();
    this.initPlugins();
    this.paint();
  }
  initBackground() {
    const options = this.container.actualOptions, background = options.background, element = this.element;
    if (!element) {
      return;
    }
    const elementStyle = element.style;
    if (!elementStyle) {
      return;
    }
    if (background.color) {
      const color = rangeColorToRgb(background.color);
      elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
    } else {
      elementStyle.backgroundColor = "";
    }
    elementStyle.backgroundImage = background.image || "";
    elementStyle.backgroundPosition = background.position || "";
    elementStyle.backgroundRepeat = background.repeat || "";
    elementStyle.backgroundSize = background.size || "";
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, plugin] of this.container.plugins) {
      if (plugin.resize) {
        this._resizePlugins.push(plugin);
      }
      if (plugin.particleFillColor || plugin.particleStrokeColor) {
        this._colorPlugins.push(plugin);
      }
    }
  }
  initUpdaters() {
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    for (const updater of this.container.particles.updaters) {
      if (updater.afterDraw) {
        this._postDrawUpdaters.push(updater);
      }
      if (updater.getColorStyles || updater.getTransformValues || updater.beforeDraw) {
        this._preDrawUpdaters.push(updater);
      }
    }
  }
  loadCanvas(canvas) {
    if (this._generated && this.element) {
      this.element.remove();
    }
    this._generated = canvas.dataset && generatedAttribute in canvas.dataset ? canvas.dataset[generatedAttribute] === "true" : this._generated;
    this.element = canvas;
    this.element.ariaHidden = "true";
    this._originalStyle = deepExtend({}, this.element.style);
    this.size.height = canvas.offsetHeight;
    this.size.width = canvas.offsetWidth;
    this._context = this.element.getContext("2d");
    this._safeMutationObserver((obs) => {
      if (!this.element) {
        return;
      }
      obs.observe(this.element, { attributes: true });
    });
    this.container.retina.init();
    this.initBackground();
  }
  paint() {
    const options = this.container.actualOptions;
    this.draw((ctx) => {
      if (options.backgroundMask.enable && options.backgroundMask.cover) {
        clear(ctx, this.size);
        this._paintBase(this._coverColorStyle);
      } else {
        this._paintBase();
      }
    });
  }
  resize() {
    if (!this.element) {
      return false;
    }
    const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
      width: this.element.offsetWidth * pxRatio,
      height: this.element.offsetHeight * pxRatio
    };
    if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) {
      return false;
    }
    const oldSize = { ...size };
    this.element.width = size.width = this.element.offsetWidth * pxRatio;
    this.element.height = size.height = this.element.offsetHeight * pxRatio;
    if (this.container.started) {
      this.resizeFactor = {
        width: size.width / oldSize.width,
        height: size.height / oldSize.height
      };
    }
    return true;
  }
  stop() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = void 0;
    this.draw((ctx) => clear(ctx, this.size));
  }
  async windowResize() {
    if (!this.element || !this.resize()) {
      return;
    }
    const container = this.container, needsRefresh = container.updateActualOptions();
    container.particles.setDensity();
    this._applyResizePlugins();
    if (needsRefresh) {
      await container.refresh();
    }
  }
}
function manageListener(element, event, handler, add, options) {
  if (add) {
    let addOptions = { passive: true };
    if (isBoolean(options)) {
      addOptions.capture = options;
    } else if (options !== void 0) {
      addOptions = options;
    }
    element.addEventListener(event, handler, addOptions);
  } else {
    const removeOptions = options;
    element.removeEventListener(event, handler, removeOptions);
  }
}
class EventListeners {
  constructor(container) {
    this.container = container;
    this._doMouseTouchClick = (e) => {
      const container2 = this.container, options = container2.actualOptions;
      if (this._canPush) {
        const mouseInteractivity = container2.interactivity.mouse, mousePos = mouseInteractivity.position;
        if (!mousePos) {
          return;
        }
        mouseInteractivity.clickPosition = { ...mousePos };
        mouseInteractivity.clickTime = (/* @__PURE__ */ new Date()).getTime();
        const onClick = options.interactivity.events.onClick;
        executeOnSingleOrMultiple(onClick.mode, (mode) => this.container.handleClickMode(mode));
      }
      if (e.type === "touchend") {
        setTimeout(() => this._mouseTouchFinish(), 500);
      }
    };
    this._handleThemeChange = (e) => {
      const mediaEvent = e, container2 = this.container, options = container2.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme2) => theme2.name === themeName);
      if (theme && theme.default.auto) {
        container2.loadTheme(themeName);
      }
    };
    this._handleVisibilityChange = () => {
      const container2 = this.container, options = container2.actualOptions;
      this._mouseTouchFinish();
      if (!options.pauseOnBlur) {
        return;
      }
      if (document && document.hidden) {
        container2.pageHidden = true;
        container2.pause();
      } else {
        container2.pageHidden = false;
        if (container2.getAnimationStatus()) {
          container2.play(true);
        } else {
          container2.draw(true);
        }
      }
    };
    this._handleWindowResize = async () => {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
        delete this._resizeTimeout;
      }
      this._resizeTimeout = setTimeout(async () => {
        const canvas = this.container.canvas;
        canvas && await canvas.windowResize();
      }, this.container.actualOptions.interactivity.events.resize.delay * 1e3);
    };
    this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      const interactivityEl = container2.interactivity.element;
      if (!interactivityEl) {
        return;
      }
      const html = interactivityEl, canvasEl = container2.canvas.element;
      if (canvasEl) {
        canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
      }
      if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
        return;
      }
      manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
      manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
      manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
      if (!options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add);
      } else {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add);
        manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
        manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
      }
      manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
      manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
    };
    this._manageListeners = (add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container2.canvas.element;
      let mouseLeaveTmpEvent = mouseLeaveEvent;
      if (detectType === "window") {
        container2.interactivity.element = window;
        mouseLeaveTmpEvent = mouseOutEvent;
      } else if (detectType === "parent" && canvasEl) {
        container2.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
      } else {
        container2.interactivity.element = canvasEl;
      }
      this._manageMediaMatch(add);
      this._manageResize(add);
      this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
      if (document) {
        manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
      }
    };
    this._manageMediaMatch = (add) => {
      const handlers = this._handlers, mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)");
      if (!mediaMatch) {
        return;
      }
      if (mediaMatch.addEventListener !== void 0) {
        manageListener(mediaMatch, "change", handlers.themeChange, add);
        return;
      }
      if (mediaMatch.addListener === void 0) {
        return;
      }
      if (add) {
        mediaMatch.addListener(handlers.oldThemeChange);
      } else {
        mediaMatch.removeListener(handlers.oldThemeChange);
      }
    };
    this._manageResize = (add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.events.resize) {
        return;
      }
      if (typeof ResizeObserver === "undefined") {
        manageListener(window, resizeEvent, handlers.resize, add);
        return;
      }
      const canvasEl = container2.canvas.element;
      if (this._resizeObserver && !add) {
        if (canvasEl) {
          this._resizeObserver.unobserve(canvasEl);
        }
        this._resizeObserver.disconnect();
        delete this._resizeObserver;
      } else if (!this._resizeObserver && add && canvasEl) {
        this._resizeObserver = new ResizeObserver(async (entries) => {
          const entry = entries.find((e) => e.target === canvasEl);
          if (!entry) {
            return;
          }
          await this._handleWindowResize();
        });
        this._resizeObserver.observe(canvasEl);
      }
    };
    this._mouseDown = () => {
      const { interactivity } = this.container;
      if (!interactivity) {
        return;
      }
      const { mouse } = interactivity;
      mouse.clicking = true;
      mouse.downPosition = mouse.position;
    };
    this._mouseTouchClick = (e) => {
      const container2 = this.container, options = container2.actualOptions, { mouse } = container2.interactivity;
      mouse.inside = true;
      let handled = false;
      const mousePosition = mouse.position;
      if (!mousePosition || !options.interactivity.events.onClick.enable) {
        return;
      }
      for (const [, plugin] of container2.plugins) {
        if (!plugin.clickPositionValid) {
          continue;
        }
        handled = plugin.clickPositionValid(mousePosition);
        if (handled) {
          break;
        }
      }
      if (!handled) {
        this._doMouseTouchClick(e);
      }
      mouse.clicking = false;
    };
    this._mouseTouchFinish = () => {
      const interactivity = this.container.interactivity;
      if (!interactivity) {
        return;
      }
      const mouse = interactivity.mouse;
      delete mouse.position;
      delete mouse.clickPosition;
      delete mouse.downPosition;
      interactivity.status = mouseLeaveEvent;
      mouse.inside = false;
      mouse.clicking = false;
    };
    this._mouseTouchMove = (e) => {
      const container2 = this.container, options = container2.actualOptions, interactivity = container2.interactivity, canvasEl = container2.canvas.element;
      if (!interactivity || !interactivity.element) {
        return;
      }
      interactivity.mouse.inside = true;
      let pos;
      if (e.type.startsWith("pointer")) {
        this._canPush = true;
        const mouseEvent = e;
        if (interactivity.element === window) {
          if (canvasEl) {
            const clientRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.clientX - clientRect.left,
              y: mouseEvent.clientY - clientRect.top
            };
          }
        } else if (options.interactivity.detectsOn === "parent") {
          const source = mouseEvent.target, target = mouseEvent.currentTarget;
          if (source && target && canvasEl) {
            const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
              y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
            };
          } else {
            pos = {
              x: mouseEvent.offsetX ?? mouseEvent.clientX,
              y: mouseEvent.offsetY ?? mouseEvent.clientY
            };
          }
        } else if (mouseEvent.target === canvasEl) {
          pos = {
            x: mouseEvent.offsetX ?? mouseEvent.clientX,
            y: mouseEvent.offsetY ?? mouseEvent.clientY
          };
        }
      } else {
        this._canPush = e.type !== "touchmove";
        if (canvasEl) {
          const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - 1], canvasRect = canvasEl.getBoundingClientRect();
          pos = {
            x: lastTouch.clientX - (canvasRect.left ?? 0),
            y: lastTouch.clientY - (canvasRect.top ?? 0)
          };
        }
      }
      const pxRatio = container2.retina.pixelRatio;
      if (pos) {
        pos.x *= pxRatio;
        pos.y *= pxRatio;
      }
      interactivity.mouse.position = pos;
      interactivity.status = mouseMoveEvent;
    };
    this._touchEnd = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchFinish();
    };
    this._touchEndClick = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchClick(e);
    };
    this._touchStart = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.set(touch.identifier, performance.now());
      }
      this._mouseTouchMove(e);
    };
    this._canPush = true;
    this._touches = /* @__PURE__ */ new Map();
    this._handlers = {
      mouseDown: () => this._mouseDown(),
      mouseLeave: () => this._mouseTouchFinish(),
      mouseMove: (e) => this._mouseTouchMove(e),
      mouseUp: (e) => this._mouseTouchClick(e),
      touchStart: (e) => this._touchStart(e),
      touchMove: (e) => this._mouseTouchMove(e),
      touchEnd: (e) => this._touchEnd(e),
      touchCancel: (e) => this._touchEnd(e),
      touchEndClick: (e) => this._touchEndClick(e),
      visibilityChange: () => this._handleVisibilityChange(),
      themeChange: (e) => this._handleThemeChange(e),
      oldThemeChange: (e) => this._handleThemeChange(e),
      resize: () => {
        this._handleWindowResize();
      }
    };
  }
  addListeners() {
    this._manageListeners(true);
  }
  removeListeners() {
    this._manageListeners(false);
  }
}
class OptionsColor {
  constructor() {
    this.value = "";
  }
  static create(source, data) {
    const color = new OptionsColor();
    color.load(source);
    if (data !== void 0) {
      if (isString(data) || isArray(data)) {
        color.load({ value: data });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    if ((data == null ? void 0 : data.value) === void 0) {
      return;
    }
    this.value = data.value;
  }
}
class Background {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
    if (data.position !== void 0) {
      this.position = data.position;
    }
    if (data.repeat !== void 0) {
      this.repeat = data.repeat;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
}
class BackgroundMaskCover {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#fff";
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
}
class BackgroundMask {
  constructor() {
    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover();
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.composite !== void 0) {
      this.composite = data.composite;
    }
    if (data.cover !== void 0) {
      const cover = data.cover;
      const color = isString(data.cover) ? { color: data.cover } : data.cover;
      this.cover.load(cover.color !== void 0 ? cover : { color });
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
}
class FullScreen {
  constructor() {
    this.enable = true;
    this.zIndex = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.zIndex !== void 0) {
      this.zIndex = data.zIndex;
    }
  }
}
class ClickEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
  }
}
class DivEvent {
  constructor() {
    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = "circle";
  }
  get el() {
    return this.elementId;
  }
  set el(value) {
    this.elementId = value;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(value) {
    this.ids = value;
  }
  get ids() {
    return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
  }
  set ids(value) {
    this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
  }
  load(data) {
    if (!data) {
      return;
    }
    const ids = data.ids ?? data.elementId ?? data.el;
    if (ids !== void 0) {
      this.ids = ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
}
class Parallax {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.force !== void 0) {
      this.force = data.force;
    }
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
  }
}
class HoverEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.parallax.load(data.parallax);
  }
}
class ResizeEvent {
  constructor() {
    this.delay = 0.5;
    this.enable = true;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
}
class Events {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent();
    this.resize = new ResizeEvent();
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(value) {
    this.onClick = value;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(value) {
    this.onDiv = value;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(value) {
    this.onHover = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.onClick.load(data.onClick ?? data.onclick);
    const onDiv = data.onDiv ?? data.ondiv;
    if (onDiv !== void 0) {
      this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
        const tmp = new DivEvent();
        tmp.load(t);
        return tmp;
      });
    }
    this.onHover.load(data.onHover ?? data.onhover);
    if (isBoolean(data.resize)) {
      this.resize.enable = data.resize;
    } else {
      this.resize.load(data.resize);
    }
  }
}
class Modes {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (!this._container) {
      return;
    }
    const interactors = this._engine.plugins.interactors.get(this._container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      if (!interactor.loadModeOptions) {
        continue;
      }
      interactor.loadModeOptions(this, data);
    }
  }
}
class Interactivity {
  constructor(engine, container) {
    this.detectsOn = "window";
    this.events = new Events();
    this.modes = new Modes(engine, container);
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(value) {
    this.detectsOn = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    const detectsOn = data.detectsOn ?? data.detect_on;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data.events);
    this.modes.load(data.modes);
  }
}
class ManualParticle {
  load(data) {
    if (!data) {
      return;
    }
    if (data.position) {
      this.position = {
        x: data.position.x ?? 50,
        y: data.position.y ?? 50,
        mode: data.position.mode ?? "percent"
      };
    }
    if (data.options) {
      this.options = deepExtend({}, data.options);
    }
  }
}
class Responsive {
  constructor() {
    this.maxWidth = Infinity;
    this.options = {};
    this.mode = "canvas";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.maxWidth !== void 0) {
      this.maxWidth = data.maxWidth;
    }
    if (data.mode !== void 0) {
      if (data.mode === "screen") {
        this.mode = "screen";
      } else {
        this.mode = "canvas";
      }
    }
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
}
class ThemeDefault {
  constructor() {
    this.auto = false;
    this.mode = "any";
    this.value = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.auto !== void 0) {
      this.auto = data.auto;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
}
class Theme {
  constructor() {
    this.name = "";
    this.default = new ThemeDefault();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    this.default.load(data.default);
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
}
class ColorAnimation {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.offset = 0;
    this.speed = 1;
    this.delay = 0;
    this.decay = 0;
    this.sync = true;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
}
class HslAnimation {
  constructor() {
    this.h = new ColorAnimation();
    this.s = new ColorAnimation();
    this.l = new ColorAnimation();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.h.load(data.h);
    this.s.load(data.s);
    this.l.load(data.l);
  }
}
class AnimatableColor extends OptionsColor {
  constructor() {
    super();
    this.animation = new HslAnimation();
  }
  static create(source, data) {
    const color = new AnimatableColor();
    color.load(source);
    if (data !== void 0) {
      if (isString(data) || isArray(data)) {
        color.load({ value: data });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    const colorAnimation = data.animation;
    if (colorAnimation !== void 0) {
      if (colorAnimation.enable !== void 0) {
        this.animation.h.load(colorAnimation);
      } else {
        this.animation.load(data.animation);
      }
    }
  }
}
class CollisionsAbsorb {
  constructor() {
    this.speed = 2;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
  }
}
class CollisionsOverlap {
  constructor() {
    this.enable = true;
    this.retries = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.retries !== void 0) {
      this.retries = data.retries;
    }
  }
}
class AnimationOptions {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 1;
    this.decay = 0;
    this.delay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
}
class RangedAnimationOptions extends AnimationOptions {
  constructor() {
    super();
    this.mode = "auto";
    this.startValue = "random";
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.minimumValue !== void 0) {
      this.minimumValue = data.minimumValue;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
  }
}
class Random {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.minimumValue !== void 0) {
      this.minimumValue = data.minimumValue;
    }
  }
}
class ValueWithRandom {
  constructor() {
    this.random = new Random();
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (isBoolean(data.random)) {
      this.random.enable = data.random;
    } else {
      this.random.load(data.random);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value, this.random.enable ? this.random.minimumValue : void 0);
    }
  }
}
class ParticlesBounceFactor extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
}
class ParticlesBounce {
  constructor() {
    this.horizontal = new ParticlesBounceFactor();
    this.vertical = new ParticlesBounceFactor();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.horizontal.load(data.horizontal);
    this.vertical.load(data.vertical);
  }
}
class Collisions {
  constructor() {
    this.absorb = new CollisionsAbsorb();
    this.bounce = new ParticlesBounce();
    this.enable = false;
    this.maxSpeed = 50;
    this.mode = "bounce";
    this.overlap = new CollisionsOverlap();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.absorb.load(data.absorb);
    this.bounce.load(data.bounce);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.overlap.load(data.overlap);
  }
}
class MoveAngle {
  constructor() {
    this.offset = 0;
    this.value = 90;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value);
    }
  }
}
class MoveAttract {
  constructor() {
    this.distance = 200;
    this.enable = false;
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(value) {
    this.rotate.x = value;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(value) {
    this.rotate.y = value;
  }
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = setRangeValue(data.distance);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const rotateX = ((_a = data.rotate) == null ? void 0 : _a.x) ?? data.rotateX;
    if (rotateX !== void 0) {
      this.rotate.x = rotateX;
    }
    const rotateY = ((_b = data.rotate) == null ? void 0 : _b.y) ?? data.rotateY;
    if (rotateY !== void 0) {
      this.rotate.y = rotateY;
    }
  }
}
class MoveCenter {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.mode = "percent";
    this.radius = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.x !== void 0) {
      this.x = data.x;
    }
    if (data.y !== void 0) {
      this.y = data.y;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
}
class MoveGravity {
  constructor() {
    this.acceleration = 9.81;
    this.enable = false;
    this.inverse = false;
    this.maxSpeed = 50;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.inverse !== void 0) {
      this.inverse = data.inverse;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
  }
}
class MovePath {
  constructor() {
    this.clamp = true;
    this.delay = new ValueWithRandom();
    this.enable = false;
    this.options = {};
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.clamp !== void 0) {
      this.clamp = data.clamp;
    }
    this.delay.load(data.delay);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.generator = data.generator;
    if (data.options) {
      this.options = deepExtend(this.options, data.options);
    }
  }
}
class MoveTrailFill {
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
  }
}
class MoveTrail {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fill = new MoveTrailFill();
  }
  get fillColor() {
    return this.fill.color;
  }
  set fillColor(value) {
    this.fill.load({ color: value });
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.fill !== void 0 || data.fillColor !== void 0) {
      this.fill.load(data.fill || { color: data.fillColor });
    }
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
}
class OutModes {
  constructor() {
    this.default = "out";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    this.bottom = data.bottom ?? data.default;
    this.left = data.left ?? data.default;
    this.right = data.right ?? data.default;
    this.top = data.top ?? data.default;
  }
}
class Spin {
  constructor() {
    this.acceleration = 0;
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.position) {
      this.position = deepExtend({}, data.position);
    }
  }
}
class Move {
  constructor() {
    this.angle = new MoveAngle();
    this.attract = new MoveAttract();
    this.center = new MoveCenter();
    this.decay = 0;
    this.distance = {};
    this.direction = "none";
    this.drift = 0;
    this.enable = false;
    this.gravity = new MoveGravity();
    this.path = new MovePath();
    this.outModes = new OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.spin = new Spin();
    this.straight = false;
    this.trail = new MoveTrail();
    this.vibrate = false;
    this.warp = false;
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(value) {
    this.collisions = value;
  }
  get collisions() {
    return false;
  }
  set collisions(_) {
  }
  get noise() {
    return this.path;
  }
  set noise(value) {
    this.path = value;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(value) {
    this.outModes.default = value;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(value) {
    this.outMode = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
    this.attract.load(data.attract);
    this.center.load(data.center);
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    if (data.distance !== void 0) {
      this.distance = isNumber(data.distance) ? {
        horizontal: data.distance,
        vertical: data.distance
      } : { ...data.distance };
    }
    if (data.drift !== void 0) {
      this.drift = setRangeValue(data.drift);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.gravity.load(data.gravity);
    const outModes = data.outModes ?? data.outMode ?? data.out_mode;
    if (outModes !== void 0) {
      if (isObject$1(outModes)) {
        this.outModes.load(outModes);
      } else {
        this.outModes.load({
          default: outModes
        });
      }
    }
    this.path.load(data.path ?? data.noise);
    if (data.random !== void 0) {
      this.random = data.random;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    this.spin.load(data.spin);
    if (data.straight !== void 0) {
      this.straight = data.straight;
    }
    this.trail.load(data.trail);
    if (data.vibrate !== void 0) {
      this.vibrate = data.vibrate;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
}
class OpacityAnimation extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = "none";
    this.speed = 2;
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    if ((data == null ? void 0 : data.opacity_min) !== void 0 && data.minimumValue === void 0) {
      data.minimumValue = data.opacity_min;
    }
    super.load(data);
    if (!data) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
  }
}
class Opacity extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new OpacityAnimation();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    const animation = data.animation ?? data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
}
class ParticlesDensity {
  constructor() {
    this.enable = false;
    this.width = 1920;
    this.height = 1080;
  }
  get area() {
    return this.width;
  }
  set area(value) {
    this.width = value;
  }
  get factor() {
    return this.height;
  }
  set factor(value) {
    this.height = value;
  }
  get value_area() {
    return this.area;
  }
  set value_area(value) {
    this.area = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const width = data.width ?? data.area ?? data.value_area;
    if (width !== void 0) {
      this.width = width;
    }
    const height = data.height ?? data.factor;
    if (height !== void 0) {
      this.height = height;
    }
  }
}
class ParticlesNumber {
  constructor() {
    this.density = new ParticlesDensity();
    this.limit = 0;
    this.value = 0;
  }
  get max() {
    return this.limit;
  }
  set max(value) {
    this.limit = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.density.load(data.density);
    const limit = data.limit ?? data.max;
    if (limit !== void 0) {
      this.limit = limit;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
}
class Shadow {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset === void 0) {
      return;
    }
    if (data.offset.x !== void 0) {
      this.offset.x = data.offset.x;
    }
    if (data.offset.y !== void 0) {
      this.offset.y = data.offset.y;
    }
  }
}
const charKey = "character", charAltKey = "char", imageKey = "image", imageAltKey = "images", polygonKey = "polygon", polygonAltKey = "star";
class Shape {
  constructor() {
    this.loadShape = (item, mainKey, altKey, altOverride) => {
      if (!item) {
        return;
      }
      const itemIsArray = isArray(item), emptyValue = itemIsArray ? [] : {}, mainDifferentValues = itemIsArray !== isArray(this.options[mainKey]), altDifferentValues = itemIsArray !== isArray(this.options[altKey]);
      if (mainDifferentValues) {
        this.options[mainKey] = emptyValue;
      }
      if (altDifferentValues && altOverride) {
        this.options[altKey] = emptyValue;
      }
      this.options[mainKey] = deepExtend(this.options[mainKey] ?? emptyValue, item);
      if (!this.options[altKey] || altOverride) {
        this.options[altKey] = deepExtend(this.options[altKey] ?? emptyValue, item);
      }
    };
    this.close = true;
    this.fill = true;
    this.options = {};
    this.type = "circle";
  }
  get character() {
    return this.options[charKey] ?? this.options[charAltKey];
  }
  set character(value) {
    this.options[charAltKey] = this.options[charKey] = value;
  }
  get custom() {
    return this.options;
  }
  set custom(value) {
    this.options = value;
  }
  get image() {
    return this.options[imageKey] ?? this.options[imageAltKey];
  }
  set image(value) {
    this.options[imageAltKey] = this.options[imageKey] = value;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
  get polygon() {
    return this.options[polygonKey] ?? this.options[polygonAltKey];
  }
  set polygon(value) {
    this.options[polygonAltKey] = this.options[polygonKey] = value;
  }
  get stroke() {
    return [];
  }
  set stroke(_value) {
  }
  load(data) {
    if (!data) {
      return;
    }
    const options = data.options ?? data.custom;
    if (options !== void 0) {
      for (const shape in options) {
        const item = options[shape];
        if (item) {
          this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
        }
      }
    }
    this.loadShape(data.character, charKey, charAltKey, true);
    this.loadShape(data.polygon, polygonKey, polygonAltKey, false);
    this.loadShape(data.image ?? data.images, imageKey, imageAltKey, true);
    if (data.close !== void 0) {
      this.close = data.close;
    }
    if (data.fill !== void 0) {
      this.fill = data.fill;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
}
class SizeAnimation extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = "none";
    this.speed = 5;
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    if ((data == null ? void 0 : data.size_min) !== void 0 && data.minimumValue === void 0) {
      data.minimumValue = data.size_min;
    }
    super.load(data);
    if (!data) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
  }
}
class Size extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new SizeAnimation();
    this.random.minimumValue = 1;
    this.value = 3;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    const animation = data.animation ?? data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
}
class Stroke {
  constructor() {
    this.width = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = AnimatableColor.create(this.color, data.color);
    }
    if (data.width !== void 0) {
      this.width = setRangeValue(data.width);
    }
    if (data.opacity !== void 0) {
      this.opacity = setRangeValue(data.opacity);
    }
  }
}
class ZIndex extends ValueWithRandom {
  constructor() {
    super();
    this.opacityRate = 1;
    this.sizeRate = 1;
    this.velocityRate = 1;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.opacityRate !== void 0) {
      this.opacityRate = data.opacityRate;
    }
    if (data.sizeRate !== void 0) {
      this.sizeRate = data.sizeRate;
    }
    if (data.velocityRate !== void 0) {
      this.velocityRate = data.velocityRate;
    }
  }
}
class ParticlesOptions {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
    this.bounce = new ParticlesBounce();
    this.collisions = new Collisions();
    this.color = new AnimatableColor();
    this.color.value = "#fff";
    this.groups = {};
    this.move = new Move();
    this.number = new ParticlesNumber();
    this.opacity = new Opacity();
    this.reduceDuplicates = false;
    this.shadow = new Shadow();
    this.shape = new Shape();
    this.size = new Size();
    this.stroke = new Stroke();
    this.zIndex = new ZIndex();
  }
  load(data) {
    var _a, _b, _c;
    if (!data) {
      return;
    }
    this.bounce.load(data.bounce);
    this.color.load(AnimatableColor.create(this.color, data.color));
    if (data.groups !== void 0) {
      for (const group in data.groups) {
        const item = data.groups[group];
        if (item !== void 0) {
          this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
        }
      }
    }
    this.move.load(data.move);
    this.number.load(data.number);
    this.opacity.load(data.opacity);
    if (data.reduceDuplicates !== void 0) {
      this.reduceDuplicates = data.reduceDuplicates;
    }
    this.shape.load(data.shape);
    this.size.load(data.size);
    this.shadow.load(data.shadow);
    this.zIndex.load(data.zIndex);
    const collisions = ((_a = data.move) == null ? void 0 : _a.collisions) ?? ((_b = data.move) == null ? void 0 : _b.bounce);
    if (collisions !== void 0) {
      this.collisions.enable = collisions;
    }
    this.collisions.load(data.collisions);
    if (data.interactivity !== void 0) {
      this.interactivity = deepExtend({}, data.interactivity);
    }
    const strokeToLoad = data.stroke ?? ((_c = data.shape) == null ? void 0 : _c.stroke);
    if (strokeToLoad) {
      this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t) => {
        const tmp = new Stroke();
        tmp.load(t);
        return tmp;
      });
    }
    if (this._container) {
      const updaters = this._engine.plugins.updaters.get(this._container);
      if (updaters) {
        for (const updater of updaters) {
          if (updater.loadOptions) {
            updater.loadOptions(this, data);
          }
        }
      }
      const interactors = this._engine.plugins.interactors.get(this._container);
      if (interactors) {
        for (const interactor of interactors) {
          if (interactor.loadParticlesOptions) {
            interactor.loadParticlesOptions(this, data);
          }
        }
      }
    }
  }
}
function loadOptions(options, ...sourceOptionsArr) {
  for (const sourceOptions of sourceOptionsArr) {
    options.load(sourceOptions);
  }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
  const options = new ParticlesOptions(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
class Options {
  constructor(engine, container) {
    this._findDefaultTheme = (mode) => {
      return this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme) => theme.default.value && theme.default.mode === "any");
    };
    this._importPreset = (preset) => {
      this.load(this._engine.plugins.getPreset(preset));
    };
    this._engine = engine;
    this._container = container;
    this.autoPlay = true;
    this.background = new Background();
    this.backgroundMask = new BackgroundMask();
    this.defaultThemes = {};
    this.delay = 0;
    this.fullScreen = new FullScreen();
    this.detectRetina = true;
    this.duration = 0;
    this.fpsLimit = 120;
    this.interactivity = new Interactivity(engine, container);
    this.manualParticles = [];
    this.particles = loadParticlesOptions(this._engine, this._container);
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = true;
    this.responsive = [];
    this.smooth = false;
    this.style = {};
    this.themes = [];
    this.zLayers = 100;
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(value) {
    this.fullScreen.load(value);
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(value) {
    this.fpsLimit = value;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(value) {
    this.detectRetina = value;
  }
  load(data) {
    var _a, _b;
    if (!data) {
      return;
    }
    if (data.preset !== void 0) {
      executeOnSingleOrMultiple(data.preset, (preset) => this._importPreset(preset));
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    const detectRetina = data.detectRetina ?? data.retina_detect;
    if (detectRetina !== void 0) {
      this.detectRetina = detectRetina;
    }
    if (data.duration !== void 0) {
      this.duration = setRangeValue(data.duration);
    }
    const fpsLimit = data.fpsLimit ?? data.fps_limit;
    if (fpsLimit !== void 0) {
      this.fpsLimit = fpsLimit;
    }
    if (data.pauseOnBlur !== void 0) {
      this.pauseOnBlur = data.pauseOnBlur;
    }
    if (data.pauseOnOutsideViewport !== void 0) {
      this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
    }
    if (data.zLayers !== void 0) {
      this.zLayers = data.zLayers;
    }
    this.background.load(data.background);
    const fullScreen = data.fullScreen ?? data.backgroundMode;
    if (isBoolean(fullScreen)) {
      this.fullScreen.enable = fullScreen;
    } else {
      this.fullScreen.load(fullScreen);
    }
    this.backgroundMask.load(data.backgroundMask);
    this.interactivity.load(data.interactivity);
    if (data.manualParticles) {
      this.manualParticles = data.manualParticles.map((t) => {
        const tmp = new ManualParticle();
        tmp.load(t);
        return tmp;
      });
    }
    this.particles.load(data.particles);
    this.style = deepExtend(this.style, data.style);
    this._engine.plugins.loadOptions(this, data);
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
    const interactors = this._engine.plugins.interactors.get(this._container);
    if (interactors) {
      for (const interactor of interactors) {
        if (interactor.loadOptions) {
          interactor.loadOptions(this, data);
        }
      }
    }
    if (data.responsive !== void 0) {
      for (const responsive of data.responsive) {
        const optResponsive = new Responsive();
        optResponsive.load(responsive);
        this.responsive.push(optResponsive);
      }
    }
    this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
    if (data.themes !== void 0) {
      for (const theme of data.themes) {
        const existingTheme = this.themes.find((t) => t.name === theme.name);
        if (!existingTheme) {
          const optTheme = new Theme();
          optTheme.load(theme);
          this.themes.push(optTheme);
        } else {
          existingTheme.load(theme);
        }
      }
    }
    this.defaultThemes.dark = (_a = this._findDefaultTheme("dark")) == null ? void 0 : _a.name;
    this.defaultThemes.light = (_b = this._findDefaultTheme("light")) == null ? void 0 : _b.name;
  }
  setResponsive(width, pxRatio, defaultOptions) {
    this.load(defaultOptions);
    const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
    this.load(responsiveOptions == null ? void 0 : responsiveOptions.options);
    return responsiveOptions == null ? void 0 : responsiveOptions.maxWidth;
  }
  setTheme(name) {
    if (name) {
      const chosenTheme = this.themes.find((theme) => theme.name === name);
      if (chosenTheme) {
        this.load(chosenTheme.options);
      }
    } else {
      const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? "dark" : "light");
      if (defaultTheme) {
        this.load(defaultTheme.options);
      }
    }
  }
}
class InteractionManager {
  constructor(engine, container) {
    this.container = container;
    this._engine = engine;
    this._interactors = engine.plugins.getInteractors(this.container, true);
    this._externalInteractors = [];
    this._particleInteractors = [];
  }
  async externalInteract(delta) {
    for (const interactor of this._externalInteractors) {
      interactor.isEnabled() && await interactor.interact(delta);
    }
  }
  handleClickMode(mode) {
    for (const interactor of this._externalInteractors) {
      interactor.handleClickMode && interactor.handleClickMode(mode);
    }
  }
  init() {
    this._externalInteractors = [];
    this._particleInteractors = [];
    for (const interactor of this._interactors) {
      switch (interactor.type) {
        case "external":
          this._externalInteractors.push(interactor);
          break;
        case "particles":
          this._particleInteractors.push(interactor);
          break;
      }
      interactor.init();
    }
  }
  async particlesInteract(particle, delta) {
    for (const interactor of this._externalInteractors) {
      interactor.clear(particle, delta);
    }
    for (const interactor of this._particleInteractors) {
      interactor.isEnabled(particle) && await interactor.interact(particle, delta);
    }
  }
  async reset(particle) {
    for (const interactor of this._externalInteractors) {
      interactor.isEnabled() && interactor.reset(particle);
    }
    for (const interactor of this._particleInteractors) {
      interactor.isEnabled(particle) && interactor.reset(particle);
    }
  }
}
const fixOutMode = (data) => {
  if (!isInArray(data.outMode, data.checkModes)) {
    return;
  }
  const diameter = data.radius * 2;
  if (data.coord > data.maxCoord - diameter) {
    data.setCb(-data.radius);
  } else if (data.coord < diameter) {
    data.setCb(data.radius);
  }
};
class Particle {
  constructor(engine, id, container, position, overrideOptions, group) {
    this.container = container;
    this._calcPosition = (container2, position2, zIndex, tryCount = 0) => {
      for (const [, plugin] of container2.plugins) {
        const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position2, this) : void 0;
        if (pluginPos) {
          return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
        }
      }
      const canvasSize = container2.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
        size: canvasSize,
        position: position2
      }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: ["bounce", "bounce-horizontal"],
          coord: pos.x,
          maxCoord: container2.canvas.size.width,
          setCb: (value) => pos.x += value,
          radius
        });
      }, fixVertical = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: ["bounce", "bounce-vertical"],
          coord: pos.y,
          maxCoord: container2.canvas.size.height,
          setCb: (value) => pos.y += value,
          radius
        });
      };
      fixHorizontal(outModes.left ?? outModes.default);
      fixHorizontal(outModes.right ?? outModes.default);
      fixVertical(outModes.top ?? outModes.default);
      fixVertical(outModes.bottom ?? outModes.default);
      if (this._checkOverlap(pos, tryCount)) {
        return this._calcPosition(container2, void 0, zIndex, tryCount + 1);
      }
      return pos;
    };
    this._calculateVelocity = () => {
      const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
      if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
        return res;
      }
      const rad = Math.PI / 180 * getRangeValue(moveOptions.angle.value), radOffset = Math.PI / 180 * getRangeValue(moveOptions.angle.offset), range = {
        left: radOffset - rad / 2,
        right: radOffset + rad / 2
      };
      if (!moveOptions.straight) {
        res.angle += randomInRange(setRangeValue(range.left, range.right));
      }
      if (moveOptions.random && typeof moveOptions.speed === "number") {
        res.length *= getRandom();
      }
      return res;
    };
    this._checkOverlap = (pos, tryCount = 0) => {
      const collisionsOptions = this.options.collisions, radius = this.getRadius();
      if (!collisionsOptions.enable) {
        return false;
      }
      const overlapOptions = collisionsOptions.overlap;
      if (overlapOptions.enable) {
        return false;
      }
      const retries = overlapOptions.retries;
      if (retries >= 0 && tryCount > retries) {
        throw new Error(`${errorPrefix} particle is overlapping and can't be placed`);
      }
      return !!this.container.particles.find((particle) => getDistance(pos, particle.position) < radius + particle.getRadius());
    };
    this._getRollColor = (color) => {
      if (!color || !this.roll || !this.backColor && !this.roll.alter) {
        return color;
      }
      const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor(((this.roll.angle ?? 0) + backSum) / (Math.PI / backFactor)) % 2;
      if (!rolled) {
        return color;
      }
      if (this.backColor) {
        return this.backColor;
      }
      if (this.roll.alter) {
        return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
      }
      return color;
    };
    this._initPosition = (position2) => {
      const container2 = this.container, zIndexValue = getRangeValue(this.options.zIndex.value);
      this.position = this._calcPosition(container2, position2, clamp(zIndexValue, 0, container2.zLayers));
      this.initialPosition = this.position.copy();
      const canvasSize = container2.canvas.size;
      this.moveCenter = {
        ...getPosition(this.options.move.center, canvasSize),
        radius: this.options.move.center.radius ?? 0,
        mode: this.options.move.center.mode ?? "percent"
      };
      this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
      switch (this.options.move.direction) {
        case "inside":
          this.outType = "inside";
          break;
        case "outside":
          this.outType = "outside";
          break;
      }
      this.offset = Vector.origin;
    };
    this._loadShapeData = (shapeOptions, reduceDuplicates) => {
      const shapeData = shapeOptions.options[this.shape];
      if (!shapeData) {
        return;
      }
      return deepExtend({
        close: shapeOptions.close,
        fill: shapeOptions.fill
      }, itemFromSingleOrMultiple(shapeData, this.id, reduceDuplicates));
    };
    this._engine = engine;
    this.init(id, position, overrideOptions, group);
  }
  destroy(override) {
    if (this.unbreakable || this.destroyed) {
      return;
    }
    this.destroyed = true;
    this.bubble.inRange = false;
    this.slow.inRange = false;
    const container = this.container, pathGenerator = this.pathGenerator;
    for (const [, plugin] of container.plugins) {
      if (plugin.particleDestroyed) {
        plugin.particleDestroyed(this, override);
      }
    }
    for (const updater of container.particles.updaters) {
      if (updater.particleDestroyed) {
        updater.particleDestroyed(this, override);
      }
    }
    if (pathGenerator) {
      pathGenerator.reset(this);
    }
  }
  draw(delta) {
    const container = this.container;
    for (const [, plugin] of container.plugins) {
      container.canvas.drawParticlePlugin(plugin, this, delta);
    }
    container.canvas.drawParticle(this, delta);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.color));
  }
  getMass() {
    return this.getRadius() ** 2 * Math.PI / 2;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.strokeColor));
  }
  init(id, position, overrideOptions, group) {
    const container = this.container, engine = this._engine;
    this.id = id;
    this.group = group;
    this.fill = true;
    this.pathRotation = false;
    this.close = true;
    this.lastPathTime = 0;
    this.destroyed = false;
    this.unbreakable = false;
    this.rotation = 0;
    this.misplaced = false;
    this.retina = {
      maxDistance: {}
    };
    this.outType = "normal";
    this.ignoresResizeRatio = true;
    const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container, mainOptions.particles), shapeType = particlesOptions.shape.type, { reduceDuplicates } = particlesOptions;
    this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
    const shapeOptions = particlesOptions.shape;
    if (overrideOptions && overrideOptions.shape && overrideOptions.shape.type) {
      const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
      if (shape) {
        this.shape = shape;
        shapeOptions.load(overrideOptions.shape);
      }
    }
    this.shapeData = this._loadShapeData(shapeOptions, reduceDuplicates);
    particlesOptions.load(overrideOptions);
    const shapeData = this.shapeData;
    if (shapeData) {
      particlesOptions.load(shapeData.particles);
    }
    const interactivity = new Interactivity(engine, container);
    interactivity.load(container.actualOptions.interactivity);
    interactivity.load(particlesOptions.interactivity);
    this.interactivity = interactivity;
    this.fill = (shapeData == null ? void 0 : shapeData.fill) ?? particlesOptions.shape.fill;
    this.close = (shapeData == null ? void 0 : shapeData.close) ?? particlesOptions.shape.close;
    this.options = particlesOptions;
    const pathOptions = this.options.move.path;
    this.pathDelay = getValue(pathOptions.delay) * 1e3;
    if (pathOptions.generator) {
      this.pathGenerator = this._engine.plugins.getPathGenerator(pathOptions.generator);
      if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
        this.pathGenerator.init(container);
      }
    }
    container.retina.initParticle(this);
    this.size = initParticleNumericAnimationValue(this.options.size, pxRatio);
    this.bubble = {
      inRange: false
    };
    this.slow = {
      inRange: false,
      factor: 1
    };
    this._initPosition(position);
    this.initialVelocity = this._calculateVelocity();
    this.velocity = this.initialVelocity.copy();
    this.moveDecay = 1 - getRangeValue(this.options.move.decay);
    const particles = container.particles;
    particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
    particles.lastZIndex = this.position.z;
    this.zIndexFactor = this.position.z / container.zLayers;
    this.sides = 24;
    let drawer = container.drawers.get(this.shape);
    if (!drawer) {
      drawer = this._engine.plugins.getShapeDrawer(this.shape);
      if (drawer) {
        container.drawers.set(this.shape, drawer);
      }
    }
    if (drawer && drawer.loadShape) {
      drawer.loadShape(this);
    }
    const sideCountFunc = drawer == null ? void 0 : drawer.getSidesCount;
    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }
    this.spawning = false;
    this.shadowColor = rangeColorToRgb(this.options.shadow.color);
    for (const updater of container.particles.updaters) {
      updater.init(this);
    }
    for (const mover of container.particles.movers) {
      mover.init && mover.init(this);
    }
    if (drawer && drawer.particleInit) {
      drawer.particleInit(container, this);
    }
    for (const [, plugin] of container.plugins) {
      plugin.particleCreated && plugin.particleCreated(this);
    }
  }
  isInsideCanvas() {
    const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
    return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    for (const updater of this.container.particles.updaters) {
      updater.reset && updater.reset(this);
    }
  }
}
class Point {
  constructor(position, particle) {
    this.position = position;
    this.particle = particle;
  }
}
class Range {
  constructor(x, y) {
    this.position = {
      x,
      y
    };
  }
}
class Rectangle extends Range {
  constructor(x, y, width, height) {
    super(x, y);
    this.size = {
      height,
      width
    };
  }
  contains(point) {
    const w = this.size.width, h = this.size.height, pos = this.position;
    return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
  }
  intersects(range) {
    if (range instanceof Circle) {
      range.intersects(this);
    }
    const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
    return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
  }
}
class Circle extends Range {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  contains(point) {
    return getDistance(point, this.position) <= this.radius;
  }
  intersects(range) {
    const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
    if (range instanceof Circle) {
      const rSum = r + range.radius, dist = Math.sqrt(distPos.x ** 2 + distPos.y ** 2);
      return rSum > dist;
    } else if (range instanceof Rectangle) {
      const { width, height } = range.size, edges = Math.pow(distPos.x - width, 2) + Math.pow(distPos.y - height, 2);
      return edges <= r ** 2 || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
    }
    return false;
  }
}
class QuadTree {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this._subdivide = () => {
      const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity: capacity2 } = this;
      for (let i = 0; i < 4; i++) {
        this._subs.push(new QuadTree(new Rectangle(x + width / 2 * (i % 2), y + height / 2 * (Math.round(i / 2) - i % 2), width / 2, height / 2), capacity2));
      }
      this._divided = true;
    };
    this._points = [];
    this._divided = false;
    this._subs = [];
  }
  insert(point) {
    if (!this.rectangle.contains(point.position)) {
      return false;
    }
    if (this._points.length < this.capacity) {
      this._points.push(point);
      return true;
    }
    if (!this._divided) {
      this._subdivide();
    }
    return this._subs.some((sub) => sub.insert(point));
  }
  query(range, check, found) {
    const res = found || [];
    if (!range.intersects(this.rectangle)) {
      return [];
    }
    for (const p of this._points) {
      if (!range.contains(p.position) && getDistance(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
        continue;
      }
      res.push(p.particle);
    }
    if (this._divided) {
      for (const sub of this._subs) {
        sub.query(range, check, res);
      }
    }
    return res;
  }
  queryCircle(position, radius, check) {
    return this.query(new Circle(position.x, position.y, radius), check);
  }
  queryRectangle(position, size, check) {
    return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
  }
}
const qTreeCapacity = 4;
const qTreeRectangle = (canvasSize) => {
  return new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2);
};
let Particles$3 = class Particles {
  constructor(engine, container) {
    this._applyDensity = (options, manualCount, group) => {
      var _a;
      if (!((_a = options.number.density) == null ? void 0 : _a.enable)) {
        return;
      }
      const numberOptions = options.number, densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
      this.limit = numberOptions.limit * densityFactor;
      if (particlesCount < particlesNumber) {
        this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
      } else if (particlesCount > particlesNumber) {
        this.removeQuantity(particlesCount - particlesNumber, group);
      }
    };
    this._initDensityFactor = (densityOptions) => {
      const container2 = this._container;
      if (!container2.canvas.element || !densityOptions.enable) {
        return 1;
      }
      const canvas = container2.canvas.element, pxRatio = container2.retina.pixelRatio;
      return canvas.width * canvas.height / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
    };
    this._pushParticle = (position, overrideOptions, group, initializer) => {
      try {
        let particle = this.pool.pop();
        if (particle) {
          particle.init(this._nextId, position, overrideOptions, group);
        } else {
          particle = new Particle(this._engine, this._nextId, this._container, position, overrideOptions, group);
        }
        let canAdd = true;
        if (initializer) {
          canAdd = initializer(particle);
        }
        if (!canAdd) {
          return;
        }
        this._array.push(particle);
        this._zArray.push(particle);
        this._nextId++;
        this._engine.dispatchEvent("particleAdded", {
          container: this._container,
          data: {
            particle
          }
        });
        return particle;
      } catch (e) {
        getLogger().warning(`${errorPrefix} adding particle: ${e}`);
        return;
      }
    };
    this._removeParticle = (index, group, override) => {
      const particle = this._array[index];
      if (!particle || particle.group !== group) {
        return false;
      }
      particle.destroy(override);
      const zIdx = this._zArray.indexOf(particle);
      this._array.splice(index, 1);
      this._zArray.splice(zIdx, 1);
      this.pool.push(particle);
      this._engine.dispatchEvent("particleRemoved", {
        container: this._container,
        data: {
          particle
        }
      });
      return true;
    };
    this._engine = engine;
    this._container = container;
    this._nextId = 0;
    this._array = [];
    this._zArray = [];
    this.pool = [];
    this.limit = 0;
    this.needsSort = false;
    this.lastZIndex = 0;
    this._interactionManager = new InteractionManager(engine, container);
    const canvasSize = container.canvas.size;
    this.quadTree = new QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
    this.movers = this._engine.plugins.getMovers(container, true);
    this.updaters = this._engine.plugins.getUpdaters(container, true);
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const container = this._container, options = container.actualOptions;
    for (const particle of options.manualParticles) {
      this.addParticle(particle.position ? getPosition(particle.position, container.canvas.size) : void 0, particle.options);
    }
  }
  addParticle(position, overrideOptions, group, initializer) {
    const container = this._container, options = container.actualOptions, limit = options.particles.number.limit;
    if (limit > 0) {
      const countToRemove = this.count + 1 - limit;
      if (countToRemove > 0) {
        this.removeQuantity(countToRemove);
      }
    }
    return this._pushParticle(position, overrideOptions, group, initializer);
  }
  clear() {
    this._array = [];
    this._zArray = [];
  }
  destroy() {
    this._array = [];
    this._zArray = [];
    this.movers = [];
    this.updaters = [];
  }
  async draw(delta) {
    const container = this._container;
    container.canvas.clear();
    await this.update(delta);
    for (const [, plugin] of container.plugins) {
      container.canvas.drawPlugin(plugin, delta);
    }
    for (const p of this._zArray) {
      p.draw(delta);
    }
  }
  filter(condition) {
    return this._array.filter(condition);
  }
  find(condition) {
    return this._array.find(condition);
  }
  handleClickMode(mode) {
    this._interactionManager.handleClickMode(mode);
  }
  init() {
    var _a;
    const container = this._container, options = container.actualOptions;
    this.lastZIndex = 0;
    this.needsSort = false;
    let handled = false;
    this.updaters = this._engine.plugins.getUpdaters(container, true);
    this._interactionManager.init();
    for (const [, plugin] of container.plugins) {
      if (plugin.particlesInitialization !== void 0) {
        handled = plugin.particlesInitialization();
      }
      if (handled) {
        break;
      }
    }
    this._interactionManager.init();
    for (const [, pathGenerator] of container.pathGenerators) {
      pathGenerator.init(container);
    }
    this.addManualParticles();
    if (!handled) {
      for (const group in options.particles.groups) {
        const groupOptions = options.particles.groups[group];
        for (let i = this.count, j = 0; j < ((_a = groupOptions.number) == null ? void 0 : _a.value) && i < options.particles.number.value; i++, j++) {
          this.addParticle(void 0, groupOptions, group);
        }
      }
      for (let i = this.count; i < options.particles.number.value; i++) {
        this.addParticle();
      }
    }
  }
  push(nb, mouse, overrideOptions, group) {
    this.pushing = true;
    for (let i = 0; i < nb; i++) {
      this.addParticle(mouse == null ? void 0 : mouse.position, overrideOptions, group);
    }
    this.pushing = false;
  }
  async redraw() {
    this.clear();
    this.init();
    await this.draw({ value: 0, factor: 0 });
  }
  remove(particle, group, override) {
    this.removeAt(this._array.indexOf(particle), void 0, group, override);
  }
  removeAt(index, quantity = 1, group, override) {
    if (index < 0 || index > this.count) {
      return;
    }
    let deleted = 0;
    for (let i = index; deleted < quantity && i < this.count; i++) {
      this._removeParticle(i--, group, override) && deleted++;
    }
  }
  removeQuantity(quantity, group) {
    this.removeAt(0, quantity, group);
  }
  setDensity() {
    const options = this._container.actualOptions, groups = options.particles.groups;
    for (const group in groups) {
      this._applyDensity(groups[group], 0, group);
    }
    this._applyDensity(options.particles, options.manualParticles.length);
  }
  async update(delta) {
    const container = this._container, particlesToDelete = /* @__PURE__ */ new Set();
    this.quadTree = new QuadTree(qTreeRectangle(container.canvas.size), qTreeCapacity);
    for (const [, pathGenerator] of container.pathGenerators) {
      pathGenerator.update();
    }
    for (const [, plugin] of container.plugins) {
      plugin.update && plugin.update(delta);
    }
    for (const particle of this._array) {
      const resizeFactor = container.canvas.resizeFactor;
      if (resizeFactor && !particle.ignoresResizeRatio) {
        particle.position.x *= resizeFactor.width;
        particle.position.y *= resizeFactor.height;
        particle.initialPosition.x *= resizeFactor.width;
        particle.initialPosition.y *= resizeFactor.height;
      }
      particle.ignoresResizeRatio = false;
      await this._interactionManager.reset(particle);
      for (const [, plugin] of this._container.plugins) {
        if (particle.destroyed) {
          break;
        }
        if (plugin.particleUpdate) {
          plugin.particleUpdate(particle, delta);
        }
      }
      for (const mover of this.movers) {
        mover.isEnabled(particle) && mover.move(particle, delta);
      }
      if (particle.destroyed) {
        particlesToDelete.add(particle);
        continue;
      }
      this.quadTree.insert(new Point(particle.getPosition(), particle));
    }
    if (particlesToDelete.size) {
      const checkDelete = (p) => !particlesToDelete.has(p);
      this._array = this.filter(checkDelete);
      this._zArray = this._zArray.filter(checkDelete);
      this.pool.push(...particlesToDelete);
    }
    await this._interactionManager.externalInteract(delta);
    for (const particle of this._array) {
      for (const updater of this.updaters) {
        updater.update(particle, delta);
      }
      if (!particle.destroyed && !particle.spawning) {
        await this._interactionManager.particlesInteract(particle, delta);
      }
    }
    delete container.canvas.resizeFactor;
    if (this.needsSort) {
      const zArray = this._zArray;
      zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
      this.lastZIndex = zArray[zArray.length - 1].position.z;
      this.needsSort = false;
    }
  }
};
class Retina {
  constructor(container) {
    this.container = container;
    this.pixelRatio = 1;
    this.reduceFactor = 1;
  }
  init() {
    const container = this.container, options = container.actualOptions;
    this.pixelRatio = !options.detectRetina || isSsr() ? 1 : window.devicePixelRatio;
    this.reduceFactor = 1;
    const ratio = this.pixelRatio;
    if (container.canvas.element) {
      const element = container.canvas.element;
      container.canvas.size.width = element.offsetWidth * ratio;
      container.canvas.size.height = element.offsetHeight * ratio;
    }
    const particles = options.particles, moveOptions = particles.move;
    this.attractDistance = getRangeValue(moveOptions.attract.distance) * ratio;
    this.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
    this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
  }
  initParticle(particle) {
    const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
    props.attractDistance = getRangeValue(moveOptions.attract.distance) * ratio;
    props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
    props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
    props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
    const maxDistance = props.maxDistance;
    maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
    maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
    props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
  }
}
function guardCheck(container) {
  return container && !container.destroyed;
}
function initDelta(value, fpsLimit = 60, smooth = false) {
  return {
    value,
    factor: smooth ? 60 / fpsLimit : 60 * value / 1e3
  };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
  const options = new Options(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
const defaultPathGeneratorKey = "default", defaultPathGenerator = {
  generate: (p) => p.velocity,
  init: () => {
  },
  update: () => {
  },
  reset: () => {
  }
};
class Container {
  constructor(engine, id, sourceOptions) {
    this.id = id;
    this._intersectionManager = (entries) => {
      if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
        return;
      }
      for (const entry of entries) {
        if (entry.target !== this.interactivity.element) {
          continue;
        }
        (entry.isIntersecting ? this.play : this.pause)();
      }
    };
    this._nextFrame = async (timestamp) => {
      try {
        if (!this.smooth && this.lastFrameTime !== void 0 && timestamp < this.lastFrameTime + 1e3 / this.fpsLimit) {
          this.draw(false);
          return;
        }
        this.lastFrameTime ?? (this.lastFrameTime = timestamp);
        const delta = initDelta(timestamp - this.lastFrameTime, this.fpsLimit, this.smooth);
        this.addLifeTime(delta.value);
        this.lastFrameTime = timestamp;
        if (delta.value > 1e3) {
          this.draw(false);
          return;
        }
        await this.particles.draw(delta);
        if (!this.alive()) {
          this.destroy();
          return;
        }
        if (this.getAnimationStatus()) {
          this.draw(false);
        }
      } catch (e) {
        getLogger().error(`${errorPrefix} in animation loop`, e);
      }
    };
    this._engine = engine;
    this.fpsLimit = 120;
    this.smooth = false;
    this._delay = 0;
    this._duration = 0;
    this._lifeTime = 0;
    this._firstStart = true;
    this.started = false;
    this.destroyed = false;
    this._paused = true;
    this.lastFrameTime = 0;
    this.zLayers = 100;
    this.pageHidden = false;
    this._sourceOptions = sourceOptions;
    this._initialSourceOptions = sourceOptions;
    this.retina = new Retina(this);
    this.canvas = new Canvas(this);
    this.particles = new Particles$3(this._engine, this);
    this.pathGenerators = /* @__PURE__ */ new Map();
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.plugins = /* @__PURE__ */ new Map();
    this.drawers = /* @__PURE__ */ new Map();
    this._options = loadContainerOptions(this._engine, this);
    this.actualOptions = loadContainerOptions(this._engine, this);
    this._eventListeners = new EventListeners(this);
    if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
      this._intersectionObserver = new IntersectionObserver((entries) => this._intersectionManager(entries));
    }
    this._engine.dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(callback) {
    if (!guardCheck(this)) {
      return;
    }
    const el = this.interactivity.element;
    if (!el) {
      return;
    }
    const clickOrTouchHandler = (e, pos, radius) => {
      if (!guardCheck(this)) {
        return;
      }
      const pxRatio = this.retina.pixelRatio, posRetina = {
        x: pos.x * pxRatio,
        y: pos.y * pxRatio
      }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
      callback(e, particles);
    };
    const clickHandler = (e) => {
      if (!guardCheck(this)) {
        return;
      }
      const mouseEvent = e, pos = {
        x: mouseEvent.offsetX || mouseEvent.clientX,
        y: mouseEvent.offsetY || mouseEvent.clientY
      };
      clickOrTouchHandler(e, pos, 1);
    };
    const touchStartHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = true;
      touchMoved = false;
    };
    const touchMoveHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touchMoved = true;
    };
    const touchEndHandler = (e) => {
      if (!guardCheck(this)) {
        return;
      }
      if (touched && !touchMoved) {
        const touchEvent = e;
        let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
        if (!lastTouch) {
          lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
          if (!lastTouch) {
            return;
          }
        }
        const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : void 0, pos = {
          x: lastTouch.clientX - (canvasRect ? canvasRect.left : 0),
          y: lastTouch.clientY - (canvasRect ? canvasRect.top : 0)
        };
        clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
      }
      touched = false;
      touchMoved = false;
    };
    const touchCancelHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = false;
      touchMoved = false;
    };
    let touched = false, touchMoved = false;
    el.addEventListener("click", clickHandler);
    el.addEventListener("touchstart", touchStartHandler);
    el.addEventListener("touchmove", touchMoveHandler);
    el.addEventListener("touchend", touchEndHandler);
    el.addEventListener("touchcancel", touchCancelHandler);
  }
  addLifeTime(value) {
    this._lifeTime += value;
  }
  addPath(key, generator, override = false) {
    if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
      return false;
    }
    this.pathGenerators.set(key, generator ?? defaultPathGenerator);
    return true;
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  destroy() {
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    this.particles.destroy();
    this.canvas.destroy();
    for (const [, drawer] of this.drawers) {
      drawer.destroy && drawer.destroy(this);
    }
    for (const key of this.drawers.keys()) {
      this.drawers.delete(key);
    }
    this._engine.plugins.destroy(this);
    this.destroyed = true;
    const mainArr = this._engine.dom(), idx = mainArr.findIndex((t) => t === this);
    if (idx >= 0) {
      mainArr.splice(idx, 1);
    }
    this._engine.dispatchEvent("containerDestroyed", { container: this });
  }
  draw(force) {
    if (!guardCheck(this)) {
      return;
    }
    let refreshTime = force;
    this._drawAnimationFrame = requestAnimationFrame(async (timestamp) => {
      if (refreshTime) {
        this.lastFrameTime = void 0;
        refreshTime = false;
      }
      await this._nextFrame(timestamp);
    });
  }
  async export(type, options = {}) {
    for (const [, plugin] of this.plugins) {
      if (!plugin.export) {
        continue;
      }
      const res = await plugin.export(type, options);
      if (!res.supported) {
        continue;
      }
      return res.blob;
    }
    getLogger().error(`${errorPrefix} - Export plugin with type ${type} not found`);
  }
  getAnimationStatus() {
    return !this._paused && !this.pageHidden && guardCheck(this);
  }
  handleClickMode(mode) {
    if (!guardCheck(this)) {
      return;
    }
    this.particles.handleClickMode(mode);
    for (const [, plugin] of this.plugins) {
      plugin.handleClickMode && plugin.handleClickMode(mode);
    }
  }
  async init() {
    if (!guardCheck(this)) {
      return;
    }
    const shapes = this._engine.plugins.getSupportedShapes();
    for (const type of shapes) {
      const drawer = this._engine.plugins.getShapeDrawer(type);
      if (drawer) {
        this.drawers.set(type, drawer);
      }
    }
    this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
    this.actualOptions = loadContainerOptions(this._engine, this, this._options);
    const availablePlugins = this._engine.plugins.getAvailablePlugins(this);
    for (const [id, plugin] of availablePlugins) {
      this.plugins.set(id, plugin);
    }
    this.retina.init();
    await this.canvas.init();
    this.updateActualOptions();
    this.canvas.initBackground();
    this.canvas.resize();
    this.zLayers = this.actualOptions.zLayers;
    this._duration = getRangeValue(this.actualOptions.duration) * 1e3;
    this._delay = getRangeValue(this.actualOptions.delay) * 1e3;
    this._lifeTime = 0;
    this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
    this.smooth = this.actualOptions.smooth;
    for (const [, drawer] of this.drawers) {
      drawer.init && await drawer.init(this);
    }
    for (const [, plugin] of this.plugins) {
      plugin.init && await plugin.init();
    }
    this._engine.dispatchEvent("containerInit", { container: this });
    this.particles.init();
    this.particles.setDensity();
    for (const [, plugin] of this.plugins) {
      plugin.particlesSetup && plugin.particlesSetup();
    }
    this._engine.dispatchEvent("particlesSetup", { container: this });
  }
  async loadTheme(name) {
    if (!guardCheck(this)) {
      return;
    }
    this._currentTheme = name;
    await this.refresh();
  }
  pause() {
    if (!guardCheck(this)) {
      return;
    }
    if (this._drawAnimationFrame !== void 0) {
      cancelAnimationFrame(this._drawAnimationFrame);
      delete this._drawAnimationFrame;
    }
    if (this._paused) {
      return;
    }
    for (const [, plugin] of this.plugins) {
      plugin.pause && plugin.pause();
    }
    if (!this.pageHidden) {
      this._paused = true;
    }
    this._engine.dispatchEvent("containerPaused", { container: this });
  }
  play(force) {
    if (!guardCheck(this)) {
      return;
    }
    const needsUpdate = this._paused || force;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = false;
      return;
    }
    if (this._paused) {
      this._paused = false;
    }
    if (needsUpdate) {
      for (const [, plugin] of this.plugins) {
        if (plugin.play) {
          plugin.play();
        }
      }
    }
    this._engine.dispatchEvent("containerPlay", { container: this });
    this.draw(needsUpdate || false);
  }
  async refresh() {
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    return this.start();
  }
  async reset() {
    if (!guardCheck(this)) {
      return;
    }
    this._initialSourceOptions = void 0;
    this._options = loadContainerOptions(this._engine, this);
    this.actualOptions = loadContainerOptions(this._engine, this, this._options);
    return this.refresh();
  }
  setNoise(noiseOrGenerator, init2, update) {
    if (!guardCheck(this)) {
      return;
    }
    this.setPath(noiseOrGenerator, init2, update);
  }
  setPath(pathOrGenerator, init2, update) {
    if (!pathOrGenerator || !guardCheck(this)) {
      return;
    }
    const pathGenerator = { ...defaultPathGenerator };
    if (isFunction(pathOrGenerator)) {
      pathGenerator.generate = pathOrGenerator;
      if (init2) {
        pathGenerator.init = init2;
      }
      if (update) {
        pathGenerator.update = update;
      }
    } else {
      const oldGenerator = pathGenerator;
      pathGenerator.generate = pathOrGenerator.generate || oldGenerator.generate;
      pathGenerator.init = pathOrGenerator.init || oldGenerator.init;
      pathGenerator.update = pathOrGenerator.update || oldGenerator.update;
    }
    this.addPath(defaultPathGeneratorKey, pathGenerator, true);
  }
  async start() {
    if (!guardCheck(this) || this.started) {
      return;
    }
    await this.init();
    this.started = true;
    await new Promise((resolve) => {
      this._delayTimeout = setTimeout(async () => {
        this._eventListeners.addListeners();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
          this._intersectionObserver.observe(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
          plugin.start && await plugin.start();
        }
        this._engine.dispatchEvent("containerStarted", { container: this });
        this.play();
        resolve();
      }, this._delay);
    });
  }
  stop() {
    if (!guardCheck(this) || !this.started) {
      return;
    }
    if (this._delayTimeout) {
      clearTimeout(this._delayTimeout);
      delete this._delayTimeout;
    }
    this._firstStart = true;
    this.started = false;
    this._eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.canvas.stop();
    if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
      this._intersectionObserver.unobserve(this.interactivity.element);
    }
    for (const [, plugin] of this.plugins) {
      plugin.stop && plugin.stop();
    }
    for (const key of this.plugins.keys()) {
      this.plugins.delete(key);
    }
    this._sourceOptions = this._options;
    this._engine.dispatchEvent("containerStopped", { container: this });
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
    this.actualOptions.setTheme(this._currentTheme);
    if (this.responsiveMaxWidth === newMaxWidth) {
      return false;
    }
    this.responsiveMaxWidth = newMaxWidth;
    return true;
  }
}
class EventDispatcher {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, listener) {
    this.removeEventListener(type, listener);
    let arr = this._listeners.get(type);
    if (!arr) {
      arr = [];
      this._listeners.set(type, arr);
    }
    arr.push(listener);
  }
  dispatchEvent(type, args) {
    const listeners = this._listeners.get(type);
    listeners && listeners.forEach((handler) => handler(args));
  }
  hasEventListener(type) {
    return !!this._listeners.get(type);
  }
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = /* @__PURE__ */ new Map();
    } else {
      this._listeners.delete(type);
    }
  }
  removeEventListener(type, listener) {
    const arr = this._listeners.get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener);
    if (idx < 0) {
      return;
    }
    if (length === 1) {
      this._listeners.delete(type);
    } else {
      arr.splice(idx, 1);
    }
  }
}
function getItemsFromInitializer(container, map, initializers, force = false) {
  let res = map.get(container);
  if (!res || force) {
    res = [...initializers.values()].map((t) => t(container));
    map.set(container, res);
  }
  return res;
}
class Plugins {
  constructor(engine) {
    this._engine = engine;
    this.plugins = [];
    this._initializers = {
      interactors: /* @__PURE__ */ new Map(),
      movers: /* @__PURE__ */ new Map(),
      updaters: /* @__PURE__ */ new Map()
    };
    this.interactors = /* @__PURE__ */ new Map();
    this.movers = /* @__PURE__ */ new Map();
    this.updaters = /* @__PURE__ */ new Map();
    this.presets = /* @__PURE__ */ new Map();
    this.drawers = /* @__PURE__ */ new Map();
    this.pathGenerators = /* @__PURE__ */ new Map();
  }
  addInteractor(name, initInteractor) {
    this._initializers.interactors.set(name, initInteractor);
  }
  addParticleMover(name, initMover) {
    this._initializers.movers.set(name, initMover);
  }
  addParticleUpdater(name, initUpdater) {
    this._initializers.updaters.set(name, initUpdater);
  }
  addPathGenerator(type, pathGenerator) {
    !this.getPathGenerator(type) && this.pathGenerators.set(type, pathGenerator);
  }
  addPlugin(plugin) {
    !this.getPlugin(plugin.id) && this.plugins.push(plugin);
  }
  addPreset(presetKey, options, override = false) {
    (override || !this.getPreset(presetKey)) && this.presets.set(presetKey, options);
  }
  addShapeDrawer(types, drawer) {
    executeOnSingleOrMultiple(types, (type) => {
      !this.getShapeDrawer(type) && this.drawers.set(type, drawer);
    });
  }
  destroy(container) {
    this.updaters.delete(container);
    this.movers.delete(container);
    this.interactors.delete(container);
  }
  getAvailablePlugins(container) {
    const res = /* @__PURE__ */ new Map();
    for (const plugin of this.plugins) {
      plugin.needsPlugin(container.actualOptions) && res.set(plugin.id, plugin.getPlugin(container));
    }
    return res;
  }
  getInteractors(container, force = false) {
    return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
  }
  getMovers(container, force = false) {
    return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
  }
  getPathGenerator(type) {
    return this.pathGenerators.get(type);
  }
  getPlugin(plugin) {
    return this.plugins.find((t) => t.id === plugin);
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  getShapeDrawer(type) {
    return this.drawers.get(type);
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getUpdaters(container, force = false) {
    return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
  }
  loadOptions(options, sourceOptions) {
    for (const plugin of this.plugins) {
      plugin.loadOptions(options, sourceOptions);
    }
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    for (const updater of updaters) {
      updater.loadOptions && updater.loadOptions(options, ...sourceOptions);
    }
  }
}
async function getDataFromUrl(data) {
  const url = itemFromSingleOrMultiple(data.url, data.index);
  if (!url) {
    return data.fallback;
  }
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
  return data.fallback;
}
function isParamsEmpty(params) {
  return !params.id && !params.element && !params.url && !params.options;
}
function isParams(obj) {
  return !isParamsEmpty(obj);
}
class Engine {
  constructor() {
    this._configs = /* @__PURE__ */ new Map();
    this._domArray = [];
    this._eventDispatcher = new EventDispatcher();
    this._initialized = false;
    this.plugins = new Plugins(this);
  }
  get configs() {
    const res = {};
    for (const [name, config] of this._configs) {
      res[name] = config;
    }
    return res;
  }
  get version() {
    return "2.12.0";
  }
  addConfig(nameOrConfig, config) {
    if (isString(nameOrConfig)) {
      if (config) {
        config.name = nameOrConfig;
        this._configs.set(nameOrConfig, config);
      }
    } else {
      this._configs.set(nameOrConfig.name ?? "default", nameOrConfig);
    }
  }
  addEventListener(type, listener) {
    this._eventDispatcher.addEventListener(type, listener);
  }
  async addInteractor(name, interactorInitializer, refresh = true) {
    this.plugins.addInteractor(name, interactorInitializer);
    await this.refresh(refresh);
  }
  async addMover(name, moverInitializer, refresh = true) {
    this.plugins.addParticleMover(name, moverInitializer);
    await this.refresh(refresh);
  }
  async addParticleUpdater(name, updaterInitializer, refresh = true) {
    this.plugins.addParticleUpdater(name, updaterInitializer);
    await this.refresh(refresh);
  }
  async addPathGenerator(name, generator, refresh = true) {
    this.plugins.addPathGenerator(name, generator);
    await this.refresh(refresh);
  }
  async addPlugin(plugin, refresh = true) {
    this.plugins.addPlugin(plugin);
    await this.refresh(refresh);
  }
  async addPreset(preset, options, override = false, refresh = true) {
    this.plugins.addPreset(preset, options, override);
    await this.refresh(refresh);
  }
  async addShape(shape, drawer, initOrRefresh, afterEffectOrRefresh, destroyOrRefresh, refresh = true) {
    let customDrawer;
    let realRefresh = refresh, realInit, realAfterEffect, realDestroy;
    if (isBoolean(initOrRefresh)) {
      realRefresh = initOrRefresh;
      realInit = void 0;
    } else {
      realInit = initOrRefresh;
    }
    if (isBoolean(afterEffectOrRefresh)) {
      realRefresh = afterEffectOrRefresh;
      realAfterEffect = void 0;
    } else {
      realAfterEffect = afterEffectOrRefresh;
    }
    if (isBoolean(destroyOrRefresh)) {
      realRefresh = destroyOrRefresh;
      realDestroy = void 0;
    } else {
      realDestroy = destroyOrRefresh;
    }
    if (isFunction(drawer)) {
      customDrawer = {
        afterEffect: realAfterEffect,
        destroy: realDestroy,
        draw: drawer,
        init: realInit
      };
    } else {
      customDrawer = drawer;
    }
    this.plugins.addShapeDrawer(shape, customDrawer);
    await this.refresh(realRefresh);
  }
  dispatchEvent(type, args) {
    this._eventDispatcher.dispatchEvent(type, args);
  }
  dom() {
    return this._domArray;
  }
  domItem(index) {
    const dom = this.dom(), item = dom[index];
    if (!item || item.destroyed) {
      dom.splice(index, 1);
      return;
    }
    return item;
  }
  init() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
  }
  async load(tagIdOrOptionsOrParams, options) {
    return this.loadFromArray(tagIdOrOptionsOrParams, options);
  }
  async loadFromArray(tagIdOrOptionsOrParams, optionsOrIndex, index) {
    let params;
    if (!isParams(tagIdOrOptionsOrParams)) {
      params = {};
      if (isString(tagIdOrOptionsOrParams)) {
        params.id = tagIdOrOptionsOrParams;
      } else {
        params.options = tagIdOrOptionsOrParams;
      }
      if (isNumber(optionsOrIndex)) {
        params.index = optionsOrIndex;
      } else {
        params.options = optionsOrIndex ?? params.options;
      }
      params.index = index ?? params.index;
    } else {
      params = tagIdOrOptionsOrParams;
    }
    return this._loadParams(params);
  }
  async loadJSON(tagId, pathConfigJson, index) {
    let url, id;
    if (isNumber(pathConfigJson) || pathConfigJson === void 0) {
      url = tagId;
    } else {
      id = tagId;
      url = pathConfigJson;
    }
    return this._loadParams({ id, url, index });
  }
  async refresh(refresh = true) {
    if (!refresh) {
      return;
    }
    this.dom().forEach((t) => t.refresh());
  }
  removeEventListener(type, listener) {
    this._eventDispatcher.removeEventListener(type, listener);
  }
  async set(id, element, options, index) {
    const params = { index };
    if (isString(id)) {
      params.id = id;
    } else {
      params.element = id;
    }
    if (element instanceof HTMLElement) {
      params.element = element;
    } else {
      params.options = element;
    }
    if (isNumber(options)) {
      params.index = options;
    } else {
      params.options = options ?? params.options;
    }
    return this._loadParams(params);
  }
  async setJSON(id, element, pathConfigJson, index) {
    const params = {};
    if (id instanceof HTMLElement) {
      params.element = id;
      params.url = element;
      params.index = pathConfigJson;
    } else {
      params.id = id;
      params.element = element;
      params.url = pathConfigJson;
      params.index = index;
    }
    return this._loadParams(params);
  }
  setOnClickHandler(callback) {
    const dom = this.dom();
    if (!dom.length) {
      throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
    }
    for (const domItem of dom) {
      domItem.addClickHandler(callback);
    }
  }
  async _loadParams(params) {
    const id = params.id ?? `tsparticles${Math.floor(getRandom() * 1e4)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
    let domContainer = params.element ?? document.getElementById(id);
    if (!domContainer) {
      domContainer = document.createElement("div");
      domContainer.id = id;
      document.body.append(domContainer);
    }
    const currentOptions = itemFromSingleOrMultiple(options, index), dom = this.dom(), oldIndex = dom.findIndex((v) => v.id === id);
    if (oldIndex >= 0) {
      const old = this.domItem(oldIndex);
      if (old && !old.destroyed) {
        old.destroy();
        dom.splice(oldIndex, 1);
      }
    }
    let canvasEl;
    if (domContainer.tagName.toLowerCase() === "canvas") {
      canvasEl = domContainer;
      canvasEl.dataset[generatedAttribute] = "false";
    } else {
      const existingCanvases = domContainer.getElementsByTagName("canvas");
      if (existingCanvases.length) {
        canvasEl = existingCanvases[0];
        canvasEl.dataset[generatedAttribute] = "false";
      } else {
        canvasEl = document.createElement("canvas");
        canvasEl.dataset[generatedAttribute] = "true";
        domContainer.appendChild(canvasEl);
      }
    }
    if (!canvasEl.style.width) {
      canvasEl.style.width = "100%";
    }
    if (!canvasEl.style.height) {
      canvasEl.style.height = "100%";
    }
    const newItem = new Container(this, id, currentOptions);
    if (oldIndex >= 0) {
      dom.splice(oldIndex, 0, newItem);
    } else {
      dom.push(newItem);
    }
    newItem.canvas.loadCanvas(canvasEl);
    await newItem.start();
    return newItem;
  }
}
class HslColorManager {
  constructor() {
    this.key = "hsl";
    this.stringPrefix = "hsl";
  }
  handleColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
      return hslToRgb(hslColor);
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.l !== void 0) {
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
  }
  parseString(input) {
    if (!input.startsWith("hsl")) {
      return;
    }
    const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
    return result ? hslaToRgba({
      a: result.length > 4 ? parseAlpha(result[5]) : 1,
      h: parseInt(result[1], 10),
      l: parseInt(result[3], 10),
      s: parseInt(result[2], 10)
    }) : void 0;
  }
}
class RgbColorManager {
  constructor() {
    this.key = "rgb";
    this.stringPrefix = "rgb";
  }
  handleColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return rgbColor;
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
  }
  parseString(input) {
    if (!input.startsWith(this.stringPrefix)) {
      return;
    }
    const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
    return result ? {
      a: result.length > 4 ? parseAlpha(result[5]) : 1,
      b: parseInt(result[3], 10),
      g: parseInt(result[2], 10),
      r: parseInt(result[1], 10)
    } : void 0;
  }
}
function init() {
  const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
  addColorManager(rgbColorManager);
  addColorManager(hslColorManager);
  const engine = new Engine();
  engine.init();
  return engine;
}
class ExternalInteractorBase {
  constructor(container) {
    this.container = container;
    this.type = "external";
  }
}
class ParticlesInteractorBase {
  constructor(container) {
    this.container = container;
    this.type = "particles";
  }
}
const tsParticles = init();
if (!isSsr()) {
  window.tsParticles = tsParticles;
}
const isObject = (val) => typeof val === "object" && val !== null;
function deepCompare(obj1, obj2, excludeKeyFn = () => false) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  const keys1 = Object.keys(obj1).filter((key) => !excludeKeyFn(key)), keys2 = Object.keys(obj2).filter((key) => !excludeKeyFn(key));
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const value1 = obj1[key], value2 = obj2[key];
    if (isObject(value1) && isObject(value2)) {
      if (value1 === obj2 && value2 === obj1) {
        continue;
      }
      if (!deepCompare(value1, value2, excludeKeyFn)) {
        return false;
      }
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!deepCompareArrays(value1, value2, excludeKeyFn)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
}
function deepCompareArrays(arr1, arr2, excludeKeyFn) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i], val2 = arr2[i];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!deepCompareArrays(val1, val2, excludeKeyFn)) {
        return false;
      }
    } else if (isObject(val1) && isObject(val2)) {
      if (!deepCompare(val1, val2, excludeKeyFn)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
}
const defaultId = "tsparticles";
let Particles$1 = class Particles2 extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
      library: void 0
    };
  }
  destroy() {
    if (!this.state.library) {
      return;
    }
    this.state.library.destroy();
    this.setState({
      library: void 0
    });
  }
  shouldComponentUpdate(nextProps) {
    const nextOptions = nextProps.options ?? nextProps.params, currentOptions = this.props.options ?? this.props.params;
    return nextProps.url !== this.props.url || nextProps.id !== this.props.id || nextProps.canvasClassName !== this.props.canvasClassName || nextProps.className !== this.props.className || nextProps.height !== this.props.height || nextProps.width !== this.props.width || !deepCompare(nextProps.style, this.props.style) || nextProps.init !== this.props.init || nextProps.loaded !== this.props.loaded || !deepCompare(nextOptions, currentOptions, (key) => key.startsWith("_"));
  }
  componentDidUpdate() {
    this.refresh();
  }
  forceUpdate() {
    this.refresh().then(() => {
      super.forceUpdate();
    });
  }
  componentDidMount() {
    (async () => {
      if (this.props.init) {
        await this.props.init(tsParticles);
      }
      this.setState({
        init: true
      }, async () => {
        await this.loadParticles();
      });
    })();
  }
  componentWillUnmount() {
    this.destroy();
  }
  render() {
    const { width, height, className, canvasClassName, id } = this.props;
    return React.createElement(
      "div",
      { className, id },
      React.createElement("canvas", { className: canvasClassName, style: {
        ...this.props.style,
        width,
        height
      } })
    );
  }
  async refresh() {
    this.destroy();
    await this.loadParticles();
  }
  async loadParticles() {
    if (!this.state.init) {
      return;
    }
    const id = this.props.id ?? Particles2.defaultProps.id ?? defaultId, container = await tsParticles.load({
      url: this.props.url,
      id,
      options: this.props.options ?? this.props.params
    });
    if (this.props.container) {
      this.props.container.current = container;
    }
    this.setState({
      library: container
    });
    if (this.props.loaded) {
      await this.props.loaded(container);
    }
  }
};
Particles$1.defaultProps = {
  width: "100%",
  height: "100%",
  options: {},
  style: {},
  url: void 0,
  id: defaultId
};
const Particles$2 = Particles$1;
class Particles3 {
  static init(options) {
    var _a;
    const particles = new Particles3(), selector = options.selector;
    if (!selector) {
      throw new Error("No selector provided");
    }
    const el = document.querySelector(selector);
    if (!el) {
      throw new Error("No element found for selector");
    }
    tsParticles.set(selector.replace(".", "").replace("!", ""), el, {
      fullScreen: {
        enable: false
      },
      particles: {
        color: {
          value: options.color ?? "!000000"
        },
        links: {
          color: "random",
          distance: options.minDistance ?? 120,
          enable: options.connectParticles ?? false
        },
        move: {
          enable: true,
          speed: options.speed ?? 0.5
        },
        number: {
          value: options.maxParticles ?? 100
        },
        size: {
          value: { min: 1, max: options.sizeVariations ?? 3 }
        }
      },
      responsive: (_a = options.responsive) == null ? void 0 : _a.map((responsive) => {
        var _a2, _b, _c, _d, _e;
        return {
          maxWidth: responsive.breakpoint,
          options: {
            particles: {
              color: {
                value: (_a2 = responsive.options) == null ? void 0 : _a2.color
              },
              links: {
                distance: (_b = responsive.options) == null ? void 0 : _b.minDistance,
                enable: (_c = responsive.options) == null ? void 0 : _c.connectParticles
              },
              number: {
                value: options.maxParticles
              },
              move: {
                enable: true,
                speed: (_d = responsive.options) == null ? void 0 : _d.speed
              },
              size: {
                value: (_e = responsive.options) == null ? void 0 : _e.sizeVariations
              }
            }
          }
        };
      })
    }).then((container) => {
      particles._container = container;
    });
    return particles;
  }
  destroy() {
    const container = this._container;
    container && container.destroy();
  }
  pauseAnimation() {
    const container = this._container;
    container && container.pause();
  }
  resumeAnimation() {
    const container = this._container;
    container && container.play();
  }
}
const initParticlesJS = (engine) => {
  const particlesJS = (tagId, options) => {
    return engine.load(tagId, options);
  };
  particlesJS.load = (tagId, pathConfigJson, callback) => {
    engine.loadJSON(tagId, pathConfigJson).then((container) => {
      if (container) {
        callback(container);
      }
    }).catch(() => {
      callback(void 0);
    });
  };
  particlesJS.setOnClickHandler = (callback) => {
    engine.setOnClickHandler(callback);
  };
  const pJSDom = engine.dom();
  return { particlesJS, pJSDom };
};
const initPjs = (engine) => {
  const { particlesJS, pJSDom } = initParticlesJS(engine);
  window.particlesJS = particlesJS;
  window.pJSDom = pJSDom;
  window.Particles = Particles3;
  return { particlesJS, pJSDom, Particles: Particles3 };
};
function applyDistance(particle) {
  const initialPosition = particle.initialPosition, { dx, dy } = getDistances(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
  if (!hDistance && !vDistance) {
    return;
  }
  if ((hDistance && dxFixed >= hDistance || vDistance && dyFixed >= vDistance) && !particle.misplaced) {
    particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
    if (hDistance) {
      particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
    }
    if (vDistance) {
      particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
    }
  } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
    particle.misplaced = false;
  } else if (particle.misplaced) {
    const pos = particle.position, vel = particle.velocity;
    if (hDistance && (pos.x < initialPosition.x && vel.x < 0 || pos.x > initialPosition.x && vel.x > 0)) {
      vel.x *= -getRandom();
    }
    if (vDistance && (pos.y < initialPosition.y && vel.y < 0 || pos.y > initialPosition.y && vel.y > 0)) {
      vel.y *= -getRandom();
    }
  }
}
function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
  applyPath(particle, delta);
  const gravityOptions = particle.gravity, gravityFactor = (gravityOptions == null ? void 0 : gravityOptions.enable) && gravityOptions.inverse ? -1 : 1;
  if (moveDrift && moveSpeed) {
    particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
  }
  if ((gravityOptions == null ? void 0 : gravityOptions.enable) && moveSpeed) {
    particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
  }
  const decay = particle.moveDecay;
  particle.velocity.multTo(decay);
  const velocity = particle.velocity.mult(moveSpeed);
  if ((gravityOptions == null ? void 0 : gravityOptions.enable) && maxSpeed > 0 && (!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) {
    velocity.y = gravityFactor * maxSpeed;
    if (moveSpeed) {
      particle.velocity.y = velocity.y / moveSpeed;
    }
  }
  const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
  velocity.multTo(zVelocityFactor);
  const { position } = particle;
  position.addTo(velocity);
  if (moveOptions.vibrate) {
    position.x += Math.sin(position.x * Math.cos(position.y));
    position.y += Math.cos(position.y * Math.sin(position.x));
  }
}
function spin(particle, moveSpeed) {
  const container = particle.container;
  if (!particle.spin) {
    return;
  }
  const updateFunc = {
    x: particle.spin.direction === "clockwise" ? Math.cos : Math.sin,
    y: particle.spin.direction === "clockwise" ? Math.sin : Math.cos
  };
  particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
  particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
  particle.spin.radius += particle.spin.acceleration;
  const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
  if (particle.spin.radius > maxCanvasSize / 2) {
    particle.spin.radius = maxCanvasSize / 2;
    particle.spin.acceleration *= -1;
  } else if (particle.spin.radius < 0) {
    particle.spin.radius = 0;
    particle.spin.acceleration *= -1;
  }
  particle.spin.angle += moveSpeed / 100 * (1 - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
  var _a;
  const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
  if (!pathEnabled) {
    return;
  }
  if (particle.lastPathTime <= particle.pathDelay) {
    particle.lastPathTime += delta.value;
    return;
  }
  const path = (_a = particle.pathGenerator) == null ? void 0 : _a.generate(particle, delta);
  if (path) {
    particle.velocity.addTo(path);
  }
  if (pathOptions.clamp) {
    particle.velocity.x = clamp(particle.velocity.x, -1, 1);
    particle.velocity.y = clamp(particle.velocity.y, -1, 1);
  }
  particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
  return particle.slow.inRange ? particle.slow.factor : 1;
}
const diffFactor = 2;
class BaseMover {
  constructor() {
    this._initSpin = (particle) => {
      const container = particle.container, options = particle.options, spinOptions = options.move.spin;
      if (!spinOptions.enable) {
        return;
      }
      const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinCenter = {
        x: spinPos.x / 100 * container.canvas.size.width,
        y: spinPos.y / 100 * container.canvas.size.height
      }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
      particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
      particle.spin = {
        center: spinCenter,
        direction: particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
        angle: particle.velocity.angle,
        radius: distance,
        acceleration: particle.retina.spinAcceleration
      };
    };
  }
  init(particle) {
    const options = particle.options, gravityOptions = options.move.gravity;
    particle.gravity = {
      enable: gravityOptions.enable,
      acceleration: getRangeValue(gravityOptions.acceleration),
      inverse: gravityOptions.inverse
    };
    this._initSpin(particle);
  }
  isEnabled(particle) {
    return !particle.destroyed && particle.options.move.enable;
  }
  move(particle, delta) {
    var _a, _b;
    const particleOptions = particle.options, moveOptions = particleOptions.move;
    if (!moveOptions.enable) {
      return;
    }
    const container = particle.container, pxRatio = container.retina.pixelRatio, slowFactor = getProximitySpeedFactor(particle), baseSpeed = ((_a = particle.retina).moveSpeed ?? (_a.moveSpeed = getRangeValue(moveOptions.speed) * pxRatio)) * container.retina.reduceFactor, moveDrift = (_b = particle.retina).moveDrift ?? (_b.moveDrift = getRangeValue(particle.options.move.drift) * pxRatio), maxSize = getRangeMax(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, moveSpeed = baseSpeed * sizeFactor * slowFactor * (delta.factor || 1) / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
    if (moveOptions.spin.enable) {
      spin(particle, moveSpeed);
    } else {
      move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
    }
    applyDistance(particle);
  }
}
async function loadBaseMover(engine, refresh = true) {
  await engine.addMover("base", () => new BaseMover(), refresh);
}
class CircleDrawer {
  draw(context, particle, radius) {
    if (!particle.circleRange) {
      particle.circleRange = { min: 0, max: Math.PI * 2 };
    }
    const circleRange = particle.circleRange;
    context.arc(0, 0, radius, circleRange.min, circleRange.max, false);
  }
  getSidesCount() {
    return 12;
  }
  particleInit(container, particle) {
    const shapeData = particle.shapeData, angle = (shapeData == null ? void 0 : shapeData.angle) ?? {
      max: 360,
      min: 0
    };
    particle.circleRange = !isObject$1(angle) ? {
      min: 0,
      max: angle * Math.PI / 180
    } : { min: angle.min * Math.PI / 180, max: angle.max * Math.PI / 180 };
  }
}
async function loadCircleShape(engine, refresh = true) {
  await engine.addShape("circle", new CircleDrawer(), refresh);
}
function updateColorValue$1(delta, colorValue, valueAnimation, max, decrease) {
  if (!colorValue || !valueAnimation.enable || (colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0)) {
    return;
  }
  if (!colorValue.time) {
    colorValue.time = 0;
  }
  if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
    colorValue.time += delta.value;
  }
  if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
    return;
  }
  const offset = randomInRange(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;
  if (!decrease || colorValue.status === "increasing") {
    colorValue.value += velocity;
    if (colorValue.value > max) {
      if (!colorValue.loops) {
        colorValue.loops = 0;
      }
      colorValue.loops++;
      if (decrease) {
        colorValue.status = "decreasing";
        colorValue.value -= colorValue.value % max;
      }
    }
  } else {
    colorValue.value -= velocity;
    if (colorValue.value < 0) {
      if (!colorValue.loops) {
        colorValue.loops = 0;
      }
      colorValue.loops++;
      colorValue.status = "increasing";
      colorValue.value += colorValue.value;
    }
  }
  if (colorValue.velocity && decay !== 1) {
    colorValue.velocity *= decay;
  }
  if (colorValue.value > max) {
    colorValue.value %= max;
  }
}
function updateColor(particle, delta) {
  const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
  if (!color) {
    return;
  }
  const { h, s, l } = color;
  if (h) {
    updateColorValue$1(delta, h, hAnimation, 360, false);
  }
  if (s) {
    updateColorValue$1(delta, s, sAnimation, 100, true);
  }
  if (l) {
    updateColorValue$1(delta, l, lAnimation, 100, true);
  }
}
class ColorUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const hslColor = rangeColorToHsl(particle.options.color, particle.id, particle.options.reduceDuplicates);
    if (hslColor) {
      particle.color = getHslAnimationFromHsl(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
    return !particle.destroyed && !particle.spawning && ((color == null ? void 0 : color.h.value) !== void 0 && hAnimation.enable || (color == null ? void 0 : color.s.value) !== void 0 && sAnimation.enable || (color == null ? void 0 : color.l.value) !== void 0 && lAnimation.enable);
  }
  update(particle, delta) {
    updateColor(particle, delta);
  }
}
async function loadColorUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("color", (container) => new ColorUpdater(container), refresh);
}
function checkDestroy$1(particle, value, minValue, maxValue) {
  switch (particle.options.opacity.animation.destroy) {
    case "max":
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case "min":
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
function updateOpacity(particle, delta) {
  const data = particle.opacity;
  if (particle.destroyed || !(data == null ? void 0 : data.enable) || (data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0)) {
    return;
  }
  const minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;
  if (!data.time) {
    data.time = 0;
  }
  if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
    data.time += delta.value;
  }
  if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
    return;
  }
  switch (data.status) {
    case "increasing":
      if (data.value >= maxValue) {
        data.status = "decreasing";
        if (!data.loops) {
          data.loops = 0;
        }
        data.loops++;
      } else {
        data.value += (data.velocity ?? 0) * delta.factor;
      }
      break;
    case "decreasing":
      if (data.value <= minValue) {
        data.status = "increasing";
        if (!data.loops) {
          data.loops = 0;
        }
        data.loops++;
      } else {
        data.value -= (data.velocity ?? 0) * delta.factor;
      }
      break;
  }
  if (data.velocity && data.decay !== 1) {
    data.velocity *= decay;
  }
  checkDestroy$1(particle, data.value, minValue, maxValue);
  if (!particle.destroyed) {
    data.value = clamp(data.value, minValue, maxValue);
  }
}
class OpacityUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const opacityOptions = particle.options.opacity;
    particle.opacity = initParticleNumericAnimationValue(opacityOptions, 1);
    const opacityAnimation = opacityOptions.animation;
    if (opacityAnimation.enable) {
      particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / 100 * this.container.retina.reduceFactor;
      if (!opacityAnimation.sync) {
        particle.opacity.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? 0) <= 0 || (particle.opacity.maxLoops ?? 0) > 0 && (particle.opacity.loops ?? 0) < (particle.opacity.maxLoops ?? 0));
  }
  reset(particle) {
    if (particle.opacity) {
      particle.opacity.time = 0;
      particle.opacity.loops = 0;
    }
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateOpacity(particle, delta);
  }
}
async function loadOpacityUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater(container), refresh);
}
function bounceHorizontal(data) {
  if (data.outMode !== "bounce" && data.outMode !== "bounce-horizontal" && data.outMode !== "bounceHorizontal" && data.outMode !== "split" || data.direction !== "left" && data.direction !== "right") {
    return;
  }
  if (data.bounds.right < 0 && data.direction === "left") {
    data.particle.position.x = data.size + data.offset.x;
  } else if (data.bounds.left > data.canvasSize.width && data.direction === "right") {
    data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
  }
  const velocity = data.particle.velocity.x;
  let bounced = false;
  if (data.direction === "right" && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === "left" && data.bounds.left <= 0 && velocity < 0) {
    const newVelocity = getValue(data.particle.options.bounce.horizontal);
    data.particle.velocity.x *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.x + data.size;
  if (data.bounds.right >= data.canvasSize.width && data.direction === "right") {
    data.particle.position.x = data.canvasSize.width - minPos;
  } else if (data.bounds.left <= 0 && data.direction === "left") {
    data.particle.position.x = minPos;
  }
  if (data.outMode === "split") {
    data.particle.destroy();
  }
}
function bounceVertical(data) {
  if (data.outMode !== "bounce" && data.outMode !== "bounce-vertical" && data.outMode !== "bounceVertical" && data.outMode !== "split" || data.direction !== "bottom" && data.direction !== "top") {
    return;
  }
  if (data.bounds.bottom < 0 && data.direction === "top") {
    data.particle.position.y = data.size + data.offset.y;
  } else if (data.bounds.top > data.canvasSize.height && data.direction === "bottom") {
    data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
  }
  const velocity = data.particle.velocity.y;
  let bounced = false;
  if (data.direction === "bottom" && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === "top" && data.bounds.top <= 0 && velocity < 0) {
    const newVelocity = getValue(data.particle.options.bounce.vertical);
    data.particle.velocity.y *= -newVelocity;
    bounced = true;
  }
  if (!bounced) {
    return;
  }
  const minPos = data.offset.y + data.size;
  if (data.bounds.bottom >= data.canvasSize.height && data.direction === "bottom") {
    data.particle.position.y = data.canvasSize.height - minPos;
  } else if (data.bounds.top <= 0 && data.direction === "top") {
    data.particle.position.y = minPos;
  }
  if (data.outMode === "split") {
    data.particle.destroy();
  }
}
class BounceOutMode {
  constructor(container) {
    this.container = container;
    this.modes = [
      "bounce",
      "bounce-vertical",
      "bounce-horizontal",
      "bounceVertical",
      "bounceHorizontal",
      "split"
    ];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    let handled = false;
    for (const [, plugin] of container.plugins) {
      if (plugin.particleBounce !== void 0) {
        handled = plugin.particleBounce(particle, delta, direction);
      }
      if (handled) {
        break;
      }
    }
    if (handled) {
      return;
    }
    const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = container.canvas.size;
    bounceHorizontal({ particle, outMode, direction, bounds, canvasSize, offset, size });
    bounceVertical({ particle, outMode, direction, bounds, canvasSize, offset, size });
  }
}
class DestroyOutMode {
  constructor(container) {
    this.container = container;
    this.modes = ["destroy"];
  }
  update(particle, direction, _delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case "normal":
      case "outside":
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        break;
      case "inside": {
        const { dx, dy } = getDistances(particle.position, particle.moveCenter);
        const { x: vx, y: vy } = particle.velocity;
        if (vx < 0 && dx > particle.moveCenter.radius || vy < 0 && dy > particle.moveCenter.radius || vx >= 0 && dx < -particle.moveCenter.radius || vy >= 0 && dy < -particle.moveCenter.radius) {
          return;
        }
        break;
      }
    }
    container.particles.remove(particle, void 0, true);
  }
}
class NoneOutMode {
  constructor(container) {
    this.container = container;
    this.modes = ["none"];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    if (particle.options.move.distance.horizontal && (direction === "left" || direction === "right") || particle.options.move.distance.vertical && (direction === "top" || direction === "bottom")) {
      return;
    }
    const gravityOptions = particle.options.move.gravity, container = this.container;
    const canvasSize = container.canvas.size;
    const pRadius = particle.getRadius();
    if (!gravityOptions.enable) {
      if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) {
        return;
      }
      if (!isPointInside(particle.position, container.canvas.size, Vector.origin, pRadius, direction)) {
        container.particles.remove(particle);
      }
    } else {
      const position = particle.position;
      if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === "bottom" || gravityOptions.inverse && position.y < -pRadius && direction === "top") {
        container.particles.remove(particle);
      }
    }
  }
}
class OutOutMode {
  constructor(container) {
    this.container = container;
    this.modes = ["out"];
  }
  update(particle, direction, delta, outMode) {
    if (!this.modes.includes(outMode)) {
      return;
    }
    const container = this.container;
    switch (particle.outType) {
      case "inside": {
        const { x: vx, y: vy } = particle.velocity;
        const circVec = Vector.origin;
        circVec.length = particle.moveCenter.radius;
        circVec.angle = particle.velocity.angle + Math.PI;
        circVec.addTo(Vector.create(particle.moveCenter));
        const { dx, dy } = getDistances(particle.position, circVec);
        if (vx <= 0 && dx >= 0 || vy <= 0 && dy >= 0 || vx >= 0 && dx <= 0 || vy >= 0 && dy <= 0) {
          return;
        }
        particle.position.x = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.width
        }));
        particle.position.y = Math.floor(randomInRange({
          min: 0,
          max: container.canvas.size.height
        }));
        const { dx: newDx, dy: newDy } = getDistances(particle.position, particle.moveCenter);
        particle.direction = Math.atan2(-newDy, -newDx);
        particle.velocity.angle = particle.direction;
        break;
      }
      default: {
        if (isPointInside(particle.position, container.canvas.size, Vector.origin, particle.getRadius(), direction)) {
          return;
        }
        switch (particle.outType) {
          case "outside": {
            particle.position.x = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.x;
            particle.position.y = Math.floor(randomInRange({
              min: -particle.moveCenter.radius,
              max: particle.moveCenter.radius
            })) + particle.moveCenter.y;
            const { dx, dy } = getDistances(particle.position, particle.moveCenter);
            if (particle.moveCenter.radius) {
              particle.direction = Math.atan2(dy, dx);
              particle.velocity.angle = particle.direction;
            }
            break;
          }
          case "normal": {
            const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
              bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
              left: -particle.getRadius() - particle.offset.x,
              right: canvasSize.width + particle.getRadius() + particle.offset.x,
              top: -particle.getRadius() - particle.offset.y
            }, sizeValue = particle.getRadius(), nextBounds = calculateBounds(particle.position, sizeValue);
            if (direction === "right" && nextBounds.left > canvasSize.width + particle.offset.x) {
              particle.position.x = newPos.left;
              particle.initialPosition.x = particle.position.x;
              if (!wrap) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            } else if (direction === "left" && nextBounds.right < -particle.offset.x) {
              particle.position.x = newPos.right;
              particle.initialPosition.x = particle.position.x;
              if (!wrap) {
                particle.position.y = getRandom() * canvasSize.height;
                particle.initialPosition.y = particle.position.y;
              }
            }
            if (direction === "bottom" && nextBounds.top > canvasSize.height + particle.offset.y) {
              if (!wrap) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.top;
              particle.initialPosition.y = particle.position.y;
            } else if (direction === "top" && nextBounds.bottom < -particle.offset.y) {
              if (!wrap) {
                particle.position.x = getRandom() * canvasSize.width;
                particle.initialPosition.x = particle.position.x;
              }
              particle.position.y = newPos.bottom;
              particle.initialPosition.y = particle.position.y;
            }
            break;
          }
        }
        break;
      }
    }
  }
}
class OutOfCanvasUpdater {
  constructor(container) {
    this.container = container;
    this._updateOutMode = (particle, delta, outMode, direction) => {
      for (const updater of this.updaters) {
        updater.update(particle, direction, delta, outMode);
      }
    };
    this.updaters = [
      new BounceOutMode(container),
      new DestroyOutMode(container),
      new OutOutMode(container),
      new NoneOutMode(container)
    ];
  }
  init() {
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning;
  }
  update(particle, delta) {
    const outModes = particle.options.move.outModes;
    this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, "bottom");
    this._updateOutMode(particle, delta, outModes.left ?? outModes.default, "left");
    this._updateOutMode(particle, delta, outModes.right ?? outModes.default, "right");
    this._updateOutMode(particle, delta, outModes.top ?? outModes.default, "top");
  }
}
async function loadOutModesUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater(container), refresh);
}
function checkDestroy(particle, value, minValue, maxValue) {
  switch (particle.options.size.animation.destroy) {
    case "max":
      if (value >= maxValue) {
        particle.destroy();
      }
      break;
    case "min":
      if (value <= minValue) {
        particle.destroy();
      }
      break;
  }
}
function updateSize(particle, delta) {
  const data = particle.size;
  if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0)) {
    return;
  }
  const sizeVelocity = (data.velocity ?? 0) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;
  if (!data.time) {
    data.time = 0;
  }
  if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
    data.time += delta.value;
  }
  if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
    return;
  }
  switch (data.status) {
    case "increasing":
      if (data.value >= maxValue) {
        data.status = "decreasing";
        if (!data.loops) {
          data.loops = 0;
        }
        data.loops++;
      } else {
        data.value += sizeVelocity;
      }
      break;
    case "decreasing":
      if (data.value <= minValue) {
        data.status = "increasing";
        if (!data.loops) {
          data.loops = 0;
        }
        data.loops++;
      } else {
        data.value -= sizeVelocity;
      }
  }
  if (data.velocity && decay !== 1) {
    data.velocity *= decay;
  }
  checkDestroy(particle, data.value, minValue, maxValue);
  if (!particle.destroyed) {
    data.value = clamp(data.value, minValue, maxValue);
  }
}
class SizeUpdater {
  init(particle) {
    const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
    if (sizeAnimation.enable) {
      particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;
      if (!sizeAnimation.sync) {
        particle.size.velocity *= getRandom();
      }
    }
  }
  isEnabled(particle) {
    return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? 0) <= 0 || (particle.size.maxLoops ?? 0) > 0 && (particle.size.loops ?? 0) < (particle.size.maxLoops ?? 0));
  }
  reset(particle) {
    particle.size.loops = 0;
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateSize(particle, delta);
  }
}
async function loadSizeUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("size", () => new SizeUpdater(), refresh);
}
async function loadBasic(engine, refresh = true) {
  await loadBaseMover(engine, false);
  await loadCircleShape(engine, false);
  await loadColorUpdater(engine, false);
  await loadOpacityUpdater(engine, false);
  await loadOutModesUpdater(engine, false);
  await loadSizeUpdater(engine, false);
  await engine.refresh(refresh);
}
async function loadEasingQuadPlugin() {
  addEasing("ease-in-quad", (value) => value ** 2);
  addEasing("ease-out-quad", (value) => 1 - (1 - value) ** 2);
  addEasing("ease-in-out-quad", (value) => value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2);
}
class Attract {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.easing = "ease-out-quad";
    this.factor = 1;
    this.maxSpeed = 50;
    this.speed = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
  }
}
let Attractor$1 = class Attractor extends ExternalInteractorBase {
  constructor(engine, container) {
    super(container);
    this._clickAttract = () => {
      const container2 = this.container;
      if (!container2.attract) {
        container2.attract = { particles: [] };
      }
      const { attract } = container2;
      if (!attract.finish) {
        if (!attract.count) {
          attract.count = 0;
        }
        attract.count++;
        if (attract.count === container2.particles.count) {
          attract.finish = true;
        }
      }
      if (attract.clicking) {
        const mousePos = container2.interactivity.mouse.clickPosition, attractRadius = container2.retina.attractModeDistance;
        if (!attractRadius || attractRadius < 0 || !mousePos) {
          return;
        }
        this._processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
      } else if (attract.clicking === false) {
        attract.particles = [];
      }
      return;
    };
    this._hoverAttract = () => {
      const container2 = this.container, mousePos = container2.interactivity.mouse.position, attractRadius = container2.retina.attractModeDistance;
      if (!attractRadius || attractRadius < 0 || !mousePos) {
        return;
      }
      this._processAttract(mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius));
    };
    this._processAttract = (position, attractRadius, area) => {
      const container2 = this.container, attractOptions = container2.actualOptions.interactivity.modes.attract;
      if (!attractOptions) {
        return;
      }
      const query = container2.particles.quadTree.query(area, (p) => this.isEnabled(p));
      for (const particle of query) {
        const { dx, dy, distance } = getDistances(particle.position, position);
        const velocity = attractOptions.speed * attractOptions.factor;
        const attractFactor = clamp(getEasing(attractOptions.easing)(1 - distance / attractRadius) * velocity, 0, attractOptions.maxSpeed);
        const normVec = Vector.create(distance === 0 ? velocity : dx / distance * attractFactor, distance === 0 ? velocity : dy / distance * attractFactor);
        particle.position.subFrom(normVec);
      }
    };
    this._engine = engine;
    if (!container.attract) {
      container.attract = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
      if (!attract || mode !== "attract") {
        return;
      }
      if (!container.attract) {
        container.attract = { particles: [] };
      }
      container.attract.clicking = true;
      container.attract.count = 0;
      for (const particle of container.attract.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      container.attract.particles = [];
      container.attract.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        if (!container.attract) {
          container.attract = { particles: [] };
        }
        container.attract.clicking = false;
      }, attract.duration * 1e3);
    };
  }
  clear() {
  }
  init() {
    const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
    if (!attract) {
      return;
    }
    container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
  }
  async interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;
    if (mouseMoveStatus && hoverEnabled && isInArray("attract", hoverMode)) {
      this._hoverAttract();
    } else if (clickEnabled && isInArray("attract", clickMode)) {
      this._clickAttract();
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events;
    if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
      return false;
    }
    const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
    return isInArray("attract", hoverMode) || isInArray("attract", clickMode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.attract) {
      options.attract = new Attract();
    }
    for (const source of sources) {
      options.attract.load(source == null ? void 0 : source.attract);
    }
  }
  reset() {
  }
};
async function loadExternalAttractInteraction(engine, refresh = true) {
  await engine.addInteractor("externalAttract", (container) => new Attractor$1(engine, container), refresh);
}
class Bounce {
  constructor() {
    this.distance = 200;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
  }
}
class Bouncer extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this._processBounce = (position, radius, area) => {
      const query = this.container.particles.quadTree.query(area, (p) => this.isEnabled(p));
      for (const particle of query) {
        if (area instanceof Circle) {
          circleBounce(circleBounceDataFromParticle(particle), {
            position,
            radius,
            mass: radius ** 2 * Math.PI / 2,
            velocity: Vector.origin,
            factor: Vector.origin
          });
        } else if (area instanceof Rectangle) {
          rectBounce(particle, calculateBounds(position, radius));
        }
      }
    };
    this._processMouseBounce = () => {
      const container2 = this.container, pxRatio = container2.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container2.interactivity.mouse.position, radius = container2.retina.bounceModeDistance;
      if (!radius || radius < 0 || !mousePos) {
        return;
      }
      this._processBounce(mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance));
    };
    this._singleSelectorBounce = (selector, div) => {
      const container2 = this.container, query = document.querySelectorAll(selector);
      if (!query.length) {
        return;
      }
      query.forEach((item) => {
        const elem = item, pxRatio = container2.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
        }, radius = elem.offsetWidth / 2 * pxRatio, tolerance = 10 * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
        this._processBounce(pos, radius, area);
      });
    };
  }
  clear() {
  }
  init() {
    const container = this.container, bounce2 = container.actualOptions.interactivity.modes.bounce;
    if (!bounce2) {
      return;
    }
    container.retina.bounceModeDistance = bounce2.distance * container.retina.pixelRatio;
  }
  async interact() {
    const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray("bounce", hoverMode)) {
      this._processMouseBounce();
    } else {
      divModeExecute("bounce", divs, (selector, div) => this._singleSelectorBounce(selector, div));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, divs = events.onDiv;
    return mouse.position && events.onHover.enable && isInArray("bounce", events.onHover.mode) || isDivModeEnabled("bounce", divs);
  }
  loadModeOptions(options, ...sources) {
    if (!options.bounce) {
      options.bounce = new Bounce();
    }
    for (const source of sources) {
      options.bounce.load(source == null ? void 0 : source.bounce);
    }
  }
  reset() {
  }
}
async function loadExternalBounceInteraction(engine, refresh = true) {
  await engine.addInteractor("externalBounce", (container) => new Bouncer(container), refresh);
}
class BubbleBase {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.mix = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.mix !== void 0) {
      this.mix = data.mix;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    if (data.color !== void 0) {
      const sourceColor = isArray(this.color) ? void 0 : this.color;
      this.color = executeOnSingleOrMultiple(data.color, (color) => {
        return OptionsColor.create(sourceColor, color);
      });
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
  }
}
class BubbleDiv extends BubbleBase {
  constructor() {
    super();
    this.selectors = [];
  }
  get ids() {
    return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
  }
  set ids(value) {
    this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.ids !== void 0) {
      this.ids = data.ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
  }
}
class Bubble extends BubbleBase {
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
      const tmp = new BubbleDiv();
      tmp.load(div);
      return tmp;
    });
  }
}
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
  if (modeValue >= optionsValue) {
    const value = particleValue + (modeValue - optionsValue) * ratio;
    return clamp(value, particleValue, modeValue);
  } else if (modeValue < optionsValue) {
    const value = particleValue - (optionsValue - modeValue) * ratio;
    return clamp(value, modeValue, particleValue);
  }
}
class Bubbler extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this._clickBubble = () => {
      var _a;
      const container2 = this.container, options = container2.actualOptions, mouseClickPos = container2.interactivity.mouse.clickPosition, bubbleOptions = options.interactivity.modes.bubble;
      if (!bubbleOptions || !mouseClickPos) {
        return;
      }
      if (!container2.bubble) {
        container2.bubble = {};
      }
      const distance = container2.retina.bubbleModeDistance;
      if (!distance || distance < 0) {
        return;
      }
      const query = container2.particles.quadTree.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(p)), { bubble } = container2;
      for (const particle of query) {
        if (!bubble.clicking) {
          continue;
        }
        particle.bubble.inRange = !bubble.durationEnd;
        const pos = particle.getPosition(), distMouse = getDistance(pos, mouseClickPos), timeSpent = ((/* @__PURE__ */ new Date()).getTime() - (container2.interactivity.mouse.clickTime || 0)) / 1e3;
        if (timeSpent > bubbleOptions.duration) {
          bubble.durationEnd = true;
        }
        if (timeSpent > bubbleOptions.duration * 2) {
          bubble.clicking = false;
          bubble.durationEnd = false;
        }
        const sizeData = {
          bubbleObj: {
            optValue: container2.retina.bubbleModeSize,
            value: particle.bubble.radius
          },
          particlesObj: {
            optValue: getRangeMax(particle.options.size.value) * container2.retina.pixelRatio,
            value: particle.size.value
          },
          type: "size"
        };
        this._process(particle, distMouse, timeSpent, sizeData);
        const opacityData = {
          bubbleObj: {
            optValue: bubbleOptions.opacity,
            value: particle.bubble.opacity
          },
          particlesObj: {
            optValue: getRangeMax(particle.options.opacity.value),
            value: ((_a = particle.opacity) == null ? void 0 : _a.value) ?? 1
          },
          type: "opacity"
        };
        this._process(particle, distMouse, timeSpent, opacityData);
        if (!bubble.durationEnd && distMouse <= distance) {
          this._hoverBubbleColor(particle, distMouse);
        } else {
          delete particle.bubble.color;
        }
      }
    };
    this._hoverBubble = () => {
      const container2 = this.container, mousePos = container2.interactivity.mouse.position, distance = container2.retina.bubbleModeDistance;
      if (!distance || distance < 0 || mousePos === void 0) {
        return;
      }
      const query = container2.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
      for (const particle of query) {
        particle.bubble.inRange = true;
        const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos), ratio = 1 - pointDistance / distance;
        if (pointDistance <= distance) {
          if (ratio >= 0 && container2.interactivity.status === mouseMoveEvent) {
            this._hoverBubbleSize(particle, ratio);
            this._hoverBubbleOpacity(particle, ratio);
            this._hoverBubbleColor(particle, ratio);
          }
        } else {
          this.reset(particle);
        }
        if (container2.interactivity.status === mouseLeaveEvent) {
          this.reset(particle);
        }
      }
    };
    this._hoverBubbleColor = (particle, ratio, divBubble) => {
      const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity.modes.bubble;
      if (!bubbleOptions) {
        return;
      }
      if (!particle.bubble.finalColor) {
        const modeColor = bubbleOptions.color;
        if (!modeColor) {
          return;
        }
        const bubbleColor = itemFromSingleOrMultiple(modeColor);
        particle.bubble.finalColor = rangeColorToHsl(bubbleColor);
      }
      if (!particle.bubble.finalColor) {
        return;
      }
      if (bubbleOptions.mix) {
        particle.bubble.color = void 0;
        const pColor = particle.getFillColor();
        particle.bubble.color = pColor ? rgbToHsl(colorMix(pColor, particle.bubble.finalColor, 1 - ratio, ratio)) : particle.bubble.finalColor;
      } else {
        particle.bubble.color = particle.bubble.finalColor;
      }
    };
    this._hoverBubbleOpacity = (particle, ratio, divBubble) => {
      var _a, _b;
      const container2 = this.container, options = container2.actualOptions, modeOpacity = (divBubble == null ? void 0 : divBubble.opacity) ?? ((_a = options.interactivity.modes.bubble) == null ? void 0 : _a.opacity);
      if (!modeOpacity) {
        return;
      }
      const optOpacity = particle.options.opacity.value, pOpacity = ((_b = particle.opacity) == null ? void 0 : _b.value) ?? 1, opacity = calculateBubbleValue(pOpacity, modeOpacity, getRangeMax(optOpacity), ratio);
      if (opacity !== void 0) {
        particle.bubble.opacity = opacity;
      }
    };
    this._hoverBubbleSize = (particle, ratio, divBubble) => {
      const container2 = this.container, modeSize = (divBubble == null ? void 0 : divBubble.size) ? divBubble.size * container2.retina.pixelRatio : container2.retina.bubbleModeSize;
      if (modeSize === void 0) {
        return;
      }
      const optSize = getRangeMax(particle.options.size.value) * container2.retina.pixelRatio, pSize = particle.size.value, size = calculateBubbleValue(pSize, modeSize, optSize, ratio);
      if (size !== void 0) {
        particle.bubble.radius = size;
      }
    };
    this._process = (particle, distMouse, timeSpent, data) => {
      const container2 = this.container, bubbleParam = data.bubbleObj.optValue, options = container2.actualOptions, bubbleOptions = options.interactivity.modes.bubble;
      if (!bubbleOptions || bubbleParam === void 0) {
        return;
      }
      const bubbleDuration = bubbleOptions.duration, bubbleDistance = container2.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value || 0, type = data.type;
      if (!bubbleDistance || bubbleDistance < 0 || bubbleParam === particlesParam) {
        return;
      }
      if (!container2.bubble) {
        container2.bubble = {};
      }
      if (container2.bubble.durationEnd) {
        if (pObjBubble) {
          if (type === "size") {
            delete particle.bubble.radius;
          }
          if (type === "opacity") {
            delete particle.bubble.opacity;
          }
        }
      } else {
        if (distMouse <= bubbleDistance) {
          const obj = pObjBubble ?? pObj;
          if (obj !== bubbleParam) {
            const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
            if (type === "size") {
              particle.bubble.radius = value;
            }
            if (type === "opacity") {
              particle.bubble.opacity = value;
            }
          }
        } else {
          if (type === "size") {
            delete particle.bubble.radius;
          }
          if (type === "opacity") {
            delete particle.bubble.opacity;
          }
        }
      }
    };
    this._singleSelectorHover = (delta, selector, div) => {
      const container2 = this.container, selectors = document.querySelectorAll(selector), bubble = container2.actualOptions.interactivity.modes.bubble;
      if (!bubble || !selectors.length) {
        return;
      }
      selectors.forEach((item) => {
        const elem = item, pxRatio = container2.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
        }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container2.particles.quadTree.query(area, (p) => this.isEnabled(p));
        for (const particle of query) {
          if (!area.contains(particle.getPosition())) {
            continue;
          }
          particle.bubble.inRange = true;
          const divs = bubble.divs, divBubble = divMode(divs, elem);
          if (!particle.bubble.div || particle.bubble.div !== elem) {
            this.clear(particle, delta, true);
            particle.bubble.div = elem;
          }
          this._hoverBubbleSize(particle, 1, divBubble);
          this._hoverBubbleOpacity(particle, 1, divBubble);
          this._hoverBubbleColor(particle, 1, divBubble);
        }
      });
    };
    if (!container.bubble) {
      container.bubble = {};
    }
    this.handleClickMode = (mode) => {
      if (mode !== "bubble") {
        return;
      }
      if (!container.bubble) {
        container.bubble = {};
      }
      container.bubble.clicking = true;
    };
  }
  clear(particle, delta, force) {
    if (particle.bubble.inRange && !force) {
      return;
    }
    delete particle.bubble.div;
    delete particle.bubble.opacity;
    delete particle.bubble.radius;
    delete particle.bubble.color;
  }
  init() {
    const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
    if (!bubble) {
      return;
    }
    container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
    if (bubble.size !== void 0) {
      container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
    }
  }
  async interact(delta) {
    const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
    if (hoverEnabled && isInArray("bubble", hoverMode)) {
      this._hoverBubble();
    } else if (clickEnabled && isInArray("bubble", clickMode)) {
      this._clickBubble();
    } else {
      divModeExecute("bubble", divs, (selector, div) => this._singleSelectorHover(delta, selector, div));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, { onClick, onDiv, onHover } = events, divBubble = isDivModeEnabled("bubble", onDiv);
    if (!(divBubble || onHover.enable && mouse.position || onClick.enable && mouse.clickPosition)) {
      return false;
    }
    return isInArray("bubble", onHover.mode) || isInArray("bubble", onClick.mode) || divBubble;
  }
  loadModeOptions(options, ...sources) {
    if (!options.bubble) {
      options.bubble = new Bubble();
    }
    for (const source of sources) {
      options.bubble.load(source == null ? void 0 : source.bubble);
    }
  }
  reset(particle) {
    particle.bubble.inRange = false;
  }
}
async function loadExternalBubbleInteraction(engine, refresh = true) {
  await engine.addInteractor("externalBubble", (container) => new Bubbler(container), refresh);
}
class ConnectLinks {
  constructor() {
    this.opacity = 0.5;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
}
class Connect {
  constructor() {
    this.distance = 80;
    this.links = new ConnectLinks();
    this.radius = 60;
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load(data.links ?? data.lineLinked ?? data.line_linked);
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
}
function gradient(context, p1, p2, opacity) {
  const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
  if (!color1 || !color2) {
    return;
  }
  const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
  grad.addColorStop(0, getStyleFromHsl(color1, opacity));
  grad.addColorStop(gradStop > 1 ? 1 : gradStop, getStyleFromRgb(midRgb, opacity));
  grad.addColorStop(1, getStyleFromHsl(color2, opacity));
  return grad;
}
function drawConnectLine(context, width, lineStyle2, begin, end) {
  drawLine(context, begin, end);
  context.lineWidth = width;
  context.strokeStyle = lineStyle2;
  context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
  const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
  if (!connectOptions) {
    return;
  }
  return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
  container.canvas.draw((ctx) => {
    const ls = lineStyle(container, ctx, p1, p2);
    if (!ls) {
      return;
    }
    const pos1 = p1.getPosition(), pos2 = p2.getPosition();
    drawConnectLine(ctx, p1.retina.linksWidth ?? 0, ls, pos1, pos2);
  });
}
class Connector extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
    const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
    if (!connect) {
      return;
    }
    container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
    container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
  }
  async interact() {
    const container = this.container, options = container.actualOptions;
    if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
      const mousePos = container.interactivity.mouse.position;
      if (!container.retina.connectModeDistance || container.retina.connectModeDistance < 0 || !container.retina.connectModeRadius || container.retina.connectModeRadius < 0 || !mousePos) {
        return;
      }
      const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
      let i = 0;
      for (const p1 of query) {
        const pos1 = p1.getPosition();
        for (const p2 of query.slice(i + 1)) {
          const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
          if (xDiff < distMax && yDiff < distMax) {
            drawConnection(container, p1, p2);
          }
        }
        ++i;
      }
    }
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    if (!(events.onHover.enable && mouse.position)) {
      return false;
    }
    return isInArray("connect", events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.connect) {
      options.connect = new Connect();
    }
    for (const source of sources) {
      options.connect.load(source == null ? void 0 : source.connect);
    }
  }
  reset() {
  }
}
async function loadExternalConnectInteraction(engine, refresh = true) {
  await engine.addInteractor("externalConnect", (container) => new Connector(container), refresh);
}
class GrabLinks {
  constructor() {
    this.blink = false;
    this.consent = false;
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
}
class Grab {
  constructor() {
    this.distance = 100;
    this.links = new GrabLinks();
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(value) {
    this.links = value;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(value) {
    this.links = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    this.links.load(data.links ?? data.lineLinked ?? data.line_linked);
  }
}
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
  drawLine(context, begin, end);
  context.strokeStyle = getStyleFromRgb(colorLine, opacity);
  context.lineWidth = width;
  context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
  container.canvas.draw((ctx) => {
    const beginPos = particle.getPosition();
    drawGrabLine(ctx, particle.retina.linksWidth ?? 0, beginPos, mousePos, lineColor, opacity);
  });
}
class Grabber extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
    const container = this.container, grab = container.actualOptions.interactivity.modes.grab;
    if (!grab) {
      return;
    }
    container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
  }
  async interact() {
    var _a;
    const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
    if (!interactivity.modes.grab || !interactivity.events.onHover.enable || container.interactivity.status !== mouseMoveEvent) {
      return;
    }
    const mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const distance = container.retina.grabModeDistance;
    if (!distance || distance < 0) {
      return;
    }
    const query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
    for (const particle of query) {
      const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos);
      if (pointDistance > distance) {
        continue;
      }
      const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
      if (opacityLine <= 0) {
        continue;
      }
      const optColor = grabLineOptions.color ?? ((_a = particle.options.links) == null ? void 0 : _a.color);
      if (!container.particles.grabLineColor && optColor) {
        const linksOptions = interactivity.modes.grab.links;
        container.particles.grabLineColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
      }
      const colorLine = getLinkColor(particle, void 0, container.particles.grabLineColor);
      if (!colorLine) {
        continue;
      }
      drawGrab(container, particle, colorLine, opacityLine, mousePos);
    }
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    return events.onHover.enable && !!mouse.position && isInArray("grab", events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.grab) {
      options.grab = new Grab();
    }
    for (const source of sources) {
      options.grab.load(source == null ? void 0 : source.grab);
    }
  }
  reset() {
  }
}
async function loadExternalGrabInteraction(engine, refresh = true) {
  await engine.addInteractor("externalGrab", (container) => new Grabber(container), refresh);
}
class Pauser extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== "pause") {
        return;
      }
      const container2 = this.container;
      if (container2.getAnimationStatus()) {
        container2.pause();
      } else {
        container2.play();
      }
    };
  }
  clear() {
  }
  init() {
  }
  async interact() {
  }
  isEnabled() {
    return true;
  }
  reset() {
  }
}
async function loadExternalPauseInteraction(engine, refresh = true) {
  await engine.addInteractor("externalPause", (container) => new Pauser(container), refresh);
}
class Push {
  constructor() {
    this.default = true;
    this.groups = [];
    this.quantity = 4;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(value) {
    this.quantity = setRangeValue(value);
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    if (data.groups !== void 0) {
      this.groups = data.groups.map((t) => t);
    }
    if (!this.groups.length) {
      this.default = true;
    }
    const quantity = data.quantity ?? data.particles_nb;
    if (quantity !== void 0) {
      this.quantity = setRangeValue(quantity);
    }
  }
}
class Pusher extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      if (mode !== "push") {
        return;
      }
      const container2 = this.container, options = container2.actualOptions, pushOptions = options.interactivity.modes.push;
      if (!pushOptions) {
        return;
      }
      const quantity = getRangeValue(pushOptions.quantity);
      if (quantity <= 0) {
        return;
      }
      const group = itemFromArray([void 0, ...pushOptions.groups]), groupOptions = group !== void 0 ? container2.actualOptions.particles.groups[group] : void 0;
      container2.particles.push(quantity, container2.interactivity.mouse, groupOptions, group);
    };
  }
  clear() {
  }
  init() {
  }
  async interact() {
  }
  isEnabled() {
    return true;
  }
  loadModeOptions(options, ...sources) {
    if (!options.push) {
      options.push = new Push();
    }
    for (const source of sources) {
      options.push.load(source == null ? void 0 : source.push);
    }
  }
  reset() {
  }
}
async function loadExternalPushInteraction(engine, refresh = true) {
  await engine.addInteractor("externalPush", (container) => new Pusher(container), refresh);
}
class Remove {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(value) {
    this.quantity = setRangeValue(value);
  }
  load(data) {
    if (!data) {
      return;
    }
    const quantity = data.quantity ?? data.particles_nb;
    if (quantity !== void 0) {
      this.quantity = setRangeValue(quantity);
    }
  }
}
class Remover extends ExternalInteractorBase {
  constructor(container) {
    super(container);
    this.handleClickMode = (mode) => {
      const container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.modes.remove || mode !== "remove") {
        return;
      }
      const removeNb = getRangeValue(options.interactivity.modes.remove.quantity);
      container2.particles.removeQuantity(removeNb);
    };
  }
  clear() {
  }
  init() {
  }
  async interact() {
  }
  isEnabled() {
    return true;
  }
  loadModeOptions(options, ...sources) {
    if (!options.remove) {
      options.remove = new Remove();
    }
    for (const source of sources) {
      options.remove.load(source == null ? void 0 : source.remove);
    }
  }
  reset() {
  }
}
async function loadExternalRemoveInteraction(engine, refresh = true) {
  await engine.addInteractor("externalRemove", (container) => new Remover(container), refresh);
}
class RepulseBase {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.factor = 100;
    this.speed = 1;
    this.maxSpeed = 50;
    this.easing = "ease-out-quad";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.duration !== void 0) {
      this.duration = data.duration;
    }
    if (data.easing !== void 0) {
      this.easing = data.easing;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = data.maxSpeed;
    }
  }
}
class RepulseDiv extends RepulseBase {
  constructor() {
    super();
    this.selectors = [];
  }
  get ids() {
    return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
  }
  set ids(value) {
    this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.ids !== void 0) {
      this.ids = data.ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
  }
}
class Repulse extends RepulseBase {
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
      const tmp = new RepulseDiv();
      tmp.load(div);
      return tmp;
    });
  }
}
class Repulser extends ExternalInteractorBase {
  constructor(engine, container) {
    super(container);
    this._clickRepulse = () => {
      const container2 = this.container, repulseOptions = container2.actualOptions.interactivity.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const repulse = container2.repulse || { particles: [] };
      if (!repulse.finish) {
        if (!repulse.count) {
          repulse.count = 0;
        }
        repulse.count++;
        if (repulse.count === container2.particles.count) {
          repulse.finish = true;
        }
      }
      if (repulse.clicking) {
        const repulseDistance = container2.retina.repulseModeDistance;
        if (!repulseDistance || repulseDistance < 0) {
          return;
        }
        const repulseRadius = Math.pow(repulseDistance / 6, 3), mouseClickPos = container2.interactivity.mouse.clickPosition;
        if (mouseClickPos === void 0) {
          return;
        }
        const range = new Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container2.particles.quadTree.query(range, (p) => this.isEnabled(p));
        for (const particle of query) {
          const { dx, dy, distance } = getDistances(mouseClickPos, particle.position), d = distance ** 2, velocity = repulseOptions.speed, force = -repulseRadius * velocity / d;
          if (d <= repulseRadius) {
            repulse.particles.push(particle);
            const vect = Vector.create(dx, dy);
            vect.length = force;
            particle.velocity.setTo(vect);
          }
        }
      } else if (repulse.clicking === false) {
        for (const particle of repulse.particles) {
          particle.velocity.setTo(particle.initialVelocity);
        }
        repulse.particles = [];
      }
    };
    this._hoverRepulse = () => {
      const container2 = this.container, mousePos = container2.interactivity.mouse.position, repulseRadius = container2.retina.repulseModeDistance;
      if (!repulseRadius || repulseRadius < 0 || !mousePos) {
        return;
      }
      this._processRepulse(mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
    };
    this._processRepulse = (position, repulseRadius, area, divRepulse) => {
      const container2 = this.container, query = container2.particles.quadTree.query(area, (p) => this.isEnabled(p)), repulseOptions = container2.actualOptions.interactivity.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      for (const particle of query) {
        const { dx, dy, distance } = getDistances(particle.position, position), velocity = ((divRepulse == null ? void 0 : divRepulse.speed) ?? repulseOptions.speed) * repulseOptions.factor, repulseFactor = clamp(getEasing(repulseOptions.easing)(1 - distance / repulseRadius) * velocity, 0, repulseOptions.maxSpeed), normVec = Vector.create(distance === 0 ? velocity : dx / distance * repulseFactor, distance === 0 ? velocity : dy / distance * repulseFactor);
        particle.position.addTo(normVec);
      }
    };
    this._singleSelectorRepulse = (selector, div) => {
      const container2 = this.container, repulse = container2.actualOptions.interactivity.modes.repulse;
      if (!repulse) {
        return;
      }
      const query = document.querySelectorAll(selector);
      if (!query.length) {
        return;
      }
      query.forEach((item) => {
        const elem = item, pxRatio = container2.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio
        }, repulseRadius = elem.offsetWidth / 2 * pxRatio, area = div.type === "circle" ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = divMode(divs, elem);
        this._processRepulse(pos, repulseRadius, area, divRepulse);
      });
    };
    this._engine = engine;
    if (!container.repulse) {
      container.repulse = { particles: [] };
    }
    this.handleClickMode = (mode) => {
      const options = this.container.actualOptions, repulseOpts = options.interactivity.modes.repulse;
      if (!repulseOpts || mode !== "repulse") {
        return;
      }
      if (!container.repulse) {
        container.repulse = { particles: [] };
      }
      const repulse = container.repulse;
      repulse.clicking = true;
      repulse.count = 0;
      for (const particle of container.repulse.particles) {
        if (!this.isEnabled(particle)) {
          continue;
        }
        particle.velocity.setTo(particle.initialVelocity);
      }
      repulse.particles = [];
      repulse.finish = false;
      setTimeout(() => {
        if (container.destroyed) {
          return;
        }
        repulse.clicking = false;
      }, repulseOpts.duration * 1e3);
    };
  }
  clear() {
  }
  init() {
    const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
    if (!repulse) {
      return;
    }
    container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
  }
  async interact() {
    const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === mouseMoveEvent, events = options.interactivity.events, hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
    if (mouseMoveStatus && hoverEnabled && isInArray("repulse", hoverMode)) {
      this._hoverRepulse();
    } else if (clickEnabled && isInArray("repulse", clickMode)) {
      this._clickRepulse();
    } else {
      divModeExecute("repulse", divs, (selector, div) => this._singleSelectorRepulse(selector, div));
    }
  }
  isEnabled(particle) {
    const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? options.interactivity).events, divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = isDivModeEnabled("repulse", divs);
    if (!(divRepulse || hover.enable && mouse.position || click.enable && mouse.clickPosition)) {
      return false;
    }
    const hoverMode = hover.mode, clickMode = click.mode;
    return isInArray("repulse", hoverMode) || isInArray("repulse", clickMode) || divRepulse;
  }
  loadModeOptions(options, ...sources) {
    if (!options.repulse) {
      options.repulse = new Repulse();
    }
    for (const source of sources) {
      options.repulse.load(source == null ? void 0 : source.repulse);
    }
  }
  reset() {
  }
}
async function loadExternalRepulseInteraction(engine, refresh = true) {
  await engine.addInteractor("externalRepulse", (container) => new Repulser(engine, container), refresh);
}
class Slow {
  constructor() {
    this.factor = 3;
    this.radius = 200;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.factor !== void 0) {
      this.factor = data.factor;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
}
class Slower extends ExternalInteractorBase {
  constructor(container) {
    super(container);
  }
  clear(particle, delta, force) {
    if (particle.slow.inRange && !force) {
      return;
    }
    particle.slow.factor = 1;
  }
  init() {
    const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
    if (!slow) {
      return;
    }
    container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
  }
  async interact() {
  }
  isEnabled(particle) {
    const container = this.container, mouse = container.interactivity.mouse, events = ((particle == null ? void 0 : particle.interactivity) ?? container.actualOptions.interactivity).events;
    return events.onHover.enable && !!mouse.position && isInArray("slow", events.onHover.mode);
  }
  loadModeOptions(options, ...sources) {
    if (!options.slow) {
      options.slow = new Slow();
    }
    for (const source of sources) {
      options.slow.load(source == null ? void 0 : source.slow);
    }
  }
  reset(particle) {
    particle.slow.inRange = false;
    const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity.modes.slow;
    if (!slowOptions || !radius || radius < 0 || !mousePos) {
      return;
    }
    const particlePos = particle.getPosition(), dist = getDistance(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor, { slow } = particle;
    if (dist > radius) {
      return;
    }
    slow.inRange = true;
    slow.factor = proximityFactor / slowFactor;
  }
}
async function loadExternalSlowInteraction(engine, refresh = true) {
  await engine.addInteractor("externalSlow", (container) => new Slower(container), refresh);
}
const InterlaceOffsets = [0, 4, 2, 1];
const InterlaceSteps = [8, 8, 4, 2];
class ByteStream {
  constructor(bytes) {
    this.pos = 0;
    this.data = new Uint8ClampedArray(bytes);
  }
  getString(count) {
    const slice = this.data.slice(this.pos, this.pos + count);
    this.pos += slice.length;
    return slice.reduce((acc, curr) => acc + String.fromCharCode(curr), "");
  }
  nextByte() {
    return this.data[this.pos++];
  }
  nextTwoBytes() {
    this.pos += 2;
    return this.data[this.pos - 2] + (this.data[this.pos - 1] << 8);
  }
  readSubBlocks() {
    let blockString = "", size = 0;
    do {
      size = this.data[this.pos++];
      for (let count = size; --count >= 0; blockString += String.fromCharCode(this.data[this.pos++])) {
      }
    } while (size !== 0);
    return blockString;
  }
  readSubBlocksBin() {
    let size = 0, len = 0;
    for (let offset = 0; (size = this.data[this.pos + offset]) !== 0; offset += size + 1) {
      len += size;
    }
    const blockData = new Uint8Array(len);
    for (let i = 0; (size = this.data[this.pos++]) !== 0; ) {
      for (let count = size; --count >= 0; blockData[i++] = this.data[this.pos++]) {
      }
    }
    return blockData;
  }
  skipSubBlocks() {
    for (; this.data[this.pos] !== 0; this.pos += this.data[this.pos] + 1) {
    }
    this.pos++;
  }
}
function parseColorTable(byteStream, count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push({
      r: byteStream.data[byteStream.pos],
      g: byteStream.data[byteStream.pos + 1],
      b: byteStream.data[byteStream.pos + 2]
    });
    byteStream.pos += 3;
  }
  return colors;
}
async function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
  switch (byteStream.nextByte()) {
    case 249: {
      const frame = gif.frames[getFrameIndex(false)];
      byteStream.pos++;
      const packedByte = byteStream.nextByte();
      frame.GCreserved = (packedByte & 224) >>> 5;
      frame.disposalMethod = (packedByte & 28) >>> 2;
      frame.userInputDelayFlag = (packedByte & 2) === 2;
      const transparencyFlag = (packedByte & 1) === 1;
      frame.delayTime = byteStream.nextTwoBytes() * 10;
      const transparencyIndex = byteStream.nextByte();
      if (transparencyFlag) {
        getTransparencyIndex(transparencyIndex);
      }
      byteStream.pos++;
      break;
    }
    case 255: {
      byteStream.pos++;
      const applicationExtension = {
        identifier: byteStream.getString(8),
        authenticationCode: byteStream.getString(3),
        data: byteStream.readSubBlocksBin()
      };
      gif.applicationExtensions.push(applicationExtension);
      break;
    }
    case 254: {
      gif.comments.push([getFrameIndex(false), byteStream.readSubBlocks()]);
      break;
    }
    case 1: {
      if (gif.globalColorTable.length === 0) {
        throw new EvalError("plain text extension without global color table");
      }
      byteStream.pos++;
      gif.frames[getFrameIndex(false)].plainTextData = {
        left: byteStream.nextTwoBytes(),
        top: byteStream.nextTwoBytes(),
        width: byteStream.nextTwoBytes(),
        height: byteStream.nextTwoBytes(),
        charSize: {
          width: byteStream.nextTwoBytes(),
          height: byteStream.nextTwoBytes()
        },
        foregroundColor: byteStream.nextByte(),
        backgroundColor: byteStream.nextByte(),
        text: byteStream.readSubBlocks()
      };
      break;
    }
    default:
      byteStream.skipSubBlocks();
      break;
  }
}
async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
  const frame = gif.frames[getFrameIndex(true)];
  frame.left = byteStream.nextTwoBytes();
  frame.top = byteStream.nextTwoBytes();
  frame.width = byteStream.nextTwoBytes();
  frame.height = byteStream.nextTwoBytes();
  const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 128) === 128, interlacedFlag = (packedByte & 64) === 64;
  frame.sortFlag = (packedByte & 32) === 32;
  frame.reserved = (packedByte & 24) >>> 3;
  const localColorCount = 1 << (packedByte & 7) + 1;
  if (localColorTableFlag) {
    frame.localColorTable = parseColorTable(byteStream, localColorCount);
  }
  const getColor = (index) => {
    const { r, g, b } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
    return { r, g, b, a: index === getTransparencyIndex(null) ? avgAlpha ? ~~((r + g + b) / 3) : 0 : 255 };
  };
  const image = (() => {
    try {
      return new ImageData(frame.width, frame.height, { colorSpace: "srgb" });
    } catch (error) {
      if (error instanceof DOMException && error.name === "IndexSizeError") {
        return null;
      }
      throw error;
    }
  })();
  if (image == null) {
    throw new EvalError("GIF frame size is to large");
  }
  const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
  const readBits = (pos, len) => {
    const bytePos = pos >>> 3, bitPos = pos & 7;
    return (imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16) & (1 << len) - 1 << bitPos) >>> bitPos;
  };
  if (interlacedFlag) {
    for (let code = 0, size = minCodeSize + 1, pos = 0, dic = [[0]], pass = 0; pass < 4; pass++) {
      if (InterlaceOffsets[pass] < frame.height) {
        for (let pixelPos = 0, lineIndex = 0; ; ) {
          const last = code;
          code = readBits(pos, size);
          pos += size + 1;
          if (code === clearCode) {
            size = minCodeSize + 1;
            dic.length = clearCode + 2;
            for (let i = 0; i < dic.length; i++) {
              dic[i] = i < clearCode ? [i] : [];
            }
          } else {
            if (code >= dic.length) {
              dic.push(dic[last].concat(dic[last][0]));
            } else if (last !== clearCode) {
              dic.push(dic[last].concat(dic[code][0]));
            }
            for (let i = 0; i < dic[code].length; i++) {
              const { r, g, b, a } = getColor(dic[code][i]);
              image.data.set([r, g, b, a], InterlaceOffsets[pass] * frame.width + InterlaceSteps[pass] * lineIndex + pixelPos % (frame.width * 4));
              pixelPos += 4;
            }
            if (dic.length === 1 << size && size < 12) {
              size++;
            }
          }
          if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
            lineIndex++;
            if (InterlaceOffsets[pass] + InterlaceSteps[pass] * lineIndex >= frame.height) {
              break;
            }
          }
        }
      }
      progressCallback == null ? void 0 : progressCallback(byteStream.pos / (byteStream.data.length - 1), getFrameIndex(false) + 1, image, { x: frame.left, y: frame.top }, { width: gif.width, height: gif.height });
    }
    frame.image = image;
    frame.bitmap = await createImageBitmap(image);
  } else {
    for (let code = 0, size = minCodeSize + 1, pos = 0, dic = [[0]], pixelPos = -4; ; ) {
      const last = code;
      code = readBits(pos, size);
      pos += size;
      if (code === clearCode) {
        size = minCodeSize + 1;
        dic.length = clearCode + 2;
        for (let i = 0; i < dic.length; i++) {
          dic[i] = i < clearCode ? [i] : [];
        }
      } else {
        if (code === clearCode + 1) {
          break;
        }
        if (code >= dic.length) {
          dic.push(dic[last].concat(dic[last][0]));
        } else if (last !== clearCode) {
          dic.push(dic[last].concat(dic[code][0]));
        }
        for (let i = 0; i < dic[code].length; i++) {
          const { r, g, b, a } = getColor(dic[code][i]);
          image.data.set([r, g, b, a], pixelPos += 4);
        }
        if (dic.length >= 1 << size && size < 12) {
          size++;
        }
      }
    }
    frame.image = image;
    frame.bitmap = await createImageBitmap(image);
    progressCallback == null ? void 0 : progressCallback((byteStream.pos + 1) / byteStream.data.length, getFrameIndex(false) + 1, frame.image, { x: frame.left, y: frame.top }, { width: gif.width, height: gif.height });
  }
}
async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
  switch (byteStream.nextByte()) {
    case 59:
      return true;
    case 44:
      await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback);
      break;
    case 33:
      await parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
      break;
    default:
      throw new EvalError("undefined block found");
  }
  return false;
}
function getGIFLoopAmount(gif) {
  for (const extension of gif.applicationExtensions) {
    if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") {
      continue;
    }
    return extension.data[1] + (extension.data[2] << 8);
  }
  return NaN;
}
async function decodeGIF(gifURL, progressCallback, avgAlpha) {
  if (!avgAlpha)
    avgAlpha = false;
  const res = await fetch(gifURL);
  if (!res.ok && res.status === 404) {
    throw new EvalError("file not found");
  }
  const buffer = await res.arrayBuffer();
  const gif = {
    width: 0,
    height: 0,
    totalTime: 0,
    colorRes: 0,
    pixelAspectRatio: 0,
    frames: [],
    sortFlag: false,
    globalColorTable: [],
    backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
    comments: [],
    applicationExtensions: []
  }, byteStream = new ByteStream(new Uint8ClampedArray(buffer));
  if (byteStream.getString(6) !== "GIF89a") {
    throw new Error("not a supported GIF file");
  }
  gif.width = byteStream.nextTwoBytes();
  gif.height = byteStream.nextTwoBytes();
  const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 128) === 128;
  gif.colorRes = (packedByte & 112) >>> 4;
  gif.sortFlag = (packedByte & 8) === 8;
  const globalColorCount = 1 << (packedByte & 7) + 1, backgroundColorIndex = byteStream.nextByte();
  gif.pixelAspectRatio = byteStream.nextByte();
  if (gif.pixelAspectRatio !== 0) {
    gif.pixelAspectRatio = (gif.pixelAspectRatio + 15) / 64;
  }
  if (globalColorTableFlag) {
    gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
  }
  const backgroundImage = (() => {
    try {
      return new ImageData(gif.width, gif.height, { colorSpace: "srgb" });
    } catch (error) {
      if (error instanceof DOMException && error.name === "IndexSizeError") {
        return null;
      }
      throw error;
    }
  })();
  if (backgroundImage == null) {
    throw new Error("GIF frame size is to large");
  }
  const { r, g, b } = gif.globalColorTable[backgroundColorIndex];
  backgroundImage.data.set(globalColorTableFlag ? [r, g, b, 255] : [0, 0, 0, 0]);
  for (let i = 4; i < backgroundImage.data.length; i *= 2) {
    backgroundImage.data.copyWithin(i, 0, i);
  }
  gif.backgroundImage = backgroundImage;
  let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
  const getframeIndex = (increment) => {
    if (increment) {
      incrementFrameIndex = true;
    }
    return frameIndex;
  };
  const getTransparencyIndex = (newValue) => {
    if (newValue != null) {
      transparencyIndex = newValue;
    }
    return transparencyIndex;
  };
  try {
    do {
      if (incrementFrameIndex) {
        gif.frames.push({
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          disposalMethod: 0,
          image: new ImageData(1, 1, { colorSpace: "srgb" }),
          plainTextData: null,
          userInputDelayFlag: false,
          delayTime: 0,
          sortFlag: false,
          localColorTable: [],
          reserved: 0,
          GCreserved: 0
        });
        frameIndex++;
        transparencyIndex = -1;
        incrementFrameIndex = false;
      }
    } while (!await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback));
    gif.frames.length--;
    for (const frame of gif.frames) {
      if (frame.userInputDelayFlag && frame.delayTime === 0) {
        gif.totalTime = Infinity;
        break;
      }
      gif.totalTime += frame.delayTime;
    }
    return gif;
  } catch (error) {
    if (error instanceof EvalError) {
      throw new Error(`error while parsing frame ${frameIndex} "${error.message}"`);
    }
    throw error;
  }
}
const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
  const { svgData } = imageShape;
  if (!svgData) {
    return "";
  }
  const colorStyle = getStyleFromHsl(color, opacity);
  if (svgData.includes("fill")) {
    return svgData.replace(currentColorRegex, () => colorStyle);
  }
  const preFillIndex = svgData.indexOf(">");
  return `${svgData.substring(0, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
  return new Promise((resolve) => {
    image.loading = true;
    const img = new Image();
    image.element = img;
    img.addEventListener("load", () => {
      image.loading = false;
      resolve();
    });
    img.addEventListener("error", () => {
      image.element = void 0;
      image.error = true;
      image.loading = false;
      getLogger().error(`${errorPrefix} loading image: ${image.source}`);
      resolve();
    });
    img.src = image.source;
  });
}
async function loadGifImage(image) {
  if (image.type !== "gif") {
    await loadImage(image);
    return;
  }
  image.loading = true;
  try {
    image.gifData = await decodeGIF(image.source);
    image.gifLoopCount = getGIFLoopAmount(image.gifData) ?? 0;
    if (image.gifLoopCount === 0) {
      image.gifLoopCount = Infinity;
    }
  } catch {
    image.error = true;
  }
  image.loading = false;
}
async function downloadSvgImage(image) {
  if (image.type !== "svg") {
    await loadImage(image);
    return;
  }
  image.loading = true;
  const response = await fetch(image.source);
  if (!response.ok) {
    getLogger().error(`${errorPrefix} Image not found`);
    image.error = true;
  } else {
    image.svgData = await response.text();
  }
  image.loading = false;
}
function replaceImageColor(image, imageData, color, particle) {
  var _a;
  const svgColoredData = replaceColorSvg(image, color, ((_a = particle.opacity) == null ? void 0 : _a.value) ?? 1), imageRes = {
    color,
    gif: imageData.gif,
    data: {
      ...image,
      svgData: svgColoredData
    },
    loaded: false,
    ratio: imageData.width / imageData.height,
    replaceColor: imageData.replaceColor ?? imageData.replace_color,
    source: imageData.src
  };
  return new Promise((resolve) => {
    const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
    img.addEventListener("load", () => {
      imageRes.loaded = true;
      imageRes.element = img;
      resolve(imageRes);
      domUrl.revokeObjectURL(url);
    });
    img.addEventListener("error", async () => {
      domUrl.revokeObjectURL(url);
      const img2 = {
        ...image,
        error: false,
        loading: true
      };
      await loadImage(img2);
      imageRes.loaded = true;
      imageRes.element = img2.element;
      resolve(imageRes);
    });
    img.src = url;
  });
}
class ImageDrawer {
  constructor(engine) {
    this.loadImageShape = async (imageShape) => {
      if (!this._engine.loadImage) {
        throw new Error(`${errorPrefix} image shape not initialized`);
      }
      await this._engine.loadImage({
        gif: imageShape.gif,
        name: imageShape.name,
        replaceColor: imageShape.replaceColor ?? imageShape.replace_color ?? false,
        src: imageShape.src
      });
    };
    this._engine = engine;
  }
  addImage(image) {
    if (!this._engine.images) {
      this._engine.images = [];
    }
    this._engine.images.push(image);
  }
  draw(context, particle, radius, opacity, delta) {
    const image = particle.image, element = image == null ? void 0 : image.element;
    if (!image) {
      return;
    }
    context.globalAlpha = opacity;
    if (image.gif && image.gifData) {
      const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
      if (!offscreenContext) {
        throw new Error("could not create offscreen canvas context");
      }
      offscreenContext.imageSmoothingQuality = "low";
      offscreenContext.imageSmoothingEnabled = false;
      offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
      if (particle.gifLoopCount === void 0) {
        particle.gifLoopCount = image.gifLoopCount ?? 0;
      }
      let frameIndex = particle.gifFrame ?? 0;
      const pos = { x: -image.gifData.width * 0.5, y: -image.gifData.height * 0.5 }, frame = image.gifData.frames[frameIndex];
      if (particle.gifTime === void 0) {
        particle.gifTime = 0;
      }
      if (!frame.bitmap) {
        return;
      }
      context.scale(radius / image.gifData.width, radius / image.gifData.height);
      switch (frame.disposalMethod) {
        case 4:
        case 5:
        case 6:
        case 7:
        case 0:
          offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
          context.drawImage(offscreenCanvas, pos.x, pos.y);
          offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
          break;
        case 1:
          offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
          context.drawImage(offscreenCanvas, pos.x, pos.y);
          break;
        case 2:
          offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
          context.drawImage(offscreenCanvas, pos.x, pos.y);
          offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
          if (image.gifData.globalColorTable.length === 0) {
            offscreenContext.putImageData(image.gifData.frames[0].image, pos.x + frame.left, pos.y + frame.top);
          } else {
            offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
          }
          break;
        case 3:
          {
            const previousImageData = offscreenContext.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            offscreenContext.putImageData(previousImageData, 0, 0);
          }
          break;
      }
      particle.gifTime += delta.value;
      if (particle.gifTime > frame.delayTime) {
        particle.gifTime -= frame.delayTime;
        if (++frameIndex >= image.gifData.frames.length) {
          if (--particle.gifLoopCount <= 0) {
            return;
          }
          frameIndex = 0;
          offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        }
        particle.gifFrame = frameIndex;
      }
      context.scale(image.gifData.width / radius, image.gifData.height / radius);
    } else if (element) {
      const ratio = image.ratio, pos = {
        x: -radius,
        y: -radius
      };
      context.drawImage(element, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    }
    context.globalAlpha = 1;
  }
  getSidesCount() {
    return 12;
  }
  async init(container) {
    const options = container.actualOptions;
    if (!options.preload || !this._engine.loadImage) {
      return;
    }
    for (const imageData of options.preload) {
      await this._engine.loadImage(imageData);
    }
  }
  loadShape(particle) {
    if (particle.shape !== "image" && particle.shape !== "images") {
      return;
    }
    if (!this._engine.images) {
      this._engine.images = [];
    }
    const imageData = particle.shapeData, image = this._engine.images.find((t) => t.name === imageData.name || t.source === imageData.src);
    if (!image) {
      this.loadImageShape(imageData).then(() => {
        this.loadShape(particle);
      });
    }
  }
  particleInit(container, particle) {
    if (particle.shape !== "image" && particle.shape !== "images") {
      return;
    }
    if (!this._engine.images) {
      this._engine.images = [];
    }
    const images = this._engine.images, imageData = particle.shapeData, color = particle.getFillColor(), image = images.find((t) => t.name === imageData.name || t.source === imageData.src);
    if (!image) {
      return;
    }
    const replaceColor = imageData.replaceColor ?? imageData.replace_color ?? image.replaceColor;
    if (image.loading) {
      setTimeout(() => {
        this.particleInit(container, particle);
      });
      return;
    }
    (async () => {
      let imageRes;
      if (image.svgData && color) {
        imageRes = await replaceImageColor(image, imageData, color, particle);
      } else {
        imageRes = {
          color,
          data: image,
          element: image.element,
          gif: image.gif,
          gifData: image.gifData,
          gifLoopCount: image.gifLoopCount,
          loaded: true,
          ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? 1,
          replaceColor,
          source: imageData.src
        };
      }
      if (!imageRes.ratio) {
        imageRes.ratio = 1;
      }
      const fill = imageData.fill ?? particle.fill, close = imageData.close ?? particle.close, imageShape = {
        image: imageRes,
        fill,
        close
      };
      particle.image = imageShape.image;
      particle.fill = imageShape.fill;
      particle.close = imageShape.close;
    })();
  }
}
class Preload {
  constructor() {
    this.src = "";
    this.gif = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.gif !== void 0) {
      this.gif = data.gif;
    }
    if (data.height !== void 0) {
      this.height = data.height;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    if (data.replaceColor !== void 0) {
      this.replaceColor = data.replaceColor;
    }
    if (data.src !== void 0) {
      this.src = data.src;
    }
    if (data.width !== void 0) {
      this.width = data.width;
    }
  }
}
class ImagePreloaderPlugin {
  constructor(engine) {
    this.id = "imagePreloader";
    this._engine = engine;
  }
  getPlugin() {
    return {};
  }
  loadOptions(options, source) {
    if (!source || !source.preload) {
      return;
    }
    if (!options.preload) {
      options.preload = [];
    }
    const preloadOptions = options.preload;
    for (const item of source.preload) {
      const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
      if (existing) {
        existing.load(item);
      } else {
        const preload = new Preload();
        preload.load(item);
        preloadOptions.push(preload);
      }
    }
  }
  needsPlugin() {
    return true;
  }
}
function addLoadImageToEngine(engine) {
  if (engine.loadImage) {
    return;
  }
  engine.loadImage = async (data) => {
    if (!data.name && !data.src) {
      throw new Error(`${errorPrefix} no image source provided`);
    }
    if (!engine.images) {
      engine.images = [];
    }
    if (engine.images.find((t) => t.name === data.name || t.source === data.src)) {
      return;
    }
    try {
      const image = {
        gif: data.gif ?? false,
        name: data.name ?? data.src,
        source: data.src,
        type: data.src.substring(data.src.length - 3),
        error: false,
        loading: true,
        replaceColor: data.replaceColor,
        ratio: data.width && data.height ? data.width / data.height : void 0
      };
      engine.images.push(image);
      const imageFunc = data.gif ? loadGifImage : data.replaceColor ? downloadSvgImage : loadImage;
      await imageFunc(image);
    } catch {
      throw new Error(`${errorPrefix} ${data.name ?? data.src} not found`);
    }
  };
}
async function loadImageShape(engine, refresh = true) {
  addLoadImageToEngine(engine);
  const preloader = new ImagePreloaderPlugin(engine);
  await engine.addPlugin(preloader, refresh);
  await engine.addShape(["image", "images"], new ImageDrawer(engine), refresh);
}
class LifeDelay extends ValueWithRandom {
  constructor() {
    super();
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
}
class LifeDuration extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 1e-4;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
}
class Life {
  constructor() {
    this.count = 0;
    this.delay = new LifeDelay();
    this.duration = new LifeDuration();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = data.count;
    }
    this.delay.load(data.delay);
    this.duration.load(data.duration);
  }
}
class LifeUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
    if (!lifeOptions) {
      return;
    }
    particle.life = {
      delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : getRandom()) / container.retina.reduceFactor * 1e3 : 0,
      delayTime: 0,
      duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : getRandom()) / container.retina.reduceFactor * 1e3 : 0,
      time: 0,
      count: lifeOptions.count
    };
    if (particle.life.duration <= 0) {
      particle.life.duration = -1;
    }
    if (particle.life.count <= 0) {
      particle.life.count = -1;
    }
    if (particle.life) {
      particle.spawning = particle.life.delay > 0;
    }
  }
  isEnabled(particle) {
    return !particle.destroyed;
  }
  loadOptions(options, ...sources) {
    if (!options.life) {
      options.life = new Life();
    }
    for (const source of sources) {
      options.life.load(source == null ? void 0 : source.life);
    }
  }
  update(particle, delta) {
    if (!this.isEnabled(particle) || !particle.life) {
      return;
    }
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
      life.delayTime += delta.value;
      if (life.delayTime >= particle.life.delay) {
        justSpawned = true;
        particle.spawning = false;
        life.delayTime = 0;
        life.time = 0;
      } else {
        return;
      }
    }
    if (life.duration === -1) {
      return;
    }
    if (particle.spawning) {
      return;
    }
    if (justSpawned) {
      life.time = 0;
    } else {
      life.time += delta.value;
    }
    if (life.time < life.duration) {
      return;
    }
    life.time = 0;
    if (particle.life.count > 0) {
      particle.life.count--;
    }
    if (particle.life.count === 0) {
      particle.destroy();
      return;
    }
    const canvasSize = this.container.canvas.size, widthRange = setRangeValue(0, canvasSize.width), heightRange = setRangeValue(0, canvasSize.width);
    particle.position.x = randomInRange(widthRange);
    particle.position.y = randomInRange(heightRange);
    particle.spawning = true;
    life.delayTime = 0;
    life.time = 0;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
      life.delay = getRangeValue(lifeOptions.delay.value) * 1e3;
      life.duration = getRangeValue(lifeOptions.duration.value) * 1e3;
    }
  }
}
async function loadLifeUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("life", (container) => new LifeUpdater(container), refresh);
}
class LineDrawer {
  draw(context, particle, radius) {
    const shapeData = particle.shapeData;
    context.moveTo(-radius / 2, 0);
    context.lineTo(radius / 2, 0);
    context.lineCap = (shapeData == null ? void 0 : shapeData.cap) ?? "butt";
  }
  getSidesCount() {
    return 1;
  }
}
async function loadLineShape(engine, refresh = true) {
  await engine.addShape("line", new LineDrawer(), refresh);
}
class ParallaxMover {
  init() {
  }
  isEnabled(particle) {
    return !isSsr() && !particle.destroyed && particle.container.actualOptions.interactivity.events.onHover.parallax.enable;
  }
  move(particle) {
    const container = particle.container, options = container.actualOptions, parallaxOptions = options.interactivity.events.onHover.parallax;
    if (isSsr() || !parallaxOptions.enable) {
      return;
    }
    const parallaxForce = parallaxOptions.force, mousePos = container.interactivity.mouse.position;
    if (!mousePos) {
      return;
    }
    const canvasSize = container.canvas.size, canvasCenter = {
      x: canvasSize.width / 2,
      y: canvasSize.height / 2
    }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
      x: (mousePos.x - canvasCenter.x) * factor,
      y: (mousePos.y - canvasCenter.y) * factor
    }, { offset } = particle;
    offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
    offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
  }
}
async function loadParallaxMover(engine, refresh = true) {
  await engine.addMover("parallax", () => new ParallaxMover(), refresh);
}
class Attractor2 extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
  }
  async interact(p1) {
    const container = this.container, distance = p1.retina.attractDistance ?? container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), { dx, dy } = getDistances(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1e3), ay = dy / (rotate.y * 1e3), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;
      p1.velocity.x -= ax * p1Factor;
      p1.velocity.y -= ay * p1Factor;
      p2.velocity.x += ax * p2Factor;
      p2.velocity.y += ay * p2Factor;
    }
  }
  isEnabled(particle) {
    return particle.options.move.attract.enable;
  }
  reset() {
  }
}
async function loadParticlesAttractInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesAttract", (container) => new Attractor2(container), refresh);
}
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
  const factor = clamp(p1.options.collisions.absorb.speed * delta.factor / 10, 0, r2);
  p1.size.value += factor / 2;
  p2.size.value -= factor;
  if (r2 <= pixelRatio) {
    p2.size.value = 0;
    p2.destroy();
  }
}
function absorb(p1, p2, delta, pixelRatio) {
  const r1 = p1.getRadius(), r2 = p2.getRadius();
  if (r1 === void 0 && r2 !== void 0) {
    p1.destroy();
  } else if (r1 !== void 0 && r2 === void 0) {
    p2.destroy();
  } else if (r1 !== void 0 && r2 !== void 0) {
    if (r1 >= r2) {
      updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
    } else {
      updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
    }
  }
}
const fixBounceSpeed = (p) => {
  if (p.collisionMaxSpeed === void 0) {
    p.collisionMaxSpeed = getRangeValue(p.options.collisions.maxSpeed);
  }
  if (p.velocity.length > p.collisionMaxSpeed) {
    p.velocity.length = p.collisionMaxSpeed;
  }
};
function bounce(p1, p2) {
  circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
  fixBounceSpeed(p1);
  fixBounceSpeed(p2);
}
function destroy(p1, p2) {
  if (!p1.unbreakable && !p2.unbreakable) {
    bounce(p1, p2);
  }
  if (p1.getRadius() === void 0 && p2.getRadius() !== void 0) {
    p1.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() === void 0) {
    p2.destroy();
  } else if (p1.getRadius() !== void 0 && p2.getRadius() !== void 0) {
    const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
    deleteP.destroy();
  }
}
function resolveCollision(p1, p2, delta, pixelRatio) {
  switch (p1.options.collisions.mode) {
    case "absorb": {
      absorb(p1, p2, delta, pixelRatio);
      break;
    }
    case "bounce": {
      bounce(p1, p2);
      break;
    }
    case "destroy": {
      destroy(p1, p2);
      break;
    }
  }
}
class Collider extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
  }
  clear() {
  }
  init() {
  }
  async interact(p1, delta) {
    if (p1.destroyed || p1.spawning) {
      return;
    }
    const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);
    for (const p2 of query) {
      if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
        continue;
      }
      const pos2 = p2.getPosition(), radius2 = p2.getRadius();
      if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
        continue;
      }
      const dist = getDistance(pos1, pos2), distP = radius1 + radius2;
      if (dist > distP) {
        continue;
      }
      resolveCollision(p1, p2, delta, container.retina.pixelRatio);
    }
  }
  isEnabled(particle) {
    return particle.options.collisions.enable;
  }
  reset() {
  }
}
async function loadParticlesCollisionsInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesCollisions", (container) => new Collider(container), refresh);
}
class CircleWarp extends Circle {
  constructor(x, y, radius, canvasSize) {
    super(x, y, radius);
    this.canvasSize = canvasSize;
    this.canvasSize = { ...canvasSize };
  }
  contains(point) {
    const { width, height } = this.canvasSize;
    const { x, y } = point;
    return super.contains(point) || super.contains({ x: x - width, y }) || super.contains({ x: x - width, y: y - height }) || super.contains({ x, y: y - height });
  }
  intersects(range) {
    if (super.intersects(range)) {
      return true;
    }
    const rect = range, circle = range, newPos = {
      x: range.position.x - this.canvasSize.width,
      y: range.position.y - this.canvasSize.height
    };
    if (circle.radius !== void 0) {
      const biggerCircle = new Circle(newPos.x, newPos.y, circle.radius * 2);
      return super.intersects(biggerCircle);
    } else if (rect.size !== void 0) {
      const rectSW = new Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
      return super.intersects(rectSW);
    }
    return false;
  }
}
class LinksShadow {
  constructor() {
    this.blur = 5;
    this.color = new OptionsColor();
    this.color.value = "#000";
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
}
class LinksTriangle {
  constructor() {
    this.enable = false;
    this.frequency = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
}
class Links {
  constructor() {
    this.blink = false;
    this.color = new OptionsColor();
    this.color.value = "#fff";
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.frequency = 1;
    this.opacity = 1;
    this.shadow = new LinksShadow();
    this.triangles = new LinksTriangle();
    this.width = 1;
    this.warp = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.id !== void 0) {
      this.id = data.id;
    }
    if (data.blink !== void 0) {
      this.blink = data.blink;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.consent !== void 0) {
      this.consent = data.consent;
    }
    if (data.distance !== void 0) {
      this.distance = data.distance;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.frequency !== void 0) {
      this.frequency = data.frequency;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
    this.shadow.load(data.shadow);
    this.triangles.load(data.triangles);
    if (data.width !== void 0) {
      this.width = data.width;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
}
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
  const { dx, dy, distance } = getDistances(pos1, pos2);
  if (!warp || distance <= optDistance) {
    return distance;
  }
  const absDiffs = {
    x: Math.abs(dx),
    y: Math.abs(dy)
  }, warpDistances = {
    x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
    y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y)
  };
  return Math.sqrt(warpDistances.x ** 2 + warpDistances.y ** 2);
}
class Linker extends ParticlesInteractorBase {
  constructor(container) {
    super(container);
    this._setColor = (p1) => {
      if (!p1.options.links) {
        return;
      }
      const container2 = this.linkContainer, linksOptions = p1.options.links;
      let linkColor = linksOptions.id === void 0 ? container2.particles.linksColor : container2.particles.linksColors.get(linksOptions.id);
      if (linkColor) {
        return;
      }
      const optColor = linksOptions.color;
      linkColor = getLinkRandomColor(optColor, linksOptions.blink, linksOptions.consent);
      if (linksOptions.id === void 0) {
        container2.particles.linksColor = linkColor;
      } else {
        container2.particles.linksColors.set(linksOptions.id, linkColor);
      }
    };
    this.linkContainer = container;
  }
  clear() {
  }
  init() {
    this.linkContainer.particles.linksColor = void 0;
    this.linkContainer.particles.linksColors = /* @__PURE__ */ new Map();
  }
  async interact(p1) {
    if (!p1.options.links) {
      return;
    }
    p1.links = [];
    const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
    if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
      return;
    }
    const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? 0, warp = linkOpt1.warp, range = warp ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize) : new Circle(pos1.x, pos1.y, optDistance), query = container.particles.quadTree.query(range);
    for (const p2 of query) {
      const linkOpt2 = p2.options.links;
      if (p1 === p2 || !(linkOpt2 == null ? void 0 : linkOpt2.enable) || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t) => t.destination === p2) || p2.links.some((t) => t.destination === p1)) {
        continue;
      }
      const pos2 = p2.getPosition();
      if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
        continue;
      }
      const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
      if (distance > optDistance) {
        continue;
      }
      const opacityLine = (1 - distance / optDistance) * optOpacity;
      this._setColor(p1);
      p1.links.push({
        destination: p2,
        opacity: opacityLine
      });
    }
  }
  isEnabled(particle) {
    var _a;
    return !!((_a = particle.options.links) == null ? void 0 : _a.enable);
  }
  loadParticlesOptions(options, ...sources) {
    if (!options.links) {
      options.links = new Links();
    }
    for (const source of sources) {
      options.links.load((source == null ? void 0 : source.links) ?? (source == null ? void 0 : source.lineLinked) ?? (source == null ? void 0 : source.line_linked));
    }
  }
  reset() {
  }
}
async function loadLinksInteraction(engine, refresh = true) {
  await engine.addInteractor("particlesLinks", (container) => new Linker(container), refresh);
}
function drawLinkLine(params) {
  let drawn = false;
  const { begin, end, maxDistance, context, canvasSize, width, backgroundMask, colorLine, opacity, links } = params;
  if (getDistance(begin, end) <= maxDistance) {
    drawLine(context, begin, end);
    drawn = true;
  } else if (links.warp) {
    let pi1;
    let pi2;
    const endNE = {
      x: end.x - canvasSize.width,
      y: end.y
    };
    const d1 = getDistances(begin, endNE);
    if (d1.distance <= maxDistance) {
      const yi = begin.y - d1.dy / d1.dx * begin.x;
      pi1 = { x: 0, y: yi };
      pi2 = { x: canvasSize.width, y: yi };
    } else {
      const endSW = {
        x: end.x,
        y: end.y - canvasSize.height
      };
      const d2 = getDistances(begin, endSW);
      if (d2.distance <= maxDistance) {
        const yi = begin.y - d2.dy / d2.dx * begin.x;
        const xi = -yi / (d2.dy / d2.dx);
        pi1 = { x: xi, y: 0 };
        pi2 = { x: xi, y: canvasSize.height };
      } else {
        const endSE = {
          x: end.x - canvasSize.width,
          y: end.y - canvasSize.height
        };
        const d3 = getDistances(begin, endSE);
        if (d3.distance <= maxDistance) {
          const yi = begin.y - d3.dy / d3.dx * begin.x;
          const xi = -yi / (d3.dy / d3.dx);
          pi1 = { x: xi, y: yi };
          pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
        }
      }
    }
    if (pi1 && pi2) {
      drawLine(context, begin, pi1);
      drawLine(context, end, pi2);
      drawn = true;
    }
  }
  if (!drawn) {
    return;
  }
  context.lineWidth = width;
  if (backgroundMask.enable) {
    context.globalCompositeOperation = backgroundMask.composite;
  }
  context.strokeStyle = getStyleFromRgb(colorLine, opacity);
  const { shadow } = links;
  if (shadow.enable) {
    const shadowColor = rangeColorToRgb(shadow.color);
    if (shadowColor) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = getStyleFromRgb(shadowColor);
    }
  }
  context.stroke();
}
function drawLinkTriangle(params) {
  const { context, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle } = params;
  drawTriangle(context, pos1, pos2, pos3);
  if (backgroundMask.enable) {
    context.globalCompositeOperation = backgroundMask.composite;
  }
  context.fillStyle = getStyleFromRgb(colorTriangle, opacityTriangle);
  context.fill();
}
function getLinkKey(ids) {
  ids.sort((a, b) => a - b);
  return ids.join("_");
}
function setLinkFrequency(particles, dictionary) {
  const key = getLinkKey(particles.map((t) => t.id));
  let res = dictionary.get(key);
  if (res === void 0) {
    res = getRandom();
    dictionary.set(key, res);
  }
  return res;
}
class LinkInstance {
  constructor(container) {
    this.container = container;
    this._drawLinkLine = (p1, link) => {
      const p1LinksOptions = p1.options.links;
      if (!(p1LinksOptions == null ? void 0 : p1LinksOptions.enable)) {
        return;
      }
      const container2 = this.container, options = container2.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
      let opacity = link.opacity;
      container2.canvas.draw((ctx) => {
        var _a;
        let colorLine;
        const twinkle = (_a = p1.options.twinkle) == null ? void 0 : _a.lines;
        if (twinkle == null ? void 0 : twinkle.enable) {
          const twinkleFreq = twinkle.frequency, twinkleRgb = rangeColorToRgb(twinkle.color), twinkling = getRandom() < twinkleFreq;
          if (twinkling && twinkleRgb) {
            colorLine = twinkleRgb;
            opacity = getRangeValue(twinkle.opacity);
          }
        }
        if (!colorLine) {
          const linkColor = p1LinksOptions.id !== void 0 ? container2.particles.linksColors.get(p1LinksOptions.id) : container2.particles.linksColor;
          colorLine = getLinkColor(p1, p2, linkColor);
        }
        if (!colorLine) {
          return;
        }
        const width = p1.retina.linksWidth ?? 0, maxDistance = p1.retina.linksDistance ?? 0, { backgroundMask } = options;
        drawLinkLine({
          context: ctx,
          width,
          begin: pos1,
          end: pos2,
          maxDistance,
          canvasSize: container2.canvas.size,
          links: p1LinksOptions,
          backgroundMask,
          colorLine,
          opacity
        });
      });
    };
    this._drawLinkTriangle = (p1, link1, link2) => {
      const linksOptions = p1.options.links;
      if (!(linksOptions == null ? void 0 : linksOptions.enable)) {
        return;
      }
      const triangleOptions = linksOptions.triangles;
      if (!triangleOptions.enable) {
        return;
      }
      const container2 = this.container, options = container2.actualOptions, p2 = link1.destination, p3 = link2.destination, opacityTriangle = triangleOptions.opacity ?? (link1.opacity + link2.opacity) / 2;
      if (opacityTriangle <= 0) {
        return;
      }
      container2.canvas.draw((ctx) => {
        const pos1 = p1.getPosition(), pos2 = p2.getPosition(), pos3 = p3.getPosition(), linksDistance = p1.retina.linksDistance ?? 0;
        if (getDistance(pos1, pos2) > linksDistance || getDistance(pos3, pos2) > linksDistance || getDistance(pos3, pos1) > linksDistance) {
          return;
        }
        let colorTriangle = rangeColorToRgb(triangleOptions.color);
        if (!colorTriangle) {
          const linkColor = linksOptions.id !== void 0 ? container2.particles.linksColors.get(linksOptions.id) : container2.particles.linksColor;
          colorTriangle = getLinkColor(p1, p2, linkColor);
        }
        if (!colorTriangle) {
          return;
        }
        drawLinkTriangle({
          context: ctx,
          pos1,
          pos2,
          pos3,
          backgroundMask: options.backgroundMask,
          colorTriangle,
          opacityTriangle
        });
      });
    };
    this._drawTriangles = (options, p1, link, p1Links) => {
      var _a, _b, _c;
      const p2 = link.destination;
      if (!(((_a = options.links) == null ? void 0 : _a.triangles.enable) && ((_b = p2.options.links) == null ? void 0 : _b.triangles.enable))) {
        return;
      }
      const vertices = (_c = p2.links) == null ? void 0 : _c.filter((t) => {
        const linkFreq = this._getLinkFrequency(p2, t.destination);
        return p2.options.links && linkFreq <= p2.options.links.frequency && p1Links.findIndex((l) => l.destination === t.destination) >= 0;
      });
      if (!(vertices == null ? void 0 : vertices.length)) {
        return;
      }
      for (const vertex of vertices) {
        const p3 = vertex.destination, triangleFreq = this._getTriangleFrequency(p1, p2, p3);
        if (triangleFreq > options.links.triangles.frequency) {
          continue;
        }
        this._drawLinkTriangle(p1, link, vertex);
      }
    };
    this._getLinkFrequency = (p1, p2) => {
      return setLinkFrequency([p1, p2], this._freqs.links);
    };
    this._getTriangleFrequency = (p1, p2, p3) => {
      return setLinkFrequency([p1, p2, p3], this._freqs.triangles);
    };
    this._freqs = {
      links: /* @__PURE__ */ new Map(),
      triangles: /* @__PURE__ */ new Map()
    };
  }
  drawParticle(context, particle) {
    const { links, options } = particle;
    if (!links || links.length <= 0) {
      return;
    }
    const p1Links = links.filter((l) => options.links && this._getLinkFrequency(particle, l.destination) <= options.links.frequency);
    for (const link of p1Links) {
      this._drawTriangles(options, particle, link, p1Links);
      if (link.opacity > 0 && (particle.retina.linksWidth ?? 0) > 0) {
        this._drawLinkLine(particle, link);
      }
    }
  }
  async init() {
    this._freqs.links = /* @__PURE__ */ new Map();
    this._freqs.triangles = /* @__PURE__ */ new Map();
  }
  particleCreated(particle) {
    particle.links = [];
    if (!particle.options.links) {
      return;
    }
    const ratio = this.container.retina.pixelRatio, { retina } = particle, { distance, width } = particle.options.links;
    retina.linksDistance = distance * ratio;
    retina.linksWidth = width * ratio;
  }
  particleDestroyed(particle) {
    particle.links = [];
  }
}
class LinksPlugin {
  constructor() {
    this.id = "links";
  }
  getPlugin(container) {
    return new LinkInstance(container);
  }
  loadOptions() {
  }
  needsPlugin() {
    return true;
  }
}
async function loadLinksPlugin(engine, refresh = true) {
  const plugin = new LinksPlugin();
  await engine.addPlugin(plugin, refresh);
}
async function loadParticlesLinksInteraction(engine, refresh = true) {
  await loadLinksInteraction(engine, refresh);
  await loadLinksPlugin(engine, refresh);
}
class PolygonDrawerBase {
  draw(context, particle, radius) {
    const start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius), sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides, interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
    if (!context) {
      return;
    }
    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(0, 0);
    for (let i = 0; i < sideCount; i++) {
      context.lineTo(side.length, 0);
      context.translate(side.length, 0);
      context.rotate(interiorAngle);
    }
  }
  getSidesCount(particle) {
    const polygon = particle.shapeData;
    return Math.round(getRangeValue((polygon == null ? void 0 : polygon.sides) ?? (polygon == null ? void 0 : polygon.nb_sides) ?? 5));
  }
}
class PolygonDrawer extends PolygonDrawerBase {
  getCenter(particle, radius) {
    return {
      x: -radius / (particle.sides / 3.5),
      y: -radius / (2.66 / 3.5)
    };
  }
  getSidesData(particle, radius) {
    const sides = particle.sides;
    return {
      count: {
        denominator: 1,
        numerator: sides
      },
      length: radius * 2.66 / (sides / 3)
    };
  }
}
class TriangleDrawer extends PolygonDrawerBase {
  getCenter(particle, radius) {
    return {
      x: -radius,
      y: radius / 1.66
    };
  }
  getSidesCount() {
    return 3;
  }
  getSidesData(particle, radius) {
    return {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: radius * 2
    };
  }
}
async function loadGenericPolygonShape(engine, refresh = true) {
  await engine.addShape("polygon", new PolygonDrawer(), refresh);
}
async function loadTriangleShape(engine, refresh = true) {
  await engine.addShape("triangle", new TriangleDrawer(), refresh);
}
async function loadPolygonShape(engine, refresh = true) {
  await loadGenericPolygonShape(engine, refresh);
  await loadTriangleShape(engine, refresh);
}
class RotateAnimation {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.decay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
}
class Rotate extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new RotateAnimation();
    this.direction = "clockwise";
    this.path = false;
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    this.animation.load(data.animation);
    if (data.path !== void 0) {
      this.path = data.path;
    }
  }
}
function updateRotate(particle, delta) {
  const rotate = particle.rotate, rotateOptions = particle.options.rotate;
  if (!rotate || !rotateOptions) {
    return;
  }
  const rotateAnimation = rotateOptions.animation, speed = (rotate.velocity ?? 0) * delta.factor, max = 2 * Math.PI, decay = rotate.decay ?? 1;
  if (!rotateAnimation.enable) {
    return;
  }
  switch (rotate.status) {
    case "increasing":
      rotate.value += speed;
      if (rotate.value > max) {
        rotate.value -= max;
      }
      break;
    case "decreasing":
    default:
      rotate.value -= speed;
      if (rotate.value < 0) {
        rotate.value += max;
      }
      break;
  }
  if (rotate.velocity && decay !== 1) {
    rotate.velocity *= decay;
  }
}
class RotateUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    const rotateOptions = particle.options.rotate;
    if (!rotateOptions) {
      return;
    }
    particle.rotate = {
      enable: rotateOptions.animation.enable,
      value: getRangeValue(rotateOptions.value) * Math.PI / 180
    };
    particle.pathRotation = rotateOptions.path;
    let rotateDirection = rotateOptions.direction;
    if (rotateDirection === "random") {
      const index = Math.floor(getRandom() * 2);
      rotateDirection = index > 0 ? "counter-clockwise" : "clockwise";
    }
    switch (rotateDirection) {
      case "counter-clockwise":
      case "counterClockwise":
        particle.rotate.status = "decreasing";
        break;
      case "clockwise":
        particle.rotate.status = "increasing";
        break;
    }
    const rotateAnimation = rotateOptions.animation;
    if (rotateAnimation.enable) {
      particle.rotate.decay = 1 - getRangeValue(rotateAnimation.decay);
      particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / 360 * this.container.retina.reduceFactor;
      if (!rotateAnimation.sync) {
        particle.rotate.velocity *= getRandom();
      }
    }
    particle.rotation = particle.rotate.value;
  }
  isEnabled(particle) {
    const rotate = particle.options.rotate;
    if (!rotate) {
      return false;
    }
    return !particle.destroyed && !particle.spawning && rotate.animation.enable && !rotate.path;
  }
  loadOptions(options, ...sources) {
    if (!options.rotate) {
      options.rotate = new Rotate();
    }
    for (const source of sources) {
      options.rotate.load(source == null ? void 0 : source.rotate);
    }
  }
  update(particle, delta) {
    var _a;
    if (!this.isEnabled(particle)) {
      return;
    }
    updateRotate(particle, delta);
    particle.rotation = ((_a = particle.rotate) == null ? void 0 : _a.value) ?? 0;
  }
}
async function loadRotateUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("rotate", (container) => new RotateUpdater(container), refresh);
}
const fixFactor = Math.sqrt(2);
class SquareDrawer {
  draw(context, particle, radius) {
    const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;
    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
  }
  getSidesCount() {
    return 4;
  }
}
async function loadSquareShape(engine, refresh = true) {
  await engine.addShape(["edge", "square"], new SquareDrawer(), refresh);
}
class StarDrawer {
  draw(context, particle, radius) {
    const sides = particle.sides, inset = particle.starInset ?? 2;
    context.moveTo(0, 0 - radius);
    for (let i = 0; i < sides; i++) {
      context.rotate(Math.PI / sides);
      context.lineTo(0, 0 - radius * inset);
      context.rotate(Math.PI / sides);
      context.lineTo(0, 0 - radius);
    }
  }
  getSidesCount(particle) {
    const star = particle.shapeData;
    return Math.round(getRangeValue((star == null ? void 0 : star.sides) ?? (star == null ? void 0 : star.nb_sides) ?? 5));
  }
  particleInit(container, particle) {
    const star = particle.shapeData, inset = getRangeValue((star == null ? void 0 : star.inset) ?? 2);
    particle.starInset = inset;
  }
}
async function loadStarShape(engine, refresh = true) {
  await engine.addShape("star", new StarDrawer(), refresh);
}
function updateColorValue(delta, colorValue, valueAnimation, max, decrease) {
  if (!colorValue || !valueAnimation.enable || (colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0)) {
    return;
  }
  if (!colorValue.time) {
    colorValue.time = 0;
  }
  if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
    colorValue.time += delta.value;
  }
  if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
    return;
  }
  const offset = randomInRange(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;
  if (!decrease || colorValue.status === "increasing") {
    colorValue.value += velocity;
    if (colorValue.value > max) {
      if (!colorValue.loops) {
        colorValue.loops = 0;
      }
      colorValue.loops++;
      if (decrease) {
        colorValue.status = "decreasing";
        colorValue.value -= colorValue.value % max;
      }
    }
  } else {
    colorValue.value -= velocity;
    if (colorValue.value < 0) {
      if (!colorValue.loops) {
        colorValue.loops = 0;
      }
      colorValue.loops++;
      colorValue.status = "increasing";
      colorValue.value += colorValue.value;
    }
  }
  if (colorValue.velocity && decay !== 1) {
    colorValue.velocity *= decay;
  }
  if (colorValue.value > max) {
    colorValue.value %= max;
  }
}
function updateStrokeColor(particle, delta) {
  if (!particle.strokeColor || !particle.strokeAnimation) {
    return;
  }
  const { h, s, l } = particle.strokeColor, { h: hAnimation, s: sAnimation, l: lAnimation } = particle.strokeAnimation;
  if (h) {
    updateColorValue(delta, h, hAnimation, 360, false);
  }
  if (s) {
    updateColorValue(delta, s, sAnimation, 100, true);
  }
  if (l) {
    updateColorValue(delta, l, lAnimation, 100, true);
  }
}
class StrokeColorUpdater {
  constructor(container) {
    this.container = container;
  }
  init(particle) {
    var _a;
    const container = this.container, options = particle.options;
    const stroke = itemFromSingleOrMultiple(options.stroke, particle.id, options.reduceDuplicates);
    particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
    particle.strokeOpacity = getRangeValue(stroke.opacity ?? 1);
    particle.strokeAnimation = (_a = stroke.color) == null ? void 0 : _a.animation;
    const strokeHslColor = rangeColorToHsl(stroke.color) ?? particle.getFillColor();
    if (strokeHslColor) {
      particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
    }
  }
  isEnabled(particle) {
    const color = particle.strokeAnimation, { strokeColor } = particle;
    return !particle.destroyed && !particle.spawning && !!color && ((strokeColor == null ? void 0 : strokeColor.h.value) !== void 0 && strokeColor.h.enable || (strokeColor == null ? void 0 : strokeColor.s.value) !== void 0 && strokeColor.s.enable || (strokeColor == null ? void 0 : strokeColor.l.value) !== void 0 && strokeColor.l.enable);
  }
  update(particle, delta) {
    if (!this.isEnabled(particle)) {
      return;
    }
    updateStrokeColor(particle, delta);
  }
}
async function loadStrokeColorUpdater(engine, refresh = true) {
  await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater(container), refresh);
}
const validTypes = ["text", "character", "char"];
class TextDrawer {
  draw(context, particle, radius, opacity) {
    const character = particle.shapeData;
    if (character === void 0) {
      return;
    }
    const textData = character.value;
    if (textData === void 0) {
      return;
    }
    if (particle.text === void 0) {
      particle.text = itemFromSingleOrMultiple(textData, particle.randomIndexData);
    }
    const text = particle.text, style = character.style ?? "", weight = character.weight ?? "400", size = Math.round(radius) * 2, font = character.font ?? "Verdana", fill = particle.fill, offsetX = text.length * radius / 2;
    context.font = `${style} ${weight} ${size}px "${font}"`;
    const pos = {
      x: -offsetX,
      y: radius / 2
    };
    context.globalAlpha = opacity;
    if (fill) {
      context.fillText(text, pos.x, pos.y);
    } else {
      context.strokeText(text, pos.x, pos.y);
    }
    context.globalAlpha = 1;
  }
  getSidesCount() {
    return 12;
  }
  async init(container) {
    const options = container.actualOptions;
    if (validTypes.find((t) => isInArray(t, options.particles.shape.type))) {
      const shapeOptions = validTypes.map((t) => options.particles.shape.options[t]).find((t) => !!t), promises = [];
      executeOnSingleOrMultiple(shapeOptions, (shape) => {
        promises.push(loadFont(shape.font, shape.weight));
      });
      await Promise.all(promises);
    }
  }
  particleInit(container, particle) {
    if (!particle.shape || !validTypes.includes(particle.shape)) {
      return;
    }
    const character = particle.shapeData;
    if (character === void 0) {
      return;
    }
    const textData = character.value;
    if (textData === void 0) {
      return;
    }
    particle.text = itemFromSingleOrMultiple(textData, particle.randomIndexData);
  }
}
async function loadTextShape(engine, refresh = true) {
  await engine.addShape(validTypes, new TextDrawer(), refresh);
}
async function loadSlim(engine, refresh = true) {
  initPjs(engine);
  await loadParallaxMover(engine, false);
  await loadExternalAttractInteraction(engine, false);
  await loadExternalBounceInteraction(engine, false);
  await loadExternalBubbleInteraction(engine, false);
  await loadExternalConnectInteraction(engine, false);
  await loadExternalGrabInteraction(engine, false);
  await loadExternalPauseInteraction(engine, false);
  await loadExternalPushInteraction(engine, false);
  await loadExternalRemoveInteraction(engine, false);
  await loadExternalRepulseInteraction(engine, false);
  await loadExternalSlowInteraction(engine, false);
  await loadParticlesAttractInteraction(engine, false);
  await loadParticlesCollisionsInteraction(engine, false);
  await loadParticlesLinksInteraction(engine, false);
  await loadEasingQuadPlugin();
  await loadImageShape(engine, false);
  await loadLineShape(engine, false);
  await loadPolygonShape(engine, false);
  await loadSquareShape(engine, false);
  await loadStarShape(engine, false);
  await loadTextShape(engine, false);
  await loadLifeUpdater(engine, false);
  await loadRotateUpdater(engine, false);
  await loadStrokeColorUpdater(engine, false);
  await loadBasic(engine, refresh);
}
function Sparkles() {
  const particlesInit = reactExports.useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Particles$2,
    {
      id: "tsparticles",
      init: particlesInit,
      className: "fixed bottom-0 left-0 right-0 z-10 pointer-events-none",
      options: {
        autoPlay: true,
        fullScreen: {
          enable: true,
          zIndex: 1
        },
        detectRetina: true,
        fpsLimit: 60,
        particles: {
          move: {
            angle: {
              offset: 0,
              value: 10
            },
            decay: 0,
            direction: "top",
            enable: true,
            speed: 0.5
          },
          number: {
            density: {
              enable: true,
              factor: 1e3
            },
            value: 100
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1
            },
            value: {
              min: 0.1,
              max: 0.3
            },
            animation: {
              count: 0,
              enable: true,
              speed: 1,
              decay: 0,
              opacity_min: 0,
              sync: false,
              mode: "auto",
              startValue: "max",
              minimumValue: 0
            }
          },
          size: {
            random: {
              enable: true,
              minimumValue: 2
            },
            value: {
              min: 2,
              max: 7
            }
          }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        smooth: true,
        zLayers: 100,
        style: {
          height: "40%",
          top: "auto",
          bottom: "0"
        },
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true
          }
        }
      }
    }
  );
}
const art = [
  {
    pfp: "uGpQAzA2",
    art: "OFWgsupp",
    twitter: "@96hoshii_0317",
    nickname: "Kuro",
    location: ""
  },
  {
    pfp: "wpkbhIHw",
    art: "qERWh7L7",
    twitter: "DO_SHA-MEH(@doshameh)",
    nickname: "DO_SHA-MEH",
    location: "South-Korea"
  },
  {
    pfp: "HUDlUNH9",
    art: "s85i9FpV",
    twitter: "@clumsyhero",
    nickname: "ClumsyHeroクラムジー・ヒーロー",
    location: "Canada"
  },
  {
    pfp: "cD4anv_u",
    art: "rwXiuqTP",
    twitter: "@putting0091",
    nickname: "布丁プリン",
    location: "Taiwan 台灣"
  },
  {
    pfp: "zVvHKIfq",
    art: "Vjm0bdGL",
    twitter: "@xunbaiyun",
    nickname: "白云",
    location: "China"
  },
  {
    pfp: "Q0J30zuS",
    art: "UL8JWzOi",
    twitter: "@Legz0s",
    nickname: "Legzy",
    location: "Vietnam"
  },
  {
    pfp: "",
    art: "Aja-lQlf",
    twitter: "@_K_le",
    nickname: "六華Forever9Nine",
    location: "Singapore"
  },
  {
    pfp: "s3s4RsP9",
    art: "Vadg1Gf9",
    twitter: "@bkazu45",
    nickname: "リンゴリンゴカズキチ",
    location: "Japan / 日本"
  },
  {
    pfp: "5VwrP7UW",
    art: "VE9p-zl-",
    twitter: "@moutaincat_",
    nickname: "山貓",
    location: "Taiwan 台灣"
  },
  {
    pfp: "g6XT5IjP",
    art: "fgGaWGxO",
    twitter: "@kan_illust_",
    nickname: "kan",
    location: "Taiwan 台灣"
  },
  {
    pfp: "jHpyYsq6",
    art: "UWT4Y_cQ",
    twitter: "@eddddxdd",
    nickname: "リネン",
    location: "Taiwan 台灣"
  },
  {
    pfp: "wxDUPnEf",
    art: "amde9w1M",
    twitter: "@icederi1213",
    nickname: "艾絲黛莉",
    location: "Taiwan 台灣"
  },
  {
    pfp: "T1ZJF7CJ",
    art: "HJWAzpph",
    twitter: "みにすぴー🍑🥟 @speed725",
    nickname: "みにすぴー",
    location: "Japan / 日本"
  },
  {
    pfp: "7wPPDi0n",
    art: "0ZoGPI1o",
    twitter: "@LuLuchao04306",
    nickname: "るるちゃお",
    location: "Taiwan 台灣"
  },
  {
    pfp: "oIEcrWIO",
    art: "hEAdEIpu",
    twitter: "@oshigoto_miyasi",
    nickname: "みやしい",
    location: "Japan / 日本"
  },
  {
    pfp: "1t45ebgQ",
    art: "fD8UWYJf",
    twitter: "@nyctos5",
    nickname: "ケイト♡",
    location: "United-States"
  },
  {
    pfp: "NjJO_Koi",
    art: "BTJs3KrQ",
    twitter: "ねっ子のさとこー",
    nickname: "さとこー",
    location: "Japan / 日本"
  },
  {
    pfp: "ZCBcJYl-",
    art: "dat8hbWx",
    twitter: "@unearthlycoder",
    nickname: "Unearthly",
    location: "United-States"
  },
  {
    pfp: "82JR544f",
    art: "xiTEfHoG",
    twitter: "Tokki-egg (@tokk1-egg)",
    nickname: "Eggo",
    location: ""
  },
  {
    pfp: "elh2UtNX",
    art: "GP-UVhTr",
    twitter: "@SuhaibHoloSimp",
    nickname: "Suhaib",
    location: "Pakistan"
  },
  {
    pfp: "",
    art: "e1GvREsq",
    twitter: "@maskcat24",
    nickname: "面具貓",
    location: "Taiwan 台灣"
  },
  {
    pfp: "x0sv7MJb",
    art: "bLj66N_j",
    twitter: "@MonNaga1",
    nickname: "ながもん",
    location: "Japan / 日本"
  },
  {
    pfp: "0za__BgI",
    art: "joxOhcA-",
    twitter: "@Naiko0210",
    nickname: "Neiku內褲",
    location: "Taiwan 台灣"
  },
  {
    pfp: "u4EKtzVZ",
    art: "VLhtbYRi",
    twitter: "@OnirengerGo",
    nickname: "歐尼オニタン",
    location: "Taiwan 台灣"
  },
  {
    pfp: "TbFSO2RL",
    art: "0WVQsmj1",
    twitter: "@alta_under",
    nickname: "Alt A",
    location: "Japan / 日本"
  },
  {
    pfp: "tNcA1e7p",
    art: "a8Sk9hUC",
    twitter: "@ie_necco",
    nickname: "いえねっこ",
    location: "Japan / 日本"
  },
  {
    pfp: "F5gUcNFx",
    art: "VDd9__va",
    twitter: "geng2521",
    nickname: "小幻",
    location: "Taiwan 台灣"
  },
  {
    pfp: "19J_j22C",
    art: "2N3UQoPp",
    twitter: "柿の種🍑🥟",
    nickname: "柿の種",
    location: "Japan / 日本"
  },
  {
    pfp: "4Fxp7WiS",
    art: "nbiGzlzM",
    twitter: "@cipher4109",
    nickname: "Cipher4109",
    location: "Singapore"
  },
  {
    pfp: "wRhVNXNZ",
    art: "nSqF8Apk",
    twitter: "@alexis7182",
    nickname: "mi esposo アレクシス",
    location: "Mexico"
  }
];
const cake = [
  {
    pfp: "",
    cake: "CujFWEtf",
    twitter: "@admoon416",
    nickname: "Chris",
    location: "United-States"
  },
  {
    pfp: "wpkbhIHw",
    cake: "2oqqIEer",
    twitter: "DO_SHA-MEH(@doshameh)",
    nickname: "DO_SHA-MEH",
    location: "South-Korea"
  },
  {
    pfp: "EZkmLoLw",
    cake: "-lyPXk_J",
    twitter: "gmgmgmbk",
    nickname: "れんたろ",
    location: "Japan / 日本"
  },
  {
    pfp: "HUDlUNH9",
    cake: "6sIOAeJ-",
    twitter: "@clumsyhero",
    nickname: "ClumsyHeroクラムジー・ヒーロー",
    location: "Canada"
  },
  {
    pfp: "cD4anv_u",
    cake: "uKvgy2CB",
    twitter: "@putting0091",
    nickname: "布丁プリン",
    location: "Taiwan 台灣"
  },
  {
    pfp: "Q0J30zuS",
    cake: "aNIlJ0OI",
    twitter: "@Legz0s",
    nickname: "Legzy",
    location: "Vietnam"
  },
  {
    pfp: "DEVCb0-k",
    cake: "XcxvMt88",
    twitter: "@yuonionn",
    nickname: "onion",
    location: "Taiwan 台灣"
  },
  {
    pfp: "u4yYUxMz",
    cake: "19oHdsH4",
    twitter: "@guiltykitzzz",
    nickname: "Guilty Kitz",
    location: "Japan / 日本"
  },
  {
    pfp: "",
    cake: "my7dDUOT",
    twitter: "",
    nickname: "Bading Gading",
    location: "United-States"
  },
  {
    pfp: "s3s4RsP9",
    cake: "AG7R5QhO",
    twitter: "@bkazu45",
    nickname: "リンゴリンゴカズキチ",
    location: "Japan / 日本"
  },
  {
    pfp: "5VwrP7UW",
    cake: "zGfk4SEC",
    twitter: "@moutaincat_",
    nickname: "山貓",
    location: "Taiwan 台灣"
  },
  {
    pfp: "",
    cake: "Y0ltGiB_",
    twitter: "@BlueEterna",
    nickname: "ChenYx",
    location: "Malaysia"
  },
  {
    pfp: "rj_Q8HTJ",
    cake: "_s8erMC3",
    twitter: "@LODONG666",
    nickname: "羅董LoDong",
    location: "Taiwan 台灣"
  },
  {
    pfp: "wxDUPnEf",
    cake: "JQyBevpD",
    twitter: "@icederi1213",
    nickname: "艾絲黛莉",
    location: "Taiwan 台灣"
  },
  {
    pfp: "Rt0lFONe",
    cake: "jCZvFP7d",
    twitter: "vtange",
    nickname: "vtange",
    location: "United-States"
  },
  {
    pfp: "Z4knaQz_",
    cake: "JWFxeBcJ",
    twitter: "@MauCaVel",
    nickname: "X-Kill/Mau",
    location: "Mexico"
  },
  {
    pfp: "P-kmiygZ",
    cake: "xOB-Yti5",
    twitter: "@pofeloost",
    nickname: "Pofe",
    location: "Thailand"
  },
  {
    pfp: "T1ZJF7CJ",
    cake: "qe64dB3C",
    twitter: "みにすぴー🍑🥟 @speed725",
    nickname: "みにすぴー",
    location: "Japan / 日本"
  },
  {
    pfp: "7wPPDi0n",
    cake: "_FVcQesr",
    twitter: "@LuLuchao04306",
    nickname: "るるちゃお",
    location: "Taiwan 台灣"
  },
  {
    pfp: "ul1-0dgW",
    cake: "Quevz_kE",
    twitter: "@Aldoragezz",
    nickname: "Arudoragezuzu-san",
    location: "Indonesia"
  },
  {
    pfp: "uLzV0UcS",
    cake: "BIbK6ToQ",
    twitter: "@hijeffdesu",
    nickname: "HiJeff",
    location: "Hong Kong 香港"
  },
  {
    pfp: "hLhjQpuE",
    cake: "zTN28ye9",
    twitter: "@Sipu_98",
    nickname: "Sipu",
    location: "Taiwan 台灣"
  },
  {
    pfp: "weeUjU_b",
    cake: "jCs9LCNT",
    twitter: "@Suzuhara_yuel",
    nickname: "鈴原ユエル",
    location: "Taiwan 台灣"
  },
  {
    pfp: "ivehmnqe",
    cake: "LwK8zMLL",
    twitter: "@mymuxam",
    nickname: "Maxumym",
    location: "Russia"
  },
  {
    pfp: "82JR544f",
    cake: "zo-ZuT_A",
    twitter: "Tokki-egg (@tokk1-egg)",
    nickname: "Eggo",
    location: ""
  },
  {
    pfp: "OkbMDX_C",
    cake: "dx-gZPr-",
    twitter: "@AkoAyPayaso",
    nickname: "AkoAyPayaso",
    location: ""
  },
  {
    pfp: "fHNEhOf9",
    cake: "NvrxYoH5",
    twitter: "@nekko_zame",
    nickname: "ねこざめ",
    location: "Japan / 日本"
  },
  {
    pfp: "x0sv7MJb",
    cake: "HpymxSji",
    twitter: "@MonNaga1",
    nickname: "ながもん",
    location: "Japan / 日本"
  },
  {
    pfp: "-j7lQ2Zm",
    cake: "uk97VlSV",
    twitter: "AbnormalNekko",
    nickname: "",
    location: "United-States"
  },
  {
    pfp: "wTOR9OE6",
    cake: "v6zHZL4I",
    twitter: "@Ame_Rudyn",
    nickname: "Botandyn",
    location: "Malaysia"
  },
  {
    pfp: "TbFSO2RL",
    cake: "L9FMcSKX",
    twitter: "@alta_under",
    nickname: "Alt A",
    location: "Japan / 日本"
  },
  {
    pfp: "tNcA1e7p",
    cake: "Ks--9q2H",
    twitter: "@ie_necco",
    nickname: "いえねっこ",
    location: "Japan / 日本"
  },
  {
    pfp: "1q79yacL",
    cake: "iTMd1LxR",
    twitter: "@shashamax627",
    nickname: "shashaMAX",
    location: "Taiwan 台灣"
  },
  {
    pfp: "vqU2BHxR",
    cake: "Vf7ndDtv",
    twitter: "＠extraRei",
    nickname: "x-ray",
    location: "Japan / 日本"
  },
  {
    pfp: "A-zIuew8",
    cake: "dGhyfj_U",
    twitter: "@Tien10Peter",
    nickname: "TienPeter",
    location: "Taiwan 台灣"
  },
  {
    pfp: "qvvO8a-l",
    cake: "3r-yeIsq",
    twitter: "@keimaru114514",
    nickname: "けいまる",
    location: "Japan / 日本"
  },
  {
    pfp: "rzID5EN7",
    cake: "4yb-J2eD",
    twitter: "ルナ(@Kohri1230)",
    nickname: "ルナ",
    location: "Japan / 日本"
  },
  {
    pfp: "VUenmpFe",
    cake: "9DJFN9qH",
    twitter: "@Vanilla_Inazuma",
    nickname: "バニラサンダー",
    location: "United States"
  }
];
const messages = [
  {
    message: "Congratulations Nenechi!!!!! Everyday you make me happy and proud to be a nekko. I will cheer for you forever and always! I hope you know how loved you are across the world. I see how hard you work and I know you love your fans so much. We love you too!!!!!! Keep going until all your dreams are fulfilled, and even more!!!! <3<3<3",
    message_jp: "ねねちおめでとうございます！ねねちのおかげで毎日楽しくて、ねっ子として誇らしいです。いつもずっと応援します！ねねちが世界中で愛されていることをねねちに知らせたいです。ねねちはいつもファンたちのことを大切を思い、頑張ってることを知っています。僕たちもねねちのことが大好きです！ねねちの夢が全部叶いますように！♡",
    nickname: "Chris",
    pfp: "",
    twitter: "@admoon416",
    location: "United-States"
  },
  {
    message: "Happy 3rd Anniversary Nenechi! I've been cheering for you, am currently cheering for you, and will be cheering for you. That goes for anything you seek to do.",
    message_jp: "ねねち３周年おめでとうございます！昔も今も未来もずっと応援します。ねねちがやりたいことがあったサポートします。",
    nickname: "Fishman465",
    pfp: "T2VEyWzI",
    twitter: "@BandgusSol",
    location: "United-States"
  },
  {
    message: "3周年おめでとう！！本当に楽しかった！",
    message_jp: "",
    nickname: "Luore",
    pfp: "",
    twitter: "@luorela",
    location: "United-States"
  },
  {
    message: "I've been a Nekko since I first laid my eyes on my wife, and I've enjoyed the ride all the way. I've always loved her singing and silly antics, and the 5th gen concert showed off all the talent she had storing up. I just want to say, thank you Nene, you've made the past 3 years a blessing for me, and it's been a wonder to be a Nekko!",
    message_jp: "ワイフを見た瞬間からずっとねっ子でした、これからはいつでも楽しく過ごしています。君の歌と気楽な配信雰囲気がいつも大好きで、ねぽらぼのライブで君が秘めた才能をたっぷりみんなに見せてくれました。いつも「ねねちゃん、ありがとう」と言いたかったです。この3年間、君のおかげで、僕にとって至福の時間でした、ねっ子になって良かったです！",
    nickname: "Glob",
    pfp: "YMn8Z0O5",
    twitter: "@SuperGlobMan",
    location: "United-States"
  },
  {
    message: "NENENENENENENE! Happy anniversary! Thank you for always making us smile and laugh! これからも楽しいことをして, 私たちをもっと笑わせてほしい! ねぽらぼ大大大好き!! Yeeeeeeah!!",
    message_jp: "NENENENENENENE! 周年記念おめでとう！いつもみんなに笑顔と笑いを送ってくれてありがとう！これからも楽しいことをして, 私たちをもっと笑わせてほしい! ねぽらぼ大大大好き!! Yeeeeeeah!!",
    nickname: "Kuro",
    pfp: "uGpQAzA2",
    twitter: "@96hoshii_0317",
    location: ""
  },
  {
    message: "いつも応援している韓国人です\nいつも明るく笑いながら活動するねねさんからエネルギーを得ています\nいつもエネルギーを得ている人たちですが、私たちもねねさんにエネルギーを伝えたいです\nたとえ素朴ではありますが、お祝いさせていただきますが、ねねさんに笑ってもらいたいです！\nいつもねねさんが幸せになることを願います！\nそれでわ、またねね！愛してます！",
    message_jp: "",
    nickname: "DO_SHA-MEH",
    pfp: "wpkbhIHw",
    twitter: "DO_SHA-MEH(@doshameh)",
    location: "South-Korea"
  },
  {
    message: "ねねち3周年おめでとう！ねねちのおかげで毎日楽しいよ！心と身体に気をつけて、これからもがんばってね！だいすき！",
    message_jp: "",
    nickname: "れんたろ",
    pfp: "EZkmLoLw",
    twitter: "gmgmgmbk",
    location: "Japan / 日本"
  },
  {
    message: "三週年恭喜🎉🎉🎉",
    message_jp: "三周年おめでとう🎉🎉🎉",
    nickname: "森森",
    pfp: "",
    twitter: "@Wilson04112228",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねちー！！3周年おめでとう！！！ねねと一緒の毎日はとても幸せです！いつまでも応援してるよ！！ねねち大好き🧡！！",
    message_jp: "",
    nickname: "Shiaupiau",
    pfp: "U4GojgvQ",
    twitter: "@stu43005",
    location: "Taiwan 台灣"
  },
  {
    message: "恭喜出道三週年！我入坑Hololive 第一個看的便是ねね,感謝ねね一直帶給我們歡樂！未來繼續努力加油！",
    message_jp: "デビュー三周年おめでとう！ホロライブで最初にフォローしたタレントがねねでした！いつもみんなに快楽をもたらしてくれてありがとうございます！これからも頑張ってください",
    nickname: "キリン",
    pfp: "FTYnIwxg",
    twitter: "@KirinsanRou",
    location: "Hong Kong 香港"
  },
  {
    message: "ねねち三周年おめでとう！！！ねねちを応援する時間も三年目になります。今年もアイドルとしてのねねちを沢山見れて嬉しかったです。今もねばらぽライブを余韻を浸っています。ねねちの四年目も楽しく過ごせますように。これからも応援しつつ、ねねちの成長を見守ります。ねねち大好き！",
    message_jp: "",
    nickname: "bryan",
    pfp: "iRzICORZ",
    twitter: "@Methspirit",
    location: "Hong Kong 香港"
  },
  {
    message: "ねねち、3周年おめでとう！いつもねねちの笑顔にたくさん元気をもらってます！本当にありがとう！４年目もねねちが笑顔で楽しく活動できるようにたくさん応援させてね！",
    message_jp: "",
    nickname: "kuma",
    pfp: "PaYmF6Ad",
    twitter: "@kuma_166",
    location: "Japan / 日本"
  },
  {
    message: "Nenechi is someone who helps me get through every day through her singing, humor and lovable nature. I am so thankful for every moment of it. To celebrate Nenechi’s anniversary, I tried baking for the first time! I made a Cinnamon Nectarine Cake! It was suppose to be peaches but I failed too many times and ran out ^ ^; \nNenechi, Happy Anniversary!!",
    message_jp: "ねねちの歌と、ユーモアと愛しい性格に、毎日助けられています。いつでも感謝です。今年の企画の為に、初めてケーキ焼きを試しまして、シナモンネクタリンケーキを作りました。桃ケーキを作ろうと思ったけど、失敗し過ぎて在庫がなくなりました^ ^;\nねねち、ハッピーアニバーサリー！",
    nickname: "ClumsyHeroクラムジー・ヒーロー",
    pfp: "HUDlUNH9",
    twitter: "@clumsyhero",
    location: "Canada"
  },
  {
    message: "ねねち三周年おめでとうございます！今年はずっとバタバタしてリアタイの時間が減ってしまって、でもねねちの配信のアーカイブちゃんとチェックをしています！！今年もねねちのファンミーティングでねねちに会えてとてもうれしい！！！！数少ない海外二キだと思いますが、ねねちとたくさんのねっこと話ができてとても楽しかった、最高の思い出になりました！！！\n四年目もずっと応援し続けます！ねねち大好き＜3",
    message_jp: "",
    nickname: "布丁プリン",
    pfp: "cD4anv_u",
    twitter: "@putting0091",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち3周年おめでとう、これからもねっ子たちと楽しく過ごそう、ウォーアイニー！",
    message_jp: "",
    nickname: "白云",
    pfp: "zVvHKIfq",
    twitter: "@xunbaiyun",
    location: "China"
  },
  {
    message: "3周年おめでとう~~~\n今年もねねは頑張ってます\n毎回の生放送が私にたくさんの幸せをもたらします\nねねと会えて嬉しいです\n私はねねを応援します\nねねち～～ありがどう！！！🍑🧡🍑🧡🍑",
    message_jp: "",
    nickname: "ビビロン",
    pfp: "",
    twitter: "@zeryo1234",
    location: "Taiwan 台灣"
  },
  {
    message: "うおおおおおおおおおおおおおおおおおおおおおおおおお3周年おめでとうございます <3",
    message_jp: "",
    nickname: "Legzy",
    pfp: "Q0J30zuS",
    twitter: "@Legz0s",
    location: "Vietnam"
  },
  {
    message: "時間過得好快 一下子就來到了第三年 感謝ねね一直以來的陪伴 就算生活中有什麼難過的事 看完直播後都會覺得好一些 真的非常非常感謝ねね總是讓我補充了許多energy🧡\n希望ねね不要給自己太大的壓力 ねっ子都會在這邊陪著你的 有什麼事都可以跟我們說唷 就像我們重視你 喜歡你一樣 也更依靠我們一點吧！",
    message_jp: "時間はあっという間に経って、三年目になりましたね。ねねちがいつもいてくれることに感謝します。日常で嫌なことがあっても、配信を見た後気持ちが良くなっていく。ねねちからエナジーを補給してることをいつもいつも感謝しています♡\nねねちが自分にあんまりプレッシャーを掛けないでください。ねっ子はいつも君をついて行きますから、何があっても言ってもいいですよ！私たちがねねちを好きで、思っているように、ねねちはもっと僕たちを頼ってもいいですよ！",
    nickname: "onion",
    pfp: "DEVCb0-k",
    twitter: "@yuonionn",
    location: "Taiwan 台灣"
  },
  {
    message: "三周年おめでとうございます、ねね〜",
    message_jp: "",
    nickname: "六華Forever9Nine",
    pfp: "",
    twitter: "@_K_le",
    location: "Singapore"
  },
  {
    message: "３周年おめでとう！ねねちとねっ子のみんなと沢山の楽しい思い出出来て本当嬉しい！ねねちがどれだけ頑張って成長したのかねっ子のみんな知ってるよ！ねねち大大大好き！４年目も全力で応援するね！",
    message_jp: "",
    nickname: "Guilty Kitz",
    pfp: "u4yYUxMz",
    twitter: "@guiltykitzzz",
    location: "Japan / 日本"
  },
  {
    message: "Nenechi!!! Congratulations on 3 years!\nここまで頑張ってきて本当にえらい。デビューからねぽらぼのみんなとの成長を見守ってきたことを誇りに思ってます。あなたはとても素敵なアイドルで、全世界の人をその美しい笑顔で喜ばせている。4年目も全身全霊で頑張って欲しい！",
    message_jp: "",
    nickname: "Saynator",
    pfp: "",
    twitter: "saynator_d",
    location: "Australia"
  },
  {
    message: "ねねち3周年おめでとう！！！\n配信やライブでいつも楽しませてくれてありがとう！この一年はいろいろと積極的なねねちがみれてうれしかったです！4年目もねねちのペースで楽しい活動にして下さいね！\nこれからも応援してるよ！ねねち大好き！",
    message_jp: "",
    nickname: "しゅー",
    pfp: "VnQ8Hia3",
    twitter: "gfGOhl8jjN199rS",
    location: "Japan / 日本"
  },
  {
    message: "Happy 3rd Anniversary Nene!!!! It feels like just yesterday when you first debuted with NePoLaBo, it's amazing how time flies! Hoping this year is even more amazing for you!",
    message_jp: "ねねち３周年おめでとうございます！初配信はまだ昨日のようで、時間が過ぎるのは早いものですね！今年も最高の一年になりますように！",
    nickname: "Bading Gading",
    pfp: "",
    twitter: "",
    location: "United-States"
  },
  {
    message: "ねねち3周年おめでとうございます！！ねっ子としてねねちの3周年をお祝い出来るのはすごく嬉しいです！夢だったねぽらぼライブも終わってついに次はねねちのソロライブかな？これからもねねちの活動を楽しみに応援してます👍4年目も頑張れ〜💪",
    message_jp: "",
    nickname: "リンゴリンゴカズキチ",
    pfp: "s3s4RsP9",
    twitter: "@bkazu45",
    location: "Japan / 日本"
  },
  {
    message: "首先恭喜Nenechi 3周年！！！我非常喜歡Nenechi ！！就是因為這樣，我才會一直作畫到現在！在這期間我曾經迷茫而消沉一段時間，但因為Nenechi對大家的愛讓我重拾信心！！所以！！我想說的是，Nenechi 永遠是我的偶像！！🧡🧡🧡",
    message_jp: "先ずはねねち３周年おめでとうございます！！！ねねちのことめっちゃ好きです！！ねねちのおかげで今日まで絵を描き続けることができました！昔人生の道に迷ってスランプになる時、もう一度自信を見つけたきっかけはねねちのねっ子皆への愛でした！！ですから！言いたいことは、ねねちは永遠に私のアイドルです！！🧡🧡🧡",
    nickname: "山貓",
    pfp: "5VwrP7UW",
    twitter: "@moutaincat_",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち3周年おめでとう！！！\nこの一年間、私たちにさまざまな喜怒哀楽をもたらしてくれてありがとう。皆さんの祝福が勇気をもたらしてくれることを願っています。\nこれからも応援し続けます！大好きです！",
    message_jp: "",
    nickname: "kan",
    pfp: "g6XT5IjP",
    twitter: "@kan_illust_",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねちは私一生の誇りです！デビューからずっと成長に見守って、今は凄いアイドルです！！！これから4年目、5年目、10年目まで、ずっと応援しています！大好きです♡♡♡",
    message_jp: "",
    nickname: "遜炮事務所Δ_所長",
    pfp: "9kxT32U7",
    twitter: "遜炮事務所Δ_所長🥟🍑🔺💚（@SonhoujimuSyo）",
    location: "Taiwan 台灣"
  },
  {
    message: "Keep believing in yourself and aim for all the dreams you have even if they may seem impossible at first. I'm happy as long as you're having fun doing what you do Nene, my wife!  All your streams bring me happiness and brighten up my days when I get tired out from work. Continue shining as the super idol Nenechi for many years to come, my wife!",
    message_jp: "いつまでも自分を信じて、どんな夢でもを追いかけてください。ワイフのねねちが楽しければ私も楽しいです！仕事に疲れた時僕の一日を明るくして、僕に喜びを与えてくれたのがねねちの配信でした。これからもスーパーアイドルねねちとしていつまでも輝いてくださいね、マイワイフ！",
    nickname: "",
    pfp: "exX3NDAV",
    twitter: "@Roy_Nekko",
    location: "Singapore"
  },
  {
    message: "Congratulations on your 3rd Anniversary Nenechi~! I'll continue to cheer you on!!!!",
    message_jp: "３周年おめでとうございますねねち！、これからも応援してます！！！",
    nickname: "syuko",
    pfp: "",
    twitter: "",
    location: "Australia"
  },
  {
    message: "ねねち、3周年おめでとうございます！デビュー以来ずっと見っています！ねねち、ファンの気持ちをずっと考えて、ゲームやダンスや歌の努力、ねっ子として、ねねちどれだけファンに愛されるの気持ち分かっています。これからも、応援します！大好きです！",
    message_jp: "",
    nickname: "ketten",
    pfp: "e8OBrzBF",
    twitter: "ketten_dj",
    location: "United-States"
  },
  {
    message: "恭喜Nene出道三週年！！！\n推了你快兩年，到現在我還是只單推你一人哦🧡\n未來我還是會持續支持你，請你盡力而為就好！\n請好好享受屬於你的這一刻🎉",
    message_jp: "ねねちゃんデビュー３周年おめでとうございます！！！\n出会ってからもう直ぐ二年で、今でもねねちゃん単推しですよ！🧡\nこれからも応援し続けますから、自分のペースで頑張ってくださいね！\nねねちの為にいるこの一刻、楽しんでくださいね🎉",
    nickname: "PP BRUCE",
    pfp: "",
    twitter: "@PPBRUCE0179",
    location: "Taiwan 台灣"
  },
  {
    message: "Happy third anniversary to Nenechi and 5th Gen! We will continue to support all of you!",
    message_jp: "ねねちとねぽらぼ３周年おめでとうございます！これからも応援し続けます！",
    nickname: "ChenYx",
    pfp: "",
    twitter: "@BlueEterna",
    location: "Malaysia"
  },
  {
    message: "ねねち様！三周年おめでとうございます！！！ねねちの努力の姿いつも見てるよ、本当に、色んな方面で、めちゃくちゃ強くなった。やっぱねねちは配信者として、最強無敵だ！！ねねは私にモチベーションくれた、ねねがいたからこそ、頑張て生きれてる！これからずっと、支えてます！だいしゅき...❤",
    message_jp: "",
    nickname: "リネン",
    pfp: "jHpyYsq6",
    twitter: "@eddddxdd",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち、3周年おめでとうございます！ほんの近い一年前からねねちを注目し始めましたが、彼女のゲームへの努力がとても好きで、また無邪気な笑顔も大好きです。将来も応援し続けます。",
    message_jp: "",
    nickname: "羅董LoDong",
    pfp: "rj_Q8HTJ",
    twitter: "@LODONG666",
    location: "Taiwan 台灣"
  },
  {
    message: "ねね親三週年快樂～！！以後也會繼續支持跟喜歡你 能遇見ねね真的很開心❤️",
    message_jp: "ねねち３周年おめでとうございます！これからも応援して好きに続きます　ねねちと出会えて本当に嬉しいです♥",
    nickname: "艾絲黛莉",
    pfp: "wxDUPnEf",
    twitter: "@icederi1213",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち３周年おめでとう！最近気づいた事：ねねちのオリ曲全部好き。改めてT4Uおもろかった（特にラミィちゃんとのハート部分ｗ）。ねねちの笑顔見たら自分も笑顔になりやすいです！今後も頑張ろうね！",
    message_jp: "",
    nickname: "vtange",
    pfp: "Rt0lFONe",
    twitter: "vtange",
    location: "United-States"
  },
  {
    message: "Nenechi, Happy 3rd anniversary! I wish you more success and happiness 🎉🥳🙏🏼",
    message_jp: "ねねち、ハッピー３ｒｄアニバーサリー！これからの道も成功と喜びが溢れていますように！🎉🥳🙏🏼",
    nickname: "せちゃんceej",
    pfp: "",
    twitter: "@_revelink",
    location: "Philippines"
  },
  {
    message: "ねねち三周年おめでとう！\nキアラちゃんと奇跡のコネクトからねっこになった\nいつもファンのために頑張ったありがとう\nねねちが好きな気持ちを伝えたい！",
    message_jp: "",
    nickname: "",
    pfp: "L7P75lC1",
    twitter: "@byee_nekko",
    location: "Taiwan 台灣"
  },
  {
    message: "Nenechi! Congratulations for your third anniversary!\n\nYou're a bright sunshine and a big support to all of your friends and fans, and i'm really happy whenever you share secrets about Lamy-chan to us!\nI think that Nenechi is a wonderful existence who brings a smile to many people and is loved by many more.\n\nCongratulations Nenechi! You're amazing!",
    message_jp: "ねねち！３周年おめでとうございます！\n\nねねちはいつも太陽のように暖かくて、友とファンたちを思ってくれます。みんなにラミィちゃんの秘密を教えてくれる時はいつも嬉しいです！ねねちはたくさんの人々に笑顔を届いてくれる、たくさんの人に愛されている存在だと僕は思います！\n\nねねちおめでとうございます！君は本当に凄いです！",
    nickname: "X-Kill/Mau",
    pfp: "Z4knaQz_",
    twitter: "@MauCaVel",
    location: "Mexico"
  },
  {
    message: "It's been another year already? Time surely flies when you're having fun.Thank you for all the smiles and a lot of motivation. I hope you will always be happy and healthy. Much love <3",
    message_jp: "もうまた一年が経ったのですか？楽しい時間はいつもあっという間ですね。たくさんの笑顔とやる気をもらって、ありがとうございます。これからのねねちゃんも楽しく、健康的で過ごせますように。大好きです＜３",
    nickname: "Pofe",
    pfp: "P-kmiygZ",
    twitter: "@pofeloost",
    location: "Thailand"
  },
  {
    message: "ねねち恭喜你三週年了！能夠見證你身為偶像的成長，實在是我作為ねっ子的榮幸。自從認識了你之後，你努力的身影，就像你打招呼時那句“大家心中的能量飲料”一樣，成為我生活中的力量。祝福你每天都過得幸福，只要ねねち你開心，我們作為ねっ子也會一起高興。",
    message_jp: "ねねち三周年おめでとうございます！アイドルとして成長していくねねちの姿を見てるのは、ねっ子として本当に光栄です。出会った時から、ねねちの頑張る姿は、挨拶の「心のエナジードリンク」のように、生活中の力の源になっています。ねねちが毎日幸せで過ごせますように、ねねちが楽しければ、ねっ子たちも一緒に楽しくなります。",
    nickname: "Map",
    pfp: "n_mhFX1i",
    twitter: "@map0000000",
    location: "Hong Kong 香港"
  },
  {
    message: "ねねち～！！！デビューから3周年、おめでとうございます！！！いつもたくさんの元気をねねちからもらっています！！！心のエナジードリンクありがとう！！！頑張るねねちを尊敬しています！！！これからも応援しています！！！みにすぴーより",
    message_jp: "",
    nickname: "みにすぴー",
    pfp: "T1ZJF7CJ",
    twitter: "みにすぴー🍑🥟 @speed725",
    location: "Japan / 日本"
  },
  {
    message: "ねねち！三周年おめでとう！\nデビューからもう1090日以上経ってしまったけど、\n自慢できることは、\nねねに出会ってから私はほぼ毎回の配信を見ているよ！\n忘れられないのは、初めてSCでねねが返事してくれた言葉。\n「ねねと一緒にいれば力を分け合えるよ」。\nあなたが笑えば私も笑うし、悲しんでいる時も一緒に悲しむよ。\nどんな気持ちでも、ねねが楽しくゲームや下ネタ話をしている姿を見ると元気が湧いてくるんだよ。\n本当に最高のエナジードリンクみたいだ！\n時々自分の限界まで挑戦して体調不良になってしまうこともあって心配ですけど、\n自己超越することは素晴らしいことだよ！\nただ無理しないで頑張りすぎないで欲しいな。\n4年目もよろしくね〜大好き♡（ASMR配信もっとやってくれる？w）",
    message_jp: "",
    nickname: "るるちゃお",
    pfp: "7wPPDi0n",
    twitter: "@LuLuchao04306",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち恭喜出道三週年！第四年也會繼續應援下去！",
    message_jp: "ねねちデビュー三周年おめでとうございます！四年目も応援します！",
    nickname: "TURTLE",
    pfp: "71ghyviq",
    twitter: "@Nyu003",
    location: "Taiwan 台灣"
  },
  {
    message: "Happy 3rd anniversary nenechi, i will always be your guide! I love you nenechi! Thank you for everything!",
    message_jp: "３ｒｄアニバーサリーおめでとうございます！これからもねねちの道しるべになり続けます！ねねち大好きです！感謝の気持ちがいっぱいです！",
    nickname: "Arudoragezuzu-san",
    pfp: "ul1-0dgW",
    twitter: "@Aldoragezz",
    location: "Indonesia"
  },
  {
    message: "ねねち３周年おめでとう！！ねねちがしてきた一つ一つの努力が今につながってきたと思うと、本当にスゴいなぁと思う。楽しいことばかりじゃなかったと思うけど、だからこそ今の景色に価値があるように思えるよ。今も絶えず努力を続けるねねちをこれからも応援していきたいし、寄り添っていきたいと思うから、これからもいちねっ子としてよろしくね＼(^o^)／",
    message_jp: "",
    nickname: "みやしい",
    pfp: "oIEcrWIO",
    twitter: "@oshigoto_miyasi",
    location: "Japan / 日本"
  },
  {
    message: "Happiest Anniversary to you Nenechi <3 Watching you in all these years is an awesome journey! Thank you for your hardwork and talent that made us all happy! We love you OUR SUPER NENECHI!!!",
    message_jp: "ハッピーアニバーサリーねねち＜３　ねねちの成長を見守ることが楽しい旅になりました。いつも努力して才能を活かして私たちに快楽を与えてくれてありがとうございます！スーパーねねちが大好きです！！",
    nickname: "ケイト♡",
    pfp: "1t45ebgQ",
    twitter: "@nyctos5",
    location: "United-States"
  },
  {
    message: "ねねち、活動三周年おめでとう！ねっこになってただ一年半だけど、この一年半は毎日楽しかった。仕事で疲れた時はねねちの配信を見たら、いっぱい元気をもらえます。今年holo４th fesやTwinkle 4 Youや誕生日liveやたくさんねねちのアイドル姿を楽しめた。今年もTricky Towersで初めてねねちと一緒に遊んだ、すごく楽しかった！これからもねねちの活動を応援します！",
    message_jp: "",
    nickname: "ShengMeow",
    pfp: "A3a2Hl_1",
    twitter: "",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち3周年おめでとうございます！\nこれからも応援しています！\nねねち大好き！！！",
    message_jp: "",
    nickname: "HiJeff",
    pfp: "uLzV0UcS",
    twitter: "@hijeffdesu",
    location: "Hong Kong 香港"
  },
  {
    message: "こんねね！ねねちデビューからもう三年だ！いつもねねちから元気をいっぱいもらえた、ありがとう！\nねねちのおかけでこの三年間もねっ子たちと仲良し、楽しかった！\n四年目も頑張って～応援する！今後もねねちを描きたい！",
    message_jp: "",
    nickname: "Sipu",
    pfp: "hLhjQpuE",
    twitter: "@Sipu_98",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち活動3周年おめでとう！！！\nこの一年大変なことや楽しいことが沢山ありました\nが、ねねちのライブでの活躍や配信を見て日々元気をもらっていました(*^^*)\nたまごっちを含む美少女インフルエンサーとしての発信力もありゲームの幅やホロメンとのつながりも増えてねっ子としても嬉しいよ\n大大大好きなねねちがこれからもいろんな媒体に進出したりライブ出たりとかを期待しつつ4周年に向けて一緒に歩んでいきたいな元気なねねちの大活躍を祝してこのメッセージを贈ります\n皆んなの心のエナジードリンクねねちへ！",
    message_jp: "",
    nickname: "",
    pfp: "KIArwdUd",
    twitter: "@b3A0motNJr3v37m",
    location: "Japan / 日本"
  },
  {
    message: "ねねち、3周年おめでとうございます！\nこの三年間、色々なことがあった。\nこれら全てを一緒に乗り越えられて本当に嬉しいです。\n今から何年目も、ずっと応援しています！",
    message_jp: "",
    nickname: "鈴原ユエル",
    pfp: "weeUjU_b",
    twitter: "@Suzuhara_yuel",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち！やっとたどり着いた３周年、おめでとう！\n動物たちのおかげで３年目のねねちはより楽しそうに見えて嬉しい！虫の趣味を全開で皆に分けるようにしたねねちは自分に秘めてた唯一無二の魅力を引き出せた！\n念願の5期生ライブ、EP、ミニライブ-アイドル活動にも色々あった！\n辛い時はねねちがいる事が頑張れる力になる\nさあ、4年目のねねちもさらに眩く輝けるように！さらなる高みへ挑めるように！さらに幸せになれるように！\nそして我らはそれをずっと見守れるように！",
    message_jp: "",
    nickname: "Maxumym",
    pfp: "ivehmnqe",
    twitter: "@mymuxam",
    location: "Russia"
  },
  {
    message: "桃鈴ねねさんへ\n３周年おめでとうございます！！\nねねちの配信にいつも元気を貰いながら日々を過ごせています。\nこれからも配信、ライブなどいろんな活躍を楽しみにしながら応援していきます！！\n余計なお世話かもだけど自分を大事にしてね",
    message_jp: "",
    nickname: "さとこー",
    pfp: "NjJO_Koi",
    twitter: "ねっ子のさとこー",
    location: "Japan / 日本"
  },
  {
    message: "ねねち、３周年おめでとう！！！\nあっという間だった！！！\nねねちの成長は素晴らしい！！微笑むしかいられられない\nまた何年も元気に活動し続けるように～",
    message_jp: "",
    nickname: "Unearthly",
    pfp: "ZCBcJYl-",
    twitter: "@unearthlycoder",
    location: "United-States"
  },
  {
    message: "To the lovable girl who helped get me into hololive and vtubers, HAPPY ANNIVERSARY NENE 🍑🐻💛 I'm proud to be a nekko and support you, keep reaching for your dreams and succeeding!",
    message_jp: "君の愛しさがVチューバーとホロライブにハマる理由になったねねちへ、ハッピーアニバーサリー🍑🐻💛\nねっ子になることに誇らしくて、これからも応援し続けます。これからも夢をいっぱい追いかけて、成功し続けてください！",
    nickname: "Eggo",
    pfp: "82JR544f",
    twitter: "Tokki-egg (@tokk1-egg)",
    location: ""
  },
  {
    message: "ねねちへ、\nいつもげんきでいてくれてありがとう。カブトムシのはなししたのときにねねちがたのしそう　みたら、めちゃすき！\nあきらめずにちょうせんしつづけるすがたがすきなんだ。ねねちはつよい！\nいつもわたしたちねっこをきづかい、こうりゅうしてくれてありがとう。\nねねちがなやんでいる時に、ねっこたちがねねちのちからになれるといいとおもう。　\nくれぐれもごじあいください。\nねねちがみんなのこころのエナジードリンク、みんなもねねちのこころのエナジードリンクなりたい！\nがんばれ、がんばれ、ねねちがんばれ！",
    message_jp: "",
    nickname: "0liveboi",
    pfp: "SoZY2H6f",
    twitter: "@mdjk0",
    location: "Malaysia"
  },
  {
    message: "Hello Nene! I have been watching you for a very long time now! Your positivity and cheerfulness have made me very happy even when I was sad and you have been a huge inspiration for me in lots of things! From the bottom of my heart, thank you for streaming and making everyone smile! You will always be my oshi! Happy anniversary to you! Nene number1!",
    message_jp: "ねねちこんにちは！長い間ねねちの配信を見てました！ねねちの前向きさと明るさのおかげで、落ち込んでいる時でも楽になります。その前向きさが色んな所でインスピレーションをなっています！心の底から、配信してくれて、みんなに笑顔を与えてくれて、ありがとうございます！いつになってもずっとねねち推しです！ハッピーアニバーサリー！ねねちが一番です！",
    nickname: "Suhaib",
    pfp: "elh2UtNX",
    twitter: "@SuhaibHoloSimp",
    location: "Pakistan"
  },
  {
    message: "祝福NENE能繼續不斷的創造快樂，也祝福三週年快樂~",
    message_jp: "ねねちがこれからもいっぱい喜びを作り続けますように、３周年もおめでとうございます！",
    nickname: "面具貓",
    pfp: "",
    twitter: "@maskcat24",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち3周年おめでとう！！！\nデビュー配信でねねちに出会ったのが昨日のことのように感じます\nねっ子も100万人を超えて、こうやって海外のねっ子ともお祝い出来るのが嬉しいです！\nT4Uはねっ子としてこれ以上ない幸せを感じるライブでした…！ありがとう！\nこれからも楽しく活動していってね！応援してます！",
    message_jp: "",
    nickname: "たくとう",
    pfp: "Cyl39Qlw",
    twitter: "@Taktu_reaction",
    location: "Japan / 日本"
  },
  {
    message: "Happy 3rd Anniversary, Nenechi! The progress you have done so far has been great! I hope for more success to come your way! Here is to more years of being SUPER NENECHI!!!",
    message_jp: "ねねち３周年おめでとうございます！今までたくさんの物を成し遂げて、素晴らしかったです！これからもたくさんの成功がねねちに待っていますように！何年になっても、ずっとスーパーねねちんにいてください！",
    nickname: "AkoAyPayaso",
    pfp: "OkbMDX_C",
    twitter: "@AkoAyPayaso",
    location: ""
  },
  {
    message: "ねねちデビュー3周年おめでとう！！！3年間大変なのことも、楽しいこともいっぱいだったね！\nこれからもねっ子の1人としてねねちのこと応援していきたいな！4年目も駆け抜けていこう！！！\nねねちだいすき！！！！！！🧡",
    message_jp: "",
    nickname: "ねこざめ",
    pfp: "fHNEhOf9",
    twitter: "@nekko_zame",
    location: "Japan / 日本"
  },
  {
    message: "ねねち３周年おめでとぉぉ！！！\nあっという間の３周年！ねねちに出会ってから毎日楽しく推し活させて貰ってるよ～。\nこれからもずっと推して行くので、ねねちがやりたいことを楽しくゆっくり続けてほしいです('ω')",
    message_jp: "",
    nickname: "つかさん",
    pfp: "R3yfSj8-",
    twitter: "@OTorK2iOIWEe32T",
    location: "Japan / 日本"
  },
  {
    message: "ねねち3周年おめでとう！これからもねねち節全開で突き進め！ずっとずっと応援ししてるよ。ねねち大好き。",
    message_jp: "",
    nickname: "テージー",
    pfp: "UDbztc4N",
    twitter: "テージー(@te_ji_0106)",
    location: "Japan / 日本"
  },
  {
    message: "ねねち3周年おめでとう〜！！\n毎日ねねちの可愛いところだったり、時には挫けちゃう弱いところだったり、でもそんな中でも諦めないで立ち上がって頑張る姿に元気もらってます😊\nねねちはきっと自分のことダメだ〜って言うことあるかもしれないけど、それでもねっ子はみんなねねちのこと大好きで応援してること忘れないでね！\nねっ子のために頑張るねねちも、自分のこと大事にするねねちも大好きです！\nこれからも頑張ってね〜！！！✨✨",
    message_jp: "",
    nickname: "タルト",
    pfp: "7f3iDZzE",
    twitter: "@taruto_games",
    location: "Japan / 日本"
  },
  {
    message: "ねねち3周年おめでとー！！！！！初のEP発行されたり、初のファンミ開催されたり、そして初のねぽらぼライブも！！！！いやーホントにすごい1年だった！！\n自分にとってもコロナ制限から解放されて、日本に行けるようになってようやく現地でホロのイベント楽しめる1年だったよ！ライブは全部落選したけど、でもいつかはきっと当たるからねねちに会える日を楽しみに待ちながら、これからも応援してるね！\n今年はメンタル的に絵描けなかったけど、来年は絶対描くからまた4年目もよろしくねー！！\n大好きだよ！！！！！！！！！",
    message_jp: "",
    nickname: "SoRedMaru",
    pfp: "3uQmHyWT",
    twitter: "＠SoRedMaru",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち、3周年おめでとう！\n色んな場面で楽しそうに笑っている所も、苦手なことに向き合う姿も、きっと辛い事に直面したり、ヘラクロスの角がちょっぴり覗いちゃう所も、全部含めて、ねねちが好きだし、これからも応援してます！",
    message_jp: "",
    nickname: "さるおん",
    pfp: "xE9mRrcf",
    twitter: "さるおん(@saru0n)",
    location: "Japan / 日本"
  },
  {
    message: "ねねち、活動3周年おめでとう！この一年でチャンネル登録者100万人突破したり、T4U開催したり、ずっと言ってたフィギュア化ももうすぐだし、いろんなことがあったね。なかでもEPを物理的に手元に置けるのがすごく嬉しかったな。4年目はどんな夢や目標に挑戦していくのか、よかったらまた聞かせてね！",
    message_jp: "",
    nickname: "ながもん",
    pfp: "x0sv7MJb",
    twitter: "@MonNaga1",
    location: "Japan / 日本"
  },
  {
    message: "ねねちー！、3周年おめでとうーー！！！",
    message_jp: "",
    nickname: "",
    pfp: "",
    twitter: "@BoneLv3",
    location: ""
  },
  {
    message: "ねねち、3周年おめでとうございます\nいつも私たちにエネルギーを与えてくれて、本当にありがとう。\nこれがらもよろしくお願いいたします。\n\n我愛你nenechi!!!",
    message_jp: "",
    nickname: "Neiku內褲",
    pfp: "0za__BgI",
    twitter: "@Naiko0210",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち、デビュー3周年おめでとう！！！この1年は100万ハズバンドも達成して、また一段と輝いていた年だったと思います！いつもねっ子のことを考えてくれるねねちのことが大好き！これからもねねちらしく、キラキラ楽しく活動してね！応援しています！！！",
    message_jp: "",
    nickname: "K泉ペンキ",
    pfp: "__f3zxVq",
    twitter: "@K_izumi_penki",
    location: "Japan / 日本"
  },
  {
    message: "Nenechi! Happy anniversary!! I hope to spend many more years as a Nekko!",
    message_jp: "ねねち！ハッピーアニバーサリー！これからいつまでもねっ子として一緒に過ごします！",
    nickname: "",
    pfp: "-j7lQ2Zm",
    twitter: "AbnormalNekko",
    location: "United-States"
  },
  {
    message: "ねねち三周年おめでとう！！嬉しいことも悲しいことも、一緒に乗り越えてきたねねちの成長を見守れてよかった。\nこれからも応援しているよ。",
    message_jp: "",
    nickname: "歐尼オニタン",
    pfp: "u4EKtzVZ",
    twitter: "@OnirengerGo",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち、これからも末永くよろしくな",
    message_jp: "",
    nickname: "シンカー",
    pfp: "oe3voXmN",
    twitter: "シンカー🥟🍑(@sinker_vnootaku)",
    location: "Japan / 日本"
  },
  {
    message: "皆、そして俺の心のエナジードリンク、ねねち！\n３周年おめでとう！！！\nこの1年はとんでもなく面白いな1年でした！\n\nそして一つ言いたいことがあります。俺にとってねねちはもうすでに立派なアイドルです！俺にとって、アイドルは心を癒す、感動するの存在です！\nねねちの頑張っている姿を見ると、俺ももう少し頑張りたい気持ちになってきた。最近虫も好きになった！だからこそねねちはアイドルです！マジアイドル！！\n\n俺はまだ初心者なねっこです。だからもっとねねちと他のねっこ先輩と一緒にキラキラな楽しい時間を過ごすしたい！\nこれからもよろしくお願いします！\n\n桃鈴ねね、I LOVE YOU！！！～ 。。。ﾁｭ！！＜３",
    message_jp: "",
    nickname: "Botandyn",
    pfp: "wTOR9OE6",
    twitter: "@Ame_Rudyn",
    location: "Malaysia"
  },
  {
    message: "ねねち３周年おめでとう！\n３年間ねねちから返せないくらいいっぱいの元気と勇気と笑顔をもらった！！\nだから、特大の感謝と応援とおめでとうをあげる！本当におめでとう！！！",
    message_jp: "",
    nickname: "Alt A",
    pfp: "TbFSO2RL",
    twitter: "@alta_under",
    location: "Japan / 日本"
  },
  {
    message: "ねねち！3周年おめでとう！！！今年もお祝いできて嬉しいです！\n4年目もねねちと一緒に悩みや笑顔を分かち合いながら、変わらない関係を築いていきたいです。あと、無理しがちなので体に気をつけて活動していってね。これからも応援しています！✨",
    message_jp: "",
    nickname: "もやし。",
    pfp: "5UYwjAJN",
    twitter: "もやし。🍑🥟（@MoyashiVol)",
    location: "Japan / 日本"
  },
  {
    message: "ねねち！デビュー３周年！おめでとう！　　\n今日に至るまで表に見えるだけでも多くの苦難に直面してきたけど、それでも歩みを止めずに活動を続けてくれて嬉しい！　　\n今年は多方面でチャレンジングな出来事が多いけれども、心身ともにねねちが健康に活動できることを祈ってる！　　\nねねちの哀しみを百万等分に、喜びは百万倍になるように百万のねっ子と共にこれからもその背中を推し続けます！　　\n３年間のこれまでにありがとう！そして４年目のこれからもどうぞよろしくね！",
    message_jp: "",
    nickname: "いえねっこ",
    pfp: "tNcA1e7p",
    twitter: "@ie_necco",
    location: "Japan / 日本"
  },
  {
    message: "三周年おめでとう！",
    message_jp: "",
    nickname: "小幻",
    pfp: "F5gUcNFx",
    twitter: "geng2521",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち3周年おめでとう！ねねちの配信や歌にはいつも元気を貰ってるよ！4年目もずっと応援してるよ！目指せスーパーアイドルねねち！！！",
    message_jp: "",
    nickname: "暁",
    pfp: "Xi4BVu2b",
    twitter: "@5RdWXEsaFcZ4Hp9",
    location: "Japan / 日本"
  },
  {
    message: "ねねち！活動3周年おめでとう！！！デビューからここまで一緒に駆け抜けてきた3年間、本当に色んなことがあったね！辛いことももちろんあったけど、それ以上にねねちとねっ子、みんなでここまでたくさん楽しいことができて、本当に良い思い出でいっぱいだよ！ホロライブに、ねぽらぼに、ねねちに出会えて本当に良かった！！！これからもみんなで一緒に夢を叶えていこうね！！！ねねち大好き！！！",
    message_jp: "",
    nickname: "のぺち",
    pfp: "ZNPTymSM",
    twitter: "@nopechiii",
    location: "Japan / 日本"
  },
  {
    message: "ねねち！活動3周年おめでとう！4th Fes.やねぽらぼライブ等、沢山の舞台で最高に輝く姿を見せてくれてありがとう！そして、皆の心のエナジードリンクとして、いつも笑顔と元気をくれてありがとう！これからもスーパーアイドルを目指すねねちを全力で応援するね！ねねち大好き！",
    message_jp: "",
    nickname: "こんな奴",
    pfp: "q5b_6FZl",
    twitter: "こんN4やつ(@kon_ecs)",
    location: "Japan / 日本"
  },
  {
    message: "ねねち三周年おめでとう！これからも一緒に頑張っていこうね！！",
    message_jp: "",
    nickname: "柿の種",
    pfp: "19J_j22C",
    twitter: "柿の種🍑🥟",
    location: "Japan / 日本"
  },
  {
    message: "ねねちゃん三週年快樂！\n自從與ねねちゃん相遇也已經過了兩年多了，謝謝ねねちゃん帶給我許多歡樂！\n接下來的日子裡也繼續多多指教，希望ねねちゃん的願望都能成真，再次恭喜三週年快樂！",
    message_jp: "ねねちゃん三周年おめでとうございます！\nねねちゃんと出会うからもう二年間、たくさんの喜びを与えてくれて、ありがとうございます！\nこれからもよろしくお願いします、今後ねねちゃんの願いが叶いますように、改めて三周年おめでとうございます！",
    nickname: "shashaMAX",
    pfp: "1q79yacL",
    twitter: "@shashamax627",
    location: "Taiwan 台灣"
  },
  {
    message: "ねねち3周年おめでとう！これからもずっと応援してるよ！",
    message_jp: "",
    nickname: "まさかり",
    pfp: "Na2M6eGi",
    twitter: "@MasakariHolo",
    location: "Japan / 日本"
  },
  {
    message: "Nenechi happy 3rd anniversary! I can't believe it's already been 3 years since I watched your debut stream! I'm really happy that Nenechi was my first oshi, it's been an amazing experience watching you become the amazing idol you are today!\n本当にいつもありがとう、いつも俺が落ち込んでる時にねねちの元気の姿とかわいい笑顔を見るとすぐ元気になる！これからもずっとずっと応援しますよ！ねねち大好き！",
    message_jp: "ねねち3周年おめでとう！デビュー配信から見てますけど、もう三年になるなんて信じられないです！ねねちが初めての推しで良かったです。ねねちがここまで凄いアイドルになったこの旅路を見れて、本当に最高でした！\n本当にいつもありがとう、いつも俺が落ち込んでる時にねねちの元気の姿とかわいい笑顔を見るとすぐ元気になる！これからもずっとずっと応援しますよ！ねねち大好き！",
    nickname: "Mone",
    pfp: "6F_zUc40",
    twitter: "@Mone45458",
    location: "United-States"
  },
  {
    message: "ねねち活動3周年おめでとう🎉🥳\nいつも素直な気持ちの共有がとっても嬉しいよ！\n等身大を見せようとしながらも気がつくと羽ばたいてるところがスーパーアイドルの所以だし大好きなところだよ！\n身近な存在でいてくれながら大舞台が似合うねねちの活躍を願ってる！\nまずは健康に楽しくね〜♪",
    message_jp: "",
    nickname: "x-ray",
    pfp: "vqU2BHxR",
    twitter: "＠extraRei",
    location: "Japan / 日本"
  },
  {
    message: "ねねち三周年おめでとう！！！あなたと過ごしたこの3年間は笑顔と涙で満ちていました。時には一緒にゲームを楽しむことで幸せを感じ、時には目標を達成するために頑張るあなたに感動しました。時にはあなたが傷つくと悲しい気持ちになり、時にはあなたが傷つけられると怒りを感じました。あなたと過ごしたこの時は、私の人生で最も貴重な贈り物です。将来、あなたと他のねっ子たちと一緒に、未来への挑戦に向かって進みたいです！第4年もよろしくお願いします！一續にがんばって！",
    message_jp: "",
    nickname: "TienPeter",
    pfp: "A-zIuew8",
    twitter: "@Tien10Peter",
    location: "Taiwan 台灣"
  },
  {
    message: "3周年おめでとうねねちー！いつも元気になれる配信をほんとうにありがとう！まじでねねちを推してから毎日が幸せだよ。4年目のねねちも推す！！！！ねねち大好き！",
    message_jp: "",
    nickname: "けいまる",
    pfp: "qvvO8a-l",
    twitter: "@keimaru114514",
    location: "Japan / 日本"
  },
  {
    message: "KONNENE! Happy anniversary Nene!! You are a shining beacon of light in times of darkness! I love your interactions with your fans, and your cheerful personality!! I hope that you stay safe and are in good health! I wish you all the best and I hope to see more of you in the future!!",
    message_jp: "こんねね！三周年おめでとうございます！ねねちは僕にとって、暗闇中で一番輝いている光です！君の明るい性格と、君とファンの間での交流が好きです！君がいつも健康的でいられますように！君の未来がキラキラで輝きますように！",
    nickname: "Cipher4109",
    pfp: "4Fxp7WiS",
    twitter: "@cipher4109",
    location: "Singapore"
  },
  {
    message: "Happy 3rd anniversary, Nenechi!!!🎉🎊🎉\nAnother year has passed and there's so much events happened, it sure is a great year to memorize, i wish you the best of luck on this 4th year and i will continue rooting for you on this year as well, my favourite Energy drink!🧡",
    message_jp: "三周年おめでとうございます、ねねち!!!🎉🎊🎉\nこの一年間、いっぱいなことがあって、思い出だくさんの一年になりました。四年目も頑張ってください！ずっと応援しますよ、僕が一番気に入ったなエナジードリンク🧡",
    nickname: "Naki",
    pfp: "Kp5uzhGA",
    twitter: "@Naki538",
    location: "Vietnam"
  },
  {
    message: "ねねち３周年おめでとう🎉🎉🍑✨✨桃鈴ねねに出会って推し始めてもう3年の月日が流れてる事にびっくりです！！こうして推し続けてさせてくれて本当にありがとう✨何時も太陽みたいに明るく元気をくれるねねちゃんの可愛さのお陰で毎日が本当に楽しいし、3年目は様々な挑戦という事で初のファンミ開催やコロコロコミックの漫画出演、今迄無かった新しいホロメンとの交流にアイドルちは違ったゲーマーへの挑戦。色んな姿で皆を湧かせてくれました。４年目もねねちゃんらしく突き進んで色んな景色を見せてね。ずっとx2大好きな最推しだよ〜！！応援してます✨",
    message_jp: "",
    nickname: "",
    pfp: "qTnu4s__",
    twitter: "あんみつ(@00anmitupafe)",
    location: "Japan / 日本"
  },
  {
    message: "ねねち！！3周年おめでとう！いつの間にか出会ってから3年経ってて、振り返れば色んな思い出に溢れてるよ。これからもねねちの良さをたくさん見つけて、一緒にいっぱい笑っていきたいな。もっともっとねねちの夢が叶いますように。どこまでも一緒に歩いていくよ！",
    message_jp: "",
    nickname: "ゆずこしょう",
    pfp: "-XyL_nJl",
    twitter: "@yuzu_virtual",
    location: "Japan / 日本"
  },
  {
    message: "ねねちゃんが私の心に灯した美しい光は、決して消えることはありません。ねねちゃんがどこへ行っても、いつも星が輝いていますように。ねねちゃんは世界で最高のアイドルです。",
    message_jp: "",
    nickname: "mi esposo アレクシス",
    pfp: "wRhVNXNZ",
    twitter: "@alexis7182",
    location: "Mexico"
  },
  {
    message: "ねねち3周年おめでとー！！！もう3年になるんだね……！緊張してはぁ～んって言ってたの懐かしいね！\nねねちはほんとにいっぱいみんなの事を見てくれてたくさんファンサしてくれて、配信でもステージの上でもたくさん笑顔をくれて元気にしてくれる最高に可愛い素敵なアイドルだと思います。\nしんどかったりするときにねねちの声聞くとほんとに元気になるんだよ！ねねちの「ねぇ聞いて～」って話してくれるのほんと好きなんだ！いっつも癒してくれてありがとうねねち！心のエナジードリンクだぁ……！\nこれからもねねちがたくさんやりたいことが出来て、笑顔で楽しく活動出来るように応援してる！ねねちにもらった元気、少しでもお返し出来るようがんばるね！\n3年前ねねちを知れて、たくさん推せて幸せです。ねねち大好きー！！！",
    message_jp: "",
    nickname: "ルナ",
    pfp: "rzID5EN7",
    twitter: "ルナ(@Kohri1230)",
    location: "Japan / 日本"
  },
  {
    message: "3周年おめでとうございます！４周年も５周年もその先もずっとよろしくね！ねねちのこと大好き！",
    message_jp: "",
    nickname: "オオカミ君",
    pfp: "B5RWErZF",
    twitter: "@Kun_Ookami",
    location: "Taiwan 台灣"
  },
  {
    message: "Congratulations ねねち！ねねちをフォローし始めてもう３年なんて、時間の流れは早いね！\nデビューからのねねちはどんどん成長して、今年もいっぱい目標を達成して、ついにねぽらぼライブも出来て、ファンとしても本当に鼻が高い！\nねねちを配信を見て過ごす毎日は本当に楽しい！馴染みの歌枠や雑談も、新しい配信内容を挑戦するのも、いつも楽しみで大好き！ねねちの笑顔が毎日心のエナジードリンクになってる！\n今回は、「ねぽらぼ最高、ねねち最高最強かわいい！」と、全世界に宣言したいので、派手にお祝い企画を準備した！ねねちが企画を見て、嬉しい気持ちが少しでもなると幸いです！\n改めて、三周年おめでとう！",
    message_jp: "",
    nickname: "バニラサンダー",
    pfp: "VUenmpFe",
    twitter: "@Vanilla_Inazuma",
    location: "United States"
  }
].map((msg) => ({
  ...msg,
  seed: {
    art: randomChoice([1, 2, 3]),
    color: randomChoice([
      "bg-sky-300",
      "bg-orange-300",
      "bg-rose-600 text-white",
      "bg-stone-300"
    ]),
    position: randomChoice([
      "right",
      "left",
      ...[...Array(3)].map(() => "top"),
      ...[...Array(3)].map(() => "none")
    ])
  }
}));
const FRICTION = 2e3;
const SPEED = 500;
const _Nene = class extends __webpack_exports__Actor {
  constructor(game) {
    super({
      x: game.halfDrawWidth,
      y: 500,
      color: __webpack_exports__Color.Red,
      collisionType: __webpack_exports__CollisionType.Active,
      collider: __webpack_exports__Shape.Box(60, 512 * 0.3)
    });
    __publicField(this, "onGround", true);
    __publicField(this, "jumped", false);
    __publicField(this, "lastDir", "Right");
    __publicField(this, "movingLeft", false);
    __publicField(this, "movingRight", false);
    __publicField(this, "jumpDisabled", false);
  }
  onInitialize() {
    this.graphics.add("idleLeft", neneSprite.idleLeft);
    this.graphics.add("idleRight", neneSprite.idleRight);
    this.graphics.add("runLeft", neneSprite.runLeft);
    this.graphics.add("runRight", neneSprite.runRight);
    this.graphics.add("jumpLeft", neneSprite.jumpLeft);
    this.graphics.add("jumpRight", neneSprite.jumpRight);
    this.on("postcollision", (evt) => this.onPostCollision(evt));
  }
  onPostCollision(evt) {
    if (evt.side === __webpack_exports__Side.Bottom) {
      this.onGround = true;
    }
  }
  onPreUpdate(engine, dt) {
    const dtMulti = dt / 1e3;
    if (engine.input.keyboard.isHeld(__webpack_exports__Keys.A) || this.movingLeft) {
      this.vel.x = -SPEED;
    }
    if (engine.input.keyboard.isHeld(__webpack_exports__Keys.D) || this.movingRight) {
      this.vel.x = SPEED;
    }
    if ((engine.input.keyboard.wasPressed(__webpack_exports__Keys.W) || engine.input.keyboard.wasPressed(__webpack_exports__Keys.Space)) && !this.jumpDisabled) {
      if (this.onGround) {
        this.vel.y = -1e3;
        this.onGround = false;
      }
    }
    if (Math.abs(this.vel.x) < 50)
      this.vel.x = 0;
    let state;
    if (this.vel.x > 0) {
      this.lastDir = "Right";
    } else if (this.vel.x < 0) {
      this.lastDir = "Left";
    }
    if (this.vel.x === 0) {
      state = "idle";
    } else {
      state = "run";
    }
    if (!this.onGround) {
      state = "jump";
    }
    this.graphics.use(`${state}${this.lastDir}`);
    $parallaxX.set(this.pos.x);
    const floor = $floor.get();
    floor == null ? void 0 : floor.pos.setTo(this.pos.x, floor.pos.y);
    const sections = $section.get();
    let activeSection = "intro";
    for (const { section, left } of sections) {
      if (this.pos.x >= left) {
        activeSection = section;
      }
    }
    $activeSection.set(activeSection);
    if (this.vel.x === 0)
      return;
    const dir = this.vel.x > 0 ? -1 : 1;
    this.vel.x = this.vel.x + dir * FRICTION * dtMulti;
  }
};
let Nene = _Nene;
__publicField(Nene, "fallLongMult", 1);
__publicField(Nene, "fallShortMult", _Nene.fallLongMult * 1.8);
function Footer() {
  const { t, i18n } = useTranslation();
  const nene = useStore($nene);
  const toggleLang = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "jp" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("opt_lang", newLang.toUpperCase());
    _t(t("nav.langChange"), {
      position: "bottom-center",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IoLanguage, {}),
      className: "bg-paper-white text-gray-700"
    });
    $gameInit.get()();
  };
  const moveToSection = (section) => {
    var _a;
    const scrollerEl = document.querySelector("#scroller");
    const sectionEl = document == null ? void 0 : document.querySelector(`#${section}`);
    const game = $game.get();
    if (!game || !sectionEl || !scrollerEl)
      return;
    const rect = sectionEl == null ? void 0 : sectionEl.getBoundingClientRect();
    let left = rect.left + scrollerEl.scrollLeft + game.halfDrawWidth * 0.65;
    if (section === "credits") {
      left = rect.left + scrollerEl.scrollLeft;
    }
    const drawHeight = game.drawHeight || 0;
    (_a = nene == null ? void 0 : nene.actions) == null ? void 0 : _a.easeTo(
      __webpack_exports__vec(left, drawHeight - 160 - (nene == null ? void 0 : nene.height) / 2),
      1e3,
      __webpack_exports__EasingFunctions.EaseInOutCubic
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 px-4 lg:px-8 fixed bottom-4 left-0 right-0 pointer-events-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "relative z-30 px-3 lg:px-6 py-3 bg-white rounded-md",
        onClick: () => moveToSection("intro"),
        children: t("nav.intro")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "relative z-30 px-3 lg:px-6 py-3 bg-white rounded-md",
        onClick: () => moveToSection("messages"),
        children: t("nav.messages")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "relative z-30 px-3 lg:px-6 py-3 bg-white rounded-md",
        onClick: () => moveToSection("art"),
        children: t("nav.art")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "relative z-30 px-3 lg:px-6 py-3 bg-white rounded-md",
        onClick: () => moveToSection("cake"),
        children: t("nav.cake")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "relative z-30 px-3 lg:px-6 py-3 bg-white rounded-md",
        onClick: () => moveToSection("credits"),
        children: t("nav.credits")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: toggleLang,
        className: "bg-white rounded-full aspect-square flex h-full p-2 ml-auto",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoLanguage, { size: 28 })
      }
    )
  ] });
}
function Index() {
  const canvasRef = reactExports.useRef(null);
  const scrollerRef = reactExports.useRef(null);
  const movementCancel = reactExports.useRef(0);
  const nene = useStore($nene);
  reactExports.useEffect(() => {
    const canvasEl = canvasRef.current;
    const scrollerEl = scrollerRef.current;
    if (!(canvasEl && scrollerEl))
      return;
    const game = new __webpack_exports__Engine({
      canvasElement: canvasEl,
      fixedUpdateFps: 60,
      backgroundColor: __webpack_exports__Color.Transparent,
      displayMode: __webpack_exports__DisplayMode.FillContainer
    });
    $game.set(game);
    __webpack_exports__Physics.useArcadePhysics();
    __webpack_exports__Physics.acc = new __webpack_exports__Vector(0, 2500);
    const nene2 = new Nene(game);
    $nene.set(nene2);
    game.currentScene.camera.strategy.lockToActorAxis(nene2, __webpack_exports__Axis.X);
    game.currentScene.camera.onPostUpdate = () => {
      scrollerEl.scrollLeft = game.currentScene.camera.pos.x - game.halfDrawWidth;
    };
    const floor = new __webpack_exports__Actor({
      x: game.drawWidth / 2,
      y: game.drawHeight - 80,
      width: game.drawWidth,
      height: 160,
      collisionType: __webpack_exports__CollisionType.Fixed
    });
    $floor.set(floor);
    game.add(nene2);
    game.add(floor);
    const initGame = () => {
      game.currentScene.camera.strategy.limitCameraBounds(
        new __webpack_exports__BoundingBox(
          0,
          0,
          scrollerEl.scrollWidth || 0,
          scrollerEl.scrollHeight || 0
        )
      );
      nene2.pos.y = game.drawHeight - 160 - (nene2 == null ? void 0 : nene2.height) / 2;
      updateCollisionActors();
    };
    $gameInit.set(initGame);
    const resizeObserver = new ResizeObserver(initGame);
    resizeObserver.observe(scrollerEl);
    const scrollListener = (e) => {
      if (e.deltaY < 0) {
        nene2.movingLeft = true;
        nene2.movingRight = false;
        clearTimeout(movementCancel.current);
        movementCancel.current = setTimeout(() => {
          nene2.movingLeft = false;
        }, 600);
      } else if (e.deltaY > 0) {
        nene2.movingRight = true;
        nene2.movingLeft = false;
        clearTimeout(movementCancel.current);
        movementCancel.current = setTimeout(() => {
          nene2.movingRight = false;
        }, 600);
      }
      e.preventDefault();
    };
    document.addEventListener("wheel", scrollListener);
    initGame();
  }, []);
  const startMovingLeft = () => {
    if (!nene)
      return;
    nene.movingLeft = true;
    nene.movingRight = false;
  };
  const stopMoving = () => {
    if (!nene)
      return;
    nene.movingLeft = false;
    nene.movingRight = false;
  };
  const startMovingRight = () => {
    if (!nene)
      return;
    nene.movingRight = true;
    nene.movingLeft = false;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative isolate h-full grid grid-rows-[1fr_auto] overflow-x-auto select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "overflow-hidden h-full relative isolate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute z-10 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: Beam,
        alt: "",
        className: "fixed inset-0 z-10 w-full h-[calc(100%-7rem)] object-contain pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onTouchStartCapture: startMovingLeft,
        onTouchEndCapture: stopMoving,
        className: "fixed z-10 left-0 top-0 bottom-40 w-[10%]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onTouchStartCapture: startMovingRight,
        onTouchEndCapture: stopMoving,
        className: "fixed z-10 right-0 top-0 bottom-40 w-[10%]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: scrollerRef, id: "scroller", className: "h-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-max flex flex-nowrap bg-paper pb-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "intro", className: "h-full w-screen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "messages",
            className: "h-full w-fit flex gap-16 items-end isolate",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[60vw]" }),
              messages.map((messageData) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                MessageCard,
                {
                  messageData
                },
                messageData.message
              ))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "art",
            className: "h-full w-fit flex gap-16 items-end isolate",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[60vw]" }),
              art.map((artData) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArtCard, { artData }, artData.art))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "cake",
            className: "h-full w-fit flex gap-16 items-end isolate",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[60vw]" }),
              cake.map((cakeData) => /* @__PURE__ */ jsxRuntimeExports.jsx(CakeCard, { cakeData }, cakeData.cake))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Credits, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute flex flex-wrap items-end px-8 py-4 bottom-0 bg-yanagi h-40 w-full __game_collision", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full penlight3 h-40 absolute bottom-12 left-0 right-0 animate-[pulse_10s_ease-in-out_infinite] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full penlight2 h-40 absolute bottom-0 left-0 right-0 animate-[pulse_7s_ease-in-out_infinite] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full penlight1 h-40 absolute bottom-0 animate-[pulse_5s_ease-in-out_infinite] pointer-events-none" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] }) });
}
export {
  Index as default
};
