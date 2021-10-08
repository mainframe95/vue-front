<template>
  <div class="col-md-12">
    <div class="card card-container">
    <div>
      <input v-model="label" placeholder="label" type='text' name='label' />
    </div>
    <button class="btn btn-default" @click="handleCreatePays" > Create Pays</button>
    </div>
  </div>
</template>

<script>

import {createPays} from "../services/Login.service";
export default {
  name: 'Pays',
  data (){
    return {
      label: 'pays',
      }
  },
  methods: {
    handleCreatePays(){
    console.log('this.label',this.label)
    createPays(this.label);
    }

  }
}
</script>