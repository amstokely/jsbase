import {renderHook, act, RenderHookResult} from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter Hook", () => {
    let initialValue: number;
    let hookResult: RenderHookResult<{
        count: number;
        increment: () => void;
        decrement: () => void
    }, ReturnType<(initialValue?: number) => { count: number; increment: () => void; decrement: () => void }>>;

    beforeEach(() => {
        initialValue = 1;
        hookResult = renderHook(() => useCounter(initialValue));
    });

    test("initializes with the correct default value", () => {
        expect(hookResult.result.current.count).toBe(initialValue);
    });

    test("increment increases count", () => {
        act(() => {
            hookResult.result.current.increment();
        });
        expect(hookResult.result.current.count).toBe(initialValue + 1);
    });

    test("decrement decreases count", () => {
        act(() => {
            hookResult.result.current.decrement();
        });
        expect(hookResult.result.current.count).toBe(initialValue - 1);
    });

    test("does not decrement below zero and throws an error when attempted", () => {
        act(() => {
            hookResult.result.current.decrement(); // from 1 to 0
        });
        expect(hookResult.result.current.count).toBe(0);

        try {
            hookResult.result.current.decrement(); // attempt to go below zero
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect((e as Error).message).toBe("Count cannot be less than zero");
            expect(hookResult.result.current.count).toBe(0); // still 0
        }
    });

});
