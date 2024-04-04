import * as Yup from 'yup';

export const ActivityLogsSchema = Yup.object().shape({
  reg_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The reg_person_id is required'),
    reg_action_performed: Yup.string().required('The reg_action_performed is required'),
    reg_datetime_activity: Yup.string().required('The reg_datetime_activity is required')
});