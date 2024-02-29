import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const ExternalLinkWithIcon = ({ href, title, iconClassName }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
    <i className={iconClassName}></i>
  </a>
);
ExternalLinkWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired,
};

const CustomIconLinks = () => {
  return (
    <div className="custom-icon-links" style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />
      </Helmet>
      <ExternalLinkWithIcon
        href="https://scholar.google.com/citations?user=xetJ05YAAAAJ&hl=en"
        title="Google Scholar"
        iconClassName="ai ai-google-scholar-square ai-3x"
      />
      <ExternalLinkWithIcon
        href="https://www.linkedin.com/in/anh-minh-nguyen-44016717b/"
        title="LinkedIn"
        iconClassName="fab fa-linkedin ai-3x"
      />
      <ExternalLinkWithIcon
        href="https://twitter.com/MinhN2804"
        title="Twitter"
        iconClassName="fab fa-twitter-square ai-3x"
      />
      <ExternalLinkWithIcon
        href="https://orcid.org/0009-0005-5091-7401"
        title="orcID"
        iconClassName="ai ai ai-orcid-square ai-3x"
      />
    </div>
  );
};

export default CustomIconLinks;