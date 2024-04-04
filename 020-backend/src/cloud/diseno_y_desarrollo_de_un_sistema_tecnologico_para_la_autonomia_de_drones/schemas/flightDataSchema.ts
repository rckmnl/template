import * as Yup from 'yup';

export const flightDataSchema = Yup.object().shape({
  fli_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The fli_person_id is required'),
    fli_dron_id: Yup.string().required('The fli_dron_id is required'),
    fli_GPS_coordinates: Yup.string().required('The fli_GPS_coordinates is required'),
    fli_Altitude: Yup.string().required('The fli_Altitude is required'),
    fli_Speed: Yup.string().required('The fli_Speed is required'),
    fli_flight_duration: Yup.string().required('The fli_flight_duration is required'),
    fli_datetime_flight: Yup.string().required('The fli_flight_duration is required')
});