import notification from './notification';
import { initialState } from './notification';

describe('notification reducer', () => {
    it('should handle initial state', () => {
        expect(
            notification(undefined, {})
        ).toEqual(initialState)
    });
    it('should handle SHOW_NOTIFICATION', () => {
        expect(
            notification(initialState, {
                type: 'SHOW_NOTIFICATION',
                notification: "Idea is updated successfully"
            })
        ).toEqual({
            ...initialState,
            notification: "Idea is updated successfully"
        })
    });
    it('should handle HIDE_NOTIFICATION', () => {
        expect(
            notification(initialState, {
                type: 'HIDE_NOTIFICATION',
                notification: null
            })
        ).toEqual(initialState)
    })
})