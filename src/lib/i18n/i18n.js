import RU from './dicts/ru.json';
import EN from './dicts/en.json';

export class _i18n {
    constructor() {
        this.lang = localStorage.getItem('lang') === 'EN' ? EN : RU;
    }
    text(key) {
        return this.lang[key];
    }
}

export const i18n = new _i18n();
