import React from 'react';
import ReactMarkdown from 'react-markdown';
import Toc from "../components/Toc.js"

let markdown = '# README\n\nThis project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\n\n## Available Scripts\n\nIn the project directory, you can run:\n\n### `npm start`\n\nRuns the app in the development mode.<br />\n\nOpen [http://localhost:3000](http://localhost:3000) to view it in the browser.\n\nThe page will reload if you make edits.<br />\n\nYou will also see any lint errors in the console.\n\n### `npm test`\n\nLaunches the test runner in the interactive watch mode.<br />\n\nSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.\n\n### `npm run build`\n\nBuilds the app for production to the `build` folder.<br />\n\nIt correctly bundles React in production mode and optimizes the build for the best performance.\n\nThe build is minified and the filenames include the hashes.<br />\n\nYour app is ready to be deployed!\n\nSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.\n\n### `npm run eject`\n\n**Note: this is a one-way operation. Once you `eject`, you can’t go back!**\n\nIf you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.\n\nInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.\n\nYou don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.\n\n## Learn More\n\nYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).\n\nTo learn React, check out the [React documentation](https://reactjs.org/).\n\n### Code Splitting\n\nThis section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting\n\n### Analyzing the Bundle Size\n\nThis section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size\n\n### Making a Progressive Web App\n\nThis section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app\n\n### Advanced Configuration\n\nThis section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration\n\n### Deployment\n\nThis section has moved here: https://facebook.github.io/create-react-app/docs/deployment\n\n### `npm run build` fails to minify\n\nThis section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify'

class Report extends React.Component {
    render() {
        return (
            <div className="content">
                <Toc />
                <div className="report">
                    <ReactMarkdown source={markdown}/>
                </div>
            </div>
        )
    }
}

export default Report;
