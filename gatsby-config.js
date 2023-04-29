module.exports = {
  siteMetadata: {
    title: `vnin_izi0`,
    description: `vnin_izi0`,
    author: `vnin_izi0`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#c6c6c6`,
        theme_color: `#c6c6c6`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          // google: [
          //   {
          //     family: "Roboto", // 'font-family' property
          //     variants: ["300", "400", "500"],
          //     //subsets: ['latin'],
          //     //text: 'Hello',
          //     //fontDisplay: 'swap' || 'auto' || 'block' || 'fallback' || 'optional',
          //     //strategy: 'selfHosted' || 'base64' || 'cdn',
          //     // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face (except 'src' & 'font-family') can go here i.e.
          //     //[cssProperty]: 'value',
          //   },
          // ],
          selfHosted: [
            {
              family: "Apercu Mono",
              urls: {
                woff2: `/src/fonts/Apercu-Mono.woff2`,
                woff: `/src/fonts/Apercu-Mono.woff`,
                //[format]: '/[filepath]/[filename],
              },
              //[cssProperty]: 'value',
            },
            {
              family: "Braille Normal",
              urls: {
                woff: `/src/fonts/BRAILLE1.woff`,
              },
            },
          ],
        },
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        //formats: ['woff2', 'woff', 'otf', 'ttf'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      },
    },
  ],
}
