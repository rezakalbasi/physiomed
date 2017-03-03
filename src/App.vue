<template>
  <div id="app">
    <md-toolbar class="md-medium">
      <img src="./assets/Capture.png" alt="Auckland Bioengineering Institute" height="300" width="300">
      <img src="./assets/physiomed.png" alt="Logo" align="middle" height="300" width="300">
    </md-toolbar>
    <div>
      <md-layout v-if="pageNumber === 1" >
        <md-layout>
          <md-input-container>
            <label for="person">Person</label>
            <md-select name="person" placeholder="Please choose a model" v-model="person">
              <md-option v-bind:value="person.name" v-for="person in people">
                {{ person.name }}

              </md-option>
            </md-select>
          </md-input-container>

          <md-card style="width: 100%">
            <md-card-header>
              <div class="md-title">Computational Physiology Model</div>
            </md-card-header>

            <md-card-content>
              {{ person }}
            </md-card-content>
          </md-card>
        </md-layout>

        <md-layout>
          <md-input-container>
            <label>CP Concepts</label>
            <md-input v-model="cp"></md-input>
          </md-input-container>

          <md-card style="width: 100%">
            <md-card-header>
              <div class="md-title">Computational Physiology Concept</div>
            </md-card-header>

            <md-card-content>
              {{ cp }}
            </md-card-content>
          </md-card>
        </md-layout>
      </md-layout>

      <md-layout md-gutter v-if="pageNumber === 2">
        <md-layout md-align="center end">
          <md-list>
            <md-list-item v-for="response in responseBody">
              <span style="margin-right: 20px">
                {{ response[3] }}
                <a v-bind:href="response[2]" target="_blank">[{{ response[2] }}]</a>
              </span>
              <md-checkbox class="md-primary" v-model="checkbox">
              </md-checkbox>
            </md-list-item>
          </md-list>
        </md-layout>
      </md-layout>

      <md-layout md-gutter v-if="pageNumber === 3">
        <md-layout md-align="center">
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head style="font-size: 22px">CP Term</md-table-head>
                <md-table-head style="font-size: 22px">Clinical Term</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row v-for="response in responseBody">
                <md-table-cell>{{ response[3] }}</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </md-layout>
      </md-layout>

      <md-layout md-gutter v-if="pageNumber === 4">
        <md-layout>
          <md-list style="width: 100%">
            <md-list-item md-expand-multiple>
              <md-icon>videogame_asset</md-icon>
              <span>Archetype 1</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">World</md-list-item>
                  <md-list-item class="md-inset">Americas</md-list-item>
                  <md-list-item class="md-inset">Europe</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item md-expand-multiple>
              <md-icon>videogame_asset</md-icon>
              <span>Archetype 2</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">Console</md-list-item>
                  <md-list-item class="md-inset">PC</md-list-item>
                  <md-list-item class="md-inset">Phone</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item md-expand-multiple>
              <md-icon>videogame_asset</md-icon>
              <span>Archetype 3</span>

              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">Humor</md-list-item>
                  <md-list-item class="md-inset">Music</md-list-item>
                  <md-list-item class="md-inset">Movies</md-list-item>
                  <md-list-item class="md-inset">TV Shows</md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>
          </md-list>
        </md-layout>

        <md-layout>
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head style="font-size: 22px">Clinical Electronic Health Record</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>Value 1</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>Value 1</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>Value 1</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </md-layout>
      </md-layout>
    </div>

    <md-bottom-bar>
      <md-bottom-bar-item md-icon="skip_previous" @click.native="pageNumber--" v-if="pageNumber > 1">Prev</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="skip_next" @click.native="pageNumber++" v-if="pageNumber < 4">Next</md-bottom-bar-item>
    </md-bottom-bar>
    <!--<md-card>
    <md-card-media>
      <img src="./assets/logo.png" alt="People">
    </md-card-media>
  </md-card>-->
  </div>
</template>


<script>
  import Vue from 'vue'

  export default {
    name: 'app',
    data() {
      return {
        people: [{
          name: "chang_fujita_1999-semgen.cellml"
        }, {
          name: "chang_fujita_b_1999-semgen.cellml"
        }, {
          name: "eskandari_2005-semgen.cellml"
        }, {
          name: "mackenzie_1996-semgen.cellml"
        }, {
          name: "moss_2009-semgen.cellml"
        }, {
          name: "thomas_2000-semgen.cellml"
        }, {
          name: "weinstein_1995-semgen.cellml"
        }],
        responseBody: [],
        person: null,
        cp: null,
        placeholder: this.person ? 'Call API for ' + this.person : 'No one is selected yet',
        pageNumber: 1
      };
    },
    watch: {
      person: function (person) {
        var formData = new FormData();
        formData.append('cellml', `https://models.physiomeproject.org/workspace/267/rawfile/240aec39cbe4a481af115b02aac83af1e87acf2e/semgen-annotation/${person}`);
        this.$http.post('http://127.0.0.1:5000/pmr', formData).then(response => {
          this.responseBody = response.body;
        });
      }
    },
    methods: {
      // callToAPI() {
      // const select = document.querySelector(".js-select");

      // this.person = `Call to API for ${select.value}. API implementation soon.`;
      // }
    }
  }

</script>

<style>
  html,
  body,
  #app {
    height: 100%;
  }
  
  .md-layout > .md-layout {
    margin: 0 50px;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*margin-top: 60px;*/
    /*padding: 15px;*/
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>