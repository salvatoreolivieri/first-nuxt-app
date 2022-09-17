import Vue from 'vue'


// ----------- //


// Partials (guest)
import Header from '~/components/Navigation/Header.vue'
import Footer from '~/components/Navigation/Footer.vue'

// Partials (admin)
import AdminHeader from '~/components/Admin/AdminHeader.vue'



// Section
import HeroSection from '../components/Section/HeroSection.vue';
import PostList from '~/components/Posts/PostList.vue';

// Card (post)
import CardPost from '~/components/Posts/CardPost'



// UI
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
import AppButton from '~/components/UI/AppButton.vue'
import AppControlInput from '~/components/UI/AppControlInput.vue'

// UX
import Arrow from '~/components/UX/arrow.vue';



// ----------- //

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('AdminHeader', AdminHeader)


Vue.component('HeroSection', HeroSection)
Vue.component('PostList', PostList)

Vue.component('CardPost', CardPost)

Vue.component('AdminPostForm', AdminPostForm)
Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)

Vue.component('Arrow', Arrow)
