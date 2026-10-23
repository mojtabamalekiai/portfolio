export const site = {
  name: 'Mojtaba Maleki',
  shortName: 'Moji',
  email: 'mojtaba.maleki.138022@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=100064568101695',
};

/** Shared attributes for links that leave the site. */
export const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export const mailtoHref = (subject: string, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
