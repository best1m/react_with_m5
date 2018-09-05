
    let mLangService = {};

    let options = {
        "langs": [],
        "currencies": [],
        "dictionary": {}
    };

    mLangService.isCurrent = function (lang) {
        return (lang === mLangService.current());
    };

    mLangService.addDictionary = function (text, language) {
        if (options.dictionary[text] == null) {
            options.dictionary[text] = {};
        }
        options.dictionary[text][language] = '${}';
        localStorage['dictionary'] = options.dictionary;
    };

    mLangService.getBrowserLanguage = function () {
        let lang = window.navigator.languages ? window.navigator.languages[0] : null;
        lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (lang.indexOf('-') !== -1)
            lang = lang.split('-')[0];

        if (lang.indexOf('_') !== -1)
            lang = lang.split('_')[0];
        return lang;
    };


    mLangService.getCurrency = function () {
        let currency = localStorage['currency'];
        if (currency == null) {
            let langs = mLangService.getLangs();
            let currencies = mLangService.getCurrencies();
            for (let index in langs) {
                if (langs[index] === mLangService.current()) {
                    currency = localStorage['currency'] = currencies[index];
                    break;
                }
            }

        }
        return currency;
    };
    mLangService.getCurrencies = function () {
        return options.currencies;
    };
    mLangService.getLangs = function () {
        return options.langs;
    };
    mLangService.getDictionary = function () {
        return options.dictionary;
    };
    mLangService.reset = function () {
        localStorage['language'] = undefined;
    };
    mLangService.set = function (language) {
        localStorage['language'] = language;

    };


    mLangService.current = function () {
        let lang = localStorage['language'];
        if (lang === null) {
            lang = mLangService.getBrowserLanguage();
            if (options.langs.indexOf(lang) < 0) {
                lang = options.langs[0];
            }
        }
        return lang;
    };


    mLangService.makeJson = function (text) {

        let json = {};
        if (text != null) {
            mLangService.getLangs().forEach(function (lang) {
                json[lang] = text;
            });
        }
        return json;
    };



    mLangService.toJson = function (text) {
        try {
            if (typeof text === 'object') {
                return text;
            }
            return JSON.parse(text);
        }
        catch (e) {
            return {'kr': text};
        }
    };
    mLangService.toString = function (text) {
        try {
            if (typeof text === 'object') {
                console.log('mLangService1', text);
                return JSON.stringify(text);
            }
            //console.log('mLangService2', text);
            return text;
        }
        catch (e) {
            console.log('mLangService3', text, e);
            return text;
        }
    };


export default mLangService

