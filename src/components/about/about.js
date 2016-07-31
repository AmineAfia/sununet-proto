import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchProjects } from '../../actions/actions';

class AboutComponent extends Component {
    
    componentWillMount () {
        this.props.fetchProjects();
    }
    
    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                    <tr key={project.id}>
                    <td className="mdl-data-table__cell--non-numeric">{project.name}</td>
                    <td>{project.size}</td>
                    <td>{project.date}</td>
                    </tr>
                );
        });
    }

    render () {
        return (
            <div>
                <div className="mdl-card__supporting-text">
                <label><h2>Projects summery</h2></label>
                <table className="mdl-cell--12-col mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <thead>
                    <tr>
                    <th className="mdl-data-table__cell--non-numeric">Nom</th>
                    <th>Participants</th>
                    <th>Date d'expiration</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderProjects()}
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {projects: state.projects.projects};
}

export default connect(mapStateToProps, {fetchProjects})(AboutComponent);