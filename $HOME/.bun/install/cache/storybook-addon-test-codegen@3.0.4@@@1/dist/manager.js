import React2, { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from 'react';
import { addons, types, useAddonState, useChannel, useStorybookApi, useGlobals, experimental_requestResponse } from 'storybook/manager-api';
import { IconButton, Button, Form, AddonPanel, Spaced, Badge, Bar, EmptyTabContent, WithTooltip, TooltipNote, SyntaxHighlighter } from 'storybook/internal/components';
import { AlertIcon, CheckIcon, SyncIcon, CrossIcon, AddIcon, DeleteIcon, CopyIcon } from '@storybook/icons';
import { styled } from 'storybook/theming';

// src/manager.tsx
function c(e2, u2, c2) {
  var i2 = this, a2 = useRef(null), o = useRef(0), f = useRef(null), l = useRef([]), v = useRef(), m = useRef(), d = useRef(e2), g = useRef(true);
  d.current = e2;
  var p = "undefined" != typeof window, w = !u2 && 0 !== u2 && p;
  if ("function" != typeof e2) throw new TypeError("Expected a function");
  u2 = +u2 || 0;
  var s = !!(c2 = c2 || {}).leading, x = !("trailing" in c2) || !!c2.trailing, h = "maxWait" in c2, y = "debounceOnServer" in c2 && !!c2.debounceOnServer, F = h ? Math.max(+c2.maxWait || 0, u2) : null;
  useEffect(function() {
    return g.current = true, function() {
      g.current = false;
    };
  }, []);
  var A = useMemo(function() {
    var r2 = function(r3) {
      var n3 = l.current, t3 = v.current;
      return l.current = v.current = null, o.current = r3, m.current = d.current.apply(t3, n3);
    }, n2 = function(r3, n3) {
      w && cancelAnimationFrame(f.current), f.current = w ? requestAnimationFrame(r3) : setTimeout(r3, n3);
    }, t2 = function(r3) {
      if (!g.current) return false;
      var n3 = r3 - a2.current;
      return !a2.current || n3 >= u2 || n3 < 0 || h && r3 - o.current >= F;
    }, e3 = function(n3) {
      return f.current = null, x && l.current ? r2(n3) : (l.current = v.current = null, m.current);
    }, c3 = function r3() {
      var c4 = Date.now();
      if (t2(c4)) return e3(c4);
      if (g.current) {
        var i3 = u2 - (c4 - a2.current), f2 = h ? Math.min(i3, F - (c4 - o.current)) : i3;
        n2(r3, f2);
      }
    }, A2 = function() {
      if (p || y) {
        var e4 = Date.now(), d2 = t2(e4);
        if (l.current = [].slice.call(arguments), v.current = i2, a2.current = e4, d2) {
          if (!f.current && g.current) return o.current = a2.current, n2(c3, u2), s ? r2(a2.current) : m.current;
          if (h) return n2(c3, u2), r2(a2.current);
        }
        return f.current || n2(c3, u2), m.current;
      }
    };
    return A2.cancel = function() {
      f.current && (w ? cancelAnimationFrame(f.current) : clearTimeout(f.current)), o.current = 0, l.current = a2.current = v.current = f.current = null;
    }, A2.isPending = function() {
      return !!f.current;
    }, A2.flush = function() {
      return f.current ? e3(Date.now()) : m.current;
    }, A2;
  }, [s, h, u2, F, x, w, p, y]);
  return A;
}
function i(r2, n2) {
  return r2 === n2;
}
function a(n2, t2, a2) {
  var o = i, f = useRef(n2), l = useState({})[1], v = c(useCallback(function(r2) {
    f.current = r2, l({});
  }, [l]), t2, a2), m = useRef(n2);
  return o(m.current, n2) || (v(n2), m.current = n2), [f.current, v];
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}

// node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join(".");
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i2) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i2)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
  if (type === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread(_objectSpread({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split(".").forEach(function(className2) {
          if (!classes.includes(className2)) classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread(_objectSpread({}, properties), {}, {
        className: createClassNameString(className) || void 0,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ React2.createElement(TagName, _extends({
      key
    }, props), children);
  }
}
var Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.appBorderColor}`
}));
var Label = styled.div(({ theme, isSticky }) => ({
  fontSize: theme.typography.size.s1,
  fontWeight: "bold",
  marginBottom: 4,
  padding: "6px 7px",
  background: theme.barBg,
  borderBottom: `1px solid ${theme.appBorderColor}`,
  position: "relative",
  ...isSticky ? {
    position: "sticky",
    top: 0,
    zIndex: 1
  } : {}
}));
var Code = styled.div({
  padding: "6px 7px 10px",
  height: "100%",
  tabSize: "8px",
  pre: {
    margin: 0,
    borderRadius: 0
  }
});
var CopyIconContainer = styled.div({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: 0,
  zIndex: 1
});
var WarningButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  width: 20,
  height: 20,
  marginRight: 4
}));
var WarningIcon = styled(AlertIcon)(({ theme }) => ({
  color: theme.color.warning,
  width: 12,
  height: 12
}));
function CodeBlock({
  name,
  codeLines,
  isSticky
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [copiedTimeoutId, setCopiedTimeoutId] = useState(null);
  const splitCodeLines = codeLines.flatMap(
    (line) => line.text.split("\n").map((text, index) => ({
      text,
      warning: line.warning && index === 0 ? line.warning : void 0
    }))
  );
  const code = splitCodeLines.map(({ text }) => text).join("\n");
  return /* @__PURE__ */ React2.createElement(Container, null, /* @__PURE__ */ React2.createElement(Label, { isSticky }, name, /* @__PURE__ */ React2.createElement(CopyIconContainer, null, /* @__PURE__ */ React2.createElement(
    WithTooltip,
    {
      placement: "top",
      as: "div",
      hasChrome: false,
      trigger: "hover",
      tooltip: /* @__PURE__ */ React2.createElement(TooltipNote, { note: "Copy" })
    },
    /* @__PURE__ */ React2.createElement(
      IconButton,
      {
        onClick: () => navigator.clipboard.writeText(code).then(() => {
          setIsCopied(true);
          if (copiedTimeoutId) {
            clearTimeout(copiedTimeoutId);
          }
          setCopiedTimeoutId(
            setTimeout(() => {
              setIsCopied(false);
              setCopiedTimeoutId(null);
            }, 2e3)
          );
        })
      },
      isCopied ? /* @__PURE__ */ React2.createElement(CheckIcon, { size: 16 }) : /* @__PURE__ */ React2.createElement(CopyIcon, { size: 16 })
    )
  ))), /* @__PURE__ */ React2.createElement(Code, null, /* @__PURE__ */ React2.createElement(
    SyntaxHighlighter,
    {
      language: "typescript",
      renderer: ({ rows, useInlineStyles }) => rows.map((row, i2) => {
        const warning = splitCodeLines[i2]?.warning;
        if (warning) {
          const warningIcon = {
            type: "element",
            tagName: WarningIndicator,
            properties: {
              className: [],
              warning
            },
            children: []
          };
          row.children.splice(0, 1, warningIcon);
        } else if (i2 > 0 && i2 < rows.length - 1) {
          if (row.children[0].properties) {
            row.children[0].properties.style = { marginRight: "16px" };
          }
        }
        return createElement({
          node: row,
          stylesheet: {},
          useInlineStyles,
          key: `code-segement${i2}`
        });
      })
    },
    code
  )));
}
var Title = styled.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2,
  marginBottom: 12
}));
var Desc = styled.div(({ theme }) => ({
  color: theme.color.defaultText
}));
var Message = styled.div(({ theme }) => ({
  color: theme.color.defaultText,
  lineHeight: "18px",
  padding: 15,
  width: 350
}));
var warningToRender = {
  ROLE_WITHOUT_NAME: {
    title: "Role without name",
    description: /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("strong", null, "getByRole"), " without name can match any button, making tests unreliable."), /* @__PURE__ */ React2.createElement("div", { style: { margin: "8px 0" } }, "To fix, add ", /* @__PURE__ */ React2.createElement("strong", null, "visible text"), " or ", /* @__PURE__ */ React2.createElement("strong", null, "aria-label"), " to your element:"), /* @__PURE__ */ React2.createElement("div", { style: { margin: "8px 0" } }, /* @__PURE__ */ React2.createElement("div", null, "\u274C ", /* @__PURE__ */ React2.createElement("code", null, "<button />")), /* @__PURE__ */ React2.createElement("div", null, "\u2705 ", /* @__PURE__ */ React2.createElement("code", null, "<button>Submit</button>")), /* @__PURE__ */ React2.createElement("div", null, "\u2705 ", /* @__PURE__ */ React2.createElement("code", null, '<button aria-label="Submit">Icon</button>'))))
  },
  QUERY_SELECTOR: {
    title: "Query selector usage",
    description: /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("strong", null, "querySelector"), " is fragile and breaks when HTML structure changes."), /* @__PURE__ */ React2.createElement("div", { style: { margin: "8px 0" } }, "To fix, use ", /* @__PURE__ */ React2.createElement("strong", null, "semantic HTML"), " or ", /* @__PURE__ */ React2.createElement("strong", null, "aria-label"), " ", "to make the element accessible:"), /* @__PURE__ */ React2.createElement("div", { style: { margin: "8px 0" } }, /* @__PURE__ */ React2.createElement("div", null, "\u274C ", /* @__PURE__ */ React2.createElement("code", null, '<div class="submit-18372">Submit</div>')), /* @__PURE__ */ React2.createElement("div", null, "\u2705 ", /* @__PURE__ */ React2.createElement("code", null, "<button>Submit</button>")), /* @__PURE__ */ React2.createElement("div", null, "\u2705 ", /* @__PURE__ */ React2.createElement("code", null, '<div aria-label="Submit">Icon</div>'))))
  },
  TEST_ID: {
    title: "Test ID usage",
    description: /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("strong", null, "data-testid"), " elements are not accessible and do not resemble how your software is used."), /* @__PURE__ */ React2.createElement("div", { style: { margin: "8px 0" } }, "To improve, use ", /* @__PURE__ */ React2.createElement("strong", null, "semantic HTML"), " or", " ", /* @__PURE__ */ React2.createElement("strong", null, "aria-label"), " to make the element accessible:"), /* @__PURE__ */ React2.createElement("div", { style: { margin: "8px 0" } }, /* @__PURE__ */ React2.createElement("div", null, "\u274C ", /* @__PURE__ */ React2.createElement("code", null, '<div data-testid="submit">Submit</div>')), /* @__PURE__ */ React2.createElement("div", null, "\u2705 ", /* @__PURE__ */ React2.createElement("code", null, "<button>Submit</button>"))))
  }
};
function WarningIndicator({ warning }) {
  const { title, description } = warningToRender[warning];
  return /* @__PURE__ */ React2.createElement(
    WithTooltip,
    {
      trigger: "hover",
      tooltip: /* @__PURE__ */ React2.createElement(Message, null, /* @__PURE__ */ React2.createElement(Title, null, title), /* @__PURE__ */ React2.createElement(Desc, null, description))
    },
    /* @__PURE__ */ React2.createElement(WarningButton, null, /* @__PURE__ */ React2.createElement(WarningIcon, null))
  );
}

// node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar)) return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len])) ;
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp) return false;
        }
        if (!bar.has(tmp)) return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && typeof tmp === "object") {
          tmp = find(bar, tmp);
          if (!tmp) return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len)) ;
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len]) ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// src/constants.ts
var ADDON_ID = "storybook/test-codegen";
var PANEL_ID = `${ADDON_ID}/panel`;
var IS_RECORDING_KEY = `${ADDON_ID}/is-recording`;
var IS_ASSERTING_KEY = `${ADDON_ID}/is-asserting`;
var EVENTS = {
  INTERACTION: `${ADDON_ID}/interaction`,
  SAVE_NEW_STORY_REQUEST: `${ADDON_ID}/save-new-story-request`,
  SAVE_NEW_STORY_RESPONSE: `${ADDON_ID}/save-new-story-response`
};
var Container2 = styled.div(({ theme }) => ({
  height: "100%",
  background: theme.background.content,
  display: "flex",
  flexDirection: "column"
}));
var ContentWrapper = styled.div({
  flex: 1,
  overflow: "auto"
});
var SubnavWrapper = styled.div(({ theme }) => ({
  background: theme.background.app,
  borderBottom: `1px solid ${theme.appBorderColor}`,
  position: "sticky",
  top: 0,
  zIndex: 2
}));
var StyledSubnav = styled.nav(({ theme }) => ({
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px"
}));
var StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  borderRadius: 4,
  padding: "6px 8px",
  color: theme.textMutedColor,
  "&:not(:disabled)": {
    "&:hover,&:focus-visible": {
      color: theme.color.secondary
    }
  },
  marginBottom: 1,
  lineHeight: "12px"
}));
var StyledButtonBigContent = styled.div(
  ({
    isHidden
  }) => ({
    display: "flex",
    alignItems: "center",
    gap: 6,
    opacity: isHidden ? 0 : 1
  })
);
var StyledButtonSmallContent = styled(StyledButtonBigContent)({
  left: 8,
  top: "50%",
  transform: "translateY(-50%)",
  position: "absolute"
});
var AssertionButton = styled(StyledButton)(
  ({
    isAsserting
  }) => ({
    backgroundColor: isAsserting ? "rgba(0, 128, 0, 0.1)" : void 0,
    color: isAsserting ? "rgb(0, 128, 0)" : void 0
  })
);
var DisabledButton = styled(StyledButton)({
  cursor: "not-allowed"
});
var SavedButton = styled(Button)({
  color: "white"
});
var Group = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "9px"
});
var EmptyStateDescription = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px"
}));
var RecordIcon = styled.span(
  ({ theme, isRecording }) => ({
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: isRecording ? theme.color.negative : theme.color.secondary,
    display: "inline-block"
  })
);
var CodeBlocksWrapper = styled.div({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});
var SaveContainer = styled.form({
  display: "flex",
  alignItems: "center",
  gap: 8
});
var SaveIconColorful = styled(CheckIcon)(({ theme }) => ({
  width: 12,
  color: theme.color.secondary
}));
var SaveInput = styled(Form.Input)(({ theme }) => ({
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: theme.typography.size.s1,
  height: 28,
  minHeight: "unset",
  ...theme.base === "light" && {
    color: theme.color.darkest
  },
  "::placeholder": {
    color: theme.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${theme.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
}));
var RotatingIcon = styled(SyncIcon)(({ theme }) => ({
  animation: `${theme.animation.rotate360} 1s linear infinite;`
}));
var StyledCheckIcon = styled(CheckIcon)({
  width: 12
});
var ErrorButton = styled(Button)(({ theme }) => ({
  color: theme.color.negative
}));
var ErrorIcon = styled(CrossIcon)(({ theme }) => ({
  color: theme.color.negative
}));
var AssertIcon = styled(AddIcon)({
  width: 14
});

// src/SaveStory.tsx
var stringifyArgs = (args) => JSON.stringify(args, (_, value) => {
  if (typeof value === "function") {
    return "__sb_empty_function_arg__";
  }
  return value;
});
var SaveStoryButton = ({
  code,
  turnOffRecording
}) => {
  const api = useStorybookApi();
  const [name, setName] = useState("");
  const [state, setState] = useState("button");
  const storyData = api.getCurrentStoryData();
  useEffect(() => {
    setName(storyData?.name);
    setState("button");
  }, [storyData?.name]);
  const saveStory = async () => {
    setState("creating");
    const payload = {
      code,
      csfId: storyData.id,
      importPath: storyData.importPath,
      args: stringifyArgs(
        "args" in storyData ? Object.entries(storyData.args || {}).reduce(
          (acc, [key, value]) => {
            if (!dequal(value, storyData.initialArgs?.[key])) {
              acc[key] = value;
            }
            return acc;
          },
          {}
        ) : {}
      ),
      name
    };
    const channel = api.getChannel();
    if (!channel) {
      return;
    }
    try {
      const { newStoryId } = await experimental_requestResponse(
        // biome-ignore lint/suspicious/noExplicitAny: Should be fixed with new package version
        channel,
        EVENTS.SAVE_NEW_STORY_REQUEST,
        EVENTS.SAVE_NEW_STORY_RESPONSE,
        payload
      );
      if (newStoryId === storyData.id) {
        setState("success");
        setTimeout(() => {
          setState("button");
        }, 2e3);
      } else {
        setState("button");
        api.addNotification({
          id: "create-new-story-file-success",
          content: {
            headline: "Story file created",
            subHeadline: `${name} was created`
          },
          duration: 8e3,
          icon: /* @__PURE__ */ React2.createElement(CheckIcon, null)
        });
      }
      await trySelectNewStory(api.selectStory, newStoryId);
    } catch (ex) {
      console.error(ex);
      api.addNotification({
        id: "create-new-story-file-error",
        content: {
          headline: "Failed to save story",
          subHeadline: "Please try again"
        },
        duration: 8e3,
        icon: /* @__PURE__ */ React2.createElement(CheckIcon, null)
      });
      setState("error");
      setTimeout(() => {
        setState("button");
      }, 2e3);
    } finally {
      turnOffRecording();
    }
  };
  const isDevelopment = (
    // biome-ignore lint/suspicious/noExplicitAny:
    global.CONFIG_TYPE === "DEVELOPMENT"
  );
  return /* @__PURE__ */ React2.createElement(SaveContainer, null, state === "button" && isDevelopment && /* @__PURE__ */ React2.createElement(StyledButton, { onClick: () => setState("input"), variant: "outline" }, /* @__PURE__ */ React2.createElement(SaveIconColorful, { size: 16 }), " Save to story"), state === "button" && !isDevelopment && /* @__PURE__ */ React2.createElement(
    WithTooltip,
    {
      as: "div",
      hasChrome: false,
      trigger: "hover",
      tooltip: /* @__PURE__ */ React2.createElement(TooltipNote, { note: "Only available in development mode" })
    },
    /* @__PURE__ */ React2.createElement(DisabledButton, { variant: "outline", type: "button" }, /* @__PURE__ */ React2.createElement(SaveIconColorful, { size: 16 }), " Save to story")
  ), state === "input" && /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
    SaveInput,
    {
      placeholder: "Type story name",
      required: true,
      autoFocus: true,
      value: name,
      onChange: (e2) => setName(e2.target.value)
    }
  ), /* @__PURE__ */ React2.createElement(StyledButton, { onClick: saveStory, type: "submit", variant: "outline" }, "Save")), state === "creating" && /* @__PURE__ */ React2.createElement(StyledButton, { onClick: () => setState("input"), variant: "outline" }, /* @__PURE__ */ React2.createElement(RotatingIcon, null), " Saving"), state === "success" && /* @__PURE__ */ React2.createElement(SavedButton, { variant: "solid", type: "button" }, /* @__PURE__ */ React2.createElement(StyledCheckIcon, null), " Saved"), state === "error" && /* @__PURE__ */ React2.createElement(ErrorButton, { variant: "ghost", type: "button" }, /* @__PURE__ */ React2.createElement(ErrorIcon, null), " Failed to save"));
};
async function trySelectNewStory(selectStory, storyId, attempt = 1) {
  if (attempt > 10) {
    throw new Error("We could not select the new story. Please try again.");
  }
  try {
    await selectStory(storyId);
  } catch (e2) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return trySelectNewStory(selectStory, storyId, attempt + 1);
  }
}

// src/codegen/args-to-string.ts
var argsToString = (args) => args.map((arg) => {
  if (typeof arg === "string") {
    return wrapInQuotes(arg);
  }
  if (typeof arg === "object" && arg !== null) {
    if (Array.isArray(arg)) {
      return `[${arg.map((item) => typeof item === "string" ? wrapInQuotes(item) : item).join(", ")}]`;
    }
    return `{ ${Object.entries(arg).reduce((acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        acc.push(`${key}: ${argsToString([value])}`);
      } else {
        acc.push(
          `${key}: ${typeof value === "string" ? wrapInQuotes(value) : value}`
        );
      }
      return acc;
    }, []).join(", ")} }`;
  }
  return String(arg);
}).join(", ");
var wrapInQuotes = (str) => {
  const result = str.replace(/\\/g, "\\\\");
  if (result.includes("\n")) {
    return `\`${result.replace(/`/g, "\\`")}\``;
  }
  return `'${result.replace(/'/g, "\\'")}'`;
};

// src/codegen/combine-interactions.ts
var combineInteractions = (interaction, existingInteractions) => {
  const result = [...existingInteractions];
  if (interaction.event.type === "dblclick") {
    let clicksRemoved = 0;
    for (let i2 = result.length - 1; i2 >= 0 && clicksRemoved < 2; i2--) {
      if (result[i2].event.type === "click") {
        result.splice(i2, 1);
        clicksRemoved++;
      }
    }
    result.push(interaction);
    return result;
  }
  if (interaction.event.type === "type") {
    for (let i2 = result.length - 1; i2 >= 0; i2--) {
      const prevInteraction = result[i2];
      const isNotType = prevInteraction.event.type !== "type";
      const isShiftKey = prevInteraction.event.type === "keydown" && prevInteraction.event.key === "shift";
      if (isNotType && !isShiftKey) {
        result.push(interaction);
        return result;
      }
      if (prevInteraction?.event.type === "type" && isSameElementQuery(prevInteraction, interaction)) {
        prevInteraction.event.value = interaction.event.value;
        return result;
      }
    }
    result.push(interaction);
    return result;
  }
  if (interaction.event.type === "keyup") {
    for (let i2 = result.length - 1; i2 >= 0; i2--) {
      const prevInteraction = result[i2];
      if (prevInteraction.event.type === "keydown" && prevInteraction.event.key === "shift") {
        result.splice(i2, 1);
        return result;
      }
    }
    return result;
  }
  if (interaction.event.type === "focus") {
    let hasShift = false;
    let tabKeydownIndex = null;
    for (let i2 = result.length - 1; i2 >= 0; i2--) {
      const prevInteraction = result[i2];
      if (prevInteraction?.event.type === "keydown" && prevInteraction?.event.key === "tab") {
        tabKeydownIndex = i2;
      }
      if (prevInteraction?.event.type === "keydown" && prevInteraction?.event.key === "shift") {
        hasShift = true;
        break;
      }
    }
    if (tabKeydownIndex !== null) {
      result.splice(tabKeydownIndex, 1);
      result.push({
        elementQuery: interaction.elementQuery,
        event: { type: "focus", shift: hasShift }
      });
      return result;
    }
    return result;
  }
  result.push(interaction);
  return result;
};
var isSameElementQuery = (a2, b) => {
  return a2.elementQuery.object === b.elementQuery.object && a2.elementQuery.method === b.elementQuery.method && argsToString(a2.elementQuery.args) === argsToString(b.elementQuery.args) && a2.elementQuery.nth === b.elementQuery.nth;
};

// src/codegen/interactions-to-code.ts
var EVENT_TO_USER_EVENT = {
  click: "click",
  dblclick: "dblClick",
  keydown: "keyboard",
  type: "type",
  select: "selectOptions",
  upload: "upload",
  focus: "focus"
};
var convertInteractionsToCode = (interactions, hasTypescript) => {
  const codeLines = [];
  let usesBody = false;
  let usesCanvas = false;
  let needsExpect = false;
  for (const interaction of interactions) {
    const { event } = interaction;
    if (event.type === "keyup" || event.type === "keydown" && ["shift", "tab"].includes(event.key)) {
      continue;
    }
    if (event.type === "assertion") {
      needsExpect = true;
      const { queryString: queryString2, asElementPostfix, warning: warning2 } = getQueryString(
        interaction.elementQuery,
        hasTypescript
      );
      let assertCode = `expect(${queryString2.replace(asElementPostfix, "")})`.replace("await ", "").replace("canvas.find", "canvas.query");
      if (event.args && event.args.length > 0) {
        assertCode += `.${event.assertionType}(${argsToString(event.args)})`;
      } else {
        assertCode += `.${event.assertionType}()`;
      }
      if (interaction.elementQuery.object === "body") {
        usesBody = true;
      }
      if (interaction.elementQuery.object === "canvas") {
        usesCanvas = true;
      }
      codeLines.push({
        text: `await waitFor(() => ${assertCode})`,
        warning: warning2
      });
      continue;
    }
    let beginning = `await userEvent.${EVENT_TO_USER_EVENT[event.type]}`;
    let { queryString, assertion, warning } = getQueryString(
      interaction.elementQuery,
      hasTypescript
    );
    let valueStr = "";
    if (event.type === "type") {
      if (event.value === "") {
        beginning = beginning.replace(EVENT_TO_USER_EVENT[event.type], "clear");
        valueStr = "";
      } else {
        valueStr = `, ${wrapInQuotes(event.value)}`;
      }
    } else if (event.type === "keydown") {
      queryString = "";
      assertion = null;
      warning = void 0;
      valueStr = `'${event.key}'`;
    } else if (event.type === "select") {
      valueStr = `, [${event.options.map((option) => `'${option}'`).join(", ")}]`;
    } else if (event.type === "upload") {
      valueStr = `, [${event.files.map((file) => `new File(['${file}'], '${file}')`).join(", ")}]`;
    } else if (event.type === "focus") {
      beginning = beginning.replace("focus", "tab");
      queryString = "";
      assertion = null;
      warning = void 0;
      valueStr = event.shift ? "{ shift: true }" : "";
    }
    if (queryString) {
      if (interaction.elementQuery.object === "body") {
        usesBody = true;
      } else {
        usesCanvas = true;
      }
    }
    if (assertion) {
      codeLines.push({
        text: assertion,
        warning
      });
      needsExpect = true;
    }
    codeLines.push({
      text: `${beginning}(${queryString}${valueStr});`,
      warning
    });
  }
  if (!codeLines.length) {
    return {
      imports: [],
      play: []
    };
  }
  const importNames = ["userEvent"];
  if (usesCanvas) {
    importNames.push("within");
  }
  if (needsExpect || usesBody) {
    importNames.push("waitFor", "expect");
  }
  const play = [
    {
      text: "play: async ({ canvasElement }) => {"
    }
  ];
  if (usesBody) {
    play.push({
      text: tab("const body = canvasElement.ownerDocument.body;")
    });
  }
  if (usesCanvas) {
    if (usesBody) {
      play.push({
        text: tab("const canvas = within(body);")
      });
    } else {
      play.push({
        text: tab("const canvas = within(canvasElement.ownerDocument.body);")
      });
    }
  }
  play.push(
    ...codeLines.map((codeLine) => ({
      text: tab(codeLine.text),
      warning: codeLine.warning
    })),
    { text: "}" }
  );
  return {
    imports: [
      {
        text: `import { ${importNames.join(", ")} } from 'storybook/test';`
      }
    ],
    play
  };
};
var tab = (str) => `	${str}`;
var getQueryString = (query, hasTypescript) => {
  const asElementPostfix = " as HTMLElement";
  const beginning = `${query.object === "canvas" ? "await " : ""}${query.object}.${query.method}`;
  const args = argsToString(query.args);
  let warning;
  if (query.method === "querySelector") {
    warning = "QUERY_SELECTOR";
  } else if (query.method.includes("ByRole") && (!query.args[1] || !("name" in query.args[1]))) {
    warning = "ROLE_WITHOUT_NAME";
  } else if (query.method.includes("ByTestId")) {
    warning = "TEST_ID";
  }
  const asElement = query.object === "body" && hasTypescript ? asElementPostfix : "";
  const queryString = `${beginning}(${args})${asElement}`;
  const result = query.nth === null ? queryString : `(${queryString})[${query.nth}]`;
  const queryStringWithoutAsElement = result.replace(asElement, "");
  const assertion = query.object === "body" ? `await waitFor(() => expect(${queryStringWithoutAsElement}).toBeInTheDocument());` : null;
  return {
    assertion,
    queryString: result,
    asElementPostfix,
    warning
  };
};
var useInteractions = () => useAddonState(ADDON_ID, JSON.stringify([]));
var useIsRecording = () => {
  const [globals, setGlobals] = useGlobals();
  return [
    globals[IS_RECORDING_KEY] === true,
    (isRecording) => {
      setGlobals({
        [IS_RECORDING_KEY]: isRecording
      });
    }
  ];
};
var useIsAsserting = () => {
  const [globals, setGlobals] = useGlobals();
  return [
    globals[IS_ASSERTING_KEY] === true,
    (isAssertionMode) => {
      setGlobals({
        [IS_ASSERTING_KEY]: isAssertionMode
      });
    }
  ];
};

// src/InteractionRecorder.tsx
var InteractionRecorder = () => {
  const [interactions, setInteractions] = useInteractions();
  const [isRecording, setIsRecording] = useIsRecording();
  const [isAsserting, setIsAsserting] = useIsAsserting();
  useChannel({
    [EVENTS.INTERACTION]: (interaction) => {
      setInteractions(
        (prevInteractions) => JSON.stringify(
          combineInteractions(interaction, JSON.parse(prevInteractions))
        )
      );
    }
  });
  const toggleRecording = () => {
    if (isRecording && isAsserting) {
      setIsAsserting(false);
    }
    setIsRecording(!isRecording);
  };
  const toggleAsserting = () => setIsAsserting(!isAsserting);
  const resetInteractions = () => setInteractions(() => JSON.stringify([]));
  const api = useStorybookApi();
  const storyData = api.getCurrentStoryData();
  const turnOffRecording = () => {
    setIsRecording(false);
    setIsAsserting(false);
  };
  useEffect(() => {
    resetInteractions();
    if (isRecording || isAsserting) {
      turnOffRecording();
    }
  }, [storyData?.id]);
  const hasTypescript = [".ts", ".tsx"].some(
    (ext) => storyData?.importPath.endsWith(ext)
  );
  const [debouncedInteractions] = a(interactions, 100);
  const code = useMemo(
    () => convertInteractionsToCode(JSON.parse(debouncedInteractions), hasTypescript),
    [debouncedInteractions, hasTypescript]
  );
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current?.parentElement?.style) {
      containerRef.current.parentElement.style.height = "100%";
    }
  }, []);
  const codeBlocksRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
  useLayoutEffect(() => {
    const element = codeBlocksRef.current;
    if (!element || !isScrolledToBottom) {
      return;
    }
    const observer = new MutationObserver(() => {
      if (isScrolledToBottom) {
        setTimeout(() => {
          element.scrollTop = element.scrollHeight;
        });
      }
    });
    observer.observe(element, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [code, isScrolledToBottom]);
  return /* @__PURE__ */ React2.createElement(Container2, { ref: containerRef }, /* @__PURE__ */ React2.createElement(SubnavWrapper, null, /* @__PURE__ */ React2.createElement(Bar, null, /* @__PURE__ */ React2.createElement(StyledSubnav, null, /* @__PURE__ */ React2.createElement(Group, null, /* @__PURE__ */ React2.createElement(StyledButton, { onClick: toggleRecording }, /* @__PURE__ */ React2.createElement(StyledButtonBigContent, { isHidden: isRecording }, /* @__PURE__ */ React2.createElement(RecordIcon, { isRecording: false }), "Start recording"), /* @__PURE__ */ React2.createElement(StyledButtonSmallContent, { isHidden: !isRecording }, /* @__PURE__ */ React2.createElement(RecordIcon, { isRecording: true }), "Stop recording")), /* @__PURE__ */ React2.createElement(
    AssertionButton,
    {
      disabled: !isRecording,
      onClick: toggleAsserting,
      isAsserting
    },
    /* @__PURE__ */ React2.createElement(AssertIcon, null),
    isAsserting ? "Choose element" : "Add assertion"
  ), /* @__PURE__ */ React2.createElement(StyledButton, { onClick: resetInteractions, disabled: !code.play.length }, /* @__PURE__ */ React2.createElement(DeleteIcon, null), "Reset")), code.play.length > 0 && /* @__PURE__ */ React2.createElement(SaveStoryButton, { code, turnOffRecording })))), /* @__PURE__ */ React2.createElement(
    ContentWrapper,
    {
      ref: codeBlocksRef,
      onScroll: (e2) => {
        const { scrollTop, scrollHeight, clientHeight } = e2.target;
        setIsScrolledToBottom(scrollTop + clientHeight >= scrollHeight);
      }
    },
    code.play.length === 0 && !isRecording && /* @__PURE__ */ React2.createElement(
      EmptyTabContent,
      {
        title: "No interactions have been recorded.",
        description: /* @__PURE__ */ React2.createElement(EmptyStateDescription, null, "Click the record button", /* @__PURE__ */ React2.createElement(
          RecordIcon,
          {
            isRecording: false,
            onClick: toggleRecording,
            style: {
              cursor: "pointer"
            }
          }
        ), "to start recording.")
      }
    ),
    code.play.length === 0 && isRecording && /* @__PURE__ */ React2.createElement(
      EmptyTabContent,
      {
        title: "Recording is in progress...",
        description: isAsserting ? "Click on elements to record assertions." : "Interact with the story to record events."
      }
    ),
    code.play.length > 0 && /* @__PURE__ */ React2.createElement(CodeBlocksWrapper, null, /* @__PURE__ */ React2.createElement(CodeBlock, { name: "Imports", codeLines: code.imports }), /* @__PURE__ */ React2.createElement(CodeBlock, { name: "Play Function", codeLines: code.play, isSticky: true }))
  ));
};

// src/manager.tsx
function Title2() {
  const [interactions] = useInteractions();
  const [isRecording] = useIsRecording();
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(Spaced, { col: 1 }, /* @__PURE__ */ React2.createElement("span", { style: { display: "inline-block", verticalAlign: "middle" } }, "Interaction Recorder"), isRecording && /* @__PURE__ */ React2.createElement(Badge, { status: "neutral" }, JSON.parse(interactions).length)));
}
addons.register(ADDON_ID, (api) => {
  const channel = api.getChannel();
  channel?.on(
    EVENTS.SAVE_NEW_STORY_RESPONSE,
    (data) => {
      if (!data.success) {
        return;
      }
      const story = api.getCurrentStoryData();
      if (story.type !== "story") {
        return;
      }
      api.resetStoryArgs(story);
      if (data.payload.newStoryId) {
        api.selectStory(data.payload.newStoryId);
      }
    }
  );
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: Title2,
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => /* @__PURE__ */ React2.createElement(AddonPanel, { active: active ?? false }, /* @__PURE__ */ React2.createElement(InteractionRecorder, null))
  });
});
