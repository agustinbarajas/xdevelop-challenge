export interface Participant {
  email: string;
  nombres: string;
  apellidos: string;
  password: string;
  telefono: number;
  celular: number;
  forma_enterado: string;
  otro_forma_enterado: string;
  cargo: string;
  nombre_empresa: string;
  fecha_origen: string;
  numero_de_empleados: string;
  hombres: number;
  mujeres: number;
  no_binario: number;
  geografia_intervencion: string;
  razon_social: string;
  url_empresa: string;
  cp: string;
  calle_numero: string;
  colonia: string;
  delegacion_municipio: string;
  ciudad: string;
  pais: string;
  vision: string;
  mision: string;
  clientes: string;
  usuarios: string;
  aliados: string;
  grupos_de_interes: string;
  competencia: string;
  participado_en_programas_de_aceleracion: string;
  cual_programa: string;
  nivel_de_ventas: {
    anio_1: string;
    anio_2: string;
    anio_3: string;
  };
}
