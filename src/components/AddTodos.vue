<template>
    <div class="banner-search">
        <h2>Add To The List</h2>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="1"></v-col>
                    <v-col cols="12" sm="10" style="padding-top:0;">
                        <div class="banner-form">
                            <div class="banner-form-in">
                                <div class="banner-form-inner">
                                    <div>
                                        <v-text-field
                                            solo
                                            hide-details
                                            label="Add Todo"
                                            height="47px"
                                            append-icon="mdi-plus-box-outline"
                                            v-model="title"
                                        ></v-text-field>
                                    </div>
                                    <div>
                                        <v-btn min-width="100%"  small min-height="47px" color="#104388" dark @click="submit">Submit</v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="1"></v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name:"AddTodo",
    data(){
        return{
            title:''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        submit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }
    }
}
</script>
<style scoped>
.banner-search .col-sm-8, .banner-search .col-sm-2, .banner-search .col-sm-4{
    padding: 0 7px;
}
.banner-form-inner {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1em;
    margin-top: 10px;
}
.v-btn.v-size--small{
        text-transform: unset;
        font-size: 16px;
        font-weight: 400;
    }
.banner-form{
    margin: 0% 0 1%;
    padding-bottom: 1.5em;
    
}
.banner-form-in{
    padding: 10px 10px 20px;
    background: #ffffff4d;
    
}
.banner-search h2{
    text-align: center;
    color: #fff;
    font-weight: 400;
    padding: 2em 0 1em;
}
.banner-search {
    background: #ebedf3;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/listing-banner.jpg");
}

</style>
