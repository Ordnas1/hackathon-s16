# Hackathon Semana 16

## ¿Qué es Vuex? Indicar ventajas y desventajas
Vuex es una implementación de un gestor del estado ("state") para las aplicaciones en Vue.js. Sirve para manejar un store o almacenamiento centralizado en nuestra con reglas explicitas que nos permiten cambiar el estado interno de una forma consistente y predecible.

Un gestor del estado de nuestra app no implica otra cosa más que separar la vista (Nuestros componenetes de Vue.js) de nuestra app de su estado (Todos sus atributos) y manejar estos como si fueran un patrón singleton (Solo existe una sola instancia que almacena y gestiona cambios de estado)

Las ventajas de usar Vuex y otros State Management Patterns en nuestros proyectos son varias. Una de ellas es que nos permiten gestionar la complejidad del proyecto ya que este resultará en un código fuente más mantenible. Vuex facilita el desarrollo de SPAs de mediana a gran escala ya que alivia los problemas causados por la comunicación de datos entre componentes de la app.

Por otra parte, Vuex no es recomendable usarse en proyectos chicos o aquellos en donde no sea necesario un store centralizado ya que añade más código boilerplate y además es necesario tener el conocimiento adicional para aplicar Vuex a nuestros proyectos


## ¿Cúales son los principales conceptos de Vuex?
Toda aplicación que haga uso de Vuex tiene un store central. Un store no es nada más que una instancia que guarda el estado de nuestra app. No podemos cambiar de forma directa el estado de nuestra app. Este se cambia de usando mutaciones.

Las mutaciones son la forma por la cual nosotros cambiamos de forma explicita el estado de nuestra app. Se ejecutan realizando commits. Estos son síncronos. Para usar asincronía usamos los actions.

Los actions son bien parecidos a los mutations. La diferencia es que los actions solo realizan commits a los mutations y, además, pueden ser asíncronos.

Podemos implementar un store de Vuex para una sencilla app contadora de la siguiente manera

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count += 1
        },
        decrement (state) {
            state.count -= 1
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        },
        decrement (context) {
            context.commit('decrement')
        }
    }
})


```



## ¿Por qué y para qué se necesitaria utilizar un administrador de estados?

Un administrador de estados se usa para gestionar la complejidad de un proyecto que nace de la necesidad de acceder, hacer uso y mutar la información (estado) de nuestros componentes en Vue.js. Cuando un proyecto crece y tiene varios componentes padres-hijos-nietos y es necesaria la comunicación entre estos, el manejo del estado se vuelve complicado de mantener y de hacer debugging. Al introducir Vuex estamos agregando la complejidad de manejar una herramienta más, pero por otro lado estamos reduciendo la complejidad al hacer que nuestra gestión del estado de nuestra app siga una lógica definida.

Por lo tanto, el contexto adecuado para usar Vuex es aquel en donde nuestro proyecto vaya a crecer y tenga varios componentes que requieran mandar información entre ellos o que requieran de un store centralizado para acceder a dicha informacion