<template>
  <div>
    <router-Link to="/add-operator/null">Add </router-Link>
    <div class="col-md-12" v-if="lists.length > 0">
      <div class="card card-container">
        <table>
          <tr>
            <td>id</td>
            <td>Operator</td>
            <td>pays</td>
            <td>nbre client</td>
            <td colspan="2">actions</td>
          </tr>
          <tr v-for="(list, index) in lists" :key="index">
            <td>{{ list.id }}</td>
            <td>{{ list.label }}</td>
            <td>{{ list.pays.length > 0 ? list.pays[0].label : "-" }}</td>
            <td>{{ list.nbreClients }}</td>
            <td><button class="btn btn-default" @click="editOperator(list.id)">Edit</button></td>
            <td><button class="btn btn-default" @click="deleteOperators(list.id)">Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getOperator, deleteOperator } from "../../services/Login.service";
export default {
  name: "ListOperator",
  components: {},

  props: {},
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    getOperator().then((res) => (this.lists = res));
    console.log("list", this.lists);
  },
  methods: {
    editOperator(index) {
      console.log("edit operator", index);
      this.msg = index;
      this.$router.push(`/add-operator/${index}`);
    },
    deleteOperators(index) {
      console.log("edit operator", index);
      this.msg = index;
      deleteOperator(index).then((res) => {
        if (res) {
          getOperator().then((res) => (this.lists = res));
        } else {
          alert("can't delete");
        }
      });

      /*this.$router.push(`/add-operator/${index}`);*/
    },
  },
};
</script>

<style>
.card-container {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

td {
  border: solid 1px #000;
}
</style>
