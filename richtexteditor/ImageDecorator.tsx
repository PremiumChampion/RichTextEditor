import React from 'react';
import { ContentBlock, ContentState } from 'react-draft-wysiwyg';
import { CustomDecorator } from './CustomDecorator';

/**
 * The component to render when a image is detected
 *
 * @param {*} props the properties of the decorator
 * @return {JSX.Element} the rendered image component
 */
function Image(props) : JSX.Element {
    const { src, alt } = props.contentState
        .getEntity(props.entityKey)
        .getData();
    return <img style={{ width: "auto", height: "auto", maxHeight: "200px", maxWidth: "400px" }} alt={alt} src={src} />;
};

/**
 * contains a strategy to find a image vlock
 *
 * @param {ContentBlock} contentBlock the block to search
 * @param {*} callback the callback
 * @param {ContentState} contentState the content sate
 */
function findImageEntities(contentBlock: ContentBlock, callback, contentState: ContentState) {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity();
        return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === "IMAGE"
        );
    }, callback);
}

/**
 *  a image decorator which can be used to render imaged in the editor
 * @type {CustomDecorator} 
 */
export const ImageDecorator: CustomDecorator =
{
    strategy: findImageEntities,
    component: Image
};