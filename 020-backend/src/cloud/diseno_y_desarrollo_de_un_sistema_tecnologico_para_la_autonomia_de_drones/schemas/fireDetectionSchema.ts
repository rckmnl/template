import * as Yup from 'yup';

export const fireDetectionSchema = Yup.object().shape({
  fire_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The fire_person_id is required'),
    fire_location_id: Yup.string().required('The fire_location_id is required'),
    fire_datetime_detection: Yup.string().required('The fire_datetime_detection is required'),
    fire_fire_intensity: Yup.string().required('The fire_fire_intensity is required'),
    fire_size: Yup.string().required('The fire_size is required')
});