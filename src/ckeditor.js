/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
// import VideoUploader from '@ckeditor/ckeditor5-ui/src/button/button';

const colors = [
  {
    color: "hsl(0, 0%, 0%)",
    label: "Black",
  },
  {
    color: "hsl(0, 0%, 30%)",
    label: "Dim grey",
  },
  {
    color: "hsl(0, 0%, 60%)",
    label: "Grey",
  },
  {
    color: "hsl(0, 0%, 90%)",
    label: "Light grey",
  },
  {
    color: "hsl(0, 0%, 100%)",
    label: "White",
    hasBorder: true,
  },
  {
    color: "hsl(0, 75%, 60%)",
    label: "Red",
  },
  {
    color: "hsl(30, 75%, 60%)",
    label: "Orange",
  },
  {
    color: "hsl(60, 75%, 60%)",
    label: "Yellow",
  },
  {
    color: "hsl(90, 75%, 60%)",
    label: "Light green",
  },
  {
    color: "hsl(120, 75%, 60%)",
    label: "Green",
  },
  {
    color: "hsl(150, 75%, 60%)",
    label: "Aquamarine",
  },
  {
    color: "hsl(180, 75%, 60%)",
    label: "Turquoise",
  },
  {
    color: "hsl(210, 75%, 60%)",
    label: "Light blue",
  },
  {
    color: "hsl(240, 75%, 60%)",
    label: "Blue",
  },
  {
    color: "hsl(270, 75%, 60%)",
    label: "Purple",
  },
];

export default class BaseEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
BaseEditor.builtinPlugins = [
  Essentials,
  Alignment,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Highlight,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  Indent,
  IndentBlock,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  Code,
  CodeBlock,
];

// Editor configuration.
BaseEditor.defaultConfig = {
  colors: colors,
  fontSize: {
    options: [
      "8px",
      "9px",
      "10px",
      "11px",
      "12px",
      "14px",
      "16px",
      "18px",
      "20px",
      "22px",
      "24px",
      "26px",
      "28px",
      "36px",
      "48px",
    ],
  },
  fontFamily: {
    options: [
      "Arial/Arial, Helvetica, sans-serif",
      "Comic Sans MS/Comic Sans MS, cursive",
      "Courier New/Courier New, Courier, monospace",
      "Georgia/Georgia, serif",
      "Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif",
      "Tahoma/Tahoma, Geneva, sans-serif",
      "Times New Roman/Times New Roman, Times, serif",
      "Trebuchet MS/Trebuchet MS, Helvetica, sans-serif",
      "Verdana/Verdana, Geneva, sans-serif",
    ],
  },
  toolbar: {
    items: [
      "heading",
      "|",
      "fontsize",
      "fontfamily",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "highlight",
      "|",
      "alignment",
      "|",
      "numberedList",
      "bulletedList",
      "|",
      "indent",
      "outdent",
      "|",
      "link",
      "blockquote",
      "imageUpload",
      "insertTable",
      "mediaEmbed",
      "|",
      "undo",
      "redo",
      "code",
      "codeBlock",
    ],
  },
  image: {
    styles: ["full", "alignLeft", "alignRight", "alignCenter"],
    toolbar: [
      "imageStyle:alignLeft",
      "imageStyle:full",
      "imageStyle:alignRight",
      "imageStyle:alignCenter",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "vi",
  codeBlock: {
    languages: [
      { language: "plaintext", label: "Plain text" }, // The default language.
      { language: "c", label: "C" },
      { language: "cs", label: "C#" },
      { language: "cpp", label: "C++" },
      { language: "css", label: "CSS" },
      { language: "diff", label: "Diff" },
      { language: "xml", label: "HTML/XML" },
      { language: "java", label: "Java" },
      { language: "javascript", label: "JavaScript" },
      { language: "php", label: "PHP" },
      { language: "python", label: "Python" },
      { language: "ruby", label: "Ruby" },
      { language: "typescript", label: "TypeScript" },
    ],
  },
};
