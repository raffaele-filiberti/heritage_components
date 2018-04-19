const colors = {
    black: '#141a2f',
    cta: '#e3d841',
    darkBlue: '#172c81',
    lightBlue: '#4884c2',
    highlight: '#6bc3ff',
    light: '#e8ecff',
    'text-inactive': 'rgba(255, 255, 255, 0.4)',
    white: '#fff'
};

// Why em instead of px? Glad you asked: https://cloudfour.com/thinks/the-ems-have-it-proportional-media-queries-ftw/
const mediaQueries = {
    '--phone': '(min-width: 20em)', // 320px
    '--tablet': '(min-width: 48em)', // 768px
    '--desktop': '(min-width: 62em)', // 992px
    '--large-desktop': '(min-width: 75em)' // 1200px
};

module.exports = {
    parser: false,
    plugins: {
        'postcss-import': {},
        'postcss-custom-properties': {variables: colors},
        'postcss-custom-media': {extensions: mediaQueries},
        'postcss-calc': {},
        'postcss-color-function': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
            warnForDuplicates: false
        },
        'autoprefixer': {},
    }
};