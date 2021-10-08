<template>
  <div class="col-md-12">
      <h3>Creation d'Operator</h3>
    <div class="card card-container">
      <div>
        <input
          v-model="label"
          placeholder="label"
          type="text"
          name="label"
        /><br /><br />
        <input
          v-model="nbreClients"
          placeholder="nbre client"
          type="number"
          name="nbreClients"
        /><br /><br />
        <div>
          <span v-for="(list, index) in listsPays" :key="index">
            <input
              @click="selectPays(list.id)"
              type="checkbox"
              checked="checkPays(list.id)"
              value="list.id"
              name="pays"
            />
            {{ list.label }}</span
          >
        </div>
        <button class="btn btn-primary" v-if="!edit" @click="handleCreateOperator">
          Create Operator {{ selected }}
        </button>
        <button class="btn btn-primary" v-if="edit" @click="handleEditOperator">
          Update Operator
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createOperator,
  getPays,
  getOneOperator,
  editOperator
} from "../../services/Login.service";
export default {
  name: "AddOperator",
  data() {
    return {
      label: "operator",
      nbreClients: 0,
      selected: [],
      listsPays: [],
      edit: false
    };
  },
  mounted() {
    if (!isNaN(parseInt(this.$route.params.id, 10))) {
      /* recup edi operator*/
      this.edit = true;
      getOneOperator(parseInt(this.$route.params.id, 10)).then((res) => {
        this.label = res.label;
        this.nbreClients = res.nbreClients;
        this.selected = res.pays.map((el) => el.id);
      });
    }
    getPays().then((res) => (this.listsPays = res));
  },
  methods: {
    handleCreateOperator() {
      console.log("this.operator", this.operator);
      createOperator({
        label: this.label,
        nbreClients: parseInt(this.nbreClients),
        paysId: this.selected,
      });
    },
    handleEditOperator() {
      console.log("this.operator", this.operator);
      editOperator({
        id: parseInt(this.$route.params.id, 10),
        label: this.label,
        nbreClients: parseInt(this.nbreClients),
        paysId: this.selected,
      });
    },
    selectPays(id) {
      !this.selected.includes(id)
        ? this.selected.push(id)
        : (this.selected = this.selected.filter((x) => x !== id));
    },
    checkPays(id) {
      id;
      return false 

      //this.selected.includes(id);
    }
  },
};
</script>
