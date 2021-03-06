import React, { Component } from 'react';
import AlloyEditor from 'alloyeditor';

export default class EzBtnMoveDown extends Component {
    static get key() {
        return 'ezmovedown';
    }

    /**
     * Executes the eZMoveDown command.
     *
     * @method moveDown
     */
    moveDown() {
        const editor = this.props.editor.get('nativeEditor');

        editor.execCommand('eZMoveDown');
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        const title = Translator.trans(/*@Desc("Move down")*/ 'move_down_btn.title', {}, 'alloy_editor');

        return (
            <button
                className="ae-button ibexa-btn-ae ibexa-btn-ae--move-down"
                onClick={this.moveDown.bind(this)}
                tabIndex={this.props.tabIndex}
                title={title}>
                <svg className="ibexa-icon ibexa-btn-ae__icon">
                    <use xlinkHref={window.eZ.helpers.icon.getIconPath('circle-caret-down')} />
                </svg>
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnMoveDown.key] = AlloyEditor.EzBtnMoveDown = EzBtnMoveDown;

const eZ = (window.eZ = window.eZ || {});

eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnMoveDown = EzBtnMoveDown;
