<template id="ranking2">
  <div class="rankings">
    <br />
    <br />
    <br />
    <h1 id="titleRanking" class="title is-1">Ranking</h1>
    <div class="container" id="tableRanking">
      <div class="columns">
        <div id="columnTable" class="column is-offset-4 is-5-desktop is-2-mobile is-12-tablet">
          <section>
            <b-table
              id="dataTable"
              :data="data"
              :columns="columns"
              :selected.sync="selected"
              ref="table"
              :mobile-cards="false"
              :hoverable="true"
            >
              <b-tab-item
                label="Selected"
                id="selected"
              >
                <pre>{{ selected }}</pre>
              </b-tab-item>
              <template id="itemsTable" slot-scope="props">
                <b-table-column
                  style="text-align:center"
                  is-current-sort
                  field="id"
                  width="1"
                  centered
                  numeric
                >{{ props.row.idUser }}</b-table-column>

                <b-table-column
                  id="usernameItem"
                  style="text-align:left !important"
                  field="username"
                  width="15"
                  centered
                >{{ props.row.name }}</b-table-column>

                <b-table-column
                  style="text-align:left !important"
                  field="points"
                  width="10"
                  numeric
                  centered
                >
                  <span id="numberOne" v-if="props.row.idUser == 1">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span id="numberTwo" v-if="props.row.idUser == 2">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span id="numberThree" v-if="props.row.idUser == 3">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-medal"></i>
                  </span>
                  <span>{{ props.row.points }}</span>
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
        <h1 id="etc">...</h1>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { getAllUsers } from '../API/apiUser';


export default {
  name: "Rankings",
  data() {

    const data = [];
    
    return {
      data,
      selected: data[0],
      searchBar: "",
      filteredUsers: [],
      view: 1,
      loggedUser: "",
      users:[]
    };
  },
  async created() {
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
    //let idUser = this.loggedUser.idUser;

      await getAllUsers().then(response => {
      this.users = response.data.data;
      /* eslint-disable */
      console.log(this.users)
    });

    this.filteredUsers = this.users.sort((b, a) => 
      a.points > b.points ? 1 : b.points > a.points ? -1 : 0
    );
    /* eslint-disable */
    console.log("filtro: " + this.filteredUsers)


      this.filteredUsers[0].idUser = 1
      this.filteredUsers[1].idUser = 2
      this.filteredUsers[2].idUser = 3
      this.filteredUsers[3].idUser = 4
      this.filteredUsers[4].idUser = 5

      this.data.push(this.filteredUsers[0])
      this.data.push(this.filteredUsers[1])
      this.data.push(this.filteredUsers[2])
      this.data.push(this.filteredUsers[3])
      this.data.push(this.filteredUsers[4])
    

    


    this.tempRanking = JSON.parse(localStorage.getItem("ranking"));
    // console.log(this.persons)
    this.data.push({
      idUser: "...",
      name: "...",
      points: "..."
    });

    this.data.push({
      idUser: this.loggedUser.idUser,
      name: this.loggedUser.name,
      points: this.loggedUser.points
    });
  },
  mounted() {
   
  },
  methods: {}
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

#columnTable {
  align-content: center !important;
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
  /*width: 550px;
  margin-left: auto;
  margin-right: auto;
  align-self: center !important;
  margin-top: 30px !important;*/
  vertical-align: middle !important;
}
#itemsTable {
  vertical-align: middle !important;
}
#itemsTable:hover {
  background-color: yellow;
}

/*#tableRanking {
  align-self: left !important;
  vertical-align: middle !important;
}*/

.is-selected {
  background-color: #ffbf2f !important;
  color: #ffbf2f;
}

#titleRanking {
  color: #0a1f3c;
  text-align: center;
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
</style>