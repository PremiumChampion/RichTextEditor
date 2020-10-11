import { ContentState, convertFromHTML, convertFromRaw, convertToRaw, EditorState, RawDraftContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import './react-draft-wysiwyg.css';




const isNullOrUndefined = (val: any) => { return val === undefined || val === null }

export const convertFileToBase64String = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = error => reject(error);
  reader.readAsDataURL(file);
});

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

export enum RichTextEditorLocales {
  en, fr, zh, ru, pt, ko, it, nl, de, da, zh_tw, pl, es
}

export interface RichTextEditorProps {
  disabled?: boolean;
  focusOnInitialRender?: boolean;
  initialHtml?: string;
  onChangeHTML?: (HTMLContents: string) => void;
  onChangeRaw?: (RawContents: RawDraftContentState) => void;
  html?: string;
  raw?: RawDraftContentState;
  toolbarOptions?: any;
  locale?: RichTextEditorLocales;
};



export default function RichTextEditor(props: RichTextEditorProps) {

  const TriggerSettingRawEditorState = () => {
    if (props.raw) {
      const contentState = convertFromRaw(props.raw);

      const newEditorState = EditorState.createWithContent(contentState);

      setEditorState(newEditorState);
    }
    focusEditor();
  }

  const TriggerSettingHtmlEditorState = () => {
    if (props.html) {
      ConvertHTMLAndSetEditorState(props.html)
    }
    focusEditor();
  }

  const ConvertHTMLAndSetEditorState = (HTML: string) => {
    const contentBlock = convertFromHTML(HTML);

    if (contentBlock) {

      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

      const newEditorState = EditorState.createWithContent(contentState);

      setEditorState(newEditorState);
    }
  }

  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const editor = React.useRef(null);

  function focusEditor() {
    if (editor && (!isNullOrUndefined(props.disabled) && !props.disabled)) {
      editor.current.focus();
    }
  }

  //#region component did mount
  React.useEffect(() => {

    if (props.focusOnInitialRender) {
      focusEditor()
    }

    if (props.initialHtml) {
      ConvertHTMLAndSetEditorState(props.initialHtml)
    }

    if (props.raw) {
      TriggerSettingRawEditorState()
    }
    // eslint-disable-next-line 
  }, []);
  //#endregion

  //#region Handle state changes

  // Handle changes in the editor state
  React.useEffect(() => {
    // Trigger onChangeHTML action
    if (props.onChangeHTML) {
      props.onChangeHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
    // Trigger onChangeRaw action
    if (props.onChangeRaw) {
      props.onChangeRaw(convertToRaw(editorState.getCurrentContent()));
    }
    // eslint-disable-next-line 
  }, [editorState]);


  React.useEffect(()=>{
    
  })
  //#endregion

  //#region Handle property changes
  // Handle changes in the html property
  React.useEffect(TriggerSettingHtmlEditorState, [props.html]);

  // Handle changes in the raw  property
  React.useEffect(TriggerSettingRawEditorState, [props.raw]);
  //#endregion

  return (
    <div onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        localization={{ locale: RichTextEditorLocales[props.locale] || "de" }}
        toolbar={props.toolbarOptions || DefaultToolbar}
        readOnly={props.disabled}
        toolbarHidden={props.disabled}

      />
    </div>
  );
}
