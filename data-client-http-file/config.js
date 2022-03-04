const yaml = require('js-yaml');
const fs = require('fs');

const getConfig = (configFile = './config.yml') => {
  return yaml.load(fs.readFileSync(configFile, 'utf8'));
};

module.exports = { getConfig };

