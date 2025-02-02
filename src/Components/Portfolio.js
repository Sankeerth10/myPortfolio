import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map((project) => {
        var projectImage = '/images/portfolio/' + project.image;
        return (
          <div key={project.title} className="portfolio-item">
            <div className="item-wrap">
              <a href={project.url} title={project.title}>
                <div className="portfolio-content">
                  <img alt={project.title} src={projectImage} className="project-image" />
                  <div className="project-info">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
            <h1><span>Few of my projects include:</span></h1>
            <div id="portfolio-wrapper" className="cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
