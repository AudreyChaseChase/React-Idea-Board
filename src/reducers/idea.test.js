import ideas from './idea';
import * as actions from './idea'
import { initialState } from './idea';

describe('idea reducer', () => {
    it('should handle initial state', () => {
        expect(
            ideas(undefined, {})
        ).toEqual(initialState)
    });
    it('should handle LOAD_IDEAS', () => {
        expect(
            ideas(initialState, {
                type: 'LOAD_IDEAS'
            })
        ).toEqual({
            ...initialState,
            isLoading: true
        })
    });
    it('should handle LOAD_IDEAS_SUCCESS', () => {
        expect(
            ideas(initialState, {
                type: 'LOAD_IDEAS_SUCCESS',
                payload: [{
                    id: 0,
                    title: "Test Load Idea",
                    body: "Run the load idea tests succeefully",
                    createdDate: '2019-09-01T12:00:00.992Z'
                }, {
                    id: 1,
                    title: "Load the 2nd Idea",
                    body: "Run the load idea tests succeefully",
                    createdDate: '2019-09-01T12:10:00.992Z'
                }]
            })
        ).toEqual({
            ...initialState,
            data: [{
                id: 0,
                title: "Test Load Idea",
                body: "Run the load idea tests succeefully",
                createdDate: '2019-09-01T12:00:00.992Z'
            }, {
                id: 1,
                title: "Load the 2nd Idea",
                body: "Run the load idea tests succeefully",
                createdDate: '2019-09-01T12:10:00.992Z'
            }]
        })
    });
    it('should handle LOAD_IDEAS_FAILURE', () => {
        expect(
            ideas(initialState, {
                type: 'LOAD_IDEAS_FAILURE',
                payload: 'Load fail'
            })
        ).toEqual({
            ...initialState,
            isLoading: false
        })
    });
    it('should handle ADD_IDEA_SUCCESS', () => {
        expect(
            ideas({...initialState,
                data: [{
                    id: 0,
                    title: "Previous Idea",
                    body: "",
                    createdDate: '2019-09-01T12:00:00.992Z'
                }]
            }, {
                type: 'ADD_IDEA_SUCCESS',
                payload: {
                    id: 1,
                    createdDate: '2019-09-02T12:10:00.992Z'
                }
            })
        ).toEqual({
            ...initialState,
            data: [{
                id: 0,
                title: "Previous Idea",
                body: "",
                createdDate: '2019-09-01T12:00:00.992Z'
            }, {
                id: 1,
                title: "",
                body: "",
                createdDate: '2019-09-02T12:10:00.992Z'
            }]
        })
    });
    it('should handle UPDATE_IDEA_SUCCESS', () => {
        expect(
            ideas({...initialState,
                data: [{
                    id: 0,
                    title: "Previous Idea",
                    body: "Previous description",
            }, {
                id: 1,
                title: "Idea 2",
                body: "This idea wont't be updated"
            }]}, {
                type: 'UPDATE_IDEA_SUCCESS',
                idea: {
                    id: 0,
                    title: "New Idea",
                    body: "Run the update idea tests"
                }
            })
        ).toEqual({
            ...initialState,
            data: [{
                id: 0,
                title: "New Idea",
                body: "Run the update idea tests"
            }, {
                id: 1,
                title: "Idea 2",
                body: "This idea wont't be updated"
            }]
        })
    });
    it('should handle DELETE_IDEA_SUCCESS', () => {
        expect(
            ideas({...initialState,
                data: [{
                    id: 0,
                    title: "Test Idea to be deleted",
                    body: "Run the delete idea tests"
            }, {
                id: 1,
                title: "Idea 2",
                body: "This idea wont't be deleted"
            },]}, {
                type: 'DELETE_IDEA_SUCCESS',
                id: 0
            })
        ).toEqual({...initialState,
            data: [{
                id: 1,
                title: "Idea 2",
                body: "This idea wont't be deleted"
            }]
        })
    })
})

describe('sort actions', () => {
  it('changeSortBy should create CHANGE_SORT_BY action', () => {
    expect(actions.changeSortBy('title')).toEqual({
        type: 'CHANGE_SORT_BY',
        sortBy: 'title'
    })
  })
})