
export const getProcessedObject = (model: {[k: string]: any}, object: {[k: string]: any}) => {
    Object.keys(object).forEach(key => {
        object[key] = model[key];
    })
    return object;
}

export const getProcessedObjectList = (model: any, result: {[k: string]: any}[]) => {
    const processedResult = result.map(o => {
        const newModel = model();
        return getProcessedObject(o, newModel)
    });
    return processedResult;
}