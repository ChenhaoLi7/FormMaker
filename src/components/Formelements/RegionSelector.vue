<template>
  <div class="region-selector">
    <!-- 省份选择 -->
    <select v-model="selectedProvince" @change="onProvinceChange" class="select-style">
      <option value="">请选择省份</option>
      <option v-for="province in regions" :key="province.name" :value="province.name">
        {{ province.name }}
      </option>
    </select>

    <!-- 城市选择 -->
    <select v-model="selectedCity" @change="onCityChange" class="select-style" v-if="selectedProvince">
      <option value="">请选择城市</option>
      <option v-for="city in cities" :key="city.name" :value="city.name">
        {{ city.name }}
      </option>
    </select>

    <!-- 区域选择 -->
    <select v-model="selectedArea" class="select-style" v-if="selectedCity">
      <option value="">请选择区域</option>
      <option v-for="area in areas" :key="area" :value="area">
        {{ area }}
      </option>
    </select>
  </div>
</template>

<script>
import regionsData from '@/assets/chinaDivision.json';

export default {
  name: 'RegionSelector',
  data() {
    return {
      regions: regionsData,
      selectedProvince: '',
      selectedCity: '',
      selectedArea: '',
      cities: [],
      areas: []
    };
  },
  methods: {
    onProvinceChange() {
      this.cities = this.selectedProvince ? this.regions.find(province => province.name === this.selectedProvince).city : [];
      this.selectedCity = '';
      this.areas = [];
    },
    onCityChange() {
      this.areas = this.selectedCity ? this.cities.find(city => city.name === this.selectedCity).area : [];
      this.selectedArea = '';
    }
  }
};
</script>

<style scoped>
.region-selector {
  display: flex;
  justify-content: space-between;
}

.select-style {
  flex: 1;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #fff;
  -webkit-appearance: none;
  appearance: none;
  font-size: 16px;
}

.select-style:first-child {
  margin-left: 0;
}

.select-style:last-child {
  margin-right: 0;
}
</style>
