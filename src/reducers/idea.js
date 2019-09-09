/**
 * Ducks file structure
*/
import * as ideaServices from '../services/ideaServices';
const api = ideaServices;

/* Actions */
const LOAD_IDEAS = 'LOAD_IDEAS';
const LOAD_IDEAS_SUCCESS = 'LOAD_IDEAS_SUCCESS';
const LOAD_IDEAS_FAILURE = 'LOAD_IDEAS_FAILURE';

const ADD_IDEA = 'ADD_IDEA';
const ADD_IDEA_SUCCESS = 'ADD_IDEA_SUCCESS';
const ADD_IDEA_FAILURE = 'ADD_IDEA_FAILURE';

const UPDATE_IDEA = 'UPDATE_IDEA';
const UPDATE_IDEA_SUCCESS = 'UPDATE_IDEA_SUCCESS';
const UPDATE_IDEA_FAILURE = 'UPDATE_IDEA_FAILURE';

const DELETE_IDEA = 'DELETE_IDEA';
const DELETE_IDEA_SUCCESS = 'DELETE_IDEA_SUCCESS';
const DELETE_IDEA_FAILURE = 'DELETE_IDEA_FAILURE';

const CHANGE_SORT_BY = 'CHANGE_SORT_BY';

export const initialState = {
  data: [],
  isLoading: false,
  sortBy: 'createdDate',
};

/* Reducer */
export default function ideas(state = initialState, action) {
  switch (action.type) {
    case LOAD_IDEAS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_IDEAS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case LOAD_IDEAS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_IDEA_SUCCESS:
      const newIdea = {
        ...action.payload,
        title: '',
        body: '',
      };
      return {
        ...state,
        data: [...state.data, newIdea],
      };
    case UPDATE_IDEA_SUCCESS:
      const currentIdeas = [...state.data];
      const ideaToUpdate = currentIdeas.find(x => x.id === action.idea.id);
      ideaToUpdate.title = action.idea.title;
      ideaToUpdate.body = action.idea.body;
      return {
        ...state,
        data: currentIdeas,
      };
    case DELETE_IDEA_SUCCESS:
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.id),
      };
    case CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
}

/* Action Creators */
export function loadIdeas() {
  return async (dispatch) => {
    dispatch({ type: LOAD_IDEAS });
    try {
      const { data } = await api.loadIdeas();
      return dispatch({
        type: LOAD_IDEAS_SUCCESS,
        payload: data.map(x => ({
          id: x.id,
          title: x.title,
          body: x.body,
          createdDate: x.created_date,
        })),
      });
    } catch (ex) {
      return dispatch({ type: LOAD_IDEAS_FAILURE, payload: ex });
    }
  }
};

export function addIdea() {
  return async (dispatch) => {
    dispatch({ type: ADD_IDEA });
    try {
      const { data } = await api.getNewIdeaData();
      return dispatch({
        type: ADD_IDEA_SUCCESS,
        payload: {
          id: data.id,
          createdDate: data.created_date,
        },
      });
    } catch (ex) {
      return dispatch({ type: ADD_IDEA_FAILURE, payload: ex });
    }
  }
}

export function updateIdea({ id, body, title }) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_IDEA });
    try {
      await api.updateIdea({ id, body, title });
      return dispatch({
        type: UPDATE_IDEA_SUCCESS,
        idea: { id, body, title },
      });
    } catch (ex) {
      return dispatch({ type: UPDATE_IDEA_FAILURE, payload: ex });
    }
  }
}

export function deleteIdea(id) {
  return async (dispatch) => {
    dispatch({ type: DELETE_IDEA });
    try {
      await api.deleteIdea(id);
      return dispatch({
        type: DELETE_IDEA_SUCCESS,
        id,
      });
    } catch (ex) {
      return dispatch({ type: DELETE_IDEA_FAILURE, payload: ex });
    }
  }
}

export function changeSortBy(sortBy) {
  return {
    type: CHANGE_SORT_BY,
    sortBy,
  };
}