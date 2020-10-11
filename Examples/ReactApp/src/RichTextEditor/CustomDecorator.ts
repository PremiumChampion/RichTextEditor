import { ContentBlock, ContentState } from 'react-draft-wysiwyg';

/**
 * Used to create custom renders in the editor
 *
 * @export
 * @interface CustomDecorator
 */
export interface CustomDecorator {
    /**
     * the strategie to find the required contentblock
     *
     * @memberof CustomDecorator
     */
    strategy: (contentBlock: ContentBlock, callback, contentState: ContentState) => void;
    /**
     * the component to replace the default render
     *
     * @memberof CustomDecorator
     */
    component: React.Component | React.PureComponent | ((props: any) => JSX.Element);
}