import { isBoolean } from '@fxts/core'

type IValidationResult = {
    matchBoolean: {
        message: string;
    }
}

export function matchBoolean(value: unknown): IValidationResult | null {
    return isBoolean(value)
        ? null
        : { matchBoolean: { message: 'required' } }
}

console.log(matchBoolean(true));
console.log(matchBoolean('true'));
