
let mUrlService = {};

mUrlService.make = function (url, params) {
    let out = [];
    if (params == null) {
        params = [];
    }
    params['accessToken'] = localStorage['accessToken'];
    if (params != null) {

        if (params instanceof Array) {
            let key;
            for (key in params) {
                if (params[key] != null) {
                    if (key === 'accessToken') {
                        out.push(key + '=' + params[key]);
                    } else if (key === 'clearCache') {} else {
                        out.push(key + '=' + encodeURIComponent(params[key]));
                    }
                }
            }
        } else {
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    if (params[key] != null) {
                        if (key === 'accessToken') {
                            out.push(key + '=' + params[key]);
                        } else if (key !== 'clearCache') {
                            out.push(key + '=' + encodeURIComponent(params[key]));
                        }
                    }
                }
            }
        }
    }
   
    return url;
};


export default mUrlService;
