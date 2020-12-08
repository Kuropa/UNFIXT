// Текст
import {i18n} from "./lib/i18n/i18n";
// Иконки
import youtube from './Components/Media/Icon/youtube.svg';
import soundcloud from './Components/Media/Icon/SC.svg';
import spotify from './Components/Media/Icon/spotify.svg';
import instagram from './Components/Media/Icon/instagram.svg';
import vk from './Components/Media/Icon/vk.svg';
import facebook from './Components/Media/Icon/fb.svg';
// Мокап диска с новым релизом
import newCover from './Components/Media/Img/Disk-min.png';
// Авторская музыка обложки
import Ehe from './Components/Media/Cover/Paimon Bass House_mini-min.png'
import Wonderland from './Components/Media/Cover/wonderland_mini-min.png';
import TimeMachine from './Components/Media/Cover/Time_Machine_mini-min.png';
import FullControl from './Components/Media/Cover/full_control_mini-min.png';
import Negative from './Components/Media/Cover/negative_mini-min.png'
import Fluid from './Components/Media/Cover/FLUID_mini-min.png';
import KDA from './Components/Media/Cover/KDA_mini-min.png';
// Отзывы
import JONY from './Components/Media/Reviews/jony-yaroslavl.jpg';
// Заглушки для видео
import videoJony from './Components/Media/Img/jony-min.jpeg';
import videoZastavka from './Components/Media/Img/videorolik-min.jpeg';
import videoConcert from './Components/Media/Img/consert-min.jpeg';

let state = {
    newRelease: [
        {
            img: newCover,
            title: 'Ehe Te Nandayo',
            Spotify: 'spotify:artist:65gqGF50z1RJWQmgVU0nEp',
            AppleMusic: 'https://music.apple.com/ru/artist/unfixt/1505885622',
            YouTube: 'https://www.youtube.com/embed/LyNjEyC-YN4',
        }
    ],
    music: [
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
            'Песня под ключ (АРАНЖИРОВКА, ЗАПИСЬ\\ТЮНИНГ ВОКАЛА, СВЕДЕНИЕ, МАСТЕРИНГ)',
            'http://unfixt.ru/static/music/masha.mp3'
        ],
        [
            'стоныпожилойсобаки — Зарисовка местности (СВЕДЕНИЕ, ОБРАБОТКА ВОКАЛА, МАСТЕРИНГ)',
            'http://unfixt.ru/static/music/sobaka.mp3'
        ],
        [
            'Аранжировка под референс заказчика',
            'http://unfixt.ru/static/music/hate.mp3'
        ],
        [
            'Создание аранжировки на основе гитарной партии заказчика',
            'http://unfixt.ru/static/music/mike-mike.mp3'
        ],
        [
            'Саунд продюссирование (ПЕРЕРАБОТКА АРАНЖИРОВКИ КЛИЕНТА, СВЕДЕНИЕ, МАСТЕРИНГ)',
            'http://unfixt.ru/static/music/anko.mp3'
        ],
        [
            'unfixt prod. — measure (АРАНЖИРОВКА\\БИТ НА ЗАКАЗ)',
            'http://unfixt.ru/static/music/measure.mp3'
        ],
        [
            'unfixt prod. — found (АРАНЖИРОВКА\\БИТ НА ЗАКАЗ)',
            'http://unfixt.ru/static/music/found.mp3'
        ],
        [
            'unfixt prod. — World music (АРАНЖИРОВКА\\БИТ НА ЗАКАЗ)',
            'http://unfixt.ru/static/music/world-music.mp3'
        ],
        [
            'Mutafrukt — Anapa-house (МАСТЕРИНГ)',
            'http://unfixt.ru/static/music/anapa.mp3'
        ],
    ],
    examplesVideo: [
        {
            video: "https://www.youtube.com/embed/dPVm3B3xZYo?autoplay=1",
            img: videoJony,
            title: "Саунд дизайн для JONY"
        },
        {
            video: "https://www.youtube.com/embed/vbJ7EBTtH3Q?autoplay=1",
            img: videoConcert,
            title: "Сведение живого концерта"
        },
        {
            video: "https://www.youtube.com/embed/OjXPZb5-bKM?autoplay=1",
            img: videoZastavka,
            title: "Саунд дизайн для видеоролика"
        },
    ]
}

export default state
