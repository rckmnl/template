import * as Yup from 'yup';

export const DronSchema = Yup.object().shape({
    dro_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The dro_person_id is required'),
    dro_model: Yup.string().required('The dro_model is required'),
    dro_status: Yup.string().required('The dro_status is required'),
    dro_configuration: Yup.string().required('The dro_configuration is required'),
    dro_GPS: Yup.string().required('The dro_GPS is required'),
});