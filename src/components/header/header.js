import React, {Component} from 'react';
import './header.scss'


class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleDetector() {
        this.props.onDetectorClick();
    }

    handleAbout() {
        this.props.onAboutClick();
    }

    render() {
        return (
            <React.Fragment>
                <div className="header__container">
                    <h2 className="header__title">ALICE</h2>
                    <a
                        onClick={this.handleDetector.bind(this)}
                        className="header__element"
                    >Detector</a>
                    <a
                        onClick={this.handleAbout.bind(this)}
                        className="header__element"
                    >About</a>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
