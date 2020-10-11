# RichTextEditor-React Komponente

## Installation

Folgende Pakete müssen installiert werden:

1. `@types/draft-js@^0.10.44`
2. `@types/draftjs-to-html@^0.8.0`
3. `@types/html-to-draftjs@^1.4.0`
4. `@types/react-draft-wysiwyg@^1.13.0`
5. `draft-js@^0.11.7`
6. `draftjs-to-html@^0.9.1`
7. `html-to-draftjs@^1.5.0`
8. `react-draft-wysiwyg@^1.14.5`

Als Befehl:

`npm i @types/draft-js @types/draftjs-to-html @types/html-to-draftjs @types/react-draft-wysiwyg draft-js draftjs-to-html html-to-draftjs react-draft-wysiwyg`

Als package.json:

```json
{
  "dependencies": {
    "@types/draft-js": "^0.10.44",
    "@types/draftjs-to-html": "^0.8.0",
    "@types/html-to-draftjs": "^1.4.0",
    "@types/react-draft-wysiwyg": "^1.13.0",
    "draft-js": "^0.11.7",
    "draftjs-to-html": "^0.9.1",
    "html-to-draftjs": "^1.5.0",
    "react-draft-wysiwyg": "^1.14.5",
    }
}
```

## Vorstellung der einzelnen Abhägnigkeiten:

### 1\. @types/draft-js@^0.10.44

[NPM](https://www.npmjs.com/package/@types/draft-js)

Typiesierung für das Paket: `draft-js`

License: [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)

### 2\. @types/draftjs-to-html@^0.8.0

[NPM](https://www.npmjs.com/package/@types/draftjs-to-html)

Typiesierung für das Paket: `draftjs-to-html`

License: [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)

### 3\. @types/html-to-draftjs@^1.4.0

[NPM](https://www.npmjs.com/package/@types/html-to-draftjs)

Typiesierung für das Paket: `html-to-draftjs`

License: [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)

### 4\. @types/react-draft-wysiwyg@^1.13.0

[NPM](https://www.npmjs.com/package/@types/react-draft-wysiwyg)

Typiesierung für das Paket: `react-draft-wysiwyg`

License: [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)

### 5\. draft-js@^0.11.7

[NPM](https://www.npmjs.com/package/draft-js)

Draft.js is a JavaScript rich text editor framework, built for React and backed by an immutable model.

License: [MIT](https://github.com/facebook/draft-js/blob/master/LICENSE)

### 6\. draftjs-to-html@^0.9.1

[NPM](https://www.npmjs.com/package/draftjs-to-html)

A library for converting DraftJS Editor content to plain HTML.

License: [MIT](https://github.com/jpuri/draftjs-to-html/blob/master/LICENSE)

### 7\. html-to-draftjs@^1.5.0

[NPM](https://www.npmjs.com/package/html-to-draftjs)

A library for converting plain HTML to DraftJS Editor content. Build for use with [react-draft-wysiwyg](https://www.npmjs.com/package/react-draft-wysiwyg).

License: [MIT](https://github.com/jpuri/html-to-draftjs/blob/master/LICENSE)

### 8\. react-draft-wysiwyg@^1.14.5

[NPM](https://www.npmjs.com/package/react-draft-wysiwyg)

A Wysiwyg editor built using ReactJS and DraftJS libraries.

#### Features

- Configurable toolbar with option to add/remove controls.
- Option to change the order of the controls in the toolbar.
- Option to add custom controls to the toolbar.
- Option to change styles and icons in the toolbar.
- Option to show toolbar only when editor is focused.
- Support for inline styles: Bold, Italic, Underline, StrikeThrough, Code, Subscript, Superscript.
- Support for block types: Paragraph, H1 - H6, Blockquote, Code.
- Support for setting font-size and font-family.
- Support for ordered / unordered lists and indenting.
- Support for text-alignment.
- Support for coloring text or background.
- Support for adding / editing links
- Choice of more than 150 emojis.
- Support for mentions.
- Support for hashtags.
- Support for adding / uploading images.
- Support for aligning images, setting height, width.
- Support for Embedded links, flexibility to set height and width.
- Option provided to remove added styling.
- Option of undo and redo.
- Configurable behavior for RTL and Spellcheck.
- Support for placeholder.
- Support for WAI-ARIA Support attributes
- Using editor as controlled or un-controlled React component.
- Support to convert Editor Content to HTML, JSON, Markdown.
- Support to convert the HTML generated by the editor back to editor content.
- Support for internationalization.

License: [MIT](https://github.com/jpuri/react-draft-wysiwyg/blob/master/LICENSE)

## Wie nutze ich die Komponente in meinem Projekt?

Ordner: `RichTextEditor` in das einene Projekt übernehmen.

Import hinzufügen:

```typescriptreact
import RichTextEditor from './RichTextEditor/RichTextEditor';
```

Rich-Text-Editor implementieren:

```typescriptreact
ReactDOM.render(
    <RichTextEditor />
  document.getElementById('root')
);
```

Fertig!

## Properties des Rich-Text-Editor´s

Propertyname         | Datentyp                                    | Verbindlich | Standardwert                                             | Beschreibung
-------------------- | ------------------------------------------- | ----------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------
disabled             | boolean                                     | Nein        | `false`                                                  | Gibt an, ob der Nutzer mit dem Editor Interagieren kann, oder ob dieser nur zum Darstellen von Inhalten genutzt wird.
focusOnInitialRender | boolean                                     | Nein        | `true`                                                   | Gibt an, ob der Editor beim ersten Rendern automatisch den Fokus des Nutzers erlangen soll.
initialHtml          | string                                      | Nein        | `""`                                                     | Setzt den Startwert des Editors (Dabei werden Bilder als 📷 gerendert).
onChangeHTML         | (HTMLContents: string) => void              | Nein        | `undefined`                                              | Ein Callback, welcher das generierte HTML-Markup enthält, und dazu genutzt werden kann eine Vorschau zu erstellen oder Inhalte zu versenden.
onChangeRaw          | (RawContents: RawDraftContentState) => void | Nein        | `undefined`                                              | Ein Callback, welcher den "Rohen"-Inhalt des Editors enthält.
html                 | string                                      | Nein        | `undefined`                                              | Kann genutzt werden, um das Statemanagement des Editors selbst zu steuern.
raw                  | RawDraftContentState                        | Nein        | `undefined`                                              | Kann genutzt werden, um das Statemanagement des Editors selbst zu steuern.
toolbarOptions       | object                                      | Nein        | [Toolbar Optionen](#Toolbar-Optionen) (`DefaultToolbar`) | Legt die Einträge der Toolbar fest
locale               | RichTextEditorLocales                       | Nein        | `RichTextEditorLocales.de`                               | Legt die Lokalisierung für den Editor fest. Mögliche Optionen sind: en, fr, zh, ru, pt, ko, it, nl, de, da, zh_tw, pl, es.

## Wie passe ich die React-Komponente Designtechnisch an?

Die Datei `react-draft-wysiwyg.css` stellt das Design bereit.

## Toolbar-Optionen:

Hier sind die Standard Toolbar-Optionen aufgeführt:

1. Schriftstil
2. Textart
3. Textgröße
4. Schriftart
5. Listenoptionen
6. Textausrichtung
7. Farboptionen
8. Link Hinzufügen
9. Eingebettetes Video hinzufügen
10. Emoji
11. Bild hinzufügen (Wird im Standard in Base64 konvertiert und abgespeichert)
12. Formatierung löschen
13. Vor und Zurück

Die StandardKonfiguration Siet wie folgt aus und kann so auch angepasst werdnen.

```typescriptreact
export const DefaultToolbar = {
  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
  inline: {
    inDropdown: true,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
  },
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    inDropdown: true,
  },
  fontFamily: {
    default: "Arial",
    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    inDropdown: true,
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['unordered', 'ordered', 'indent', 'outdent'],
  },
  textAlign: {
    inDropdown: true,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['left', 'center', 'right', 'justify'],
  },
  colorPicker: {
    // icon: ColorPic,
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    colors: ['rgb(26,188,156)', 'rgb(84,172,210)',
      'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(0,168,133)',
      'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
      'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
      'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)',
      'rgb(184,49,47)', 'rgb(124,112,107)'],
  },
  link: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: false,
    defaultTargetOption: '_self',
    options: ['link', 'unlink'],
    linkCallback: undefined
  },
  emoji: {
    inDropdown: true,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    emojis: [
      '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
      '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
      '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
      '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
      '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
      '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
      '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
      '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
      '✅', '❎', '💯',
    ],
  },
  embedded: {
    inDropdown: true,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    embedCallback: undefined,
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
  },
  image: {
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: false,
    uploadCallback: async (file) => { return { data: { link: await convertFileToBase64String(file) } } },
    previewImage: true,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    alt: { present: false, mandatory: false },
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
  },
  remove: {
    className: undefined,
    component: undefined
  },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['undo', 'redo'],
  },
}
```
