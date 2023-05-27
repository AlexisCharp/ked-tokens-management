const TOKEN_TYPE = {
  BORDER_RADIUS: 'borderRadius',
  BORDER_WIDTH: 'borderWidth',
  BOX_SHADOW: 'boxShadow',
  COLOR: 'color',
  FONT_FAMILIES: 'fontFamilies',
  FONT_SIZES: 'fontSizes',
  FONT_WEIGHTS: 'fontWeights',
  LETTER_SPACING: 'letterSpacing',
  LINE_HEIGHT: 'lineHeight',
  LINE_HEIGHTS: 'lineHeights',
  OPACITY: 'opacity',
  SIZING: 'sizing',
  SPACING: 'spacing',
  TEXT_DECORATION: 'textDecoration',
  TYPOGRAPHY: 'typography',
};

const PATHS = {
  TOKENS_DIR: 'tokens',
  TOKEN_TRANSFORMER_DIR: 'token-transformer',
};

const PREFIX = 'ked';

const toRem = (value) => `rem(${value})`;
const toCssCustomProperty = (value) => `var(--${value})`;

module.exports = { TOKEN_TYPE, PATHS, PREFIX, toRem, toCssCustomProperty };
