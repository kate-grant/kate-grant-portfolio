/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kate Grant - Software Engineer`,
    siteUrl: `https://www.yourdomain.tld`,
    author: {
      name: `Kate Grant`,
      summary: `Kate Grant is a Brooklyn-based fullstack software engineer with a love for functional programming.`
    },
    social: {
      github: `kate-grant`
    }
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },

    __key: "images"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `posts`,
      // Path to the directory
      path: `${__dirname}/content/blog/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
      // Ignore files starting with a dot
      ignore: [`**/\.*`],
      // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
      fastHash: true,
    },
  },
  {
    options: {
        path: `${__dirname}/content/blog`
    },
    resolve: "gatsby-plugin-page-creator"
}, `gatsby-transformer-remark`,
{
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.nodes.map(node => {
            return Object.assign({}, node.frontmatter, {
              description: node.excerpt,
              date: node.frontmatter.date,
              url: site.siteMetadata.siteUrl + node.fields.slug,
              guid: site.siteMetadata.siteUrl + node.fields.slug,
              custom_elements: [{ "content:encoded": node.html }],
            })
          })
        },
        query: `{
          allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
            nodes {
              excerpt
              html
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }`,
        output: "/rss.xml",
        title: "Kate Grant - Software Engineer Blog RSS Feed",
      },
    ],
  },
},
]
};
