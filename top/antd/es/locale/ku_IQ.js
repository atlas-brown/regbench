import Pagination from "rc-pagination/es/locale/kmr_IQ";
import Calendar from '../calendar/locale/kmr_IQ';
import DatePicker from '../date-picker/locale/kmr_IQ';
import TimePicker from '../time-picker/locale/kmr_IQ';
// please use antd/locale/kmr_IQ instead
// keep this file for compatibility
// https://github.com/ant-design/ant-design/issues/25778
const localeValues = {
  locale: 'ku-iq',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  global: {
    close: 'Betal ke'
  },
  Table: {
    filterTitle: 'Menuê peldanka',
    filterConfirm: 'Temam',
    filterReset: 'Jê bibe',
    selectAll: 'Hemî hilbijêre',
    selectInvert: 'Hilbijartinan veguhere'
  },
  Tour: {
    Next: 'Temam',
    Previous: 'Betal ke',
    Finish: 'Temam'
  },
  Modal: {
    okText: 'Temam',
    cancelText: 'Betal ke',
    justOkText: 'Temam'
  },
  Popconfirm: {
    okText: 'Temam',
    cancelText: 'Betal ke'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Lêgerîn',
    itemUnit: 'tişt',
    itemsUnit: 'tişt'
  },
  Upload: {
    uploading: 'Bardike...',
    removeFile: 'Pelê rabike',
    uploadError: 'Xeta barkirine',
    previewFile: 'Pelê pêşbibîne',
    downloadFile: 'Pelê dakêşin'
  },
  Empty: {
    description: 'Agahî tune'
  }
};
export default localeValues;