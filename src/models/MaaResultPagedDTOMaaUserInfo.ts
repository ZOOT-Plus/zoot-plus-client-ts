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
import type { PagedDTOMaaUserInfo } from './PagedDTOMaaUserInfo';
import {
    PagedDTOMaaUserInfoFromJSON,
    PagedDTOMaaUserInfoFromJSONTyped,
    PagedDTOMaaUserInfoToJSON,
    PagedDTOMaaUserInfoToJSONTyped,
} from './PagedDTOMaaUserInfo';

/**
 * 
 * @export
 * @interface MaaResultPagedDTOMaaUserInfo
 */
export interface MaaResultPagedDTOMaaUserInfo {
    /**
     * 
     * @type {number}
     * @memberof MaaResultPagedDTOMaaUserInfo
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultPagedDTOMaaUserInfo
     */
    message?: string;
    /**
     * 
     * @type {PagedDTOMaaUserInfo}
     * @memberof MaaResultPagedDTOMaaUserInfo
     */
    data?: PagedDTOMaaUserInfo;
}

/**
 * Check if a given object implements the MaaResultPagedDTOMaaUserInfo interface.
 */
export function instanceOfMaaResultPagedDTOMaaUserInfo(value: object): value is MaaResultPagedDTOMaaUserInfo {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function MaaResultPagedDTOMaaUserInfoFromJSON(json: any): MaaResultPagedDTOMaaUserInfo {
    return MaaResultPagedDTOMaaUserInfoFromJSONTyped(json, false);
}

export function MaaResultPagedDTOMaaUserInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultPagedDTOMaaUserInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : PagedDTOMaaUserInfoFromJSON(json['data']),
    };
}

export function MaaResultPagedDTOMaaUserInfoToJSON(json: any): MaaResultPagedDTOMaaUserInfo {
    return MaaResultPagedDTOMaaUserInfoToJSONTyped(json, false);
}

export function MaaResultPagedDTOMaaUserInfoToJSONTyped(value?: MaaResultPagedDTOMaaUserInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status_code': value['statusCode'],
        'message': value['message'],
        'data': PagedDTOMaaUserInfoToJSON(value['data']),
    };
}

