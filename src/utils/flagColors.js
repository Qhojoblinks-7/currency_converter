export const getFlagColors = (countryCode) => {
    const flagColors = {
      // North America
      US: ['#3C3B6E', '#B22234', '#FFFFFF'], // United States
      CA: ['#FF0000', '#FFFFFF'], // Canada
      MX: ['#006847', '#FFFFFF', '#CE1126'], // Mexico
  
      // Europe
      GB: ['#00247D', '#FFFFFF', '#CF142B'], // United Kingdom
      FR: ['#0055A4', '#FFFFFF', '#EF4135'], // France
      DE: ['#000000', '#DD0000', '#FFCE00'], // Germany
      IT: ['#008C45', '#FFFFFF', '#CD212A'], // Italy
      ES: ['#AA151B', '#F1BF00'], // Spain
      PT: ['#006600', '#FF0000', '#FFCC00'], // Portugal
      NL: ['#21468B', '#FFFFFF', '#AE1C28'], // Netherlands
      BE: ['#000000', '#FFD700', '#FF0000'], // Belgium
      PL: ['#FFFFFF', '#DC143C'], // Poland
      RO: ['#002B7F', '#FCD116', '#CE1126'], // Romania
      HU: ['#477050', '#FFFFFF', '#D4351C'], // Hungary
      CZ: ['#D7141A', '#FFFFFF', '#11457E'], // Czech Republic
      SK: ['#FF0000', '#FFFFFF', '#0B4EA2'], // Slovakia
      RU: ['#FFFFFF', '#0039A6', '#D52B1E'], // Russia
      IE: ['#169B62', '#FFFFFF', '#FF883E'], // Ireland
      GR: ['#0D5EAF', '#FFFFFF'], // Greece
      SE: ['#005BAC', '#FFD700'], // Sweden
      FI: ['#FFFFFF', '#003580'], // Finland
      NO: ['#BA0C2F', '#FFFFFF', '#00205B'], // Norway
      DK: ['#C60C30', '#FFFFFF'], // Denmark
      CH: ['#FF0000', '#FFFFFF'], // Switzerland
      AT: ['#FF0000', '#FFFFFF'], // Austria
      IS: ['#003897', '#FFFFFF', '#D72828'], // Iceland
      LT: ['#FDB913', '#006A44', '#C1272D'], // Lithuania
      LV: ['#9E3039', '#FFFFFF'], // Latvia
      EE: ['#0072CE', '#FFFFFF', '#000000'], // Estonia
      BG: ['#00966E', '#FFFFFF', '#D62612'], // Bulgaria
      HR: ['#FF0000', '#FFFFFF', '#0000FF'], // Croatia
      SI: ['#003DA5', '#FFFFFF', '#ED2939'], // Slovenia
      MT: ['#FFFFFF', '#D5261E'], // Malta
      CY: ['#FFFFFF', '#E7832A', '#007A33'], // Cyprus
      TR: ['#E30A17', '#FFFFFF'], // Turkey
      EUR: ['#1026CB', '#CFCB00'], // Euro
  
      // Africa
      GH: ['#006B3F', '#FFD700', '#CE1126'], // Ghana
      NG: ['#008753', '#FFFFFF'], // Nigeria
      ZA: ['#002395', '#FFFFFF', '#FFB612', '#000000', '#DE3831', '#007A4E'], // South Africa
      SN: ['#00853F', '#FFD700', '#E31B23'], // Senegal
      ZW: ['#006B3F', '#FFD700', '#000000', '#E41B17'], // Zimbabwe
      DZ: ['#006233', '#FFFFFF', '#D52B1E'], // Algeria
      MA: ['#C1272D', '#006233'], // Morocco
      MG: ['#FC3D21', '#007A3D', '#FFFFFF'], // Madagascar
      ET: ['#009A44', '#FFD100', '#EF3340'], // Ethiopia
      UG: ['#FFCD00', '#000000', '#D21034'], // Uganda
      TZ: ['#17B636', '#FFFFFF', '#00AEEF', '#000000'], // Tanzania
      KE: ['#006400', '#FFFFFF', '#FF0000', '#000000'], // Kenya
      EG: ['#000000', '#FFFFFF', '#CE1126'], // Egypt
      SD: ['#007A33', '#FFFFFF', '#D21034', '#000000'], // Sudan
      SO: ['#4189DD', '#FFFFFF'], // Somalia
      RW: ['#20603D', '#FAD201', '#007FFF'], // Rwanda
      BI: ['#009739', '#D52B1E', '#FFFFFF'], // Burundi
      DJ: ['#6AB2E7', '#FFFFFF', '#D7141A', '#12AD2B'], // Djibouti
      ER: ['#D92323', '#44A847', '#0E47B9', '#FFD100'], // Eritrea
      MW: ['#000000', '#D21034', '#007A33'], // Malawi
      MZ: ['#006747', '#FCE300', '#D7141A', '#FFFFFF', '#000000'], // Mozambique
      ZM: ['#198A00', '#FF0000', '#FF8000', '#000000'], // Zambia
      NA: ['#003580', '#FFD100', '#D7141A', '#00A859'], // Namibia
      BW: ['#003893', '#FFFFFF', '#000000'], // Botswana
      AO: ['#DD0000', '#FFFFFF', '#FFD700'], // Angola
      CM: ['#007A33', '#FFD700', '#D21034'], // Cameroon
      NE: ['#0DB02B', '#FFD600', '#DF4723'], // Niger
      BF: ['#00843D', '#CE1126', '#FCD116'], // Burkina Faso
      CI: ['#F77F00', '#FFFFFF', '#12AD2B'], // Côte d'Ivoire
      SL: ['#1EB53A', '#FFFFFF', '#0072C6'], // Sierra Leone
      LR: ['#FFFFFF', '#002868', '#BF0A30'], // Liberia
      GN: ['#CE1126', '#FCD116', '#009739'], // Guinea
      GQ: ['#3A75C4', '#009739', '#FFFFFF', '#FFD100', '#D7141A'], // Equatorial Guinea
      GA: ['#3A75C4', '#FCD116', '#009739'], // Gabon
      CG: ['#009639', '#FFD100', '#DC241F'], // Congo
      TD: ['#C60C30', '#FFD700', '#0072C6'], // Chad
      LY: ['#000000', '#FFFFFF', '#FF0000', '#00FF00'], // Libya
  
      // Asia
      CN: ['#DE2910', '#FFDE00'], // China
      JP: ['#FFFFFF', '#BC002D'], // Japan
      IN: ['#FF9933', '#FFFFFF', '#138808', '#000080'], // India
      PK: ['#01411C', '#FFFFFF'], // Pakistan
      SA: ['#006C35', '#FFFFFF'], // Saudi Arabia
      KR: ['#FFFFFF', '#C60C30', '#003478', '#1D99D5'], // South Korea
      SG: ['#FF0000', '#FFFFFF'], // Singapore
      VN: ['#DA251D', '#FFFF00'], // Vietnam
  
      // South America
      BR: ['#009C3B', '#FFDF00', '#002776'], // Brazil
      AR: ['#74ACDF', '#FFFFFF', '#F7C242'], // Argentina
      CL: ['#0033A0', '#FFFFFF', '#FF0000'], // Chile
      CO: ['#FCD116', '#003893', '#CE1126'], // Colombia
      PE: ['#D91023', '#FFFFFF'], // Peru
  
      // Oceania
      AU: ['#002868', '#FFFFFF', '#FF0000'], // Australia
      NZ: ['#00247D', '#FFFFFF', '#FF2400'], // New Zealand
      FJ: ['#003D96', '#FFFFFF', '#FF0000', '#F7D617'], // Fiji
  
      // Default
      Default: ['#000000', '#FFFFFF'], // Default colors if country code not found
    };
  
    return flagColors[countryCode] || flagColors.Default;
  };
  