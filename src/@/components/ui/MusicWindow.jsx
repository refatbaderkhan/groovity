import React, {useState, useEffect} from 'react'
import MusicWindowGenreFilter from './MusicWindowGenreFilter'
import MusicWindowAlbumCard from './MusicWindowAlbumCard'
import { spotifyNewAlbumReleases } from 'api/spotify/spotifyServices'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

const MusicWindow = () => {
  
const [albums, setAlbums] = useState([])

useEffect(() => {
  spotifyNewAlbumReleases()
    .then((response) => {
      setAlbums(response.albums.items)
    })
}, [])

//const albums = [
//      {
//        "album_type": "single",
//        "artists": [
//          {
//            "external_urls": {
//              "spotify": "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"
//            },
//            "href": "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
//            "id": "66CXWjxzNUsdJxJ2JdwvnR",
//            "name": "Ariana Grande",
//            "type": "artist",
//            "uri": "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
//          }
//        ],
//        "available_markets": [
//          "AR",
//          "AU",
//          "AT",
//          "BE",
//          "BO",
//          "BR",
//          "BG",
//          "CA",
//          "CL",
//          "CO",
//          "CR",
//          "CY",
//          "CZ",
//          "DK",
//          "DO",
//          "DE",
//          "EC",
//          "EE",
//          "SV",
//          "FI",
//          "FR",
//          "GR",
//          "GT",
//          "HN",
//          "HK",
//          "HU",
//          "IS",
//          "IE",
//          "IT",
//          "LV",
//          "LT",
//          "LU",
//          "MY",
//          "MT",
//          "MX",
//          "NL",
//          "NZ",
//          "NI",
//          "NO",
//          "PA",
//          "PY",
//          "PE",
//          "PH",
//          "PL",
//          "PT",
//          "SG",
//          "SK",
//          "ES",
//          "SE",
//          "CH",
//          "TW",
//          "TR",
//          "UY",
//          "US",
//          "GB",
//          "AD",
//          "LI",
//          "MC",
//          "ID",
//          "JP",
//          "TH",
//          "VN",
//          "RO",
//          "IL",
//          "ZA",
//          "SA",
//          "AE",
//          "BH",
//          "QA",
//          "OM",
//          "KW",
//          "EG",
//          "MA",
//          "DZ",
//          "TN",
//          "LB",
//          "JO",
//          "PS",
//          "IN",
//          "KZ",
//          "MD",
//          "UA",
//          "AL",
//          "BA",
//          "HR",
//          "ME",
//          "MK",
//          "RS",
//          "SI",
//          "KR",
//          "BD",
//          "PK",
//          "LK",
//          "GH",
//          "KE",
//          "NG",
//          "TZ",
//          "UG",
//          "AG",
//          "AM",
//          "BS",
//          "BB",
//          "BZ",
//          "BT",
//          "BW",
//          "BF",
//          "CV",
//          "CW",
//          "DM",
//          "FJ",
//          "GM",
//          "GE",
//          "GD",
//          "GW",
//          "GY",
//          "HT",
//          "JM",
//          "KI",
//          "LS",
//          "LR",
//          "MW",
//          "MV",
//          "ML",
//          "MH",
//          "FM",
//          "NA",
//          "NR",
//          "NE",
//          "PW",
//          "PG",
//          "WS",
//          "SM",
//          "ST",
//          "SN",
//          "SC",
//          "SL",
//          "SB",
//          "KN",
//          "LC",
//          "VC",
//          "SR",
//          "TL",
//          "TO",
//          "TT",
//          "TV",
//          "VU",
//          "AZ",
//          "BN",
//          "BI",
//          "KH",
//          "CM",
//          "TD",
//          "KM",
//          "GQ",
//          "SZ",
//          "GA",
//          "GN",
//          "KG",
//          "LA",
//          "MO",
//          "MR",
//          "MN",
//          "NP",
//          "RW",
//          "TG",
//          "UZ",
//          "ZW",
//          "BJ",
//          "MG",
//          "MU",
//          "MZ",
//          "AO",
//          "CI",
//          "DJ",
//          "ZM",
//          "CD",
//          "CG",
//          "IQ",
//          "LY",
//          "TJ",
//          "VE",
//          "ET",
//          "XK"
//        ],
//        "external_urls": {
//          "spotify": "https://open.spotify.com/album/2B9amdrHDIKOoEiPUfZGtb"
//        },
//        "href": "https://api.spotify.com/v1/albums/2B9amdrHDIKOoEiPUfZGtb",
//        "id": "2B9amdrHDIKOoEiPUfZGtb",
//        "images": [
//          {
//            "height": 640,
//            "url": "https://i.scdn.co/image/ab67616d0000b2736b0b6e20fdb1ee07de7e92d6",
//            "width": 640
//          },
//          {
//            "height": 300,
//            "url": "https://i.scdn.co/image/ab67616d00001e026b0b6e20fdb1ee07de7e92d6",
//            "width": 300
//          },
//          {
//            "height": 64,
//            "url": "https://i.scdn.co/image/ab67616d000048516b0b6e20fdb1ee07de7e92d6",
//            "width": 64
//          }
//        ],
//        "name": "yes, and?",
//        "release_date": "2024-01-12",
//        "release_date_precision": "day",
//        "total_tracks": 1,
//        "type": "album",
//        "uri": "spotify:album:2B9amdrHDIKOoEiPUfZGtb"
//      },
//    ]


  return (
    <div className='MusicWindow h-82% pl-10 pr-10 pt-3.5 pb-3'>
      <MusicWindowGenreFilter />
      <div className='MusicWindowTitle text-xl font-semibold text-[#BFBFBF] mt-3.5'>
      New Releases
      </div>
      <div className="mt-3.5">
      <Carousel>
        <CarouselContent className="flex justify-start ">
          {albums.map((album) => (
            <CarouselItem key={album.id} className="basis-1/5">
              <MusicWindowAlbumCard album={album} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  )
}

export default MusicWindow
