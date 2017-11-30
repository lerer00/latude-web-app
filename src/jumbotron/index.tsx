import * as React from 'react';
import './index.css';

export namespace Jumbotron {
    export interface Props {
        // empty
    }

    export interface State {
        // empty
    }

    export interface Context {
        // empty
    }
}

export class Jumbotron extends React.Component<Jumbotron.Props, Jumbotron.State> {
    constructor(props?: Jumbotron.Props, context?: Jumbotron.Context) {
        super(props, context);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="jumbotron-inner">
                    <h2 className="jumbotron-title">latude.</h2>
                    <h3 className="jumbotron-subtitle">Decentralized booking authority</h3>
                </div>
            </div>
        );
    }
}