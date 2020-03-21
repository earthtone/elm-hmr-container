const plugins = [
  require('tailwindcss')(),
  require('postcss-elm-tailwind')()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: ['src/index.html', './**/*.elm']
    })
  )
}

module.exports = { plugins }

