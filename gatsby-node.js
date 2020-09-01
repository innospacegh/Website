const path = require("path")

const navitems = [
    {
        name: "Spaces",
        path: "spaces",
    },
    {
        name: "Events",
        path: "events",
    },
    {
        name: "Memberships",
        path: "memberships",
    },
    {
        name: "About",
        path: "about",
    },
    {
        name: "Contact",
        path: "contact",
    },
]

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(
        "src/components/PageTemplate/PageTemplate.tsx"
    )
    navitems.forEach(item => {
        createPage({
            path: `/${item.path}`,
            component: pageTemplate,
            context: {
                name: item.name,
            },
        })
    })
}
