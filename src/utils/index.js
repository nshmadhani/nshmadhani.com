// @flow

const trimDescription = (description) => {
    const length = 100 - 3;//3 for the dots
    if(description.length < length) {
        return description;
    }
    return description.substring(0,length+1) + "...";
}

export  { trimDescription }  ;
export { default as getIcon } from './get-icon';
export { default as getContactHref } from './get-contact-href';
