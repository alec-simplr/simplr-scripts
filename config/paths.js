const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => {
  const pathExists = fs.existsSync(`${appDirectory}/${relativePath}`);
  return pathExists ? path.resolve(appDirectory, relativePath) : undefined;
};

module.exports = {
  appSrc: resolveApp("src"),
  build: resolveApp("dist"),
  public: resolveApp("public"),
  appEnv: resolveApp(".env"),
  appModuleFederationConfig: resolveApp("moduleFederationConfig.js"),
  appPackageJson: resolveApp("package.json"),
  appSetupTestsFile: resolveApp('src/setupTests.js'),
};
