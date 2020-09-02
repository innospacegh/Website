module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    settings: {
        react: {
            version: "^16.12.0",
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ["@typescript-eslint", "react", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        // Allows for the use of imports
        sourceType: "module",
    },
    rules: {
        // Disable prop-types as we use TypeScript for type checking
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        // Enable prettier rules
        "prettier/prettier": "error",
        // interface start with capital I
        // "@typescript-eslint/interface-name-prefix": "off",
        // allow "any" as type
        "@typescript-eslint/no-explicit-any": "off",
        // allow @ts-ignore for testing purposes
        "@typescript-eslint/ban-ts-ignore": "off",
    },
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
            },
        },
    ],
}