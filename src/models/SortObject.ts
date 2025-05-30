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
 * @interface SortObject
 */
export interface SortObject {
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    sorted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    unsorted?: boolean;
}

/**
 * Check if a given object implements the SortObject interface.
 */
export function instanceOfSortObject(value: object): value is SortObject {
    return true;
}

export function SortObjectFromJSON(json: any): SortObject {
    return SortObjectFromJSONTyped(json, false);
}

export function SortObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortObject {
    if (json == null) {
        return json;
    }
    return {
        
        'sorted': json['sorted'] == null ? undefined : json['sorted'],
        'empty': json['empty'] == null ? undefined : json['empty'],
        'unsorted': json['unsorted'] == null ? undefined : json['unsorted'],
    };
}

export function SortObjectToJSON(json: any): SortObject {
    return SortObjectToJSONTyped(json, false);
}

export function SortObjectToJSONTyped(value?: SortObject | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sorted': value['sorted'],
        'empty': value['empty'],
        'unsorted': value['unsorted'],
    };
}

