import * as React from 'react';
import './index.css';

const egoPenChecklist = require('../img/ego/pen-checklist.svg');

export namespace Button {
    export interface Props extends IButton {
        // empty
    }

    export interface State {
        // empty
    }

    export interface Context {
        // empty
    }
}

export interface IButton {
    text: string;
    icon: string;
    action: Function;
}

export class Button extends React.Component<Button.Props, Button.State> {
    constructor(props?: Button.Props, context?: Button.Context) {
        super(props, context);
    }

    render() {
        return (
            <button className='button' onClick={this.props.action()}>
                <img className='button-icon' src={egoPenChecklist} />
                <span className='button-text'>{this.props.text}</span>
            </button>
        );
    }
}