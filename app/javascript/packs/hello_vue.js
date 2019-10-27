
import Vue from 'vue'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(App)
  })

  console.log(app)
})






// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)
// Vue.use(TurbolinksAdapter)

// Vue.config.productionTip = false


// document.addEventListener('turbolinks:load', () => {
// 	// gives vue axes to x-csrg token to be able to submit it as par of the  ajax request. 
//  	Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//  	var element = document.getElementById("todo-form")
 	
//  	if (element != null) {

//  		var id = element.dataset.id
//  		var todo = JSON.parse(element.dataset.todo)
//  		var todo_items_attributes = JSON.parse(element.dataset.todoItemsAttributes)
//     	todo_items_attributes.forEach(function(item) { item._destroy = null })
//    		todo.todo_items_attributes = todo_items_attributes

// 		const app = new Vue({
// 	     el: element,
// 	     // mixins: [TurbolinksAdapter],
// 	     data: function() {
// 	       return { todo: todo }
// 	     },
// 	     methods: {
// 	     	addItem: function(){
// 	     		todo.todo_items_attributes.push({
// 	     			id: null,
// 	     			description:'',
// 	     			_destroy: null
// 	     		})
// 	     	}
// 	     }
	     
// 	   })

// 	    console.log(element)
// 	    console.log(todo_items_attributes)
// 	}
// })


// // The above code uses Vue without the compiler, which means you cannot
// // use Vue to target elements in your existing html templates. You would
// // need to always use single file components.
// // To be able to target elements in your existing html/erb templates,
// // comment out the above code and uncomment the below
// // Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// // Then add this markup to your html template:
// //
// // <div id='hello'>
// //   {{message}}
// //   <app></app>
// // </div>
// // Vue.config.productionTip = false


// // import Vue from 'vue/dist/vue.esm'
// // import App from '../app.vue'

// // document.addEventListener('DOMContentLoaded', () => {
// //   const app = new Vue({
// //     el: '#id',
// //     data: {
// //       message: "Can you say hello?"
// //     },
// //     components: { App }
// //   })
// // })


// //
// // If the project is using turbolinks, install 'vue-turbolinks':
// //
// // yarn add vue-turbolinks
// //
// // Then uncomment the code block below:
// //
// // import TurbolinksAdapter from 'vue-turbolinks'
// // import Vue from 'vue/dist/vue.esm'
// // import App from '../app.vue'

// // Vue.use(TurbolinksAdapter)

// // document.addEventListener('turbolinks:load', () => {
// //   const app = new Vue({
// //     el: '#hello',
// //     data: () => {
// //       return {
// //         message: "Can you say hello?"
// //       }
// //     },
// //     components: { App }
// //   })
// // })
