console.log('hello')

const source = document.getElementById('source')
const themesBad = document.getElementById('themes-bad')
const themesGood = document.getElementById('themes-good')



let getThemes = (textArea) => {
    let getTheme = (string) => {
        return string.split(';')
    }

    let themes = textArea.value.trim()
        .split('\n')
        .map(e => getTheme(e))
    return themes
}

let printThemes = (textArea, templates) => {
    textArea.value = templates
}

let joinTemplates = (arrThemes) => {
    let out = []

    arrThemes.forEach(e => {
        out.push(e.join(';'))
    });

    return out.join('\n')
}

let checkThemes = (arrThemes) => {
    let bad = []
    let good = []

    arrThemes.forEach(theme => theme.length === 7 ? good.push(theme) : bad.push(theme));

    return {
        good,
        bad
    }
}

source.addEventListener('change', () => {
    let themes = getThemes(source)
    
    let {good, bad} = checkThemes(themes)

    console.log(bad)

    printThemes(themesBad, bad)
    printThemes(themesGood, joinTemplates(good))
})

