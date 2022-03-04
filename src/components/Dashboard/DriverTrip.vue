<template>
  <v-form v-model="valid" class="mt-6">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="driver"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Driver"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="vehicle"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Vehicle"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="company"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Company"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="doNo"
            hide-details="auto"
            outlined
            :rules="rules"
            label="DO NO."
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="from"
            hide-details="auto"
            outlined
            :rules="rules"
            label="From"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="to"
            hide-details="auto"
            outlined
            :rules="rules"
            label="To"
            required
          ></v-text-field>
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
            :return-value.sync="todate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="toDate"
                hide-details="auto"
                label="To Date"
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
                :rules="rules"
                label="Ton"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <p class="mb-1">Rate</p>
              <p class="mb-0">56.00</p>
            </v-col>
            <v-col cols="12" md="4">
              <p class="mb-1">Net Total * 18%</p>
              <p class="mb-0">{{ ton * 56 + ton * 56 * 0.18 }}</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6"></v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="cashDiesel"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Cash Diesel"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="cashToll"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Cash Toll"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="naikTarun"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Naik Tarun"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="hp"
            hide-details="auto"
            outlined
            :rules="rules"
            label="H/P"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="allown"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Allown"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="tyre"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Tyre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="othersRepair"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Others Repair"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="10">
          <v-text-field
            v-model="remarks"
            hide-details="auto"
            outlined
            :rules="rules"
            label="Remarks"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn type="submit" elevation="0" outlined class="mt-5">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    driver: "",
    vehicle: "",
    company: "",
    doNo: "",
    from: "",
    to: "",
    ton: "",
    cashDiesel: "",
    cashToll: "",
    naikTarun: "",
    hp: "",
    allown: "",
    tyre: "",
    othersRepair: "",
    remarks: "",
    rules: [(v) => !!v || "Name is required"],
    fromDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    fromModal: false,
    toModal: false,
  }),
};
</script>

<style lang="scss" scoped>
</style>
