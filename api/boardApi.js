import api from './axSetting';

export const boardList = () => {
    return api.get('board/list');
}