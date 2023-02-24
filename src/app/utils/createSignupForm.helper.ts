import { FormBuilder, Validators } from '@angular/forms';

import { NUMBER_REGEXP, PASSWORD_REGEXP } from './../constants/forms.const';

export const createSignupForm = (fb: FormBuilder) => {
  return fb.group({
    personalForm: fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: [
        '',
        [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(NUMBER_REGEXP),
          Validators.required,
        ],
      ],
      celular: [
        '',
        [
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(NUMBER_REGEXP),
          Validators.required,
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.pattern(PASSWORD_REGEXP), Validators.required],
      ],
      cargo: ['', Validators.required],
      forma_enterado: ['', Validators.required],
      otro_forma_enterado: ['', Validators.required],
      fecha_origen: [new Date(), Validators.required],
    }),
    companyForm: fb.group({
      nombre_empresa: ['', Validators.required],
      razon_social: ['', Validators.required],
      url_empresa: ['', Validators.required],
      numero_de_empleados: ['Microempresa', Validators.required],
      hombres: [0, [Validators.pattern(NUMBER_REGEXP), Validators.required]],
      mujeres: [0, [Validators.pattern(NUMBER_REGEXP), Validators.required]],
      no_binario: [0, [Validators.pattern(NUMBER_REGEXP), Validators.required]],
      vision: ['', Validators.required],
      mision: ['', Validators.required],
      clientes: ['', Validators.required],
      usuarios: ['', Validators.required],
      aliados: ['', Validators.required],
      grupos_de_interes: ['', Validators.required],
      competencia: ['', Validators.required],
      participado_en_programas_de_aceleracion: ['no', Validators.required],
      cual_programa: ['', Validators.required],
      nivel_de_ventas: fb.group({
        anio_1: ['', Validators.required],
        anio_2: ['', Validators.required],
        anio_3: ['', Validators.required],
      }),
    }),
    addressForm: fb.group({
      geografia_intervencion: ['', Validators.required],
      cp: [
        '',
        [Validators.minLength(5), Validators.maxLength(5), Validators.required],
      ],
      calle_numero: ['', Validators.required],
      colonia: ['', Validators.required],
      delegacion_municipio: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
    }),
  });
};
