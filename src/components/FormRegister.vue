<template>
  <div>
    <div class="container pb-5">
      <b-alert show class="text-center"><h3 class="title">{{title}}</h3></b-alert>
      <p class="text-center text-muted subtitle">FORMULARIO DE CONTACTO</p>
      <div class="mt-3 mb-5">
        <b-card no-body>
          <form novalidate>
            <b-tabs card v-model="tabIndex">
              <b-tab title="Datos Personales" title-link-class="text-info" >
                <div class="row mt-3">
                  <div class="col-md-6">
                    <b-form-group
                      id="name"
                      label="Nombre: *"
                      label-for="name"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input v-bind:class="{ 'is-invalid': hasErrorName}" id="name" v-model="data.name" trim></b-form-input>
                      <div class="invalid-feedback" v-bind:class="{ 'invalid': hasErrorName}">
                          Nombre requerido
                      </div>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="lastName"
                      label="Apellido:"
                      label-for="lastName"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="lastName" v-model="data.lastName"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="country"
                      label="Pais: *"
                      label-for="country"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input v-bind:class="{ 'is-invalid': hasErrorCountry}" id="country" v-model="data.country" trim></b-form-input>
                      <div class="invalid-feedback" v-bind:class="{ 'invalid': hasErrorCountry}">
                          Pais requerido
                      </div>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="nacionality"
                      label="Nacionalidad: *"
                      label-for="nacionality"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input v-bind:class="{ 'is-invalid': hasErrorNacionality}" id="nacionality" v-model="data.nacionality" trim></b-form-input>
                      <div class="invalid-feedback" v-bind:class="{ 'invalid': hasErrorNacionality}">
                          Nacionalidad requerida
                      </div>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="province"
                      label="Provincia:"
                      label-for="province"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="province" v-model="data.province" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="city"
                      label="Cuidad:"
                      label-for="city"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="city" v-model="data.city" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="postalCode"
                      label="Código Postal:"
                      label-for="postalCode"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="postalCode" v-model="data.postalCode" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="address"                    
                      label="Dirección:"
                      label-for="address"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="address" v-model="data.address" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6 offset-md-6">
                    <b-form-group
                      id="age"                    
                      label="Edad: *"
                      label-for="age"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input v-bind:class="{ 'is-invalid': hasErrorAge }" type="number" id="age" v-model="data.age" min="1" max="100" trim></b-form-input>
                      <div class="invalid-feedback" v-bind:class="{ 'invalid': hasErrorAge }">
                          Edad requerida
                      </div>
                    </b-form-group>
                  </div>
                  <div class="col-md-6 text-left">
                    <b-form-group
                      id="car"                    
                      label="Coche:"
                      label-for="car"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left">
                      <b-form-radio-group
                          :options="options"
                          buttons button-variant="outline-info" 
                          id="car" 
                          v-model="data.car" 
                          name="car">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                <div class="col-md-6 text-left">
                  <b-form-group
                      id="driver"                    
                      label="Sabe conducir:"
                      label-for="driver"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left">
                    <b-form-radio-group
                        :options="options"
                        buttons button-variant="outline-info" 
                        id="driver" 
                        v-model="data.driver" 
                        name="driver">
                    </b-form-radio-group>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                    <b-form-group
                      id="workPosition"
                      label="Puesto en el que desea trabajar:"
                      label-for="workPosition"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="workPosition" v-model="data.workPosition" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="salary"
                      label="Expectativa salarial:"
                      label-for="salary"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="salary" v-model="data.salary" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="familyStatus"
                      label="Situación familiar:"
                      label-for="familyStatus"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="familyStatus" v-model="data.familyStatus" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="kids"
                      label="Número de hijos:"
                      label-for="kids"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input type="number" id="kids" v-model="data.kids" min="0" max="100" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="email"
                      label="Correo electrónico: *"
                      label-for="email"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input 
                          type="email" 
                          v-bind:class="{ 'is-invalid': hasErrorEmail }" id="email" 
                          v-model="data.email" 
                          trim></b-form-input>
                      <div class="invalid-feedback" v-bind:class="{ 'invalid': hasErrorEmail}">
                          Email valido requerido
                      </div>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="alternativeEmail"
                      label="Correo electrónico alternativo:"
                      label-for="alternativeEmail"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input type="email" id="alternativeEmail" v-model="data.alternativeEmail" trim></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Datos de Contacto" title-link-class="text-info">
                <div class="row mt-3">
                  <div class="col-md-6">
                    <b-form-group
                      id="skype"
                      label="Skype:"
                      label-for="skype"
                      label-cols-sm="4"
                      label-cols-lg="4"
                      label-align="left"
                    >
                      <b-form-input id="skype" v-model="data.skype" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="phone"
                      label="Teléfono movil (cod. pais + numero)"
                      label-for="phone"
                      label-cols-sm="4"
                      label-cols-lg="4"
                      label-align="left"
                    >
                      <b-form-input type="number" min="1" id="phone" v-model="data.phone"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="phoneHome"
                      label="Teléfono de casa (cod. pais + numero)"
                      label-for="phoneHome"
                      label-cols-sm="4"
                      label-cols-lg="4"
                      label-align="left"
                    >
                      <b-form-input type="number" min="1" id="phoneHome" v-model="data.phoneHome" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="phoneOffice"
                      label="Teléfono de oficina (cod. pais + numero)"
                      label-for="phoneOffice"
                      label-cols-sm="4"
                      label-cols-lg="4"
                      label-align="left"
                    >
                      <b-form-input type="number" min="1" id="phoneOffice" v-model="data.phoneOffice"trim></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Datos de Formación" title-link-class="text-info">
                <div class="row mt-3">
                  <div class="col-md-12">
                    <b-form-group
                      id="academicLevel"
                      label="Nivel académico que posee:"
                      label-for="academicLevel"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input id="academicLevel" v-model="data.academicLevel" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="universityLevel"
                      label="Titulo Universitario o título que posee:"
                      label-for="universityLevel"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input id="universityLevel" v-model="data.universityLevel" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="englishLevel"
                      label="Indique de 0 a 100 nivel de inglés que posee:"
                      label-for="englishLevel"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="englishLevel" v-model="data.englishLevel" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="otherLanguage"
                      label="Indique de 0 a 100 otro idioma que domine:"
                      label-for="otherLanguage"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="otherLanguage" v-model="data.otherLanguage" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="excelLevel"
                      label="Indique de 0 a 100 conocimiento de hoja de calculo (Excel, Google)"
                      label-for="excelLevel"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="excelLevel" v-model="data.excelLevel" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="wordLevel"
                      label="Indique de 0 a 100 conocimiento de procesadores de texto (word)"
                      label-for="wordLevel"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="wordLevel" v-model="data.wordLevel" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="googleLevel"
                      label="Indique de 0 a 100 conocimiento herramientas de google (drive, maps, gmail, busqueda)"
                      label-for="googleLevel"
                      label-cols-sm="6"
                      label-cols-lg="6"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="googleLevel" v-model="data.googleLevel" trim></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Datos Técnicos" title-link-class="text-info">
                <h6 class="text-center text-danger font-weight-bold mt-3">
                SOLO PARA CALLCENTER DESDE CASA LATINOAMERICA</h6>
                <div class="row mt-5">
                  <div class="col-md-12">
                    <b-form-group
                      id="internet"
                      label="Tipo de internet que posee (Residencial, Movil):"
                      label-for="internet"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="internet" v-model="data.internet" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="internetVelocity"
                      label="Velocidad de internet:"
                      label-for="internetVelocity"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="internetVelocity" v-model="data.internetVelocity" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="pc"
                      label="Tipo de computadora (de escritorio, laptop 15.6, minilaptop)"
                      label-for="pc"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="pc" v-model="data.pc" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="pcDescription"
                      label="Breve descripción de los componentes de su computadora:"
                      label-for="pcDescription"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="pcDescription" v-model="data.pcDescription" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-5 text-left">
                    <b-form-group
                      id="mouse"                    
                      label="Posee mouse físico:"
                      label-for="mouse"
                      label-cols-sm="6"
                      label-cols-lg="8"
                      label-align="left">
                      <b-form-radio-group
                          :options="options"
                          buttons button-variant="outline-info" 
                          id="mouse" 
                          v-model="data.mouse" 
                          name="mouse">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                  <div class="col-md-7 text-left">
                    <b-form-group
                      id="keyboard"                    
                      label="Posee teclado extendido (es el que tiene el panel numérico a la derecha)"
                      label-for="keyboard"
                      label-cols-sm="6"
                      label-cols-lg="10"
                      label-align="left">
                      <b-form-radio-group
                          :options="options"
                          buttons button-variant="outline-info" 
                          id="keyboard" 
                          v-model="data.keyboard" 
                          name="keyboard">
                      </b-form-radio-group>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="internetCompany"
                      label="Compañia que le proporciona el internet:"
                      label-for="internetCompany"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="internetCompany" v-model="data.internetCompany" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="placeDescription"
                      label="Descripción del lugar donde trabajará:"
                      label-for="placeDescription"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="placeDescription" v-model="data.placeDescription" trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-12">
                    <b-form-group
                      id="stability"
                      label="Estabilidad domiciliaria:"
                      label-for="stability"
                      label-cols-sm="6"
                      label-cols-lg="5"
                      label-align="left"
                    >
                      <b-form-input id="stability" v-model="data.stability" trim></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Referencias Laborables" title-link-class="text-info">
                <div class="row mt-3">
                  <div class="col-md-6">
                    <b-form-group
                      id="firstExperience"
                      label="Experiencia laboral 1:"
                      label-for="firstExperience"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="firstExperience" v-model="data.firstExperience"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="firstYears"
                      label="Años de duración:"
                      label-for="firstYears"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="firstYears" v-model="data.firstYears"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="firstBoss"
                      label="Jefe inmediato:"
                      label-for="firstBoss"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="firstBoss" v-model="data.firstBoss"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="firstBossPhone"
                      label=" Teléfono:"
                      label-for="firstBossPhone"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input type="number" min="1" id="firstBossPhone" v-model="data.firstBossPhone"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="secondExperience"
                      label="Experiencia laboral 2:"
                      label-for="secondExperience"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="secondExperience" v-model="data.secondExperience"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="secondYears"
                      label="Años de duración:"
                      label-for="secondYears"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input type="number" min="0" id="secondYears" v-model="data.secondYears"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="secondBoss"
                      label="Jefe inmediato:"
                      label-for="secondBoss"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input id="secondBoss" v-model="data.secondBoss"trim></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-md-6">
                    <b-form-group
                      id="secondBossPhone"
                      label=" Teléfono:"
                      label-for="secondBossPhone"
                      label-cols-sm="4"
                      label-cols-lg="3"
                      label-align="left"
                    >
                      <b-form-input type="number" min="1" id="secondBossPhone" v-model="data.secondBossPhone"trim></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </form>
          <div class="mb-2 text-center">
            <b-button variant="info" v-on:click="submitedForm">Enviar</b-button>
          </div>
        </b-card>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <b-spinner variant="info" label="Spinning" style="width: 5rem; height: 5rem;"></b-spinner>
    </div>
    <b-modal hide-footer hide-header-close ref="modalSuccess" centered title="Registro Enviado!">
      <p class="my-4">
        <pre>
          {{ data }}
        </pre>
      </p>
      <b-button class="mt-3" variant="info" block @click="hideModal">Cerrar</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'FormRegister',
  computed: {
    },
    data() {
      return {
        title: 'BOLSA DE TRABAJO',
        tabIndex: 0,
        hasErrorName: false,
        hasErrorCountry: false,
        hasErrorNacionality: false,
        hasErrorAge: false,
        hasErrorEmail: false,
        loading: false,
        options: [
            { text: 'Si', value: 'yes' },
            { text: 'No', value: 'no' },
          ],
        data: {
          name: '',
          lastName: '',
          country: '',
          nacionality: '',
          province: '',
          city: '',
          postalCode: '',
          address: '',
          age: '',
          workPosition: '',
          salary: '',
          familyStatus: '',
          kids: '',
          email: null,
          alternativeEmail: '',
          skype: '',
          phone: '',
          phoneHome: '',
          phoneOffice: '',
          academicLevel: '',
          universityLevel: '',
          englishLevel: '',
          otherLanguage: '',
          excelLevel: '',
          wordLevel: '',
          googleLevel: '',
          internet: '',
          internetVelocity: '',
          pc: '',
          pcDescription: '',
          mouse: 'yes',
          keyboard: 'yes',
          internetCompany: '',
          placeDescription: '',
          stability: '',
          firstExperience: '',
          firstYears: '',
          firstBoss: '',
          firstBossPhone: '',
          secondExperience: '',
          secondYears: '',
          secondBoss: '',
          secondBossPhone: '',
          car: 'no',
          driver: 'no',
        }
      }
    },
    methods: {

      submitedForm() {
        if (this.data.name.length == 0) {
          this.hasErrorName = true;
        } else {
          this.hasErrorName = false;
        }
        if (this.data.country.length == 0) {
          this.hasErrorCountry = true;
        } else {
          this.hasErrorCountry = false;
        }
        if (this.data.nacionality.length == 0) {
          this.hasErrorNacionality = true;
        } else {
          this.hasErrorNacionality = false;
        }
        if (this.data.age.length == 0) {
          this.hasErrorAge = true;
        } else {
          this.hasErrorAge = false;
        }
        if (!this.validEmail(this.data.email)) {
          this.hasErrorEmail = true;
        } else {
            this.hasErrorEmail = false;
        }

        if(!this.hasErrorName && !this.hasErrorAge && !this.hasErrorEmail && !this.hasErrorCountry && !this.hasErrorNacionality) {
          this.loading = true;

          setTimeout(() => { 
            this.loading = false;
            this.$refs['modalSuccess'].show();
          }, 2000);

        } else {
          if (this.tabIndex != 0) 
            this.tabIndex = 0;
        }
      },

      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      hideModal() {
        this.$refs['modalSuccess'].hide();
        this.resetForm();
      },

      resetForm() {
        var self = this; 
        Object.keys(this.data).forEach(function(key,index) {
          self.data[key] = '';
        });
        this.data.car = 'no';
        this.data.driver = 'no';
        this.data.mouse = 'yes';
        this.data.keyboard = 'yes';
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
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
.subtitle {
  font-size: 14px;
}
.offset-md-6 {
  margin-right: 50% !important;
  margin-left: 0% !important;
}
.tab-content > .active {
  outline: none !important;
}
.card-header {
  display: flex !important;
  justify-content: center !important;
}
.title {
  font-weight: 600;
  letter-spacing: 2px;
}
.nav-tabs {
  font-size: 18px;
}
.btn {
  cursor: pointer !important;
}
.invalid {
  display: block !important;
}
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}
.modal-dialog {
    overflow-y: initial !important
}
.modal-body {
    height: 450px !important;
    overflow-y: auto !important;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #17a2b8; 
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #17a2b8; 
}
.form-row {
  display: flex !important;
  align-items: center !important;
}
</style>
