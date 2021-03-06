import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';

export default class EzBtnTable extends Component {
    static get key() {
        return 'eztable';
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        if (this.props.renderExclusive) {
            return <AlloyEditor.ButtonTableEdit {...this.props} />;
        }

        const label = Translator.trans(/*@Desc("Table")*/ 'table_btn.label', {}, 'alloy_editor');
        const css = 'ae-button ibexa-btn-ae ibexa-btn-ae--table';

        return (
            <button className={css} onClick={this.props.requestExclusive} tabIndex={this.props.tabIndex} title={label}>
                <svg className="ibexa-icon ibexa-btn-ae__icon">
                    <use xlinkHref={window.eZ.helpers.icon.getIconPath('table-add')} />
                </svg>
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnTable.key] = AlloyEditor.EzBtnTable = EzBtnTable;

const eZ = (window.eZ = window.eZ || {});

eZ.ezAlloyEditor = eZ.ezAlloyEditor || {};
eZ.ezAlloyEditor.ezBtnTable = EzBtnTable;

EzBtnTable.propTypes = {
    editor: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    tabIndex: PropTypes.number.isRequired,
};
