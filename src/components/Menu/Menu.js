import classNames from 'classnames/bind';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

import * as styles  from './Menu.module.scss';

const cx = classNames.bind(styles);

export const PureMenu = ({ data, horizontal, bold, noMargin, location }) => {
  const { menu } = data.site.siteMetadata;
  const pathname = location ? location.pathname : '';
  return (
    <nav
      className={cx({
        menu: true,
        horizontal,
        'no-margin': noMargin,
      })}
    >
      <ul className={styles.menu__list}>
        {menu.map(item => (
          <li className={styles.menu__lis_item} key={item.path}>
            <Link
              to={item.path}
              className={cx({
                'menu__list_item_link': true,
                bold,
                'menu__list_item_link__active':
                  (item.path === '/' &&
                    (pathname.startsWith('/top/') || pathname.startsWith('/page/'))) ||
                  (item.path === '/tags/' && pathname.startsWith('/tag/')),
              })}
              activeClassName={styles.menu__list_item_link__active}
              partiallyActive={item.path !== '/'}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Menu = props => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        site {
          siteMetadata {
            menu {
              label
              path
            }
          }
        }
      }
    `}
    render={data => <PureMenu {...props} data={data} />}
  />
);

export default Menu;
