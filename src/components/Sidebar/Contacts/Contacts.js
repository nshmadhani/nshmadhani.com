// @flow strict
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import * as styles  from './Contacts.module.scss';



const Contacts = ({ contacts }) => (
  <div className={styles.contacts}>
    <ul className={styles.contacts__list}>


      {Object.keys(contacts).map((name) => (contacts[name] == false ? null : (
        <li className={styles.contacts__list_item} key={name}>
            <a
              className={styles.contacts__list_item_link}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
            <Icon name={name} icon={getIcon(name)} />
          </a>
        </li>
      )))}


    </ul>
  </div>
);

export default Contacts;
