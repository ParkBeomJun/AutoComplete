"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoCompleteText = void 0;
var react_1 = __importStar(require("react"));
var item = [
    "abstract",
    "arguments",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "let",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
    "yield",
    "Array",
    "Date",
    "eval",
    "function",
    "hasOwnProperty",
    "Infinity",
    "isFinite",
    "isNaN",
    "isPrototypeOf",
    "length",
    "Math",
    "NaN",
    "name",
    "Number",
    "Object",
    "prototype",
    "String",
    "toString",
    "undefined",
    "valueOf",
    "getClass",
    "java",
    "JavaArray",
    "javaClass",
    "JavaObject",
    "JavaPackage",
    "alert",
    "all",
    "anchor",
    "anchors",
    "area",
    "assign",
    "blur",
    "button",
    "checkbox",
    "clearInterval",
    "clearTimeout",
    "clientInformation",
    "close",
    "closed",
    "confirm",
    "constructor",
    "crypto",
    "decodeURI",
    "decodeURIComponent",
    "defaultStatus",
    "document",
    "element",
    "elements",
    "embed",
    "embeds",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "event",
    "fileUpload",
    "focus",
    "form",
    "forms",
    "frame",
    "innerHeight",
    "innerWidth",
    "layer",
    "layers",
    "link",
    "location",
    "mimeTypes",
    "navigate",
    "navigator",
    "frames",
    "frameRate",
    "hidden",
    "history",
    "image",
    "images",
    "offscreenBuffering",
    "open",
    "opener",
    "option",
    "outerHeight",
    "outerWidth",
    "packages",
    "pageXOffset",
    "pageYOffset",
    "parent",
    "parseFloat",
    "parseInt",
    "password",
    "pkcs11",
    "plugin",
    "prompt",
    "propertyIsEnum",
    "radio",
    "reset",
    "screenX",
    "screenY",
    "scroll",
    "secure",
    "select",
    "self",
    "setInterval",
    "setTimeout",
    "status",
    "submit",
    "taint",
    "text",
    "textarea",
    "top",
    "unescape",
    "untaint",
    "window",
    "onblur",
    "onclick",
    "onerror",
    "onfocus",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onmouseover",
    "onload",
    "onmouseup",
    "onmousedown",
    "onsubmit",
];
var AutoCompleteText = function (props) {
    var _a = react_1.useState({
        suggestions: [],
        text: "",
    }), state = _a[0], setState = _a[1];
    var text = state.text;
    var onTextChanged = function (e) {
        var value = e.target.value;
        var suggestions = [];
        if (value.length > 0) {
            var regex_1 = new RegExp("^" + value, "i");
            suggestions = item.sort().filter(function (v) { return regex_1.test(v); });
        }
        setState(function () { return ({ suggestions: suggestions, text: value }); });
    };
    var suggestionSelected = function (value) {
        setState(function () { return ({
            text: value,
            suggestions: [],
        }); });
    };
    var renderSuggestions = function () {
        var suggestions = state.suggestions;
        if (suggestions.length === 0) {
            return null;
        }
        return (react_1.default.createElement("ul", null, suggestions.map(function (item) { return (react_1.default.createElement("p", { onClick: function () { return suggestionSelected(item); } }, item)); })));
    };
    return (react_1.default.createElement("div", { className: props.className },
        react_1.default.createElement("input", { value: text, onChange: onTextChanged, type: "text" }),
        renderSuggestions()));
};
exports.AutoCompleteText = AutoCompleteText;
