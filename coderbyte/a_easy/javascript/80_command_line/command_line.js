const commandLine = (str) => {
  const array = str.split(/[^0-9A-Za-z]*(?=[\s][A-Za-z]*=)/g);
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const tokenValuesRegex = /([A-Za-z]*)=([A-Za-z\s\d.:;(){}\/]*)/g;
    const match = tokenValuesRegex.exec(array[i]);

    try {
      result.push(match[1].length + '=' + match[2].length);
    } catch (err) {
      return 'Sorry, you have not passed a valid string.';
    }
  }

  return result.join(' ');
};

module.exports = commandLine;
