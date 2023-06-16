const styleDictionary = require('style-dictionary');
const { TOKEN_TYPE, PATHS, PREFIX, toRem } = require('./helper');

const transformationsToRegistered = [
  {
    type: 'value',
    name: 'function/rem',
    transitive: true,
    matcher: (token) =>
      token.type === TOKEN_TYPE.FONT_SIZES ||
      token.type === TOKEN_TYPE.SIZING ||
      token.type === TOKEN_TYPE.SPACING ||
      token.type === TOKEN_TYPE.BORDER_RADIUS,
    transformer: (token) => toRem(token.value),
  },
  {
    type: 'value',
    name: 'boxShadow/css',
    transitive: true,
    matcher: (token) => token.type === TOKEN_TYPE.BOX_SHADOW,
    transformer: (token) => {
      const { x, y, blur, spread, color } = token.value;
      return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    },
  },
];

for (const transformationToRegistered of transformationsToRegistered) {
  styleDictionary.registerTransform(transformationToRegistered);
}

const styleDictionaryConfig = styleDictionary.extend({
  source: [`${PATHS.TOKEN_TRANSFORMER_DIR}/**/*.json`],
  platforms: {
    css: {
      buildPath: `${PATHS.TOKENS_DIR}/`,
      prefix: PREFIX,
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'function/rem',
        'boxShadow/css',
      ],
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

styleDictionaryConfig.buildAllPlatforms();
