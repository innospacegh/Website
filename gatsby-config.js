require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `InnoSpace`,
        description: `The perfect collaborative workspace for independent professionals, entrepreneurs and creatives in Tema and its environs.`,
        author: `Daniel Addae`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `innospace-site`,
                short_name: `innospace`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/innospace-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-airtable`,
            concurrency: 5,
            options: {
                apiKey: process.env.AIRTABLE_API_KEY,
                tables: [
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Hero",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Spaces",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Contacts",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "About",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Social",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Open Desk",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Open Memberships",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Private Office",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Meeting Room",
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: "Multipurpose Centre",
                    },
                ],
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-typescript`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
