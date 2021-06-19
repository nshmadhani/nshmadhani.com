import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

import {Card, TitleWrap} from '../Card'
import Icon from '../Icon'

import { getIcon, trimDescription } from '../../utils';




const Projects = () => {
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
  return (
    <Wrapper>
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{trimDescription(node.description)}</p>
              </Content>
              <TitleWrap>
                {/* <Stats>
                  <div>
                    <Icon name="star" icon={getIcon("star")} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <span>{node.forkCount}</span>
                  </div>
                </Stats> */}
                <Stats >
                  <Languages>
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default  Projects;