import React, { Component } from 'react';
import IdeaList from './containers/IdeaList';
import Notification from './containers/Notification';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <header className="header">
                <span role="img" aria-label="idea"></span>
                    {' '}
                    Idea Board
                </header>
                <IdeaList />
                <Notification />
            </div>
        );
    }
}
