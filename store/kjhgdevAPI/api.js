import axios from "axios"
const kjhgdevAPI = axios.create({
  baseURL: "https://kjhg-dev-116831.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return kjhgdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return kjhgdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_rohit_list(payload) {
  return kjhgdevAPI.get(`/api/v1/rohit/`)
}
function api_v1_rohit_create(payload) {
  return kjhgdevAPI.post(`/api/v1/rohit/`, payload)
}
function api_v1_rohit_retrieve(payload) {
  return kjhgdevAPI.get(`/api/v1/rohit/${payload.id}/`)
}
function api_v1_rohit_update(payload) {
  return kjhgdevAPI.put(`/api/v1/rohit/${payload.id}/`, payload)
}
function api_v1_rohit_partial_update(payload) {
  return kjhgdevAPI.patch(`/api/v1/rohit/${payload.id}/`, payload)
}
function api_v1_rohit_destroy(payload) {
  return kjhgdevAPI.delete(`/api/v1/rohit/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return kjhgdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return kjhgdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return kjhgdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return kjhgdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return kjhgdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return kjhgdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_rohit_list,
  api_v1_rohit_create,
  api_v1_rohit_retrieve,
  api_v1_rohit_update,
  api_v1_rohit_partial_update,
  api_v1_rohit_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
