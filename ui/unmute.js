function PersonCreate(entry, callback) {
    var xhr = new XMLHttpRequest()
    var url = '/fn/IdentifyAuthor/PersonCreate'
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText)
        }
    }
    var data = JSON.stringify(entry)
    xhr.send(data)
}

function PersonRead(hash, callback) {
    var xhr = new XMLHttpRequest()
    var url = '/fn/IdentifyAuthor/PersonRead'
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }
    var data = JSON.stringify(hash)
    xhr.send(data)
}
