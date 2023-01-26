import { toast } from 'react-toastify';

export enum TOAST_TYPES {
  info,
  success,
  error,
  warning,
}

export const showToast = (type: TOAST_TYPES, message: string) => {
  const defaultValues = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  } as any;
  switch (type) {
    case TOAST_TYPES.info:
      toast.info(message, defaultValues);
      break;
    case TOAST_TYPES.error:
      toast.error(message, defaultValues);
      break;
    case TOAST_TYPES.success:
      toast.success(message, defaultValues);
      break;
    default:
      toast(message, defaultValues);
  }
};
