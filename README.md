### Base editor

Customize ckeditor 5

### Demo: https://editor-gz1b0xgj4-pqthinh.vercel.app/base-editor

###

_install_
`yarn add base-editor @ckeditor/ckeditor5-react`

2: Color picker

_install_
`yarn add react-color`

3: Statistic (high chart)

_install_
`yarn add highcharts highcharts-react-official`

### Examples

```javascript
BaseEditor.create(document.querySelector("#editor"))
  .then((editor) => {
    // The toolbar needs to be explicitly appended.
    document
      .querySelector("#toolbar-container")
      .appendChild(editor.ui.view.toolbar.element);

    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );

    window.editor = editor;
  })
  .catch((error) => {
    console.error("There was a problem initializing the editor.", error);
  });
```

### customize uploader

`send email for me: phamquangquang2008@gmail.com`

```javascript
editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
  return new Upload({ loader });
};
```

### For react
