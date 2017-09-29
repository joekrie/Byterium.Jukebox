import React from 'react'

export function AlbumView() {
    const tracks = ['t1', 't2', 't3']
    return tracks.map(track => <TrackListItem key={track} track={track} />)
}

export function TrackListItem({ track }) {
    return <div className="stack">{track}</div>
}
