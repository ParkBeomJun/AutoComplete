import React, { useState } from "react";

const item = [
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
export const AutoCompleteText = (props: any) => {
  const [state, setState] = useState({
    suggestions: [],
    text: "",
  });
  const { text } = state;

  const onTextChanged = (e: any) => {
    const value = e.target.value;
    let suggestions: any = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = item.sort().filter((v) => regex.test(v));
    }
    setState(() => ({ suggestions, text: value }));
  };

  const suggestionSelected = (value: any) => {
    setState(() => ({
      text: value,
      suggestions: [],
    }));
  };

  const renderSuggestions = () => {
    const { suggestions } = state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item: any) => (
          <p onClick={() => suggestionSelected(item)}>{item}</p>
        ))}
      </ul>
    );
  };

  return (
    <div className={props.className}>
      <input value={text} onChange={onTextChanged} type="text" />
      {renderSuggestions()}
    </div>
  );
};
