/* tslint:disable */
/* eslint-disable */
/**
 * ZOOT Plus Backend API
 * ZOOT Plus Backend API
 *
 * The version of the OpenAPI document: v2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { SubCommentsInfo } from './SubCommentsInfo';
import {
    SubCommentsInfoFromJSON,
    SubCommentsInfoFromJSONTyped,
    SubCommentsInfoToJSON,
    SubCommentsInfoToJSONTyped,
} from './SubCommentsInfo';

/**
 * 
 * @export
 * @interface CommentsInfo
 */
export interface CommentsInfo {
    /**
     * 
     * @type {string}
     * @memberof CommentsInfo
     */
    commentId: string;
    /**
     * 
     * @type {string}
     * @memberof CommentsInfo
     */
    uploader: string;
    /**
     * 
     * @type {string}
     * @memberof CommentsInfo
     */
    uploaderId: string;
    /**
     * 
     * @type {string}
     * @memberof CommentsInfo
     */
    message: string;
    /**
     * 
     * @type {Date}
     * @memberof CommentsInfo
     */
    uploadTime: Date;
    /**
     * 
     * @type {number}
     * @memberof CommentsInfo
     */
    like: number;
    /**
     * 
     * @type {number}
     * @memberof CommentsInfo
     */
    dislike: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommentsInfo
     */
    topping: boolean;
    /**
     * 
     * @type {Array<SubCommentsInfo>}
     * @memberof CommentsInfo
     */
    subCommentsInfos: Array<SubCommentsInfo>;
}

/**
 * Check if a given object implements the CommentsInfo interface.
 */
export function instanceOfCommentsInfo(value: object): value is CommentsInfo {
    if (!('commentId' in value) || value['commentId'] === undefined) return false;
    if (!('uploader' in value) || value['uploader'] === undefined) return false;
    if (!('uploaderId' in value) || value['uploaderId'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('uploadTime' in value) || value['uploadTime'] === undefined) return false;
    if (!('like' in value) || value['like'] === undefined) return false;
    if (!('dislike' in value) || value['dislike'] === undefined) return false;
    if (!('topping' in value) || value['topping'] === undefined) return false;
    if (!('subCommentsInfos' in value) || value['subCommentsInfos'] === undefined) return false;
    return true;
}

export function CommentsInfoFromJSON(json: any): CommentsInfo {
    return CommentsInfoFromJSONTyped(json, false);
}

export function CommentsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'commentId': json['comment_id'],
        'uploader': json['uploader'],
        'uploaderId': json['uploader_id'],
        'message': json['message'],
        'uploadTime': (new Date(json['upload_time'])),
        'like': json['like'],
        'dislike': json['dislike'],
        'topping': json['topping'],
        'subCommentsInfos': ((json['sub_comments_infos'] as Array<any>).map(SubCommentsInfoFromJSON)),
    };
}

export function CommentsInfoToJSON(json: any): CommentsInfo {
    return CommentsInfoToJSONTyped(json, false);
}

export function CommentsInfoToJSONTyped(value?: CommentsInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'comment_id': value['commentId'],
        'uploader': value['uploader'],
        'uploader_id': value['uploaderId'],
        'message': value['message'],
        'upload_time': ((value['uploadTime']).toISOString()),
        'like': value['like'],
        'dislike': value['dislike'],
        'topping': value['topping'],
        'sub_comments_infos': ((value['subCommentsInfos'] as Array<any>).map(SubCommentsInfoToJSON)),
    };
}

