import checkCount from "./validators";

describe("checkCount", () => {
    it("should throw an error when count is less than zero", () => {
        expect(() => checkCount(-1)).toThrow("Count cannot be less than zero");
    });
    it("should not throw an error when count is zero", () => {
        expect(() => checkCount(0)).not.toThrow();
    });
    it("should not throw an error when count is greater than zero", () => {
        expect(() => checkCount(1)).not.toThrow();
    });
});