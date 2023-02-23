import { environment } from 'src/environments/environment';

export const ENDPOINTS = {
  LOGIN: `${environment.USER_API}/awards/wp-json/jwt-auth/v1/token`,
  SIGNUP: `${environment.USER_API}/awards/wp-json/wp/v2/registro/participante`,
  GOULA_AWARDS_ABOUT: `${environment.GOULA_AWARDS_API}/cms/wp-json/wp/v2/convocatoria/49`,
  GOULA_AWARDS_CATEGORIES: `${environment.GOULA_AWARDS_API}/cms/wp-json/wp/v2/convocatoria/709`,
  GOULA_AWARDS_JUDGES: `${environment.GOULA_AWARDS_API}/cms/wp-json/wp/v2/convocatoria/69`,
};
