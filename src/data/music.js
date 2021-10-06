var singers = [{
  id: 1,
  Name: "Ariana Grande",
  tags: ["pop", 'female'],
  imageUrl: "https://picsum.photos/400",
  contextURL:""
}, {
  id: 2,
  Name: "Troye Sivan",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 3,
  Name: "Powfu",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 4,
  Name: "beabadoobee",
  tags: ["pop", 'female'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 5,
  Name: "Billie Eilish",
  tags: ["pop", 'female'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 6,
  Name: "Pink Sweat$",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 7,
  Name: "Nathan Lewis",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 8,
  Name: "Khalid",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 9,
  Name: "kuzu mellow",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}, {
  id: 10,
  Name: "Camila Cabello",
  tags: ["pop", 'female'],
  imageUrl: "https://picsum.photos/500"
},{
  id: 13,
  Name: "Post Malone",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
},{
  id: 14,
  Name: "Young Thug",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
},{
  id: 15,
  Name: "Jasper Zheng",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
},{
  id: 16,
  Name: "NCT DREAM",
  tags: ["pop", 'group'],
  imageUrl: "https://picsum.photos/500"
},{
  id: 17,
  Name: "BLACKPINK",
  tags: ["pop", 'group'],
  imageUrl: "https://picsum.photos/500"
},{
  id:18,
  Name: "Lauv",
  tags: ["pop", 'male'],
  imageUrl: "https://picsum.photos/500"
}]


var songs = [
  {
    id: 11,
    title: 'Dance To This',
    singer: 2,
    tags: ['pop', 'english'],
    album: "Bloom",
    fileUrl: "music/test/Troye Sivan _ Ariana Grande - Dance To This.mp3",
    imageUrl: "https://picsum.photos/500"
  }, {
    id: 12,
    title: 'Quit',
    singer: 1,
    tags: ['Electronica', 'english'],
    album: "9",
    qqUrl: "https://.....",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"
  }, {
    id: 13,
    title: 'thank u, next',
    singer: 1,
    tags: ['pop', 'english'],
    album: "thank u, next",
    qqUrl: "https://.....",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"
  }, {
    id: 14,
    title: 'Blue',
    singer: 2,
    tags: ['pop', 'english'],
    album: "Blue Neighbourhood(Deluxe)",
    qqUrl: "https://.....",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"
  }, {
    id: 15,
    title: 'Postcard(Explicit)',
    singer: 2,
    tags: ['pop', 'english'],
    album: "Bloom",
    qqUrl: "https://.....",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"
  }, {
    id: 16,
    title: 'Seventeen',
    singer: 2,
    tags: ['pop', 'english'],
    album: "Bloom",
    qqUrl: "https://.....",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"
  }, {
    id: 17,
    title: 'Paris in the Rain(remix)',
    singer: 2,
    tags: ['pop', 'english'],
    album: "Bloom",
    qqUrl: "https://.....",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"
  }, {

    id: 18,
    title: 'Go',
    singer: 2,
    tags: ['pop', 'english'],
    album: "Bloom",
    imageUrl: "image/deathbed.jpg",
    fileUrl: "music/test/The Kid LAROI _ Juice WRLD - GO (Explicit).mp3"

  }
]

var specialRecommendation = [
  {
    id: 21,
    title: 'death bed',
    singer: [3, 4],
    tags: ['RAP', 'HIP POP', 'English'],
    album: "death bed",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/deathbed.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Powfu_beabadoobee-deathbed.mp3"

  }, {
    id: 22,
    title: 'hotline bing',
    singer: [5],
    tags: ['POP', 'English'],
    album: "hotline bling",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/hotlinebling.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Billie Eilish - hotline bling.mp3"

  }, {
    id: 23,
    title: 'Heaven',
    singer: [6],
    tags: ['R&B', 'English'],
    album: "PINK PLANET",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/heaven.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Pink Sweat$ - Heaven.mp3"

  }, {
    id: 24,
    title: 'met at a party',
    singer: [3, 9],
    tags: ['POP', 'English'],
    album: "met at a party",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/metataparty.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Powfu _ Kuzu mellow - met at a party.mp3"

  }, {
    id: 25,
    title: 'Better',
    singer: [8],
    tags: ['R&B', 'SOUL', 'English'],
    album: "Better",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/better.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Khalid - Better (Explicit).mp3"

  }, {
    id: 26,
    title: 'Paris In The Rain(HYE SUNG Remix)',
    singer: [18],
    tags: ['POP', 'English'],
    album: "Paris In The Rain",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/parisintherain.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/HYE SUNG _ Lauv - Paris In The Rain (HYE SUNG Remix).mp3"
  }, {
    id: 27,
    title: 'Animal',
    singer: [2],
    tags: ['POP', 'English'],
    album: "Bloom",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/animal.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/troye/Troye Sivan - Animal.mp3"
  }, {
    id: 28,
    title: 'Consequence',
    singer: [10],
    tags: ['POP', 'English'],
    album: "Consequence(Orchestra)",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/consequence.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Camila Cabello - Consequences (Orchestra).mp3"
  }, {
    id: 29,
    title: 'Goodbye',
    singer: [13,14],
    tags: ['RAP', 'HIP POP', 'English'],
    album: "Goodbye",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/goodbye.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Post Malone _ Young Thug - Goodbyes (Explicit).mp3"
  }, {
    id: 210,
    title: 'Liability',
    singer: [15],
    tags: ['POP', 'English'],
    album: "Liability",
    imageUrl: "https://blobs.zhxi.co/students/iris/image/liability.jpg",
    fileUrl: "https://blobs.zhxi.co/students/iris/formal/Jasper Zheng - Liability.mp3"
  }

]

var singersAlbums = [{
  id: 31,
  title: 'Chewing Gum',
  singer: 16,
  tags: ['POP', 'Korean'],
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream1.jpg",
  detail:"2016-single"
},{
  id: 32,
  title: 'The First - The 1st Single Album',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream2.jpg",
  detail:"2017-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 33,
  title: 'We Young - The 1st Mini Album',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream3.jpg",
  detail:"2017-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 34,
  title: 'JOY-SM STATION',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream4.jpg",
  detail:"2017-single",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 35,
  title: 'We Go Up - The 2nd Mini Album',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream5.jpg",
  detail:"2018-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 36,
  title: 'Candle Light-SM STATION',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream6.jpg",
  detail:"2018-single",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 37,
  title: "Non't Need Your Love",
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream7.jpg",
  detail:"2019-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 38,
  title: 'Fireflies',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream8.jpg",
  detail:"2019-single",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 39,
  title: 'We Boom - The 3rd Single Album',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream9.jpg",
  detail:"2019-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 310,
  title: 'Reload',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream10.jpg",
  detail:"2020-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 311,
  title: 'Hot Sauce',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream11.jpg",
  detail:"2021-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 312,
  title: 'Helloe Future',
  singer: 16,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/nctdream12.jpg",
  detail:"2021-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
  id: 41,
  title: 'Yours Truly',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa1.jpg",
  detail:"2013-album",
  linkUrl: "https://open.spotify.com/album/5xSvNPstcxHtR4ap2vvN8A"
},{
id: 42,
  title: 'My Everything(Deluxe)',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa2.jpg",
  detail:"2014-album",
  linkUrl: "https://open.spotify.com/album/6EVYTRG1drKdO8OnIQBeEj"
},{
id: 43,
  title: 'Dangerous Woman',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa3.jpg",
  detail:"2016-album",
  linkUrl: "https://open.spotify.com/album/5X7x18kW3mVIvnuNeedM6b"
},{
id: 44,
  title: 'Christmas&Chill(Japan Version)',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa4.jpg",
  detail:"2016-album",
  linkUrl: "https://open.spotify.com/album/2A1KyqHu1DmLtjXpIMNoQq"
},{
  id: 45,
  title: 'Dance to this',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa5.jpg",
  detail:"2018-single",
  linkUrl: "music/formal/Jasper Zheng - Liability.mp3"
},{
  id: 46,
  title: 'Sweetner',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa6.jpg",
  detail:"2018-album",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
id: 47,
  title: 'thank u, next',
  singer: 1,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/aa9.jpg",
  detail:"2019-album",
  linkUrl: "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw"
},{
  id: 48,
    title: 'boyfirend',
    singer: 1,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/aa8.jpg",
    detail:"2019-single",
    linkUrl: "https://open.spotify.com/album/3zVB99XMdbP9HTVNg0GJwV"
},{
  id: 49,
    title: 'k bye for now(swt live)',
    singer: 1,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/aa9.jpg",
    detail:"2019-album",
    linkUrl: "https://open.spotify.com/album/5UACk85y1hNRSUtY0ss8pb"
},{
  id: 410,
    title: 'Stuck with U',
    singer: 1,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/aa10.jpg",
    detail:"2020-single",
    linkUrl: "https://open.spotify.com/album/5mUdh6YWnUvf0MfklEk1oi"
},{
  id: 411,
    title: '34+35(Remix)',
    singer: 1,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/aa11.jpg",
    detail:"2021-single",
    linkUrl: "https://open.spotify.com/album/11X2d5C6rFBFZZUOCJLPt9"
},{
  id: 412,
    title: 'Position(Deluxe)',
    singer: 1,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/aa12.jpg",
    detail:"2021-album",
    linkUrl: "https://open.spotify.com/album/3WSg3hc6uZ7AYZBvtsg2GU"
},{
  id: 51,
  title: 'TRXYE',
  singer: 2,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/tt1.jpg",
  detail:"2014-album",
  linkUrl: "https://open.spotify.com/album/5xSvNPstcxHtR4ap2vvN8A"
},{
id: 52,
  title: 'WILD',
  singer: 2,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/tt2.jpg",
  detail:"2015-album",
  linkUrl: "https://open.spotify.com/album/6EVYTRG1drKdO8OnIQBeEj"
},{
id: 53,
  title: 'Blue Neighbourhood(Deluxe)',
  singer: 2,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/tt3.jpg",
  detail:"2015-album",
  linkUrl: "https://open.spotify.com/album/5X7x18kW3mVIvnuNeedM6b"
},{
id: 54,
  title: 'There For You',
  singer: 2,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/tt4.jpg",
  detail:"2017-single",
  linkUrl: "https://open.spotify.com/album/2A1KyqHu1DmLtjXpIMNoQq"
},{
  id: 55,
  title: 'Dance to This',
  singer: 2,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/tt6.jpg",
  detail:"2018-single",
  linkUrl: "https://open.spotify.com/album/3tx8gQqWbGwqIGZHqDNrGe"
},{
id: 56,
  title: 'Bloom',
  singer: 2,
  imageUrl: "https://blobs.zhxi.co/students/iris/image/tt7.jpg",
  detail:"2018-album",
  linkUrl: "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw"
},{
  id: 57,
    title: '1999',
    singer: 2,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/tt8.jpg",
    detail:"2018-single",
    linkUrl: "https://open.spotify.com/album/3zVB99XMdbP9HTVNg0GJwV"
},{
  id: 58,
    title: "i'm so tired",
    singer: 2,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/tt10.jpg",
    detail:"2019-single",
    linkUrl: "https://open.spotify.com/album/5UACk85y1hNRSUtY0ss8pb"
},{
  id: 59,
    title: 'Love Me Wrong',
    singer: 2,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/tt11.jpg",
    detail:"2019-single",
    linkUrl: "https://open.spotify.com/album/5mUdh6YWnUvf0MfklEk1oi"
},{
  id: 510,
    title: 'In A Dream',
    singer: 2,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/tt12.jpg",
    detail:"2020-album",
    linkUrl: "https://open.spotify.com/album/11X2d5C6rFBFZZUOCJLPt9"
},{
  id: 511,
    title: 'could cry just thinkin about you',
    singer: 2,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/tt14.jpg",
    detail:"2021-single",
    linkUrl: "https://open.spotify.com/album/3WSg3hc6uZ7AYZBvtsg2GU"
},{
  id: 512,
    title: 'Angel Baby',
    singer: 2,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/tt15.jpg",
    detail:"2021-single",
    linkUrl: "https://open.spotify.com/album/3WSg3hc6uZ7AYZBvtsg2GU"
},{
  id: 61,
    title: 'SQUARE ONE',
    singer: 17,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/bbpp1.jpg",
    detail:"2016-album",
    linkUrl: "https://open.spotify.com/album/3WSg3hc6uZ7AYZBvtsg2GU"
},{
  id: 62,
    title: 'SQUARE TWO',
    singer: 17,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/bbpp2.jpg",
    detail:"2016-album",
    linkUrl: "https://open.spotify.com/album/3WSg3hc6uZ7AYZBvtsg2GU"
},{
  id: 63,
    title: "As if it's Your Last",
    singer: 17,
    imageUrl: "https://blobs.zhxi.co/students/iris/image/bbpp3.jpg",
    detail:"2016-album",
    linkUrl: "https://open.spotify.com/album/3WSg3hc6uZ7AYZBvtsg2GU"
}]

var TheBestOfTroyeSivan = [1234, 1235, 1236]


var exports = {
  songs: songs,
  bestList: TheBestOfTroyeSivan,
  singers: singers,
  specialRecommendation: specialRecommendation,
  singersAlbums:singersAlbums

}

export default exports