const getPercents = (divident: number, divider: number): number => {
    if (divider !== 0) {
        return Math.round((divident / divider) * 100);
    }
    return 0;
};

export default getPercents;
