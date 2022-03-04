<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="driver"
              :rules="rules"
              label="Driver"
              hide-details="auto"
              outlined
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="vehicle"
              :rules="rules"
              label="Vehicle"
              hide-details="auto"
              outlined
              required
            ></v-text-field>
          </v-col>

          <v-btn color="error" class="mr-4 my-auto" @click="reset" type="submit"> Search </v-btn>
        </v-row>
      </v-container>
    </v-form>
    <v-simple-table class="mt-12 mx-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Driver</th>
            <th class="text-center">Vehicle No.</th>
            <th class="text-center">Company</th>
            <th class="text-center">DO No.</th>
            <th class="text-center">From</th>
            <th class="text-center">To</th>
            <th class="text-center">From Date</th>
            <th class="text-center">To Date</th>
            <th class="text-center">Ton</th>
            <th class="text-center">Price</th>
            <th class="text-center">Net Total * 18%</th>
            <th class="text-center">Cash Diesel</th>
            <th class="text-center">Cash Toll</th>
            <th class="text-center">Naik Tarun</th>
            <th class="text-center">H/P</th>
            <th class="text-center">Allown</th>
            <th class="text-center">Tyre</th>
            <th class="text-center">Others Repair</th>
            <th class="text-center">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td>{{ item.id }}</td>
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
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      driver: "",
      vehicle: "",
      desserts: [
        {
          id: 1,
          driver: "Driver 1",
          vehicle: "Vehicle 1",
          company: "Company !",
          doNo: "25",
          from: "Destination 1",
          to: "Destination 1",
          fromDate: "1/5/2022",
          toDate: "5/5/2022",
          ton: "435",
          price: "4035",
          netTotal: "435",
          cashDiesel: "258",
          cashToll: "428",
          naikTarun: "52",
          hp: "758",
          allown: "45",
          tyre: "58",
          othersRepair: "428",
          remarks: "75",
        },
        {
          id: 2,
          driver: "Driver 1",
          vehicle: "Vehicle 1",
          company: "Company !",
          doNo: "25",
          from: "Destination 1",
          to: "Destination 1",
          fromDate: "1/5/2022",
          toDate: "5/5/2022",
          ton: "435",
          price: "4035",
          netTotal: "435",
          cashDiesel: "258",
          cashToll: "428",
          naikTarun: "52",
          hp: "758",
          allown: "45",
          tyre: "58",
          othersRepair: "428",
          remarks: "75",
        },
        {
          id: 3,
          driver: "Driver 1",
          vehicle: "Vehicle 1",
          company: "Company !",
          doNo: "25",
          from: "Destination 1",
          to: "Destination 1",
          fromDate: "1/5/2022",
          toDate: "5/5/2022",
          ton: "435",
          price: "4035",
          netTotal: "435",
          cashDiesel: "258",
          cashToll: "428",
          naikTarun: "52",
          hp: "758",
          allown: "45",
          tyre: "58",
          othersRepair: "428",
          remarks: "75",
        },
        {
          id: 4,
          driver: "Driver 1",
          vehicle: "Vehicle 1",
          company: "Company !",
          doNo: "25",
          from: "Destination 1",
          to: "Destination 1",
          fromDate: "1/5/2022",
          toDate: "5/5/2022",
          ton: "435",
          price: "4035",
          netTotal: "435",
          cashDiesel: "258",
          cashToll: "428",
          naikTarun: "52",
          hp: "758",
          allown: "45",
          tyre: "58",
          othersRepair: "428",
          remarks: "75",
        },
        {
          id: 5,
          driver: "Driver 1",
          vehicle: "Vehicle 1",
          company: "Company !",
          doNo: "25",
          from: "Destination 1",
          to: "Destination 1",
          fromDate: "1/5/2022",
          toDate: "5/5/2022",
          ton: "435",
          price: "4035",
          netTotal: "435",
          cashDiesel: "258",
          cashToll: "428",
          naikTarun: "52",
          hp: "758",
          allown: "45",
          tyre: "58",
          othersRepair: "428",
          remarks: "75",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
