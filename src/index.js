const theme = {
    headerFontFamily: ['Proxima Nova', 'sans-serif'],
    bodyFontFamily: ['Proxima Nova', 'sans-serif'],
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    blockMarginBottom: 0.8,
    overrideStyles: () => ({
        a: {
            color: '#333',
            textDecoration: 'none',
            borderBottom: '1px solid black'
        },
        blockquote: {
            color: '#333',
            fontStyle: 'italic',
            borderLeft: '2px solid #333',
            paddingLeft: '10px'
        }
    })
}

export default theme;