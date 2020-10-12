import { convertFileToBase64String } from './UploadHelper'

/** 
 *  The default toolbar-options for the editor
 * 
 * @type {*} 
 * */
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
      alignmentEnabled: true,
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