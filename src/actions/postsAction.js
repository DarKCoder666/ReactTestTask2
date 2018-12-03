import {
    ADD_POST,
    TOGGLE_PREVIEW_VISIBILITY,
    PREVIEW_INPUT_CHANGE,
    FILTER_CHANGE,
    FILTER_POSTS
} from './types'

import history from '../history';

/**
 * Add the Task
 * 
 * @param {FormData} formData Task data
 * @return {Void}
 */
export const addPost = (data) => (dispatch) => {
    dispatch({
        type: ADD_POST,
        payload: data
    });
    dispatch({
        type: FILTER_POSTS
    });
    history.push("/news");
}

/**
 * Toggles the state of preview visibility
 */
export const togglePreviewVisibility = () => (dispatch) => {
    dispatch({
        type: TOGGLE_PREVIEW_VISIBILITY
    })
}

/**
 * Changes input values in state when input changes
 * @param {Object} e 
 */
export const onPreviewInputChange = (e) => async (dispatch) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'file') {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            dispatch({
                type: PREVIEW_INPUT_CHANGE,
                payload: {
                    name,
                    value: e.target.result
                }
            })
        }

        value = reader.readAsDataURL(e.target.files[0]);
        return;
    }

    dispatch({
        type: PREVIEW_INPUT_CHANGE,
        payload: {
            name,
            value
        }
    })
}

/**
 * Changes filter data
 */
export const onFilterChange = (e) => (dispatch) => {
    const value = e.target.value;
    const filter_name = e.target.dataset.filterName;
    dispatch({
        type: FILTER_CHANGE,
        payload: {
            value,
            filter_name
        }
    });
    dispatch({
        type: FILTER_POSTS
    });
}
