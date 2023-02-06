export const sortNumber = (object, type = 'ASC') => {
    switch (type) {
        case 'DESC':
            return Object.entries(object)
                .sort(([, a], [, b]) => b - a)
                .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        default:
            return Object.entries(object)
                .sort(([, a], [, b]) => a - b)
                .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    }
};
