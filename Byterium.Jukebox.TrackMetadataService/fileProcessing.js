const fs = require('fs')
const mime = require('mime-types')
const musicmetadata = require('musicmetadata')
const path = require('path')
const Promise = require('bluebird')

export function requestHandler(req, res) {
    const processedFiles = req.body.filePaths.map(processFileAsync)

    Promise.all(processedFiles)
        .then(mapMetadataToAlbum)
        .then(album => res.send(album))
}

export function processFileAsync(file) {
    const musicmetadataAsync = Promise.promisify(musicmetadata)
    const readStream = fs.createReadStream(file.path)
    const promisifiedStream = musicmetadataAsync(readStream)

    function mapMetadata(meta) {
        return {
            metadata: meta,
            tempFilePath: file.path,
            tempFileName: file.filename,
            mimeType: file.mimetype,
            ext: path.extname(file.originalname)
        }
    }

    return promisifiedStream.then(mapMetadata)
}

export function mapMetadataToAlbum(metas) {
    function mapTrack(meta) {
        return {
            title: meta.metadata.title,
            tempFileName: meta.tempFileName,
            mimeType: meta.mimeType,
            ext: meta.ext
        }
    }

    return {
        artist: metas[0].metadata.artist[0],
        album: metas[0].metadata.album,
        tracks: metas.map(mapTrack)
    }
}
