import mLangService from './mLangService'

let mAttachmentService = {};

mAttachmentService.find = function (attachments, type) {
    if(attachments === undefined){
        return null;
    }
  
    // if (attachments === null || attachments.length === 0) {
    //     return null;
    // }
    
    let foundExact = null;
    let foundType = null;
    let foundLang = null;
    let lang = '.' + mLangService.current();
    for (let a in attachments) {
        let attachment = attachments[a];
       //attachment.type null 체크 
        if(attachment.type != null){
            if (attachment.type.indexOf(type) === 0) {
        
                if (attachment.type.indexOf(lang) > 0) {
                    foundExact = attachment;
                }
                else {
                    foundType = attachment;
                }
            }
            if (attachment.type.indexOf(lang) > 0) {
                foundLang = attachment;
            }

        }
  
    }
    if (foundExact === null) {
        if (foundType === null) {
            if (foundLang === null) {
                return attachments[0];
            }
            return foundLang;
        }
        return foundType;
    }
    return foundExact;
};

export default mAttachmentService;