<template id="achievement">
  <section>
    <div class="achievements">
      <br />
      <br />
      <br />
      <h1 id="titleAchievements" class="title is-1-desktop is-8-tablet is-12-mobile">Achievements</h1>
      <br />
      <br />
      <div class="container" id="tableAchievements">
        <div class="columns">
          <div class="column is-offset-2 is-8-desktop is-8-tablet is-11-mobile">
            <!--<progress id="progressBarLarge" class="progress is-large is-12-mobile" :value="loggedUser.percentWon" max="100" show-value>{{loggedUser.percentWon}}</progress>
            <p id="totalProgress">3/5</p>-->

            <b-progress
              id="progressBar"
              :value="1"
              :max="achievements.length"
              size="is-large"
              show-value
            >1 / {{achievements.length}}</b-progress>
          </div>
        </div>

        <br />
        <div class="level-item has-text-centered">
          <div id="cardView" class="columns is-multiline">
            <div
              id="cardHover"
              class="column is-11-mobile is-8-tablet is-4-desktop is-centered"
              v-for="(achievement,i) in tempAchievements"
              :key="i"
            >
              <div class="card" id="cardPerson">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img id="imageCard" v-if="achievement.isActive == false" :src="achievement.imageDefault" alt="Placeholder image" />
                        <img id="imageCard" v-if="achievement.isActive == true" :src="achievement.imageType.image" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <!--<p  class="title is-15">{{person.id}}</p>-->
                      <p id="cardName" class="subtitle is-12">{{achievement.description}}</p>
                      <p id="cardProgress" v-if="achievement.isActive == false" class="subtitle is-20">0/{{achievement.goal}}</p>
                      <p id="cardProgress" v-if="achievement.isActive == true" class="subtitle is-20">{{achievement.goal}}/{{achievement.goal}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </section>
</template>

<script>
import { getAllAchievements } from "../API/apiAchievement";
import { getAllUsers, getAllUsersSensors } from "../API/apiUser";
import { getAllSensors } from "../API/apiSensor";

export default {
  name: "Achievements",
  data() {
    

    return {
      searchBar: "",
      view: 1,
      achievements: [],
      users: [],
      userSensors: [],
      loggedUser: "",
      tempAchievements:[],
      sensors: []
     // isActive: false,
    };
  },
  async created() {
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
    let idUser = this.loggedUser.idUser;

    await getAllAchievements().then(response => {
      this.achievements = response.data.data;
      /* eslint-disable */
      console.log(this.achievements);
    });

    await getAllSensors().then(response => {
      this.sensors = response.data.data;
      /* eslint-disable */
      console.log(this.sensors);
    });

    await getAllUsers().then(response => {
      this.users = response.data.data;
      /* eslint-disable */
      console.log("users: " + this.users);
    });

    await getAllUsersSensors(idUser).then(response => {
      this.userSensors = response.data.data;
      /* eslint-disable */
      console.log("usersensors");
      console.log(this.userSensors);
    });
    for (let i = 0; i < this.achievements.length; i++) {
      this.tempAchievements.push({
        imageType: {
          type: this.achievements[i].imageType.type,
          image: this.achievements[i].imageType.image
        },
        description: this.achievements[i].description,
        goal: this.achievements[i].goal,
        imageDefault: this.achievements[i].imageDefault,
        isActive: false
      })
    }
    

      console.log(this.tempAchievements)
      
      if(this.userSensors.length >= 1){
        this.tempAchievements[19].isActive = true

      }
      if(this.userSensors.length >= 5){
        this.tempAchievements[18].isActive = true
      }
      if(this.userSensors.length >= 20){
        this.tempAchievements[18].isActive = true
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
  width: 400px;
  height: 130px;
  size: 1px;
  align-items: center !important;
  vertical-align: middle !important;
  border: #0a1f3c;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  text-align: center !important;
}
.card p {
  color: #f2f2f2;
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
  vertical-align: middle !important;
}
#cardName {
  vertical-align: middle !important;
  text-align: center !important;
}
#cardProgress {
  vertical-align: middle !important;
  text-align: center !important;
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

#tableAchievements {
  align-self: center !important;
  align-items: center !important;
  vertical-align: middle !important;
}

#titleAchievements {
  color: #0a1f3c;
  text-align: center;
}

#cardPerson {
  background-color: #0a1f3c;
}

/*#progressBarLarge {
  background-color: #ffbf2f !important;
  color: #ffbf2f !important;
  margin-left: 160px !important;
  width: 1020px;
}*/
#totalProgress {
  color: #0a1f3c;
}

#cardHover:hover {
  transform: scale(1.1);
}
#progressBar {
  color: #0a1f3c !important;
  align-self: center !important;
}
</style>