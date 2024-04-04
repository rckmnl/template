import * as Yup from 'yup';

export const AdvicesSchema = Yup.object().shape({
  adv_person_id: Yup.object()
    .shape({
      __type: Yup.string().required(),
      className: Yup.string().required(),
      objectId: Yup.string().required(),
    })
    .required('The adv_person_id is required'),
    adv_interaction_type: Yup.string().required('The adv_interaction_type is required'),
    adv_timestamp: Yup.string().required('The adv_timestamp is required'),
    adv_recommendations: Yup.string().required('The adv_recommendations is required'),
    adv_user_feedback: Yup.string().required('The adv_user_feedback is required')
});