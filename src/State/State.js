// Текст
import {i18n} from "../lib/i18n/i18n";
// Иконки
import youtube from '../Components/Media/Icon/youtube.svg';
import soundcloud from '../Components/Media/Icon/SC.svg';
import spotify from '../Components/Media/Icon/spotify.svg';
import instagram from '../Components/Media/Icon/instagram.svg';
import vk from '../Components/Media/Icon/vk.svg';
import facebook from '../Components/Media/Icon/fb.svg';
// Мокап диска с новым релизом
import newCover from '../Components/Media/Img/Disk.png';
// Авторская музыка обложки
import Ehe from '../Components/Media/Cover/Paimon Bass House_mini.png'
import Wonderland from '../Components/Media/Cover/wonderland_mini.png';
import TimeMachine from '../Components/Media/Cover/Time_Machine_mini.png';
import FullControl from '../Components/Media/Cover/full_control_mini.png';
import Negative from '../Components/Media/Cover/negative_mini.png'
import Fluid from '../Components/Media/Cover/FLUID_mini.png';
import KDA from '../Components/Media/Cover/KDA_mini.png';
// Отзывы
import JONY from '../Components/Media/Reviews/jony-yaroslavl.jpg';
// Аудио для АВ сравнения
import abbefore from '../Components/Audio/vtbefore.mp3';
import abafter from '../Components/Audio/vtafter.mp3';
// Примеры работ
import audio1 from '../Components/ExamplesAudio/ANKO переработка аранжировки, сведение мастеринг.wav';
import audio2 from '../Components/ExamplesAudio/Masha song II intro v3.wav';
import audio3 from '../Components/ExamplesAudio/стоныпожилойсобаки Зарисовка местности.wav';
import audio4 from '../Components/ExamplesAudio/Random beat 13 flang.mp3';
import audio5 from '../Components/ExamplesAudio/Random beat 14 orchestral.wav';
import audio6 from '../Components/ExamplesAudio/World music untag.wav';
import audio7 from '../Components/ExamplesAudio/Аранжировка на заказ.wav';


let state = {
    NewRelease: [
        {
            img: newCover,
            title: 'Ehe Te Nandayo',
            Spotify: 'spotify:artist:65gqGF50z1RJWQmgVU0nEp',
            AppleMusic: 'https://music.apple.com/ru/artist/unfixt/1505885622',
            YouTube: 'https://www.youtube.com/embed/LyNjEyC-YN4',
        }
    ],
    Music: [
        {
            title: 'Ehe Te Nandayo',
            href: 'https://www.youtube.com/embed/LyNjEyC-YN4',
            img: Ehe,
            genre: 'Bass House',
        },
        {
            title: 'Wonderland',
            href: 'https://www.youtube.com/embed/ZYk1Htp0TFQ',
            img: Wonderland,
            genre: 'Glitch',
        },
        {
            title: 'Pop Stars',
            href: 'https://www.youtube.com/embed/CVuf9AopB3o',
            img: KDA,
            genre: 'Dubstep',
        },
        {
            title: 'Full Control',
            href: 'https://www.youtube.com/embed/Q5Yodbnr_B0',
            img: FullControl,
            genre: 'Future Base',
        },
        {
            title: 'Negative',
            href: 'https://www.youtube.com/embed/YYILArR0RnU',
            img: Negative,
            genre: 'Retrowave',
        },
        {
            title: 'Fluid',
            href: 'https://www.youtube.com/embed/vUXUJRljfGM',
            img: Fluid,
            genre: 'Liquid Drum and Bass',
        },

        {
            title: 'Time Machine',
            href: 'https://www.youtube.com/embed/OqUpUYq_YOU',
            img: TimeMachine,
            genre: 'Synthwave',
        },
    ],
    Reviews: [
        {
            reviewer: 'JONY',
            review: i18n.text("reviews/review"),
            img: JONY,
        }
    ],
    Socials: [
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
    Audio: [
        {
            before: abbefore,
            after: abafter
        }
    ],
    Examples: [
        [
            'ANKO - переработка аранжировки, сведение мастеринг',
            audio1
        ],
        [
            'MASHA - song',
            audio2
        ],
        [
            'стоныпожилойсобаки - Зарисовка местности',
            audio3
        ],
        [
            'unfixt prod. - measure',
            audio4
        ],
        [
            'unfixt prod. found',
            audio5
        ],
        [
            'unfixt prod. - World music',
            audio6
        ],
        [
            'Аранжировка на заказ',
            audio7
        ],
    ]
}

export default state