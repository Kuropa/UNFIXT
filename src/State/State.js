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

let state = {
    NewRelease: [
        {
            img: newCover,
            title: 'Wonderland',
            Spotify: 'spotify:artist:65gqGF50z1RJWQmgVU0nEp',
            AppleMusic: 'https://music.apple.com/ru/artist/unfixt/1505885622',
            YouTube: 'https://www.youtube.com/embed/ZYk1Htp0TFQ',
        }
    ],
    Music: [
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
            img: youtube,
            title: 'YouTube',
            href: 'https://www.youtube.com/channel/UCBz7dDysICz71qlxM0Da0NQ'
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
    ]

}

export  default state