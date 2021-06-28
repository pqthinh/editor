import React, { useCallback } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import TechFoxEditor from "techfox-editor";

import PropTypes from "prop-types";
import { withBoolean, withNull } from "exp-value";
import { useUpload } from "hooks";
import { Wrapper, Label } from "./styled";
import { Constants } from "utils";
function Upload(props) {
  this.loader = props.loader;
  this.onUpload = props.onUpload;
}

Upload.prototype = {
  upload: function () {
    if (this.loader?.file)
      return this.loader?.file.then((file) => {
        return this._initListeners(file, this.onUpload);
      });
  },
  abort: () => {},
  _initRequest: () => {},
  _initListeners: async (file, onUpload) => {
    try {
      if (typeof onUpload === "function") await onUpload(file);
    } catch (e) {
      console.log(e);
    }

    return new Promise((resolve) => {
      resolve({
        default: URL.createObjectURL(file),
      });
    });
  },
  _sendRequest: () => {},
};

function CustomUploadAdapterPlugin(editor, onUpload) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new Upload({ loader, onUpload });
  };
}

const BaseCKEditor = ({ label, data, isDisabled, onChange, ...others }) => {
  const { onUpload, result } = useUpload();
  const { configEditor, colorEditor } = Constants;

  const handleImageUpload = useCallback(
    (data) => {
      if (data.match(/(https?:\/\/[^\s]+)/g))
        try {
          let div = document.createElement("div");
          div.innerHTML = data;
          let temp = div.getElementsByTagName("img");
          if (temp.length && withBoolean("file_url", result)) {
            temp[temp.length - 1].src = withNull("file_url", result);
            return div.innerHTML.toString();
          }
        } catch (e) {
          console.log(e);
        }
      return data;
    },
    [result]
  );

  const custom_config = {
    extraPlugins: [CustomUploadAdapterPlugin],
    colors: colorEditor,
    ...configEditor,
  };

  return (
    <Wrapper>
      <Label>{label}</Label>

      <CKEditor
        onReady={(editor) => {
          if (isDisabled) return;
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return new Upload({ loader, onUpload });
          };
        }}
        editor={TechFoxEditor}
        config={custom_config}
        onChange={(event, editor) => {
          const data = handleImageUpload(editor.getData());
          // let temp = handleImageUpload(data)
          if (typeof onChange === "function") onChange(data);
        }}
        disable={isDisabled}
        data={data}
        {...others}
      />
    </Wrapper>
  );
};

BaseCKEditor.propTypes = {
  label: PropTypes.string,
  data: PropTypes.any,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default BaseCKEditor;
