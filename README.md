CKEditor 5 document editor build
========================================

![CKEditor 5 TechfoxEditor document editor build screenshot](https://drive.google.com/file/d/1YkLjUJu42gRV8kuoVfl0N7Db9RdZgMQ8/view?usp=sharing)

## Quick start

First, install the build from npm:

```bash
npm install --save techfox-editor
```

And use it in your website:

```html
<div id="toolbar-container"></div>
<div id="editor">
  <p>This is the editor content.</p>
</div>
<script src="./node_modules/techfox-editor/build/ckeditor.js"></script>
<script>
  TechfoxEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
      // The toolbar needs to be explicitly appended.
      document.querySelector( '#toolbar-container' ).appendChild( editor.ui.view.toolbar.element );

      window.editor = editor;
    } )
    .catch( error => {
      console.error( 'There was a problem initializing the editor.', error );
    } );
</script>
```

Or in your JavaScript application:

```js
import TechfoxEditor from 'techfox-editor';

// Or using the CommonJS version:
// const TechfoxEditor = require( 'techfox-editor' );

TechfoxEditor
  .create( document.querySelector( '#editor' ) )
  .then( editor => {
    // The toolbar needs to be explicitly appended.
    document.querySelector( '#toolbar-container' ).appendChild( editor.ui.view.toolbar.element );

    window.editor = editor;
  } )
  .catch( error => {
    console.error( 'There was a problem initializing the editor.', error );
  } );
```