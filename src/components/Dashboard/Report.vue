<template>
  <div>
    <!-- SEARCH BOX -->

    <v-form>
      <v-container class="mx-auto mt-6">
        <v-row>
          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="driver"
              :items="drivers"
              item-value="name"
              item-text="name"
              hide-details="auto"
              multiple
              small-chips
              outlined
              dense
              label="Driver"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="vehicle"
              :items="vehicles"
              item-value="name"
              item-text="name"
              hide-details="auto"
              multiple
              small-chips
              outlined
              dense
              label="Vehicle"
            ></v-autocomplete>
          </v-col>

          <v-btn dark elevation="0" class="my-auto" @click="searchHandle">
            Search
          </v-btn>
          <v-btn dark elevation="0" class="ml-4 my-auto"> Export Excel </v-btn>
        </v-row>
      </v-container>
    </v-form>

    <div class="d-flex justify-end mx-12 mt-1">
      <div class="d-flex align-center">
        <p class="mb-0 mx-auto para mr-4">Search:</p>
        <v-text-field v-model="search"></v-text-field>
      </div>
    </div>

    <!-- REPORT TABLE -->

    <v-data-table
      :headers="headers"
      :items="reportData"
      :items-per-page="10"
      class="elevation-0"
      :search="search"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.driver }}</td>
          <td>{{ item.vehicle }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.doNo }}</td>
          <td>{{ item.from }}</td>
          <td>{{ item.to }}</td>
          <td>{{ item.fromDate }}</td>
          <td>{{ item.toDate }}</td>
          <td>{{ item.ton }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.netTotal }}</td>
          <td>{{ item.cashDiesel }}</td>
          <td>{{ item.cashToll }}</td>
          <td>{{ item.naikTarun }}</td>
          <td>{{ item.hp }}</td>
          <td>{{ item.allown }}</td>
          <td>{{ item.tyre }}</td>
          <td>{{ item.othersRepair }}</td>
          <td>{{ item.remarks }}</td>
        </tr>
      </template>
      <template slot="body.append">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ sumField("ton") }}</td>
          <td>{{ sumField("price") }}</td>
          <td>{{ sumField("netTotal") }}</td>
          <td>{{ sumField("cashDiesel") }}</td>
          <td>{{ sumField("cashToll") }}</td>
          <td>{{ sumField("naikTarun") }}</td>
          <td>{{ sumField("hp") }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
export default {
  data() {
    return {
      driver: [],
      vehicle: [],
      drivers: [],
      vehicles: [],
      search: "",
      select: 15,
      items: [5, 10, 15, 25, 50],
      page: 1,
      totalPage: 0,
      totalData: 0,
      reportData: [],
      headers: [
        { text: "Driver", value: "driver" },
        { text: "Vehicle No.", value: "vehicle" },
        { text: "Company", value: "company" },
        { text: "DO No.", value: "doNo" },
        { text: "From", value: "from" },
        { text: "To", value: "to" },
        { text: "From Date", value: "fromDate" },
        { text: "To Date", value: "toDate" },
        { text: "Ton", value: "ton" },
        { text: "Price", value: "price" },
        { text: "Net Total * 18%", value: "netTotal" },
        { text: "Cash Diesel", value: "cashDiesel" },
        { text: "Cash Toll", value: "cashToll" },
        { text: "Naik Tarun", value: "naikTarun" },
        { text: "H/P", value: "hp" },
        { text: "Allown", value: "allown" },
        { text: "Tyre", value: "tyre" },
        { text: "Others Repair", value: "othersRepair" },
        { text: "Remarks", value: "remarks" },
      ],
      field1Total: 10,
      field2Total: 70,
    };
  },
  methods: {
    sumField(key) {
        // sum data in give key (property)
        return this.reportData.reduce((a, b) => parseInt(a) + (parseInt(b[key]) || 0), 0)
    },
    deleteReport(id) {
      console.log(id);
      const db = getFirestore();

      deleteDoc(doc(db, "driver-trips", id));
      console.log("deleted");
    },
    async searchHandle() {
      const db = getFirestore();

      const driverTripsRef = collection(db, "driver-trips");

      let q1 = query(driverTripsRef, where("driver", "in", this.driver));
      let q2 = query(driverTripsRef, where("vehicle", "in", this.vehicle));

      // let q1;
      // let q2;

      // if (this.driver.length > 0) {
      //   q1 = query(driverTripsRef, where('driver','in', this.driver));
      // }
      // if (this.vehicle.length > 0) {
      //   q2 = query(driverTripsRef, where('vehicle','in', this.vehicle))
      // }
      // else if (this.vehicle.length > 0 && this.driver.length > 0) {
      //   p.push(where('driver','in', this.driver), where('vehicle','in', this.vehicle))
      // }

      console.log(this.driver, this.vehicle);

      // let q = query(driverTripsRef, ...p);

      let g = await getDocs(q1, q2);
      // console.log(g);
      this.reportData = g.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
  },
  async created() {
    const db = getFirestore();

    let driverTripsRef = collection(db, "driver-trips");
    let q = query(driverTripsRef, orderBy("created", "desc"));

    let g = await getDocs(q);
    let h = await getDocs(driverTripsRef);

    const dataList = g.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    this.reportData = dataList;
    this.totalPage = Math.ceil(h.size / 15);
    this.totalData = h.size;

    // GET DRIVERS & VEHICLES

    const driversCollection = await getDocs(collection(db, "drivers"));
    this.drivers = driversCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const vehiclesCollection = await getDocs(collection(db, "vehicles"));
    this.vehicles = vehiclesCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },
};
</script>

<style lang="sass" scoped>
.min-width
  width: min-content

.para
  height: min-content
</style>
