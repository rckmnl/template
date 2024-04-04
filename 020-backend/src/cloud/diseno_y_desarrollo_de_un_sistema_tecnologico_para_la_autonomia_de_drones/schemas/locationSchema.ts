import * as Yup from 'yup';

export const LocationSchema = Yup.object().shape({
  loc_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The loc_person_id is required'),
    loc_location_name: Yup.string().required('The loc_location_name is required'),
    loc_geographical_coordinates: Yup.string().required('The loc_geographical_coordinates is required')
});