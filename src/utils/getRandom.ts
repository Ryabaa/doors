const getRandom = (range: number) => {
    const randomNumber = Math.floor(Math.random() * range + 1);

    return randomNumber;
};

const getRandoms = (range: number, exceptions: number[] | null) => {
    const randomNumber = Math.floor(Math.random() * range + 1);

    return randomNumber;
};

export { getRandom, getRandoms };
