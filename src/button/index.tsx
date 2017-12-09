import * as React from 'react';
import './index.css';

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
    icon: any;
    action: Function;
}

export class Button extends React.Component<Button.Props, Button.State> {
    constructor(props?: Button.Props, context?: Button.Context) {
        super(props, context);

        this.executeAction = this.executeAction.bind(this);
    }

    executeAction() {
        this.props.action();
    }

    render() {
        return (
            <button className='button' onClick={() => this.executeAction()}>
                {this.props.icon ? <img className='button-icon' src={this.props.icon} /> : null}
                <span className='button-text'>{this.props.text}</span>
            </button>
        );
    }
}