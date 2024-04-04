import * as Yup from 'yup';

export const alertsNotificationSchema = Yup.object().shape({
  alert_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The alert_person_id is required'),
    alert_location_id: Yup.string().required('The alert_location_id is required'),
    alert_type: Yup.string().required('The alert_type is required'),
    alert_datetime: Yup.string().required('The alert_datetime is required'),
    alert_status: Yup.string().required('The alert_status is required')
});