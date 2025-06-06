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
/**
 * 
 * @export
 * @interface MaaResultLong
 */
export interface MaaResultLong {
    /**
     * 
     * @type {number}
     * @memberof MaaResultLong
     */
    statusCode: number;
    /**
     * 
     * @type {string}
     * @memberof MaaResultLong
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MaaResultLong
     */
    data?: number;
}

/**
 * Check if a given object implements the MaaResultLong interface.
 */
export function instanceOfMaaResultLong(value: object): value is MaaResultLong {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function MaaResultLongFromJSON(json: any): MaaResultLong {
    return MaaResultLongFromJSONTyped(json, false);
}

export function MaaResultLongFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaaResultLong {
    if (json == null) {
        return json;
    }
    return {
        
        'statusCode': json['status_code'],
        'message': json['message'] == null ? undefined : json['message'],
        'data': json['data'] == null ? undefined : json['data'],
    };
}

export function MaaResultLongToJSON(json: any): MaaResultLong {
    return MaaResultLongToJSONTyped(json, false);
}

export function MaaResultLongToJSONTyped(value?: MaaResultLong | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status_code': value['statusCode'],
        'message': value['message'],
        'data': value['data'],
    };
}

