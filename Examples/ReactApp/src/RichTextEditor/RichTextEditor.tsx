import { ContentState, convertFromHTML, convertFromRaw, convertToRaw, EditorState, RawDraftContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { CustomDecorator } from './CustomDecorator';
import { DefaultToolbar } from './DefaultToolbar';
import { ImageDecorator } from './ImageDecorator';
import { Mention } from './Mention';
import './RichTextEditor.css';
import { RichTextEditorLocales } from './RichTextEditorLocales';

 
/**
 * The properties of the RichTextEditorComponent
 *
 * @export
 * @interface RichTextEditorProps
 */
export interface RichTextEditorProps {
  /**
   *indicates if the component should be disabled
   *
   * @type {boolean}
   * @memberof RichTextEditorProps
   */
  disabled?: boolean;
  /**
   * Sets the text to display initially
   *
   * @type {string}
   * @memberof RichTextEditorProps
   */
  initialHtml?: string;
  /**
   * Callback when the content changes.
   * Format: html
   *
   * @memberof RichTextEditorProps
   */
  onChangeHTML?: (HTMLContents: string) => void;
  /**
   * Callback when the content changes.
   * Format: RawDraftContentState
   *
   * @memberof RichTextEditorProps
   */
  onChangeRaw?: (RawContents: RawDraftContentState) => void;
  /**
   * Used to set the content of the component and override the initial statemanagement 
   * Can be used in combination with onChangeHtml
   *
   * @type {string}
   * @memberof RichTextEditorProps
   */
  html?: string;
  /**
   * Used to set the content of the component and override the initial statemanagement 
   * Can be used in combination with onChangeRaw
   *
   * @type {RawDraftContentState}
   * @memberof RichTextEditorProps
   */
  raw?: RawDraftContentState;
  /**
   * the toolbar-options for the editor
   *
   * @type {*}
   * @memberof RichTextEditorProps
   */
  toolbarOptions?: any;
  /**
   * the localisation of the editor
   *
   * @type {RichTextEditorLocales}
   * @memberof RichTextEditorProps
   */
  locale?: RichTextEditorLocales;
  /**
   * used to add mention features
   *
   * @type {Mention}
   * @memberof RichTextEditorProps
   */
  mention?: Mention;
  /**
   * Used for adding custom block rendering
   *
   * @type {CustomDecorator[]}
   * @memberof RichTextEditorProps
   */
  customDecorators?: CustomDecorator[];
  /**
   * the style of the component
   *
   * @type {React.CSSProperties}
   * @memberof RichTextEditorProps
   */
  style?: React.CSSProperties
};

/**
 * the Rich Text Editor Component
 *
 * @export
 * @param {RichTextEditorProps} props the properties of the component
 * @return {JSX.Element} the rendered editor
 */
export default function RichTextEditor(props: RichTextEditorProps): JSX.Element {

  const TriggerSettingRawEditorState = () => {
    if (props.raw) {
      const contentState = convertFromRaw(props.raw);

      const newEditorState = EditorState.createWithContent(contentState);

      setEditorState(newEditorState);
    }
  }

  const TriggerSettingHtmlEditorState = () => {
    if (props.html) {
      ConvertHTMLAndSetEditorState(props.html)
    }
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
    if (editor && (!(props.disabled === undefined || props.disabled === null) && !props.disabled)) {
      editor.current.focus();
    }
  }

  //#region component did mount
  React.useEffect(() => {
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


  React.useEffect(() => {

  })
  //#endregion

  //#region Handle property changes
  // Handle changes in the html property
  React.useEffect(TriggerSettingHtmlEditorState, [props.html]);

  // Handle changes in the raw  property
  React.useEffect(TriggerSettingRawEditorState, [props.raw]);
  //#endregion



  return (
    <div style={props.style} onClick={focusEditor}>
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
        mention={props.mention}
        customDecorators={[...props.customDecorators || []]}
      />
    </div>
  );
}
