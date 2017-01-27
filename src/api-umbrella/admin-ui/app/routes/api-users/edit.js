import Form from './form';

export default Form.extend({
  model(params) {
    this.clearStoreCache();
    return this.get('store').findRecord('api-user', params.apiUserId);
  },
});