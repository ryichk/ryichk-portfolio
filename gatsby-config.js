require('dotenv').config();
module.exports = {
    siteMetadata: {
        title: `ryichk's portfolio`,
        name: `ryichk`,
        siteUrl: `https://ryichk.com`,
        description: `This is a website that introduces ryichk's self and the apps coded by ryichk.`,
        hero: {
            heading: `Welcome to ryichk's portfolio.`,
            maxWidth: 652,
        },
        social: [{
                name: `github`,
                url: `https://github.com/ryichk`,
            },
            {
                name: `instagram`,
                url: `https://instagram.com/ryichk`,
            },
            {
                name: `facebook`,
                url: `https://facebook.com/ryo.ichiki.3`
            },
            {
                name: `twitter`,
                url: `https://twitter.com/ryichk_dev`,
            },
        ],
    },
    plugins: [{
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
                head: true,
            },
        },
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: '/',
                basePath: "/",
                pageLength: 6,
                authorsPage: true,
                sources: {
                    local: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ryichk's portfolio`,
                short_name: `ryichk`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/ryichk.png`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {},
        },
    ],
};