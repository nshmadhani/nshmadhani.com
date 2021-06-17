'use strict';

const author = {
  name: 'Nishay Madhani',
  photo: '/photo.jpg',
  bio: 'Backend Developer, Currently a Graduate Student @ NEU.',
  contacts: {
    email: 'nshmadhani@gmail.com',
    github: 'nshmadhani',
    linkedin: 'https://www.linkedin.com/in/nishay-madhani-485583160/',
    instagram: false,
    line: false,
    gitlab: false,
    weibo: false,
    codepen: false,
    youtube: false,
    soundcloud: false,
    medium: false,
    facebook: false,
    telegram: false,
    twitter: false,
    rss: false,
    vkontakte: false,
  }
}

module.exports = {
  url: 'https://nshmadhani.com',
  title: author.name,
  subtitle: author.bio,
  pathPrefix: '/',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: '',
  useKatex: false,
  menu: [
    {
      label: 'Research',
      path: '/pages/research'
    },
    {
      label: 'Portfolio',
      path: '/pages/porfolio'
    },
    {
      label: 'Resume',
      path: ' '
    },
    {
      label: 'Blog',
      path: '/blog'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: author
};
