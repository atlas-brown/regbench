"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _parse = require("parse5");
var _utils = require("../utils");
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const SINGLE_QUOTE = "'".charCodeAt(0);
var _default = options => function process(html) {
  const sources = [];
  const document = (0, _parse.parse)(html, {
    sourceCodeLocationInfo: true,
    scriptingEnabled: options.sources.scriptingEnabled
  });
  let needIgnore = false;
  (0, _utils.traverse)(document, node => {
    const {
      tagName,
      attrs: attributes,
      sourceCodeLocation
    } = node;
    if (node.nodeName === "#comment") {
      const match = node.data.match(_utils.webpackIgnoreCommentRegexp);
      if (match) {
        needIgnore = match[2] === "true";
      }
      return;
    }
    if (!tagName) {
      return;
    }
    if (needIgnore) {
      needIgnore = false;
      return;
    }
    attributes.forEach(attribute => {
      let {
        name
      } = attribute;
      name = attribute.prefix ? `${attribute.prefix}:${name}` : name;
      const handlers = new Map([...(options.sources.list.get("*") || new Map()), ...(options.sources.list.get(tagName.toLowerCase()) || new Map())]);
      if (handlers.size === 0) {
        return;
      }
      const handler = handlers.get(name.toLowerCase());
      if (!handler) {
        return;
      }
      if (handler.filter && !handler.filter(tagName, name, attributes, options.resourcePath)) {
        return;
      }
      const attributeAndValue = html.slice(sourceCodeLocation.attrs[name].startOffset, sourceCodeLocation.attrs[name].endOffset);
      const isValueQuoted = attributeAndValue.charCodeAt(attributeAndValue.length - 1) === DOUBLE_QUOTE || attributeAndValue.charCodeAt(attributeAndValue.length - 1) === SINGLE_QUOTE;
      const valueStartOffset = sourceCodeLocation.attrs[name].startOffset + attributeAndValue.indexOf(attribute.value);
      const valueEndOffset = sourceCodeLocation.attrs[name].endOffset - (isValueQuoted ? 1 : 0);
      const optionsForTypeFn = {
        tag: tagName,
        startTag: {
          startOffset: sourceCodeLocation.startTag.startOffset,
          endOffset: sourceCodeLocation.startTag.endOffset
        },
        endTag: sourceCodeLocation.endTag ? {
          startOffset: sourceCodeLocation.endTag.startOffset,
          endOffset: sourceCodeLocation.endTag.endOffset
        } :
        // eslint-disable-next-line no-undefined
        undefined,
        attributes,
        attribute: name,
        attributePrefix: attribute.prefix,
        attributeNamespace: attribute.namespace,
        attributeStartOffset: sourceCodeLocation.attrs[name].startOffset,
        attributeEndOffset: sourceCodeLocation.attrs[name].endOffset,
        value: attribute.value,
        isSupportAbsoluteURL: options.isSupportAbsoluteURL,
        isSupportDataURL: options.isSupportDataURL,
        isValueQuoted,
        valueEndOffset,
        valueStartOffset,
        html
      };
      let result;
      try {
        result = handler.type(optionsForTypeFn);
      } catch (error) {
        options.errors.push(error);
      }
      result = Array.isArray(result) ? result : [result];
      for (const source of result) {
        if (!source) {
          // eslint-disable-next-line no-continue
          continue;
        }
        sources.push({
          ...source,
          name,
          isValueQuoted
        });
      }
    });
  });
  const urlFilter = (0, _utils.getFilter)(options.sources.urlFilter);
  const imports = new Map();
  const replacements = new Map();
  let offset = 0;
  for (const source of sources) {
    const {
      name,
      value,
      isValueQuoted,
      startOffset,
      endOffset
    } = source;
    let request = value;
    if (!urlFilter(name, value, options.resourcePath)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    let hash;
    const indexHash = request.lastIndexOf("#");
    if (indexHash >= 0) {
      hash = request.substring(indexHash);
      request = request.substring(0, indexHash);
    }
    request = (0, _utils.requestify)(options.context, request);
    let importName = imports.get(request);
    if (!importName) {
      importName = `___HTML_LOADER_IMPORT_${imports.size}___`;
      imports.set(request, importName);
      options.imports.push({
        importName,
        request
      });
    }
    const replacementKey = JSON.stringify({
      request,
      isValueQuoted,
      hash
    });
    let replacementName = replacements.get(replacementKey);
    if (!replacementName) {
      replacementName = `___HTML_LOADER_REPLACEMENT_${replacements.size}___`;
      replacements.set(replacementKey, replacementName);
      options.replacements.push({
        replacementName,
        importName,
        hash,
        isValueQuoted
      });
    }

    // eslint-disable-next-line no-param-reassign
    html = html.slice(0, startOffset + offset) + replacementName + html.slice(endOffset + offset);
    offset += startOffset + replacementName.length - endOffset;
  }
  return html;
};
exports.default = _default;