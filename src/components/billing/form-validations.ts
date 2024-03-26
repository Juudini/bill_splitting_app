import Swal from 'sweetalert2';

export const customToast = (
  icon: 'success' | 'error' | 'info',
  title: string,
  timer = 1000,
) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
};

export const validateCategory = (category: string) => {
  if (category === '') {
    customToast('error', 'Please select a category', 3000);
    return false;
  }
  return true;
};

export const validateFriends = (totalFriends: number) => {
  if (totalFriends === 0) {
    customToast('error', 'Please add friends to split the bill', 3000);
    return false;
  }
  return true;
};

export const validateAmount = (amount: number) => {
  if (amount > 99999999) {
    customToast('error', 'Amount should not exceed 99999999', 3000);
    return false;
  }
  return true;
};
