export const ROUTES = {
  MAP: {
    DEFAULT: '/api/map',
    GET_INFO: '/get-info',
    GET_ALL_MEMORIAL_TYPES: '/get-memorial-types',
    GET_MEMORIAL: '/get-memorial/:id',
    ADD_MEMORIAL_TYPE: '/add-memorial-type',
    EDIT_MEMORIAL_TYPE: '/edit-memorial-type/:id',
    DELETE_MEMORIAL_TYPE: '/delete-memorial-type/:id',
  },
  MEMORIAL: {
    DEFAULT: '/api/memorial',
    GET_ALL: '/get-all',
    GET: '/get/:id',
    ADD: '/add',
    EDIT: '/edit/:id',
    DELETE: '/delete/:id',
  },
  MEMORIAL_TYPE: {
    DEFAULT: '/api/memorial-type',
    GET_ALL: '/get-all',
    ADD: '/add',
    EDIT: '/edit/:id',
    DELETE: '/delete/:id',
  },
  CITY: {
    DEFAULT: '/api/city',
    GET: '/get',
    ADD: '/add',
    EDIT: '/edit/:id',
    DELETE: '/delete/:id',
  },
  PUBLICATION: {
    DEFAULT: '/api/publication',
    ADD: '/add',
    GET: '/get',
    GET_CURRENT: '/get/:id',
    GET_ALL: '/get-all',
    GET_FAVORITE: '/get-favorite',
    GET_RECENT: '/get-recent',
    DELETE: '/delete/:id',
    EDIT: '/edit/:id',
    SET_FAVORITE: '/set-favorite/:id',
    REMOVE_FAVORITE: '/remove-favorite/:id',
  },
  AUTH: {
    DEFAULT: '/api/auth',
    LOGIN: '/login',
    LOGOUT: '/logout',
    REFRESH: '/refresh',
  },
};
