export const allUnits = [
    // length units
    {
        id: 1,
        name: 'length',
        fromTo: [
            { name: 'kilometer', value: 1000 },
            { name: 'meter', value: 1 },
            { name: 'centimeter', value: 0.01 },
            { name: 'millimeter', value: 0.001 },
        ]
    },
    // weight units
    {
        id: 2,
        name: 'weight',
        fromTo: [
            { name: 'kilogram', value: 1000 },
            { name: 'gram', value: 1 },
            { name: 'milligram', value: 0.001 },
            { name: 'pound', value: 2204.62262 },
        ]
    },
    // time units ----------------------------------------------------------------------------
    {
        id: 3,
        name: 'time',
        fromTo: [
            { name: 'hour', value: 3600 },
            { name: 'minute', value: 60 },
            { name: 'second', value: 1 },
            { name: 'millisecond', value: 0.001 },
            { name: 'microsecond', value: 0.000001 },
        ]
    },
    // Temperature units ----------------------------------------------------------------------
    {
        id: 4,
        name: 'temperature',
        fromTo: [
            { name: 'celsius', value: 0 },
            { name: 'kelvin', value: -273.15 },
            { name: 'fahrenheit', value: 32 },
        ]
    },
]
