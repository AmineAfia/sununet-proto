import React, {Component} from 'react';
import { Link } from 'react-router';

class ProjectsComponent extends Component {
    render () {
        return (
            <div className="mdl-cell--12-col mdl-card__supporting-text">
            <label><h2>Subscription</h2></label>
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <form action="#">
                    <div className="mdl-card__supporting-text">
                    <div className="mdl-cell--1-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-1">
                        <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="1"/>
                        <span className="mdl-radio__label">M.</span>
                        </label>
                    </div>
                    <div className="mdl-cell--2-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-2">
                        <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="2"/>
                        <span className="mdl-radio__label">Mme</span>
                        </label>
                    </div>

                    <div className="mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3"/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Nom...</label>
                    </div>
                    <div className="mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3"/>
                        <label className="mdl-textfield__label" htmlFor="sample3">Prénom...</label>
                    </div>
                    <div className="mdl-cell--2-col mdl-textfield--floating-label">
                        <label>Available</label>
                    </div>
                    <div className="mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3"/>
                        <label className="mdl-textfield__label" htmlFor="sample3">From ../../....</label>
                    </div>
                    <div className="mdl-cell--4-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="sample3"/>
                        <label className="mdl-textfield__label" htmlFor="sample3">To ../../....</label>
                    </div>
                    
                    <div className="mdl-cell--12-col mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text" rows="3" id="sample5" ></textarea>
                        <label className="mdl-textfield__label" htmlFor="sample5">Adresse...</label>
                    </div>
                    <div className="mdl-cell--12-col mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text" rows="3" id="sample5" ></textarea>
                        <label className="mdl-textfield__label" htmlFor="sample5">Commentaire...</label>
                    </div>
                    <div className="md-card-actions">
                    <Link to="/" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                    Submit
                    </Link>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default ProjectsComponent