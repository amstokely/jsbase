function checkCount(count: number) {
    if (count < 0) {
        throw new Error("Count cannot be less than zero");
    }
}
export default checkCount;