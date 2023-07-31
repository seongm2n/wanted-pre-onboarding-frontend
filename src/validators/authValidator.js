export const emailValidator = (email) => {
  const emailRegex = /@/;
  return emailRegex.test(email);
};

export const passwordValidator = (password) => {
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password);
};
