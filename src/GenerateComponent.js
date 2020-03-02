const path = require('path');
const shell = require('shelljs');
const common = require('../Common');
const fs = require('fs');

const addToIndex = (componentName) => {
    const currentWorkingDir = path.join(`${process.cwd()}`, common.COMPONENT_DIR)
    // const newImport = new ShellString(`export * from './${componentName}';`);
    // newImport.toEnd(`${currentWorkingDir}/${common.COMPONENT_INDEX}`)
    // console.log('sheell', newImport)
}
const addNewComponent = (componentName) => {
    const currentWorkingDir = path.join(`${process.cwd()}/${common.COMPONENT_DIR}`, componentName)
    const templateDir = path.join(__dirname, `./templates/components`)
    if (fs.existsSync(currentWorkingDir)) {
        console.log(`${componentName} was exist, please choose another name`)
        return
    }
    shell.cp('-R', templateDir, currentWorkingDir)
    shell.sed('-i', /@{component}/g, componentName, `${currentWorkingDir}/index.tsx`);
    addToIndex(componentName)
    shell.cd(currentWorkingDir)
    shell.echo(`Generate component ${componentName} successful! 🥳`)
    shell.exit(1)
}
module.exports = addNewComponent
