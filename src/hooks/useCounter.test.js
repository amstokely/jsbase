import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter Hook", () => {
    let result;
    let initialValue;

    beforeEach(() => {
        initialValue = 1;
        ({ result } = renderHook(() => useCounter(initialValue))); // Correct destructuring
    });

    test("initializes with the correct default value", () => {
        expect(result.current.count).toBe(initialValue);
    });

    test("increment increases count", () => {
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(initialValue + 1);
    });

    test("decrement decreases count", () => {
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(initialValue - 1);
    });
});
