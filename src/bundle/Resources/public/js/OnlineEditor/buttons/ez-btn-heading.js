import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';
import EzButton from './base/ez-button';

export default class EzBtnHeading extends EzButton {
    static get key() {
        return 'ezheading';
    }

    /**
     * Executes the eZAppendContent to add a heading element in the editor.
     *
     * @method addHeading
     */
    addHeading() {
        this.execCommand({
            tagName: 'h1',
        });
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        const css = 'ae-button ibexa-btn-ae ibexa-btn-ae--heading ' + this.getStateClasses();
        const label = Translator.trans(/*@Desc("Heading")*/ 'heading_btn.label', {}, 'alloy_editor');

        return (
            <button className={css} onClick={this.addHeading.bind(this)} tabIndex={this.props.tabIndex} title={label}>
                <svg className="ibexa-icon ibexa-btn-ae__icon">
                    <use xlinkHref={window.eZ.helpers.icon.getIconPath('h1')} />
                </svg>
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnHeading.key] = AlloyEditor.EzBtnHeading = EzBtnHeading;

const eZ = (window.eZ = window.eZ || {});

eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnHeading = EzBtnHeading;

EzBtnHeading.propTypes = {
    command: PropTypes.string,
    modifiesSelection: PropTypes.bool,
};

EzBtnHeading.defaultProps = {
    command: 'eZAddContent',
    modifiesSelection: true,
};
