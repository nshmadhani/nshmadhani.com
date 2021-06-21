import React from 'react'


import { getIcon, trimDescription } from '../../../utils';

import {Card, TitleWrap} from '../../Card'
import {Content, Stats, Languages} from './styles'
import { Item } from '../../Grid'


import * as styles from './ProjectCard.module.scss'

const ProjectCard  = ({ node }) => {

    return (

    <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
    <Card>
      <div className={styles.content}>
        <h4>{node.name}</h4>
        <p>{trimDescription(node.description)}</p>
      </div>
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
        <div className={styles.stats}>
          <div className={styles.languages}>
            {
              node.languages.nodes.map(({ id, name }) => (
                <span key={id}>
                  {name}
                </span>
              ))
            }
          </div>
        </div>
      </TitleWrap>
    </Card>
  </Item>
    )


}

export default ProjectCard