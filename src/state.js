// Текст
import { i18n } from "./lib/i18n/i18n";
// Иконки
import telegram from './Components/Media/Icon/telega.svg'
import youtube from './Components/Media/Icon/youtube.svg';
import soundcloud from './Components/Media/Icon/SC.svg';
import spotify from './Components/Media/Icon/spotify.svg';
import instagram from './Components/Media/Icon/instagram.svg';
import vk from './Components/Media/Icon/vk.svg';
import facebook from './Components/Media/Icon/fb.svg';
// Мокап диска с новым релизом
import newCover from './Components/Media/Img/Disk-min.png';
// Авторская музыка обложки
import Imitating from './Components/Media/Cover/Imitating_a_crow.jpeg';
import Solaris from './Components/Media/Cover/solaris-mini.png';
import Ehe from './Components/Media/Cover/Paimon Bass House_mini-min.png';
import Wonderland from './Components/Media/Cover/wonderland_mini-min.png';
import TimeMachine from './Components/Media/Cover/Time_Machine_mini-min.png';
import FullControl from './Components/Media/Cover/full_control_mini-min.png';
import Negative from './Components/Media/Cover/negative_mini-min.png'
import Fluid from './Components/Media/Cover/FLUID_mini-min.png';
import KDA from './Components/Media/Cover/KDA_mini-min.png';
// Отзывы
import JONY from './Components/Media/Reviews/jony-yaroslavl.jpg';
// Заглушки для видео
import videoJony from './Components/Media/Img/jony-min.jpg';
import videoZastavka from './Components/Media/Img/videorolik-min.png';
import videoConcert from './Components/Media/Img/consert-min.png';
// Сравнение
import before from './Components/Media/Test-Audio/before.mp3';
import after from './Components/Media/Test-Audio/after.mp3';

let state = {
    newRelease: [
        {
            img: newCover,
            title: 'Imitating a crow',
            Spotify: 'spotify:artist:65gqGF50z1RJWQmgVU0nEp',
            AppleMusic: 'https://music.apple.com/ru/artist/unfixt/1505885622',
            YouTube: 'https://www.youtube.com/watch?v=IkAxqEOl_vM',
        }
    ],
    music: [
        {
            title: 'Imitating a crow',
            href: 'https://www.youtube.com/watch?v=IkAxqEOl_vM',
            img: Imitating,
            genre: 'Neurofunk\\Drum and Bass',
        },
        {
            title: 'SOLARIS',
            href: 'https://www.youtube.com/watch?v=NkImTzez8bE',
            img: Solaris,
            genre: 'Electronic\\Experimental',
        },
        {
            title: 'Ehe Te Nandayo',
            href: 'https://www.youtube.com/watch?v=LyNjEyC-YN4',
            img: Ehe,
            genre: 'Bass House',
        },
        {
            title: 'Wonderland',
            href: 'https://www.youtube.com/watch?v=ZYk1Htp0TFQ',
            img: Wonderland,
            genre: 'Glitch',
        },
        {
            title: 'Pop Stars',
            href: 'https://www.youtube.com/watch?v=CVuf9AopB3o',
            img: KDA,
            genre: 'Dubstep',
        },
        {
            title: 'Full Control',
            href: 'https://www.youtube.com/watch?v=Q5Yodbnr_B0',
            img: FullControl,
            genre: 'Future Base',
        },
        {
            title: 'Negative',
            href: 'https://www.youtube.com/watch?v=YYILArR0RnU',
            img: Negative,
            genre: 'Retrowave',
        },
        {
            title: 'Fluid',
            href: 'https://www.youtube.com/watch?v=vUXUJRljfGM',
            img: Fluid,
            genre: 'Liquid Drum and Bass',
        },
        {
            title: 'Time Machine',
            href: 'https://www.youtube.com/watch?v=OqUpUYq_YOU',
            img: TimeMachine,
            genre: 'Synthwave',
        },
    ],
    reviews: [
        {
            reviewer: 'JONY',
            review: i18n.text("reviews/review"),
            img: JONY,
        }
    ],
    socials: [
        {
            img: telegram,
            title: 'Telegram',
            href: 'https://tlgg.ru/@DDsch'
        },
        {
            img: youtube,
            title: 'YouTube',
            href: 'https://www.youtube.com/channel/UCBz7dDysICz71qlxM0Da0NQ'
        },
        {
            img: soundcloud,
            title: 'SoundCloud',
            href: 'https://soundcloud.com/unfixt'
        },
        {
            img: spotify,
            title: 'Spotify',
            href: 'spotify:artist:65gqGF50z1RJWQmgVU0nEp'
        },
        {
            img: instagram,
            title: 'Instagram',
            href: 'https://www.instagram.com/unfixtmusic/'
        },
        {
            img: vk,
            title: 'VK',
            href: 'https://vk.com/unfixt'
        },
        {
            img: facebook,
            title: 'FaceBook',
            href: 'https://www.facebook.com/nikita.levanov.7'
        },
    ],
    examples: [
        [
            i18n.text("track/1"),
            'http://unfixt.ru/static/music/masha.mp3'
        ],
        [
            i18n.text("track/1"),
            'http://unfixt.ru/static/music/masha.mp3'
        ],
        [
            i18n.text("track/12"),
            'http://unfixt.ru/static/music/Miras.mp3'
        ],
        [
            i18n.text("track/11"),
            'http://unfixt.ru/static/music/popushoy.mp3'
        ],
        [
            i18n.text("track/10"),
            'http://unfixt.ru/static/music/teplo.mp3'
        ],
        [
            i18n.text("track/2"),
            'http://unfixt.ru/static/music/sobaka.mp3'
        ],
        [
            i18n.text("track/3"),
            'http://unfixt.ru/static/music/hate.mp3'
        ],
        [
            i18n.text("track/4"),
            'http://unfixt.ru/static/music/mike-mike.mp3'
        ],
        [
            i18n.text("track/5"),
            'http://unfixt.ru/static/music/anko.mp3'
        ],
        [
            i18n.text("track/6"),
            'http://unfixt.ru/static/music/measure.mp3'
        ],
        [
            i18n.text("track/7"),
            'http://unfixt.ru/static/music/found.mp3'
        ],
        [
            i18n.text("track/8"),
            'http://unfixt.ru/static/music/world-music.mp3'
        ],
        [
            i18n.text("track/9"),
            'http://unfixt.ru/static/music/anapa.mp3'
        ],
    ],
    examplesVideo: [
        {
            video: "https://www.youtube.com/embed/dPVm3B3xZYo?autoplay=1",
            img: videoJony,
            title: i18n.text("video/1/title"),
            subtitle: i18n.text("video/1/subtitle")
        },
        {
            video: "https://www.youtube.com/embed/vbJ7EBTtH3Q?autoplay=1",
            img: videoConcert,
            title: i18n.text("video/2/title"),
            subtitle: i18n.text("video/2/subtitle")
        },
        {
            video: "https://www.youtube.com/embed/OjXPZb5-bKM?autoplay=1",
            img: videoZastavka,
            title: i18n.text("video/3/title"),
            subtitle: i18n.text("video/3/subtitle")
        },
    ],
    prices: [
        {
            serviceType: i18n.text("prices/1/title"),
            servicePrice: i18n.text("prices/1/price"),
            serviceFormat: i18n.text("prices/1/format"),
            serviceDescription: i18n.text("prices/1/description"),

        },
        {
            serviceType: i18n.text("prices/2/title"),
            servicePrice: i18n.text("prices/2/price"),
            serviceFormat: i18n.text("prices/2/format"),
            serviceDescription: i18n.text("prices/2/description"),
        },
        {
            serviceType: i18n.text("prices/3/title"),
            servicePrice: i18n.text("prices/3/price"),
            serviceFormat: i18n.text("prices/3/format"),
            serviceDescription: i18n.text("prices/3/description"),
        },
        {
            serviceType: i18n.text("prices/4/title"),
            servicePrice: i18n.text("prices/4/price"),
            serviceFormat: i18n.text("prices/4/format"),
            serviceDescription: i18n.text("prices/4/description"),
        },
        {
            serviceType: i18n.text("prices/5/title"),
            servicePrice: i18n.text("prices/5/price"),
            serviceFormat: i18n.text("prices/5/format"),
            serviceDescription: i18n.text("prices/5/description"),
        },
        {
            serviceType: i18n.text("prices/6/title"),
            servicePrice: i18n.text("prices/6/price"),
            serviceFormat: i18n.text("prices/6/format"),
            serviceDescription: i18n.text("prices/6/description"),
        },
        {
            serviceType: i18n.text("prices/7/title"),
            servicePrice: i18n.text("prices/7/price"),
            serviceFormat: i18n.text("prices/7/format"),
            serviceDescription: i18n.text("prices/7/description"),
        },
        {
            serviceType: i18n.text("prices/8/title"),
            servicePrice: i18n.text("prices/8/price"),
            serviceFormat: i18n.text("prices/8/format"),
            serviceDescription: i18n.text("prices/8/description"),
        },
        {
            serviceType: i18n.text("prices/9/title"),
            servicePrice: i18n.text("prices/9/price"),
            serviceFormat: i18n.text("prices/9/format"),
            serviceDescription: i18n.text("prices/9/description"),
        },
    ],
    audio: [
        {
            before: before,
            after: after
        },
    ]
}

export default state