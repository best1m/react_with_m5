import axios from 'axios';
import {m5config} from '../development';
import mUrlService from './mUrlService';
import mAttachmentService from './mAttachmentService'


const mPostAPI ={};

mPostAPI.getPostList = function (boardId, type, params) {

    if (params == null) {
        params = [];
    }
    params['type'] = type;

    if (params['andFields'] != null) {
        params['andFields'] = JSON.stringify(params['andFields']);
    }
    var url = mUrlService.make(m5config.urls.boards + '/' + boardId + '/posts', params);
    console.log(url);

    var data = axios({
        method: 'get',
        url: url,
        headers: m5config.httpHeaders
      
      })
      .then(function (response) {
        return response.data;

      })
      .catch(function (error) {
      });
    

    
    // $http({
    //     url: url,
    //     method: "GET",
    //     cache: cacheService.getCache('post'),
    //     headers: m5config.httpHeaders
    // }).then(
    //     function (response) {
    //         response = response.data;
    //         console.log('S', response);
           
    //     }, function (error) {


    //     }
    // );

    return data;
};



mPostAPI.getImageSrc = function (post, type, size, params) {
    if (post === null) {
        return;
    }

    var attachment = mAttachmentService.find(post.attachments, type);
   
    if (attachment == null) {
        if (post.attachments === undefined || post.attachments.length === 0) {
            return null;
        }
        attachment = post.attachments[0];
    }
    if (params == null) {
        params = [];
    }
    params['type'] = type;
    params['size'] = size;
    if (post.id.indexOf('SVCCategory') === 0) {
        return mUrlService.make(m5config.urls.categories + '/' + post.id + '/attachments/' + attachment.guid, params);
    }
    var url = mUrlService.make(m5config.urls.posts + '/' + post.id + '/attachments/' + attachment.guid, params);
    return url;
};



export default mPostAPI;