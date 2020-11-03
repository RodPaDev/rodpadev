export function averageReadtime(article){
    let string = stripHtml(article);

    return Math.round(string.split(' ').length / 200)
}

function stripHtml(html){
    return html.replace(/<[^>]+>/g, '')
}