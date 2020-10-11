/**
 * represents a mention 
 * will be rendered as a anchor-tag
 *
 * @export
 * @interface Mention
 */
export interface Mention {
    /**
     * used to seperate this mention from others
     *
     * @type {string}
     * @memberof Mention
     */
    separator: string;
    /**
     * the charakter when the mention should be triggerred
     *
     * @type {string}
     * @memberof Mention
     */
    trigger: string;
    /**
     * the available suggestions
     *
     * @type {Suggestion[]}
     * @memberof Mention
     */
    suggestions: Suggestion[];
} 
/**
 * Represents a sugestion for a mention
 *
 * @export
 * @interface Suggestion
 */
export interface Suggestion{
    /**
     * the text for displaying the suggestion to the user
     *
     * @type {string}
     * @memberof Suggestion
     */
    text: string,
    /**
     * the value of the suggestion
     *
     * @type {string}
     * @memberof Suggestion
     */
    value: string,
    /**
     * the url of the suggestion
     *
     * @type {string}
     * @memberof Suggestion
     */
    url: string
}