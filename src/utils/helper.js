import moment from 'moment';

export const capitalizeFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

export const formatDate = timestamp => moment(timestamp).format('LLLL');