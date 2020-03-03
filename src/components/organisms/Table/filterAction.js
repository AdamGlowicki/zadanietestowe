export const filter = (list, conditions) => {
    const {id, concern, city} = conditions;

    return list.filter(obj => checkFilterConditions(obj, id, concern, city));
}

function checkFilterConditions(obj, id, concern, city) {
    return obj.city.toLowerCase().includes(city.toLowerCase()) && obj.name.toLowerCase().includes(concern.toLowerCase()) && obj.id.toString().includes(id.toString());
}

export function splitToArrays (array, lengthSubArray) {
    const cutArray = []
    while (array.length) {
        const chunk = array.splice(0, lengthSubArray)
        cutArray.push(chunk)
    }

    return cutArray;
}