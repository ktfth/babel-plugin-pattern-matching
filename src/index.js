export default function({types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name;
        path.node.name = name.split('').reverse().join('');
      }
    }
  };
}
