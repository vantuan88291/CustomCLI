const path = require('path');
const shell = require('shelljs');
const common = require('../Common');
const fs = require('fs');

const addToNavigate = (screenName) => {
    const navDir = path.join(`${process.cwd()}`, common.NAVIGATOR_DIR)
    const stackMethod = `            <Stack.Screen name={Screens.${screenName}} component={${screenName}Screen}\/>\n        <\/Stack.Navigator>`
    shell.sed('-i', /}/g, `  ${screenName} = \'${screenName}Screen\',\n}`, `${navDir}/${common.SCREEN_FILE}`);
    shell.sed('-i', /\/\/end import/g, `import ${screenName}Screen from "../screens/${screenName}";\n\/\/end import`, `${navDir}/${common.NAVIGATOR_FILE}`);
    shell.sed('-i', /        <\/Stack.Navigator>/g, stackMethod, `${navDir}/${common.NAVIGATOR_FILE}`);
}
const addNewScreen = (screenName) => {
    const currentWorkingDir = path.join(`${process.cwd()}/${common.SCREEN_DIR}`, screenName)
    const templateDir = path.join(__dirname, `./templates/screens`)
    if (fs.existsSync(currentWorkingDir)) {
        console.log(`${screenName} was exist, please choose another name`)
        return
    }
    shell.cp('-R', templateDir, currentWorkingDir)

    shell.mv(`${currentWorkingDir}/screens.tsx`, `${currentWorkingDir}/${screenName}Screen.tsx`);
    shell.sed('-i', /@{screen}/g, screenName, `${currentWorkingDir}/${screenName}Screen.tsx`);
    shell.sed('-i', /@{screen}/g, screenName, `${currentWorkingDir}/index.ts`);
    addToNavigate(screenName)
    shell.cd(currentWorkingDir)
    shell.echo(`Generate ${screenName} successful! 🥳`)
    shell.exit(1)
}
module.exports = addNewScreen
