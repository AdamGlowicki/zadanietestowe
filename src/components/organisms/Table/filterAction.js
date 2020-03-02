export const filterAction = (list, category) => {
    const {id, concern, city} = category
    return
        list
            .filter(item => item.id === id)
            .filter(item => item.name === concern)
            .filter(item => item.city === city)
}
