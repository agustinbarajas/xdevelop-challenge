export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/g;
export const NUMBER_REGEXP = /[0-9]/;

export const ERROR_MESSAGES: { [key: string]: string } = {
  required: 'Este campo es requerido',
  minlength: 'El valor ingresado tiene menos caracteres de los requeridos',
  maxlength: 'El valor ingresado tiene más caracteres de los requeridos',
  pattern: 'El valor ingresado no coincide con el patrón requerido',
  email: 'Ingrese un correo válido',
};
