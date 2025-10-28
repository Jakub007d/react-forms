const camelToSnake = (string) => {
    return string
      .replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + '-' + m[1];
      })
      .toLowerCase();
  };

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react", ["@babel/preset-typescript", {allowNamespaces: true}]],
    plugins: [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties",
      [
        'transform-imports',
        {
        '@jakub007d/react-form-renderer': {
            transform: (importName) => `@jakub007d/react-form-renderer/${camelToSnake(importName)}`,
            preventFullImport: true
          }
        },
        '@jakub007d/react-form-renderer'
    ]]
}
