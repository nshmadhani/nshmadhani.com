import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectCard from './ProjectCard';


import {Grid}  from '../Grid'


const Projects = ({ limit } ) => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  limit = !limit ? 12 : limit;
 
  let newEdges = edges;
  newEdges = newEdges.slice(0,limit);

  return (
      <Grid>
        {newEdges.map(({ node }) => (
          <ProjectCard node={node}/>
        ))}
      </Grid>
  );
};

export default  Projects;