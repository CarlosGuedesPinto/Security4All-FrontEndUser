<template id="homeManager">
  <div class="homeManager">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container" id="tableRanking">
      <div>
        <section>
          <b-table
            id="dataTable"
            :data="data"
            :columns="columns"
            ref="table"
            :mobile-cards="false"
            :hoverable="true"
          >
            <template id="itemsTable" slot-scope="props">
              <b-table-column
                style="text-align:center"
                is-current-sort
                field="id"
                label="ID"
                width="1"
                centered
                numeric
              >{{ props.row.idSensor }}</b-table-column>

              <b-table-column
                id="usernameItem"
                style="text-align:left !important"
                field="sensor"
                label="Sensor"
                width="15"
                centered
              >{{ props.row.name }}</b-table-column>

              <b-table-column
                style="text-align:left !important"
                field="active"
                label="Active"
                width="10"
                numeric
                centered
              >
                <b-switch type="is-success" :value="props.row.active"></b-switch>
              </b-table-column>
            </template>

            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                  </p>
                  <p>Nothing here.</p>
                </div>
              </section>
            </template>
          </b-table>
        </section>
      </div>
    </div>

    <button
      type="button"
      id="buttonSOS"
      title="SOS"
      @click="createAnAlert()"
      class="button is-danger is-large"
    >SOS</button>
    <br />

    <br />
  </div>
</template>

<script>
//import { getAllHouseSensors } from "../API/apiSensor";
import { getAllUsersSensors } from "../API/apiUser"
import { addAlert } from "../API/apiAlert";
import { ToastProgrammatic as toast } from "buefy";

export default {
  name: "Rankings",
  data() {
    const data = [];

    return {
      data,
      house: "",
      user: {},
      selected: data[0],
      searchBar: "",
      sensors: [],
      houseById: 0,
      userSpaces: [],
      houses: [],
      loggedUser: ""
    };
  },
  async created() {
    //buscar id do user pelo token, mas como nao temos token, vou dar um id de exmplo
     /* eslint-disable */
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
    let idUser = this.loggedUser.idUser;
    console.log(this.loggedUser)


    await getAllUsersSensors(idUser).then(response => {
        this.sensors = response.data.data

    });
    console.log("sensor")
    console.log(this.sensors)

    

    for (let i = 0; i < this.sensors.length; i++) {
      this.data.push(this.sensors[i]);
    }
    console.log("data")
    console.log(this.data)
  },
  methods: {
    createAnAlert() {
      //Ou mandas o nome pela função la em cima e aqui colocas o nome dentro dos ()
      let nameUser = this.loggedUser.name; //Ou colocas o nome aqui
      let temp = {
        alertText: "User  " + nameUser + ": Emergency Button activated in Living Room",
        alertType: "Danger"
      };
      addAlert(temp).then(() => {
        toast.open({
          message: "Alert sent",
          type: "is-warning"
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cardName {
  font-weight: bold;
}
#cardPoints {
  color: black !important;
}
.card {
  width: 350px;
  height: 100px;
  size: 1px;
  border: #0a1f3c;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
}
.card p {
  color: #0a1f3c;
}
.is-active {
  color: #ffbf2f !important;
}
.top-left {
  position: absolute;
  top: -12px;
  left: -7px;
  width: 24px !important;
}

#etc {
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  align-items: center !important;
}

#numberOne {
  color: #ffbf2f;
}
#numberTwo {
  color: #6d6d73;
}
#numberThree {
  color: #872f00;
}
#allNumber {
  color: white;
}
#userLogged {
  color: #0a1f3c !important;
}
#cardView {
  align-self: center !important;
  align-items: center !important;
  margin-left: 150px;
  margin-right: 150px;
}
#imageCard {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 15%;
}
#cardName {
  vertical-align: middle !important;
  text-align: center;
}
/*#changeView{
  margin-left: 650px;
  margin-bottom: 100px;
}
#searchBar{
  resize: horizontal;
  width: 300px;
  margin-left: 250px;
}*/
#dataTable {
  width: 1050px;
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  margin-top: 30px !important;
  vertical-align: middle !important;
}
#itemsTable {
  vertical-align: middle !important;
}
#itemsTable:hover {
  background-color: yellow;
}

#tableRanking {
  align-self: left !important;
  vertical-align: middle !important;
}

.is-selected {
  background-color: #ffbf2f !important;
  color: #ffbf2f;
}

#selected {
  background-color: #ffbf2f !important;
  color: #ffbf2f !important;
}
#usernameItem {
  align-items: left !important;
  align-self: left !important;
  align-content: left !important;
  text-align: left !important;
}

#buttonSOS {
  margin-left: 93%;
  margin-top: 20%;
}
</style>