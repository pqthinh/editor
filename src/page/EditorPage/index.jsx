import React, { useCallback } from "react";
import BaseEditor from "base-editor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { withBoolean, withNull } from "exp-value";
import "./style.css";

function Upload(props) {
  this.loader = props.loader;
}

Upload.prototype = {
  upload: function () {
    if (this.loader?.file)
      return this.loader?.file.then((file) => {
        return this._initListeners(file);
      });
  },
  abort: () => {},
  _initRequest: () => {},
  _initListeners: async (file) => {
    try {
      console.log(file, "file ----->");
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

function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new Upload({ loader });
  };
}

const EditorPage = () => {
  const handleImageUpload = useCallback((data) => {
    if (data.match(/(https?:\/\/[^\s]+)/g))
      try {
        let div = document.createElement("div");
        div.innerHTML = data;
        let temp = div.getElementsByTagName("img");
        if (temp.length && withBoolean("file_url", null)) {
          temp[temp.length - 1].src = withNull("file_url", null);
          return div.innerHTML.toString();
        }
      } catch (e) {
        console.log(e);
      }
    return data;
  }, []);

  const custom_config = {
    extraPlugins: [CustomUploadAdapterPlugin],
  };
  return (
    <div className="container-editor">
      <h1 className="block--title">Soạn thảo nội dung</h1>

      <div className="editor">
        <CKEditor
          onReady={(editor) => {
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
            editor.plugins.get("FileRepository").createUploadAdapter = (
              loader
            ) => {
              return new Upload({ loader });
            };
          }}
          editor={BaseEditor}
          config={custom_config}
          onChange={(event, editor) => {
            const data = handleImageUpload(editor.getData());
            console.log(data, " data ---->");
          }}
        />
      </div>
    </div>
  );
};

export default EditorPage;
