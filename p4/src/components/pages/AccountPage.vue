<template>
  <div>
    <h1>Create An Account</h1>
    <form>
      <div>
        <div>
          <label for='fname'>first name</label>
          <input data-test='first-name' type='text' v-model='$v.name.$model' />

          <div v-if='$v.name.$error'>
            <div class='form-feedback-error' v-if='!$v.name.required'>First name is required.</div>
          </div>
        </div>

        <div>
          <label for='lname'>last name</label>
          <input type='text' />
        </div>

        <div>
          <label for='email'>e-mail address</label>
          <input data-test='email-address' type='text' v-model='$v.email.$model' />

          <div v-if='$v.email.$error'>
            <div class='form-feedback-error' v-if='!$v.email.required'>Email is required.</div>
            <div class='form-feedback-error' v-if='!$v.email.email'>Enter a valid e-mail.</div>
          </div>
        </div>

        <div>
          <label for='user'>user name</label>
          <input type='text' />
        </div>

        <div>
          <label for='password'>password</label>
          <input type='text' v-model='$v.password.$model' />

          <div v-if='$v.password.$error'>
            <div class='form-feedback-error' v-if='!$v.password.required'>Password is required.</div>
            <div
              class='form-feedback-error'
              v-if='!$v.password.minLength'
            >Password must be 6 characters.</div>
          </div>
        </div>

        <button type='submit'>Create account</button>
        <button type='submit'>Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'AccountPage',
  data: function() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  validations: {
    name: { required },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>

<style scoped>
.form-feedback-error {
  color: red;
}
</style>
