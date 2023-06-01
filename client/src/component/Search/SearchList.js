import React from 'react'
import Card from './Card';

export default function SearchList({filteredArtist}) {
    const filtered = filteredArtist?.map(artist=> <Card key={artist.id} artist={artist}/>); 
    
  return (
    <div>
        {filtered}
    </div>
  )
}
