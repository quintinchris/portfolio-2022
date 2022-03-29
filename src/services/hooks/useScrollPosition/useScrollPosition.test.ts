import { useScrollPosition } from "./useScrollPosition";
import {renderHook} from '@testing-library/react-hooks'

describe("useScrollPosition", () => {
    it("should return the scroll position", () => {
        const { result } = renderHook(() => useScrollPosition());
        expect(result.current).toBe(0);
    });
})