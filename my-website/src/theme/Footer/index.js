// src/theme/Footer/index.js
import React, { useEffect, useState } from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import CustomIconLinks from './CustomIconLinks'; // Your custom component
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';


function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  const {links, logo, style, copyright} = footer;
  
  // const [visits, setVisits] = useState(0);
  // const [onlineVisitors, setOnlineVisitors] = useState(0);

  // <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=Gs7YlhruXg6hMrapzyex6AsYMEX0u7aumDqxujRjBeA"></script>

  return (
    <FooterLayout
      style={style}
      links={<><CustomIconLinks /></>}
      logo={logo && <FooterLogo logo={logo} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}


export default React.memo(Footer);
