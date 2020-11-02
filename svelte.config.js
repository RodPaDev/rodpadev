const sveltePreprocess = require('svelte-preprocess')
const typescript = require('./tsconfig.json')

module.exports = {
  dev: process.env.NODE_ENV !== 'development',
  hydratable: true,
  emitCss: true,
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
      prependData: "@import 'src/styles/main.scss';",
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
    onwarn: (warning, handler) => {
      const { code, frame } = warning
      if (code === 'css-unused-selector') return
      handler(warning)
    },
    typescript,
  }),
}
