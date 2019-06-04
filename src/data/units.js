export const allUnits = [
    // length units
    {
        id: 1,
        name: 'Length',
        fromTo: [
            { name: 'Mile', value: 1609.35 },
            { name: 'Kilometer', value: 1000 },
            { name: 'Meter', value: 1 },
            { name: 'Centimeter', value: 0.01 },
            { name: 'Millimeter', value: 0.001 },
            { name: 'Yard', value: 0.9144 },
            { name: 'Foot', value: 0.3048 },
            { name: 'Inch', value: 0.0254 },
        ]
    },
    // weight units
    {
        id: 2,
        name: 'Weight',
        fromTo: [
            { name: 'Kilogram', value: 1000 },
            { name: 'Gram', value: 1 },
            { name: 'Milligram', value: 0.001 },
            { name: 'Pound', value: 2204.62262 },
        ]
    },
    // time units ----------------------------------------------------------------------------
    {
        id: 3,
        name: 'Time',
        fromTo: [
            { name: 'Hour', value: 3600 },
            { name: 'Minute', value: 60 },
            { name: 'Second', value: 1 },
            { name: 'Millisecond', value: 0.001 },
            { name: 'Microsecond', value: 0.000001 },
        ]
    },
    // Temperature units ----------------------------------------------------------------------
    {
        id: 4,
        name: 'Temperature',
        fromTo: [
            { name: 'Celsius', value: 0 },
            { name: 'Kelvin', value: -273.15 },
            { name: 'Fahrenheit', value: 32 },
        ]
    },
    // Area units ----------------------------------------------------------------------
    {
        id: 5,
        name: 'Area',
        fromTo: [
            { name: 'Square Mile', value: 1609.35 * 1609.35 },
            { name: 'Square Kilometer', value: 1000 * 1000 },
            { name: 'Square Meter', value: 1 },
            { name: 'Square Centimeter', value: 0.01 * 0.01 },
            { name: 'Square Millimeter', value: 0.001 * 0.001 },
            { name: 'Square Yard', value: 0.9144 * 0.9144 },
            { name: 'Square Foot', value: 0.3048 * 0.3048 },
            { name: 'Square Inch', value: 0.0254 * 0.0254 },
        ]
    },
]
