import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchProjects } from '../../actions/actions';

class HomeComponent extends Component {

    
    componentWillMount () {
        this.props.fetchProjects();
    }
    
    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                    <div className="mdl-cell mdl-cell--6-col mdl-card__supporting-text" key={project.id}> 
                        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                        <div className="mdl-card__title">
                            <h2 className="mdl-card__title-text">{project.name}</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            {project.description}
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                            <Link to="/projects" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Get Started
                            </Link>
                        </div>
                        <div className="mdl-card__menu">
                            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i className="material-icons">share</i>
                            </button>
                        </div>
                        </div>
                    </div>
                );
        });
    }
    render () {
        return (
            <div>
                <h3>Projects</h3>
                <div className="mdl-grid items">
                {this.renderProjects()}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {projects: state.projects.projects};
}

export default connect(mapStateToProps, {fetchProjects})(HomeComponent);