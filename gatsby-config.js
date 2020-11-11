require('dotenv').config();
module.exports = {
    siteMetadata: {
        title: `ryichk portfolio`,
        name: `ryichk`,
        siteUrl: `https://ryichk.com`,
        description: `I'm preparing now. Please come again in a while.`,
        hero: {
            heading: `Welcome to ryichk portfolio. I'm like a software developer. And I'm doing some other things.`,
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
                url: `https://facebook.com/ichiki.ryo.3`
            },
            {
                name: `twitter`,
                url: `https://twitter.com/ryichk`,
            },
            // {
            //     name: `note`,
            //     url: `https://note.com/ryichk`
            // }
            // {
            //     name: `linkedin`,
            //     url: `https://www.linkedin.com/company/ryichk/`,
            // },
            // {
            //     name: `dribbble`,
            //     url: `https://dribbble.com/ryichkstudio`,
            // },
        ],
    },
    plugins: [{
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
                    // contentful: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ryichk portfolio`,
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
    ],
};