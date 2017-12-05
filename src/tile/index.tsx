import * as React from 'react';
import './index.css';

export namespace Tile {
    export interface Props extends ITile {
        // empty
    }

    export interface State {
        // empty
    }

    export interface Context {
        // empty
    }
}

export enum TileType {
    info = 1,
}

export interface ITile {
    type: TileType;
    title: string;
    subtitle: string;
    icon: string;
    description: string;
}

export class Tile extends React.Component<Tile.Props, Tile.State> {
    constructor(props?: Tile.Props, context?: Tile.Context) {
        super(props, context);
    }

    render() {
        return (
            <div className='tile'>
                <div className='tile-inner'>
                    <h1 className='tile-title'>title</h1>
                    <h2 className='tile-subtitle'>subtitle</h2>
                    <p className='tile-description'>lorem ipsum</p>
                </div>
            </div>
        );
    }
}