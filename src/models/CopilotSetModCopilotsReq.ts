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
 * @interface CopilotSetModCopilotsReq
 */
export interface CopilotSetModCopilotsReq {
    /**
     * 
     * @type {number}
     * @memberof CopilotSetModCopilotsReq
     */
    id: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof CopilotSetModCopilotsReq
     */
    copilotIds: Array<number>;
}

/**
 * Check if a given object implements the CopilotSetModCopilotsReq interface.
 */
export function instanceOfCopilotSetModCopilotsReq(value: object): value is CopilotSetModCopilotsReq {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('copilotIds' in value) || value['copilotIds'] === undefined) return false;
    return true;
}

export function CopilotSetModCopilotsReqFromJSON(json: any): CopilotSetModCopilotsReq {
    return CopilotSetModCopilotsReqFromJSONTyped(json, false);
}

export function CopilotSetModCopilotsReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopilotSetModCopilotsReq {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'copilotIds': json['copilot_ids'],
    };
}

export function CopilotSetModCopilotsReqToJSON(json: any): CopilotSetModCopilotsReq {
    return CopilotSetModCopilotsReqToJSONTyped(json, false);
}

export function CopilotSetModCopilotsReqToJSONTyped(value?: CopilotSetModCopilotsReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'copilot_ids': value['copilotIds'],
    };
}

