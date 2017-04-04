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
            <label for="cellml">CellML Model</label>
            <md-select name="cellml" placeholder="Please choose a model" v-model="cellml">
              <md-option v-bind:value="cellml.name" v-for="cellml in models">
                {{ cellml.name }}

              </md-option>
            </md-select>
          </md-input-container>

          <md-card style="width: 100%">
            <md-card-header>
              <div class="md-title">Computational Physiology Model</div>
            </md-card-header>

            <md-card-content>
              {{ cellml }}
            </md-card-content>
          </md-card>
        </md-layout>




        <md-layout>
          <md-card style="width: 120%">
             
             
             <div id="app-6">
                  <!--p>{{ message }}</p-->
                  <input v-model="message">
             </div>
          
          
          
          <div class="grid_10 omega" style="margin-left:30px">
      <h3>Select a Computational Physiology Concept</h3>
                <form id="local-search" name="local-search" action="http://www.ebi.ac.uk/ols/search" method="get">
                    <fieldset><div class="left">
                        <label>
                            <input v-model="message2" style="font-weight: normal" size="45" type="text" name="q" data-olswidget="select" data-olsontology="" data-selectpath="http://www.ebi.ac.uk/ols/" olstype="" id="local-searchbox" placeholder="Enter the term you are looking for" class="ac_input">
                            </input>
                        </label>
                    </div>
                        <div class="right">
                            <input type="submit" value="Search" class="submit">
                            </input>
                        </div>
                    </fieldset>
                </form>
                <br>
                <i>Note: This first sample demonstrates the 'select' functionality of App, just enter a term (e.g. cancer)</i>
</div>
            <md-card-header>              
              <md-layout md-align="center end">
      <div><h2>Computational Physiology Conecept Ontology</h2></div>
      <div id="term-tree"    style="height:300px; width:400px; border:1px solid white;"></div>
              </md-layout>
            </md-card-header>
          </md-card>
        </md-layout>
      </md-layout>









<!--22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222  -->
<!--22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222  -->



<md-layout md-gutter v-if="pageNumber === 2">

   <md-layout md-align="center end">
       <h2>   Computational Model Annotations </h2>
          <md-list>
            <md-list-item v-for="(response,u) in a">
              <span style="margin-right: 20px">
                   {{ a[u] }}   
                   <a  v-bind:href="b[u]" target="_blank">[{{ b[u] }}]</a>
              </span>
              <md-checkbox class="md-primary" v-model="checkbox">
              </md-checkbox>
            </md-list-item>
          </md-list>
        </md-layout>    

    <md-layout md-align="center end">
          <md-list>
           <h2> Ontological concept </h2>
             <md-list-item>
                <span style="margin-right: 20px">

                  {{ message2 }}
                  <a  v-bind:href="b[u]" target="_blank">[{{ b[u] }}]</a>
              
                </span>
                <md-checkbox class="md-primary" v-model="checkbox">
              </md-checkbox>
            </md-list-item>
          </md-list>
        </md-layout>   
       
      </md-layout>


<!--88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888  -->
<!--88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888  -->


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
              <md-table-row>
                <md-table-cell> {{ message2 }}</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
              <md-table-row v-for="(response,u) in a">
                <md-table-cell>{{ a[u] }}</md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </md-layout>
      </md-layout>


<!--88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888  -->
<!--88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888  -->

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
        models: [{
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
        a:[],
        b:[],
        c:[],
        cellml: null,
        cp: null,
        placeholder: this.cellml ? 'Call API for ' + this.cellml : 'No one is selected yet',
        pageNumber: 1
      };
    },
    watch: {
      cellml: function (cellml) {
        var formData = new FormData();
        formData.append('cellml', `https://models.physiomeproject.org/workspace/267/rawfile/240aec39cbe4a481af115b02aac83af1e87acf2e/semgen-annotation/${cellml}`);
        this.$http.post('http://127.0.0.1:5000/pmr', formData).then(response => {
          this.responseBody = response.body;
          var n;
          n= this.responseBody.length;
          var i;
          var j;
          for(i = 0; i < n; i++){
                      this.a.push(response.body[i][3]);
                                            
                                }
                   this.a.sort();
                   for(j = 0; j < n; j++) {            
                    if (this.a[j]==this.a[j+1]) {
                      delete this.a[j];
                                                 }
                    
                                          }
                   this.a.sort();
                   this.a = this.a.filter(Boolean);
           
           
           
           var r;
           var q;
           var z;
           z= this.a.length;
           for(r = 0; r < z; r++){
             for(q = 0; q < n; q++){
                  if (this.a[r]==response.body[q][3])  {this.b.push(response.body[q][2]);
                  break;}
                                    }
                                  }

    /*      
          var t;
          for(t = 0; t < z; t++){
                      this.c[t] =  this.a[t]+" ("+ this.b[t]+")";
                      //this.c[t] = this.a[t]+"("+ this.b[t].link() +")";
                      
                               }
      */    
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