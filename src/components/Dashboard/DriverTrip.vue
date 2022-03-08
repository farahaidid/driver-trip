<template>
  <v-form v-model="valid" class="mt-6">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="driver"
            :items="drivers"
            item-text="name"
            item-value="name"
            hide-details="auto"
            outlined
            :rules="rules"
            dense
            label="Driver"
            required
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="vehicle"
            :items="vehicles"
            item-text="name"
            item-value="name"
            hide-details="auto"
            outlined
            :rules="rules"
            dense
            label="Vehicle"
            required
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="company"
            :items="companies"
            item-text="name"
            item-value="name"
            hide-details="auto"
            outlined
            :rules="rules"
            dense
            label="Company"
            required
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="doNo"
            hide-details="auto"
            outlined
            :rules="rules"
            dense
            label="DO NO."
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="from"
            :items="fromDestinations"
            item-text="name"
            item-value="name"
            hide-details="auto"
            outlined
            :rules="rules"
            dense
            label="From"
            required
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="to"
            :items="toDestinations"
            item-text="name"
            item-value="name"
            hide-details="auto"
            outlined
            :rules="rules"
            dense
            label="To"
            required
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6">
          <v-dialog
            ref="fromDialog"
            v-model="fromModal"
            :return-value.sync="fromDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fromDate"
                hide-details="auto"
                label="From Date"
                dense
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="fromDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="fromModal = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.fromDialog.save(fromDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" md="6">
          <v-dialog
            ref="toDialog"
            v-model="toModal"
            :return-value.sync="toDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="toDate"
                hide-details="auto"
                label="To Date"
                dense
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="toDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="toModal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.toDialog.save(toDate)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>

        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="ton"
                hide-details="auto"
                type="number"
                outlined
                dense
                label="Ton"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="price"
                hide-details="auto"
                type="number"
                outlined
                dense
                label="price"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pt-0">
              <p class="mb-1">Net Total * 18%</p>
              <p class="mb-0">{{ ton * price + ton * price * 0.18 }}</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6"></v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="cashDiesel"
            hide-details="auto"
            outlined
            dense
            label="Cash Diesel"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="cashToll"
            hide-details="auto"
            outlined
            dense
            label="Cash Toll"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="naikTarun"
            hide-details="auto"
            outlined
            dense
            label="Naik Tarun"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="hp"
            hide-details="auto"
            outlined
            dense
            label="H/P"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="allown"
            hide-details="auto"
            outlined
            dense
            label="Allown"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="tyre"
            hide-details="auto"
            outlined
            dense
            label="Tyre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="othersRepair"
            hide-details="auto"
            outlined
            dense
            label="Others Repair"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="10">
          <v-text-field
            v-model="remarks"
            hide-details="auto"
            outlined
            dense
            label="Remarks"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="error" elevation="0" outlined class="mt-5" @click="submit"
      >Submit</v-btn
    >
  </v-form>
</template>

<script>
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  serverTimestamp,
} from "@firebase/firestore";
export default {
  data: () => ({
    valid: false,
    driver: "",
    drivers: [],
    vehicle: "",
    vehicles: [],
    company: "",
    companies: [],
    doNo: "",
    from: "",
    fromDestinations: [],
    to: "",
    toDestinations: [],
    ton: "",
    price: "",
    cashDiesel: "",
    cashToll: "",
    naikTarun: "",
    hp: "",
    allown: "",
    tyre: "",
    othersRepair: "",
    remarks: "",
    rules: [(v) => !!v || "Value is required"],
    fromDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    fromModal: false,
    toModal: false,
  }),
  methods: {
    async submit() {
      const db = getFirestore();
      try {
        const doc = await addDoc(collection(db, "driver-trips"), {
          driver: this.driver,
          vehicle: this.vehicle,
          company: this.company,
          doNo: this.doNo,
          from: this.from,
          to: this.to,
          fromDate: this.fromDate,
          toDate: this.toDate,
          ton: this.ton,
          price: this.price,
          netTotal: this.ton * this.price + this.ton * this.price * 0.18,
          cashDiesel: this.cashDiesel,
          cashToll: this.cashToll,
          naikTarun: this.naikTarun,
          hp: this.hp,
          allown: this.allown,
          tyre: this.tyre,
          othersRepair: this.othersRepair,
          remarks: this.remarks,
          created: serverTimestamp(),
        });

        console.log("Document written with ID: ", doc.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  async created() {
    const db = getFirestore();

    const driversCollection = await getDocs(collection(db, "drivers"));
    this.drivers = driversCollection.docs.map((doc) => doc.data());

    const vehiclesCollection = await getDocs(collection(db, "vehicles"));
    this.vehicles = vehiclesCollection.docs.map((doc) => doc.data());

    const companiesCollection = await getDocs(collection(db, "companies"));
    this.companies = companiesCollection.docs.map((doc) => doc.data());

    const fromDestination = await getDocs(collection(db, "from-destination"));
    this.fromDestinations = fromDestination.docs.map((doc) => doc.data());

    const toDestination = await getDocs(collection(db, "to-destination"));
    this.toDestinations = toDestination.docs.map((doc) => doc.data());
  },
};
</script>

<style lang="scss" scoped></style>
